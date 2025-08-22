'use client';

import { Mail, ArrowUp, Twitter, Linkedin, Instagram, Youtube, Github, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NeoPopButton from '@/components/ui/NeoPopButton';
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
    <footer className="relative bg-black text-white py-16 overflow-hidden border-t-2 border-yellow-500/20">
      {/* NeoPop Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500/5 rounded-full filter blur-3xl floating"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-500/5 rounded-full filter blur-3xl floating" style={{ animationDelay: '2s' }}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-400/10 rounded-full filter blur-2xl"></div>
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-yellow-400/5 rounded-full filter blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
                <a 
                  href="mailto:partner@thebuildersclub.me" 
                  className="group flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  partner@thebuildersclub.me
                </a>
                
                {/* Social Media Links */}
                <div className="flex space-x-4 pt-2">
                  {[
                    { icon: Twitter, url: 'https://twitter.com/buildersclubhq', label: 'Twitter' },
                    { icon: Linkedin, url: 'https://linkedin.com/company/buildersclubhq', label: 'LinkedIn' },
                    { icon: Instagram, url: 'https://instagram.com/buildersclubhq', label: 'Instagram' },
                    { icon: Youtube, url: 'https://youtube.com/buildersclub', label: 'YouTube' },
                    { icon: Github, url: 'https://github.com/buildersclub', label: 'GitHub' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-black/30 border-2 border-yellow-400/20 rounded-xl shadow-[4px_4px_0_0_rgba(212,160,23,0.3)] hover:shadow-[6px_6px_0_0_rgba(212,160,23,0.4)] transition-shadow duration-300">
                <h4 className="text-yellow-400 font-bold mb-2 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WE ARE FREE, BUT CURATED
                </h4>
                <p className="text-gray-300 text-sm mb-3">
                  We are a free community for all builders, but only allow the right folks in.
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  Fill up the form, and you shall be approved if you fit the club profile.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/join">
                    <NeoPopButton 
                      className="text-sm px-6 py-2 whitespace-nowrap"
                      size="sm"
                    >
                      JOIN THE CLUB
                    </NeoPopButton>
                  </Link>
                  <Link href="/events">
                    <NeoPopButton 
                      className="text-sm px-6 py-2 whitespace-nowrap"
                      size="sm"
                      variant="secondary"
                    >
                      UPCOMING EVENTS
                    </NeoPopButton>
                  </Link>
                  <Link href="/partnerships">
                    <NeoPopButton 
                      className="text-sm px-6 py-2 whitespace-nowrap"
                      size="sm"
                      variant="secondary"
                    >
                      CORPORATE PARTNERSHIPS
                    </NeoPopButton>
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Navigation</span>
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', link: '/' },
                  { name: 'The Builders Circle', link: '/circle' },
                  { name: 'For Corporates', link: '/corporates' },
                  { name: 'Discovery Calls', link: '/discovery-calls' },
                  { name: 'Fundraising', link: '/fundraising' },
                  { name: 'Events', link: '/events' },
                  { name: 'Content', link: '/content' },
                  { name: 'Blog', link: '/blogs' },
                  { name: 'Advisors', link: '/advisors' },
                  { name: 'Partners', link: '/partners' },
                  { name: 'Summit', link: '/summit' },
                  { name: 'Builders Club', link: '/builders-circle' },
                ].map((item, index) => (
                  <li key={index} className="group">
                    <Link 
                      href={item.link}
                      className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors text-base group-hover:translate-x-1 duration-200"
                    >
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Legal</span>
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Privacy Policy', link: '/privacy-policy' },
                  { name: 'Terms & Conditions', link: '/terms-conditions' },
                  { name: 'Cookie Policy', link: '/cookie-policy' }
                ].map((item, index) => (
                  <li key={index} className="group">
                    <Link 
                      href={item.link}
                      className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors text-base group-hover:translate-x-1 duration-200"
                    >
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-yellow-500/20">
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm">
                <span className="text-gray-400 whitespace-nowrap">
                  &copy; {new Date().getFullYear()} Builders Club. All rights reserved
                </span>
                <span className="text-gray-400 hidden sm:inline">|</span>
                <span className="text-gray-400 whitespace-nowrap">
                  Designed and Developed by{' '}
                  <a 
                    href="https://www.warpvision.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-yellow-400 hover:underline"
                  >
                    Warp Vision
                  </a>
                </span>
                <span className="text-gray-400 hidden sm:inline">|</span>
                <div className="flex items-center space-x-4">
                  {[
                    { name: 'Privacy Policy', link: '/privacy-policy' },
                    { name: 'Terms', link: '/terms-conditions' },
                    { name: 'Cookies', link: '/cookie-policy' },
                  ].map((item, index) => (
                    <span key={item.name} className="flex items-center">
                      <Link 
                        href={item.link}
                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group whitespace-nowrap"
                      >
                        {item.name}
                        <span className="inline-block ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                      </Link>
                      {index < 2 && <span className="ml-4 text-gray-400 hidden sm:inline">•</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Back to top button */}
            <div className="mt-8 flex justify-center">
              <NeoPopButton
                onClick={scrollToTop}
                variant="secondary"
                size="default"
                className="group hover:-translate-y-0.5 hover:translate-x-0.5 transition-transform duration-200"
                aria-label="Back to top"
              >
                <span className="mr-2">Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </NeoPopButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}