import { Zap, Users, BarChart2, Target, Lightbulb, Check, ChevronRight, Play, MessageSquare, ArrowRight, Award, Clock, Shield, Handshake, TrendingUp, Send, Mail, Phone, MapPin, Globe } from 'lucide-react';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stage: '',
    funding: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', company: '', stage: '', funding: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const placeholderText = "Describe your revolutionary technology, market opportunity, competitive advantages, and why you're building the future...";

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden border-t-2 border-yellow-500/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl floating"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl floating" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/3 -left-20 w-64 h-64 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-yellow-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Ready to Build"
            highlightedText="the Future?"
            description="Let's connect and explore how we can work together to bring your vision to life."
            badgeText="Get in Touch"
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-black/50 backdrop-blur-sm border-2 border-yellow-500/30 rounded-3xl p-8 shadow-2xl shadow-yellow-500/10">
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mr-4 border border-yellow-500/50 shadow-lg shadow-yellow-500/20">
                    <Zap className="w-7 h-7 text-black" />
                  </div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Let&apos;s Connect</span>
                </h3>
                
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "hello@buildersclub.me", color: "from-blue-500 to-cyan-500" },
                    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "from-green-500 to-emerald-500" },
                    { icon: MapPin, label: "HQ", value: "San Francisco, CA", color: "from-purple-500 to-pink-500" },
                    { icon: Globe, label: "Global", value: "50+ Countries", color: "from-orange-500 to-red-500" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 group p-4 rounded-xl hover:bg-yellow-500/5 transition-all duration-300 border border-transparent hover:border-yellow-500/20">
                      <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/20">
                        <contact.icon className="w-7 h-7 text-black" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-lg group-hover:text-yellow-400 transition-colors">{contact.label}</p>
                        <p className="text-gray-400 group-hover:text-yellow-300 transition-colors">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Stories */}
              <div className="bg-black/50 backdrop-blur-sm border-2 border-yellow-500/30 rounded-3xl p-8 shadow-2xl shadow-yellow-500/10">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-3 border border-yellow-500/30">
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Success Stories</span>
                </h4>
                <div className="space-y-4">
                  {[
                    { company: "QuantumFlow", exit: "$500M Series B", time: "18 months" },
                    { company: "CarbonZero", exit: "$1.2B Series C", time: "24 months" },
                    { company: "SpaceLogistics", exit: "$800M Series B", time: "20 months" }
                  ].map((story, index) => (
                    <div key={index} className="flex justify-between items-center py-4 px-3 rounded-xl hover:bg-yellow-500/5 transition-colors border border-transparent hover:border-yellow-500/20">
                      <div>
                        <p className="font-bold text-white">{story.company}</p>
                        <p className="text-sm text-gray-400">{story.time} to exit</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-yellow-400">{story.exit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="glass-morphism border-0 shadow-2xl overflow-hidden rounded-3xl">
                <div className="p-10">
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">
                    Join the
                    <span className="text-yellow-400 block mt-2">Community!</span>
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-yellow-400 mb-3">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          autoComplete="name"
                          className="w-full px-5 py-4 bg-black/30 border-2 border-yellow-500/30 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-yellow-400 mb-3">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                          className="w-full px-5 py-4 bg-black/30 border-2 border-yellow-500/30 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-bold text-yellow-400 mb-3">Company Name *</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          autoComplete="organization"
                          className="w-full px-5 py-4 bg-black/30 border-2 border-yellow-500/30 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="stage" className="block text-sm font-bold text-yellow-400 mb-3">Funding Stage *</label>
                        <select
                          id="stage"
                          name="stage"
                          required
                          value={formData.stage}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-black/30 border-2 border-yellow-500/30 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-white"
                        >
                          <option value="">Select Stage</option>
                          <option value="pre-seed">Pre-Seed</option>
                          <option value="seed">Seed</option>
                          <option value="series-a">Series A</option>
                          <option value="series-b">Series B</option>
                          <option value="series-c">Series C</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="funding" className="block text-sm font-bold text-yellow-400 mb-3">Funding Amount Sought *</label>
                      <select
                        id="funding"
                        name="funding"
                        required
                        value={formData.funding}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-black/30 border-2 border-yellow-500/30 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-white"
                      >
                        <option value="">Select Amount</option>
                        <option value="100k-500k">$100K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m-5m">$1M - $5M</option>
                        <option value="5m-10m">$5M - $10M</option>
                        <option value="10m-25m">$10M - $25M</option>
                        <option value="25m+">$25M+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-yellow-400 mb-3">Tell us about your breakthrough innovation *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-black/30 border-2 border-yellow-500/30 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-500"
                        placeholder={placeholderText}
                      ></textarea>
                    </div>

                    <NeoPopButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full py-6 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/30 flex items-center justify-center space-x-3 group"
                    >
                      <span>Apply Now</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </NeoPopButton>
                  </form>

                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-400">
                      We typically respond within 48 hours. For urgent inquiries,{' '}
                      <a href="mailto:hello@buildersclub.me" className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors hover:underline">
                        email us directly
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
