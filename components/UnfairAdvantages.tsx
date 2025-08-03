'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const advantages = [
  {
    id: 1,
    title: 'Exclusive Community',
    description: 'Join an exclusive network of top builders and founders. Collaborate, learn, and grow with like-minded individuals.',
    icon: '🤝'
  },
  {
    id: 2,
    title: 'Expert Mentorship',
    description: 'Get guidance from industry experts and successful entrepreneurs who have been there and done that.',
    icon: '🎓'
  },
  {
    id: 3,
    title: 'Premium Resources',
    description: 'Access to exclusive resources, tools, and deals to help you build and scale your startup.',
    icon: '💎'
  },
  {
    id: 4,
    title: 'Networking Events',
    description: 'Attend exclusive in-person and virtual events to connect with potential co-founders and investors.',
    icon: '🌐'
  },
  {
    id: 5,
    title: 'Investment Opportunities',
    description: 'Get access to early-stage investment opportunities and connect with angel investors and VCs.',
    icon: '💼'
  },
  {
    id: 6,
    title: 'Growth Support',
    description: 'Leverage our network and resources to accelerate your startup\'s growth and success.',
    icon: '🚀'
  }
];

export default function UnfairAdvantages() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionHeader
            title="Our"
            highlightedText="Unfair Advantages"
            description="Discover what sets us apart and how we can help you succeed"
            badgeText="Why Choose Us"
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl border border-gray-800 bg-gray-900 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 overflow-hidden"
            >
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 text-xl transition-transform duration-300 group-hover:scale-110">
                {advantage.icon}
              </div>
              <div className="pr-12">
                <div className="text-yellow-500 text-2xl font-bold mb-2">0{advantage.id}</div>
                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{advantage.description}</p>
              </div>
              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-black">
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500/30 rounded-2xl pointer-events-none transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
