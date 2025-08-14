'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Toaster } from '../components/ui/toaster';

// Dynamically import Header and Footer with SSR disabled
const Header = dynamic(() => import('../components/Header'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

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
    <div className="min-h-screen flex flex-col bg-black text-white text-base md:text-[0.9375rem] lg:text-base">
      {/* Fixed background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black"></div>
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main className="flex-1 pt-16 md:pt-20 lg:pt-24 relative z-10 overflow-x-hidden pb-16 md:pb-0">
        <div className="relative z-10 max-w-[100vw] overflow-hidden">
          {children}
        </div>
      </main>
      
      {/* Sticky Mobile Join Button - Only visible on mobile */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-gradient-to-t from-black/80 to-transparent pt-4 pb-4 px-4 md:hidden">
        <a
          href="https://nas.io/tbc"
          target="_blank"
          rel="noopener noreferrer"
          className={`relative inline-flex items-center justify-center w-full min-w-fit font-bold text-center uppercase tracking-wider whitespace-nowrap
                    bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-2 border-b-4 border-r-4 border-[#D4A017] rounded
                    transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500
                    hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none
                    shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)]
                    px-6 py-3 text-base`}
        >
          <span>Join The Club</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-4 h-4 ml-1.5"
          >
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </a>
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Toast notifications */}
      <Toaster />
      
      {/* Prevent horizontal scroll on mobile */}
      <style jsx global>{`
        html, body {
          max-width: 100%;
          overflow-x: hidden;
        }
        
        /* Improve text rendering */
        body {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Better image handling */
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}
