'use client';

import ClientLayout from '../ClientLayout';
import NeoPopButton from '../../components/ui/NeoPopButton';
import SectionHeader from '../../components/SectionHeader';

function FundraisingPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="text-center">
          <SectionHeader
            title="FUNDRAISING SUPPORT"
            subtitle="We help you raise your next funding round through our co-investor network of 300+ VCs, angel networks, and accelerators."
            className="mb-8"
            titleClassName="text-4xl md:text-6xl font-bold"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-8">LOOKING TO RAISE FUNDS?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <NeoPopButton 
              as="link"
              href="https://tally.so/r/n9JBXX" 
              variant="primary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              APPLY NOW
            </NeoPopButton>
            <NeoPopButton 
              as="link"
              href="/discovery-calls" 
              variant="secondary"
              size="lg"
            >
              BOOK A DISCOVERY CALL
            </NeoPopButton>
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
