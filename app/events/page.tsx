'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import NeoPopButton from '@/components/ui/NeoPopButton';
import { Calendar, MapPin, Clock, Search, Filter, X } from 'lucide-react';

type EventType = 'workshop' | 'talk' | 'networking' | 'hackathon';

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  city: string;
  description: string;
  image: string;
  type: EventType;
  isSoldOut?: boolean;
  isFree: boolean;
  host: {
    name: string;
    avatar: string;
  };
};

type FilterOptions = {
  city: string;
  type: string;
  search: string;
};



const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOptions>({
    city: 'all',
    type: 'all',
    search: ''
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "AI & Hardware Deepdive: Learnings from China",
      date: "Sat, Jul 26",
      time: "6:00 PM - 8:00 PM",
      location: "Tech Hub",
      city: "Bengaluru",
      type: "talk",
      description: "Join us for an insightful session on AI and hardware innovations from the Chinese market.",
      image: "/images/events/ai-hardware.jpg",
      isSoldOut: true,
      isFree: false,
      host: {
        name: "Aachman Maheshwari",
        avatar: "/images/avatars/aachman.jpg"
      }
    },
    {
      id: 2,
      title: "To Move Abroad or Not?",
      date: "Sat, Aug 2",
      time: "5:00 PM - 7:00 PM",
      location: "Innovation Center",
      city: "Mumbai",
      type: "networking",
      description: "A candid discussion on the pros and cons of moving abroad for tech professionals.",
      image: "/images/events/abroad.jpg",
      isFree: true,
      host: {
        name: "Nupur Dave",
        avatar: "/images/avatars/nupur.jpg"
      }
    },
    {
      id: 3,
      title: "Build a CRM with AI",
      date: "Sun, Aug 3",
      time: "11:00 AM - 1:00 PM",
      location: "DevSpace",
      city: "Hyderabad",
      type: "workshop",
      description: "Hands-on workshop on building an AI-powered CRM from scratch.",
      image: "/images/events/ai-crm.jpg",
      isFree: false,
      host: {
        name: "Shreya Jayant",
        avatar: "/images/avatars/shreya.jpg"
      }
    },
    {
      id: 4,
      title: "Web3 Hackathon",
      date: "Sat, Aug 10",
      time: "9:00 AM - 9:00 PM",
      location: "Blockchain Hub",
      city: "Bangalore",
      type: "hackathon",
      description: "24-hour hackathon to build the next big thing in Web3 and blockchain.",
      image: "/images/events/web3-hackathon.jpg",
      isFree: true,
      host: {
        name: "Blockchain Enthusiasts",
        avatar: "/images/avatars/blockchain.jpg"
      }
    }
  ];

  // Get unique cities and types for filters
  const cities = ['all', ...Array.from(new Set(upcomingEvents.map(event => event.city)))];
  const eventTypes = ['all', 'workshop', 'talk', 'networking', 'hackathon'];

  // Filter events based on active filters
  const filteredEvents = upcomingEvents.filter(event => {
    const matchesCity = activeFilter.city === 'all' || 
      event.city.toLowerCase() === activeFilter.city.toLowerCase();
    
    const matchesType = activeFilter.type === 'all' || 
      event.type === activeFilter.type;
    
    const matchesSearch = event.title.toLowerCase().includes(activeFilter.search.toLowerCase()) ||
      event.description.toLowerCase().includes(activeFilter.search.toLowerCase());
    
    return matchesCity && matchesType && matchesSearch;
  });

  const handleClearFilters = () => {
    setActiveFilter({
      city: 'all',
      type: 'all',
      search: ''
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Join our community events to learn, network, and grow with industry experts"
            badgeText="BUILDERS CLUB EVENTS"
            gradientText="Events"
            className="mb-12"
            titleClassName="text-5xl md:text-7xl font-bold"
          />
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <NeoPopButton 
              as="button"
              variant="primary"
              size="lg"
              onClick={() => {
                document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View All Events
            </NeoPopButton>
            <NeoPopButton 
              as="link"
              href="/become-host"
              variant="secondary"
              size="lg"
            >
              Become a Host
            </NeoPopButton>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section id="events" className="py-12 px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Upcoming Events
              <span className="ml-2 text-yellow-400">({filteredEvents.length})</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Search Bar */}
              <div className="relative flex-1 md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search events..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  value={activeFilter.search}
                  onChange={(e) => setActiveFilter({...activeFilter, search: e.target.value})}
                />
                {activeFilter.search && (
                  <button
                    onClick={() => setActiveFilter({...activeFilter, search: ''})}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <X className="h-5 w-5 text-gray-400 hover:text-white" />
                  </button>
                )}
              </div>
              
              {/* Filter Toggle Button */}
              <NeoPopButton
                as="button"
                variant="secondary"
                size="default"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
              </NeoPopButton>
            </div>
          </div>
          
          {/* Filter Panel */}
          {isFilterOpen && (
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mb-8 animate-fadeIn">
              <div className="flex flex-col md:flex-row gap-6">
                {/* City Filter */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-300 mb-2">City</label>
                  <div className="flex flex-wrap gap-2">
                    {cities.map(city => (
                      <button
                        key={city}
                        onClick={() => setActiveFilter({...activeFilter, city})}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          activeFilter.city === city
                            ? 'bg-yellow-400 text-black'
                            : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                        }`}
                      >
                        {city.charAt(0).toUpperCase() + city.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Event Type Filter */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Event Type</label>
                  <div className="flex flex-wrap gap-2">
                    {eventTypes.map(type => (
                      <button
                        key={type}
                        onClick={() => setActiveFilter({...activeFilter, type})}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          activeFilter.type === type
                            ? 'bg-yellow-400 text-black'
                            : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                        }`}
                      >
                        {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {(activeFilter.city !== 'all' || activeFilter.type !== 'all' || activeFilter.search) && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleClearFilters}
                    className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1"
                  >
                    <X className="h-4 w-4" />
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
            <div 
              key={event.id} 
              className="relative bg-gray-900 rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image 
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute top-0 left-0 p-3 flex flex-col gap-2">
                  {event.isFree && (
                    <span className="bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      Free
                    </span>
                  )}
                  <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
                {event.isSoldOut && (
                  <div className="absolute top-4 right-4 z-10 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                    Sold Out
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full border-2 border-yellow-400 overflow-hidden flex-shrink-0">
                    <Image 
                      src={event.host.avatar}
                      alt={event.host.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-400 truncate">Hosted by {event.host.name}</p>
                    <p className="text-sm text-yellow-400 font-medium truncate">{event.city}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{event.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3 text-sm">{event.description}</p>
                
                <div className="space-y-3 mt-auto pt-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 flex items-center justify-center text-yellow-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 flex items-center justify-center text-yellow-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300">
                    <div className="w-5 h-5 flex-shrink-0 flex items-start justify-center text-yellow-400 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <NeoPopButton 
                    as="link"
                    href={`/events/${event.id}`}
                    variant={event.isSoldOut ? "secondary" : "primary"}
                    size="lg"
                    fullWidth
                    disabled={event.isSoldOut}
                    className={`${event.isSoldOut ? 'opacity-75 cursor-not-allowed' : ''} mt-auto`}
                  >
                    {event.isSoldOut ? 'Event Full' : 'Register Now'}
                  </NeoPopButton>
                </div>
              </div>
            </div>
          ))}
        </div>
        ) : (
          <div className="text-center py-16">
            <div className="mx-auto h-24 w-24 text-yellow-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">No events found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or filters to find what you&apos;re looking for.</p>
            <NeoPopButton
              as="button"
              variant="secondary"
              size="default"
              onClick={handleClearFilters}
            >
              Clear all filters
            </NeoPopButton>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Host Your Own Event"
            subtitle="Share your knowledge and connect with our community of builders and creators"
            gradientText="Become a Host"
            className="mb-8"
            titleClassName="text-4xl md:text-5xl font-bold"
          />
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re an industry expert, founder, or passionate creator, we&apos;d love to have you host an event with us.
          </p>
          
          <NeoPopButton 
            as="link"
            href="/become-host"
            variant="primary"
            size="lg"
            className="mx-auto"
          >
            Submit Event Proposal
          </NeoPopButton>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
