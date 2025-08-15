'use client';

import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import NeoPopButton from './ui/NeoPopButton';

type MembershipTier = 'growth' | 'elite';

export default function MembershipSection() {
  const [activeTier, setActiveTier] = useState<MembershipTier>('growth');

  const features = {
    growth: [
      'Business Referrals',
      'Product Demos within the community',
      'Monthly Board Room meetings',
      'Exclusive Mixers',
      'Access to curated partner events',
      'Meet new curated founders, investors and CXOs monthly'
    ],
    elite: [
      'Onboarded as advisory for The Builders Club',
      'Profile and company milestones amplified by TBC',
      'CXO Roundtable invites',
      'Speaker Opportunities',
      'Connect with peer network of advisors, CXOs & Founders',
      'Exclusive Mixers'
    ]
  };

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-yellow-500 uppercase rounded-full bg-yellow-500/10 mb-4">
            Membership
          </span>
          <h2 className="font-black text-white mb-4 text-4xl md:text-5xl">
            Choose Your <span className="text-yellow-400">Circle</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Join the right circle to accelerate your growth and connect with like-minded professionals
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-900/50 rounded-full border border-gray-800">
            <NeoPopButton
              as="button"
              onClick={() => setActiveTier('growth')}
              variant={activeTier === 'growth' ? 'primary' : 'secondary'}
              className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTier === 'growth' ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900' : 'bg-transparent text-gray-400 hover:text-white'
              }`}
            >
              Growth Circle
            </NeoPopButton>
            <NeoPopButton
              as="button"
              onClick={() => setActiveTier('elite')}
              variant={activeTier === 'elite' ? 'primary' : 'secondary'}
              className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTier === 'elite' ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900' : 'bg-transparent text-gray-400 hover:text-white'
              }`}
            >
              Elite Circle
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                POPULAR
              </span>
            </NeoPopButton>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Growth Circle Card */}
          <div 
            className={`flex flex-col bg-gradient-to-br from-gray-900/80 to-gray-900/50 rounded-2xl p-8 border-2 transition-all duration-300 ${
              activeTier === 'growth' 
                ? 'border-yellow-500/50 shadow-lg shadow-yellow-500/10' 
                : 'border-gray-800 opacity-75'
            }`}
          >
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-1">Growth Circle</h3>
                <p className="text-gray-400">For ambitious startups on the rise</p>
              </div>

              <div className="mb-8">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-white mb-3">Perfect For:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Seed to series A Founders</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Businesses doing $200K+</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Select startups in fundraising Track</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Advisory Panel:</h4>
                  <p className="text-gray-400">Enterprise CXOs, Founders & Investors</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {features.growth.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-400 mr-2 mt-1">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-4">
              <NeoPopButton
                as="link"
                href="/join/growth"
                variant="primary"
                size="lg"
                className="w-full px-6 py-4 text-lg font-bold uppercase"
              >
                Join Growth Circle
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </NeoPopButton>
            </div>
          </div>

          {/* Elite Circle Card */}
          <div 
            className={`flex flex-col relative overflow-hidden rounded-2xl p-8 border-2 transition-all duration-300 ${
              activeTier === 'elite'
                ? 'border-yellow-500/50 shadow-lg shadow-yellow-500/10'
                : 'border-gray-800 opacity-75'
            } bg-gradient-to-br from-yellow-500/5 via-yellow-500/10 to-yellow-500/5`}
          >
            <div>
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <div className="mb-6 pr-16">
                <h3 className="text-2xl font-bold text-yellow-400 mb-1">Elite Circle</h3>
                <p className="text-gray-400">For established leaders and visionaries</p>
              </div>

              <div className="mb-8">
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-white mb-3">Perfect For:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Series B+ Founders & CXOs</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Businesses doing $5M+</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Enterprise CXOs</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Exclusive Benefits:</h4>
                  <ul className="space-y-3">
                    {features.elite.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-400 mr-2 mt-1">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-4">
              <NeoPopButton
                as="link"
                href="/join/elite"
                variant="primary"
                size="lg"
                className="w-full px-6 py-4 text-lg font-bold uppercase"
              >
                Join Elite Circle
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </NeoPopButton>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Not sure which circle is right for you?</p>
          <NeoPopButton
            as="link"
            href="/contact"
            variant="secondary"
            className="text-yellow-400 hover:text-yellow-300 font-medium bg-transparent border-0 hover:bg-transparent hover:shadow-none"
          >
            Contact our team for guidance
            <ArrowRight className="w-4 h-4 ml-1" />
          </NeoPopButton>
        </div>
      </div>
    </section>
  );
}
