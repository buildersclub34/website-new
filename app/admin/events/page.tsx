'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { Plus, Pencil, Trash2, Calendar, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Event } from '@/types/event';
import { toast } from 'sonner';

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/admin/events');
      if (!response.ok) throw new Error('Failed to fetch events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
      toast.error('Failed to load events');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this event?')) return;
    
    try {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete event');
      
      toast.success('Event deleted successfully');
      fetchEvents(); // Refresh the list
    } catch (error) {
      console.error('Error deleting event:', error);
      toast.error('Failed to delete event');
    }
  };

  const togglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPublished: !currentStatus }),
      });

      if (!response.ok) throw new Error('Failed to update event status');
      
      toast.success(`Event ${currentStatus ? 'unpublished' : 'published'} successfully`);
      fetchEvents(); // Refresh the list
    } catch (error) {
      console.error('Error updating event status:', error);
      toast.error('Failed to update event status');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Events</h1>
          <p className="text-gray-400">Manage your events and create new ones</p>
        </div>
        <Button 
          onClick={() => router.push('/admin/events/new')}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Event
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-400">No events found. Create your first event!</p>
          </div>
        ) : (
          events.map((event) => (
            <Card key={event.id} className="bg-gray-900 border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
              {(event.image || event.imageFile) && (
                <div className="relative aspect-video rounded-t-md overflow-hidden bg-gray-800">
                  <Image
                    src={event.imageFile ? `/uploads/${event.imageFile}` : (event.image || '/placeholder.svg')}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-white">{event.title}</CardTitle>
                  <Badge 
                    variant={event.isPublished ? 'default' : 'outline'}
                    className={`${event.isPublished ? 'bg-green-500' : 'bg-gray-800'} cursor-pointer`}
                    onClick={() => togglePublish(event.id, event.isPublished)}
                  >
                    {event.isPublished ? 'Published' : 'Draft'}
                  </Badge>
                </div>
                <CardDescription className="text-gray-400 line-clamp-2">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-400" />
                    <span>
                      {format(new Date(event.startDate), 'MMM d, yyyy')}
                      {event.endDate && ` - ${format(new Date(event.endDate), 'MMM d, yyyy')}`}
                    </span>
                  </div>
                  {event.location && (
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-end mt-4 space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => router.push(`/admin/events/edit/${event.id}`)}
                    className="text-yellow-400 border-yellow-400 hover:bg-yellow-400/10"
                  >
                    <Pencil className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDelete(event.id)}
                    className="text-red-400 border-red-400 hover:bg-red-400/10"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
