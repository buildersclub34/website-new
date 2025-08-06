'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { Session } from 'next-auth';

interface ProtectedRouteClientProps {
  children: ReactNode;
  session: Session | null;
  requiredRole?: 'USER' | 'EDITOR' | 'ADMIN' | 'BUILDER' | 'INVESTOR';
  loadingComponent?: ReactNode;
  unauthorizedComponent?: ReactNode;
  isLoading?: boolean;
  hasRequiredRole: boolean;
}

export function ProtectedRouteClient({
  children,
  session,
  requiredRole,
  loadingComponent,
  unauthorizedComponent,
  isLoading = false,
  hasRequiredRole,
}: ProtectedRouteClientProps) {
  const router = useRouter();

  // Show loading state
  if (isLoading) {
    return loadingComponent || (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-yellow-500" />
      </div>
    );
  }

  // Show unauthorized state
  if (requiredRole && !hasRequiredRole) {
    return (
      unauthorizedComponent || (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <h2 className="font-bold">Access Denied</h2>
            <p>You don&apos;t have permission to view this page.</p>
          </div>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      )
    );
  }

  // If authenticated and has required role, render children
  return <>{children}</>;
}
