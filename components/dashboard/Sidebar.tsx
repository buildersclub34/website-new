'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  CalendarIcon,
  NewspaperIcon,
  UsersIcon,
  SettingsIcon,
  BarChart2Icon,
  LogOutIcon,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Events', href: '/dashboard/events', icon: CalendarIcon },
  { name: 'Blog Posts', href: '/dashboard/posts', icon: NewspaperIcon },
  { name: 'Users', href: '/dashboard/users', icon: UsersIcon },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart2Icon },
  { name: 'Settings', href: '/dashboard/settings', icon: SettingsIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-xl font-bold text-gray-900">Builders Club</h1>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-yellow-100 text-yellow-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <item.icon
                      className={`mr-3 flex-shrink-0 h-6 w-6 ${
                        isActive ? 'text-yellow-500' : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <div className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div>
                <div className="flex items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      Admin User
                    </p>
                    <form action="/api/auth/signout" method="POST" className="mt-1">
                      <button
                        type="submit"
                        className="flex items-center text-xs font-medium text-gray-500 group-hover:text-gray-700"
                      >
                        <LogOutIcon className="mr-1 h-4 w-4" />
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
