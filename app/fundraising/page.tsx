'use client';

import styles from './page.module.css';
import Link from 'next/link';
import ClientLayout from '../ClientLayout';

function FundraisingPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">FUNDRAISING SUPPORT</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-6">LOOKING TO RAISE FUNDS?</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          We help you raise your next funding round through our co-investor network of 300+ VCs, angel networks, and accelerators.
        </p>
        
        <div className={styles.buttonContainer}>
          <Link 
            href="https://tally.so/r/n9JBXX" 
            className={`${styles.neopopButton} ${styles.neopopPrimary} ${styles.mainCta}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            APPLY NOW
          </Link>
          <Link 
            href="/discovery-calls" 
            className={`${styles.neopopButton} ${styles.neopopSecondary} ${styles.mainCta}`}
          >
            BOOK A DISCOVERY CALL
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Support system for your fundraising journey</h2>
        
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
          <Link 
            href="https://tally.so/r/n9JBXX" 
            className={`${styles.neopopButton} ${styles.neopopPrimary} ${styles.mainCta} inline-block`}
            target="_blank"
            rel="noopener noreferrer"
          >
            REGISTER IF YOU ARE RAISING YOUR NEXT ROUND
          </Link>
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
            <Link 
              href="https://forms.gle/z3mMhV819uChX7dr6" 
              className={`${styles.neopopButton} ${styles.neopopSecondary} ${styles.mainCta} inline-block`}
              target="_blank"
              rel="noopener noreferrer"
            >
              REGISTER AS INVESTOR
            </Link>
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
