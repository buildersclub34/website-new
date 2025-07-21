'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Rocket, Users, Star, Check, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function BuildersCircle() {
  const features = [
    {
      title: 'network',
      description: 'Meet new curated founders, investors and CXOs every month.'
    },
    {
      title: 'Business Referrals',
      description: 'Business referral among the circle members + Get top industry connects from the club'
    },
    {
      title: 'Advisory Network',
      description: 'Access 100+ advisors from all industries & domains'
    },
    {
      title: 'Fundraising Support',
      description: 'Help you get connected with investors for your next fundraise'
    },
    {
      title: 'Vendor Connect',
      description: 'Access to best quality service providers at your finger tips'
    },
    {
      title: 'Member Directory',
      description: 'Connect with any circle member across the globe'
    }
  ];

  const growthCircleBenefits = [
    'Business Referrals',
    'Product Demos for your product within the community',
    'Monthly Board Room meetings for help & advice',
    'Exclusive Mixers',
    'Access to curated partner events',
    'Meet new curated founders, investors and CXOs every month',
    'Exclusive Investor Connects',
    'Pitch deck circulated in co-investor network',
    '1:1 advisory with investors',
    'Profile and company milestones covered & amplified by TBC platform',
    '$1000+ worth of Monthly Value'
  ];

  const eliteCircleBenefits = [
    'Onboarded as advisory for The Builders Club',
    'Profile and company milestones covered & amplified by TBC platform',
    'CXO Roundtable invites',
    'Speaker Opportunities',
    'Connect with peer network of advisors, CXOs & Founders',
    'Exclusive Mixers',
    'Access to curated partner events',
    'Meet new curated founders, investors and CXOs every month',
    'Opportunity to invest in early stage startups',
    'Connect with VC / PE firms for next fundraise',
    '$5000+ worth of Monthly Value',
    'Rs. 1Cr+ worth of value created for current members'
  ];

  const testimonials = [
    {
      quote: "The Builders Circle has been pivotal in helping us find the right advisors for our US GTM strategy. The connections and insights from the community have been invaluable. I've also made some great friends here, which has made the journey even more rewarding.",
      author: "Vivek Prashanth",
      role: "COO, Livquik"
    },
    {
      quote: "The Builders Circle has been a game-changer for me as a founder. It's an incredible community where I can truly lean on other founders for support and insights. The knowledge and strategies I've gained have been instrumental in running my business more effectively.",
      author: "Sumit Rastogi",
      role: "Cofounder, Artinci"
    },
    {
      quote: "The Builders Circle is a powerhouse for business growth and cross-business opportunities. It's not just about networking — it's about connecting with the right people who can drive high growth in enterprises.",
      author: "Amit Mishra",
      role: "CEO, Dazeinfo"
    }
  ];

  const faqs = [
    {
      question: "What is the eligibility for becoming a part of The Builders Circle?",
      answer: "For the growth circle, you need to at least be seed funded or doing a business of $200K. We also include a few startups who are a part of the fundraising track in this. For becoming a part of the elite circle, you need to be either an enterprise CXO or Series B+ Founder or CXO."
    },
    {
      question: "Are the circles region specific?",
      answer: "No, The Builders Circle is open to members globally."
    },
    {
      question: "How many circles are there?",
      answer: "There are two main circles: Growth Circle for early to mid-stage founders and Elite Circle for established founders and CXOs."
    },
    {
      question: "What are the membership charges?",
      answer: "Please contact us for detailed membership plans and pricing."
    }
  ];

  const [activeTab, setActiveTab] = useState('growth');

  return (
    <div className="min-h-screen bg-black">
      <main className="relative pt-16">
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10 bg-black"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 -z-10"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl -z-10" style={{ animationDelay: '3s' }}></div>
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden z-10">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center relative">
              <div className="inline-flex items-center px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-6 backdrop-blur-sm z-20">
                <Rocket className="w-5 h-5 mr-2" />
                A TBC INITIATIVE
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="text-yellow-400">THE</span> <br />
                <span className="text-yellow-400">BUILDERS</span> <br />
                <span className="text-yellow-400">CIRCLE</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                An offline network of funded and growth stage founders dedicated to scaling their business enabled by advisors, partners and investors.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="https://nas.io/tbc" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neopop-btn neopop-primary text-lg"
                >
                  Register for Trial Session
                </a>
                <a 
                  href="#" 
                  className="neopop-btn neopop-secondary text-lg flex items-center gap-2"
                >
                  List of advisors
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader
              badgeText="Why Join Us"
              title="Everything You Need to"
              highlightedText="Scale Your Business"
              description="Access a curated network of founders, investors, and industry experts to accelerate your growth journey."
              icon={<Star className="w-5 h-5" />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/10"
                >
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6 border border-yellow-500/20">
                    <Check className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white capitalize">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Circles Comparison */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader
              badgeText="Membership"
              title="Choose Your"
              highlightedText="Circle"
              description="Select the membership that best fits your current stage and goals."
              icon={<Users className="w-5 h-5" />}
            />
            
            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1 bg-gray-800 rounded-full">
                <button 
                  onClick={() => setActiveTab('growth')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === 'growth' 
                      ? 'bg-yellow-500 text-black' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Growth Circle
                </button>
                <button 
                  onClick={() => setActiveTab('elite')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === 'elite' 
                      ? 'bg-yellow-500 text-black' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Elite Circle
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Growth Circle */}
              <div className={`bg-gradient-to-br from-gray-900/80 to-gray-900/50 p-8 rounded-2xl border-2 transition-all duration-300 ${
                activeTab === 'growth' ? 'border-yellow-500 shadow-2xl shadow-yellow-500/10' : 'border-gray-800'
              }`}>
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Growth Circle</h3>
                <div className="mb-8">
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-white mb-2">Perfect For:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-gray-300">Seed to series A Founders</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-gray-300">Businesses doing $200K+</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-gray-300">Select startups in fundraising Track</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-white mb-3">Advisory Panel:</h4>
                    <p className="text-gray-400">Enterprise CXOs, Founders & investors</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {growthCircleBenefits.slice(0, 6).map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-yellow-400 mr-2 mt-1">•</span>
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button className="w-full neopop-btn neopop-primary group">
                  Join Growth Circle
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              {/* Elite Circle */}
              <div className={`bg-gradient-to-br from-yellow-500/5 via-yellow-500/10 to-yellow-500/5 p-8 rounded-2xl border-2 transition-all duration-300 ${
                activeTab === 'elite' ? 'border-yellow-500 shadow-2xl shadow-yellow-500/20' : 'border-yellow-500/30'
              } relative overflow-hidden`}>
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Elite Circle</h3>
                <div className="mb-8">
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-white mb-2">Perfect For:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-gray-300">Series B+ Founders & CXOs</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-gray-300">Businesses doing $5mn+</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-gray-300">Enterprise CXOs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-white mb-3">Exclusive Benefits:</h4>
                    <ul className="space-y-3">
                      {eliteCircleBenefits.slice(0, 6).map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-yellow-400 mr-2 mt-1">•</span>
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button className="w-full neopop-btn neopop-primary group">
                  Join Elite Circle
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader
              badgeText="Testimonials"
              title="What Our Members"
              highlightedText="Say"
              description="Hear from founders and executives who have transformed their businesses with our network."
              icon={<Star className="w-5 h-5" />}
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-900/80 to-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10"
                >
                  <div className="text-yellow-400 mb-6">
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.2 0L9.2 30H0L10 0H15.2ZM40 0L34 30H24.8L34.8 0H40Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-gray-300 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold text-lg mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900/80"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <SectionHeader
              badgeText="FAQs"
              title="Frequently Asked"
              highlightedText="Questions"
              description="Find answers to common questions about The Builders Circle membership and benefits."
              icon={<Check className="w-5 h-5" />}
            />
            
            <div className="space-y-6 mt-12">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 p-6 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-black to-yellow-500/5"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Now in <span className="text-yellow-400">4 Cities</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our growing community with active chapters in Bangalore, Delhi, Mumbai, and Pune
            </p>
            <Button className="neopop-btn neopop-primary group">
              REGISTER NOW
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {['Bangalore', 'Delhi', 'Mumbai', 'Pune'].map((city, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
