import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../../../components/ui/lib/utils";
import { ChevronRight, Rocket, Zap, Users, Award, Mic2, Calendar, MapPin, Clock } from 'lucide-react';
import NeoPopButton from "@/components/ui/NeoPopButton";
import NeoPopStickyButton from "@/components/ui/NeoPopStickyButton";
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SpeakersSection } from '@/components/SpeakersSection';

export const metadata: Metadata = {
  title: "The Great Indian Tech Summit & Awards 2025",
  description: "A premier gathering to educate, celebrate, and connect the brightest minds in the Indian tech ecosystem. Featuring CTOs, CIOs, Product Leaders, CXOs, Investors, and Startup Founders.",
};

// Event stats component
const EventStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
    {[
      { number: "1000+", label: "Tech Leaders" },
      { number: "50+", label: "Speakers" },
      { number: "100+", label: "Startups" }
    ].map((stat, index) => (
      <div key={index} className="bg-black border-2 border-yellow-400 rounded-xl p-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</h3>
        <p className="text-white text-lg">{stat.label}</p>
      </div>
    ))}
  </div>
);

// Feature card component
const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <div className="bg-black border-2 border-yellow-400 rounded-xl p-6 hover:shadow-yellow-400/20 hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-black" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

// Speaker card component
const SpeakerCard = ({ name, role, company, image }: { 
  name: string; 
  role: string; 
  company: string; 
  image: string;
}) => (
  <div className="bg-black border-2 border-yellow-400 rounded-xl overflow-hidden hover:shadow-yellow-400/20 hover:shadow-lg transition-all duration-300">
    <div className="relative h-64 w-full">
      <Image 
        src={image} 
        alt={name} 
        fill 
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-yellow-400">{role}</p>
      <p className="text-gray-400 text-sm">{company}</p>
    </div>
  </div>
);

// Schedule item component
const ScheduleItem = ({ time, title, speaker, isActive = false }: { 
  time: string; 
  title: string; 
  speaker: string;
  isActive?: boolean;
}) => (
  <div className={`flex gap-4 p-4 rounded-lg ${isActive ? 'bg-yellow-400/10 border-l-4 border-yellow-400' : 'bg-black/50'}`}>
    <div className="text-yellow-400 font-mono">{time}</div>
    <div>
      <h4 className="font-bold text-white">{title}</h4>
      <p className="text-gray-400">{speaker}</p>
    </div>
  </div>
);

export default function SummitSession2() {
  const features = [
    {
      icon: Zap,
      title: "Panel Discussions",
      description: "Conversations with top tech leaders, investors, and government officials on industry shifts and opportunities."
    },
    {
      icon: Users,
      title: "Workshops & Masterclasses",
      description: "Hands-on learning sessions designed to equip professionals with actionable strategies and skills."
    },
    {
      icon: Award,
      title: "Exhibition Zones",
      description: "Showcasing cutting-edge products, tools, and innovations from startups and enterprises."
    },
    {
      icon: Mic2,
      title: "Product Spotlights",
      description: "Live demos and presentations by disruptive companies in the tech ecosystem."
    },
    {
      icon: Users,
      title: "Awards Ceremony",
      description: "Celebrating the best minds and organizations in technology across multiple categories."
    }
  ];

  const speakers = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Director",
      company: "TechNova Labs",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Rajiv Kapoor",
      role: "CTO",
      company: "InnoTech Solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Founder & CEO",
      company: "GreenTech Innovations",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const schedule = [
    { time: "09:00", title: "Registration & Networking", speaker: "" },
    { time: "10:00", title: "Opening Keynote", speaker: "Dr. Sarah Chen", isActive: true },
    { time: "11:30", title: "Panel: Future of AI", speaker: "Multiple Speakers" },
    { time: "13:00", title: "Lunch Break", speaker: "" },
    { time: "14:30", title: "Startup Pitches", speaker: "Selected Startups" },
    { time: "16:00", title: "Awards Ceremony", speaker: "Hosted by Rajiv Kapoor" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-6 backdrop-blur-sm z-20">
              <Rocket className="w-5 h-5 mr-2" />
              THE GREAT INDIAN TECH SUMMIT & AWARDS 2025
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-yellow-400">WHERE</span> <br />
              <span className="text-yellow-400">INNOVATION</span> <br />
              <span className="text-yellow-400">MEETS OPPORTUNITY</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A premier gathering designed to educate, celebrate, and connect the brightest minds in the Indian tech ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
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
                href="/summit"
                variant="secondary"
                size="lg"
                className="group"
              >
                Season 1 Highlights
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

      {/* Awards Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <SectionHeader
              title="The Great Indian Tech"
              highlightedText="Awards"
              description="We are unveiling The Great Indian Startup Awards where we honor excellence in technology, leadership, and innovation across the Indian ecosystem."
              badgeText="Awards"
              align="center"
              titleClassName="text-3xl sm:text-4xl"
            />
            {/* Nominate Now button removed as requested */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-black/50 border border-yellow-400/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Enterprise & Mid Market</h3>
              <p className="text-gray-300">Recognizing excellence in enterprise technology solutions and mid-market innovation.</p>
            </div>
            <div className="bg-black/50 border border-yellow-400/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">SMB & Startup Awards</h3>
              <p className="text-gray-300">Celebrating the most promising startups and small-to-medium businesses in tech.</p>
            </div>
            <div className="bg-black/50 border border-yellow-400/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Individual Awards</h3>
              <p className="text-gray-300">Honoring the visionaries and leaders driving innovation in the tech industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About The Builders Club */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              title="About The Builders"
              highlightedText="Club"
              description="We are one of the world's largest CXO & operator communities with 75,000+ members. We enable businesses to scale through knowledge sharing and high-value networking."
              badgeText="Community"
              align="center"
              titleClassName="text-3xl sm:text-4xl"
            />
            <div className="mt-8">
              <Link 
                href="/"
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-transparent hover:bg-[#FFD700]/10 active:bg-[#FFD700]/20 text-[#FFD700] border-[#D4A017] px-6 py-2 text-base inline-flex shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the Event Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="About the"
              highlightedText="Event"
              description="The Great Indian Tech Summit & Awards 2025 is a premier gathering designed to educate, celebrate, and connect the brightest minds in the Indian tech ecosystem."
              align="left"
              titleClassName="text-3xl sm:text-4xl"
              className="mb-8"
            />
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                This highly curated event will bring together CTOs, CIOs, Product Leaders, CXOs, Investors, Startup Founders, Enterprise Leaders, and Government Officials — all under one roof — to discuss the future of technology and celebrate excellence in innovation.
              </p>
              
              <h3 className="text-2xl font-bold text-white mt-10 mb-4">Key Highlights</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-300">
                <li>Panel Discussions with industry leaders and government officials</li>
                <li>Workshops & Masterclasses for hands-on learning</li>
                <li>Exhibition Zones showcasing cutting-edge innovations</li>
                <li>Product Spotlights featuring disruptive companies</li>
                <li>Awards Ceremony celebrating excellence in technology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <SectionHeader
              title="Event"
              highlightedText="Schedule"
              description=""
              badgeText="Agenda"
              align="center"
              titleClassName="text-3xl sm:text-4xl"
            />
            <div className="flex items-center justify-center gap-4 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-yellow-400" />
                <span>September 20, 2025</span>
              </div>
              <div className="h-4 w-px bg-gray-700"></div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
                <span>Bangalore International Centre</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {schedule.map((item, index) => (
              <ScheduleItem 
                key={index}
                time={item.time}
                title={item.title}
                speaker={item.speaker}
                isActive={item.isActive}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <SpeakersSection />

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
                    : 'bg-gradient-to-br from-[#FFD700] to-[#FFA500] border-[#FFD700] shadow-[0_0_10px_rgba(255,215,0,0.2),6px_6px_0_0_rgba(255,215,0,0.3)]'
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

      {/* Location Section with Map */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Event"
            highlightedText="Location & Details"
            description="Join us at our prestigious venue in the heart of India's tech capital"
            badgeText="Venue Information"
            align="center"
            titleClassName="text-3xl sm:text-4xl"
            className="mb-12"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/50 border-2 border-yellow-400/30 rounded-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full h-96">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.005163473471!2d77.5941893152876!3d12.97199999085654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf5df05e3e14e2e3!2sBangalore%20International%20Exhibition%20Centre!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="w-full h-full"
                  title="Event Location on Map"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Bangalore International Exhibition Centre</h3>
                <div className="space-y-3">
                  <p className="text-yellow-400 flex items-start">
                    <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>10th Floor, NSL Centrum, K.H. Road, Bengaluru, Karnataka 560027</span>
                  </p>
                  <p className="text-gray-300 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0" />
                    <span>Friday, September 19, 2025 • 10:00 AM - 7:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Moved to bottom */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="Ready to Join"
            highlightedText="Us?"
            description="Don't miss this opportunity to connect with industry leaders and be part of the tech revolution."
            badgeText="Register Now"
            align="center"
            titleClassName="text-3xl sm:text-4xl"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <NeoPopButton className="bg-yellow-400 text-black hover:bg-yellow-300 transition-colors text-lg py-3 px-8">
              Register Now
            </NeoPopButton>
            <NeoPopButton variant="secondary" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 text-lg py-3 px-8">
              Contact Us
            </NeoPopButton>
          </div>
        </div>
      </section>

      {/* Sticky Join Button */}
      <NeoPopStickyButton 
        href="/summit/season2/register"
        label="Register Now"
        showAfterScroll={300}
        showNotificationDot={true}
      />
    </div>
  );
}
