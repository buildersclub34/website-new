import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

// Import the Prisma client type
type Role = 'USER' | 'BUILDER' | 'INVESTOR' | 'EDITOR' | 'ADMIN';

export async function POST(req: Request) {
  try {
    const { name, email, password, role } = await req.json();

    // Validate role
    const validRoles: Role[] = ['USER', 'BUILDER', 'INVESTOR', 'EDITOR', 'ADMIN'];
    if (!validRoles.includes(role as Role)) {
      return NextResponse.json(
        { message: 'Invalid user role' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        role: role as Role,
      },
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { user: userWithoutPassword, message: 'User created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
