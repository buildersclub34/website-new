'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, ArrowRight } from 'lucide-react';
import type { Advisor } from '@/data/advisors';

// Generate a consistent color based on advisor ID
export const getAdvisorColor = (id: string): string => {
  const colors = [
    'rgba(234, 179, 8, 0.2)',
    'rgba(59, 130, 246, 0.2)',
    'rgba(168, 85, 247, 0.2)',
    'rgba(16, 185, 129, 0.2)',
    'rgba(239, 68, 68, 0.2)'
  ];
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

interface AdvisorCardProps {
  advisor: Advisor;
  className?: string;
}

export default function AdvisorCard({ advisor, className = '' }: AdvisorCardProps) {
  const advisorColor = getAdvisorColor(advisor.id);
  
  // Convert expertise string to array
  const expertiseArray = typeof advisor.expertise === 'string' 
    ? advisor.expertise.split(',').map(e => e.trim())
    : [];

  // Handle image path normalization
  const getImageUrl = (path: string | undefined): string => {
    if (!path) return '/default-avatar.png';
    
    try {
      // Remove any leading slashes and normalize path
      let normalizedPath = path.replace(/^\/+/, '');
      
      // Handle different path formats
      if (normalizedPath.startsWith('Speakers-Advisors-Circle Members/')) {
        // This is the correct format already
        return `/${normalizedPath}`;
      }
      
      // Try to find a matching file in the directory
      const filename = normalizedPath.split('/').pop() || '';
      if (filename) {
        // Try to find a close match in the actual files
        if (filename.includes('Aakash') && filename.includes('Clazar')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Clazar - Aakash.png';
        } else if (filename.includes('Amar') && filename.includes('Ummat')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Amar Ummat  - Recur.png';
        } else if (filename.includes('Amit') && filename.includes('Ah')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Amit Ah ventures.png';
        } else if (filename.includes('Amit') && filename.includes('Jain')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Amit.png';
        } else if (filename.includes('Aniket') || filename.includes('Limechat')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Aniket - Limechat.png';
        } else if (filename.includes('Ashna') || filename.includes('Gupta')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Ashna Gupta.png';
        } else if (filename.includes('Vinamra') || filename.includes('Brandhero')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Brandhero - Vinamra.png';
        } else if (filename.includes('Praveen') || filename.includes('CBRE')) {
          return '/Speakers-Advisors-Circle Members/Advisor - CBRE  -Praveen.png';
        } else if (filename.includes('Rohit') || filename.includes('Madan') || filename.includes('Incbuddy')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Incbuddy - Rohit Madan.png';
        } else if (filename.includes('Joyce') || filename.includes('Ray')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Joyce Ray.png';
        } else if (filename.includes('Madhusmita') || filename.includes('Leo')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Madhusmita-Leo Capital.png';
        } else if (filename.includes('Murli') || filename.includes('Inflexor')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Murli - Inflexor.png';
        } else if (filename.includes('Parnita') || filename.includes('Boldcare')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Parnita - Boldcare.png';
        } else if (filename.includes('Daanish') || filename.includes('Playo')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Playo - Daanish Suhail.png';
        } else if (filename.includes('Harshit') || filename.includes('Qube')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Qube - Harshit.png';
        } else if (filename.includes('Ravi') || filename.includes('Hyderabad')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Ravi_Hyderabad.png';
        } else if (filename.includes('Rishikesh') || filename.includes('Rapido')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Rishikesh - Rapido.png';
        } else if (filename.includes('Samit') || filename.includes('Signal')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Samit Khanna-Signal Ventures.png';
        } else if (filename.includes('Sandeep') || filename.includes('IncX')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Sandeep Balaji - IncX.png';
        } else if (filename.includes('Shreya') || filename.includes('Anthill')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Shreya - Anthill Ventures.png';
        } else if (filename.includes('Subhash') || filename.includes('Choudhary')) {
          return '/Speakers-Advisors-Circle Members/Advisor - Subhash Choudhary.png';
        }
      }
      
      // If no match found, try the original path
      return `/${normalizedPath}`;
    } catch (e) {
      console.error('Error loading image:', path, e);
      return '/default-avatar.png';
    }
  };

  const imageUrl = getImageUrl(advisor.image);

  return (
    <div className={`group relative aspect-square rounded-2xl overflow-hidden border-2 border-yellow-500/20 hover:border-yellow-400 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 bg-gradient-to-br from-gray-900/80 to-gray-900/50 p-0.5 ${className}`}>
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        <Link 
          href={`/advisors/${advisor.id}`}
          className="absolute inset-0 z-10 w-full h-full"
          prefetch={true}
        >
          <span className="sr-only">View {advisor.name}&apos;s profile</span>
        </Link>
        
        {/* Main Image */}
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={advisor.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLDivElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div 
            className={`w-full h-full bg-gray-800 flex items-center justify-center text-3xl font-bold text-white`}
            style={{ 
              backgroundColor: advisorColor,
              display: 'none' // Will be shown if image fails to load
            }}
          >
            {advisor.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl font-bold text-white mb-1">{advisor.name}</h3>
            <p className="text-yellow-400 text-sm mb-2">{advisor.role}</p>
            
            {/* Company */}
            <div className="mb-4">
              {advisor.website ? (
                <a 
                  href={advisor.website.startsWith('http') ? advisor.website : `https://${advisor.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  {advisor.company}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              ) : (
                <span className="text-gray-300 text-sm">{advisor.company}</span>
              )}
            </div>
            
            {/* Expertise Tags */}
            {expertiseArray.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {expertiseArray.slice(0, 3).map((exp, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-yellow-400/10 text-yellow-400 text-xs rounded-full border border-yellow-400/30"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            )}
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {advisor.linkedin && (
                <a
                  href={advisor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${advisor.name}'s LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              <Link 
                href={`/advisors/${advisor.id}`}
                className="ml-auto text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1 group"
              >
                View Profile
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
