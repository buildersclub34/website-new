import { Zap, Target, Handshake, Calendar, Network } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

export default function About() {
  const initiatives = [
    {
      icon: <Zap className="w-6 h-6 text-[#FFD700]" />,
      title: "The Builders Circle",
      description: "An exclusive community of founders, operators, and investors building the future.",
      link: "https://thebuildersclub.me/circle"
    },
    {
      icon: <Target className="w-6 h-6 text-[#FFD700]" />,
      title: "Fundraising Track",
      description: "Helping startups raise capital from our network of 1000+ investors.",
      link: "https://thebuildersclub.me/fundraising"
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#FFD700]" />,
      title: "Events",
      description: "Join our exclusive events and networking opportunities.",
      link: "https://thebuildersclub.me/events"
    },
    {
      icon: <Network className="w-6 h-6 text-[#FFD700]" />,
      title: "Agency Network",
      description: "Connect with top-tier agencies to scale your startup.",
      link: "#"
    },
    {
      icon: <Handshake className="w-6 h-6 text-[#FFD700]" />,
      title: "Partner Initiatives",
      description: "Collaborative programs with our trusted partners.",
      link: "#"
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
      </div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Why Join CTA Section */}
        <div className="relative bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 rounded-2xl p-10 md:p-16 mb-24 overflow-hidden border border-white/10">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5">
              Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC000] to-[#FFA500]">The Builders Club?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              We are one of the largest startup founder communities globally, helping startups in their growth journey with Community, Content and Capital.
            </p>
            
            {/* Video Container */}
            <div className="relative rounded-xl overflow-hidden mb-8 group">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/20 rounded-xl overflow-hidden">
                {/* YouTube iframe with lazy loading */}
                <div className="relative w-full h-full">
                  <Image 
                    src="https://img.youtube.com/vi/qX7SOqM-jWM/maxresdefault.jpg" 
                    alt="The Builders Club - Community Video"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-0 transition-opacity duration-300"
                    width={1280}
                    height={720}
                    priority
                  />
                  <iframe 
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    src="https://www.youtube.com/embed/qX7SOqM-jWM?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0"
                    title="The Builders Club - Community Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:opacity-0">
                    <svg 
                      className="w-6 h-6 md:w-8 md:h-8 text-black ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              
              {/* Video Caption */}
              <p className="mt-3 text-sm text-white/80">Watch our community in action</p>
            </div>
            
            <a 
              href="https://nas.io/tbc" 
              target="_blank"
              rel="noopener noreferrer"
              className="neopop-btn neopop-primary text-lg mx-auto mt-6"
            >
              Join the Community
            </a>
          </div>
        </div>

        {/* Initiatives Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC000] to-[#FFA500]">Initiatives</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We help startups in their growth journey with Community, Content and Capital.
          </p>
        </div>

        {/* Initiative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {initiatives.map((initiative, index) => (
            <a
              key={index}
              href={initiative.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-black/50 backdrop-blur-sm rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FFD700]/20 overflow-hidden"
              style={{
                border: '1px solid rgba(255, 215, 0, 0.15)',
                background: 'linear-gradient(145deg, rgba(255, 215, 0, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%)',
              }}
            >
              {/* Golden border effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                   style={{
                     background: 'linear-gradient(145deg, rgba(255, 215, 0, 0.3) 0%, rgba(255, 165, 0, 0.1) 100%)',
                     boxShadow: '0 0 20px rgba(255, 215, 0, 0.15)'
                   }}
              />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#FFD700]/30 group-hover:to-[#FFA500]/40 transition-all duration-300 border border-[#FFD700]/20 group-hover:border-[#FFD700]/40">
                  {initiative.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                  {initiative.title}
                </h3>
                <p className="text-white/80 mb-6">{initiative.description}</p>
                <div className="inline-flex items-center text-[#FFD700] font-medium group-hover:underline">
                  Learn more
                  <svg className="w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" 
                       fill="none" 
                       stroke="currentColor" 
                       viewBox="0 0 24 24" 
                       xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}