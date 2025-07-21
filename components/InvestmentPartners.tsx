import Image from 'next/image';

const partnerLogos = [
  { id: 1, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/25-1.png', alt: 'Sequoia Capital' },
  { id: 2, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/26-1.png', alt: 'Y Combinator' },
  { id: 3, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/27-1.png', alt: 'Andreessen Horowitz' },
  { id: 4, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/28-1.png', alt: 'Tiger Global' },
  { id: 5, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/31-1.png', alt: 'Accel' },
  { id: 6, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/32-1.png', alt: 'Lightspeed Venture Partners' },
  { id: 7, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/33-1.png', alt: 'Bessemer Venture Partners' },
  { id: 8, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/34.png', alt: 'Benchmark' },
  { id: 9, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/35.png', alt: 'Kleiner Perkins' },
  { id: 10, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/36.png', alt: 'Greylock Partners' },
  { id: 11, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/37.png', alt: 'Bain Capital Ventures' },
  { id: 12, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/38.png', alt: 'Insight Partners' },
  { id: 13, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/39.png', alt: 'Index Ventures' },
  { id: 14, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/40.png', alt: 'Battery Ventures' },
  { id: 15, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/41.png', alt: 'GGV Capital' },
  { id: 16, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/42.png', alt: 'Khosla Ventures' },
  { id: 17, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/43.png', alt: 'General Catalyst' },
  { id: 18, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/44.png', alt: 'New Enterprise Associates' },
  { id: 19, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/3.png', alt: 'First Round Capital' },
  { id: 20, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/5.png', alt: 'Founders Fund' },
  { id: 21, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/121.png', alt: 'Coatue Management' },
  { id: 22, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/122.png', alt: 'D1 Capital Partners' },
  { id: 23, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/142.png', alt: 'T. Rowe Price' },
  { id: 24, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/45.png', alt: 'Dragoneer Investment Group' },
  { id: 25, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/46.png', alt: 'Durable Capital Partners' },
  { id: 26, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/47.png', alt: 'Fidelity Management' },
  { id: 27, src: 'https://thebuildersclub.me/wp-content/uploads/2024/12/48.png', alt: 'BlackRock' },
];

// Function to determine if a position should be gold (true) or black (false)
const isGoldBox = (index: number, rowLength: number) => {
  const row = Math.floor(index / rowLength);
  const col = index % rowLength;
  return (row + col) % 2 === 0;
};

export default function InvestmentPartners() {
  // For mobile (2 columns), we'll use 2 columns, for others we'll use 5
  const rowLengths = {
    base: 2,     // 2 columns on mobile
    sm: 3,       // 3 columns on small screens
    md: 5,       // 5 columns on medium screens
    lg: 5        // 5 columns on large screens
  };

  return (
    <section id="investment-partners" className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC000] to-[#FFA500]">
              Investment Partners
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Trusted by the world&apos;s leading investment firms and venture capitalists
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0.5 md:gap-1">
          {partnerLogos.map((partner, index) => {
            const isGold = isGoldBox(index, rowLengths.base);
            const bgColor = isGold ? 'bg-gradient-to-br from-[#FFD700] to-[#FFA500]' : 'bg-black';
            const borderColor = isGold ? 'border-[#FFD700]' : 'border-gray-800';
            
            return (
              <div 
                key={partner.id}
                className={`${bgColor} ${borderColor} border-2 md:border-4 p-2 md:p-4 flex items-center justify-center 
                  transition-all duration-300 hover:scale-105 hover:shadow-neon-gold hover:z-10 relative`}
                style={{
                  aspectRatio: '1/1',
                  boxShadow: isGold ? '0 0 15px rgba(255, 215, 0, 0.3)' : 'none'
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    className={`object-contain p-2 ${isGold ? 'invert-0' : 'invert'}`}
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                    loading="lazy"
                  />
                </div>
                {/* Subtle corner accents */}
                {isGold && (
                  <>
                    <div className="absolute top-0 left-0 w-2 h-2 bg-black"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-black"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-black"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-black"></div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
