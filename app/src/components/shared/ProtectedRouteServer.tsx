import { getServerSession } from 'next-auth';
import { notFound, redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import { Session } from 'next-auth';

interface ProtectedRouteWrapperProps {
  children: React.ReactNode;
  requiredRole?: 'USER' | 'EDITOR' | 'ADMIN' | 'BUILDER' | 'INVESTOR';
}

export async function ProtectedRouteServer({ 
  children, 
  requiredRole 
}: ProtectedRouteWrapperProps) {
  const session = await getServerSession(authOptions);
  
  // If no session, redirect to signin
  if (!session) {
    redirect('/auth/signin');
  }

  // Check if user has the required role
  const hasRequiredRole = requiredRole 
    ? session.user.role === requiredRole || 
      (requiredRole === 'EDITOR' && session.user.role === 'ADMIN') ||
      (requiredRole === 'USER' && ['EDITOR', 'ADMIN', 'BUILDER', 'INVESTOR'].includes(session.user.role))
    : true;

  if (!hasRequiredRole) {
    redirect('/unauthorized');
  }

  return <>{children}</>;
}
