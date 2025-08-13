import Sidebar from '@/app/admin/dashboard/_components/Sidebar';
import { UserMenu } from '@/app/admin/dashboard/_components/UserMenu';
import { ProtectedRouteClient as ProtectedRoute } from '@/components/auth/ProtectedRoute';

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

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // In a real app, you would get the session and check the user's role here
  // For now, we'll use placeholder values
  const session = null; // Replace with actual session
  const hasRequiredRole = false; // Replace with actual role check

  return (
    <ProtectedRoute 
      requiredRole="ADMIN"
      session={session}
      hasRequiredRole={hasRequiredRole}
    >
      <DashboardContent>{children}</DashboardContent>
    </ProtectedRoute>
  );
}
