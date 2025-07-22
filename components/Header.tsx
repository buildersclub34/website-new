'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && 
          headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'The Builders Circle', link: '/circle' },
    { name: 'Discovery Calls', link: '/discovery-calls' },
    { name: 'Fundraising', link: '/fundraising' },
    { name: 'Events', link: 'https://thebuildersclub.me/events/' },
    { name: 'Content', link: '/content' }
  ];

  return (
    <>
      {/* Test element to verify header is rendering */}
      <div className="fixed top-0 left-0 w-full bg-red-500 text-white text-center py-2 z-50">
        HEADER TEST - VISIBLE IF HEADER IS RENDERING
      </div>
      <header 
        ref={headerRef}
        className={`fixed top-8 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-md bg-black/90 shadow-lg border-b border-yellow-500/20 py-2' 
            : 'backdrop-blur-md bg-black/90 py-3'
        }`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000
        }}
      >
        <div className="container mx-auto px-4 2xl:px-6 relative z-50">
          <nav className="hidden lg:flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex-shrink-0 relative w-40 h-14">
              <a href="/" className="block w-full h-full">
                <Image 
                  src="/images/builders-club-logo.png" 
                  alt="The Builders Club" 
                  fill
                  sizes="160px"
                  className="object-contain"
                  priority
                />
              </a>
            </div>
            
            {/* Navigation items container */}
            <div className="flex-1 flex justify-center px-4">
              <div className="flex items-center space-x-4 2xl:space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`relative text-sm xl:text-base ${pathname === item.link || (item.link !== '/' && pathname.startsWith(item.link)) ? 'text-primary' : 'text-white hover:text-primary'} transition-all duration-300 font-medium px-4 py-2 group`}
                    aria-label={item.name}
                  >
                    {item.name}
                    <span className={`absolute bottom-1 ${pathname === item.link || (item.link !== '/' && pathname.startsWith(item.link)) ? 'w-[calc(100%-1.5rem)] left-3' : 'left-1/2 w-0 group-hover:w-[calc(100%-1.5rem)] group-hover:left-3'} h-0.5 bg-primary transition-all duration-300`}></span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex-shrink-0 relative z-50">
              <a 
                href="https://nas.io/tbc" 
                target="_blank"
                rel="noopener noreferrer"
                className="neopop-btn neopop-primary text-lg relative z-50"
                aria-label="Join The Club"
                style={{
                  position: 'relative',
                  zIndex: 1001,
                  textDecoration: 'none',
                  display: 'inline-block',
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}
              >
                Join The Club
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <a href="/" className="block h-12 w-auto">
              <div className="relative w-40 h-12">
                <Image 
                  src="/images/builders-club-logo.png" 
                  alt="The Builders Club" 
                  fill
                  sizes="160px"
                  className="object-contain"
                  priority
                />
              </div>
            </a>
            <div className="flex items-center">
              <a 
                href="https://nas.io/tbc" 
                target="_blank"
                rel="noopener noreferrer"
                className="neopop-btn neopop-primary text-sm sm:text-base mr-3 relative z-50"
                aria-label="Join"
                style={{
                  position: 'relative',
                  zIndex: 1001,
                  textDecoration: 'none',
                  display: 'inline-block',
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}
              >
                Join
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200 active:scale-95 text-white"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X size={22} className="text-white" />
                ) : (
                  <Menu size={22} className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          ref={menuRef}
          className={`lg:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 pt-20 px-4 transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col space-y-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://nas.io/tbc" 
              target="_blank"
              rel="noopener noreferrer"
              className="neopop-btn neopop-primary text-lg w-full text-center mt-2 relative z-50"
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: 'relative',
                zIndex: 1001,
                textDecoration: 'none',
                display: 'inline-block',
                textAlign: 'center',
                whiteSpace: 'nowrap'
              }}
            >
              Join The Club
            </a>
          </nav>
        </div>
      </header>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}