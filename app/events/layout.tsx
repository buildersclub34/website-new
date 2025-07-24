'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black text-white">
      {children}
    </div>
  );
}
