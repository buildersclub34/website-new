'use client';

import { AdminNav } from './_components/AdminNav';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSignInPage = pathname === '/admin/signin';

  if (isSignInPage) {
    return children;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64 bg-black border-r-2 border-yellow-500 shadow-neo-yellow">
            <AdminNav />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
          <div className="p-4 md:p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
