'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="block">Our</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC000] to-[#FFA500]">
              Unfair Advantages
            </span>
          </h2>
          <svg className="w-48 h-6 mx-auto mt-4" viewBox="0 0 192 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12C10 8.13401 13.134 5 17 5C20.866 5 24 8.13401 24 12C24 15.866 20.866 19 17 19C13.134 19 10 15.866 10 12Z" fill="url(#paint0_linear_1_2)" />
            <path d="M40 12C40 8.13401 43.134 5 47 5C50.866 5 54 8.13401 54 12C54 15.866 50.866 19 47 19C43.134 19 40 15.866 40 12Z" fill="url(#paint1_linear_1_2)" />
            <path d="M70 12C70 8.13401 73.134 5 77 5C80.866 5 84 8.13401 84 12C84 15.866 80.866 19 77 19C73.134 19 70 15.866 70 12Z" fill="url(#paint2_linear_1_2)" />
            <path d="M100 12C100 8.13401 103.134 5 107 5C110.866 5 114 8.13401 114 12C114 15.866 110.866 19 107 19C103.134 19 100 15.866 100 12Z" fill="url(#paint3_linear_1_2)" />
            <path d="M130 12C130 8.13401 133.134 5 137 5C140.866 5 144 8.13401 144 12C144 15.866 140.866 19 137 19C133.134 19 130 15.866 130 12Z" fill="url(#paint4_linear_1_2)" />
            <path d="M160 12C160 8.13401 163.134 5 167 5C170.866 5 174 8.13401 174 12C174 15.866 170.866 19 167 19C163.134 19 160 15.866 160 12Z" fill="url(#paint5_linear_1_2)" />
            <defs>
              <linearGradient id="paint0_linear_1_2" x1="10" y1="12" x2="24" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD700" />
                <stop offset="1" stopColor="#FFA500" />
              </linearGradient>
              <linearGradient id="paint1_linear_1_2" x1="40" y1="12" x2="54" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD700" />
                <stop offset="1" stopColor="#FFA500" />
              </linearGradient>
              <linearGradient id="paint2_linear_1_2" x1="70" y1="12" x2="84" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD700" />
                <stop offset="1" stopColor="#FFA500" />
              </linearGradient>
              <linearGradient id="paint3_linear_1_2" x1="100" y1="12" x2="114" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD700" />
                <stop offset="1" stopColor="#FFA500" />
              </linearGradient>
              <linearGradient id="paint4_linear_1_2" x1="130" y1="12" x2="144" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD700" />
                <stop offset="1" stopColor="#FFA500" />
              </linearGradient>
              <linearGradient id="paint5_linear_1_2" x1="160" y1="12" x2="174" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD700" />
                <stop offset="1" stopColor="#FFA500" />
              </linearGradient>
            </defs>
          </svg>
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
