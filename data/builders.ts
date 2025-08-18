export interface Builder {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  description?: string;
  tags?: string[];
}

export const featuredBuilders: Builder[] = [
  {
    id: '1',
    name: 'Aman Dhattarwal',
    role: 'Founder',
    company: 'Apni Kaksha',
    image: '/images/builders/aman-dhattarwal.jpg',
    linkedin: 'dhattarwalaman',
    twitter: 'dhattarwalaman',
    description: 'Edupreneur helping students build successful careers',
    tags: ['Education', 'EdTech', 'Content Creation']
  },
  {
    id: '2',
    name: 'Ritesh Arora',
    role: 'CEO',
    company: 'BrowserStack',
    image: '/images/builders/ritesh-arora.jpg',
    linkedin: 'ritesh-arora',
    description: 'Building developer tools that power the internet',
    tags: ['SaaS', 'Developer Tools', 'Startup Growth']
  },
  {
    id: '3',
    name: 'Vidit Aatrey',
    role: 'Founder & CEO',
    company: 'Meesho',
    image: '/images/builders/vidit-aatrey.jpg',
    linkedin: 'viditaatrey',
    twitter: 'viditaatrey',
    description: 'Empowering small businesses through social commerce',
    tags: ['E-commerce', 'Social Commerce', 'Startup Scaling']
  },
  {
    id: '4',
    name: 'Suhail Sameer',
    role: 'CEO',
    company: 'BharatPe',
    image: '/images/builders/suhail-sameer.jpg',
    linkedin: 'suhail-sameer',
    description: 'Building fintech solutions for Indian businesses',
    tags: ['Fintech', 'Payments', 'Startup Leadership']
  }
];
