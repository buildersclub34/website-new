'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Spinner } from '@/components/Icons';
import { format } from 'date-fns';

type Membership = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  companyWebsite: string;
  linkedinUrl: string;
  currentProfile: string;
  designation: string;
  industry: string;
  fundingStatus: string;
  fundingAmount: string;
  annualTurnover: string;
  lookingToRaise: boolean;
  currentInvestors: string;
  wantsToVolunteer: boolean;
  location: string;
  otherLocation: string;
  referralSource: string;
  otherReferralSource: string;
  inviteeDetails: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export default function MembershipDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [membership, setMembership] = useState<Membership | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/admin/members');
      return;
    }

    if (session?.user?.role !== 'ADMIN') {
      router.push('/');
      return;
    }

    fetchMembership();
  }, [status, session, params.id]);

  const fetchMembership = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/admin/memberships/${params.id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch membership details');
      }
      
      const data = await response.json();
      setMembership(data);
    } catch (error) {
      console.error('Error fetching membership:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (status: string) => {
    try {
      setIsUpdating(true);
      const response = await fetch(`/api/admin/memberships/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update membership status');
      }

      // Refresh the membership data
      await fetchMembership();
    } catch (error) {
      console.error('Error updating membership status:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner className="h-8 w-8 text-primary animate-spin" />
      </div>
    );
  }

  if (!membership) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Membership Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The requested membership application could not be found.</p>
            <Button 
              className="mt-4" 
              onClick={() => router.push('/admin/members')}
            >
              Back to Memberships
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'REJECTED':
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      case 'PENDING':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const formatEnumValue = (value: string) => {
    return value
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Membership Application</h1>
          <p className="text-muted-foreground">
            Submitted on {format(new Date(membership.createdAt), 'MMM d, yyyy h:mm a')}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            onClick={() => router.push('/admin/members')}
          >
            Back to List
          </Button>
          {membership.status === 'PENDING' && (
            <>
              <Button
                variant="outline"
                className="text-green-600"
                onClick={() => updateStatus('APPROVED')}
                disabled={isUpdating}
              >
                {isUpdating ? 'Approving...' : 'Approve'}
              </Button>
              <Button
                variant="outline"
                className="text-red-600"
                onClick={() => updateStatus('REJECTED')}
                disabled={isUpdating}
              >
                {isUpdating ? 'Rejecting...' : 'Reject'}
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="grid gap-6">
        {/* Status Card */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Application Status</CardTitle>
              {getStatusBadge(membership.status)}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Last updated: {format(new Date(membership.updatedAt), 'MMM d, yyyy h:mm a')}
            </p>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="font-medium">{membership.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{membership.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone Number</p>
              <p className="font-medium">{membership.phoneNumber}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">LinkedIn Profile</p>
              <a 
                href={membership.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Profile</p>
              <p className="font-medium">{formatEnumValue(membership.currentProfile)}</p>
            </div>
          </CardContent>
        </Card>

        {/* Company Information */}
        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Company Name</p>
              <p className="font-medium">{membership.companyName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Designation</p>
              <p className="font-medium">{membership.designation}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Industry</p>
              <p className="font-medium">{membership.industry}</p>
            </div>
            {membership.companyWebsite && (
              <div>
                <p className="text-sm text-muted-foreground">Website</p>
                <a 
                  href={membership.companyWebsite.startsWith('http') ? membership.companyWebsite : `https://${membership.companyWebsite}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline"
                >
                  {membership.companyWebsite}
                </a>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Funding Information */}
        <Card>
          <CardHeader>
            <CardTitle>Funding Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Funding Status</p>
              <p className="font-medium">{formatEnumValue(membership.fundingStatus)}</p>
            </div>
            {membership.fundingAmount && (
              <div>
                <p className="text-sm text-muted-foreground">Funding Amount</p>
                <p className="font-medium">{membership.fundingAmount}</p>
              </div>
            )}
            <div>
              <p className="text-sm text-muted-foreground">Annual Turnover</p>
              <p className="font-medium">{formatEnumValue(membership.annualTurnover)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Looking to Raise Funds?</p>
              <p className="font-medium">{membership.lookingToRaise ? 'Yes' : 'No'}</p>
            </div>
            {membership.currentInvestors && (
              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground">Current Investors</p>
                <p className="font-medium whitespace-pre-line">{membership.currentInvestors}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">
                {membership.location === 'Other_Indian_City' || membership.location === 'Other_Country'
                  ? membership.otherLocation
                  : formatEnumValue(membership.location)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Referred By</p>
              <p className="font-medium">
                {membership.referralSource === 'Other'
                  ? membership.otherReferralSource
                  : formatEnumValue(membership.referralSource)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Interested in Volunteering?</p>
              <p className="font-medium">{membership.wantsToVolunteer ? 'Yes' : 'No'}</p>
            </div>
            {membership.inviteeDetails && (
              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground">Invitee Details</p>
                <p className="font-medium whitespace-pre-line">{membership.inviteeDetails}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
