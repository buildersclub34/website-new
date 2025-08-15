'use client';

import { useState } from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign, Zap, Star, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import NeoPopButton from './ui/NeoPopButton';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      name: "QuantumFlow",
      category: "AI/ML",
      description: "Revolutionary quantum computing platform for enterprise AI workloads",
      stage: "Series B",
      investment: "$15M",
      growth: "+2,400%",
      valuation: "$500M",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      id: 2,
      name: "BioSynth",
      category: "BioTech",
      description: "Next-gen synthetic biology platform for personalized medicine",
      stage: "Series A",
      investment: "$8M",
      growth: "+1,800%",
      valuation: "$200M",
      image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      id: 3,
      name: "CarbonZero",
      category: "CleanTech",
      description: "AI-powered carbon capture and utilization technology",
      stage: "Series C",
      investment: "$25M",
      growth: "+3,200%",
      valuation: "$1.2B",
      image: "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      id: 4,
      name: "NeuralPay",
      category: "FinTech",
      description: "Brain-computer interface for seamless digital payments",
      stage: "Series A",
      investment: "$12M",
      growth: "+2,100%",
      valuation: "$300M",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      name: "MetaLearn",
      category: "EdTech",
      description: "Immersive VR/AR learning platform with AI tutors",
      stage: "Seed",
      investment: "$3M",
      growth: "+900%",
      valuation: "$50M",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      name: "SpaceLogistics",
      category: "SpaceTech",
      description: "Autonomous space cargo delivery and orbital manufacturing",
      stage: "Series B",
      investment: "$30M",
      growth: "+1,500%",
      valuation: "$800M",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const filters = ['all', 'AI/ML', 'BioTech', 'FinTech', 'EdTech', 'CleanTech', 'SpaceTech'];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-purple-400/10 rounded-full filter blur-3xl floating"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl floating" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 glass-morphism rounded-full text-purple-600 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Portfolio
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Unicorns in
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"> the Making</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the revolutionary companies we&apos;ve partnered with and the extraordinary growth 
              they&apos;ve achieved through our next-generation investment approach.
            </p>
          </div>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`capitalize px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg neon-glow' 
                    : 'glass-morphism hover:bg-white/60 hover:scale-105 border-gray-200'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map((item) => (
              <Card key={item.id} className={`group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 glass-morphism border-0 overflow-hidden ${item.featured ? 'lg:col-span-1 ring-2 ring-purple-500/20' : ''}`}>
                <div className="relative overflow-hidden">
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image 
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      priority={item.featured}
                    />
                  </div>
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Stage Badge */}
                  <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold text-white ${
                    item.stage === 'Series C' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                    item.stage === 'Series B' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                    item.stage === 'Series A' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                    'bg-gradient-to-r from-orange-500 to-red-500'
                  } neon-glow`}>
                    {item.stage}
                  </div>

                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      UNICORN
                    </div>
                  )}

                  {/* Hover Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <NeoPopButton 
                      className="text-sm px-4 py-2"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </NeoPopButton>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {item.name}
                    </h3>
                    <span className="text-sm text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Enhanced Stats */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-bold text-gray-700">Investment:</span>
                        <span className="text-sm font-bold text-green-600">{item.investment}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-bold text-blue-600">{item.growth}</span>
                      </div>
                    </div>
                    
                    {item.valuation && (
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-sm text-gray-600">Current Valuation:</span>
                        <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {item.valuation}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="glass-morphism rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Portfolio?</h3>
              <p className="text-xl text-gray-600 mb-8">
                We&apos;re always looking for the next breakthrough company. If you&apos;re building something extraordinary, we want to hear from you.
              </p>
              <NeoPopButton 
                className="text-lg px-10 py-4"
                onClick={() => window.open('/contact', '_self')}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Apply for Funding
              </NeoPopButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}