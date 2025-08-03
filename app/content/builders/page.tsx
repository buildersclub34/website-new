import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

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
  },
  // Add more builders as needed
];

export const metadata: Metadata = {
  title: 'Builder Profiles | Builders Club',
  description: 'Meet the brilliant minds behind successful startups in our community.',
};

export default function BuildersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-yellow-400">Builders</span>
          </h1>
          <p className="text-xl text-gray-300">
            Discover the brilliant minds behind some of the most innovative startups in our community.
            Learn from their experiences, insights, and journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {builders.map((builder) => (
            <Link 
              href={`/content/builders/${builder.id}`} 
              key={builder.id}
              className="group"
            >
              <div className="h-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
                <div className="relative h-64 bg-gray-800">
                  {/* Placeholder for builder image */}
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400/10 to-transparent flex items-center justify-center">
                    <span className="text-4xl font-bold text-yellow-400/30">
                      {builder.name.split(' ').map(name => name[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-yellow-400 transition-colors">
                    {builder.name}
                  </h3>
                  <p className="text-yellow-400 mb-2">{builder.role}</p>
                  <p className="text-gray-300 mb-3">{builder.company}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{builder.industry}</span>
                    <span className="flex items-center">
                      View Profile <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 border border-yellow-400/30 text-yellow-400 rounded-full">
            <span>More Builders Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}
