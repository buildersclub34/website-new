'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin') || false;

  return (
    <>
      {!isAdminRoute && <Header />}
      <main className={`${isAdminRoute ? '' : 'min-h-screen'}`}>
        {children}
      </main>
    </>
  );
}
