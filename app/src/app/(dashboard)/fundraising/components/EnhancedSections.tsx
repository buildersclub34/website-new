import { Zap, Users, BarChart2, Target, Lightbulb, Check, ChevronRight, Play, MessageSquare, ArrowRight, Award, Clock, Shield, Handshake, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import NeoPopButton from '../../../components/ui/NeoPopButton';
import SectionHeader from '../../../components/SectionHeader';

export const WhyFundWithUs = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Targeted Investor Network",
      description: "Access to 300+ VCs, angel networks, and accelerators that match your startup's stage and sector"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "End-to-End Support",
      description: "From pitch deck preparation to term sheet negotiation, we're with you at every step"
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-yellow-400" />,
      title: "Data-Driven Matching",
      description: "Our algorithm matches you with investors based on their investment thesis and your startup's profile"
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: "Focused Approach",
      description: "We help you focus on the right investors to maximize your fundraising efficiency"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: "Strategic Guidance",
      description: "Expert advice on valuation, cap table management, and investor relations"
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: "Legal Support",
      description: "Access to legal resources and templates for term sheets, SAFE notes, and more"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Why Raise With"
          highlightedText="The Builders Club"
          className="text-center mb-16"
          titleClassName="text-3xl md:text-4xl font-bold"
          description="We've helped 100+ startups raise over $50M in funding"
          badgeText="Fundraising"
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

export const FundraisingProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Application & Screening',
      description: 'Submit your application and go through our screening process to ensure the best fit',
      icon: <Check className="w-6 h-6 text-yellow-400" />
    },
    {
      number: '02',
      title: 'Deck & Materials Review',
      description: 'We help refine your pitch deck and prepare all necessary fundraising materials',
      icon: <MessageSquare className="w-6 h-6 text-yellow-400" />
    },
    {
      number: '03',
      title: 'Investor Matching',
      description: 'We identify and introduce you to the most relevant investors in our network',
      icon: <Users className="w-6 h-6 text-yellow-400" />
    },
    {
      number: '04',
      title: 'Pitch & Negotiation',
      description: 'Pitch to investors with our support and negotiate the best terms',
      icon: <Handshake className="w-6 h-6 text-yellow-400" />
    },
    {
      number: '05',
      title: 'Due Diligence',
      description: 'We assist with the due diligence process to close the round efficiently',
      icon: <Shield className="w-6 h-6 text-yellow-400" />
    },
    {
      number: '06',
      title: 'Funds Disbursement',
      description: 'Celebrate your successful fundraise and focus on building your business',
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Fundraising"
          highlightedText="Process"
          className="text-center mb-16"
          titleClassName="text-3xl md:text-4xl font-bold"
          description="A clear, step-by-step approach to securing your next round"
          badgeText="How It Works"
        />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500/30 via-yellow-500/30 to-yellow-500/30 -z-10"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start group">
                <div className="absolute left-0 w-16 h-16 flex items-center justify-center -ml-0.5">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                    {step.icon}
                  </div>
                </div>
                <div className="ml-20">
                  <div className="inline-block px-4 py-1 bg-yellow-500/10 text-yellow-400 text-sm font-medium rounded-full mb-3">
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SuccessStories = () => {
  const stories = [
    {
      title: "SaaS Platform Raised $2M",
      description: "Helped a B2B SaaS platform secure $2M in seed funding from top-tier VCs",
      amount: "$2M",
      type: "Seed Round"
    },
    {
      title: "AI Startup's Series A",
      description: "Assisted an AI startup in closing their $5M Series A with strategic investors",
      amount: "$5M",
      type: "Series A"
    },
    {
      title: "Pre-Seed Success",
      description: "Supported a pre-revenue startup in raising $500K pre-seed funding",
      amount: "$500K",
      type: "Pre-Seed"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Success"
          highlightedText="Stories"
          className="text-center mb-16"
          titleClassName="text-3xl md:text-4xl font-bold"
          description="Real results from startups we've helped fundraise"
          badgeText="Case Studies"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 p-8 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <div className="text-yellow-400 text-3xl font-bold mb-4">{story.amount}</div>
              <h3 className="text-xl font-bold text-white mb-3">{story.title}</h3>
              <p className="text-gray-300 mb-4">{story.description}</p>
              <div className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-medium rounded-full">
                {story.type}
              </div>
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
      question: "How long does the fundraising process typically take?",
      answer: "The timeline varies but typically ranges from 3-6 months from initial outreach to fund disbursement, depending on the stage of your startup and the current market conditions."
    },
    {
      question: "What types of investors are in your network?",
      answer: "Our network includes 300+ VCs, angel investors, family offices, and corporate venture arms, with check sizes ranging from $50K to $5M+."
    },
    {
      question: "Do you take equity for your services?",
      answer: "We offer both retainer-based and success-fee models. The exact terms depend on the size of the raise and the level of support required."
    },
    {
      question: "What stage should my startup be at to work with you?",
      answer: "We work with startups at various stages, from pre-seed to Series B. The most important factors are having a working product and some initial traction."
    },
    {
      question: "How do you help with investor negotiations?",
      answer: "We provide guidance on term sheets, help with valuation discussions, and ensure you get fair terms while maintaining good investor relationships."
    },
    {
      question: "What's included in your fundraising support package?",
      answer: "Our comprehensive package includes pitch deck review, financial modeling, investor targeting, warm introductions, negotiation support, and assistance with closing documentation."
    }
  ];

  return (
    <section className="py-20 bg-black">
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

export const FinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-yellow-500/5 to-yellow-500/10">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to raise your next funding round?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the growing list of startups that have successfully raised capital through our network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://tally.so/r/n9JBXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017] px-8 py-3 text-lg shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none w-full sm:w-auto"
            >
              Apply for Fundraising Support
            </a>
            <a 
              href="/discovery-calls"
              className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-transparent hover:bg-[#FFD700]/10 active:bg-[#FFD700]/20 text-[#FFD700] border-[#D4A017] px-8 py-3 text-lg shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none w-full sm:w-auto"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
