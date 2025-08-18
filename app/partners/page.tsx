'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronRight, 
  X,
  Globe,
  Users,
  Briefcase,
  Shield,
  TrendingUp,
  Zap,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

// Types
type Partner = {
  id: number;
  name: string;
  logo: string;
  category: string;
  description: string;
  link: string;
  website?: string; // Added missing property
  type?: string;    // Added missing property
  featured?: boolean;
  perks?: string[];
  joinedDate?: string;
};

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  cta: string;
  link: string;
  featured: boolean;
};

// Define OurPerks as a component type
declare const OurPerks: React.FC;

// Define NeoPopButton as a component type
declare const NeoPopButton: React.FC<{
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}>;

type MenuItem = {
  id: string;
  title: string;
  href: string;
  subItems?: {
    title: string;
    href: string;
  }[];
};

// Sample menu data
const menuItems: MenuItem[] = [
  {
    id: 'ai',
    title: 'AI',
    href: '/categories/ai',
    subItems: [
      { title: 'AI Design', href: '/categories/ai/ai-design' },
      { title: 'AI Development', href: '/categories/ai/ai-development' },
      { title: 'AI Writing', href: '/categories/ai/ai-writing' },
      { title: 'AI HR', href: '/categories/ai/ai-hr' },
      { title: 'AI Data Analysis', href: '/categories/ai/ai-data-analysis' },
    ],
  },
  {
    id: 'development',
    title: 'Development',
    href: '/categories/development',
    subItems: [
      { title: 'Frontend', href: '/categories/development/frontend' },
      { title: 'Backend', href: '/categories/development/backend' },
      { title: 'Mobile', href: '/categories/development/mobile' },
      { title: 'DevOps', href: '/categories/development/devops' },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    href: '/categories/design',
    subItems: [
      { title: 'UI/UX', href: '/categories/design/ui-ux' },
      { title: 'Graphic Design', href: '/categories/design/graphic' },
      { title: '3D & Animation', href: '/categories/design/3d' },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    href: '/categories/marketing',
    subItems: [
      { title: 'SEO', href: '/categories/marketing/seo' },
      { title: 'Content Marketing', href: '/categories/marketing/content' },
      { title: 'Social Media', href: '/categories/marketing/social' },
    ],
  },
  {
    id: 'business',
    title: 'Business',
    href: '/categories/business',
    subItems: [
      { title: 'Finance', href: '/categories/business/finance' },
      { title: 'Startups', href: '/categories/business/startups' },
      { title: 'Entrepreneurship', href: '/categories/business/entrepreneurship' },
    ],
  },
  {
    id: 'project-management',
    title: 'Project Management',
    href: '/categories/project-management-software',
    subItems: [
      { title: 'Task Management', href: '/categories/project-management-software/task-management' },
      { title: 'Team Collaboration', href: '/categories/project-management-software/team-collaboration' },
      { title: 'Agile Tools', href: '/categories/project-management-software/agile-tools' },
    ],
  },
  {
    id: 'business-software',
    title: 'Business Software',
    href: '/categories/business-software',
    subItems: [
      { title: 'ERP', href: '/categories/business-software/erp' },
      { title: 'Legal', href: '/categories/business-software/legal' },
      { title: 'Business Intelligence', href: '/categories/business-software/business-intelligence' },
    ],
  },
];




// Partners data
const partners: Partner[] = [
  {
    id: 1,
    name: 'AWS',
    logo: '/images/partners/aws-logo.png',
    category: 'Cloud Computing',
    description: 'Cloud Computing Services',
    link: 'https://aws.amazon.com',
    website: 'https://aws.amazon.com',
    type: 'Platinum',
    featured: true,
    perks: ['$5,000 in AWS credits', '1:1 technical support', 'Exclusive workshops'],
    joinedDate: '2023-01-15'
  },
  {
    id: 2,
    name: 'Stripe',
    logo: '/images/partners/stripe-logo.png',
    category: 'Payments',
    description: 'Payment Processing',
    link: 'https://stripe.com',
    website: 'https://stripe.com',
    type: 'Gold',
    featured: true,
    perks: ['Reduced processing fees', 'Dedicated account manager', 'Early access to betas'],
    joinedDate: '2023-02-20'
  },
  {
    id: 3,
    name: 'Vercel',
    logo: '/images/partners/vercel-logo.png',
    category: 'Hosting',
    description: 'Frontend Cloud Platform',
    link: 'https://vercel.com',
    website: 'https://vercel.com',
    type: 'Gold',
    featured: true,
    perks: ['Free hosting credits', 'Priority support', 'Co-marketing opportunities'],
    joinedDate: '2023-03-10'
  },
  {
    id: 4,
    name: 'Notion',
    logo: '/images/partners/notion-logo.png',
    category: 'Productivity',
    description: 'Workspace & Productivity',
    link: 'https://notion.so',
    website: 'https://notion.so',
    type: 'Silver',
    featured: false,
    perks: ['Team workspaces', 'Custom templates', 'API access'],
    joinedDate: '2023-04-05'
  },
  {
    id: 5,
    name: 'Figma',
    logo: '/images/partners/figma-logo.png',
    category: 'Design',
    description: 'Design & Prototyping',
    link: 'https://figma.com',
    website: 'https://figma.com',
    type: 'Silver',
    featured: false,
    perks: ['Team plans', 'Design system tools', 'Plugins'],
    joinedDate: '2023-05-15'
  },
  {
    id: 6,
    name: 'DigitalOcean',
    logo: '/images/partners/digitalocean-logo.png',
    category: 'Cloud',
    description: 'Cloud Infrastructure',
    link: 'https://digitalocean.com',
    website: 'https://digitalocean.com',
    type: 'Bronze',
    featured: false,
    perks: ['Cloud credits', 'Technical support', 'Community resources'],
    joinedDate: '2023-06-20'
  },
];

// Perks data from OurPerks component
// Benefits data for the benefits section
const benefits: Benefit[] = [
  {
    title: 'Exposure',
    description: 'Get featured on our platforms and reach our growing community of developers and builders.',
    icon: <Globe className="w-6 h-6 text-yellow-400" />,
    image: '',
    cta: 'Learn more',
    link: '#exposure',
    featured: true
  },
  {
    title: 'Networking',
    description: 'Connect with other industry leaders and potential clients through our exclusive events.',
    icon: <Users className="w-6 h-6 text-yellow-400" />,
    image: '',
    cta: 'Join events',
    link: '#events',
    featured: true
  },
  {
    title: 'Resources',
    description: 'Access to premium resources, tools, and content to help you grow your business.',
    icon: <Briefcase className="w-6 h-6 text-yellow-400" />,
    image: '',
    cta: 'View resources',
    link: '#resources',
    featured: true
  },
  {
    title: 'Support',
    description: 'Get dedicated support from our team to help you succeed in your partnership.',
    icon: <Shield className="w-6 h-6 text-yellow-400" />,
    image: '',
    cta: 'Get support',
    link: '#support',
    featured: true
  },
  {
    title: 'Growth',
    description: 'Access to exclusive growth opportunities and co-marketing initiatives.',
    icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
    image: '',
    cta: 'Grow with us',
    link: '#growth',
    featured: true
  },
  {
    title: 'Innovation',
    description: 'Be at the forefront of technology with early access to new features and products.',
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    image: '',
    cta: 'Explore',
    link: '#innovation',
    featured: true
  }
];

// Perks data for the partners page
const partnerPerks = [
  {
    id: 1,
    title: 'Cloud Credits',
    description: '$10,000 in AWS credits for your startup',
    image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d32a7262325574f7065_Group%201171276405.avif',
    cta: 'Claim Now',
    link: '#claim-credits',
    featured: true
  },
  {
    id: 2,
    title: 'Payment Processing',
    description: '6 months free on Stripe payment processing',
    image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d32112b7e23fac75372_Group%201171276406.avif',
    cta: 'Get Started',
    link: '#stripe-offer',
    featured: true
  },
  {
    id: 3,
    title: 'Hosting',
    description: '1 year of Vercel Pro plan',
    image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d328ffb702458991ec1_Group%201171276407.avif',
    cta: 'Redeem',
    link: '#vercel-offer',
    featured: true
  },
  {
    id: 4,
    title: 'Design Tools',
    description: 'Free Figma Pro for 1 year',
    image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d320850837877184d0d_Group%201171276410.avif',
    cta: 'Get Access',
    link: '#figma-offer',
    featured: false
  },
  {
    id: 5,
    title: 'Workspace',
    description: 'Notion Pro for your entire team',
    image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d3225770a537e58a4a7_Group%201171276409.avif',
    cta: 'Start Now',
    link: '#notion-offer',
    featured: false
  },
  {
    id: 6,
    title: 'Infrastructure',
    description: '$500 in DigitalOcean credits',
    image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d321badaa82de773e7c_Group%201171276411.avif',
    cta: 'Deploy Now',
    link: '#do-offer',
    featured: false
  },
];

// Main component
export default function PartnersPage() {
  return (
    <div className="bg-black">
      {/* Hero Section - Fixed 1440x1024 */}
      <div className="relative w-full overflow-hidden" style={{ height: '1024px', maxWidth: '1440px', margin: '0 auto' }}>
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-black to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        </div>
        
        {/* Content Container - Adjusted to position content higher */}
        <div className="relative z-10 h-full w-full flex items-start pt-32 justify-center px-4">
          <div className="w-full max-w-4xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 mr-2" />
              PARTNER PROGRAM
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-yellow-400">POWERING</span> <br />
              <span className="text-yellow-400">THE NEXT</span> <br />
              <span className="text-yellow-400">GENERATION</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join forces with industry leaders and gain access to exclusive benefits, 
              resources, and opportunities to accelerate your growth and reach new heights.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="#benefits" 
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Learn About Benefits
              </a>
              <Link 
                href="/partner-registration"
                className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-bold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why <span className="text-yellow-400">Partner With Us?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join our network of industry leaders and unlock exclusive benefits designed to help your business thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit: Benefit, index: number) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Perks Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerPerks.filter(p => p.featured).map((perk) => (
            <div key={perk.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Image 
                  src={perk.image} 
                  alt={perk.title} 
                  width={32} 
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{perk.title}</h3>
              <p className="text-gray-600 mb-4">{perk.description}</p>
              <a 
                href={perk.link}
                className="text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center"
              >
                {perk.cta}
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Showcase */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-yellow-400">Partners</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We&apos;re proud to collaborate with industry leaders who share our vision for innovation and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <motion.div 
                key={partner.id}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 overflow-hidden hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden border border-gray-700/50">
                      <Image 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        width={64} 
                        height={64} 
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-400 rounded-full mt-1">
                        {partner.type || 'Premium'} Partner
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {partner.description}
                  </p>
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 text-sm font-medium"
                  >
                    Visit Website <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/partners/all"
              className="inline-flex items-center px-6 py-3 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-bold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View All Partners
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Become a Partner?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our network of industry leaders and unlock exclusive benefits designed to help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/partner-registration"
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#contact"
                className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-bold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Contact Sales
              </a>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Partner Network?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Partner with Builders Club and unlock exclusive benefits, resources, and opportunities to grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="w-full px-6 py-3 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition-colors duration-200"
                >
                  Join the waitlist
                </button>
                <a
                  href="/partner-registration"
                  className="inline-flex items-center px-8 py-3 text-lg font-medium text-black bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors duration-200"
                >
                  Become a Partner
                  <Zap className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white hover:text-yellow-400 transition-colors"
                >
                  Contact Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Rest of the content */}
      <div className="relative z-20">
        {/* Other sections will go here */}
      </div>
    </div>
  );
}
