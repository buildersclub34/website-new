'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface UseAuthOptions {
  redirectTo?: string;
  redirectIfFound?: boolean;
  requiredRole?: 'USER' | 'EDITOR' | 'ADMIN';
}

export function useAuth({
  redirectTo,
  redirectIfFound = false,
  requiredRole,
}: UseAuthOptions = {}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const isLoading = status === 'loading';
  const isAuthenticated = !!session?.user;
  const hasRequiredRole = requiredRole
    ? session?.user?.role === requiredRole || session?.user?.role === 'ADMIN'
    : true;

  useEffect(() => {
    // If no redirect needed, just return
    if (!redirectTo) return;

    if (
      // If redirectTo is set, redirect if the user is not authenticated
      (redirectTo && !redirectIfFound && !isLoading && !isAuthenticated) ||
      // If redirectIfFound is set, redirect if the user is authenticated
      (redirectIfFound && isAuthenticated) ||
      // If requiredRole is set, redirect if the user doesn't have the required role
      (requiredRole && isAuthenticated && !hasRequiredRole)
    ) {
      router.push(redirectTo);
    }
  }, [
    redirectTo,
    redirectIfFound,
    isAuthenticated,
    isLoading,
    router,
    requiredRole,
    hasRequiredRole,
  ]);

  return {
    session,
    isLoading,
    isAuthenticated,
    hasRequiredRole,
    user: session?.user,
  };
}
