'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Spinner } from '@/components/Icons';
import MembershipForm from '@/components/membership/MembershipForm';

// Form schema
const membershipFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(10, 'Phone number is required'),
  companyName: z.string().min(1, 'Company name is required'),
  companyWebsite: z.string().url('Invalid URL').or(z.literal('')),
  linkedinUrl: z.string().url('Invalid LinkedIn URL'),
  currentProfile: z.string().min(1, 'Please select your current profile'),
  designation: z.string().min(1, 'Designation is required'),
  industry: z.string().min(1, 'Industry is required'),
  fundingStatus: z.string().min(1, 'Please select funding status'),
  fundingAmount: z.string().optional(),
  annualTurnover: z.string().min(1, 'Please select annual turnover'),
  lookingToRaise: z.boolean(),
  currentInvestors: z.string().optional(),
  wantsToVolunteer: z.boolean(),
  location: z.string().min(1, 'Please select your location'),
  otherLocation: z.string().optional(),
  referralSource: z.string().min(1, 'Please let us know how you heard about us'),
  otherReferralSource: z.string().optional(),
  inviteeDetails: z.string().optional(),
});

type MembershipFormValues = z.infer<typeof membershipFormSchema>;

export default function MembershipPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const form = useForm<MembershipFormValues>({
    resolver: zodResolver(membershipFormSchema),
    defaultValues: {
      name: session?.user?.name || '',
      email: session?.user?.email || '',
      lookingToRaise: false,
      wantsToVolunteer: false,
    },
  });

  const onSubmit = async (data: MembershipFormValues) => {
    try {
      setIsSubmitting(true);
      setError('');

      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          userId: session?.user?.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      router.push('/membership/thank-you');
    } catch (err) {
      console.error('Error submitting application:', err);
      setError('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner className="h-8 w-8 text-primary animate-spin" />
      </div>
    );
  }

  if (status === 'unauthenticated') {
    router.push('/auth/signin?callbackUrl=/membership');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Join The Builders Club</CardTitle>
          <CardDescription>
            Fill out the form below to apply for membership. All fields marked with * are required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          <MembershipForm 
            form={form} 
            onSubmit={onSubmit} 
            isSubmitting={isSubmitting} 
          />
        </CardContent>
      </Card>
    </div>
  );
}
