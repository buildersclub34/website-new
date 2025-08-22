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
  ArrowRight,
  MessageSquareText,
  UserPlus,
  MessageCircle
} from 'lucide-react';
import { ProductsSection } from '@/components/products/ProductsSection';
import NeoPopButton from '@/components/ui/NeoPopButton';
import { SectionHeader } from '@/components/SectionHeader';
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
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-black">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <div className="text-center max-w-3xl">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-8">
              <Sparkles className="w-5 h-5 mr-2" />
              PARTNER PROGRAM
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-yellow-400">POWERING THE NEXT</span> GENERATION OF BUILDERS
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join forces with industry leaders and gain access to exclusive benefits, 
              resources, and opportunities to accelerate your growth and reach new heights.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <NeoPopButton
                as="link"
                href="#benefits"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Learn About Benefits
              </NeoPopButton>
              <NeoPopButton
                as="link"
                href="/partner-registration"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Become a Partner
              </NeoPopButton>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Deals Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/patterns/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Partner"
            highlightedText="Deals"
            description="Special offers and discounts from our partners to help you build and grow your startup."
            badgeText="Exclusive Offers"
            align="center"
            className="mb-16"
          />
          
          <div className="relative z-10">
            <ProductsSection />
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-[40rem] h-[40rem] bg-yellow-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </section>

      {/* CTA Section with NeoPop Theme */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-black to-gray-900 p-8 md:p-12 rounded-3xl border-2 border-yellow-400/30 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
            {/* Main CTA */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                Ready to <span className="text-yellow-400">Become a Partner?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join our exclusive network of industry leaders and unlock powerful benefits to accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-xl mx-auto">
                <Link 
                  href="/partner-registration"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-colors duration-200 w-full sm:w-auto"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-bold rounded-lg transition-colors duration-200 w-full sm:w-auto"
                >
                  <span>Contact Sales</span>
                  <MessageSquareText className="w-5 h-5" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-yellow-400/5 rounded-full filter blur-3xl"></div>
      </section>
    </div>
  );
}
