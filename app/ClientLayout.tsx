'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Toaster } from '@/components/ui/toaster';

// Dynamically import Header and Footer with SSR disabled
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any attributes added by browser extensions
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Remove cz-shortcut-listen attribute if it exists
      document.body.removeAttribute('cz-shortcut-listen');
      
      // Clean up any other extension-added attributes if needed
      const body = document.body;
      const attrs = body.attributes;
      
      // Convert NamedNodeMap to array for safer iteration
      const attrArray = Array.from(attrs);
      
      attrArray.forEach(attr => {
        // Remove any non-standard attributes added by extensions
        if (attr.name.startsWith('_') || 
            attr.name.startsWith('data-') || 
            (attr.name.includes('-') && !attr.name.startsWith('data-'))) {
          body.removeAttribute(attr.name);
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black"></div>
      <Header />
      <main className="flex-1 pt-24 relative z-10"> 
        <div className="relative z-10">
          {children}
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
