'use client';

import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!mounted) {
    return (
      <footer className="relative bg-black text-white py-20 overflow-hidden border-t-2 border-yellow-500/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Skeleton loader */}
            <div className="animate-pulse">
              <div className="h-8 bg-gray-800 rounded w-1/4 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-64 bg-gray-900 rounded-xl"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative bg-black text-white py-20 overflow-hidden border-t-2 border-yellow-500/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500/5 rounded-full filter blur-3xl floating"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-500/5 rounded-full filter blur-3xl floating" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Link href="/" className="inline-block">
                  <Image 
                    src="/images/builders-club-logo.png" 
                    alt="The Builders Club" 
                    width={240} 
                    height={67}
                    className="h-auto w-auto max-h-20 object-contain"
                    priority
                  />
                </Link>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg max-w-md">
                We are one of the largest startup founder communities globally. We help startups in their growth journey with Community, Content and Capital.
              </p>
              
              <div className="space-y-4 mb-8">
                <a href="mailto:partner@thebuildersclub.me" className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                  <Mail className="w-5 h-5 mr-2" />
                  partner@thebuildersclub.me
                </a>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Privacy Policy</a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Terms & Conditions</a>
                </div>
              </div>

              <div className="p-6 bg-black/30 border border-yellow-500/20 rounded-xl">
                <h4 className="text-yellow-400 font-medium mb-2">WE ARE FREE, BUT CURATED</h4>
                <p className="text-gray-300 text-sm mb-4">
                  We are a free community for all builders, but only allow the right folks in.
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  Fill up the form, and you shall be approved if you fit the club profile.
                </p>
                <a 
                  href="#" 
                  className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  JOIN THE CLUB
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Navigation</span>
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', link: '/' },
                  { name: 'The Builders Circle', link: '/circle' },
                  { name: 'Discovery Calls', link: 'https://thebuildersclub.me/discoverycalls/' },
                  { name: 'Fundraising', link: 'https://thebuildersclub.me/fundraising/' },
                  { name: 'Events', link: 'https://thebuildersclub.me/events/' },
                  { name: 'Content', link: 'https://thebuildersclub.me/content/' }
                ].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.link} 
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-300 hover:text-yellow-400 transition-colors text-base"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Resources</span>
                <span className="ml-2 text-yellow-400">→</span>
              </h4>
              <ul className="space-y-3">
                {[
                  'Investment Criteria',
                  'Startup Resources',
                  'Industry Reports',
                  'Founder Toolkit',
                  'Pitch Deck Template',
                  'Developer API'
                ].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group py-2"
                    >
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

{/* Bottom Bar */}
          <div className="pt-12 border-t border-yellow-500/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Builders Club. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300 flex items-center group"
                  >
                    {item}
                    <span className="inline-block ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Back to top button */}
            <div className="mt-8 flex justify-center">
              <button 
                onClick={scrollToTop}
                className="flex items-center text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
                aria-label="Back to top"
              >
                <span className="mr-2">Back to top</span>
                <div className="w-8 h-8 rounded-full border-2 border-yellow-500/30 flex items-center justify-center group-hover:bg-yellow-500/10 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up">
                    <path d="m5 12 7-7 7 7"/>
                    <path d="M12 19V5"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}