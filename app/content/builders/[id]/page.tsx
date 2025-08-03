import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Mock data - replace with actual data fetching
const builderProfiles = {
  'alex-johnson': {
    id: 'alex-johnson',
    name: 'Alex Johnson',
    role: 'CEO & Co-founder',
    company: 'TechStart Inc.',
    bio: 'Serial entrepreneur with 10+ years of experience in building and scaling tech startups. Previously led engineering at multiple YC-backed companies before starting TechStart Inc.',
    industry: 'SaaS, AI',
    location: 'San Francisco, CA',
    website: 'https://techstart.example.com',
    linkedin: 'https://linkedin.com/in/alexjohnson',
    twitter: 'https://twitter.com/alexj',
    image: '/images/builders/alex-johnson.jpg',
    featured: true,
    highlights: [
      'Raised $25M in Series B funding',
      'Featured in TechCrunch and Forbes 30 Under 30',
      'Mentor at Y Combinator'
    ],
    content: [
      {
        type: 'podcast',
        title: 'Scaling from 0 to 1M Users',
        date: '2024-06-15',
        link: '/content/podcasts/scaling-0-to-1m'
      },
      {
        type: 'article',
        title: 'The Future of AI in SaaS',
        date: '2024-05-22',
        link: '/blog/future-of-ai-saas'
      }
    ]
  },
  // Add more builder profiles here
};

// This function tells Next.js which dynamic routes to pre-render at build time
export async function generateStaticParams() {
  // Return an array of all possible builder IDs
  return Object.keys(builderProfiles).map(id => ({
    id,
  }));
}

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const builder = builderProfiles[params.id as keyof typeof builderProfiles];
  if (!builder) return {};
  
  return {
    title: `${builder.name} | Builders Club`,
    description: `${builder.role} at ${builder.company} - ${builder.bio.substring(0, 160)}...`,
    openGraph: {
      images: [builder.image],
    },
  };
}

export default function BuilderProfile({ params }: Params) {
  const builder = builderProfiles[params.id as keyof typeof builderProfiles];
  
  if (!builder) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back button */}
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/content" 
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Content
        </Link>
      </div>

      {/* Profile Header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-yellow-400/30">
              <Image
                src={builder.image}
                alt={builder.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
                priority
              />
            </div>
            
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-400">Company</h4>
                <p className="text-lg font-medium">{builder.company}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-400">Industry</h4>
                <p className="text-lg">{builder.industry}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-400">Location</h4>
                <p className="text-lg">{builder.location}</p>
              </div>
              
              <div className="pt-4 border-t border-gray-800">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Connect</h4>
                <div className="flex space-x-4">
                  {builder.website && (
                    <a 
                      href={builder.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300 transition-colors"
                      aria-label={`Visit ${builder.name}'s website`}
                    >
                      <span className="sr-only">Website</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </a>
                  )}
                  {builder.linkedin && (
                    <a 
                      href={builder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300 transition-colors"
                      aria-label={`Connect with ${builder.name} on LinkedIn`}
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                  {builder.twitter && (
                    <a 
                      href={builder.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300 transition-colors"
                      aria-label={`Follow ${builder.name} on Twitter`}
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="bg-gradient-to-r from-yellow-400/5 to-transparent p-6 rounded-xl border border-yellow-400/20 mb-8">
              <h1 className="text-4xl font-bold mb-2">{builder.name}</h1>
              <p className="text-2xl text-yellow-400 mb-4">{builder.role}</p>
              <p className="text-lg text-gray-300 mb-6">{builder.bio}</p>
              
              {builder.highlights && builder.highlights.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                  <ul className="space-y-2">
                    {builder.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {builder.content && builder.content.length > 0 && (
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Featured Content</h3>
                <div className="space-y-4">
                  {builder.content.map((item, index) => (
                    <a 
                      key={index} 
                      href={item.link}
                      className="block p-4 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-yellow-400 text-sm mb-1">
                            {item.type === 'podcast' ? 'Podcast' : 'Article'}
                          </p>
                          <h4 className="font-medium">{item.title}</h4>
                        </div>
                        <span className="text-gray-400 text-sm">
                          {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
