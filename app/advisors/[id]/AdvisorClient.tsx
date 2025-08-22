'use client';

import { useRouter } from 'next/navigation';
import { Linkedin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import NeoPopButton from '@/components/ui/NeoPopButton';
import Image from 'next/image';
import { getAdvisorColor } from '@/components/ui/AdvisorCard';
import type { Advisor } from '@/data/advisors';

interface AdvisorClientProps {
  advisorId: string;
  initialData: Advisor;
}

export default function AdvisorClient({ advisorId, initialData }: AdvisorClientProps) {
  const router = useRouter();
  const advisor = initialData;
  
  // If no advisor data is available, show a 404 page
  if (!advisor) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-4">
        <div className="text-red-500 mb-4">Advisor not found</div>
        <button
          onClick={() => router.push('/advisors')}
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Advisors
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/advisors" 
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Advisors
        </Link>
      </div>

      {/* Advisor Profile */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column - Profile */}
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-yellow-400/30 mb-6">
                  <Image 
                    src={advisor.image || '/default-avatar.png'}
                    alt={advisor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLDivElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gray-800 flex items-center justify-center text-4xl font-bold"
                    style={{
                      backgroundColor: getAdvisorColor(advisor.id),
                      display: 'none' // Will be shown if image fails to load
                    }}
                  >
                    {advisor.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                </div>
                
                <h1 className="text-2xl font-bold text-center mb-1">{advisor.name}</h1>
                <p className="text-yellow-400 text-center mb-2">{advisor.role}</p>
                <p className="text-gray-400 text-center mb-6">{advisor.company}</p>
                
                <a 
                  href={advisor.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </div>

              {/* Right Column - Details */}
              <div className="md:w-2/3">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-yellow-400">About</h2>
                  <p className="text-gray-300">{advisor.bio || 'No bio available.'}</p>
                </div>

                {advisor.experience && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-400">Experience</h2>
                    <ul className="space-y-2">
                      {Array.isArray(advisor.experience) && advisor.experience.map((exp: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <span className="text-yellow-400 mr-2">•</span>
                          <span className="text-gray-300">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {advisor.education && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-yellow-400">Education</h2>
                    <ul className="space-y-2">
                      {Array.isArray(advisor.education) && advisor.education.map((edu: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <span className="text-yellow-400 mr-2">•</span>
                          <span className="text-gray-300">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-yellow-400">Areas of Expertise</h2>
                  <div className="flex flex-wrap gap-2">
                    {advisor.expertise.split(', ').map((skill: string, i: number) => (
                      <span 
                        key={i}
                        className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 text-sm rounded-full border border-yellow-500/20"
                      >
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16 px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Build Something Extraordinary?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Connect with our network of industry experts and get the guidance you need to take your venture to the next level.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <NeoPopButton
                  as="link"
                  href="/advisors/"
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  <div className="flex items-center gap-2">
                    <span>Explore All Advisors</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                </NeoPopButton>

                <NeoPopButton
                  as="link"
                  href="/circle/#join"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  <div className="flex items-center gap-2">
                    <span>Become an Advisor</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                </NeoPopButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
