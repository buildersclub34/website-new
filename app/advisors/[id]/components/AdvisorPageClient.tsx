'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import type { Advisor } from '../../../../data/advisors';
import { advisors } from '../../../../data/advisors';
import AdvisorClient from '../AdvisorClient';
import NeoPopButton from '@/components/ui/NeoPopButton';

export default function AdvisorPageClient() {
  const params = useParams();
  const router = useRouter();
  const [advisor, setAdvisor] = useState<Advisor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const advisorId = params?.id as string;
    
    if (!advisorId) {
      setError('Advisor ID is missing');
      setLoading(false);
      return;
    }

    try {
      const foundAdvisor = advisors.find((advisor: Advisor) => advisor.id === advisorId);
      
      if (!foundAdvisor) {
        setError('Advisor not found');
        setLoading(false);
        return;
      }

      // Generate placeholder data if needed
      const advisorWithPlaceholder = !foundAdvisor.bio 
        ? {
            ...foundAdvisor,
            bio: `Learn more about ${foundAdvisor.name}, ${foundAdvisor.role} at ${foundAdvisor.company}.`,
            experience: [
              `Current: ${foundAdvisor.role} at ${foundAdvisor.company}`,
              `Expertise: ${foundAdvisor.expertise}`
            ],
            education: [
              'Education details not available'
            ]
          }
        : foundAdvisor;

      setAdvisor(advisorWithPlaceholder as Advisor);
    } catch (err) {
      console.error('Error loading advisor:', err);
      setError('Failed to load advisor data');
    } finally {
      setLoading(false);
    }
  }, [params?.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !advisor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{error || 'Advisor not found'}</h1>
          <div className="text-center mt-16 px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Build Something Extraordinary?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Connect with our network of industry experts and get the guidance you need to take your venture to the next level.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 z-10 w-full">
              <NeoPopButton
                as="link"
                href="/advisors/"
                variant="primary"
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
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </NeoPopButton>

              <NeoPopButton
                as="link"
                href="/circle/#join"
                variant="secondary"
                size="lg"
                className="group flex items-center gap-2"
              >
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
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </NeoPopButton>
            </div>
          </div>
          <button
            onClick={() => router.push('/advisors')}
            className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Advisors
          </button>
        </div>
      </div>
    );
  }

  return <AdvisorClient advisorId={advisor.id} initialData={advisor} />;
}
