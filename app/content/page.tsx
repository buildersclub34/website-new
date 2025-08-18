'use client';

import { motion } from 'framer-motion';
import { 
  Mic, 
  Users, 
  MessageSquare, 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  Mail, 
  FileText, 
  Video, 
  Clock, 
  Play, 
  Sparkles,
  Linkedin,
  Twitter,
  ExternalLink
} from 'lucide-react';
import { featuredBuilders } from '@/data/builders';
import VideoSection from '../../components/VideoSection';
import Link from 'next/link';
import Image from 'next/image';
import ClientLayout from '../ClientLayout';
import SectionHeader from '../../components/SectionHeader';
import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import { Checkbox } from '../../components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Separator } from '../../components/ui/separator';
import { Badge } from '../../components/ui/badge';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface ContentCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ size: number }>;
  link?: string;
  linkText?: string;
  children?: React.ReactNode;
  className?: string;
}

const ContentCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  linkText, 
  children, 
  className = '' 
}: ContentCardProps) => (
  <motion.div 
    variants={fadeInUp}
    className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10 h-full ${className}`}
    whileHover={{ y: -5 }}
  >
    <div className="p-1 h-full">
      <div className="bg-gray-900 p-6 rounded-lg h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-yellow-400/10 rounded-lg text-yellow-400">
            <Icon size={24} />
          </div>
          <h3 className="text-2xl font-bold ml-3">{title}</h3>
        </div>
        <p className="text-gray-300 mb-6 flex-grow">{description}</p>
        {children}
        {link && (
          <Link 
            href={link}
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors mt-4"
          >
            {linkText}
            <ArrowRight size={18} className="ml-2" />
          </Link>
        )}
      </div>
    </div>
  </motion.div>
);

interface PodcastCardProps {
  title: string;
  description: string;
  image?: string;
  date: string;
  duration?: string;
  className?: string;
}

const PodcastCard = ({ title, description, date, duration, image, className = '' }: PodcastCardProps) => (
  <motion.div 
    variants={fadeInUp}
    className={`group cursor-pointer ${className}`}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-900/50 border border-gray-800 group-hover:border-yellow-400/30 transition-colors">
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-yellow-400/10 to-transparent flex items-center justify-center">
          <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center text-yellow-400 border-2 border-yellow-400/30">
            <Play className="w-6 h-6" />
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end p-4">
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play className="text-black ml-1 w-5 h-5" />
        </div>
      </div>
      {duration && (
        <div className="absolute top-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-full z-20">
          {duration}
        </div>
      )}
    </div>
    <div className="mt-4">
      <div className="flex items-center text-sm text-gray-400 mb-2">
        <Calendar className="w-4 h-4 mr-1.5" />
        <span>{date}</span>
        {duration && (
          <>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-1.5" />
            <span>{duration}</span>
          </>
        )}
      </div>
      <h4 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
        {title}
      </h4>
      <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
      <div className="mt-3 flex items-center text-yellow-400 text-sm font-medium">
        Listen Now
        <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.div>
);

interface ProfileCardProps {
  name: string;
  role: string;
  company: string;
  image?: string;
  className?: string;
  showDetails?: boolean;
}

const ProfileCard = ({ name, role, company, image, className = '', showDetails = false }: ProfileCardProps) => (
  <motion.div 
    variants={fadeInUp}
    className={`group text-center ${className}`}
    whileHover={showDetails ? { y: -5 } : {}}
    transition={{ duration: 0.3 }}
  >
    <Link href={`/content/builders/${name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-transparent group-hover:border-yellow-400 transition-colors bg-gray-800/50">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-yellow-400/10 to-transparent flex items-center justify-center text-3xl font-bold text-yellow-400/50">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      <h4 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">{name}</h4>
      <p className="text-yellow-400 text-sm">{role}</p>
      <p className="text-gray-400 text-sm">{company}</p>
      
      {showDetails && (
        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="inline-flex items-center text-yellow-400 text-sm font-medium">
            View Profile
            <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      )}
    </Link>
  </motion.div>
);

interface Speaker {
  name: string;
  company: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  timezone: string;
  location: string;
  description: string;
  image: string;
  tags: string[];
  isFeatured: boolean;
  speakers: Speaker[];
  link?: string;  // Made link optional with '?'
}

const EventCard = ({ event }: { event: Event }) => {
  // Ensure we have a valid URL for the Link component
  const eventLink = event.link ? event.link : '/events';
  
  return (
    <motion.div 
      variants={fadeInUp}
      className="group cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/5 ${event.isFeatured ? 'lg:col-span-2' : ''}`}>
        {event.isFeatured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
            Featured
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center text-yellow-400 text-sm mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{event.date}</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-1" />
            <span>{event.time}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
            {event.title}
          </h3>
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </div>
          <p className="text-gray-300 mb-6">{event.description}</p>
          <div className="flex justify-between items-center">
            <Link 
              href={eventLink}
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium group-hover:translate-x-1 transition-transform"
            >
              Learn More
              <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {event.isFeatured && (
              <span className="text-xs bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full">
                Limited Seats
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function ContentPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-6 backdrop-blur-sm z-20">
              <BookOpen className="w-5 h-5 mr-2" />
              EXPLORE CONTENT
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-yellow-400">LEARN</span> <br />
              <span className="text-yellow-400">FROM THE</span> <br />
              <span className="text-yellow-400">BUILDERS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover podcasts, builder profiles, and testimonials from our community of innovative founders and creators.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="#podcasts" 
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017] px-8 py-3 text-lg inline-flex shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none"
              >
                Listen to Podcasts
              </a>
              <Link 
                href="/content/builders"
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-transparent hover:bg-[#FFD700]/10 active:bg-[#FFD700]/20 text-[#FFD700] border-[#D4A017] px-8 py-3 text-lg inline-flex items-center gap-2 shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none"
              >
                View Builder Profiles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Featured Content Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 mb-20"
        >
          {/* Podcasts Card */}
          <motion.div 
            variants={fadeInUp}
            className="relative group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 p-6 hover:shadow-lg hover:shadow-yellow-400/5"
          >
            <div className="absolute top-6 right-6 w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center text-yellow-400">
              <Mic size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Podcasts</h3>
            <p className="text-gray-400 mb-6">Listen to insightful conversations with industry leaders and successful founders about their journey, challenges, and lessons learned.</p>
            
            <div className="space-y-4 mb-6">
              {[
                { 
                  title: "Scaling to $10M ARR: Lessons from the Trenches", 
                  duration: "52 min",
                  date: "AUG 1, 2024"
                },
                { 
                  title: "Raising Your First $1M: Investor Insights", 
                  duration: "45 min",
                  date: "JUL 25, 2024"
                },
                { 
                  title: "Building Remote-First: Culture & Productivity", 
                  duration: "38 min",
                  date: "JUL 18, 2024"
                }
              ].map((item, i) => (
                <div key={i} className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                  <div className="w-2 h-2 mt-2 rounded-full bg-yellow-400 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-white group-hover/item:text-yellow-400 transition-colors truncate">
                      {item.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>{item.date}</span>
                      <span className="mx-2">•</span>
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link 
              href="/content/podcasts"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium group"
            >
              Browse All Episodes
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Resources Card */}
          <motion.div 
            variants={fadeInUp}
            className="relative group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 p-6 hover:shadow-lg hover:shadow-yellow-400/5"
          >
            <div className="absolute top-6 right-6 w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center text-yellow-400">
              <FileText size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Resources</h3>
            <p className="text-gray-400 mb-6">Access our curated collection of templates, guides, and tools to help you build and grow your startup.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 mb-6">
              {[
                { 
                  title: "Pitch Deck Template", 
                  type: "Template",
                  icon: <FileText size={20} />,
                  downloads: "1.2k"
                },
                { 
                  title: "Cap Table 101", 
                  type: "Guide",
                  icon: <BookOpen size={20} />,
                  downloads: "845"
                },
                { 
                  title: "Hiring Playbook", 
                  type: "Playbook",
                  icon: <Users size={20} />,
                  downloads: "1.5k"
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-yellow-400/30 transition-all duration-300 hover:bg-yellow-400/5 group/item"
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center text-yellow-400 mr-3 group-hover/item:bg-yellow-400/20 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white group-hover/item:text-yellow-400 transition-colors truncate">
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-400">{item.type}</span>
                        <span className="text-xs text-yellow-400/70">{item.downloads}+ downloads</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link 
              href="/content/resources"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium group"
            >
              Explore Resources
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Latest Podcasts Section */}
        <motion.section 
          id="podcasts"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 pt-10 scroll-mt-20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Latest <span className="text-yellow-400">Podcasts</span>
              </h2>
              <p className="text-gray-400">Tune in to our latest episodes with industry leaders</p>
            </div>
            <Link 
              href="/content/podcasts"
              className="flex items-center text-yellow-400 hover:text-yellow-300 font-medium mt-4 md:mt-0"
            >
              View All Episodes
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "From Zero to Unicorn: A Founder's Journey",
                description: "In this episode, we sit down with founders who've successfully scaled their startups to unicorn status.",
                date: 'JUL 15, 2024',
                duration: '52 min',
                image: '/images/podcasts/unicorn-journey.jpg'
              },
              {
                title: "The Future of AI in Business",
                description: "Exploring how AI is transforming industries and what it means for startups.",
                date: 'JUL 8, 2024',
                duration: '45 min',
                image: '/images/podcasts/ai-future.jpg'
              },
              {
                title: "Fundraising in 2024: What's Changed?",
                description: "VCs share insights on the current fundraising landscape and how to stand out.",
                date: 'JUL 1, 2024',
                duration: '48 min',
                image: '/images/podcasts/fundraising-2024.jpg'
              },
              {
                title: "Building Remote-First Companies",
                description: "Lessons from companies that have successfully built distributed teams.",
                date: 'JUN 24, 2024',
                duration: '38 min',
                image: '/images/podcasts/remote-first.jpg'
              }
            ].map((podcast, i) => (
              <PodcastCard
                key={i}
                title={podcast.title}
                description={podcast.description}
                date={podcast.date}
                duration={podcast.duration}
                image={podcast.image}
              />
            ))}
          </div>
        </motion.section>


        {/* Events Section */}
        <motion.section 
          id="events"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white_10%,transparent_80%)]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-medium mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  Upcoming Events
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                  Join Our <span className="text-yellow-400">Community Events</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Connect with fellow builders, learn from experts, and grow your network through our curated events and workshops.
                </p>
              </div>
              <Link 
                href="/content/events"
                className="mt-6 md:mt-0 inline-flex items-center px-5 py-2.5 rounded-lg bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 hover:bg-yellow-400/20 transition-colors group"
              >
                View All Events
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  title: "Founder Fireside Chat: Scaling to $10M ARR",
                  date: "AUG 15, 2024",
                  time: "6:00 PM - 8:00 PM",
                  timezone: "EST",
                  location: "Virtual Event",
                  image: "/images/events/founder-chat.jpg",
                  description: "Join us for an intimate conversation with founders who've successfully scaled their startups to $10M+ ARR. Learn their strategies, challenges, and key decisions that led to their success.",
                  tags: ["Startup", "Scaling", "Founder Stories"],
                  isFeatured: true,
                  speakers: [
                    { name: "Alex Johnson", company: "Nexus AI" },
                    { name: "Sarah Chen", company: "BlockForge" }
                  ]
                },
                {
                  id: 2,
                  title: "AI & Machine Learning Workshop",
                  date: "AUG 22, 2024",
                  time: "10:00 AM - 3:00 PM",
                  timezone: "EST",
                  location: "Tech Hub NYC",
                  image: "/images/events/ai-workshop.jpg",
                  description: "Hands-on workshop covering the latest in AI and machine learning. Bring your laptop and get ready to build! All skill levels welcome.",
                  tags: ["AI/ML", "Workshop", "Hands-on"],
                  isFeatured: false,
                  speakers: [
                    { name: "Dr. Michael Chen", company: "AI Research Lab" },
                    { name: "Priya Patel", company: "ML Engineering Lead" }
                  ]
                },
                {
                  id: 3,
                  title: "VC Office Hours with Sequoia",
                  date: "SEP 5, 2024",
                  time: "2:00 PM - 5:00 PM",
                  timezone: "EST",
                  location: "Sequoia Capital Office",
                  image: "/images/events/vc-office-hours.jpg",
                  description: "Exclusive opportunity to pitch your startup and get feedback from Sequoia Capital partners. Limited slots available.",
                  tags: ["Fundraising", "VC", "Pitching"],
                  isFeatured: true,
                  speakers: [
                    { name: "Jamie Lee", company: "Sequoia Capital" },
                    { name: "David Kim", company: "Sequoia Capital" }
                  ],
                  link: "#"
                },
                {
                  id: 4,
                  title: "Pitch Night: Early Stage Startups",
                  date: "AUG 22, 2024",
                  time: "5:30 PM - 9:00 PM",
                  timezone: "PST",
                  location: "The Foundry, San Francisco",
                  image: "/images/events/pitch-night.jpg",
                  description: "Witness the next generation of startups pitch their ideas to a panel of experienced investors. Network with founders, investors, and tech enthusiasts.",
                  tags: ["Pitching", "Networking", "Startups"],
                  isFeatured: false,
                  speakers: [
                    { name: "Taylor Wilson", company: "YC Partner" },
                    { name: "Jordan Lee", company: "A16Z" }
                  ],
                  link: "#"
                },
                {
                  id: 5,
                  title: "AI & The Future of Work",
                  date: "SEP 12, 2024",
                  time: "1:00 PM - 5:00 PM",
                  timezone: "EST",
                  location: "Virtual Event",
                  image: "/images/events/ai-future-work.jpg",
                  description: "Explore how AI is transforming the workplace and what it means for the future of jobs, skills, and productivity.",
                  tags: ["AI", "Future of Work", "Productivity"],
                  isFeatured: false,
                  speakers: [
                    { name: "Dr. Lisa Wong", company: "MIT Media Lab" },
                    { name: "Marcus Chen", company: "OpenAI" }
                  ],
                  link: "#",
                  featured: true
                }
              ].map((event, i) => (
                <EventCard
                  key={i}
                  event={event}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-300 transition-colors"
              >
                View All Events
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

// Use a type assertion to add the getLayout property to the page component
const PageWithLayout = ContentPage as any;
PageWithLayout.getLayout = function getLayout(page: React.ReactNode) {
  return <ClientLayout>{page}</ClientLayout>;
};

export default PageWithLayout;

// Small Play icon component for the podcast card
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
