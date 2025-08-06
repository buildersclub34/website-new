import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth-app-router';
import { prisma } from '@/lib/prisma';

// Revalidate the data at most every hour
// export const revalidate = 3600;

const jsonResponse = (data: any, status = 200) => {
  return NextResponse.json(data, {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, max-age=0',
    },
  });
};

export async function GET() {
  try {
    // Verify admin authentication
    try {
      await requireAuth('ADMIN');
    } catch (error) {
      return jsonResponse(
        { error: 'Unauthorized', message: 'Authentication required' },
        401
      );
    }

    // Get counts for each status using Prisma's count with where clauses
    const [
      totalMembers,
      pendingApplications,
      approvedMembers,
      rejectedApplications
    ] = await Promise.all([
      prisma.membership.count().catch(() => 0),
      prisma.membership.count({ where: { status: 'PENDING' } }).catch(() => 0),
      prisma.membership.count({ where: { status: 'APPROVED' } }).catch(() => 0),
      prisma.membership.count({ where: { status: 'REJECTED' } }).catch(() => 0)
    ]);

    return jsonResponse({
      success: true,
      data: {
        totalMembers,
        pending: pendingApplications,
        approved: approvedMembers,
        rejected: rejectedApplications,
        lastUpdated: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error in stats API:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const errorStack = process.env.NODE_ENV === 'development' && error instanceof Error 
      ? error.stack 
      : undefined;
    
    return jsonResponse(
      { 
        success: false,
        error: 'Internal server error',
        message: errorMessage,
        ...(errorStack && { stack: errorStack })
      },
      500
    );
  }
}
