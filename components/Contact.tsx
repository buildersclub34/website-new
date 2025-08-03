'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Rocket, Star, Zap, Globe, BrainCircuit, Award, Target, Lightbulb } from 'lucide-react';
import NeoPopButton from './ui/NeoPopButton';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeader from './SectionHeader';

export default function Contact() {
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', stage: '', funding: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Fix lint errors by properly escaping apostrophes
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

            {/* Enhanced Contact Form */}
            <div>
              <Card className="glass-morphism border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-10">
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}