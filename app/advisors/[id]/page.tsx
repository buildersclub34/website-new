'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import type { Advisor } from '@/data/advisors';
import { advisors as existingAdvisors } from '@/data/advisors';
import { newAdvisors } from '@/data/new-advisors';

// Combine both advisor lists
const advisors = [...existingAdvisors, ...newAdvisors];
import AdvisorClient from './AdvisorClient';

export default function AdvisorPage() {
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

    // Simulate API call with a slight delay
    const timer = setTimeout(() => {
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
        setLoading(false);
      } catch (err) {
        console.error('Error loading advisor:', err);
        setError('Failed to load advisor data');
        setLoading(false);
      }
    }, 200); // Small delay for better UX

    return () => clearTimeout(timer);
  }, [params?.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-800 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-800 rounded w-48 mb-2"></div>
          <div className="h-4 bg-gray-800 rounded w-32"></div>
        </div>
      </div>
    );
  }

  if (error || !advisor) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center p-4 text-center">
        <div className="text-red-500 mb-6 text-xl">{error || 'Advisor not found'}</div>
        <button
          onClick={() => router.push('/advisors')}
          className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Advisors
        </button>
      </div>
    );
  }

  return <AdvisorClient advisorId={advisor.id} initialData={advisor} />;
}
