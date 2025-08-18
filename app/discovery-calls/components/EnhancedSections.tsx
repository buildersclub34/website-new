import { Zap, Users, BarChart2, Target, Lightbulb, Check, ChevronRight, Play, MessageSquare, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import NeoPopButton from '../../../components/ui/NeoPopButton';
import SectionHeader from '../../../components/SectionHeader';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Targeted Audience",
      description: "Connect with highly engaged builders and founders who are actively looking for new solutions."
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "Curated Matches",
      description: "We carefully match you with participants who fit your ideal customer profile."
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-yellow-400" />,
      title: "Actionable Insights",
      description: "Get detailed feedback and data to inform your product decisions."
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: "Focused Feedback",
      description: "Structured sessions designed to extract the most valuable insights."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: "Expert Facilitation",
      description: "Our team ensures productive and insightful discovery sessions."
    },
    {
      icon: <Check className="w-8 h-8 text-yellow-400" />,
      title: "No Commitment",
      description: "Start with a single session and scale based on your needs."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Why Choose Our"
          highlightedText="Discovery Calls"
          className="text-center mb-16"
          titleClassName="text-3xl md:text-4xl font-bold"
          badgeText="Benefits"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 p-8 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const VideoTestimonial = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 'F0hIWT5HNsY',
      title: 'Founder Success Story',
      description: 'How our discovery calls helped shape their product',
      thumbnail: '/images/discovery/founder-story.jpg'
    },
    {
      id: '6J_o7rbTVmA',
      title: 'Product Validation',
      description: 'Real feedback from real users',
      thumbnail: '/images/discovery/product-feedback.jpg'
    },
    {
      id: 'DUmuQi95KM0',
      title: 'The Process',
      description: 'See how our discovery calls work',
      thumbnail: '/images/discovery/process.jpg'
    }
  ];
  
  // Fallback background colors for each card
  const cardColors = ['bg-purple-900', 'bg-blue-900', 'bg-amber-900'];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="See It In"
          highlightedText="Action"
          className="text-center mb-16"
          titleClassName="text-3xl md:text-4xl font-bold"
          badgeText="Videos"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setPlayingVideo(video.id === playingVideo ? null : video.id)}
            >
              {playingVideo === video.id ? (
                <div className="aspect-video bg-black">
                  <iframe 
                    className="w-full h-full" 
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`} 
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="relative">
                  <div className={`aspect-video ${cardColors[index % cardColors.length]} flex items-center justify-center relative overflow-hidden`}>
                    {/* Thumbnail Image */}
                    <div className="absolute inset-0 w-full h-full">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // Hide the image on error to show the fallback background color
                          const target = e.target as HTMLElement;
                          target.style.display = 'none';
                        }}
                        unoptimized={process.env.NODE_ENV !== 'production'} // Only optimize in production
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-full flex items-center justify-center z-10 transform transition-all group-hover:scale-110 shadow-lg">
                      <Play className="w-6 h-6 text-black fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-white font-bold text-lg">{video.title}</h3>
                    <p className="text-gray-300 text-sm">{video.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a discovery call typically last?",
      answer: "Discovery calls typically last between 30-45 minutes, giving you ample time to present your product and gather valuable feedback from potential users."
    },
    {
      question: "What types of products are a good fit?",
      answer: "We work with a wide range of B2B and B2C products, especially those in the tech, SaaS, and digital product spaces. If you&apos;re building something innovative, we&apos;d love to hear about it!"
    },
    {
      question: "How are the participants selected?",
      answer: "Participants are carefully vetted to ensure they match your target audience. We review their background, interests, and expertise to provide you with the most relevant feedback."
    },
    {
      question: "What happens after the discovery call?",
      answer: "You'll receive a comprehensive report with key insights, feedback, and recommendations. We'll also schedule a follow-up call to discuss the findings and next steps."
    },
    {
      question: "How quickly can I schedule a session?",
      answer: "We typically need 3-5 business days to recruit participants after we understand your requirements. You'll be able to schedule your session once we've confirmed the participants."
    },
    {
      question: "Is there a minimum commitment?",
      answer: "No, you can start with a single session. Many clients find value in multiple sessions as they iterate on their product based on the feedback received."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          title="Frequently Asked"
          highlightedText="Questions"
          className="text-center mb-16"
          titleClassName="text-3xl md:text-4xl font-bold"
          badgeText="FAQ"
        />
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-800 pb-4"
            >
              <button
                className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <ChevronRight 
                  className={`w-5 h-5 text-yellow-400 transform transition-transform ${openFaq === index ? 'rotate-90' : ''}`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}
              >
                <p className="text-gray-300 pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-yellow-500/10 -z-10"></div>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to validate your product with real users?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join dozens of founders who&apos;ve refined their products through our discovery calls.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://wa.link/fioj4n" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017] px-8 py-3 text-lg shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none w-full sm:w-auto"
            >
              Book a Discovery Call
            </a>
            <a 
              href="#how-it-works"
              className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-transparent hover:bg-[#FFD700]/10 active:bg-[#FFD700]/20 text-[#FFD700] border-[#D4A017] px-8 py-3 text-lg shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
