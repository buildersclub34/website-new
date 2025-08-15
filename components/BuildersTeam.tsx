import Image from 'next/image';
import { Linkedin, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import NeoPopButton from './ui/NeoPopButton';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  companyLogo: string;
}

export default function BuildersTeam() {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Amit Mishra',
      role: 'Cofounder',
      image: 'https://thebuildersclub.me/wp-content/uploads/2024/10/Amit.png',
      linkedin: 'https://www.linkedin.com/in/amit6060',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2024/11/Logo-for-website.png'
    },
    {
      id: '2',
      name: 'Karthik Naidu',
      role: 'Founder, CEO',
      image: 'https://thebuildersclub.me/wp-content/uploads/2025/06/333.png',
      linkedin: 'https://www.linkedin.com/in/karthiknaiduofficial',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2025/06/SYS.png'
    },
    {
      id: '3',
      name: 'Shuchi Gunwant',
      role: 'Partner',
      image: 'https://thebuildersclub.me/wp-content/uploads/2025/05/6c-partner.png',
      linkedin: 'https://www.linkedin.com/in/shuchi-gunwant-16b454128',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2025/05/6c.png'
    },
    {
      id: '4',
      name: 'Monika Jain',
      role: 'Co-Founder',
      image: 'https://thebuildersclub.me/wp-content/uploads/2025/05/0000.png',
      linkedin: 'https://www.linkedin.com/in/monika-jain-6661822/',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2025/05/presto.png'
    },
    {
      id: '5',
      name: 'Mayank Prasoon',
      role: 'Founder',
      image: 'https://thebuildersclub.me/wp-content/uploads/2025/05/098.png',
      linkedin: 'https://www.linkedin.com/in/prasoonmayank',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2025/05/davido.png'
    },
    {
      id: '6',
      name: 'Darshan Bathija',
      role: 'Founder & CEO',
      image: 'https://thebuildersclub.me/wp-content/uploads/2025/04/darshan.png',
      linkedin: 'https://www.linkedin.com/in/darshanbathija',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2025/04/tomillo.png'
    },
    {
      id: '7',
      name: 'Kishan Sanghani',
      role: 'Co-Founder',
      image: 'https://thebuildersclub.me/wp-content/uploads/2025/04/kisan.png',
      linkedin: 'https://www.linkedin.com/in/kishansanghani/',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2025/04/red-pluto.png'
    },
    {
      id: '8',
      name: 'Anmol Mahajan',
      role: 'Founder',
      image: 'https://thebuildersclub.me/wp-content/uploads/2025/04/anmol.png',
      linkedin: 'https://www.linkedin.com/in/anmol-mahajan-93b14b90/',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2025/04/roadprime.png'
    },
    {
      id: '9',
      name: 'Arpit Agrawal',
      role: 'CEO',
      image: 'https://thebuildersclub.me/wp-content/uploads/2025/04/arpit.png',
      linkedin: 'https://www.linkedin.com/in/arpit-agrawal-273813137',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2025/04/angoori.png'
    },
    {
      id: '10',
      name: 'Nithin Prakash',
      role: 'Co-Founder and Product Guy',
      image: 'https://thebuildersclub.me/wp-content/uploads/2025/04/nithin.png',
      linkedin: 'https://www.linkedin.com/in/nithinprakashz',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2025/04/cupi.png'
    },
    {
      id: '11',
      name: 'Sanjana Tripuramallu',
      role: 'Founder',
      image: 'https://thebuildersclub.me/wp-content/uploads/2025/04/888.png',
      linkedin: 'https://www.linkedin.com/in/sanjana-tripuramallu',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2025/04/cosmos.png'
    },
    {
      id: '12',
      name: 'Syed Imran',
      role: 'Founder',
      image: 'https://thebuildersclub.me/wp-content/uploads/2024/11/137.jpg',
      linkedin: 'https://www.linkedin.com/in/syed-imran-fillokart',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2024/11/161.png'
    },
    {
      id: '13',
      name: 'Sreerupa Chowdhury',
      role: 'Founder',
      image: 'https://thebuildersclub.me/wp-content/uploads/2024/11/136.jpg',
      linkedin: 'https://www.linkedin.com/in/sreerupachowdhury/',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2024/11/167.png'
    },
    {
      id: '14',
      name: 'Debarya Dutta',
      role: 'Founder',
      image: 'https://thebuildersclub.me/wp-content/uploads/2024/11/Debarya-Dutta.jpg',
      linkedin: 'https://www.linkedin.com/in/debarya-dutta',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2024/11/160.png'
    },
    {
      id: '15',
      name: 'Sumit Rastogi',
      role: 'Founder',
      image: 'https://thebuildersclub.me/wp-content/uploads/2024/11/Sumit-Rastogi.jpg',
      linkedin: 'https://www.linkedin.com/in/sumit-rastogi-9404673',
      companyLogo: 'https://thebuildersclub.me/wp-content/uploads/2024/11/160.png' // Using same logo as no specific logo was visible in the HTML
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            title="Meet Our"
            highlightedText="Builders"
            description="A community of passionate founders and industry leaders building the future"
            badgeText="Our Network"
            align="center"
            titleClassName="text-3xl md:text-4xl lg:text-5xl"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-0.5 overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10"
              style={{
                '--tw-gradient-from': 'rgba(23, 23, 23, 0.9)',
                '--tw-gradient-to': 'rgba(0, 0, 0, 0.9)',
              } as any}
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6">
                {/* Member Image */}
                <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-black hover:bg-white transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-yellow-400 text-sm font-medium mb-4">{member.role}</p>
                  
                  {/* Company Logo */}
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <div className="relative h-8 w-24 mx-auto">
                      <Image
                        src={member.companyLogo}
                        alt="Company Logo"
                        fill
                        className="object-contain object-center opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <NeoPopButton
            as="button"
            variant="primary"
            className="px-8 py-4 text-lg font-bold"
          >
            View All Members
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </NeoPopButton>
        </div>
      </div>
    </section>
  );
}
