import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function requireAuth(req: NextRequest) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  return { session };
}

export async function requireAdmin(req: NextRequest) {
  const auth = await requireAuth(req);
  
  if (auth instanceof NextResponse) {
    return auth;
  }

  const { session } = auth;

  // Check if user has admin role
  if (session.user.role !== 'ADMIN') {
    return NextResponse.json(
      { error: 'Forbidden' },
      { status: 403 }
    );
  }

  return { session };
}
