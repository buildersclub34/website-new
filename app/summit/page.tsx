import NeoPopButton from "@/components/ui/NeoPopButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight, Rocket } from 'lucide-react';

// Event data
const eventStats = [
  { number: "500+", label: "Founders" },
  { number: "100+", label: "Investors" },
  { number: "50+", label: "CXOs" }
];

interface Highlight {
  id: number;
  title: string;
  image: string;
  tag: string;
  date: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    id: 1,
    title: "How Ariro Toys Benefited from The Great Indian Startup Summit",
    image: "https://thebuildersclub.me/wp-content/uploads/2025/01/image-2.png",
    tag: "Case Study",
    date: "2024-09-20",
    description: "Discover how Ariro Toys leveraged the summit to scale their business and secure funding."
  },
  {
    id: 2,
    title: "Here is what the Attendees had to say about The Great Indian Startup Summit",
    image: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-11.08.47-AM.jpeg",
    tag: "Testimonials",
    date: "2024-09-19",
    description: "Hear directly from past attendees about their experiences and key takeaways from the event."
  }
];

interface Panel {
  id: number;
  title: string;
  description: string;
  image: string;
  time?: string;
}

const panels: Panel[] = [
  {
    id: 1,
    title: "Nivedan Rathi on AI's Impact on Content Creation",
    description: "Tech Content Creator talks about how AI has changed the content landscape",
    image: "https://thebuildersclub.me/wp-content/uploads/2025/02/KU4A8430-scaled.jpg",
    time: "10:00 AM"
  },
  {
    id: 2,
    title: "Punit Goyal on the EV Industry",
    description: "Cofounder of Blusmart shares insights on the future of electric vehicles",
    image: "https://thebuildersclub.me/wp-content/uploads/2025/02/KU4A8604-scaled.jpg",
    time: "11:30 AM"
  },
  {
    id: 3,
    title: "Arjun Vaidya on D2C Ecosystem",
    description: "Discusses the evolution of Direct-to-Consumer business models",
    image: "https://thebuildersclub.me/wp-content/uploads/2025/02/KU4A8328-1-scaled.jpg",
    time: "2:00 PM"
  }
];

// Gallery Images
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-18-at-12.42.56-PM.jpeg", alt: "Event gallery image 1" },
  { id: 2, src: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-11.08.43-AM-1.jpeg", alt: "Event gallery image 2" },
  { id: 3, src: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-11.08.43-AM.jpeg", alt: "Event gallery image 3" },
  { id: 4, src: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-11.08.34-AM.jpeg", alt: "Event gallery image 4" },
  { id: 5, src: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-11.08.36-AM.jpeg", alt: "Event gallery image 5" },
  { id: 6, src: "https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-11.08.35-AM-1.jpeg", alt: "Event gallery image 6" },
  { id: 7, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_8d0e5b3a.jpg", alt: "Event gallery image 7" },
  { id: 8, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_1a6c5a5a.jpg", alt: "Event gallery image 8" },
  { id: 9, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_3a6c5a5a.jpg", alt: "Event gallery image 9" },
  { id: 10, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_4a6c5a5a.jpg", alt: "Event gallery image 10" },
  { id: 11, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_5a6c5a5a.jpg", alt: "Event gallery image 11" },
  { id: 12, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_6a6c5a5a.jpg", alt: "Event gallery image 12" },
  { id: 13, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_7a6c5a5a.jpg", alt: "Event gallery image 13" },
  { id: 14, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_8a6c5a5a.jpg", alt: "Event gallery image 14" },
  { id: 15, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_9a6c5a5a.jpg", alt: "Event gallery image 15" },
  { id: 16, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_10a6c5a5a.jpg", alt: "Event gallery image 16" },
  { id: 17, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_11a6c5a5a.jpg", alt: "Event gallery image 17" },
  { id: 18, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_12a6c5a5a.jpg", alt: "Event gallery image 18" },
  { id: 19, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_13a6c5a5a.jpg", alt: "Event gallery image 19" },
  { id: 20, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_14a6c5a5a.jpg", alt: "Event gallery image 20" },
  { id: 21, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_15a6c5a5a.jpg", alt: "Event gallery image 21" },
  { id: 22, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_16a6c5a5a.jpg", alt: "Event gallery image 22" },
  { id: 23, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_17a6c5a5a.jpg", alt: "Event gallery image 23" },
  { id: 24, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_18a6c5a5a.jpg", alt: "Event gallery image 24" },
  { id: 25, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_19a6c5a5a.jpg", alt: "Event gallery image 25" },
  { id: 26, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_20a6c5a5a.jpg", alt: "Event gallery image 26" },
  { id: 27, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_21a6c5a5a.jpg", alt: "Event gallery image 27" },
  { id: 28, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_22a6c5a5a.jpg", alt: "Event gallery image 28" },
  { id: 29, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_23a6c5a5a.jpg", alt: "Event gallery image 29" },
  { id: 30, src: "https://thebuildersclub.me/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-20-at-16.38.39_24a6c5a5a.jpg", alt: "Event gallery image 30" },
];

export default function SummitPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-100px)] flex items-center justify-center py-12 sm:py-20 overflow-hidden z-10">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/50"></div>
            <Image
              src="https://thebuildersclub.me/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-18-at-12.42.56-PM.jpeg"
              alt="Summit Hero Background"
              fill
              className="object-cover opacity-30"
              priority
              quality={100}
              sizes="100vw"
            />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center justify-center">
            <div className="w-full max-w-5xl mx-auto text-center px-4 sm:px-6 py-8 sm:py-12">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm z-20">
                <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span>A TBC INITIATIVE</span>
              </div>
              
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                <span className="text-yellow-400 block sm:inline">THE GREAT INDIAN</span>{' '}
                <span className="text-yellow-400 block sm:inline">TECH AWARDS</span>{' '}
                <span className="text-yellow-400 block sm:inline">& SUMMIT 2025</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                Join India&apos;s most prestigious gathering of tech visionaries, innovators, and leaders as we celebrate excellence in technology and entrepreneurship.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto">
                <NeoPopButton
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto justify-center px-6 py-3 text-sm sm:text-base"
                >
                  Book Your Spot Now
                </NeoPopButton>
                <NeoPopButton
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto justify-center px-6 py-3 text-sm sm:text-base"
                >
                  <span className="flex items-center justify-center gap-1.5">
                    Learn More
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  </span>
                </NeoPopButton>
              </div>
              
              <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-2 sm:px-0">
                {[
                  { number: "500+", label: "Attendees" },
                  { number: "50+", label: "Speakers" },
                  { number: "20+", label: "Sessions" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs xs:text-sm text-gray-300 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* About Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-900/5 to-transparent opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                About The Summit
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The Great Indian Tech Awards & Summit is the premier gathering for the Indian tech ecosystem, bringing together founders, investors, and industry leaders to celebrate innovation, share knowledge, and shape the future of technology in India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Vision",
                description: "To create a platform that recognizes and celebrates excellence in the Indian tech ecosystem.",
                icon: "👁️"
              },
              {
                title: "Mission",
                description: "To foster innovation, collaboration, and growth within the Indian technology sector.",
                icon: "🎯"
              },
              {
                title: "Impact",
                description: "Connecting the brightest minds to drive meaningful change and progress.",
                icon: "🚀"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-yellow-500/30 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
          
          {/* Highlights */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-10 text-yellow-400">SEASON 1 HIGHLIGHTS</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div key={`highlight-${highlight.id}`} className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-colors">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={90}
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{highlight.title}</h4>
                        <p className="text-sm text-gray-300">Season 1 Highlights</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                Event Highlights
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
              Experience the best of what the Great Indian Tech Awards & Summit has to offer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 h-auto sm:h-[28rem] md:h-[32rem] lg:h-[36rem]">
                <div className="relative h-full flex flex-col">
                  <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={90}
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="w-full">
                        <h4 className="text-lg font-bold text-white mb-1">{highlight.title}</h4>
                        <p className="text-sm text-gray-300">Season 1 Highlights</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-yellow-500/10 text-yellow-400">
                        {highlight.tag}
                      </span>
                      <span className="text-xs text-gray-400">{highlight.date}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{highlight.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 flex-1 mb-4 sm:mb-6">{highlight.description}</p>
                    <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-800">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex -space-x-1.5 sm:-space-x-2">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-700 border-2 border-gray-800"></div>
                            ))}
                          </div>
                          <span className="text-xs text-gray-400">+12 attending</span>
                        </div>
                        <button className="text-yellow-400 hover:text-yellow-300 text-xs sm:text-sm font-medium flex items-center">
                          Learn more
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/4 -right-20 w-60 h-60 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
      </section>

      {/* Speakers & Panels */}
      <section className="py-20 bg-gray-900/50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                Featured Sessions
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experience thought-provoking discussions and keynotes from industry leaders shaping the future of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {panels.map((panel, index) => (
              <div key={panel.id} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[16/9] relative">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={panel.image}
                      alt={panel.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-400 rounded-full mb-2">
                      {panel.time}
                    </span>
                    <h3 className="text-xl font-bold text-white">{panel.title}</h3>
                    <p className="text-sm text-gray-300 mt-1">{panel.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{panel.description}</p>
                  <NeoPopButton size="sm" className="w-full">
                    Learn More
                  </NeoPopButton>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <NeoPopButton variant="secondary" className="px-8 py-3">
              VIEW FULL AGENDA
            </NeoPopButton>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-900/5 to-transparent opacity-5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                Event Gallery
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Relive the moments from our previous events and get a glimpse of what to expect.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <NeoPopButton variant="secondary" className="px-8 py-3">
              VIEW MORE PHOTOS
            </NeoPopButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-yellow-900/20 via-black to-yellow-900/10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                Ready to Join Us?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Be part of India&apos;s most prestigious tech gathering. Network with industry leaders, learn from experts, and celebrate innovation at The Great Indian Tech Awards & Summit 2025.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <NeoPopButton 
                size="lg" 
                className="px-8 py-4 text-lg font-medium"
              >
                GET YOUR TICKETS NOW
              </NeoPopButton>
              <NeoPopButton 
                variant="secondary"
                size="lg" 
                className="px-8 py-4 text-lg font-medium"
              >
                BECOME A SPONSOR
              </NeoPopButton>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                Have questions? <a href="mailto:summit@buildersclub.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">Contact our team</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      </main>
    </div>
  );
}
