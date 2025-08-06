import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/dashboard/Sidebar';
import { UserMenu } from '@/components/dashboard/UserMenu';
import { ProtectedRouteWrapper } from '@/components/auth/ProtectedRouteWrapper';
import { Session } from 'next-auth';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <UserMenu />
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </div>
      </main>
    </div>
  </div>
);

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <ProtectedRouteWrapper requiredRole="ADMIN">
      <DashboardContent>
        {children}
      </DashboardContent>
    </ProtectedRouteWrapper>
  );
}
