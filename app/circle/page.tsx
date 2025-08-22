'use client';

import { useState, useEffect } from 'react';
import { Rocket, Users, Star, Check, ArrowRight, ChevronRight, Handshake, Briefcase, MessageSquare, Award, Zap, UserCheck, BarChart2, Target, Lightbulb, TrendingUp, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './testimonials.module.css';
import SectionHeader from '../../components/SectionHeader';
import NeoPopButton from '../../components/ui/NeoPopButton';
import ClientLayout from '../ClientLayout';
import BuildersTeam from '../../components/BuildersTeam';

const AdvisorsGrid = dynamic(() => import('../../components/AdvisorsGrid'), {
  ssr: false,
});

const MembershipSection = dynamic(() => import('../../components/MembershipSection'), {
  ssr: false,
});

function BuildersCircle() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  
  const handleVideoClick = (videoId: string) => {
    setPlayingVideo(videoId === playingVideo ? null : videoId);
  };

  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-yellow-400" />,
      title: 'Exclusive Access',
      description: 'Get early access to premium content, tools, and resources before anyone else.',
      gradient: 'from-amber-500/10 to-yellow-500/5',
      borderColor: 'border-amber-500/30',
      hoverBorderColor: 'border-yellow-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-amber-500/15 hover:to-yellow-500/10',
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: 'Private Community',
      description: 'Connect with like-minded builders in our exclusive members-only community.',
      gradient: 'from-yellow-500/10 to-amber-500/5',
      borderColor: 'border-yellow-500/30',
      hoverBorderColor: 'border-amber-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-yellow-500/15 hover:to-amber-500/10',
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: 'Expert Guidance',
      description: 'Learn from industry experts and successful entrepreneurs in our mastermind sessions.',
      gradient: 'from-amber-600/10 to-yellow-600/5',
      borderColor: 'border-amber-600/30',
      hoverBorderColor: 'border-yellow-500/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-amber-600/15 hover:to-yellow-600/10',
    },
    {
      icon: <Check className="w-8 h-8 text-yellow-400" />,
      title: 'Hands-on Support',
      description: 'Get personalized feedback and support for your projects from our team of experts.',
      gradient: 'from-yellow-600/10 to-amber-600/5',
      borderColor: 'border-yellow-600/30',
      hoverBorderColor: 'border-amber-500/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-yellow-600/15 hover:to-amber-600/10',
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: 'Network',
      description: 'Meet new curated founders, investors and CXOs every month.',
      gradient: 'from-blue-500/10 to-indigo-500/5',
      borderColor: 'border-blue-500/30',
      hoverBorderColor: 'border-indigo-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-blue-500/15 hover:to-indigo-500/10',
    },
    {
      icon: <Handshake className="w-8 h-8 text-yellow-400" />,
      title: 'Business Referrals',
      description: 'Business referral among the circle members + Get top industry connects from the club',
      gradient: 'from-purple-500/10 to-pink-500/5',
      borderColor: 'border-purple-500/30',
      hoverBorderColor: 'border-pink-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-purple-500/15 hover:to-pink-500/10',
    },
    {
      icon: <UserCheck className="w-8 h-8 text-yellow-400" />,
      title: 'Co-Founder Connect',
      description: 'Looking for a co-founder? Meet potential co-founders in the club.',
      gradient: 'from-green-500/10 to-teal-500/5',
      borderColor: 'border-green-500/30',
      hoverBorderColor: 'border-teal-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-green-500/15 hover:to-teal-500/10',
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-yellow-400" />,
      title: 'Build in Public',
      description: 'Share your progress, get feedback, and learn from others in the community.',
      gradient: 'from-rose-500/10 to-red-500/5',
      borderColor: 'border-rose-500/30',
      hoverBorderColor: 'border-red-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-rose-500/15 hover:to-red-500/10',
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: 'Mentorship',
      description: 'Get guidance from experienced entrepreneurs and industry experts.',
      gradient: 'from-amber-500/10 to-orange-500/5',
      borderColor: 'border-amber-500/30',
      hoverBorderColor: 'border-orange-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-amber-500/15 hover:to-orange-500/10',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-yellow-400" />,
      title: 'Investor Access',
      description: 'Connect with angel investors and VCs looking to fund promising startups.',
      gradient: 'from-emerald-500/10 to-cyan-500/5',
      borderColor: 'border-emerald-500/30',
      hoverBorderColor: 'border-cyan-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-emerald-500/15 hover:to-cyan-500/10',
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-yellow-400" />,
      title: 'Workshops',
      description: 'Participate in exclusive workshops and masterclasses on various topics.',
      gradient: 'from-violet-500/10 to-fuchsia-500/5',
      borderColor: 'border-violet-500/30',
      hoverBorderColor: 'border-fuchsia-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-violet-500/15 hover:to-fuchsia-500/10',
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: 'Accountability',
      description: 'Stay on track with your goals through our accountability framework.',
      gradient: 'from-sky-500/10 to-blue-500/5',
      borderColor: 'border-sky-500/30',
      hoverBorderColor: 'border-blue-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-sky-500/15 hover:to-blue-500/10',
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Pitch Practice',
      description: 'Practice your pitch and get feedback from experienced founders.',
      gradient: 'from-yellow-500/10 to-amber-500/5',
      borderColor: 'border-yellow-500/30',
      hoverBorderColor: 'border-amber-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-yellow-500/15 hover:to-amber-500/10',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: 'Idea Validation',
      description: 'Test your startup ideas with a community of builders and experts.',
      gradient: 'from-lime-500/10 to-green-500/5',
      borderColor: 'border-lime-500/30',
      hoverBorderColor: 'border-green-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-lime-500/15 hover:to-green-500/10',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      title: 'Growth Hacking',
      description: 'Learn growth strategies that work from successful founders.',
      gradient: 'from-orange-500/10 to-red-500/5',
      borderColor: 'border-orange-500/30',
      hoverBorderColor: 'border-red-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-orange-500/15 hover:to-red-500/10',
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

  // Define the type for circle positions
  interface CirclePosition {
    size: number;
    left: number;
    top: number;
  }

  const [circlePositions, setCirclePositions] = useState<CirclePosition[]>([]);

  useEffect(() => {
    const positions: CirclePosition[] = [];  // Add type annotation here
    for (let i = 0; i < 15; i++) {
      const size = 150 + (i * 10);
      const left = 10 + (i * 6);
      const top = 10 + ((i * 20) % 80);
      positions.push({ size, left, top });
    }
    setCirclePositions(positions);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden z-10">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center relative">
              <div className="inline-flex items-center px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6 z-20">
                A TBC INITIATIVE
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-center">
                <span className="text-yellow-400">The Builders Circle</span> <br />
                <span className="text-xl md:text-2xl font-normal text-gray-300 mt-4 block">Where Leaders Build Together</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                A peer-driven business community for founders and senior professionals to connect, exchange opportunities, and solve real business challenges — enabled by expert advisors and strategic partners.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <NeoPopButton
                  as="link"
                  href="https://nas.io/tbc"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                >
                  Register for The Circle
                </NeoPopButton>
                <Link href="/advisors" className="block">
                  <NeoPopButton
                    as="button"
                    variant="secondary"
                    size="lg"
                    className="flex items-center gap-2 w-full"
                  >
                    List of advisors
                    <ChevronRight className="w-5 h-5" />
                  </NeoPopButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About The Circle Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  About <span className="text-yellow-400">the Circle</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  The Builders Circle is not just networking — it&apos;s a high-trust space where decision-makers collaborate to accelerate each other&apos;s growth.
                </p>
                <p className="text-xl text-gray-300">
                  Through curated sessions, direct access to advisors, and exclusive events, members gain insights, opportunities, and connections that move businesses forward.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  What You Get as a <span className="text-yellow-400">Member</span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                    <h4 className="text-xl font-semibold text-yellow-400 mb-3">1. Monthly Give & Take Sessions</h4>
                    <p className="text-gray-300">Exchange opportunities, leads, and strategic introductions with fellow members.</p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                    <h4 className="text-xl font-semibold text-yellow-400 mb-3">2. Monthly Breakfast with Advisors</h4>
                    <p className="text-gray-300">Engage with seasoned CXOs and industry experts over curated, topic-led discussions.</p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                    <h4 className="text-xl font-semibold text-yellow-400 mb-3">3. One Review Call with TBC Team</h4>
                    <p className="text-gray-300">Track your business needs and close gaps with personalized follow-up.</p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                    <h4 className="text-xl font-semibold text-yellow-400 mb-3">4. Free Access to All TBC Events</h4>
                    <p className="text-gray-300">Attend high-impact summits, roundtables, and masterclasses at no additional cost.</p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                    <h4 className="text-xl font-semibold text-yellow-400 mb-3">5. CXO Advisory Panel Access</h4>
                    <p className="text-gray-300">Get feedback on your challenges from an experienced panel of executives.</p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                    <h4 className="text-xl font-semibold text-yellow-400 mb-3">6. Partner Perks</h4>
                    <p className="text-gray-300">Enjoy exclusive business tools, software credits, and service discounts worth over $100K.</p>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <NeoPopButton
                    as="link"
                    href="https://nas.io/tbc"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    className="mx-auto"
                  >
                    Join The Circle Now
                  </NeoPopButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join The Builders Circle Section */}
        <section className="py-20 bg-black relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="relative bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 rounded-2xl p-10 md:p-16 overflow-hidden border border-white/10">
              <div className="relative z-10 max-w-6xl mx-auto">
                <div className="mb-16">
                  <SectionHeader
                    title="Why Join"
                    highlightedText="The Builders Circle?"
                    description="An offline network of funded and growth stage founders dedicated to scaling their business enabled by advisors, partners and investors."
                    badgeText="Community"
                    align="center"
                    titleClassName="text-3xl md:text-4xl lg:text-5xl"
                  />
                </div>
                
                {/* Video Carousel */}
                <div className="mb-16">
                  <SectionHeader
                    title="Hear From Our"
                    highlightedText="Community"
                    align="center"
                    className="mb-10"
                    titleClassName="text-3xl md:text-4xl"
                  />
                  
                  <div className="relative">
                    <div className="flex overflow-x-auto pb-8 -mx-4 snap-x snap-mandatory scrollbar-hide">
                      <div className="flex space-x-6">
                        {[
                          {
                            id: 'F0hIWT5HNsY',
                            title: 'The Builders Circle: Founder Stories',
                            description: 'Hear directly from our founders about their journey with The Builders Circle.'
                          },
                          {
                            id: '6J_o7rbTVmA',
                            title: 'Building Together: The Community Experience',
                            description: 'Discover the power of our collaborative founder community.'
                          },
                          {
                            id: 'DUmuQi95KM0',
                            title: 'Growth & Success in The Builders Circle',
                            description: 'Learn how our members achieve remarkable growth together.'
                          }
                        ].map((video, index) => (
                          <div 
                            key={video.id}
                            className="w-[300px] md:w-[400px] flex-shrink-0 snap-center"
                          >
                            <div className="relative group bg-black/30 rounded-xl overflow-hidden border border-white/10 hover:border-[#FFD700]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/20">
                              <div className="relative aspect-video">
                                {playingVideo === video.id ? (
                                  <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  ></iframe>
                                ) : (
                                  <>
                                    <Image
                                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                      alt={video.title}
                                      fill
                                      className="object-cover cursor-pointer"
                                      onClick={() => handleVideoClick(video.id)}
                                    />
                                    <div 
                                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-30 transition-opacity"
                                      onClick={() => handleVideoClick(video.id)}
                                    ></div>
                                    <div 
                                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                      onClick={() => handleVideoClick(video.id)}
                                    >
                                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                                        <Play className="w-6 h-6 md:w-8 md:h-8 text-black ml-1" />
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                              <div className="p-6">
                                <h4 className="text-xl font-bold text-white mb-2">{video.title}</h4>
                                <p className="text-white/80 text-sm">{video.description}</p>
                                <button 
                                  className="mt-4 text-[#FFD700] text-sm font-medium flex items-center group"
                                  onClick={() => handleVideoClick(video.id)}
                                >
                                  {playingVideo === video.id ? 'Playing' : 'Play Video'}
                                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Scroll indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                      {[0, 1, 2, 3].map((dot) => (
                        <button 
                          key={dot}
                          className="w-2 h-2 rounded-full bg-white/30 hover:bg-[#FFD700] transition-colors"
                          aria-label={`Go to slide ${dot + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017] px-8 py-3 text-lg inline-flex mx-auto mt-6 shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://nas.io/tbc"
                  >
                    Join the Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Section */}
        <MembershipSection />

        {/* Advisors Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-16">
              <SectionHeader
                title="Meet Our Esteemed"
                highlightedText="Advisors"
                description="Learn from and connect with industry leaders and domain experts from top companies"
                badgeText="Expert Network"
                align="center"
                titleClassName="text-3xl md:text-4xl lg:text-5xl"
              />
            </div>
            <div className="relative">
              <AdvisorsGrid />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader
              title="What Our Members"
              highlightedText="Say"
              description="Hear from founders and executives who have transformed their businesses with our network."
              badgeText="Testimonials"
              align="center"
              titleClassName="text-3xl md:text-4xl lg:text-5xl"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[{
                id: 1,
                quote: "The Builders Circle has been pivotal in helping us find the right advisors for our US GTM strategy. The connections and insights from the community have been invaluable. I've also made some great friends here, which has made the journey even more rewarding.",
                author: "Vivek Prashanth",
                role: "COO, Livquik",
                initial: "V"
              },
              {
                id: 2,
                quote: "The Builders Circle has been a game-changer for me as a founder. It's an incredible community where I can truly lean on other founders for support and insights. The knowledge and strategies I've gained have been instrumental in running my business more effectively.",
                author: "Sumit Rastogi",
                role: "Cofounder, Artinci",
                initial: "S"
              },
              {
                id: 3,
                quote: "The Builders Circle is a powerhouse for business growth and cross-business opportunities. It's not just about networking — it's about connecting with the right people who can drive high growth in enterprises.",
                author: "Amit Mishra",
                role: "CEO, Dazeinfo",
                initial: "A"
              }
              ].map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`${styles.testimonialCard} bg-gradient-to-br from-gray-900/80 to-gray-900/50 p-8 rounded-2xl border border-gray-800`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: 'forwards',
                    animationDuration: '0.8s',
                    animationTimingFunction: 'ease-out',
                    animationName: 'fadeInUp'
                  }}
                >
                  <div className="text-yellow-400 mb-6">
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.2 0L9.2 30H0L10 0H15.2ZM40 0L34 30H24.8L34.8 0H40Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold text-lg mr-4">
                      {testimonial.initial}
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

        {/* Builders Team Section */}
        <BuildersTeam />

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
                  className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 p-6 rounded-xl border border-gray-800"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Trusted By Leaders Section */}
        <section className="w-full py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          {/* Static background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {circlePositions.map((position, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-yellow-400/10 transition-all duration-1000"
                style={{
                  width: `${position.size}px`,
                  height: `${position.size}px`,
                  left: `${position.left}%`,
                  top: `${position.top}%`,
                  opacity: 0.7,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block">
                  <div
                    className="px-4 py-1.5 bg-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-4 inline-flex items-center"
                  >
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                    </span>
                    Trusted by the best
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Backed by <span className="text-yellow-400">Industry Leaders</span>
                </h2>
                
                <p className="text-gray-300 text-lg md:text-xl max-w-lg">
                  Join an elite network of visionaries and innovators from the world&apos;s most influential companies.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <NeoPopButton
                    as="link"
                    href="#WIP-membership"
                    variant="primary"
                  >
                    Join the Network
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </NeoPopButton>
                  
                  <NeoPopButton
                    as="button"
                    variant="secondary"
                    className="bg-transparent border border-yellow-400/30"
                  >
                    View Success Stories
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </NeoPopButton>
                </div>
                
                <div className="mt-12 flex flex-wrap justify-center gap-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-300">Rated 5/5 by 1000+ members</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10 bg-gradient-to-br from-yellow-400 to-amber-500 p-1 rounded-3xl shadow-2xl shadow-yellow-500/20">
                  <div className="bg-gray-900 p-6 md:p-8 rounded-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Apple', 'Tesla', 'Airbnb', 'Uber'].map((company, i) => (
                        <div 
                          key={company}
                          className="bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-yellow-400/20 flex items-center justify-center h-24"
                        >
                          <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-400">{company}</div>
                            <div className="text-xs text-yellow-400/70 mt-1">Partner</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div 
                  className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400/20 rounded-full filter blur-xl"
                />
                <div 
                  className="absolute -bottom-8 -right-8 w-40 h-40 bg-yellow-400/10 rounded-full filter blur-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900/80 -z-10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Now in <span className="text-yellow-400">4 Cities</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our growing community with active chapters in Bangalore, Delhi, Mumbai, and Pune
            </p>
            <NeoPopButton 
              variant="primary"
              size="lg"
            >
              REGISTER NOW
              <ArrowRight className="w-5 h-5 ml-2" />
            </NeoPopButton>
            
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

// Use a type assertion to add the getLayout property to the page component
const PageWithLayout = BuildersCircle as any;
PageWithLayout.getLayout = function getLayout(page: React.ReactNode) {
  return <ClientLayout>{page}</ClientLayout>;
};

export default PageWithLayout;
