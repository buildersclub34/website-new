'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import NeoPopButton from '@/components/ui/NeoPopButton';
import { Calendar, MapPin, Clock, Search, Filter, X, ArrowRight, ArrowDown, Rocket } from 'lucide-react';

type EventType = 'workshop' | 'talk' | 'networking' | 'hackathon' | 'conference';

type Event = {
  id: number;
  title: string;
  date: string; // ISO date string (e.g., "2025-07-30")
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

  const [showAllPastEvents, setShowAllPastEvents] = useState(false);

  // Get current date in YYYY-MM-DD format for comparison
  const currentDate = new Date().toISOString().split('T')[0];

  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "AI & Hardware Deepdive: Learnings from China",
      date: "2025-07-26",
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
      date: "2025-08-02",
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
      date: "2025-08-03",
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
      date: "2025-08-10",
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
    },
    {
      id: 5,
      title: "Web3 for Beginners Workshop",
      date: "2025-07-15",
      time: "3:00 PM - 6:00 PM",
      location: "Blockchain Center",
      city: "Bangalore",
      type: "workshop",
      description: "Learn the basics of Web3, blockchain, and smart contracts in this hands-on workshop.",
      image: "/images/events/web3-workshop.jpg",
      isFree: false,
      host: {
        name: "Blockchain Enthusiasts",
        avatar: "/images/avatars/blockchain.jpg"
      }
    },
    {
      id: 6,
      title: "Founder's Fireside Chat",
      date: "2025-07-10",
      time: "7:00 PM - 9:00 PM",
      location: "Startup Hub",
      city: "Delhi",
      type: "talk",
      description: "Hear inspiring stories from successful founders about their entrepreneurial journey.",
      image: "/images/events/founders-chat.jpg",
      isFree: true,
      host: {
        name: "Startup Community",
        avatar: "/images/avatars/startup.jpg"
      }
    }
  ];

  // Add more past events with diverse content
  const pastEvents: Omit<Event, 'id' | 'isSoldOut'>[] = [
    {
      title: "Startup Funding 101",
      date: "2025-06-15",
      time: "4:00 PM - 6:00 PM",
      location: "Innovation Hub",
      city: "Delhi",
      type: "workshop",
      description: "Learn the ins and outs of startup funding from industry experts.",
      image: "/images/events/startup-funding.jpg",
      isFree: true,
      host: {
        name: "Rajesh Kumar",
        avatar: "/images/avatars/rajesh.jpg"
      }
    },
    {
      title: "UX Design Masterclass",
      date: "2025-06-20",
      time: "2:00 PM - 5:00 PM",
      location: "Design Studio",
      city: "Bangalore",
      type: "workshop",
      description: "Advanced techniques in UX design and user research.",
      image: "/images/events/ux-design.jpg",
      isFree: false,
      host: {
        name: "Priya Sharma",
        avatar: "/images/avatars/priya.jpg"
      }
    },
    {
      title: "Blockchain Revolution",
      date: "2025-05-10",
      time: "6:30 PM - 8:30 PM",
      location: "Tech Center",
      city: "Mumbai",
      type: "talk",
      description: "Exploring the future of blockchain technology and its applications.",
      image: "/images/events/blockchain.jpg",
      isFree: true,
      host: {
        name: "Amit Patel",
        avatar: "/images/avatars/amit.jpg"
      }
    },
    {
      title: "Data Science Bootcamp",
      date: "2025-05-05",
      time: "10:00 AM - 4:00 PM",
      location: "Data Lab",
      city: "Hyderabad",
      type: "workshop",
      description: "Hands-on training in data science and machine learning.",
      image: "/images/events/data-science.jpg",
      isFree: false,
      host: {
        name: "Neha Gupta",
        avatar: "/images/avatars/neha.jpg"
      }
    },
    {
      title: "Product Management Workshop",
      date: "2025-04-22",
      time: "3:00 PM - 6:00 PM",
      location: "Product Hub",
      city: "Pune",
      type: "workshop",
      description: "Learn product management from industry leaders.",
      image: "/images/events/product-mgmt.jpg",
      isFree: true,
      host: {
        name: "Rahul Mehta",
        avatar: "/images/avatars/rahul.jpg"
      }
    },
    {
      title: "Digital Marketing Summit",
      date: "2025-04-15",
      time: "9:00 AM - 5:00 PM",
      location: "Convention Center",
      city: "Bangalore",
      type: "conference",
      description: "Latest trends and strategies in digital marketing.",
      image: "/images/events/digital-marketing.jpg",
      isFree: false,
      host: {
        name: "Ananya Reddy",
        avatar: "/images/avatars/ananya.jpg"
      }
    },
    {
      title: "Mobile App Development",
      date: "2025-03-28",
      time: "11:00 AM - 2:00 PM",
      location: "Dev Center",
      city: "Chennai",
      type: "workshop",
      description: "Build cross-platform mobile apps with React Native.",
      image: "/images/events/mobile-dev.jpg",
      isFree: true,
      host: {
        name: "Vikram Singh",
        avatar: "/images/avatars/vikram.jpg"
      }
    },
    {
      title: "Cloud Computing Workshop",
      date: "2025-03-15",
      time: "1:00 PM - 4:00 PM",
      location: "Cloud Center",
      city: "Delhi",
      type: "workshop",
      description: "Master cloud technologies with hands-on labs.",
      image: "/images/events/cloud-computing.jpg",
      isFree: false,
      host: {
        name: "Sanjay Verma",
        avatar: "/images/avatars/sanjay.jpg"
      }
    }
  ];

  // Filter and sort past events, adding back the id based on array index
  const filteredPastEvents = pastEvents
    .map((event, index) => ({
      ...event,
      id: index + 1, // Add id based on array index
      isSoldOut: false // Add default isSoldOut property
    }))
    .filter(event => event.date < currentDate)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Separate events into upcoming and past
  const upcoming = upcomingEvents.filter(event => event.date >= currentDate);
  const pastEventsFiltered = filteredPastEvents as Event[];

  // Filter events based on active filters (for upcoming events)
  const filteredUpcomingEvents = upcoming.filter(event => {
    const matchesCity = activeFilter.city === 'all' || 
      event.city.toLowerCase() === activeFilter.city.toLowerCase();
    
    const matchesType = activeFilter.type === 'all' || 
      event.type === activeFilter.type;
    
    const matchesSearch = event.title.toLowerCase().includes(activeFilter.search.toLowerCase()) ||
      event.description.toLowerCase().includes(activeFilter.search.toLowerCase());
    
    return matchesCity && matchesType && matchesSearch;
  });

  // Update the gallery section to show more cards initially
  const [visiblePastEvents, setVisiblePastEvents] = useState(9);
  const displayedPastEvents = pastEventsFiltered.slice(0, visiblePastEvents);

  // Format date to display as "Month Day, Year" (e.g., "July 15, 2025")
  const formatDisplayDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleClearFilters = () => {
    setActiveFilter({
      city: 'all',
      type: 'all',
      search: ''
    });
  };

  const getRandomStyle = (index: number) => {
    const rotations = ['-rotate-2', 'rotate-1', '-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3'];
    const colors = [
      'bg-yellow-100 border-yellow-300 hover:shadow-yellow-300/50',
      'bg-blue-100 border-blue-300 hover:shadow-blue-300/50',
      'bg-pink-100 border-pink-300 hover:shadow-pink-300/50',
      'bg-green-100 border-green-300 hover:shadow-green-300/50',
      'bg-purple-100 border-purple-300 hover:shadow-purple-300/50',
    ];
    
    return {
      rotation: rotations[index % rotations.length],
      color: colors[index % colors.length]
    };
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="mb-6 z-20">
              <SectionHeader
                title=""
                highlightedText=""
                badgeText="Upcoming Events"
                align="center"
                className="mb-0"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-yellow-400">JOIN</span> <br />
              <span className="text-yellow-400">OUR NEXT</span> <br />
              <span className="text-yellow-400">EVENT</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow builders, learn from industry experts, and grow your network at our exclusive events.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="#upcoming-events" 
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017] px-8 py-3 text-lg inline-flex shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none"
              >
                View Events
              </a>
              <a 
                href="#past-events"
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-transparent hover:bg-[#FFD700]/10 active:bg-[#FFD700]/20 text-[#FFD700] border-[#D4A017] px-8 py-3 text-lg inline-flex items-center gap-2 shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none"
              >
                Past Events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-72 flex-shrink-0">
          <div className="sticky top-24 space-y-6">
            {/* Search */}
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-4 text-white">Search</h3>
              <div className="relative">
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
            </div>

            {/* City Filter */}
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-4 text-white">City</h3>
              <div className="space-y-2">
                {['all', 'Bengaluru', 'Mumbai', 'Hyderabad', 'Bangalore', 'Delhi'].map(city => (
                  <button
                    key={city}
                    onClick={() => setActiveFilter({...activeFilter, city})}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeFilter.city === city
                        ? 'bg-yellow-400 text-black'
                        : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                    }`}
                  >
                    {city === 'all' ? 'All Cities' : city.charAt(0).toUpperCase() + city.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Event Type Filter */}
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-4 text-white">Event Type</h3>
              <div className="space-y-2">
                {['all', 'workshop', 'talk', 'networking', 'hackathon', 'conference'].map(type => (
                  <button
                    key={type}
                    onClick={() => setActiveFilter({...activeFilter, type})}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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

            {/* Clear Filters Button */}
            {(activeFilter.city !== 'all' || activeFilter.type !== 'all' || activeFilter.search) && (
              <button
                onClick={handleClearFilters}
                className="w-full text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center justify-center gap-2 py-2 border border-yellow-400/30 rounded-lg hover:bg-yellow-400/10 transition-colors"
              >
                <X className="h-4 w-4" />
                Clear all filters
              </button>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Upcoming Events Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Upcoming Events
                <span className="ml-2 text-yellow-400">({filteredUpcomingEvents.length})</span>
              </h2>
              
              {/* Mobile filter toggle button (hidden on desktop) */}
              <button 
                onClick={() => document.getElementById('sidebar-filters')?.classList.toggle('hidden')}
                className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-sm font-medium"
              >
                <Filter className="h-4 w-4" />
                Filters
              </button>
            </div>
            
            {/* Events Grid */}
            {filteredUpcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredUpcomingEvents.map((event) => (
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
                          <span className="text-sm">{formatDisplayDate(event.date)}</span>
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
              <div className="text-center py-16 bg-gray-900/50 rounded-xl border border-gray-800">
                <SectionHeader
                  title="No Upcoming"
                  highlightedText="Events Found"
                  badgeText="Empty"
                  description="Check back later for new events or adjust your filters"
                  className="mb-4"
                  align="center"
                />
                <button
                  onClick={handleClearFilters}
                  className="text-yellow-400 hover:text-yellow-300 text-sm font-medium px-4 py-2 border border-yellow-400/30 rounded-lg hover:bg-yellow-400/10 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </section>

          {/* Recent Events Section */}
          {pastEventsFiltered.length > 0 && (
            <section className="mt-16 pt-12 border-t border-gray-800">
              <SectionHeader
                title="Recent"
                highlightedText="Events"
                badgeText="Past"
                description={`${pastEventsFiltered.length} events`}
                className="mb-8"
                align="left"
              />
              
              <div className="space-y-6">
                {pastEventsFiltered.map((event) => (
                  <div 
                    key={event.id}
                    className="group bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-400/30 transition-colors overflow-hidden"
                  >
                    <div className="p-6 md:flex items-start gap-6">
                      <div className="relative h-40 w-full md:w-48 flex-shrink-0 rounded-lg overflow-hidden mb-4 md:mb-0">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                          <span className="text-yellow-400 text-sm font-medium">
                            {formatDisplayDate(event.date)}
                          </span>
                          <span className="hidden sm:block text-gray-500">•</span>
                          <span className="text-gray-400 text-sm">
                            {event.time} • {event.location}, {event.city}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 line-clamp-2">
                          {event.description}
                        </p>
                        
                        <div className="flex items-center pt-3 border-t border-gray-200">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                            <Image
                              src={event.host.avatar}
                              alt={event.host.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm text-gray-300">
                            Hosted by {event.host.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {pastEventsFiltered.length > 3 && (
                <div className="text-center mt-8">
                  <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-sm font-medium transition-colors">
                    Load More Events
                  </button>
                </div>
              )}
            </section>
          )}
        </main>
      </div>

      {/* Past Event Gallery Section */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            title="Past Event"
            highlightedText="Highlights"
            badgeText="Gallery"
            description="Relive our most memorable moments from previous events"
            className="mb-12 text-center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPastEvents.map((event) => (
              <div 
                key={`past-${event.id}`}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 flex flex-col h-full"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {event.isSoldOut && (
                    <div className="absolute top-2 right-2 bg-red-500/90 text-white text-xs font-bold px-2 py-1 rounded">
                      SOLD OUT
                    </div>
                  )}
                  {event.isFree && (
                    <div className="absolute top-2 left-2 bg-green-500/90 text-white text-xs font-bold px-2 py-1 rounded">
                      FREE
                    </div>
                  )}
                </div>
                
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-yellow-400/10 text-yellow-400 text-xs font-medium rounded-full">
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                    {event.isFree && (
                      <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full">
                        Free Entry
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-1.5 text-yellow-400" />
                    <span>{formatDisplayDate(event.date)} • {event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-1.5 text-yellow-400" />
                    <span className="line-clamp-1">{event.location}, {event.city}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center pt-3 mt-auto border-t border-gray-700">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0 border-2 border-yellow-400/50">
                      <Image
                        src={event.host.avatar}
                        alt={event.host.name}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Hosted by</p>
                      <p className="text-sm text-white font-medium">{event.host.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {visiblePastEvents < pastEventsFiltered.length && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setVisiblePastEvents(prev => Math.min(prev + 6, pastEventsFiltered.length))}
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-medium rounded-lg transition-colors duration-200 flex items-center mx-auto"
              >
                Load More Events
                <ArrowDown className="ml-2 w-4 h-4" />
              </button>
            </div>
          )}
        </div>
        
        <div className="absolute -z-10 w-64 h-64 bg-yellow-400/10 rounded-full -top-20 -left-20 blur-3xl"></div>
        <div className="absolute -z-10 w-96 h-96 bg-blue-400/10 rounded-full -bottom-32 -right-32 blur-3xl"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Host Your Own"
            highlightedText="Event"
            badgeText="Become a Host"
            description="Share your knowledge and connect with our community of builders and creators"
            className="mb-8"
            titleClassName="text-4xl md:text-5xl font-bold"
            align="center"
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
