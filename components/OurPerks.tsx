'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import NeoPopButton from './ui/NeoPopButton';

export default function OurPerks() {
  const perks = [
    {
      id: 1,
      image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d32a7262325574f7065_Group%201171276405.avif',
      alt: 'Perk 1',
      sizes: '(max-width: 500px) 100vw, (max-width: 800px) 50vw, 33.33vw',
      srcSet: [
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d32a7262325574f7065_Group%201171276405-p-500.avif 500w',
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d32a7262325574f7065_Group%201171276405-p-800.avif 800w',
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d32a7262325574f7065_Group%201171276405.avif 1188w'
      ].join(', ')
    },
    {
      id: 2,
      image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d32112b7e23fac75372_Group%201171276406.avif',
      alt: 'Perk 2',
      sizes: '(max-width: 500px) 100vw, (max-width: 800px) 50vw, 33.33vw',
      srcSet: [
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d32112b7e23fac75372_Group%201171276406-p-500.avif 500w',
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d32112b7e23fac75372_Group%201171276406-p-800.avif 800w',
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d32112b7e23fac75372_Group%201171276406.avif 1188w'
      ].join(', ')
    },
    {
      id: 3,
      image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d328ffb702458991ec1_Group%201171276407.avif',
      alt: 'Perk 3',
      sizes: '(max-width: 500px) 100vw, (max-width: 800px) 50vw, 33.33vw',
      srcSet: [
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d328ffb702458991ec1_Group%201171276407-p-500.avif 500w',
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d328ffb702458991ec1_Group%201171276407-p-800.avif 800w',
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d328ffb702458991ec1_Group%201171276407.avif 1188w'
      ].join(', ')
    },
    {
      id: 4,
      image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d320850837877184d0d_Group%201171276410.avif',
      alt: 'Perk 4',
      sizes: '(max-width: 500px) 100vw, (max-width: 800px) 50vw, 33.33vw',
      srcSet: [
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d320850837877184d0d_Group%201171276410-p-500.avif 500w',
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d320850837877184d0d_Group%201171276410-p-800.avif 800w',
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d320850837877184d0d_Group%201171276410.avif 1188w'
      ].join(', ')
    },
    {
      id: 5,
      image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d3225770a537e58a4a7_Group%201171276409.avif',
      alt: 'Perk 5',
      sizes: '(max-width: 500px) 100vw, (max-width: 800px) 50vw, 33.33vw',
      srcSet: [
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d3225770a537e58a4a7_Group%201171276409-p-500.avif 500w',
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d3225770a537e58a4a7_Group%201171276409-p-800.avif 800w',
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d3225770a537e58a4a7_Group%201171276409.avif 1188w'
      ].join(', ')
    },
    {
      id: 6,
      image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d321badaa82de773e7c_Group%201171276411.avif',
      alt: 'Perk 6',
      sizes: '(max-width: 500px) 100vw, (max-width: 800px) 50vw, 33.33vw',
      srcSet: [
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d321badaa82de773e7c_Group%201171276411-p-500.avif 500w',
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d321badaa82de773e7c_Group%201171276411-p-800.avif 800w',
        'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/68481d321badaa82de773e7c_Group%201171276411.avif 1188w'
      ].join(', ')
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="$100K worth of credits from"
            highlightedText="handpicked brands"
            description="Access to handpicked perks from D2C, SaaS, lifestyle & experience brands."
            badgeText="Exclusive Perks"
            className="mb-12 text-center"
            titleClassName="text-3xl md:text-4xl lg:text-5xl"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {perks.map((perk) => (
            <motion.div
              key={perk.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: perk.id * 0.1 }}
              className="relative group overflow-hidden rounded-2xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image
                  src={perk.image}
                  alt={perk.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-4"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">Perk {perk.id}</h3>
                    <p className="text-sm text-gray-300">Click to learn more</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <NeoPopButton
            as="link"
            href="/perks"
            variant="primary"
            className="px-8 py-4 text-lg font-bold"
          >
            Explore All Perks
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </NeoPopButton>
        </div>
      </div>
    </section>
  );
}
