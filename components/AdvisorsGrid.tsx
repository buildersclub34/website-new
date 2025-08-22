'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { User, Linkedin, ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';
import { newAdvisors } from '../data/new-advisors';

interface Advisor {
  id: string;
  name: string;
  company: string;
  role: string;
  expertise: string;
  linkedin: string;
  website?: string;
  companyLogo?: string;
  image?: string;
}

const advisors: Advisor[] = [
  ...newAdvisors,
  {
    id: '1',
    name: 'Aakash Sinha',
    company: 'Clazar',
    role: 'Founding Member',
    expertise: 'GTM – US Market, B2B Marketing',
    linkedin: 'https://www.linkedin.com/in/aakash-sinha-34331a66/',
    website: 'https://clazar.io',
    companyLogo: 'https://logo.clearbit.com/clazar.io',
    image: '/Speakers-Advisors-Circle Members/Advisor - Clazar - Aakash.png'
  },
  // Add other advisors from the advisors page here
];

export default function AdvisorsGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  const filteredAdvisors = useMemo(() => {
    if (!searchTerm) return advisors;
    const term = searchTerm.toLowerCase();
    return advisors.filter(
      (advisor) =>
        advisor.name.toLowerCase().includes(term) ||
        advisor.company.toLowerCase().includes(term) ||
        advisor.expertise.toLowerCase().includes(term) ||
        advisor.role.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredAdvisors.length / ITEMS_PER_PAGE);
  const paginatedAdvisors = filteredAdvisors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const getRandomColor = (str: string) => {
    const colors = [
      'bg-pink-500/20 text-pink-400',
      'bg-blue-500/20 text-blue-400',
      'bg-green-500/20 text-green-400',
      'bg-purple-500/20 text-purple-400',
      'bg-yellow-500/20 text-yellow-400',
      'bg-red-500/20 text-red-400',
    ];
    const index = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
    return colors[index];
  };

  return (
    <div className="w-full">
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search advisors by name, company, or expertise..."
            className="w-full pl-12 pr-6 py-3 bg-gray-900/50 border border-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent text-white placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedAdvisors.map((advisor) => {
          const initials = getInitials(advisor.name);
          const colorClass = getRandomColor(advisor.name);
          
          return (
            <div
              key={advisor.id}
              className="group relative aspect-square rounded-2xl overflow-hidden border-2 border-yellow-500/20 hover:border-yellow-400 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 bg-gradient-to-br from-gray-900/80 to-gray-900/50 p-0.5"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Link href={`/advisors/${advisor.id}`} className="absolute inset-0 z-10 w-full h-full" prefetch={true}>
                  <span className="sr-only">View {advisor.name}&#39;s profile</span>
                </Link>

                <div className="relative w-full h-full">
                  {advisor.image ? (
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLDivElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  
                  <div 
                    className={`absolute inset-0 flex items-center justify-center ${colorClass} ${advisor.image ? 'hidden' : 'flex'}`}
                    style={{ backgroundColor: colorClass.split(' ')[0].replace('bg-', '').replace('/20', '') }}
                  >
                    <span className="text-4xl font-bold">{initials}</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-white mb-1">{advisor.name}</h3>
                    <p className="text-yellow-400 text-sm mb-2">{advisor.role} • {advisor.company}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {advisor.expertise.split(',').map((exp, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-2 py-1 bg-gray-800/80 text-gray-300 rounded-full"
                        >
                          {exp.trim()}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      {advisor.linkedin && (
                        <a
                          href={advisor.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-800/80 text-gray-300 hover:bg-yellow-500 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      <Link
                        href={`/advisors/${advisor.id}`}
                        className="ml-auto flex items-center text-yellow-400 hover:text-yellow-300 text-sm font-medium"
                      >
                        View Profile <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <div className="flex items-center space-x-2">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    currentPage === pageNum
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
