'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ArrowRight, Calendar, MapPin, Users, Clock } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import NeoPopButton from '@/components/ui/NeoPopButton';
import Image from 'next/image';

const initiatives = [
  {
    id: 1,
    title: 'Building in Tech Conference: AI, Infra & Insight',
    description: 'Join us for a day of learning and networking with industry leaders in AI and infrastructure.',
    image: 'https://thebuildersclub.me/wp-content/uploads/2025/06/BUILDING-IN-TECH-CONFERENCE.png',
    date: 'June 15, 2025',
    location: 'San Francisco, CA',
    attendees: '500+',
    duration: '1 Day',
    category: 'Conference'
  },
  {
    id: 2,
    title: 'Revolutionize Your Sales Process with AI',
    description: 'Exclusive workshop by The Builders Club & Lyzr.ai on building AI sales assistants.',
    image: 'https://thebuildersclub.me/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-19-at-17.21.03_e3af7361.jpg',
    date: 'May 30, 2025',
    location: 'Online',
    attendees: '200+',
    duration: '3 Hours',
    category: 'Workshop'
  },
  {
    id: 3,
    title: 'Evening in Tech: AI Edition',
    description: 'A night of networking and discussions about the future of AI in business.',
    image: 'https://thebuildersclub.me/wp-content/uploads/2025/05/Screenshot-2025-05-16-000007.png',
    date: 'May 25, 2025',
    location: 'New York, NY',
    attendees: '150+',
    duration: '4 Hours',
    category: 'Networking'
  },
  {
    id: 4,
    title: 'Meet the Founders: Atlas HRT',
    description: 'Learn how Atlas HRT is redefining HR for modern businesses.',
    image: 'https://thebuildersclub.me/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-30-at-12.40.44.jpeg',
    date: 'June 5, 2025',
    location: 'Austin, TX',
    attendees: '100+',
    duration: '2 Hours',
    category: 'Fireside Chat'
  },
  {
    id: 5,
    title: 'Circle Launch: Delhi & Pune',
    description: 'Join us as we launch our Circle community in Delhi and Pune.',
    image: 'https://thebuildersclub.me/wp-content/uploads/2025/04/Circle-All-1500-x-1500-px.png',
    date: 'June 20, 2025',
    location: 'Delhi & Pune, India',
    attendees: '300+',
    duration: '1 Day',
    category: 'Community Launch'
  },
  {
    id: 6,
    title: 'StartHub Summit 2.0',
    description: 'Partnering with RegisterKaro for the biggest startup event of the year.',
    image: 'https://thebuildersclub.me/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-01-at-18.09.22_1a4cf853-2.jpg',
    date: 'July 10, 2025',
    location: 'Bangalore, India',
    attendees: '1000+',
    duration: '2 Days',
    category: 'Summit'
  },
  {
    id: 7,
    title: 'Dell Entrepreneur Challenge Season 2',
    description: 'Join the challenge to showcase your startup and win amazing prizes.',
    image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/Partners-01.png',
    date: 'August 5, 2025',
    location: 'Global',
    attendees: '2000+',
    duration: '3 Months',
    category: 'Challenge'
  },
  {
    id: 8,
    title: 'Mumbai Tech Week',
    description: 'A week-long celebration of technology and innovation in Mumbai.',
    image: 'https://thebuildersclub.me/wp-content/uploads/2025/03/mtm.jpg',
    date: 'September 10-17, 2025',
    location: 'Mumbai, India',
    attendees: '5000+',
    duration: '7 Days',
    category: 'Conference'
  },
  {
    id: 9,
    title: 'Dubai Fintech Summit',
    description: 'Join us at the Dubai Fintech Summit as we explore the future of finance.',
    image: 'https://thebuildersclub.me/wp-content/uploads/2025/03/Self-Promo.png',
    date: 'May 12-13, 2025',
    location: 'Dubai, UAE',
    attendees: '3000+',
    duration: '2 Days',
    category: 'Summit'
  }
];

export default function PartnerInitiatives() {
  const [visibleItems, setVisibleItems] = useState(6);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Conference', 'Workshop', 'Networking', 'Fireside Chat', 'Community Launch', 'Summit'];

  const filteredInitiatives = useMemo(() => 
    activeFilter === 'All' 
      ? initiatives 
      : initiatives.filter(initiative => initiative.category === activeFilter),
    [activeFilter]
  );

  const visibleInitiatives = useMemo(
    () => filteredInitiatives.slice(0, visibleItems),
    [filteredInitiatives, visibleItems]
  );

  const loadMore = useCallback(() => {
    setVisibleItems(prev => Math.min(prev + 3, filteredInitiatives.length));
  }, [filteredInitiatives.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto mb-16">
          <SectionHeader
            title="Partner"
            highlightedText="Initiatives"
            description="Explore our curated selection of events, workshops, and programs designed to empower and connect the builder community."
            badgeText="Community & Events"
            align="center"
            titleClassName="text-3xl md:text-4xl lg:text-5xl"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <NeoPopButton
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setVisibleItems(6);
              }}
              variant={activeFilter === category ? 'primary' : 'secondary'}
              size="default"
              className={`px-6 py-2 text-sm font-medium ${
                activeFilter === category ? 'bg-yellow-500 text-black' : 'bg-white/5 text-white/80'
              }`}
            >
              {category}
            </NeoPopButton>
          ))}
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleInitiatives.map((initiative) => (
            <div 
              key={initiative.id}
              className="group bg-gradient-to-br from-black/50 to-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-yellow-500/90 text-black text-xs font-bold rounded-full">
                    {initiative.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {initiative.title}
                  </h3>
                </div>
                <div className="relative w-full h-full bg-gray-800">
                  <div className="absolute inset-0">
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={initiative.id <= 3} // Only preload first 3 images
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-purple-500/10 opacity-30"></div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6 line-clamp-2">{initiative.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-400" />
                    {initiative.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                    {initiative.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-2 text-yellow-400" />
                    {initiative.attendees} attendees
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2 text-yellow-400" />
                    {initiative.duration}
                  </div>
                </div>
                <NeoPopButton
                  variant="secondary"
                  size="default"
                  className="w-full justify-center gap-2 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </NeoPopButton>
              </div>
            </div>
          ))}
        </div>

        {visibleItems < filteredInitiatives.length && (
          <div className="text-center">
            <NeoPopButton
              onClick={loadMore}
              variant="secondary"
              size="default"
              className="mx-auto group"
            >
              Load More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </NeoPopButton>
          </div>
        )}
      </div>
    </section>
  );
}
