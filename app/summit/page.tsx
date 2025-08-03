'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NeoPopButton from "@/components/ui/NeoPopButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin, Rocket, Users, Award, Mic, User, ChevronRight, Image as ImageIcon, Star } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

// Types
interface EventStat {
  number: string;
  label: string;
  icon: () => JSX.Element;
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

interface Highlight {
  id: number;
  title: string;
  image: string;
  tag: string;
  date: string;
  description: string;
  link: string;
  featured?: boolean;
}

const highlights: Highlight[] = [
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
  const [activeTab, setActiveTab] = useState('highlights');
  const [galleryFilter, setGalleryFilter] = useState('all');
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
                href="#register"
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
            
            {/* Highlights */}
            <div className="mb-16">
              <SectionHeader
                title="Season 1"
                highlightedText="Highlights"
                description="Relive the most memorable moments from our previous summit"
                badgeText="Highlights"
                titleClassName="text-3xl sm:text-4xl"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {highlights.map((highlight, index) => (
                  <div key={highlight.id} className="group">
                    <div className="h-full bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={highlight.image}
                          alt={highlight.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {highlight.featured && (
                          <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full">
                            {highlight.tag}
                          </span>
                          <span className="text-xs text-gray-400">{highlight.date}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{highlight.title}</h3>
                        <p className="text-sm sm:text-base text-gray-300 flex-1 mb-4 sm:mb-6">{highlight.description}</p>
                        <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-800">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="flex -space-x-1.5 sm:-space-x-2">
                                {[1, 2, 3].map((i) => (
                                  <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                                ))}
                              </div>
                              <span className="text-xs text-gray-400">+12 attending</span>
                            </div>
                            <button className="text-yellow-400 hover:text-yellow-300 text-xs sm:text-sm font-medium flex items-center">
                              Learn more
                              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
