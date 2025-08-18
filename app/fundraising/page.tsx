'use client';

import { Rocket, ArrowRight, ChevronRight } from 'lucide-react';
import ClientLayout from '../ClientLayout';
import NeoPopButton from '../../components/ui/NeoPopButton';
import SectionHeader from '../../components/SectionHeader';
import { WhyFundWithUs, FundraisingProcess, SuccessStories, FAQSection } from './components/EnhancedSections';

function FundraisingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="mb-6 z-20">
              <SectionHeader
                badgeText="Fundraising Support"
                title=""
                highlightedText=""
                align="center"
                className="mb-0"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-yellow-400">RAISE</span> <br />
              <span className="text-yellow-400">YOUR NEXT</span> <br />
              <span className="text-yellow-400">ROUND</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We help you raise your next funding round through our co-investor network of 300+ VCs, angel networks, and accelerators.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://tally.so/r/n9JBXX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017] px-8 py-3 text-lg inline-flex shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none"
              >
                Apply Now
              </a>
              <a 
                href="/discovery-calls"
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-transparent hover:bg-[#FFD700]/10 active:bg-[#FFD700]/20 text-[#FFD700] border-[#D4A017] px-8 py-3 text-lg inline-flex items-center gap-2 shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fund With Us Section */}
      <WhyFundWithUs />
      
      {/* Fundraising Process */}
      <FundraisingProcess />
      
      {/* Success Stories */}
      <SuccessStories />

      {/* Investors Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Investors in Our"
            highlightedText="Network"
            className="text-center mb-16"
            titleClassName="text-3xl md:text-4xl font-bold"
            description="We work with a curated network of 300+ investors across different stages and sectors"
            badgeText="Partners"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {[
              { name: 'Sequoia', logo: '/investors/sequoia.svg' },
              { name: 'Accel', logo: '/investors/accel.svg' },
              { name: 'Y Combinator', logo: '/investors/yc.svg' },
              { name: 'Tiger Global', logo: '/investors/tiger-global.svg' },
              { name: 'Andreessen Horowitz', logo: '/investors/a16z.svg' },
              { name: 'Sequoia Surge', logo: '/investors/surge.svg' },
              { name: 'Lightspeed', logo: '/investors/lightspeed.svg' },
              { name: 'Matrix Partners', logo: '/investors/matrix.svg' },
            ].map((investor, index) => (
              <div 
                key={index} 
                className="bg-black/50 p-6 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 flex items-center justify-center h-32"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">{investor.name.split(' ')[0]}</div>
                  <div className="text-sm text-gray-400">{investor.name.split(' ').slice(1).join(' ')}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://tally.so/r/n9JBXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017] px-8 py-3 text-lg shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none inline-flex items-center gap-2"
            >
              Apply for Fundraising Support
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}

// Use a type assertion to add the getLayout property to the page component
const PageWithLayout = FundraisingPage as any;
PageWithLayout.getLayout = function getLayout(page: React.ReactNode) {
  return <ClientLayout>{page}</ClientLayout>;
};

export default PageWithLayout;
