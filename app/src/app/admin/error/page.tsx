'use client';

import { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Wrapper component that uses useSearchParams
function ErrorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams?.get('error');

  useEffect(() => {
    // If there's no error, redirect to sign in
    if (!error) {
      router.push('/admin/signin');
    }
  }, [error, router]);

  const errorMessage = error === 'CredentialsSignin' 
    ? 'Invalid email or password. Please try again.'
    : 'An error occurred during sign in. Please try again.';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30">
            <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
            Authentication Error
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {errorMessage}
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => router.push('/admin/signin')}
            className="px-4 py-2"
          >
            Return to Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function AuthErrorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    }>
      <ErrorContent />
    </Suspense>
  );
}
