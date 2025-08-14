'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from "../../components/ui/lib/utils";

// Partner Card Component
interface PartnerCardProps {
  name: string;
  url: string;
  small?: boolean;
}

const PartnerCard = ({ name, url, small = false }: PartnerCardProps) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`relative group bg-gray-900/50 border-2 border-yellow-500/20 rounded-lg overflow-hidden 
      transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10
      ${small ? 'p-3' : 'p-6'}`}
  >
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      <div className="w-4/5 h-4/5 bg-yellow-500/10 rounded-md flex items-center justify-center">
        <span className="text-xs sm:text-sm text-center text-yellow-400 font-medium">{name}</span>
      </div>
    </div>
    <div className="absolute inset-0 border-2 border-yellow-500/0 group-hover:border-yellow-400/50 rounded-md transition-all duration-300 pointer-events-none"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:to-yellow-500/5 transition-all duration-300"></div>
  </a>
);
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NeoPopButton from "@/components/ui/NeoPopButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin, Rocket, Users, Award, Mic, User, ChevronRight, Image as ImageIcon, Star } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SpeakersSection } from '@/components/SpeakersSection';

// Types
import React from 'react';

interface EventStat {
  number: string;
  label: string;
  icon: () => React.JSX.Element;
}

// Event data
const eventStats: EventStat[] = [
  { 
    number: "500+", 
    label: "Founders",
    icon: () => <Users className="w-6 h-6 text-yellow-400" />
  },
  { 
    number: "100+", 
    label: "Investors",
    icon: () => <Award className="w-6 h-6 text-yellow-400" />
  },
  { 
    number: "50+", 
    label: "CXOs",
    icon: () => <Mic className="w-6 h-6 text-yellow-400" />
  },
  { 
    number: "20+", 
    label: "Speakers",
    icon: () => <User className="w-6 h-6 text-yellow-400" />
  }
];

interface Event {
  id: number;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  link: string;
  categories: string[];
  featured?: boolean;
}

const realEvents: Event[] = [
  {
    id: 1,
    title: "🔥 BUILDING IN TECH CONFERENCE",
    image: "https://thebuildersclub.me/wp-content/uploads/2025/06/Speaker-Reveal.png",
    date: "2025-06-15",
    excerpt: "Join us for the biggest tech conference of the year featuring industry leaders and innovators.",
    link: "https://thebuildersclub.me/announcements/%f0%9f%94%a5building-in-tech-conference/",
    categories: ["Conference", "Tech"],
    featured: true
  },
  {
    id: 2,
    title: "🎉 Bangalore's Most Exclusive B2C Founder Meet-Up 🎉",
    image: "https://thebuildersclub.me/wp-content/uploads/2025/05/1748282668148.jpg",
    date: "2025-05-30",
    excerpt: "An exclusive gathering for B2C founders to network and share insights.",
    link: "https://thebuildersclub.me/announcements/%f0%9f%8e%89bangalores-most-exclusive-b2c-founder-meet-up%f0%9f%8e%89/",
    categories: ["Networking", "B2C"]
  },
  {
    id: 3,
    title: "🚀 Revolutionize Your Sales Process: Build AI Sales Assistants",
    image: "https://thebuildersclub.me/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-19-at-17.21.03_e3af7361.jpg",
    date: "2025-05-19",
    excerpt: "Learn how to leverage AI to transform your sales process in this exclusive workshop.",
    link: "https://thebuildersclub.me/events/%f0%9f%9a%80revolutionize-your-sales-process-build-ai-sales-assistants-in-an-exclusive-workshop-by-the-builders-club-lyzr-ai/",
    categories: ["Workshop", "AI", "Sales"]
  },
  {
    id: 4,
    title: "The Pune Board Room Meeting #Circle",
    image: "https://thebuildersclub.me/wp-content/uploads/2025/04/pune.png",
    date: "2025-04-25",
    excerpt: "Exclusive board room meeting for Pune's top entrepreneurs and investors.",
    link: "https://thebuildersclub.me/announcements/the-pune-board-room-meeting-circle/",
    categories: ["Networking", "Investors"]
  },
  {
    id: 5,
    title: "Upcoming Investor Dates – May 2025 Edition",
    image: "https://thebuildersclub.me/wp-content/uploads/2025/04/UPCOMING-EVENTS.png",
    date: "2025-04-20",
    excerpt: "Don't miss these important investor dates for May 2025.",
    link: "https://thebuildersclub.me/announcements/upcoming-investor-dates-may-2025-edition/",
    categories: ["Investors", "Calendar"]
  },
  {
    id: 6,
    title: "A Date with She Capital Ventures",
    image: "https://thebuildersclub.me/wp-content/uploads/2025/04/she-capital.png",
    date: "2025-04-15",
    excerpt: "Exclusive opportunity to pitch to She Capital Ventures.",
    link: "https://thebuildersclub.me/announcements/a-date-with-she-capital-ventures/",
    categories: ["Pitching", "Investors", "Women Founders"]
  }
];

const highlights: any[] = [
  {
    id: 1,
    title: "How Ariro Toys Benefited from The Great Indian Startup Summit",
    image: "https://thebuildersclub.me/wp-content/uploads/2025/01/image-2.png",
    tag: "Case Study",
    date: "2024-09-20",
    description: "Discover how Ariro Toys leveraged the summit to scale their business and secure funding.",
    link: "/testimonials/how-ariro-toys-benefited-from-the-builders-club",
    featured: true
  },
  {
    id: 2,
    title: "Attendee Testimonials from The Great Indian Startup Summit",
    image: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-11.08.47-AM.jpeg",
    tag: "Testimonials",
    date: "2024-09-19",
    description: "Hear directly from past attendees about their experiences and key takeaways from the event.",
    link: "/events/summit/here-is-what-the-attendees-had-to-say-about-the-great-indian-startup-summit"
  },
  {
    id: 3,
    title: "Keynote: Future of Indian Tech Ecosystem",
    image: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-11.08.43-AM-1.jpeg",
    tag: "Keynote",
    date: "2024-09-21",
    description: "Insights into the evolving landscape of technology and innovation in India.",
    link: "#"
  }
];

interface Panel {
  id: number;
  title: string;
  speaker: string;
  role: string;
  company: string;
  description: string;
  image: string;
  time: string;
  category: string;
  videoLink?: string;
}

const panels: Panel[] = [
  {
    id: 1,
    title: "AI's Impact on Content Creation",
    speaker: "Nivedan Rathi",
    role: "Tech Content Creator",
    company: "TechTalk with Nivedan",
    description: "Exploring how AI is revolutionizing content creation and distribution",
    image: "https://thebuildersclub.me/wp-content/uploads/2025/02/KU4A8430-scaled.jpg",
    time: "11:00 AM - 12:00 PM",
    category: "AI & Tech",
    videoLink: "https://youtube.com/embed/example1"
  },
  {
    id: 2,
    title: "The Future of Electric Vehicles",
    speaker: "Punit Goyal",
    role: "Co-founder",
    company: "Blusmart",
    description: "Insights into the evolving EV industry and sustainable mobility solutions",
    image: "https://thebuildersclub.me/wp-content/uploads/2025/02/KU4A8604-scaled.jpg",
    time: "1:00 PM - 2:00 PM",
    category: "Mobility"
  },
  {
    id: 3,
    title: "D2C Ecosystem Evolution",
    speaker: "Arjun Vaidya",
    role: "Founder",
    company: "Dr. Vaidya's",
    description: "The rise of D2C brands and the future of direct-to-consumer business models",
    image: "https://thebuildersclub.me/wp-content/uploads/2025/02/KU4A8328-1-scaled.jpg",
    time: "3:00 PM - 4:00 PM",
    category: "E-commerce"
  },

];

// Gallery Images
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Sponsors
interface Sponsor {
  id: number;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'partner';
  website: string;
}

// Registration Form State
interface RegistrationForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  message: string;
  ticketType: 'standard' | 'vip' | 'startup';
}

const galleryImages: GalleryImage[] = [
  { 
    id: 1, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-18-at-12.42.56-PM.jpeg", 
    alt: "Keynote session at the summit",
    category: "sessions"
  },
  { 
    id: 2, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-11.08.43-AM-1.jpeg", 
    alt: "Networking at the summit",
    category: "networking"
  },
  { 
    id: 3, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-11.08.43-AM.jpeg", 
    alt: "Panel discussion",
    category: "panels"
  },
  { 
    id: 4, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-11.08.34-AM.jpeg", 
    alt: "Networking session",
    category: "networking"
  },
  { 
    id: 5, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-11.08.36-AM.jpeg", 
    alt: "Workshop in progress",
    category: "workshops"
  },
  { 
    id: 6, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-11.08.35-AM-1.jpeg", 
    alt: "Panel discussion",
    category: "panels"
  },
  { 
    id: 7, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_8d0e5b3a.jpg", 
    alt: "Speaker on stage",
    category: "sessions"
  },
  { 
    id: 8, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_1a6c5a5a.jpg", 
    alt: "Audience engagement",
    category: "sessions"
  },
  { 
    id: 9, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_3a6c5a5a.jpg", 
    alt: "Networking break",
    category: "networking"
  },
  { 
    id: 10, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_4a6c5a5a.jpg", 
    alt: "Keynote speaker",
    category: "sessions"
  },
  { 
    id: 11, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_5a6c5a5a.jpg", 
    alt: "Panel discussion",
    category: "panels"
  },
  { 
    id: 12, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_6a6c5a5a.jpg", 
    alt: "Audience Q&A",
    category: "sessions"
  },
  { 
    id: 13, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_7a6c5a5a.jpg", 
    alt: "Speaker presentation",
    category: "sessions"
  },
  { 
    id: 14, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_8a6c5a5a.jpg", 
    alt: "Networking session",
    category: "networking"
  },
  { 
    id: 15, 
    src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_9a6c5a5a.jpg", 
    alt: "Workshop activity",
    category: "workshops"
  }
];

const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "TechStart",
    logo: "/images/sponsors/techstart.png",
    tier: "platinum",
    website: "https://techstart.example.com"
  },
  {
    id: 2,
    name: "CloudScale",
    logo: "/images/sponsors/cloudscale.png",
    tier: "gold",
    website: "https://cloudscale.example.com"
  },
  {
    id: 3,
    name: "DataForge",
    logo: "/images/sponsors/dataforge.png",
    tier: "silver",
    website: "https://dataforge.example.com"
  },
  {
    id: 4,
    name: "InnovateX",
    logo: "/images/sponsors/innovatex.png",
    tier: "partner",
    website: "https://innovatex.example.com"
  }
];

export default function SummitPage() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<RegistrationForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: '',
    ticketType: 'standard'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Fetch events from API in a real implementation
  useEffect(() => {
    // In a real app, you would fetch this from your API
    // For now, we'll use the static data
    const fetchEvents = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setEvents(realEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const filteredGallery = galleryFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === galleryFilter);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-black via-black to-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Rocket className="w-4 h-4 mr-2" />
              THE GREAT INDIAN TECH SUMMIT & AWARDS 2025
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-yellow-400">WHERE</span> <br className="hidden sm:block" />
              <span className="text-yellow-400">INNOVATION</span> <br className="hidden sm:block" />
              <span className="text-yellow-400">MEETS OPPORTUNITY</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A premier gathering designed to educate, celebrate, and connect the brightest minds in the Indian tech ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <NeoPopButton
                as="link"
                href="/summit/season2"
                variant="primary"
                size="lg"
                className="flex items-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Register Now
              </NeoPopButton>
              <NeoPopButton
                as="link"
                href="/summit/season2"
                variant="secondary"
                size="lg"
              >
                View Schedule
              </NeoPopButton>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center text-yellow-400">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Friday, September 19, 2025</span>
              </div>
              <div className="flex items-center text-yellow-400">
                <Clock className="w-5 h-5 mr-2" />
                <span>10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex items-center text-yellow-400">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative">
        {/* About Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-900/5 to-transparent opacity-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-16">
              <SectionHeader
                title="About The"
                highlightedText="Summit"
                description="The Great Indian Tech Awards & Summit is the premier gathering for the Indian tech ecosystem, bringing together founders, investors, and industry leaders to celebrate innovation, share knowledge, and shape the future of technology in India."
                badgeText="Event"
                align="center"
                titleClassName="text-3xl sm:text-4xl md:text-5xl"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  title: "Vision",
                  description: "To create a platform that recognizes and celebrates excellence in the Indian tech ecosystem.",
                  icon: "👁️"
                },
                {
                  title: "Mission",
                  description: "To foster innovation, collaboration, and growth within the Indian technology sector.",
                  icon: "🎯"
                },
                {
                  title: "Impact",
                  description: "Connecting the brightest minds to drive meaningful change and progress.",
                  icon: "🚀"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-yellow-500/30 transition-colors">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
            
            {/* Events Section */}
            <div className="mb-16">
              <SectionHeader
                title="Upcoming"
                highlightedText="Events"
                description="Join us for our upcoming events and workshops"
                badgeText="Events"
                titleClassName="text-3xl sm:text-4xl"
              />
              
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-80 bg-gray-900/50 rounded-xl animate-pulse"></div>
                  ))}
                </div>
              ) : events.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events.map((event) => (
                    <div key={event.id} className="group">
                      <div className="h-full bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden flex flex-col hover:border-yellow-500/50 transition-colors duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {event.featured && (
                            <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                              Featured
                            </div>
                          )}
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex flex-wrap gap-2">
                              {event.categories.slice(0, 2).map((category, i) => (
                                <span key={i} className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full">
                                  {category}
                                </span>
                              ))}
                              {event.categories.length > 2 && (
                                <span className="inline-block px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                                  +{event.categories.length - 2}
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-gray-400">
                              {new Date(event.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 line-clamp-2">
                            {event.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-300 flex-1 mb-4 sm:mb-6 line-clamp-3">
                            {event.excerpt}
                          </p>
                          <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-800">
                            <a 
                              href={event.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300 w-fit"
                            >
                              Learn more
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400">No upcoming events at the moment. Please check back later!</p>
                </div>
              )}
            </div>

            {/* Key Metrics */}
            <div className="mb-16">
              <SectionHeader
                title="Event"
                highlightedText="Metrics"
                description="Join our growing community of tech leaders and innovators"
                badgeText="By The Numbers"
                titleClassName="text-3xl sm:text-4xl"
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-8">
                <div className="bg-black/50 border border-yellow-400/30 p-6 rounded-lg text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
                  <p className="text-white font-medium">Founders</p>
                </div>
                <div className="bg-black/50 border border-yellow-400/30 p-6 rounded-lg text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">100+</div>
                  <p className="text-white font-medium">Investors</p>
                </div>
                <div className="bg-black/50 border border-yellow-400/30 p-6 rounded-lg text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">50+</div>
                  <p className="text-white font-medium">CXOs</p>
                </div>
                <div className="bg-black/50 border border-yellow-400/30 p-6 rounded-lg text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">20+</div>
                  <p className="text-white font-medium">Speakers</p>
                </div>
              </div>
            </div>

            {/* Speakers Section */}
            <SpeakersSection />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 -right-20 w-60 h-60 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
        </section>

        {/* Featured Sessions */}
        <section className="py-16 bg-gray-900/50 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Featured"
              highlightedText="Sessions"
              description="Experience thought-provoking discussions and keynotes from industry leaders shaping the future of technology."
              badgeText="Sessions"
              titleClassName="text-3xl sm:text-4xl"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {panels.map((panel) => (
                <div key={panel.id} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[16/9] relative">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={panel.image}
                        alt={panel.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-400 rounded-full mb-2">
                        {panel.time}
                      </span>
                      <h3 className="text-xl font-bold text-white">{panel.title}</h3>
                      <p className="text-sm text-gray-300 mt-1">{panel.speaker}, {panel.role} at {panel.company}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">{panel.description}</p>
                    <NeoPopButton size="sm" className="w-full">
                      Learn More
                    </NeoPopButton>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <NeoPopButton variant="secondary" className="px-8 py-3">
                VIEW FULL AGENDA
              </NeoPopButton>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-black relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-900/5 to-transparent opacity-5"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Event"
              highlightedText="Gallery"
              description="Relive the moments from our previous events and get a glimpse of what to expect."
              badgeText="Gallery"
              titleClassName="text-3xl sm:text-4xl"
            />
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button 
                onClick={() => setGalleryFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  galleryFilter === 'all' 
                    ? 'bg-yellow-500 text-black' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All
              </button>
              {['keynote', 'panels', 'networking', 'awards'].map((category) => (
                <button
                  key={category}
                  onClick={() => setGalleryFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    galleryFilter === category
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredGallery.map((image) => (
                <div key={image.id} className="group relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <NeoPopButton variant="secondary" className="px-8 py-3">
                VIEW MORE PHOTOS
              </NeoPopButton>
            </div>
          </div>
        </section>

        {/* Investment Partners Section */}
        <section id="investment-partners" className="py-16 bg-black overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <div className="flex flex-col text-center items-center mb-12">
                <div className="inline-flex items-center px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-medium uppercase tracking-wider mb-4">
                  Network
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Investment Partners</span>
                </h2>
                <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
Trusted by the world&apos;s leading investment firms and venture capitalists
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-0.5">
              {[
                { name: 'Sequoia Capital', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/25-1.png', invert: false },
                { name: 'Y Combinator', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/26-1.png', invert: true },
                { name: 'Andreessen Horowitz', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/27-1.png', invert: false },
                { name: 'Tiger Global', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/28-1.png', invert: true },
                { name: 'Accel', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/31-1.png', invert: false },
                { name: 'Lightspeed Venture Partners', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/32-1.png', invert: true },
                { name: 'Bessemer Venture Partners', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/33-1.png', invert: false },
                { name: 'Benchmark', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/34.png', invert: true },
                { name: 'Kleiner Perkins', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/35.png', invert: false },
                { name: 'Greylock Partners', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/36.png', invert: true },
                { name: 'Bain Capital Ventures', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/37.png', invert: false },
                { name: 'Insight Partners', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/38.png', invert: true },
                { name: 'Index Ventures', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/39.png', invert: false },
                { name: 'Battery Ventures', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/40.png', invert: true },
                { name: 'GGV Capital', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/41.png', invert: false },
                { name: 'Khosla Ventures', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/42.png', invert: true },
                { name: 'General Catalyst', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/43.png', invert: false },
                { name: 'New Enterprise Associates', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/44.png', invert: true },
                { name: 'First Round Capital', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/3.png', invert: false },
                { name: 'Founders Fund', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/5.png', invert: true },
                { name: 'Coatue Management', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/121.png', invert: false },
                { name: 'D1 Capital Partners', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/122.png', invert: true },
                { name: 'T. Rowe Price', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/142.png', invert: false },
                { name: 'Dragoneer Investment Group', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/45.png', invert: true },
                { name: 'Durable Capital Partners', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/46.png', invert: false },
                { name: 'Fidelity Management', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/47.png', invert: true },
                { name: 'BlackRock', image: 'https://thebuildersclub.me/wp-content/uploads/2024/12/48.png', invert: false },
              ].map((partner, index) => (
                <div 
                  key={index}
                  className={`${
                    partner.invert 
                      ? 'bg-black border-gray-800' 
                      : 'bg-gradient-to-br from-[#FFD700] to-[#FFA500] border-[#FFD700] shadow-[0_0_10px_rgba(255,215,0,0.2)]'
                  } border md:border-2 p-1 md:p-2 flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-neon-gold hover:z-10 relative`}
                  style={{ aspectRatio: '1/1' }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className={`object-contain p-1 ${partner.invert ? 'invert' : 'invert-0'}`}
                      sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16.66vw, 12.5vw"
                    />
                  </div>
                  {!partner.invert && (
                    <>
                      <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-black"></div>
                      <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-black"></div>
                      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-black"></div>
                      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-black"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Great Indian Startup Pitch Section */}
        <section id="startup-pitch" className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <div className="flex flex-col text-center items-center mb-12">
                <div className="inline-flex items-center px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-medium uppercase tracking-wider mb-4">
                  Competition
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                  THE GREAT INDIAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">STARTUP PITCH</span>
                </h2>
                <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
                  250+ startups applied to be among the top 10 startups pitching in front of 100+ Investors
                </p>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                'https://thebuildersclub.me/wp-content/uploads/2024/09/KU4A8572-1024x683.jpg',
                'https://thebuildersclub.me/wp-content/uploads/2024/09/KU4A8558-1024x683.jpg',
                'https://thebuildersclub.me/wp-content/uploads/2024/09/KU4A8545-1024x683.jpg',
                'https://thebuildersclub.me/wp-content/uploads/2024/09/KU4A8520-1024x683.jpg',
                'https://thebuildersclub.me/wp-content/uploads/2024/09/KU4A8519-1024x683.jpg',
                'https://thebuildersclub.me/wp-content/uploads/2024/09/KU4A8518-1024x683.jpg',
                'https://thebuildersclub.me/wp-content/uploads/2024/09/KU4A8513-1024x683.jpg',
                'https://thebuildersclub.me/wp-content/uploads/2024/09/KU4A8510-1024x683.jpg',
              ].map((src, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg border-2 border-yellow-500/30 hover:border-yellow-400 transition-colors group">
                  <Image
                    src={src}
                    alt={`Startup pitch event ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Finalists Section */}
            <div className="max-w-4xl mx-auto bg-gray-900/50 border border-yellow-500/30 rounded-xl p-6 mb-12">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Top 10 Finalists</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Ariro Toys',
                  'Find Your Kicks India Private Limited',
                  'The Folding Company',
                  'Prodancy Pvt Ltd',
                  'WinHealth.Care',
                  'AIOTEL PRIVATE LIMITED',
                  'FlexyPe',
                  'GoPllay',
                  'PRESET Building Systems Pvt Ltd',
                  'Doodley Pets Ecosystem Private Limited'
                ].map((startup, index) => (
                  <div key={index} className="flex items-center p-3 bg-black/30 border border-gray-800 rounded-lg hover:bg-yellow-500/10 transition-colors">
                    <div className="w-8 h-8 flex items-center justify-center bg-yellow-500/20 text-yellow-400 rounded-full mr-3 text-sm font-medium">
                      {index + 1}
                    </div>
                    <span className="text-white">{startup}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Winner Announcement */}
            <div className="text-center">
              <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-2 text-yellow-400 mb-6">
                🏆 Winner Announcement
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">ARIRO TOYS was adjudged the winner of <span className="text-yellow-400">The Great Indian Startup Pitch 2024</span></h3>
              <div className="max-w-2xl mx-auto mt-8 rounded-xl overflow-hidden border-2 border-yellow-500/30">
                <Image
                  src="https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-11.08.41-AM-1-1024x682.jpeg"
                  alt="Ariro Toys - Winner of The Great Indian Startup Pitch 2024"
                  width={800}
                  height={533}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Road to Summit Series */}
        <section id="road-to-summit" className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-900/5 to-transparent opacity-10"></div>
          <div className="container mx-auto px-4">
            <SectionHeader
              title="ROAD TO SUMMIT"
              highlightedText="SERIES"
              description="As a prequel to the summit, we ran a multi-city roadshow spreading awareness about the event and inviting founders to attend the summit in Bangalore. These events happened in Delhi, Gurgaon, Mumbai, Bangalore, and Hyderabad."
              badgeText="Journey"
              align="center"
              className="mb-12"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                {
                  city: 'Bangalore',
                  image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/r2s-BANG-1024x1024.png'
                },
                {
                  city: 'Delhi',
                  image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/r2s-Delhi-1024x1024.png'
                },
                {
                  city: 'Mumbai',
                  image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Mumbai_2-1024x1024.png'
                },
                {
                  city: 'Gurgaon',
                  image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Gurgaon-1024x1024.png'
                },
                {
                  city: 'Hyderabad',
                  image: 'https://thebuildersclub.me/wp-content/uploads/2024/09/Hyderabad-1024x1024.png'
                }
              ].map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border-2 border-yellow-500/30 hover:border-yellow-400 transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.city} Road to Summit`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white font-bold text-lg">{item.city}</h3>
                  </div>
                  <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    {item.city}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <NeoPopButton 
                variant="primary"
                size="lg"
                className="px-8 py-3"
              >
                VIEW ALL PHOTOS
              </NeoPopButton>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="EVENT"
              highlightedText="PARTNERS"
              description="We're proud to collaborate with industry leaders who share our vision for innovation and excellence."
              badgeText="Our Network"
              align="center"
              className="mb-12"
            />

            {/* Ecosystem Partners */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center">
                <span className="w-4 h-4 bg-yellow-400 mr-2 rounded-sm"></span>
                ECOSYSTEM PARTNERS
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <PartnerCard key={`eco-${i}`} name={`Eco Partner ${i}`} url={`#`} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Exhibition Partners */}
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center">
                  <span className="w-4 h-4 bg-yellow-400 mr-2 rounded-sm"></span>
                  EXHIBITION PARTNERS
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <PartnerCard key={`exh-${i}`} name={`Exh. Partner ${i}`} url={`#`} small />
                  ))}
                </div>
              </div>

              {/* Learning Partner */}
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center">
                  <span className="w-4 h-4 bg-yellow-400 mr-2 rounded-sm"></span>
                  LEARNING PARTNER
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2].map((i) => (
                    <PartnerCard key={`learn-${i}`} name={`Learn Partner ${i}`} url={`#`} />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Knowledge Partners */}
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center">
                  <span className="w-4 h-4 bg-yellow-400 mr-2 rounded-sm"></span>
                  KNOWLEDGE PARTNERS
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <PartnerCard key={`know-${i}`} name={`Knowledge ${i}`} url={`#`} small />
                  ))}
                </div>
              </div>

              {/* Gifting Partners */}
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center">
                  <span className="w-4 h-4 bg-yellow-400 mr-2 rounded-sm"></span>
                  GIFTING PARTNERS
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2].map((i) => (
                    <PartnerCard key={`gift-${i}`} name={`Gift Partner ${i}`} url={`#`} small />
                  ))}
                </div>
              </div>

              {/* Tool Partners */}
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center">
                  <span className="w-4 h-4 bg-yellow-400 mr-2 rounded-sm"></span>
                  TOOL PARTNERS
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3].map((i) => (
                    <PartnerCard key={`tool-${i}`} name={`Tool ${i}`} url={`#`} small />
                  ))}
                </div>
              </div>
            </div>

            {/* Media Partners */}
            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center">
                <span className="w-4 h-4 bg-yellow-400 mr-2 rounded-sm"></span>
                MEDIA PARTNERS
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <PartnerCard key={`media-${i}`} name={`Media ${i}`} url={`#`} small />
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-400 mb-6">Interested in becoming a partner?</p>
              <NeoPopButton 
                variant="primary"
                size="lg" 
                className="px-8 py-3 text-lg font-medium"
              >
                PARTNER WITH US
              </NeoPopButton>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="Ready to Join"
                highlightedText="Us?"
                description="Don't miss this opportunity to be part of India's most prestigious tech gathering. Register now to secure your spot at The Great Indian Tech Awards & Summit 2025."
                badgeText="Register Now"
                align="center"
                titleClassName="text-3xl sm:text-4xl md:text-5xl"
              />
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <NeoPopButton 
                  variant="primary"
                  size="lg" 
                  className="px-8 py-4 text-lg font-medium"
                >
                  GET YOUR TICKETS NOW
                </NeoPopButton>
                <NeoPopButton 
                  variant="secondary"
                  size="lg" 
                  className="px-8 py-4 text-lg font-medium"
                >
                  BECOME A SPONSOR
                </NeoPopButton>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-800">
                <p className="text-gray-400 text-sm">
                  Have questions? <a href="mailto:summit@buildersclub.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">Contact our team</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
