'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Header from './Header';
const Footer = dynamic(() => import('./Footer'), { ssr: false });

// Dynamically import NeoPopStickyButton with no SSR to avoid hydration issues
const NeoPopStickyButton = dynamic(
  () => import('./ui/NeoPopStickyButton').then(mod => mod.default),
  { ssr: false }
);

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
      {!isAdminRoute && (
        <>
          <NeoPopStickyButton 
            href="/join"
            label="Join the Community"
            showAfterScroll={300}
            showNotificationDot={true}
          />
          <Footer />
        </>
      )}
    </>
  );
}
