'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, ChevronRight, Star, Sparkles } from 'lucide-react';
import NeoPopButton from '@/components/ui/NeoPopButton';
import OurPerks from '@/components/OurPerks';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

// Mock data for partners
const partners = [
  {
    id: 1,
    name: 'AWS',
    logo: '/images/partners/aws-logo.png',
    description: 'Cloud Computing Services',
    website: 'https://aws.amazon.com',
    featured: true,
    perks: ['$5,000 in AWS credits', '1:1 technical support', 'Exclusive workshops']
  },
  {
    id: 2,
    name: 'Stripe',
    logo: '/images/partners/stripe-logo.png',
    description: 'Payment Processing',
    website: 'https://stripe.com',
    featured: true,
    perks: ['Reduced processing fees', 'Dedicated account manager', 'Early access to betas']
  },
  {
    id: 3,
    name: 'Vercel',
    logo: '/images/partners/vercel-logo.png',
    description: 'Frontend Cloud Platform',
    website: 'https://vercel.com',
    featured: true,
    perks: ['Pro plan credits', 'Priority support', 'Custom domains']
  },
  {
    id: 4,
    name: 'Notion',
    logo: '/images/partners/notion-logo.png',
    description: 'Workspace & Productivity',
    website: 'https://notion.so',
    featured: false,
    perks: ['Team workspace', 'Advanced permissions', 'Version history']
  } as const,
  {
    id: 5,
    name: 'Figma',
    logo: '/images/partners/figma-logo.png',
    description: 'Design & Prototyping',
    website: 'https://figma.com',
    featured: false,
    perks: ['Professional plan', 'Team libraries', 'Plugins access']
  },
  {
    id: 6,
    name: 'DigitalOcean',
    logo: '/images/partners/digitalocean-logo.png',
    description: 'Cloud Infrastructure',
    website: 'https://digitalocean.com',
    featured: false
  },
];

// Perks data from OurPerks component
const perks = [
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
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017] px-8 py-3 text-lg inline-flex shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none"
              >
                Learn About Benefits
              </a>
              <Link 
                href="/partner-registration"
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-transparent hover:bg-[#FFD700]/10 active:bg-[#FFD700]/20 text-[#FFD700] border-[#D4A017] px-8 py-3 text-lg inline-flex items-center gap-2 shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Exclusive <span className="text-yellow-400">Partner Benefits</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Our partners receive premium benefits designed to help you grow your business 
              and connect with top talent in the industry.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                title: "Increased Visibility",
                description: "Get featured across our platforms and reach thousands of developers and builders."
              },
              {
                icon: <Star className="w-8 h-8 text-yellow-400" />,
                title: "Exclusive Access",
                description: "Early access to events, beta programs, and new product launches."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
                title: "Networking",
                description: "Connect with other industry leaders and potential clients."
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.1}
              >
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Perks Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <OurPerks />
      </section>

      {/* Featured Partners */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Our <span className="text-yellow-400">Partners</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              We&apos;re proud to partner with industry leaders who share our vision for 
              innovation and community building.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partners.filter(partner => partner.featured).map((partner, index) => (
              <motion.div 
                key={partner.id}
                className="group bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-6 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/5 relative overflow-hidden"
                variants={itemVariants}
                custom={index * 0.1}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-start mb-6 relative z-10">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden border border-gray-700/50">
                    <Image 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      width={64} 
                      height={64} 
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                    <p className="text-gray-400 text-sm">{partner.description}</p>
                    
                    {partner.perks && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {partner.perks.map((perk, i) => (
                          <span key={i} className="inline-flex items-center text-xs bg-yellow-500/10 text-yellow-400 px-2.5 py-1 rounded-full border border-yellow-500/20">
                            {perk}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="relative z-10 pt-4 mt-4 border-t border-gray-800 flex justify-between items-center">
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors group-hover:underline"
                  >
                    Visit Website
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <NeoPopButton
                    as="button"
                    variant="secondary"
                    size="sm"
                    className="text-sm"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Reach Out
                  </NeoPopButton>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-4">Want to see your logo here?</h3>
            <NeoPopButton
              as="link"
              variant="primary"
              href="/partner-registration"
              className="px-6"
            >
              Become a Partner
              <Zap className="w-4 h-4 ml-1" />
            </NeoPopButton>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-900/30 to-yellow-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
            
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
                <NeoPopButton
                  as="link"
                  variant="primary"
                  href="/partner-registration"
                  className="text-lg px-8 py-3"
                >
                  Become a Partner
                  <Zap className="w-5 h-5 ml-2" />
                </NeoPopButton>
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
