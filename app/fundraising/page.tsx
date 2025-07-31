'use client';

import { Rocket } from 'lucide-react';
import ClientLayout from '../ClientLayout';
import NeoPopButton from '../../components/ui/NeoPopButton';
import SectionHeader from '../../components/SectionHeader';

function FundraisingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-6 backdrop-blur-sm z-20">
              <Rocket className="w-5 h-5 mr-2" />
              FUNDRAISING SUPPORT
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

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <SectionHeader
          title="Support system for your fundraising journey"
          className="text-center mb-12"
          titleClassName="text-3xl md:text-4xl font-bold"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Filtered Investor Reachouts",
              description: "Your deck is sent only to those investors whose thesis matches your startup, increasing your chances of conversion"
            },
            {
              title: "Pitch Opportunities",
              description: "Pitch in front of investors in TBC & Partner events and demo days"
            },
            {
              title: "Support in Closures",
              description: "We coordinate with the investors on your behalf to close conversations faster"
            },
            {
              title: "Pitch Deck Audit & Cleanup",
              description: "We critique your pitch decks and help you create a compelling story for investors"
            },
            {
              title: "Financial & Valuation Report",
              description: "We help you create all the financial documents needed for investor due diligence"
            },
            {
              title: "Legal & Compliance Support",
              description: "We support you with all regulatory and legal needs for closing your fundraise"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <NeoPopButton 
            as="link"
            href="/discovery-calls" 
            variant="primary"
            size="lg"
            className="inline-block"
          >
            BOOK A DISCOVERY CALL
          </NeoPopButton>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">INVESTORS IN OUR NETWORK</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="bg-black p-4 rounded-lg border border-gray-800 flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Investor {index + 1}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <NeoPopButton 
              as="link"
              href="https://tally.so/r/n9JBXX" 
              variant="secondary"
              size="lg"
              className="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              APPLY NOW
            </NeoPopButton>
          </div>
        </div>
      </section>
    </div>
  );
}

// Use a type assertion to add the getLayout property to the page component
const PageWithLayout = FundraisingPage as any;
PageWithLayout.getLayout = function getLayout(page: React.ReactNode) {
  return <ClientLayout>{page}</ClientLayout>;
};

export default PageWithLayout;
