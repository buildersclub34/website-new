'use client';

import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Users, Clock, CheckCircle, XCircle, Activity, ArrowRight, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

type Stats = {
  totalMembers: number;
  pending: number;
  approved: number;
  rejected: number;
};

function StatsCard({
  title,
  value,
  description,
  icon,
  variant = 'default',
}: {
  title: string;
  value: number;
  description: string;
  icon: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive';
}) {
  const variantClasses = {
    default: 'bg-card text-card-foreground border-border',
    primary: 'bg-yellow-500 text-black border-yellow-600 shadow-neo-yellow',
    success: 'bg-green-500 text-white border-green-600 shadow-neo-green',
    warning: 'bg-amber-400 text-black border-amber-500 shadow-neo-amber',
    destructive: 'bg-red-500 text-white border-red-600 shadow-neo-red',
  };

  const iconClasses = {
    default: 'text-muted-foreground',
    primary: 'text-black',
    success: 'text-white',
    warning: 'text-black',
    destructive: 'text-white',
  };

  return (
    <Card className={cn(
      'h-full border-2 transition-all hover:-translate-y-1 hover:shadow-neo hover:shadow-yellow-400/30',
      variantClasses[variant]
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={cn("p-2 rounded-full bg-black/10", iconClasses[variant])}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-black">{value.toLocaleString()}</div>
        <p className="text-sm mt-1 font-medium opacity-90">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function AdminDashboard() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/admin/signin?callbackUrl=/admin/dashboard');
    },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<Stats>({
    totalMembers: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        console.log('Fetching stats from /api/admin/stats...');
        const response = await fetch('/api/admin/stats', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Important for sending cookies
        });
        
        const responseText = await response.text();
        console.log('Raw response:', {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          body: responseText,
        });
        
        if (!response.ok) {
          console.error('API Error:', response.status, responseText);
          throw new Error(`Failed to fetch stats: ${response.status} ${response.statusText}`);
        }
        
        let data;
        try {
          data = JSON.parse(responseText);
        } catch (e) {
          console.error('JSON Parse Error:', e, 'Response text:', responseText);
          throw new Error('Invalid JSON response from server');
        }
        
        console.log('Parsed data:', data);
        setStats(data.data || data);
      } catch (error) {
        console.error('Error fetching stats:', error);
        toast.error(error instanceof Error ? error.message : 'Failed to load dashboard statistics');
      } finally {
        setIsLoading(false);
      }
    };

    if (status === 'authenticated') {
      if (session.user.role !== 'ADMIN') {
        router.push('/');
        return;
      }
      fetchStats();
    }
  }, [status, session, router]);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      if (!response.ok) throw new Error('Failed to fetch stats');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
      toast.error('Failed to load dashboard statistics');
    } finally {
      setIsLoading(false);
    }
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <Spinner className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (status !== 'authenticated') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
              Admin Dashboard
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Overview of your platform&apos;s activity and statistics
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Welcome back, <span className="font-bold text-yellow-600 dark:text-yellow-400">{session.user.name}</span>
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={async () => {
                try {
                  await signOut({ 
                    callbackUrl: '/admin/signin',
                    redirect: true
                  });
                } catch (error) {
                  console.error('Sign out error:', error);
                }
              }}
              className="shrink-0 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatsCard
            title="Total Members"
            value={stats.totalMembers}
            description="All time members"
            icon={<Users className="h-5 w-5" />}
            variant="primary"
          />

          <StatsCard
            title="Pending"
            value={stats.pending}
            description="Awaiting review"
            icon={<Clock className="h-5 w-5" />}
            variant="warning"
          />

          <StatsCard
            title="Approved"
            value={stats.approved}
            description="Active members"
            icon={<CheckCircle className="h-5 w-5" />}
            variant="success"
          />

          <StatsCard
            title="Rejected"
            value={stats.rejected}
            description="Not approved"
            icon={<XCircle className="h-5 w-5" />}
            variant="destructive"
          />
        </div>

        {/* Activity Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-black shadow-neo p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                <Activity className="h-6 w-6 text-yellow-500" />
                Recent Activity
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Latest actions and updates on the platform</p>
            </div>
            <Button 
              onClick={() => router.push('/admin/members')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 border-2 border-black shadow-neo hover:shadow-neo-hover transition-all flex items-center gap-2"
            >
              View All Members
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center min-h-[200px]">
            <Activity className="h-12 w-12 text-yellow-400 mb-4 opacity-70" />
            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-1">Activity Feed</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-md">
              Track recent activities, member signups, and system events here. Coming soon with more detailed analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
