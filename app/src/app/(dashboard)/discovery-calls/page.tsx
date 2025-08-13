'use client';

import { Rocket, Play, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import ClientLayout from '../ClientLayout';
import NeoPopButton from '../../components/ui/NeoPopButton';
import SectionHeader from '../../components/SectionHeader';
import { WhyChooseUs, VideoTestimonial, FAQSection, CTASection } from './components/EnhancedSections';

function DiscoveryCalls() {
  const steps = [
    {
      number: '01',
      title: 'TESTING',
      description: 'TBC Team takes a demo of the product and understands your target group.'
    },
    {
      number: '02',
      title: 'EOI FOR DEMO',
      description: 'We put out an EOI in the community in the form of Google Forms and polls to get people interested in your product demo.'
    },
    {
      number: '03',
      title: 'CONNECT',
      description: 'Separate WhatsApp groups created with each interested builder.'
    },
    {
      number: '04',
      title: 'MEETING SET',
      description: 'You can coordinate and set up a meeting with them over WhatsApp groups.'
    }
  ];

  const testimonials = [
    {
      title: "The Builders Club Reviews Inlief Cosmetics",
      image: "/images/testimonials/inlief-cosmetics.jpg",
      url: "https://thebuildersclub.me/product-demo/the-builders-club-reviews-inlief-cosmetics-a-skincare-experience-to-remember/"
    },
    {
      title: "How ChopChop Scaled with The Builders Club",
      image: "/images/testimonials/chopchop.jpg",
      url: "https://thebuildersclub.me/product-demo/how-chopchop-scaled-with-the-builders-club/"
    },
    {
      title: "Whatlist.io's Initial Boost",
      image: "/images/testimonials/whatlist.jpg",
      url: "https://thebuildersclub.me/testimonials/how-whatlist-io-got-their-initial-boost-from-the-builders-club/"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="mb-6 z-20">
              <SectionHeader
                badgeText="Discovery Calls"
                title=""
                highlightedText=""
                align="center"
                className="mb-0"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-yellow-400">PRODUCT</span> <br />
              <span className="text-yellow-400">DISCOVERY</span> <br />
              <span className="text-yellow-400">CALLS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get direct access to potential customers and validate your product with our curated network of builders and founders.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://wa.link/fioj4n" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017] px-8 py-3 text-lg inline-flex shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none"
              >
                Book a Call
              </a>
              <button 
                type="button" 
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-transparent hover:bg-[#FFD700]/10 active:bg-[#FFD700]/20 text-[#FFD700] border-[#D4A017] px-8 py-3 text-lg inline-flex items-center gap-2 shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none"
              >
                How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900/80 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="How It"
              highlightedText="Works"
              className="text-center mb-16"
              titleClassName="text-3xl md:text-4xl font-bold"
              description="A simple 4-step process to validate your product with real users"
              badgeText="Process"
            />
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500/30 via-yellow-500/30 to-yellow-500/30 -z-10"></div>
              
              <div className="space-y-16">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex items-start group">
                    <div className="absolute left-0 w-16 h-16 flex items-center justify-center -ml-0.5">
                      <div className="w-4 h-4 rounded-full bg-yellow-500 group-hover:scale-125 transition-transform"></div>
                    </div>
                    <div className="ml-20">
                      <div className="inline-block px-4 py-1 bg-yellow-500/10 text-yellow-400 text-sm font-medium rounded-full mb-3">
                        Step {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                      
                      {index < steps.length - 1 && (
                        <div className="mt-6 flex items-center text-sm text-gray-400">
                          <span className="animate-pulse">↓</span>
                          <span className="ml-2">Next: {steps[index + 1].title}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <a 
                href="https://wa.link/fioj4n" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017] px-8 py-4 text-lg shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none"
              >
                Start Your Discovery Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Video Testimonials */}
      <VideoTestimonial />

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Success"
            highlightedText="Stories"
            className="text-center mb-12"
            titleClassName="text-3xl md:text-4xl font-bold"
            badgeText="Testimonials"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <a 
                key={index} 
                href={testimonial.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 h-full">
                  <div className="relative h-48 bg-gray-900/50 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-500/10 to-transparent">
                      <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center backdrop-blur-sm border border-yellow-500/30 group-hover:bg-yellow-500/30 transition-colors">
                        <Play className="w-6 h-6 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                      {testimonial.title}
                    </h3>
                    <div className="flex items-center text-yellow-400 text-sm font-medium">
                      Watch Story
                      <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}

// Use a type assertion to add the getLayout property to the page component
const PageWithLayout = DiscoveryCalls as any;
PageWithLayout.getLayout = function getLayout(page: React.ReactNode) {
  return <ClientLayout>{page}</ClientLayout>;
};

export default PageWithLayout;
