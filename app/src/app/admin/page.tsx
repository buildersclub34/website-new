'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Spinner } from '@/components/ui/spinner';

export default function AdminPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/admin/signin');
    } else if (status === 'authenticated') {
      router.replace('/admin/dashboard');
    }
  }, [status, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner className="h-8 w-8 animate-spin" />
    </div>
  );
}
