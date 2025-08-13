import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// Define the request schema
const updateMembershipSchema = z.object({
  status: z.enum(['PENDING', 'APPROVED', 'REJECTED']),
});

interface RouteParams {
  params: { id: string };
}

export async function PATCH(
  request: Request,
  { params }: RouteParams
) {
  try {
    // Verify admin authentication
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validation = updateMembershipSchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse(
        JSON.stringify({ error: 'Invalid request data', details: validation.error.issues }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { status } = validation.data;
    const membershipId = parseInt(params.id, 10);
    if (isNaN(membershipId)) {
      return new NextResponse(
        JSON.stringify({ error: 'Invalid membership ID' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Update the membership status
    const updatedMembership = await prisma.membership.update({
      where: { id: membershipId },
      data: { status },
    });

    // TODO: Send email notification to the user about the status update
    // await sendMembershipStatusUpdate(updatedMembership);

    return NextResponse.json(updatedMembership);
  } catch (error) {
    console.error('Error updating membership status:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function GET(
  request: Request,
  { params }: RouteParams
) {
  try {
    // Verify admin authentication
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const membershipId = parseInt(params.id, 10);
    if (isNaN(membershipId)) {
      return new NextResponse(
        JSON.stringify({ error: 'Invalid membership ID' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const membership = await prisma.membership.findUnique({
      where: { id: membershipId },
    });

    if (!membership) {
      return new NextResponse(
        JSON.stringify({ error: 'Membership not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return NextResponse.json(membership);
  } catch (error) {
    console.error('Error fetching membership details:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
