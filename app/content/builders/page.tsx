'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, X, Filter } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

// Mock data - replace with actual data fetching
const builders = [
  {
    id: 'alex-johnson',
    name: 'Alex Johnson',
    role: 'CEO & Co-founder',
    company: 'TechStart Inc.',
    industry: 'SaaS, AI',
    location: 'San Francisco, CA',
    image: '/images/builders/alex-johnson.jpg',
    featured: true,
    expertise: ['AI', 'SaaS', 'Startups'],
  },
  {
    id: 'sarah-williams',
    name: 'Sarah Williams',
    role: 'CTO',
    company: 'DataForge AI',
    industry: 'Machine Learning',
    location: 'New York, NY',
    image: '/images/builders/sarah-williams.jpg',
    featured: true,
    expertise: ['Machine Learning', 'Data Science', 'AI'],
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'BlockChainX',
    industry: 'Web3, Blockchain',
    location: 'Singapore',
    image: '/images/builders/michael-chen.jpg',
    featured: true,
    expertise: ['Blockchain', 'Web3', 'DeFi'],
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'Product Lead',
    company: 'FinTech Solutions',
    industry: 'Fintech',
    location: 'Bangalore, India',
    image: '/images/builders/priya-sharma.jpg',
    featured: true,
    expertise: ['Product Management', 'Fintech', 'UX'],
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    role: 'Engineering Manager',
    company: 'CloudScale',
    industry: 'Cloud Computing',
    location: 'Seattle, WA',
    image: '/images/builders/david-kim.jpg',
    featured: true,
    expertise: ['Cloud', 'DevOps', 'Scalability'],
  },
  {
    id: 'maria-garcia',
    name: 'Maria Garcia',
    role: 'Growth Lead',
    company: 'GrowthHack',
    industry: 'Marketing',
    location: 'Austin, TX',
    image: '/images/builders/maria-garcia.jpg',
    featured: true,
    expertise: ['Growth', 'Marketing', 'Acquisition'],
  },
];

// Extract all unique industries for filtering
const allIndustries = Array.from(new Set(builders.map(builder => builder.industry)));
const allExpertise = Array.from(new Set(builders.flatMap(builder => builder.expertise)));

function BuildersPageClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedExpertise, setSelectedExpertise] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredBuilders = builders.filter(builder => {
    const matchesSearch = builder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         builder.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         builder.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = selectedIndustry === 'all' || builder.industry === selectedIndustry;
    const matchesExpertise = selectedExpertise === 'all' || builder.expertise.includes(selectedExpertise);
    
    return matchesSearch && matchesIndustry && matchesExpertise;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedIndustry('all');
    setSelectedExpertise('all');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionHeader
            title="Meet Our"
            highlightedText="Builders"
            description="Discover the brilliant minds behind some of the most innovative startups in our community."
            badgeText="Community"
            align="center"
            className="mb-12"
          />
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search builders by name, company, or expertise..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-white" />
                </button>
              )}
            </div>
            
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center text-sm text-gray-300 hover:text-white"
              >
                <Filter className="w-4 h-4 mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
              
              {(searchTerm || selectedIndustry !== 'all' || selectedExpertise !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-yellow-400 hover:text-yellow-300 flex items-center"
                >
                  <X className="w-4 h-4 mr-1" /> Clear all filters
                </button>
              )}
            </div>
            
            {showFilters && (
              <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <option value="all">All Industries</option>
                      {allIndustries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Expertise</label>
                    <select
                      value={selectedExpertise}
                      onChange={(e) => setSelectedExpertise(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <option value="all">All Expertise</option>
                      {allExpertise.map((expertise) => (
                        <option key={expertise} value={expertise}>{expertise}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {filteredBuilders.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredBuilders.map((builder) => (
                <Link 
                  href={`/content/builders/${builder.id}`} 
                  key={builder.id}
                  className="group transform transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
                    <div className="relative h-64 bg-gray-800">
                      <div className="w-full h-full bg-gradient-to-br from-yellow-400/10 to-transparent flex items-center justify-center overflow-hidden">
                        {builder.image ? (
                          <Image 
                            src={builder.image} 
                            alt={builder.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                            priority={false}
                          />
                        ) : (
                          <span className="text-4xl font-bold text-yellow-400/30">
                            {builder.name.split(' ').map(name => name[0]).join('')}
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex items-center space-x-2 flex-wrap">
                          {builder.expertise.slice(0, 2).map((skill) => (
                            <span key={skill} className="text-xs bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                          {builder.expertise.length > 2 && (
                            <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full">
                              +{builder.expertise.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-yellow-400 transition-colors">
                        {builder.name}
                      </h3>
                      <p className="text-yellow-400 text-sm mb-2">{builder.role}</p>
                      <p className="text-gray-300 text-sm mb-3">{builder.company}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span className="inline-flex items-center">
                          <svg className="w-3 h-3 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {builder.location}
                        </span>
                        <span className="flex items-center text-yellow-400 group-hover:translate-x-1 transition-transform">
                          View Profile <ArrowRight className="w-3 h-3 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredBuilders.length < builders.length && (
              <div className="text-center">
                <div className="inline-flex items-center px-6 py-3 border border-yellow-400/30 text-yellow-400 rounded-full">
                  <span>Showing {filteredBuilders.length} of {builders.length} Builders</span>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-gray-900/30 rounded-xl border border-gray-800">
            <div className="max-w-md mx-auto
            ">
              <h3 className="text-xl font-medium text-gray-300 mb-3">No builders found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 rounded-lg hover:bg-yellow-400/20 transition-colors text-sm font-medium"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BuildersPage() {
  return <BuildersPageClient />;
}
