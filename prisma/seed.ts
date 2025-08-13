import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

// Define Role enum since it's not directly exported from @prisma/client in MongoDB
type Role = 'USER' | 'ADMIN' | 'EDITOR' | 'BUILDER' | 'INVESTOR' | 'PENDING' | 'REJECTED';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function main() {
  console.log('Starting seed...');
  
  // Clear existing data
  await prisma.membership.deleteMany({});
  await prisma.post.deleteMany({});
  await prisma.event.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.tag.deleteMany({});
  await prisma.account.deleteMany({});
  await prisma.session.deleteMany({});
  await prisma.verificationToken.deleteMany({});
  await prisma.user.deleteMany({});

  // Create an admin user
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@example.com';
  const adminPassword = await hash(
    process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123', 
    12
  );

  try {
    // Create admin user
    const admin = await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Admin User',
        password: adminPassword,
        role: 'ADMIN' as const, // Use string literal type
        emailVerified: new Date(),
      },
    });

    console.log('Seeded admin user:', { 
      id: admin.id,
      email: admin.email, 
      role: admin.role,
      createdAt: admin.createdAt
    });

    // Create some sample categories
    const categories = await Promise.all([
      prisma.category.create({
        data: {
          name: 'Technology',
          slug: 'technology',
          createdBy: {
            connect: { id: admin.id }
          }
        },
      }),
      prisma.category.create({
        data: {
          name: 'Business',
          slug: 'business',
          createdBy: {
            connect: { id: admin.id }
          }
        },
      }),
      prisma.category.create({
        data: {
          name: 'Startups',
          slug: 'startups',
          createdBy: {
            connect: { id: admin.id }
          }
        },
      }),
    ]);

    console.log('Created categories:', categories);
    
    return 'Seed completed successfully!';
  } catch (error) {
    console.error('Error during seeding:', error);
    throw error;
  }
}

main()
  .then((message) => {
    console.log(message);
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
