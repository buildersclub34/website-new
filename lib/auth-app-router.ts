import { authOptions as authConfig } from './auth';
import { getServerSession } from 'next-auth/next';

/**
 * Get the current session in an App Router compatible way
 */
export async function auth() {
  return getServerSession(authConfig);
}

/**
 * Ensure the current user is authenticated and has the required role
 */
export async function requireAuth(requiredRole?: 'ADMIN' | 'EDITOR' | 'USER') {
  const session = await auth();
  
  if (!session) {
    throw new Error('Not authenticated');
  }
  
  if (requiredRole && session.user.role !== requiredRole) {
    throw new Error('Insufficient permissions');
  }
  
  return session;
}
