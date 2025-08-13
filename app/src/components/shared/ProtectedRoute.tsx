'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'USER' | 'EDITOR' | 'ADMIN' | 'BUILDER' | 'INVESTOR';
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    // If no session, redirect to signin
    if (!session) {
      router.push('/auth/signin');
      return;
    }

    // Check if user has the required role
    if (requiredRole) {
      const hasRequiredRole = 
        session.user.role === requiredRole || 
        (requiredRole === 'EDITOR' && session.user.role === 'ADMIN') ||
        (requiredRole === 'USER' && ['EDITOR', 'ADMIN', 'BUILDER', 'INVESTOR'].includes(session.user.role));
      
      if (!hasRequiredRole) {
        router.push('/unauthorized');
      }
    }
  }, [session, status, requiredRole, router]);

  if (status === 'loading' || !session) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
}
