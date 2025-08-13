'use client';

import Image from 'next/image';
import { Users, ExternalLink, Linkedin, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

type Advisor = {
  id: string;
  name: string;
  role: string;
  company: string;
  imageUrl: string;
  companyLogo: string;
  linkedinUrl?: string;
  website?: string;
  expertise: string[];
};

const advisors: Advisor[] = [
  {
    id: '1',
    name: 'Rahul Jha',
    role: 'Co-Founder & CTO',
    company: 'DriveU',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/driveu.in?size=128',
    linkedinUrl: 'https://linkedin.com/in/rahuljha',
    website: 'https://driveu.in',
    expertise: ['Mobility', 'Tech Leadership', 'Scaling Startups']
  },
  {
    id: '2',
    name: 'Shashank Kumar',
    role: 'Co-Founder',
    company: 'Tally',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/tallysolutions.com?size=128',
    linkedinUrl: 'https://linkedin.com/in/shashank-kumar',
    website: 'https://tallysolutions.com',
    expertise: ['Fintech', 'Product Development', 'Startup Growth']
  },
  {
    id: '3',
    name: 'Amit Jain',
    role: 'CEO',
    company: 'Seat',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/seat.com?size=128',
    linkedinUrl: 'https://linkedin.com/in/amit-jain',
    website: 'https://seat.com',
    expertise: ['Automotive', 'E-commerce', 'Market Expansion']
  },
  {
    id: '4',
    name: 'Sahil Gupta',
    role: 'Founder & CEO',
    company: 'BoldCare',
    imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/boldcare.in?size=128',
    linkedinUrl: 'https://linkedin.com/in/sahil-gupta',
    website: 'https://boldcare.in',
    expertise: ['Healthcare', 'Consumer Tech', 'Startup Operations']
  },
  {
    id: '5',
    name: 'Priya Sharma',
    role: 'Founding Partner',
    company: 'Venture Soul',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/venturesoul.vc?size=128',
    linkedinUrl: 'https://linkedin.com/in/priya-sharma',
    website: 'https://venturesoul.vc',
    expertise: ['Venture Capital', 'Early-stage Investing', 'Startup Strategy']
  },
  {
    id: '6',
    name: 'Sanjay Mehta',
    role: 'President - Digital',
    company: 'ITC',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/itcportal.com?size=128',
    linkedinUrl: 'https://linkedin.com/in/sanjay-mehta',
    website: 'https://itcportal.com',
    expertise: ['Digital Transformation', 'Corporate Innovation', 'E-commerce']
  },
  {
    id: '7',
    name: 'Rahul Bothra',
    role: 'VP - Growth',
    company: 'Swiggy',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/swiggy.com?size=128',
    linkedinUrl: 'https://linkedin.com/in/rahul-bothra',
    website: 'https://swiggy.com',
    expertise: ['Growth Hacking', 'Marketplace', 'User Acquisition']
  },
  {
    id: '8',
    name: 'Neha Sharma',
    role: 'Director - Google Pay',
    company: 'Google',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/google.com?size=128',
    linkedinUrl: 'https://linkedin.com/in/neha-sharma',
    website: 'https://pay.google.com',
    expertise: ['Fintech', 'Product Management', 'Emerging Markets']
  },
  {
    id: '9',
    name: 'Ananya Reddy',
    role: 'CTO & Co-Founder',
    company: 'Zerodha',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3f?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/zerodha.com?size=128',
    linkedinUrl: 'https://linkedin.com/in/ananya-reddy',
    website: 'https://zerodha.com',
    expertise: ['Fintech', 'Trading Platforms', 'Tech Architecture']
  },
  {
    id: '10',
    name: 'Vikram Patel',
    role: 'Chief Product Officer',
    company: 'Razorpay',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/razorpay.com?size=128',
    linkedinUrl: 'https://linkedin.com/in/vikram-patel',
    website: 'https://razorpay.com',
    expertise: ['Product Strategy', 'Payments', 'UX Design']
  },
  {
    id: '11',
    name: 'Meera Krishnan',
    role: 'Head of AI Research',
    company: 'Microsoft India',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/microsoft.com?size=128',
    linkedinUrl: 'https://linkedin.com/in/meera-krishnan',
    website: 'https://microsoft.com',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Research']
  },
  {
    id: '12',
    name: 'Arjun Malhotra',
    role: 'CEO & Co-Founder',
    company: 'CRED',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/cred.club?size=128',
    linkedinUrl: 'https://linkedin.com/in/arjun-malhotra',
    website: 'https://cred.club',
    expertise: ['Fintech', 'Consumer Tech', 'Brand Building']
  },
  {
    id: '13',
    name: 'Nandini Saha',
    role: 'VP - Engineering',
    company: 'Flipkart',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/flipkart.com?size=128',
    linkedinUrl: 'https://linkedin.com/in/nandini-saha',
    website: 'https://flipkart.com',
    expertise: ['E-commerce', 'Tech Leadership', 'Scalability']
  },
  {
    id: '14',
    name: 'Rajat Verma',
    role: 'Founder & CEO',
    company: 'Licious',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/licious.in?size=128',
    linkedinUrl: 'https://linkedin.com/in/rajat-verma',
    website: 'https://licious.in',
    expertise: ['D2C', 'Supply Chain', 'Brand Building']
  },
  {
    id: '15',
    name: 'Priyanka Joshi',
    role: 'Chief Marketing Officer',
    company: 'Nykaa',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/nykaa.com?size=128',
    linkedinUrl: 'https://linkedin.com/in/priyanka-joshi',
    website: 'https://nykaa.com',
    expertise: ['Digital Marketing', 'Brand Strategy', 'E-commerce']
  },
  {
    id: '16',
    name: 'Amit Patel',
    role: 'Co-Founder',
    company: 'Meesho',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    companyLogo: 'https://logo.clearbit.com/meesho.com?size=128',
    linkedinUrl: 'https://linkedin.com/in/amit-patel',
    website: 'https://meesho.com',
    expertise: ['Social Commerce', 'Marketplace', 'Growth Hacking']
  }
];

export default function AdvisorsSection() {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <SectionHeader
            title="Meet Our Esteemed"
            highlightedText="Advisors"
            description="Learn from and connect with industry leaders and domain experts from top companies"
            badgeText="Expert Network"
            align="center"
            titleClassName="text-3xl md:text-4xl lg:text-5xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {advisors.map((advisor) => (
            <div 
              key={advisor.id}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-900/50 rounded-xl p-6 border-2 border-gray-800 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Advisor Image */}
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-yellow-400/30 group-hover:border-yellow-400 transition-all duration-300">
                <Image
                  src={advisor.imageUrl}
                  alt={advisor.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Company Logo */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gray-800 p-2 flex items-center justify-center border border-gray-700">
                <Image
                  src={advisor.companyLogo}
                  alt={advisor.company}
                  width={40}
                  height={40}
                  className="object-contain h-6 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Advisor Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {advisor.name}
                </h3>
                <p className="text-yellow-400 font-medium">{advisor.role}</p>
                <p className="text-sm text-gray-400">{advisor.company}</p>
              </div>
              
              {/* Expertise Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {advisor.expertise.map((skill, i) => (
                  <span 
                    key={i}
                    className="inline-block px-2 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-400 rounded-full border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-3 mt-4 pt-4 border-t border-gray-800">
                {advisor.linkedinUrl && (
                  <a 
                    href={advisor.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 border border-gray-700 hover:border-yellow-400"
                    aria-label={`${advisor.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {advisor.website && (
                  <a 
                    href={advisor.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 border border-gray-700 hover:border-yellow-400"
                    aria-label={`${advisor.company} website`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              {/* Hover effect background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Build Something Extraordinary?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Connect with our network of industry experts and get the guidance you need to take your venture to the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/advisors" 
              className="relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Explore All Advisors</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a 
              href="/circle#join" 
              className="relative px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400/10 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Become an Advisor</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
