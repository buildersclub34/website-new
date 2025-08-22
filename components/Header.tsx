'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NeoPopButton from './ui/NeoPopButton';

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
    { name: 'Summit', link: '/summit' },
    { name: 'Events', link: '/events' },
    { name: 'Content', link: '/content' },
    { name: 'Partners', link: '/partners' },
    { name: 'For Corporates', link: '/corporates' }
  ];

  return (
    <>
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-md bg-black/95 shadow-lg border-b border-yellow-500/20 py-2' 
            : 'backdrop-blur-md bg-black/95 py-3 md:py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-10 relative z-50">
          <nav className="hidden lg:flex items-center justify-between w-full gap-4">
            {/* Logo */}
            <div className="flex-shrink-0 relative w-36 xl:w-40 h-12 xl:h-14">
              <Link href="/" className="block relative w-full h-full" aria-label="The Builders Club">
                <Image 
                  src="/images/builders-club-logo.png" 
                  alt="The Builders Club" 
                  fill
                  sizes="(max-width: 1536px) 144px, 160px"
                  className="object-contain object-left"
                  priority
                />
              </Link>
            </div>
            
            {/* Navigation items container */}
            <div className="flex-1 flex justify-center">
              <div className="flex items-center justify-center gap-x-2 sm:gap-x-2.5 md:gap-x-3 lg:gap-x-3.5 xl:gap-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`relative text-sm sm:text-[0.92rem] xl:text-[0.95rem] leading-tight whitespace-nowrap ${
                      pathname && (pathname === item.link || (item.link !== '/' && pathname.startsWith(item.link))) 
                        ? 'text-yellow-400' 
                        : 'text-white/90 hover:text-yellow-400/90'
                    } transition-all duration-300 font-medium px-2 sm:px-2.5 py-2 group`}
                    aria-label={item.name}
                    aria-current={pathname === item.link ? 'page' : undefined}
                  >
                    {item.name}
                    <span className={`absolute bottom-1 ${
                      pathname && (pathname === item.link || (item.link !== '/' && pathname.startsWith(item.link))) 
                        ? 'w-[calc(100%-1rem)] left-2' 
                        : 'left-1/2 w-0 group-hover:w-[calc(100%-1rem)] group-hover:left-2'
                    } h-[2px] bg-yellow-400 transition-all duration-300`}></span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex-shrink-0 relative z-50 pl-2">
              <div className="relative z-50">
                <NeoPopButton
                  as="link"
                  href="/auth/signin"
                  variant="primary"
                  size="lg"
                  className="text-sm sm:text-base whitespace-nowrap"
                  aria-label="Join The Club"
                >
                  Join The Club
                </NeoPopButton>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <Link href="/" className="block relative h-10 sm:h-12 w-32 sm:w-40" aria-label="The Builders Club">
              <Image 
                src="/images/builders-club-logo.png" 
                alt="The Builders Club" 
                fill
                sizes="(max-width: 640px) 128px, 160px"
                className="object-contain object-left"
                priority
              />
            </Link>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative z-50">
                <NeoPopButton
                  as="link"
                  href="/auth/signin"
                  variant="primary"
                  size="sm"
                  className="text-xs sm:text-sm px-3 sm:px-4"
                  aria-label="Join"
                >
                  Join
                </NeoPopButton>
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1.5 sm:p-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200 active:scale-95 text-white"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? (
                  <X size={20} className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu size={20} className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            id="mobile-menu"
            ref={menuRef}
            className={`lg:hidden fixed inset-0 z-40 h-screen w-full bg-gray-900 transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            aria-hidden={!isMenuOpen}
          >
            {/* Header with close button */}
            <div className="sticky top-0 z-50 flex items-center justify-between bg-gray-900/95 backdrop-blur-sm px-4 py-3 border-b border-gray-800">
              <div className="relative h-10 w-32">
                <Image 
                  src="/images/builders-club-logo.png" 
                  alt="The Builders Club" 
                  fill
                  sizes="128px"
                  className="object-contain object-left"
                  priority
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-gray-300" />
              </button>
            </div>
            
            {/* Navigation items */}
            <nav className="px-4 py-6 space-y-4 overflow-y-auto h-[calc(100vh-64px)]">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.link}
                    className={`flex items-center justify-between w-full px-5 py-4 text-lg font-medium transition-all duration-200 rounded-xl ${
                      pathname === item.link 
                        ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 shadow-lg shadow-yellow-500/5' 
                        : 'text-gray-200 hover:bg-gray-800/80 border border-transparent hover:border-gray-700/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={pathname === item.link ? 'page' : undefined}
                  >
                    <span>{item.name}</span>
                    <ChevronRight 
                      size={20} 
                      className={`transition-transform duration-200 ${
                        pathname === item.link ? 'text-yellow-400' : 'text-gray-400 group-hover:translate-x-1'
                      }`} 
                    />
                  </a>
                </div>
              ))}
              
              {/* CTA Section */}
              <div className="mt-8 pt-6 border-t border-gray-800/50">
                <NeoPopButton
                  as="button"
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="group text-base py-4"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open('https://nas.io/tbc', '_blank');
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Join The Club
                    <Zap size={18} className="group-hover:animate-pulse flex-shrink-0" />
                  </span>
                </NeoPopButton>
                <div className="mt-4 text-center">
                  <a 
                    href="https://nas.io/tbc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-yellow-400/90 hover:text-yellow-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Already a member? Sign in
                    <ChevronRight size={16} className="ml-1 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </nav>
            
            {/* Bottom gradient overlay */}
            <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Mobile Menu Backdrop */}
          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
          )}
        </div>
      </header>
    </>
  );
}