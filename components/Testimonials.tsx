'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SectionHeader } from './ui/SectionHeader';

const testimonials = [
  {
    id: 1,
    name: 'Soumitra Choubey',
    role: 'Head of Brand | Meesho',
    image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/6853fa4cdbf66a69792afcf5_Group%201171276418.avif',
    companyLogo: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/684a76f26732871252539a1f_image-Photoroom%20(38)%201.avif',
    quote: 'Working at AbInBev as their South India head, joining GrowthX and eventually scaling to lead Brand Meesho. Soumitra is one of the finest brand leaders in the country & someone who has been instrumental in rebranding Meesho from B2BC to B2C.'
  },
  {
    id: 2,
    name: 'Vikash Singh',
    role: 'Director of Growth | Flipkart',
    image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/6853fa4c67390a6658f7f51d_Group%201171276420.avif',
    companyLogo: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/684a76f2fe58b35630a54966_image-Photoroom%20(40).avif',
    quote: 'As an ex-founder, Vikash\'s journey from Tata Health as an acquisition leader to transitioning into more growth and retention roles at PayTM and now at Flipkart has helped him significantly compound his impact at product companies.'
  },
  {
    id: 3,
    name: 'Arnima Jain',
    role: 'Head of Product | Milaap',
    image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/6853fa4c73da6259745e8152_Group%201171276421.avif',
    companyLogo: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/684a76f2bc8822e261d821f3_image.avif',
    quote: 'While working at a technology services company, she upskilled herself and built a strong proof of work, eventually cracking a role as Head of Product at Milaap — India\'s largest social impact crowdfunding platform.'
  },
  {
    id: 4,
    name: 'Kalpisha',
    role: 'Head of Marketing | Zolve',
    image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/6853fa4c73da6259745e8155_Group%201171276422.avif',
    companyLogo: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/684a76f2cdc7339892e3eadc_image-1.avif',
    quote: 'She was leading growth for Chqbook back in January 2024 when she became a member. By focusing on specific aspects of learning and expanding her surface area of discovery, she cracked the CMO role at a $210 million valued startup.'
  },
  {
    id: 5,
    name: 'Abhinav Krishna',
    role: 'Head of Design | RazorpayX',
    image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/6853fa4cd19df2262c7a6cbc_Group%201171276423.avif',
    companyLogo: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/684a76f2344929502a0caddd_image-Photoroom%20(34).avif',
    quote: 'Joining GrowthX to learn the fusion of business & product with design, Abhinav scaled from a mid-senior role to associate director and then eventually leading all design org at RazorpayX & Capital in a span of 2 years.'
  },
  {
    id: 6,
    name: 'Saurabh Jain',
    role: 'Co-founder | Stable Money',
    image: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/6853fa4ca03f9d1265612a9d_Group%201171276419.avif',
    companyLogo: 'https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/684a76f257e059d733751d46_image-Photoroom%20(39).avif',
    quote: 'After a decade of experience across being CEO of Navi Mutual fund & leadership role at Swiggy, Saurabh\'s departure from Navi was the starting point for him to become a member. Learning the CRAFT of distribution has allowed him to GTM Stable Money to ₹250 Crore in AUM.'
  }
];

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Temporarily disabled GSAP animations
  // useEffect(() => {
  //   if (typeof window === 'undefined') return;

  //   // Animation for the testimonials container
  //   gsap.fromTo(
  //     containerRef.current,
  //     { y: 50, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.8,
  //       ease: 'power3.out',
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: 'top 80%',
  //         toggleActions: 'play none none none',
  //       },
  //     }
  //   );

  //   // Animation for tab content
  //   const contentElements = contentRef.current?.querySelectorAll('.testimonial-content');
  //   if (contentElements && contentElements.length > 0) {
  //     gsap.fromTo(
  //       contentElements,
  //       { y: 30, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.6,
  //         stagger: 0.1,
  //         ease: 'power3.out',
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: 'top 70%',
  //           toggleActions: 'play none none none',
  //         },
  //       }
  //     );
  //   }
  // }, []);

  // Temporarily disabled GSAP tab change animation
  // useEffect(() => {
  //   // Animate tab change
  //   const contentElements = contentRef.current?.querySelectorAll('.testimonial-content');
  //   if (contentElements && contentElements.length > 0) {
  //     gsap.to(contentElements, {
  //       y: 20,
  //       opacity: 0,
  //       duration: 0.3,
  //       onComplete: () => {
  //         if (contentElements.length > 0) {
  //           gsap.to(contentElements, {
  //             y: 0,
  //             opacity: 1,
  //             duration: 0.4,
  //             stagger: 0.1,
  //             ease: 'power3.out'
  //           });
  //         }
  //       }
  //     });
  //   }
  // }, [activeTab]);

  return (
    <section 
      ref={containerRef} 
      className="relative py-20 bg-neopop-dark text-neopop-light overflow-hidden"
      id="testimonials"
      style={{
        background: 'linear-gradient(180deg, var(--neopop-dark) 0%, var(--neopop-secondary) 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          badgeText="Testimonials"
          title="What Our Members"
          highlightedText="Say"
          description="Hear from the talented professionals who have transformed their careers with us"
        />

        <div className="flex flex-col lg:flex-row gap-8 mt-16">
          {/* Tabs */}
          <div className="lg:w-1/4 flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 custom-scrollbar">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveTab(index)}
                className={`flex-shrink-0 flex items-center gap-4 p-4 rounded-xl transition-all duration-300 border-2 ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-neopop-secondary to-neopop-dark border-neopop-primary shadow-neopop-glow' 
                    : 'bg-neopop-dark/50 border-neopop-dark/50 hover:border-neopop-primary/50 hover:bg-neopop-dark/80'
                }`}
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#FFD700]/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    quality={80}
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className="lg:w-3/4 bg-neopop-dark/80 rounded-2xl p-8 lg:p-12 border-2 border-neopop-primary/20 relative overflow-hidden backdrop-blur-sm"
            style={{
              boxShadow: '0 10px 30px -10px rgba(var(--neopop-primary-rgb), 0.1)',
              background: 'rgba(18, 18, 18, 0.8)'
            }}
          >
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed italic relative pl-8 border-l-4 border-[#FFD700]/30">
                    <span className="absolute left-0 top-0 text-5xl text-[#FFD700]/30 -translate-y-4">&ldquo;</span>
                    {testimonials[activeTab].quote}
                  </blockquote>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative rounded-lg bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/10 p-1.5">
                    <div className="relative w-full h-full">
                      <Image
                        src={testimonials[activeTab].companyLogo}
                        alt={`${testimonials[activeTab].name}'s company`}
                        fill
                        className="object-contain"
                        loading="lazy"
                        quality={80}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#FFD700]/5 rounded-full filter blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#FFD700]/5 rounded-full filter blur-3xl"></div>
          </div>
        </div>

        {/* Navigation arrows for mobile */}
        <div className="flex justify-center gap-6 mt-12 lg:hidden">
          <button 
            onClick={() => setActiveTab(prev => (prev > 0 ? prev - 1 : testimonials.length - 1))}
            className="p-3 rounded-full bg-black/80 hover:bg-[#FFD700]/10 border-2 border-[#FFD700]/30 hover:border-[#FFD700]/50 transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD700] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => setActiveTab(prev => (prev < testimonials.length - 1 ? prev + 1 : 0))}
            className="p-3 rounded-full bg-black/80 hover:bg-[#FFD700]/10 border-2 border-[#FFD700]/30 hover:border-[#FFD700]/50 transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD700] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
