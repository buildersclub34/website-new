import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, FileText, BarChart2 } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Events',
      value: '24',
      icon: Calendar,
      change: '+12%',
      changeType: 'increase',
      href: '/dashboard/events',
    },
    {
      title: 'Total Users',
      value: '1,234',
      icon: Users,
      change: '+5.4%',
      changeType: 'increase',
      href: '/dashboard/users',
    },
    {
      title: 'Blog Posts',
      value: '48',
      icon: FileText,
      change: '-2.3%',
      changeType: 'decrease',
      href: '/dashboard/posts',
    },
    {
      title: 'Page Views',
      value: '12.5k',
      icon: BarChart2,
      change: '+23.1%',
      changeType: 'increase',
      href: '/dashboard/analytics',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your platform today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Link key={i} href={stat.href}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs mt-1 ${
                  stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New user registered</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Create New Event
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Write New Post
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Add New User
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
