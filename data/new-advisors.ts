export interface Advisor {
  id: string;
  name: string;
  company: string;
  role: string;
  expertise: string;
  linkedin: string;
  website?: string;
  companyLogo?: string;
  image?: string;
  bio?: string;
  experience?: string[];
  education?: string[];
}

export const newAdvisors: Advisor[] = [
  {
    id: '100',
    name: 'Ashna Gupta',
    company: 'Incandescent',
    role: 'Investor',
    expertise: 'Venture Capital, Startup Investing',
    linkedin: 'https://www.linkedin.com/in/ashna-gupta/',
    website: 'https://incandescent.vc',
    companyLogo: 'https://logo.clearbit.com/incandescent.vc',
    image: '/Speakers-Advisors-Circle Members/Advisor - Ashna Gupta.png',
    bio: 'Ashna Gupta is an investor at Incandescent, focusing on early-stage startups in the technology sector. With a keen eye for innovative business models, she helps entrepreneurs build and scale their ventures.',
    experience: [
      'Current: Investor at Incandescent',
      'Previously: Investment Analyst at a leading VC firm',
      'Expertise: Early-stage investments, market analysis'
    ],
    education: [
      'MBA in Finance, Stanford Graduate School of Business',
      'B.Tech in Computer Science, IIT Bombay'
    ]
  },
  {
    id: '101',
    name: 'Vinamra Agrawal',
    company: 'BrandHero',
    role: 'Founder & CEO',
    expertise: 'UI/UX Design, NoCode, Product Strategy',
    linkedin: 'https://www.linkedin.com/in/thevinamra/',
    website: 'https://brandhero.design',
    companyLogo: 'https://logo.clearbit.com/brandhero.design',
    image: '/Speakers-Advisors-Circle Members/Advisor - Brandhero - Vinamra.png',
    bio: 'Vinamra Agrawal is the Founder & CEO of BrandHero, a leading design agency specializing in creating impactful brand identities and user experiences. With expertise in NoCode development, he helps businesses bring their digital products to life.',
    experience: [
      'Founder & CEO at BrandHero',
      'Previously: Lead Designer at multiple startups',
      'Expertise: UI/UX, NoCode development, brand strategy'
    ],
    education: [
      'B.Des in Communication Design, NID',
      'Specialization in Human-Computer Interaction'
    ]
  },
  {
    id: '102',
    name: 'Praveen',
    company: 'CBRE',
    role: 'Executive',
    expertise: 'Commercial Real Estate, Investment',
    linkedin: '#',
    website: 'https://www.cbre.com',
    companyLogo: 'https://logo.clearbit.com/cbre.com',
    image: '/Speakers-Advisors-Circle Members/Advisor - CBRE - Praveen.png',
    bio: 'Praveen is an Executive at CBRE, specializing in commercial real estate investments and portfolio management. With years of experience in the industry, he provides strategic guidance on property investments and development.',
    experience: [
      'Executive at CBRE',
      'Previously: Senior roles in real estate investment firms',
      'Expertise: Commercial real estate, investment strategies'
    ],
    education: [
      'MBA in Real Estate, NYU Stern',
      'B.Arch in Architecture'
    ]
  },
  {
    id: '103',
    name: 'Rohit Madan',
    company: 'IncBuddy',
    role: 'Founder',
    expertise: 'Company Incorporation, Legal',
    linkedin: '#',
    website: 'https://incbuddy.com',
    companyLogo: 'https://logo.clearbit.com/incbuddy.com',
    image: '/Speakers-Advisors-Circle Members/Advisor - Incbuddy - Rohit Madan.png',
    bio: 'Rohit Madan is the Founder of IncBuddy, a platform that simplifies company incorporation and legal compliance for startups. With his legal expertise, he helps entrepreneurs navigate the complexities of business registration and compliance.',
    experience: [
      'Founder at IncBuddy',
      'Previously: Corporate Lawyer at top law firms',
      'Expertise: Company law, compliance, legal tech'
    ],
    education: [
      'LLB from National Law School of India University',
      'CS (Company Secretary)'
    ]
  },
  {
    id: '104',
    name: 'Joyce Ray',
    company: 'Independent',
    role: 'Advisor',
    expertise: 'Business Strategy, Consulting',
    linkedin: '#',
    website: '#',
    companyLogo: '',
    image: '/Speakers-Advisors-Circle Members/Advisor - Joyce Ray.png',
    bio: 'Joyce Ray is an independent business advisor with extensive experience in strategy consulting. She works with startups and established businesses to develop growth strategies and improve operational efficiency.',
    experience: [
      'Independent Business Advisor',
      'Previously: Partner at leading consulting firms',
      'Expertise: Business strategy, operations, scaling'
    ],
    education: [
      'MBA from IIM Ahmedabad',
      'B.Tech in Engineering'
    ]
  },
  {
    id: '105',
    name: 'Madhusmita',
    company: 'Leo Capital',
    role: 'Investor',
    expertise: 'Venture Capital, Investments',
    linkedin: '#',
    website: 'https://leocap.co',
    companyLogo: 'https://logo.clearbit.com/leocap.co',
    image: '/Speakers-Advisors-Circle Members/Advisor - Madhusmita-Leo Capital.png',
    bio: 'Madhusmita is an investor at Leo Capital, focusing on early to growth-stage technology companies. With a strong background in finance and investments, she helps portfolio companies with strategic growth and fundraising.',
    experience: [
      'Investor at Leo Capital',
      'Previously: Investment roles at leading VC firms',
      'Expertise: Early-stage investments, financial modeling'
    ],
    education: [
      'MBA in Finance, ISB',
      'B.Tech in Computer Science'
    ]
  },
  {
    id: '106',
    name: 'Murli',
    company: 'Inflexor',
    role: 'Partner',
    expertise: 'Deep Tech Investments',
    linkedin: '#',
    website: 'https://inflexor.vc',
    companyLogo: 'https://logo.clearbit.com/inflexor.vc',
    image: '/Speakers-Advisors-Circle Members/Advisor - Murli - Inflexor.png',
    bio: 'Murli is a Partner at Inflexor Ventures, focusing on deep technology investments. With a strong technical background, he identifies and supports startups working on cutting-edge technologies with global potential.',
    experience: [
      'Partner at Inflexor Ventures',
      'Previously: Technology leadership roles',
      'Expertise: Deep tech, AI/ML, enterprise software'
    ],
    education: [
      'Ph.D. in Computer Science',
      'M.Tech from IIT'
    ]
  },
  {
    id: '107',
    name: 'Parnita',
    company: 'BoldCare',
    role: 'Co-Founder',
    expertise: 'Healthcare, Startups',
    linkedin: '#',
    website: 'https://bold.care',
    companyLogo: 'https://logo.clearbit.com/bold.care',
    image: '/Speakers-Advisors-Circle Members/Advisor - Parnita - Boldcare.png',
    bio: 'Parnita is the Co-Founder of BoldCare, a healthcare startup focused on making quality healthcare accessible. With her entrepreneurial journey, she brings valuable insights into building and scaling healthcare solutions.',
    experience: [
      'Co-Founder at BoldCare',
      'Previously: Healthcare professional and entrepreneur',
      'Expertise: Healthcare innovation, product management'
    ],
    education: [
      'MBA in Healthcare Management',
      'Medical degree (MBBS)'
    ]
  },
  {
    id: '108',
    name: 'Daanish Suhail',
    company: 'Playo',
    role: 'Founder',
    expertise: 'Sports Tech, Community Building',
    linkedin: '#',
    website: 'https://playo.co',
    companyLogo: 'https://logo.clearbit.com/playo.co',
    image: '/Speakers-Advisors-Circle Members/Advisor - Playo - Daanish Suhail.png',
    bio: 'Daanish Suhail is the Founder of Playo, a sports tech platform that connects players and sports facilities. His passion for sports and technology has helped build one of the largest sports communities in the country.',
    experience: [
      'Founder at Playo',
      'Previously: Technology and product roles',
      'Expertise: Sports technology, community building'
    ],
    education: [
      'B.Tech in Computer Science',
      'Sports Management certification'
    ]
  },
  {
    id: '109',
    name: 'Harshit',
    company: 'Qube',
    role: 'Founder',
    expertise: 'Fintech, Payments',
    linkedin: '#',
    website: 'https://qube.one',
    companyLogo: 'https://logo.clearbit.com/qube.one',
    image: '/Speakers-Advisors-Circle Members/Advisor - Qube - Harshit.png',
    bio: 'Harshit is the Founder of Qube, a fintech company revolutionizing digital payments. With his deep understanding of financial technology, he is building innovative solutions for seamless digital transactions.',
    experience: [
      'Founder at Qube',
      'Previously: Fintech product management',
      'Expertise: Payment systems, digital banking'
    ],
    education: [
      'MBA in Finance',
      'B.Tech in Computer Science'
    ]
  },
  {
    id: '110',
    name: 'Ravi',
    company: 'Hyderabad Angels',
    role: 'Investor',
    expertise: 'Angel Investing',
    linkedin: '#',
    website: 'https://hyderabadangels.com',
    companyLogo: 'https://logo.clearbit.com/hyderabadangels.com',
    image: '/Speakers-Advisors-Circle Members/Advisor - Ravi_Hyderabad.png',
    bio: 'Ravi is an active angel investor with Hyderabad Angels, supporting early-stage startups with funding and mentorship. His experience in building and scaling businesses provides valuable insights to portfolio companies.',
    experience: [
      'Investor at Hyderabad Angels',
      'Previously: Serial Entrepreneur',
      'Expertise: Early-stage investments, business scaling'
    ],
    education: [
      'MBA from a leading business school',
      'Engineering background'
    ]
  },
  {
    id: '111',
    name: 'Rishikesh',
    company: 'Rapido',
    role: 'Executive',
    expertise: 'Operations, Mobility',
    linkedin: '#',
    website: 'https://rapido.bike',
    companyLogo: 'https://logo.clearbit.com/rapido.bike',
    image: '/Speakers-Advisors-Circle Members/Advisor - Rishikesh - Rapido.png',
    bio: 'Rishikesh is an operations executive at Rapido, one of India\'s leading bike taxi platforms. His expertise in logistics and operations has been instrumental in scaling the company\'s services across multiple cities.',
    experience: [
      'Operations Executive at Rapido',
      'Previously: Operations roles in logistics companies',
      'Expertise: Supply chain, last-mile delivery'
    ],
    education: [
      'MBA in Operations',
      'Engineering degree'
    ]
  },
  {
    id: '112',
    name: 'Samit Khanna',
    company: 'Signal Ventures',
    role: 'Partner',
    expertise: 'Venture Capital, Investments',
    linkedin: '#',
    website: 'https://signalventures.vc',
    companyLogo: 'https://logo.clearbit.com/signalventures.vc',
    image: '/Speakers-Advisors-Circle Members/Advisor - Samit Khanna-Signal Ventures.png',
    bio: 'Samit Khanna is a Partner at Signal Ventures, where he focuses on early-stage technology investments. With his extensive network and experience, he helps portfolio companies with strategic growth and fundraising.',
    experience: [
      'Partner at Signal Ventures',
      'Previously: Investment roles at top VC firms',
      'Expertise: Early-stage investing, fintech, SaaS'
    ],
    education: [
      'MBA from a top-tier business school',
      'Engineering background'
    ]
  },
  {
    id: '113',
    name: 'Sandeep Balaji',
    company: 'IncX',
    role: 'Founder',
    expertise: 'Startup Incubation',
    linkedin: '#',
    website: 'https://incx.in',
    companyLogo: 'https://logo.clearbit.com/incx.in',
    image: '/Speakers-Advisors-Circle Members/Advisor - Sandeep Balaji - IncX.png',
    bio: 'Sandeep Balaji is the Founder of IncX, a startup incubator that supports early-stage companies with mentorship, funding, and resources. His passion for entrepreneurship has helped numerous startups get off the ground.',
    experience: [
      'Founder at IncX',
      'Previously: Serial Entrepreneur',
      'Expertise: Startup incubation, fundraising'
    ],
    education: [
      'MBA in Entrepreneurship',
      'Engineering background'
    ]
  },
  {
    id: '114',
    name: 'Shreya',
    company: 'Anthill Ventures',
    role: 'Investor',
    expertise: 'Venture Capital, Growth',
    linkedin: '#',
    website: 'https://anthill.vc',
    companyLogo: 'https://logo.clearbit.com/anthill.vc',
    image: '/Speakers-Advisors-Circle Members/Advisor - Shreya - Anthill Ventures.png',
    bio: 'Shreya is an investor at Anthill Ventures, focusing on growth-stage technology companies. With her analytical approach and industry knowledge, she helps portfolio companies scale their operations and expand into new markets.',
    experience: [
      'Investor at Anthill Ventures',
      'Previously: Management consulting',
      'Expertise: Growth strategy, market expansion'
    ],
    education: [
      'MBA from a premier institute',
      'Engineering degree'
    ]
  },
  {
    id: '115',
    name: 'Subhash Choudhary',
    company: 'Independent',
    role: 'Advisor',
    expertise: 'Business Strategy',
    linkedin: '#',
    website: '#',
    companyLogo: '',
    image: '/Speakers-Advisors-Circle Members/Advisor - Subhash Choudhary.png',
    bio: 'Subhash Choudhary is an independent business advisor with decades of experience in corporate strategy and leadership. He works with companies of all sizes to develop and execute growth strategies.',
    experience: [
      'Independent Business Advisor',
      'Previously: C-level executive at Fortune 500 companies',
      'Expertise: Corporate strategy, leadership development'
    ],
    education: [
      'MBA from a top business school',
      'Engineering degree'
    ]
  }
];
