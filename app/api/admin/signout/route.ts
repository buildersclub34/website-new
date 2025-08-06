import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (session) {
      // Clear the session on the server
      // The actual sign-out will be handled by the client-side signOut function
    }
    
    return NextResponse.json({ 
      success: true,
      redirectTo: '/admin/signin' 
    });
  } catch (error) {
    console.error('Sign out error:', error);
    return NextResponse.json(
      { error: 'An error occurred during sign out' },
      { status: 500 }
    );
  }
}
