'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import AdminLoginForm from '../_components/AdminLoginForm';
import { Spinner } from '@/components/ui/spinner';

// Component that uses useSearchParams
function SignInForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get('callbackUrl') || '/admin/dashboard';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Builders Club Admin</h1>
          <p className="text-gray-400">Sign in to access the admin dashboard</p>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function AdminSignInPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <Spinner className="w-8 h-8 animate-spin" />
      </div>
    }>
      <SignInForm />
    </Suspense>
  );
}
