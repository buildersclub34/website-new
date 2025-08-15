import React from 'react';
import { Handshake, Lightbulb, Target, Users as UsersIcon } from 'lucide-react';
import NeoPopButton from './ui/NeoPopButton';
import Link from 'next/link';

const CorporatesSection = () => {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 bg-yellow-400 text-black rounded-full text-sm font-bold mb-6">
            <Handshake className="w-4 h-4 mr-2" />
            For Corporates & Enterprises
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Gateway to <span className="text-yellow-400">Business Innovation</span> & <span className="text-yellow-400">Strategic Partnerships</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            We work with forward-thinking corporates to drive innovation, business development, and industry leadership through access to our vast network of founders, CXOs, and investors.
          </p>
          
          <div className="bg-yellow-400/10 border-2 border-yellow-400/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">How We Help Enterprises:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                {
                  icon: UsersIcon,
                  title: "Access to Decision Makers",
                  description: "Reach the decision makers in enterprises, SMBs and Growth Stage startups"
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Partnerships",
                  description: "Connect with startups & scale-ups for cutting-edge solutions"
                },
                {
                  icon: Target,
                  title: "Business Development",
                  description: "Expand your market reach through strategic partnerships"
                },
                {
                  icon: Handshake,
                  title: "Brand Positioning",
                  description: "Showcase thought leadership via events, content, and collaborations"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <Link href="/partner-registration">
                <NeoPopButton 
                  className="text-lg px-8 py-4 mx-auto"
                  variant="primary"
                  size="lg"
                >
                  Partner with The Builders Club
                </NeoPopButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporatesSection;
