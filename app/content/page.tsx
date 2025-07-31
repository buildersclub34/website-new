'use client';

import { motion } from 'framer-motion';
import { Mic, Users, MessageSquare, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import ClientLayout from '../ClientLayout';
import SectionHeader from '../../components/SectionHeader';

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

const ContentCard = ({ title, description, icon: Icon, link, linkText, children }) => (
  <motion.div 
    variants={fadeInUp}
    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10"
    whileHover={{ y: -5 }}
  >
    <div className="p-1">
      <div className="bg-gray-900 p-6 rounded-lg h-full">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-yellow-400/10 rounded-lg text-yellow-400">
            <Icon size={24} />
          </div>
          <h3 className="text-2xl font-bold ml-3">{title}</h3>
        </div>
        <p className="text-gray-300 mb-6">{description}</p>
        {children}
        {link && (
          <Link 
            href={link}
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
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
}

const PodcastCard = ({ title, description, date }: PodcastCardProps) => (
  <motion.div 
    variants={fadeInUp}
    className="group"
  >
    <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-800 mb-4">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end p-4">
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play className="text-black ml-1" />
        </div>
      </div>
      {/* Placeholder for podcast image */}
      <div className="w-full h-full bg-gray-700"></div>
    </div>
    <div className="px-2">
      <span className="text-sm text-yellow-400">{date}</span>
      <h4 className="text-lg font-semibold mt-1 group-hover:text-yellow-400 transition-colors">{title}</h4>
      <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
    </div>
  </motion.div>
);

interface ProfileCardProps {
  name: string;
  role: string;
  company: string;
  image?: string;
}

const ProfileCard = ({ name, role, company }: ProfileCardProps) => (
  <motion.div 
    variants={fadeInUp}
    className="group text-center"
  >
    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-transparent group-hover:border-yellow-400 transition-colors">
      {/* Placeholder for profile image */}
      <div className="w-full h-full bg-gray-700"></div>
    </div>
    <h4 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">{name}</h4>
    <p className="text-yellow-400 text-sm">{role}</p>
    <p className="text-gray-400 text-sm">{company}</p>
  </motion.div>
);

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
              <a 
                href="#profiles"
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-transparent hover:bg-[#FFD700]/10 active:bg-[#FFD700]/20 text-[#FFD700] border-[#D4A017] px-8 py-3 text-lg inline-flex items-center gap-2 shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none"
              >
                View Builder Profiles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <ContentCard
            icon={Mic}
            title="Podcasts"
            description="Listen to insightful conversations with industry leaders and successful founders."
            link="/content/podcasts"
            linkText="Browse All Episodes"
          >
            <div className="mt-4 space-y-4">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="flex items-start space-x-3 group">
                  <div className="w-2 h-2 mt-2 rounded-full bg-yellow-400 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium group-hover:text-yellow-400 transition-colors">
                      Episode {i + 1}: Latest Trends in Tech
                    </h4>
                    <p className="text-sm text-gray-400">45 min listen</p>
                  </div>
                </div>
              ))}
            </div>
          </ContentCard>

          <ContentCard
            icon={Users}
            title="Builder Profiles"
            description="Meet the brilliant minds behind successful startups in our community."
            link="/content/builders"
            linkText="View All Builders"
          >
            <div className="mt-6 grid grid-cols-3 gap-4">
              {['AI', 'SaaS', 'Web3', 'FinTech', 'Health', '+12'].map((tag, i) => (
                <span 
                  key={i}
                  className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-center"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ContentCard>

          <ContentCard
            icon={MessageSquare}
            title="Testimonials"
            description="Hear what our members say about their experience with The Builders Club."
            link="/content/testimonials"
            linkText="Read All Stories"
          >
            <div className="mt-6 space-y-4">
              {[
                "Game-changing community for founders!",
                "The network helped me secure funding.",
                "Invaluable insights and connections."
              ].map((testimonial, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="text-yellow-400 text-2xl">&quot;</div>
                  <p className="text-sm text-gray-300">{testimonial}</p>
                </div>
              ))}
            </div>
          </ContentCard>
        </motion.div>

        {/* Featured Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
              Latest <span className="text-yellow-400">Podcasts</span>
            </h2>
            <Link 
              href="/content/podcasts"
              className="flex items-center text-yellow-400 hover:text-yellow-300 font-medium"
            >
              View All Episodes
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <PodcastCard
                key={i}
                title={`How to Build a $100M Startup in 2024`}
                description={`In this episode, we sit down with founders who've successfully scaled their startups.`}
                date='JUL 15, 2024'
              />
            ))}
          </div>
        </motion.section>

        {/* Builders Spotlight */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
              Featured <span className="text-yellow-400">Builders</span>
            </h2>
            <Link 
              href="/content/builders"
              className="flex items-center text-yellow-400 hover:text-yellow-300 font-medium"
            >
              Meet All Builders
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProfileCard
                key={i}
                name={`Alex Johnson`}
                role="CEO"
                company="TechStart Inc."
              />
            ))}
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
const Play = ({ className }) => (
  <svg 
    className={className} 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 3.5L12 8L4 12.5V3.5Z" fill="currentColor"/>
  </svg>
);
