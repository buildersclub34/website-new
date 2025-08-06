'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Users, FileText, LogOut, BarChart2, UserPlus, Shield, Calendar } from 'lucide-react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

export function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: BarChart2,
    },
    {
      name: 'Events',
      href: '/admin/events',
      icon: Calendar,
    },
    {
      name: 'Members',
      href: '/admin/members',
      icon: Users,
    },
    {
      name: 'Applications',
      href: '/admin/applications',
      icon: FileText,
    },
    {
      name: 'Add Member',
      href: '/admin/members/new',
      icon: UserPlus,
    },
    {
      name: 'Admin Settings',
      href: '/admin/settings',
      icon: Shield,
    },
  ];

  const handleSignOut = async () => {
    try {
      await signOut({ 
        redirect: false,
        callbackUrl: '/admin/signin'
      });
      router.push('/admin/signin');
      router.refresh();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="flex h-16 items-center justify-center border-b border-yellow-500/20 px-4">
          <Link href="/admin/dashboard" className="flex items-center h-full py-2">
            <div className="relative w-32 h-10 md:w-36 md:h-12">
              <Image 
                src="/images/builders-club-logo.png" 
                alt="The Builders Club" 
                fill
                sizes="(max-width: 768px) 128px, 144px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>
        
        <nav className="space-y-1 p-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
                           (item.href !== '/admin/dashboard' && pathname?.startsWith?.(item.href));
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200',
                  'hover:bg-yellow-500/10 hover:text-yellow-400',
                  isActive
                    ? 'bg-yellow-500/20 text-yellow-400 border-l-4 border-yellow-500 font-bold'
                  : 'text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400',
                )}
              >
                <item.icon
                  className={cn(
                    'h-5 w-5',
                    isActive ? 'text-yellow-400' : 'text-gray-400 group-hover:text-yellow-400',
                    'transition-colors duration-200'
                  )}
                />
                <span>{item.name}</span>
                {isActive && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      
      {/* Bottom section with sign out */}
      <div className="p-4 border-t border-yellow-500/20">
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors duration-200"
        >
          <LogOut className="h-5 w-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}
