import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight, Rocket, Zap, Users, Award, Mic2, Calendar, MapPin, Clock } from 'lucide-react';
import NeoPopButton from "@/components/ui/NeoPopButton";

export const metadata: Metadata = {
  title: "Summit Session 2 | The Great Indian Tech Summit & Awards 2025",
  description: "Join us for the second session of The Great Indian Tech Summit & Awards 2025 - A premier gathering of tech leaders, innovators, and visionaries.",
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
      title: "Cutting-Edge Tech",
      description: "Discover the latest technological advancements and innovations shaping the future."
    },
    {
      icon: Users,
      title: "Networking",
      description: "Connect with industry leaders, investors, and like-minded professionals."
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Celebrate excellence in technology and innovation at our prestigious awards ceremony."
    },
    {
      icon: Mic2,
      title: "Expert Talks",
      description: "Learn from the brightest minds in the tech industry through engaging keynotes and panels."
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-yellow-400 bg-yellow-400/20 rounded-full">
              SESSION 2
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              The Great Indian Tech Summit
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us for an immersive experience with industry leaders, innovative startups, and groundbreaking technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeoPopButton className="bg-yellow-400 text-black hover:bg-yellow-300 transition-colors">
                <Rocket className="w-5 h-5 mr-2" />
                Register Now
              </NeoPopButton>
              <NeoPopButton variant="secondary" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                View Schedule
              </NeoPopButton>
            </div>
          </div>
        </div>
      </section>

      {/* Event Stats */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Attend?</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Speakers</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Learn from and network with some of the brightest minds in the technology industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <SpeakerCard 
                key={index}
                name={speaker.name}
                role={speaker.role}
                company={speaker.company}
                image={speaker.image}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <NeoPopButton variant="secondary" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
              View All Speakers
              <ChevronRight className="w-4 h-4 ml-2" />
            </NeoPopButton>
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Event Schedule</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
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
          
          <div className="text-center mt-12">
            <NeoPopButton className="bg-yellow-400 text-black hover:bg-yellow-300 transition-colors">
              Download Full Schedule
              <ChevronRight className="w-4 h-4 ml-2" />
            </NeoPopButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Don&apos;t miss this opportunity to connect with industry leaders and be part of the tech revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoPopButton className="bg-yellow-400 text-black hover:bg-yellow-300 transition-colors text-lg py-3 px-8">
              Register Now
            </NeoPopButton>
            <NeoPopButton variant="secondary" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 text-lg py-3 px-8">
              Contact Us
            </NeoPopButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-yellow-400 mb-2">TECH SUMMIT &apos;25</div>
              <p className="text-gray-400">The Great Indian Tech Summit & Awards</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} The Builders Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
