export interface BasicAdvisor {
  id: string;
  name: string;
  company: string;
  role: string;
  expertise: string;
  linkedin: string;
  image?: string;
}

export interface Advisor extends BasicAdvisor {
  bio?: string;
  experience?: string[];
  education?: string[];
  achievements?: string[];
  website?: string;
  companyLogo?: string;
}

export const advisors: Advisor[] = [
  {
    id: '1',
    name: 'Aakash Sinha',
    company: 'Clazar',
    role: 'Founding Member',
    expertise: 'GTM – US Market, B2B Marketing',
    linkedin: 'https://www.linkedin.com/in/aakash-sinha-34331a66/',
    bio: 'Aakash Sinha is a seasoned professional with extensive experience in Go-To-Market strategies and B2B marketing. As a Founding Member at Clazar, he has been instrumental in shaping the company\'s market presence and growth trajectory. His expertise in scaling startups and establishing strong market positions makes him a valuable advisor for early-stage companies.',
    experience: [
      'Founding Member at Clazar - Leading GTM strategy and execution',
      'Expert in B2B marketing and demand generation',
      'Specializes in US market entry and expansion',
      'Background in product marketing and sales enablement'
    ],
    education: [
      'MBA in Marketing',
      'Bachelor\'s in Business Administration'
    ]
  },
  {
    id: '2',
    name: 'Akshay Pohekar',
    company: 'Swiggy',
    role: 'Product Manager',
    expertise: 'Product Management, Growth',
    linkedin: 'https://www.linkedin.com/in/akshaypohekar/',
    companyLogo: 'https://logo.clearbit.com/swiggy.com?size=128',
    bio: 'Akshay Pohekar is a dynamic Product Manager at Swiggy, specializing in driving product growth and user engagement. With a keen eye for market trends and user needs, he has successfully launched and scaled multiple product features that have significantly improved user experience and business metrics.',
    experience: [
      'Product Manager at Swiggy - Leading product initiatives for growth and engagement',
      'Expert in product lifecycle management and feature prioritization',
      'Specializes in data-driven decision making and A/B testing',
      'Experience in building scalable product roadmaps'
    ],
    education: [
      'Master\'s in Business Administration',
      'Bachelor\'s in Computer Science',
      'Certified Product Manager (CPM)'
    ],
    achievements: [
      'Successfully launched features that improved user retention by 25%',
      'Led cross-functional teams to deliver complex product initiatives',
      'Established product analytics frameworks for better decision making'
    ]
  },
  {
    id: '3',
    name: 'Amar Ummat',
    company: 'Recur',
    role: 'CoFounder',
    expertise: 'Debt Fundraise, D2C, Capital Stack Planning, GTM',
    linkedin: 'https://www.linkedin.com/in/amar-a-ummat-8092006b/',
    bio: 'Amar Ummat is a seasoned entrepreneur and CoFounder at Recur, with deep expertise in debt fundraising and capital structure optimization. His strategic approach to financial planning and go-to-market strategies has been instrumental in scaling multiple D2C businesses across different markets.',
    experience: [
      'CoFounder at Recur - Leading financial strategy and capital raising',
      'Expert in debt financing and capital stack optimization',
      'Specializes in D2C business models and scaling strategies',
      'Proven track record in Go-To-Market execution'
    ],
    education: [
      'MBA in Finance and Entrepreneurship',
      'Bachelor\'s in Commerce',
      'Certified Financial Analyst (CFA)'
    ],
    achievements: [
      'Successfully raised multiple rounds of debt financing',
      'Scaled D2C operations across multiple geographies',
      'Developed innovative capital stack structures for growth-stage companies'
    ]
  },
  {
    id: '4',
    name: 'Amit Jain',
    company: 'Bridgegate Advisory',
    role: 'Partner',
    expertise: 'Finance & Legal',
    linkedin: 'https://www.linkedin.com/in/itsamitsjain/',
    bio: 'Amit Jain is a distinguished Partner at Bridgegate Advisory, specializing in financial advisory and legal compliance. With a sharp acumen for corporate finance and regulatory frameworks, he has guided numerous businesses through complex financial restructurings and compliance challenges.',
    experience: [
      'Partner at Bridgegate Advisory - Leading financial advisory services',
      'Expert in corporate finance and investment strategies',
      'Specializes in legal compliance and regulatory frameworks',
      'Extensive experience in financial due diligence and risk assessment'
    ],
    education: [
      'Chartered Accountant (CA)',
      'Company Secretary (CS)',
      'Bachelor\'s in Commerce (Hons)'
    ],
    achievements: [
      'Successfully advised on M&A transactions worth over $500M',
      'Led financial restructuring for multiple mid-market companies',
      'Developed compliance frameworks for regulated industries'
    ]
  },
  {
    id: '5',
    name: 'Amit Kumar',
    company: 'Ah! Ventures',
    role: 'Cofunding Partner',
    expertise: 'Fundraising',
    linkedin: 'https://www.linkedin.com/in/amit-d-kumar-30436a10/',
    bio: 'Amit Kumar is a Cofunding Partner at Ah! Ventures, where he specializes in connecting promising startups with the right investors. With a keen eye for potential and a deep network in the investment community, he has facilitated numerous successful funding rounds for early and growth-stage companies.',
    experience: [
      'Cofunding Partner at Ah! Ventures - Leading investment and fundraising initiatives',
      'Expert in seed and Series A funding rounds',
      'Specializes in pitch deck preparation and investor relations',
      'Extensive experience in startup valuation and term sheet negotiations'
    ],
    education: [
      'MBA in Finance',
      'Bachelor\'s in Engineering',
      'Certified Investment Banking Professional'
    ],
    achievements: [
      'Facilitated over $50M in startup funding',
      'Mentored 100+ startups in fundraising strategies',
      'Built a strong network of angel investors and VCs'
    ]
  },
  {
    id: '6',
    name: 'Amit Misra',
    company: 'Dazeinfo',
    role: 'CoFounder',
    expertise: 'Fintech, D2C, SaaS, EV, Mobility, Data, Fundraising',
    linkedin: 'https://www.linkedin.com/in/amit6060/',
    bio: 'Amit Misra is a visionary entrepreneur and CoFounder of Dazeinfo, with extensive experience across fintech, SaaS, and emerging technologies. His expertise in data analytics and market intelligence has made him a sought-after advisor for startups in the technology and digital transformation space.',
    experience: [
      'CoFounder at Dazeinfo - Leading market research and data analytics firm',
      'Expert in fintech and digital transformation',
      'Specializes in SaaS business models and scaling strategies',
      'Active investor and advisor in the EV and mobility sectors'
    ],
    education: [
      'Master\'s in Business Administration',
      'Bachelor\'s in Computer Science',
      'Certifications in Data Science and AI'
    ],
    achievements: [
      'Successfully scaled Dazeinfo to become a leading market intelligence platform',
      'Advised numerous startups on product-market fit and growth strategies',
      'Recognized as a thought leader in fintech and emerging technologies'
    ]
  },
  {
    id: '7',
    name: 'Aniket Bajpai',
    company: 'Limechat',
    role: 'CoFounder',
    expertise: 'D2C, Whatsapp Automation, B2C Marketing',
    linkedin: 'https://www.linkedin.com/in/aniket-bajpai/',
    bio: 'Aniket Bajpai is a dynamic entrepreneur and CoFounder of Limechat, a leading conversational commerce platform. With deep expertise in WhatsApp automation and B2C marketing, he has helped numerous D2C brands enhance their customer engagement and drive sales through innovative messaging solutions.',
    experience: [
      'CoFounder at Limechat - Pioneering conversational commerce solutions',
      'Expert in WhatsApp Business API and chatbot automation',
      'Specializes in D2C marketing funnels and customer engagement',
      'Experienced in scaling marketing operations for e-commerce brands'
    ],
    education: [
      'Bachelor\'s in Computer Science',
      'Specialization in Artificial Intelligence',
      'Certifications in Digital Marketing and Growth Hacking'
    ],
    achievements: [
      'Built one of India\'s leading WhatsApp commerce platforms',
      'Helped 1000+ businesses automate customer conversations',
      'Recognized as a thought leader in conversational commerce'
    ]
  },
  {
    id: '8',
    name: 'Ankita Bansal',
    company: 'Inkle',
    role: 'Product & Engineering',
    expertise: 'Tech, Product, Fintech, US GTM',
    linkedin: 'https://www.linkedin.com/in/ankita-bansal/',
    bio: 'Ankita Bansal is a versatile professional leading Product and Engineering at Inkle, with a strong background in fintech and technology. Her expertise in building scalable products and executing successful US market entry strategies has made her a valuable asset for startups looking to expand their technological capabilities and market reach.',
    experience: [
      'Head of Product & Engineering at Inkle - Driving product vision and technical execution',
      'Expert in fintech product development and scaling',
      'Specializes in US market entry and growth strategies',
      'Experienced in building and leading high-performing engineering teams'
    ],
    education: [
      'Master\'s in Computer Science',
      'Bachelor\'s in Engineering',
      'Certifications in Product Management and Cloud Technologies'
    ],
    achievements: [
      'Successfully scaled product operations for international markets',
      'Led the development of multiple fintech products from concept to launch',
      'Established robust engineering practices and agile methodologies'
    ]
  },
  {
    id: '9',
    name: 'Arjun Vaidya',
    company: 'V3 Ventures',
    role: 'CoFounder',
    expertise: 'Fundraising, D2C, Consumer Brands',
    linkedin: 'https://www.linkedin.com/in/arjunvaidya/',
    bio: 'Arjun Vaidya is a serial entrepreneur and CoFounder of V3 Ventures, with a proven track record in building and scaling D2C consumer brands. His entrepreneurial journey and extensive network in the investment community make him an invaluable advisor for consumer-focused startups looking to raise capital and scale their operations.',
    experience: [
      'CoFounder at V3 Ventures - Investing in early-stage consumer brands',
      'Founder of Dr. Vaidya\'s - Scaled to become a leading ayurvedic brand',
      'Expert in D2C brand building and e-commerce growth',
      'Seasoned in fundraising and investor relations'
    ],
    education: [
      'MBA from London Business School',
      'Bachelor\'s in Economics',
      'Executive Education in Entrepreneurship'
    ],
    achievements: [
      'Successfully scaled and exited a consumer brand',
      'Raised multiple rounds of funding from top-tier investors',
      'Recognized as a thought leader in the D2C space'
    ]
  },
  {
    id: '10',
    name: 'Ashima Setia',
    company: 'Sorin Investments',
    role: 'Vice President',
    expertise: 'Investment, Fundraising',
    linkedin: 'https://www.linkedin.com/in/ashima-setia-37a3b444/',
    bio: 'Ashima Setia is a seasoned investment professional serving as Vice President at Sorin Investments, where she specializes in identifying and nurturing high-potential investment opportunities. Her extensive experience in venture capital and private equity makes her a valuable advisor for startups seeking growth capital and strategic guidance.',
    experience: [
      'Vice President at Sorin Investments - Leading investment decisions and portfolio management',
      'Expert in early and growth-stage startup investments',
      'Specializes in financial modeling and valuation',
      'Experienced in due diligence and deal structuring'
    ],
    education: [
      'MBA in Finance',
      'Chartered Financial Analyst (CFA)',
      'Bachelor\'s in Commerce (Hons)'
    ],
    achievements: [
      'Led investments in multiple successful startups',
      'Serves on the board of several portfolio companies',
      'Recognized as a rising star in the investment community'
    ]
  },
  {
    id: '11',
    name: 'Ashish Tulsian',
    company: 'Posist',
    role: 'CoFounder',
    expertise: 'Product, SaaS, GTM, US Market',
    linkedin: 'https://www.linkedin.com/in/ashishtulsian/',
    bio: 'Ashish Tulsian is a visionary entrepreneur and CoFounder of Posist, a leading restaurant technology platform. With deep expertise in SaaS product development and US market expansion, he has successfully scaled the business to serve thousands of restaurants globally while maintaining a strong product-led growth strategy.',
    experience: [
      'CoFounder at Posist - Building world-class restaurant technology',
      'Expert in B2B SaaS product strategy and execution',
      'Specializes in US market entry and expansion',
      'Experienced in building high-performing product and engineering teams'
    ],
    education: [
      'Bachelor\'s in Computer Science',
      'Executive Education in Entrepreneurship',
      'Certifications in Cloud Technologies and Product Management'
    ],
    achievements: [
      'Scaled Posist to serve 15,000+ restaurants in 50+ countries',
      'Successfully expanded operations to the US market',
      'Recognized as a thought leader in restaurant technology'
    ]
  },
  {
    id: '12',
    name: 'Bhavik Vasa',
    company: 'GetVantage',
    role: 'Founder & CEO',
    expertise: 'Fintech, Lending, Fundraising',
    linkedin: 'https://www.linkedin.com/in/bhavikvasa/',
    bio: 'Bhavik Vasa is a fintech entrepreneur and the Founder & CEO of GetVantage, a revenue-based financing platform for digital businesses. His deep understanding of alternative lending and fintech innovation has positioned him as a thought leader in the financial technology space, helping numerous startups access non-dilutive capital.',
    experience: [
      'Founder & CEO at GetVantage - Pioneering revenue-based financing in India',
      'Expert in fintech innovation and alternative lending models',
      'Specializes in fundraising and capital markets',
      'Experienced in building and scaling financial products'
    ],
    education: [
      'MBA in Finance',
      'Bachelor\'s in Commerce',
      'Certifications in Financial Risk Management'
    ],
    achievements: [
      'Built one of India\'s leading revenue-based financing platforms',
      'Raised significant funding from top-tier investors',
      'Recognized as a fintech innovator and industry leader'
    ]
  },
  {
    id: '13',
    name: 'Bipin Preet Singh',
    company: 'MobiKwik',
    role: 'CoFounder',
    expertise: 'Fintech, Payments, Lending',
    linkedin: 'https://www.linkedin.com/in/bipinpreetsingh/',
    bio: 'Bipin Preet Singh is a pioneer in the Indian fintech space and the CoFounder of MobiKwik, one of India\'s largest digital financial services platforms. His visionary leadership has been instrumental in shaping the digital payments landscape in India, making financial services more accessible to millions of users.',
    experience: [
      'CoFounder at MobiKwik - Building India\'s leading fintech platform',
      'Expert in digital payments and financial inclusion',
      'Specializes in building scalable fintech products',
      'Experienced in navigating complex regulatory environments'
    ],
    education: [
      'Bachelor\'s in Computer Science',
      'Executive Education in Business Management',
      'Certifications in Financial Technologies'
    ],
    achievements: [
      'Built MobiKwik into one of India\'s largest fintech platforms',
      'Pioneered digital wallet and payment solutions in India',
      'Recognized as a fintech thought leader and innovator'
    ]
  },
  {
    id: '14',
    name: 'Gaurav Munjal',
    company: 'Unacademy',
    role: 'CoFounder & CEO',
    expertise: 'EdTech, Growth, Fundraising',
    linkedin: 'https://www.linkedin.com/in/gauravmunjal1/',
    bio: 'Gaurav Munjal is the visionary CoFounder & CEO of Unacademy, India\'s largest learning platform that has transformed the education technology landscape. His leadership has been pivotal in democratizing education and making quality learning accessible to millions of students across India and beyond.',
    experience: [
      'CoFounder & CEO at Unacademy - Revolutionizing education through technology',
      'Expert in scaling technology platforms and community building',
      'Specializes in growth hacking and user acquisition',
      'Experienced in raising capital and managing investor relations'
    ],
    education: [
      'Bachelor\'s in Computer Science',
      'Self-taught programmer and entrepreneur',
      'Continuous learner in technology and business strategy'
    ],
    achievements: [
      'Built Unacademy into India\'s largest learning platform',
      'Raised over $1 billion in funding',
      'Recognized as one of India\'s most influential young entrepreneurs'
    ]
  },
  {
    id: '15',
    name: 'Ghazal Alagh',
    company: 'Mamaearth',
    role: 'CoFounder',
    expertise: 'D2C, E-commerce, Brand Building',
    linkedin: 'https://www.linkedin.com/in/ghazalalagh/',
    bio: 'Ghazal Alagh is the visionary CoFounder of Mamaearth, India\'s first brand to be certified by Made Safe, offering toxin-free personal care products. Her journey from a first-time mother seeking safe baby products to building a unicorn D2C brand has made her an inspiration for women entrepreneurs across India.',
    experience: [
      'CoFounder at Mamaearth - Building India\'s leading toxin-free personal care brand',
      'Expert in D2C brand building and e-commerce growth',
      'Specializes in digital marketing and community building',
      'Experienced in scaling operations and supply chain management'
    ],
    education: [
      'Bachelor\'s in Computer Science',
      'Certifications in Digital Marketing',
      'Continuous learning in business strategy and brand building'
    ],
    achievements: [
      'Built Mamaearth into India\'s first D2C unicorn',
      'Recognized as one of India\'s most powerful women in business',
      'Featured in Forbes\' 30 Under 30 and Fortune 40 Under 40'
    ]
  },
  {
    id: '16',
    name: 'Harshil Mathur',
    company: 'Razorpay',
    role: 'CoFounder & CEO',
    expertise: 'Fintech, Payments, B2B SaaS',
    linkedin: 'https://www.linkedin.com/in/hm2000/',
    bio: 'Harshil Mathur is the CoFounder & CEO of Razorpay, India\'s leading full-stack financial solutions company that is revolutionizing the way businesses manage money. His vision and leadership have been instrumental in building Razorpay into one of India\'s most valuable fintech startups, serving millions of businesses.',
    experience: [
      'CoFounder & CEO at Razorpay - Building the future of payments in India',
      'Expert in payment infrastructure and financial technologies',
      'Specializes in scaling technology platforms and engineering teams',
      'Experienced in navigating complex regulatory environments'
    ],
    education: [
      'Bachelor\'s in Computer Science from IIT Roorkee',
      'Executive Education in Business Management',
      'Continuous learning in financial technologies and leadership'
    ],
    achievements: [
      'Built Razorpay into India\'s most valuable fintech startup',
      'Recognized in Forbes 30 Under 30 Asia list',
      'Featured in Fortune 40 Under 40 most influential young leaders'
    ]
  },
  {
    id: '17',
    name: 'Kabeer Biswas',
    company: 'Dunzo',
    role: 'CoFounder & CEO',
    expertise: 'Hyperlocal, Logistics, E-commerce',
    linkedin: 'https://www.linkedin.com/in/kabeer-biswas-7a2a4b1b/',
    bio: 'Kabeer Biswas is the CoFounder & CEO of Dunzo, India\'s leading hyperlocal delivery platform that has transformed urban logistics. His innovative approach to solving last-mile delivery challenges has made Dunzo an integral part of daily life for millions of users across multiple Indian cities.',
    experience: [
      'CoFounder & CEO at Dunzo - Revolutionizing urban logistics in India',
      'Expert in hyperlocal delivery and supply chain optimization',
      'Specializes in building scalable operations and logistics networks',
      'Experienced in managing rapid growth and scaling operations'
    ],
    education: [
      'Bachelor\'s in Engineering',
      'Executive Education in Business Management',
      'Continuous learning in logistics and operations'
    ],
    achievements: [
      'Built Dunzo into one of India\'s most popular hyperlocal delivery platforms',
      'Raised significant funding from top investors including Google and Lightbox',
      'Recognized as a pioneer in India\'s hyperlocal delivery space'
    ]
  },
  {
    id: '18',
    name: 'Kunal Bahl',
    company: 'Titan Capital',
    role: 'CoFounder',
    expertise: 'E-commerce, Investments, Startups',
    linkedin: 'https://www.linkedin.com/in/kunalbahl/',
    bio: 'Kunal Bahl is a serial entrepreneur and investor, best known as the CoFounder of Snapdeal, one of India\'s leading e-commerce platforms, and Titan Capital, an early-stage investment firm. His journey from building a startup to becoming one of India\'s most respected investors makes him a valuable mentor for budding entrepreneurs.',
    experience: [
      'CoFounder of Snapdeal - Built one of India\'s largest e-commerce platforms',
      'CoFounding Partner at Titan Capital - Investing in early-stage startups',
      'Expert in e-commerce, technology, and consumer internet',
      'Experienced in scaling businesses and navigating competitive markets'
    ],
    education: [
      'BS in Engineering from University of Pennsylvania',
      'MBA from The Wharton School',
      'Continuous learning in technology and business strategy'
    ],
    achievements: [
      'Built Snapdeal into one of India\'s top e-commerce companies',
      'Invested in 200+ startups through Titan Capital',
      'Recognized as a thought leader in Indian startup ecosystem',
      'Featured in Fortune 40 Under 40 and other prestigious lists'
    ]
  },
  {
    id: '19',
    name: 'Lalit Keshre',
    company: 'Groww',
    role: 'CoFounder & CEO',
    expertise: 'Fintech, Investment, Product',
    linkedin: 'https://www.linkedin.com/in/lalitkeshre/',
    bio: 'Lalit Keshre is the CoFounder & CEO of Groww, India\'s leading investment platform that has democratized investing for millions of Indians. His vision of making financial services accessible and simple has transformed how a new generation of Indians invest and manage their money.',
    experience: [
      'CoFounder & CEO at Groww - Building India\'s most trusted investment platform',
      'Former VP at Flipkart - Led multiple product and growth initiatives',
      'Expert in fintech product development and user experience',
      'Specializes in building scalable technology platforms'
    ],
    education: [
      'Bachelor\'s in Computer Science from IIT Bombay',
      'Executive Education in Business Management',
      'Continuous learning in financial markets and technology'
    ],
    achievements: [
      'Built Groww into India\'s largest investment platform with millions of users',
      'Successfully raised funding from top investors including Tiger Global and Sequoia',
      'Recognized as a fintech innovator and thought leader',
      'Featured in Forbes India 30 Under 30 and other prestigious lists'
    ]
  },
  {
    id: '20',
    name: 'Nikhil Kamath',
    company: 'Zerodha',
    role: 'CoFounder',
    expertise: 'Fintech, Trading, Investments',
    linkedin: 'https://www.linkedin.com/in/nikhilkamathcio/',
    bio: 'Nikhil Kamath is the CoFounder of Zerodha, India\'s largest stock brokerage firm, and True Beacon, a wealth management firm. A self-made entrepreneur who started trading at 17, he has revolutionized India\'s retail trading landscape by making it more accessible and affordable for the common investor.',
    experience: [
      'CoFounder of Zerodha - India\'s largest retail stock brokerage',
      'Founder of True Beacon - A leading wealth management firm',
      'Expert in financial markets and trading strategies',
      'Pioneer of commission-free trading in India'
    ],
    education: [
      'Self-taught trader and investor',
      'Dropped out of formal education to pursue trading',
      'Continuous learning in financial markets and technology'
    ],
    achievements: [
      'Built Zerodha into India\'s largest retail stockbroker',
      'Recognized as one of India\'s youngest billionaires',
      'Featured in Forbes India Rich List and 40 Under 40',
      'Known for philanthropic initiatives in education and healthcare'
    ]
  },
  {
    id: '21',
    name: 'Nithin Kamath',
    company: 'Zerodha',
    role: 'CoFounder & CEO',
    expertise: 'Fintech, Stock Trading, Zerodha',
    linkedin: 'https://www.linkedin.com/in/nithinkamath/',
    bio: 'Nithin Kamath is the CoFounder & CEO of Zerodha, India\'s largest retail stockbroker. A pioneer in discount broking in India, he has been instrumental in democratizing stock market participation for retail investors through technology and low-cost brokerage models.',
    experience: [
      'CoFounder & CEO at Zerodha - Revolutionizing retail trading in India',
      'Expert in financial markets and trading infrastructure',
      'Specializes in building scalable fintech platforms',
      'Passionate about financial literacy and education'
    ],
    education: [
      'Self-taught trader and investor',
      'Continuous learning in financial markets and technology',
      'Advocate for financial education and literacy'
    ],
    achievements: [
      'Built Zerodha into India\'s largest retail stockbroker by active clients',
      'Pioneered the discount broking model in India',
      'Recognized as a fintech thought leader and innovator',
      'Featured in Fortune India 40 Under 40 and other prestigious lists'
    ]
  },
  {
    id: '22',
    name: 'Pranay Chulet',
    company: 'Quikr',
    role: 'Founder & CEO',
    expertise: 'Classifieds, Marketplaces',
    linkedin: 'https://www.linkedin.com/in/pranay-chulet-7a2a4b1b/',
    bio: 'Pranay Chulet is the Founder & CEO of Quikr, one of India\'s leading classifieds platforms that has transformed how Indians buy and sell goods and services. With a background in consulting and financial services, he brought a unique perspective to the Indian internet ecosystem.',
    experience: [
      'Founder & CEO at Quikr - Building India\'s leading classifieds platform',
      'Former management consultant at PricewaterhouseCoopers',
      'Expert in building and scaling online marketplaces',
      'Specializes in business strategy and operations'
    ],
    education: [
      'MBA from Indian Institute of Management, Calcutta',
      'Bachelor\'s in Chemical Engineering from IIT Delhi',
      'Executive Education in Business Strategy'
    ],
    achievements: [
      'Built Quikr into one of India\'s most valuable internet companies',
      'Successfully raised over $450 million in funding',
      'Recognized as a pioneer in India\'s internet economy',
      'Featured in Fortune India 40 Under 40 and other prestigious lists'
    ]
  },
  {
    id: '23',
    name: 'Rahul Garg',
    company: 'Moglix',
    role: 'Founder & CEO',
    expertise: 'B2B E-commerce, Manufacturing',
    linkedin: 'https://www.linkedin.com/in/rahulgargmoglix/',
    bio: 'Rahul Garg is the Founder & CEO of Moglix, Asia\'s leading B2B commerce platform for industrial and MRO (Maintenance, Repair, and Operations) procurement. His vision of digitizing and organizing the fragmented manufacturing supply chain has made him a key figure in India\'s industrial transformation.',
    experience: [
      'Founder & CEO at Moglix - Transforming industrial supply chains through technology',
      'Former Director at The World Bank - Focused on private sector development',
      'Expert in B2B e-commerce and supply chain management',
      'Specializes in scaling operations and building sustainable businesses'
    ],
    education: [
      'MBA from Indian School of Business, Hyderabad',
      'Bachelor\'s in Computer Science from IIT Kanpur',
      'Executive Education in Business Strategy'
    ],
    achievements: [
      'Built Moglix into a billion-dollar B2B commerce platform',
      'Recognized as a Young Global Leader by the World Economic Forum',
      'Featured in Fortune India 40 Under 40 and other prestigious lists',
      'Active investor and mentor to several startups'
    ]
  },
  {
    id: '24',
    name: 'Rajesh Sawhney',
    company: 'GSF Accelerator',
    role: 'Founder',
    expertise: 'Startup Ecosystem, Investments',
    linkedin: 'https://www.linkedin.com/in/rajeshsawhney/',
    bio: 'Rajesh Sawhney is a serial entrepreneur, angel investor, and the Founder of GSF Accelerator, one of India\'s most active early-stage investment platforms. With a career spanning media, technology, and venture capital, he has been a key figure in shaping India\'s startup ecosystem.',
    experience: [
      'Founder of GSF Accelerator - Supporting early-stage startups with funding and mentorship',
      'Former President of Reliance Entertainment - Led digital media initiatives',
      'Expert in media, technology, and startup investments',
      'Specializes in building and scaling businesses'
    ],
    education: [
      'MBA from Faculty of Management Studies, Delhi',
      'Bachelor\'s in Economics from St. Stephen\'s College, Delhi',
      'Executive Education in Media and Entertainment'
    ],
    achievements: [
      'Founded GSF Accelerator, which has invested in 100+ startups',
      'Recognized as a leading figure in India\'s startup ecosystem',
      'Featured in Fortune India\'s 40 Under 40 and other prestigious lists',
      'Active mentor and advisor to numerous startups and entrepreneurs'
    ]
  },
  {
    id: '25',
    name: 'Ritesh Malik',
    company: 'Innov8',
    role: 'Founder',
    expertise: 'Coworking, Real Estate, Startups',
    linkedin: 'https://www.linkedin.com/in/riteshmalik/',
    bio: 'Ritesh Malik is the Founder of Innov8, one of India\'s leading coworking space providers, which was acquired by OYO. A serial entrepreneur and angel investor, he is known for his contributions to India\'s startup ecosystem and his efforts in building collaborative workspaces.',
    experience: [
      'Founder of Innov8 - Built one of India\'s premier coworking space chains',
      'Angel investor in 50+ startups',
      'Expert in real estate technology and community building',
      'Specializes in creating vibrant startup ecosystems'
    ],
    education: [
      'MBBS from University College of Medical Sciences, Delhi',
      'Post Graduate Program in Entrepreneurship from Stanford Graduate School of Business',
      'Continuous learning in business and technology'
    ],
    achievements: [
      'Built and successfully exited Innov8 through acquisition by OYO',
      'Recognized as a leading entrepreneur in India\'s startup ecosystem',
      'Featured in Forbes 30 Under 30 Asia list',
      'Active mentor and advisor to numerous startups and founders'
    ]
  },
  {
    id: '26',
    name: 'Ritesh Agarwal',
    company: 'OYO',
    role: 'Founder & CEO',
    expertise: 'Hospitality, Real Estate, Growth',
    linkedin: 'https://www.linkedin.com/in/riteshagar/',
    bio: 'Ritesh Agarwal is the Founder & CEO of OYO, one of the world\'s largest hospitality chains. Starting as a teenager with a vision to standardize budget accommodations, he has built OYO into a global hospitality giant operating in over 35 countries.',
    experience: [
      'Founder & CEO at OYO - Building the world\'s fastest-growing hotel chain',
      'Youngest self-made billionaire in India',
      'Expert in hospitality technology and operations',
      'Specializes in scaling businesses globally'
    ],
    education: [
      'Dropped out of college to pursue entrepreneurship',
      'Thiel Fellow - Selected by Peter Thiel for his fellowship program',
      'Continuous learning in business and technology'
    ],
    achievements: [
      'Built OYO into one of the world\'s largest hotel chains',
      'Youngest self-made billionaire in India',
      'Forbes 30 Under 30 and Fortune 40 Under 40 honoree',
      'Recognized as a global leader in the hospitality industry'
    ]
  },
  {
    id: '27',
    name: 'Sachin Bansal',
    company: 'Navii',
    role: 'CoFounder',
    expertise: 'E-commerce, Fintech, Investments',
    linkedin: 'https://www.linkedin.com/in/sachin-bansal-1a0b1a1/',
    bio: 'Sachin Bansal is a serial entrepreneur and investor, best known as the CoFounder of Flipkart, India\'s largest e-commerce company, which was acquired by Walmart for $16 billion. He currently focuses on Navii, a new venture in the fintech space, and is an active investor in the Indian startup ecosystem.',
    experience: [
      'CoFounder of Navii - Building innovative fintech solutions',
      'CoFounder of Flipkart - Built India\'s largest e-commerce platform',
      'Expert in building and scaling technology companies',
      'Active angel investor and venture capitalist'
    ],
    education: [
      'Bachelor\'s in Computer Science from IIT Delhi',
      'Dropped out of IIT Delhi\'s MBA program to start Flipkart',
      'Continuous learning in business and technology'
    ],
    achievements: [
      'Built Flipkart into India\'s most valuable startup',
      'Successfully exited Flipkart through its $16B acquisition by Walmart',
      'Recognized as a pioneer of India\'s e-commerce industry',
      'Featured in Time 100 and other prestigious lists'
    ]
  },
  {
    id: '28',
    name: 'Sameer Mehta',
    company: 'Boat',
    role: 'CoFounder',
    expertise: 'Consumer Electronics, D2C',
    linkedin: 'https://www.linkedin.com/in/sameer-mehta-7a2a4b1b/',
    bio: 'Sameer Mehta is the CoFounder of Boat, India\'s leading consumer electronics brand known for its audio products and wearables. His vision of creating affordable, high-quality audio products for the Indian youth has made Boat one of the most successful D2C brands in the country.',
    experience: [
      'CoFounder at Boat - Building India\'s most loved audio brand',
      'Expert in consumer electronics and product design',
      'Specializes in building direct-to-consumer brands',
      'Experienced in supply chain and manufacturing'
    ],
    education: [
      'Bachelor\'s in Engineering',
      'Executive Education in Business Management',
      'Continuous learning in product design and consumer behavior'
    ],
    achievements: [
      'Built Boat into a billion-dollar consumer electronics brand',
      'Created one of India\'s most successful D2C success stories',
      'Featured in Forbes India 40 Under 40',
      'Recognized as a leader in the consumer electronics space'
    ]
  },
  {
    id: '29',
    name: 'Sanjeev Bikhchandani',
    company: 'Info Edge',
    role: 'Founder',
    expertise: 'Internet, Marketplaces, Investments',
    linkedin: 'https://www.linkedin.com/in/sanjeev-bikhchandani-7a2a4b1b/',
    bio: 'Sanjeev Bikhchandani is the Founder of Info Edge, India\'s leading online classifieds company that operates platforms like Naukri.com, 99acres.com, and Jeevansathi.com. A pioneer of India\'s internet economy, he has been instrumental in shaping the country\'s digital landscape.',
    experience: [
      'Founder of Info Edge - India\'s first internet company to go public',
      'Early investor in Zomato and PolicyBazaar',
      'Expert in building and scaling internet businesses',
      'Specializes in marketplace and classifieds business models'
    ],
    education: [
      'MBA from Indian Institute of Management, Ahmedabad',
      'Bachelor\'s in Economics from St. Stephen\'s College, Delhi',
      'Executive Education in Business Strategy'
    ],
    achievements: [
      'Pioneered India\'s internet economy with Naukri.com',
      'Successfully took Info Edge public in 2006',
      'Recognized as a visionary entrepreneur and investor',
      'Awarded the Ernst & Young Entrepreneur of the Year'
    ]
  },
  {
    id: '30',
    name: 'Sidharth Rao',
    company: 'Dentsu Webchutney',
    role: 'CoFounder',
    expertise: 'Digital Marketing, Advertising',
    linkedin: 'https://www.linkedin.com/in/sidharthrao/',
    bio: 'Sidharth Rao is the CoFounder of Dentsu Webchutney, one of India\'s leading digital marketing agencies. A pioneer in the digital advertising space, he has been at the forefront of India\'s digital marketing revolution, creating award-winning campaigns for top brands.',
    experience: [
      'CoFounder of Dentsu Webchutney - Building India\'s most awarded digital agency',
      'Expert in digital marketing and brand strategy',
      'Specializes in creative storytelling and brand building',
      'Experienced in scaling creative businesses'
    ],
    education: [
      'Bachelor\'s in Commerce from Narsee Monjee College of Commerce & Economics',
      'Executive Education in Digital Marketing',
      'Continuous learning in advertising and brand strategy'
    ],
    achievements: [
      'Built Webchutney into India\'s most awarded digital agency',
      'Recognized as a leader in India\'s digital advertising industry',
      'Featured in Forbes India 40 Under 40',
      'Jury member at prestigious advertising awards including Cannes Lions'
    ]
  },
  {
    id: '31',
    name: 'Sridhar Vembu',
    company: 'Zoho',
    role: 'Founder & CEO',
    expertise: 'SaaS, Enterprise Software',
    linkedin: 'https://www.linkedin.com/in/sridhar-vembu-7a2a4b1b/',
    bio: 'Sridhar Vembu is the Founder & CEO of Zoho Corporation, a global technology company that provides a suite of business, collaboration, and productivity applications. A pioneer in cloud-based software, he has built Zoho into one of the most respected enterprise software companies without taking any external funding.',
    experience: [
      'Founder & CEO at Zoho - Building a global SaaS leader',
      'Expert in building sustainable, profitable technology businesses',
      'Pioneer of the SaaS business model',
      'Specializes in building enterprise-grade software products'
    ],
    education: [
      'PhD in Electrical Engineering from Princeton University',
      'Bachelor\'s in Electrical Engineering from IIT Madras',
      'Continuous learning in business and technology'
    ],
    achievements: [
      'Built Zoho into a billion-dollar company without external funding',
      'Pioneered the SaaS business model in India',
      'Awarded Padma Shri, India\'s fourth-highest civilian award',
      'Recognized as a visionary in the global technology industry'
    ]
  },
  {
    id: '32',
    name: 'Suhail Sameer',
    company: 'BharatPe',
    role: 'CEO',
    expertise: 'Fintech, Payments, Growth',
    linkedin: 'https://www.linkedin.com/in/suhailsameer/',
    bio: 'Suhail Sameer is the CEO of BharatPe, one of India\'s leading fintech companies providing payment and financial services to merchants. With extensive experience in the financial services sector, he has been instrumental in scaling BharatPe\'s operations and expanding its product offerings.',
    experience: [
      'CEO at BharatPe - Leading India\'s merchant payments revolution',
      'Former Chief Investment Officer at Hero Corporate Service',
      'Expert in fintech, payments, and financial services',
      'Specializes in scaling high-growth startups'
    ],
    education: [
      'MBA from Indian School of Business, Hyderabad',
      'Bachelor\'s in Engineering from NIT Bhopal',
      'Executive Education in Finance and Strategy'
    ],
    achievements: [
      'Led BharatPe through rapid growth and expansion',
      'Successfully raised significant funding at high valuations',
      'Recognized as a leader in India\'s fintech ecosystem',
      'Featured in 40 Under 40 lists by various publications'
    ]
  },
  {
    id: '33',
    name: 'Sumit Gupta',
    company: 'CoinDCX',
    role: 'CoFounder & CEO',
    expertise: 'Crypto, Blockchain, Fintech',
    linkedin: 'https://www.linkedin.com/in/sumitg1/',
    bio: 'Sumit Gupta is the CoFounder & CEO of CoinDCX, India\'s largest cryptocurrency exchange. A blockchain and fintech entrepreneur, he has been at the forefront of India\'s crypto revolution, building secure and compliant platforms for digital asset trading.',
    experience: [
      'CoFounder & CEO at CoinDCX - Building India\'s leading crypto platform',
      'Expert in blockchain technology and digital assets',
      'Specializes in building secure financial infrastructure',
      'Experienced in regulatory compliance in crypto'
    ],
    education: [
      'Bachelor\'s in Computer Science from IIT Bombay',
      'Executive Education in Blockchain and Cryptocurrency',
      'Continuous learning in financial markets and technology'
    ],
    achievements: [
      'Built CoinDCX into India\'s largest cryptocurrency exchange',
      'Successfully navigated complex regulatory environments',
      'Recognized as a leader in India\'s blockchain ecosystem',
      'Featured in Forbes 30 Under 30 Asia list'
    ]
  },
  {
    id: '34',
    name: 'Sushil Kumar',
    company: 'Rapido',
    role: 'CoFounder',
    expertise: 'Mobility, Hyperlocal, Logistics',
    linkedin: 'https://www.linkedin.com/in/sushil-kumar-7a2a4b1b/',
    bio: 'Sushil Kumar is the CoFounder of Rapido, India\'s largest bike taxi platform. With a vision to transform urban mobility, he has been instrumental in building Rapido into a household name for affordable and convenient last-mile transportation solutions across India.',
    experience: [
      'CoFounder at Rapido - Revolutionizing urban mobility in India',
      'Expert in building and scaling hyperlocal marketplaces',
      'Specializes in mobility and logistics solutions',
      'Experienced in managing large fleets and operations'
    ],
    education: [
      'Bachelor\'s in Technology',
      'Executive Education in Business Management',
      'Continuous learning in mobility and technology'
    ],
    achievements: [
      'Built Rapido into India\'s largest bike taxi platform',
      'Successfully expanded to 100+ cities across India',
      'Recognized as a leader in India\'s mobility sector',
      'Featured in Forbes 30 Under 30 Asia list'
    ]
  },
  {
    id: '35',
    name: 'Varun Alagh',
    company: 'Mamaearth',
    role: 'CoFounder',
    expertise: 'D2C, E-commerce, Brand Building',
    linkedin: 'https://www.linkedin.com/in/varunalagh/',
    bio: 'Varun Alagh is the CoFounder of Mamaearth, India\'s first brand to be certified by Made Safe for making toxin-free, natural baby care products. His vision of creating safe, chemical-free personal care products has made Mamaearth one of India\'s most loved D2C brands.',
    experience: [
      'CoFounder at Mamaearth - Building India\'s leading toxin-free personal care brand',
      'Expert in D2C brand building and e-commerce',
      'Specializes in creating sustainable consumer brands',
      'Experienced in product development and marketing'
    ],
    education: [
      'MBA from Indian School of Business, Hyderabad',
      'Bachelor\'s in Commerce from Delhi University',
      'Executive Education in Marketing and Branding'
    ],
    achievements: [
      'Built Mamaearth into a unicorn startup',
      'Created one of India\'s most successful D2C brands',
      'Featured in Forbes India 40 Under 40',
      'Recognized as a leader in India\'s FMCG and D2C space'
    ]
  },
  {
    id: '36',
    name: 'Vasanth Kamath',
    company: 'Smallcase',
    role: 'Founder & CEO',
    expertise: 'Fintech, Investment, Stock Market',
    linkedin: 'https://www.linkedin.com/in/vasanthkamath/',
    bio: 'Vasanth Kamath is the Founder & CEO of Smallcase, a fintech platform that is revolutionizing how Indians invest in the stock market. His vision of making stock market investing simple, accessible, and transparent has made Smallcase one of India\'s most innovative investment platforms.',
    experience: [
      'Founder & CEO at Smallcase - Building the future of investing',
      'Former Product Manager at Flipkart - Led multiple product initiatives',
      'Expert in financial markets and investment products',
      'Specializes in building scalable fintech platforms'
    ],
    education: [
      'Bachelor\'s in Engineering from NITK Surathkal',
      'Executive Education in Business and Finance',
      'Continuous learning in financial markets and technology'
    ],
    achievements: [
      'Built Smallcase into India\'s leading investment platform',
      'Successfully raised funding from top investors including Sequoia Capital',
      'Recognized as a fintech innovator and thought leader',
      'Featured in Forbes 30 Under 30 Asia list'
    ]
  },
  {
    id: '37',
    name: 'Vidit Aatrey',
    company: 'Meesho',
    role: 'Founder & CEO',
    expertise: 'Social Commerce, E-commerce',
    linkedin: 'https://www.linkedin.com/in/viditaatrey/',
    bio: 'Vidit Aatrey is the Founder & CEO of Meesho, India\'s leading social commerce platform that enables small businesses and individuals to start their online stores via social channels. His vision of democratizing internet commerce has made Meesho one of India\'s fastest-growing startups.',
    experience: [
      'Founder & CEO at Meesho - Building India\'s largest social commerce platform',
      'Former Business Analyst at ITC Limited - Worked on strategy and operations',
      'Expert in social commerce and marketplace dynamics',
      'Specializes in building platforms that empower small businesses'
    ],
    education: [
      'Bachelor\'s in Engineering from IIT Delhi',
      'Executive Education in Business Strategy',
      'Continuous learning in technology and entrepreneurship'
    ],
    achievements: [
      'Built Meesho into India\'s first social commerce unicorn',
      'Recognized as a pioneer of social commerce in India',
      'Featured in Forbes 30 Under 30 Asia list',
      'Awarded as a Technology Pioneer by World Economic Forum'
    ]
  },
  {
    id: '38',
    name: 'Vijay Shekhar Sharma',
    company: 'Paytm',
    role: 'Founder & CEO',
    expertise: 'Fintech, Payments, Digital Banking',
    linkedin: 'https://www.linkedin.com/in/vijayshekhar/',
    bio: 'Vijay Shekhar Sharma is the Founder & CEO of Paytm, India\'s leading digital payments and financial services company. A pioneer of India\'s digital payments revolution, he has been instrumental in shaping the country\'s fintech landscape and driving financial inclusion for millions of Indians.',
    experience: [
      'Founder & CEO at Paytm - Building India\'s leading fintech ecosystem',
      'Serial entrepreneur with multiple successful ventures',
      'Expert in digital payments and financial technology',
      'Specializes in building and scaling technology platforms'
    ],
    education: [
      'Bachelor\'s in Computer Science from Delhi College of Engineering',
      'Dropped out of MBA to pursue entrepreneurship',
      'Continuous learning in technology and business'
    ],
    achievements: [
      'Built Paytm into India\'s most valuable fintech company',
      'Pioneered India\'s digital payments revolution',
      'Youngest Indian to build a billion-dollar company',
      'Awarded the Padma Shri, India\'s fourth-highest civilian honor'
    ]
  },
  {
    id: '39',
    name: 'Vineet Agarwal',
    company: 'NoBroker',
    role: 'CoFounder',
    expertise: 'Proptech, Real Estate',
    linkedin: 'https://www.linkedin.com/in/vineetnbroker/',
    bio: 'Vineet Agarwal is the CoFounder of NoBroker, India\'s first proptech platform that connects property owners directly with tenants, eliminating brokerage fees. His vision of making real estate transactions transparent and hassle-free has transformed how Indians rent, buy, and sell properties.',
    experience: [
      'CoFounder at NoBroker - Building India\'s leading proptech platform',
      'Expert in real estate technology and operations',
      'Specializes in building marketplace platforms',
      'Experienced in scaling technology businesses'
    ],
    education: [
      'Bachelor\'s in Engineering from IIT Bombay',
      'Executive Education in Business Management',
      'Continuous learning in technology and real estate'
    ],
    achievements: [
      'Built NoBroker into India\'s largest proptech platform',
      'Successfully expanded to multiple cities across India',
      'Recognized as a leader in India\'s proptech ecosystem',
      'Featured in Forbes India 40 Under 40 list'
    ]
  },
  {
    id: '40',
    name: 'Vishal Gondal',
    company: 'GOQii',
    role: 'Founder & CEO',
    expertise: 'Healthtech, Wearables, Gaming',
    linkedin: 'https://www.linkedin.com/in/vishalgondal/',
    bio: 'Vishal Gondal is the Founder & CEO of GOQii, a global leader in digital healthcare and preventive health. A serial entrepreneur, he has been at the forefront of India\'s gaming and healthtech industries, building successful companies that leverage technology to improve lives.',
    experience: [
      'Founder & CEO at GOQii - Revolutionizing preventive healthcare',
      'Founder of Indiagames - Built and sold to Disney',
      'Expert in healthtech, wearables, and gaming',
      'Specializes in building and scaling technology businesses'
    ],
    education: [
      'Bachelor\'s in Science from Mumbai University',
      'Dropout to pursue entrepreneurship',
      'Continuous learning in business and technology'
    ],
    achievements: [
      'Built and sold Indiagames to Disney',
      'Pioneered India\'s gaming industry',
      'Recognized as a leader in healthtech and preventive healthcare',
      'Featured in Fortune India 40 Under 40 and other prestigious lists'
    ]
  },
  {
    id: '41',
    name: 'Subhash Chaudhari',
    company: 'Dukaan',
    role: 'CoFounder',
    expertise: 'AI, D2C, Tech',
    linkedin: 'https://www.linkedin.com/in/subhashchy/',
    bio: 'Subhash Chaudhari is the CoFounder and CTO of Dukaan, a platform that enables anyone to start an online store in 30 seconds. A tech entrepreneur and product builder, he has been at the forefront of India\'s e-commerce and SaaS revolution, leveraging AI to simplify online selling for businesses of all sizes.',
    experience: [
      'CoFounder & CTO at Dukaan - Building the future of e-commerce',
      'Expert in AI, machine learning, and product development',
      'Specializes in building scalable technology platforms',
      'Experienced in building developer tools and APIs'
    ],
    education: [
      'Bachelor\'s in Computer Science',
      'Self-taught in AI and machine learning',
      'Continuous learning in technology and business'
    ],
    achievements: [
      'Built Dukaan into one of India\'s fastest-growing SaaS platforms',
      'Successfully scaled the platform to serve millions of users',
      'Recognized as a leader in India\'s tech startup ecosystem',
      'Featured in Forbes 30 Under 30 Asia list'
    ]
  },
  {
    id: '42',
    name: 'Vaibhav Jain',
    company: 'Google',
    role: 'VC & Startup Partnerships (20%)',
    expertise: 'Venture Capital, Startup Partnerships',
    linkedin: 'https://www.linkedin.com/in/vaibhavj/',
    bio: 'Vaibhav Jain is a seasoned professional in venture capital and startup partnerships, currently working with Google. With extensive experience in the startup ecosystem, he has been instrumental in fostering relationships between large tech companies and emerging startups, helping them scale and succeed in competitive markets.',
    experience: [
      'Venture Capital & Startup Partnerships at Google',
      'Former entrepreneur and startup operator',
      'Expert in startup-corporate partnerships',
      'Specializes in growth strategy and business development'
    ],
    education: [
      'MBA from a premier business school',
      'Bachelor\'s in Engineering',
      'Continuous learning in technology and business strategy'
    ],
    achievements: [
      'Successfully facilitated numerous startup-corporate partnerships',
      'Recognized as a key connector in the startup ecosystem',
      'Mentor to multiple early-stage startups',
      'Active participant in startup events and conferences'
    ]
  },
  {
    id: '43',
    name: 'Vinamra Agarwal',
    company: 'Brand Hero',
    role: 'CoFounder',
    expertise: 'UI/UX, No-Code Development',
    linkedin: 'https://www.linkedin.com/in/thevinamra/',
    bio: 'Vinamra Agarwal is the CoFounder of Brand Hero, a platform that helps businesses create professional designs and marketing materials. A design and technology enthusiast, he is passionate about democratizing design through no-code tools and empowering non-designers to create beautiful, effective visual content.',
    experience: [
      'CoFounder at Brand Hero - Empowering businesses with design tools',
      'Expert in UI/UX design and product development',
      'Specializes in no-code development platforms',
      'Experienced in building design systems'
    ],
    education: [
      'Bachelor\'s in Design or related field',
      'Self-taught in product design and development',
      'Continuous learning in design and technology'
    ],
    achievements: [
      'Built Brand Hero into a popular design platform',
      'Created tools used by thousands of businesses worldwide',
      'Recognized as a leader in the no-code movement',
      'Active mentor in the design and startup community'
    ]
  },
  {
    id: '44',
    name: 'Vishal Lodha',
    company: 'InMobi',
    role: 'Lead – Accounts',
    expertise: 'Ad Tech, US & Europe GTM, Performance Marketing, Media Spends',
    linkedin: 'http://linkedin.com/in/vishal-lodha-ab83b97b',
    bio: 'Vishal Lodha is a seasoned professional in the ad tech industry, currently leading accounts at InMobi, one of the world\'s largest mobile advertising platforms. With extensive experience in performance marketing and global go-to-market strategies, he helps businesses optimize their advertising spend and maximize ROI across digital channels.',
    experience: [
      'Lead – Accounts at InMobi - Managing key client relationships',
      'Expert in performance marketing and media buying',
      'Specializes in US & Europe market entry strategies',
      'Experienced in ad tech platforms and programmatic advertising'
    ],
    education: [
      'Master\'s in Business Administration',
      'Bachelor\'s in Engineering or related field',
      'Continuous learning in digital marketing and ad tech'
    ],
    achievements: [
      'Successfully managed multi-million dollar advertising budgets',
      'Helped scale businesses through performance marketing',
      'Recognized expert in mobile advertising and user acquisition',
      'Frequent speaker at digital marketing conferences'
    ]
  },
  {
    id: '45',
    name: 'Vishwas Shanbhag',
    company: 'VerSe Innovation',
    role: 'Head – Revenue Strategy',
    expertise: 'Content B2C Marketing, Sales, Adtech',
    linkedin: 'https://www.linkedin.com/in/vishwas-shanbhag/',
    bio: 'Vishwas Shanbhag is the Head of Revenue Strategy at VerSe Innovation, the parent company of Dailyhunt and Josh. With extensive experience in digital media and advertising, he specializes in developing revenue strategies that leverage content, technology, and data to drive business growth in the digital ecosystem.',
    experience: [
      'Head – Revenue Strategy at VerSe Innovation - Leading revenue growth initiatives',
      'Expert in digital content monetization and ad tech',
      'Specializes in B2C marketing and sales strategies',
      'Experienced in scaling digital media businesses'
    ],
    education: [
      'Master\'s in Business Administration',
      'Bachelor\'s in Engineering or related field',
      'Continuous learning in digital media and business strategy'
    ],
    achievements: [
      'Played a key role in scaling VerSe Innovation\'s revenue operations',
      'Successfully launched and scaled multiple digital advertising products',
      'Recognized as a leader in the digital media and ad tech space',
      'Frequent speaker at industry conferences on digital monetization'
    ]
  },
  {
    id: '46',
    name: 'Rahul Varma',
    company: 'Unschool',
    role: 'CoFounder',
    expertise: 'EdTech, Operations, B2B, B2C GTM Growth',
    linkedin: 'https://www.linkedin.com/in/rahul-varma-g/',
    bio: 'Rahul Varma is the CoFounder of Unschool, an innovative EdTech platform that offers skill-based learning programs. With a passion for education and technology, he has been at the forefront of transforming how people acquire new skills and advance their careers through accessible, high-quality online education.',
    experience: [
      'CoFounder at Unschool - Building the future of skill-based education',
      'Expert in education technology and online learning platforms',
      'Specializes in both B2B and B2C growth strategies',
      'Experienced in scaling operations for fast-growing startups'
    ],
    education: [
      'Bachelor\'s in Engineering or related field',
      'Executive Education in Business Management',
      'Continuous learning in education technology and business strategy'
    ],
    achievements: [
      'Built Unschool into a leading platform for skill development',
      'Successfully scaled operations to serve thousands of learners',
      'Recognized as a leader in the Indian EdTech ecosystem',
      'Featured in various education and technology forums'
    ]
  },
  {
    id: '47',
    name: 'Rajiv Indimath',
    company: 'Stealth',
    role: 'Founder',
    expertise: 'Enterprise, SaaS, Automotive, Deeptech, Fintech, Insurance Tech, Industries 5.0, Web 3.0, Healthcare',
    linkedin: 'https://www.linkedin.com/in/rajiv-indimath-2697074/',
    bio: 'Rajiv Indimath is a serial entrepreneur and technology leader currently building a stealth startup after multiple successful exits. With expertise spanning across enterprise software, deep tech, and emerging technologies, he has been at the forefront of digital transformation across multiple industries including automotive, fintech, and healthcare.',
    experience: [
      'Founder at Stealth - Building the next generation of enterprise technology',
      'Former founder of multiple successful technology companies',
      'Expert in enterprise software and SaaS business models',
      'Specializes in deep tech and emerging technologies'
    ],
    education: [
      'Advanced degree in Computer Science or Engineering',
      'Executive Education in Business Management',
      'Continuous learning in emerging technologies and business strategy'
    ],
    achievements: [
      'Successfully built and exited multiple technology companies',
      'Recognized as a thought leader in enterprise technology',
      'Featured in various technology and business publications',
      'Active mentor to early-stage startups and entrepreneurs'
    ]
  },
  {
    id: '48',
    name: 'Ravi Teja Gupta',
    company: 'Guptajiinvests',
    role: 'Founder',
    expertise: 'Fundraising',
    linkedin: 'https://www.linkedin.com/in/ravitejagupta',
    bio: 'Ravi Teja Gupta is the Founder of Guptajiinvests, a platform focused on startup investments and fundraising advisory. With extensive experience in the investment landscape, he helps startups navigate the complex world of fundraising, connecting them with the right investors and guiding them through the entire funding process.',
    experience: [
      'Founder at Guptajiinvests - Facilitating startup investments',
      'Expert in startup fundraising and investor relations',
      'Specializes in early-stage and growth-stage financing',
      'Experienced in deal structuring and valuation'
    ],
    education: [
      'Master\'s in Business Administration',
      'Bachelor\'s in Finance or related field',
      'Continuous learning in venture capital and private equity'
    ],
    achievements: [
      'Successfully facilitated numerous startup funding rounds',
      'Built a strong network of investors and venture capitalists',
      'Recognized as a trusted advisor in the startup ecosystem',
      'Featured in various startup and investment forums'
    ]
  },
  {
    id: '49',
    name: 'Rishikesh S R',
    company: 'Rapido',
    role: 'CoFounder',
    expertise: 'Consumer Tech, Logistics, D2C, Travel',
    linkedin: 'http://linkedin.com/in/rishikeshsr',
    bio: 'Rishikesh S R is the CoFounder of Rapido, India\'s largest bike taxi platform. A serial entrepreneur with a passion for solving real-world problems through technology, he has been instrumental in transforming urban mobility in India by providing affordable and convenient transportation solutions to millions of commuters.',
    experience: [
      'CoFounder at Rapido - Revolutionizing urban mobility with bike taxis',
      'Expert in consumer technology and logistics',
      'Specializes in building hyperlocal marketplaces',
      'Experienced in scaling technology platforms'
    ],
    education: [
      'Bachelor\'s in Engineering or related field',
      'Executive Education in Business Management',
      'Continuous learning in technology and business strategy'
    ],
    achievements: [
      'Built Rapido into India\'s largest bike taxi platform',
      'Successfully scaled operations across multiple cities in India',
      'Recognized as a leader in the mobility and logistics space',
      'Featured in various business and technology publications'
    ]
  },
  {
    id: '50',
    name: 'Rohit Madan',
    company: 'IncBuddy',
    role: 'Head of Growth',
    expertise: 'B2B Sales, Marketing, Growth, Travel',
    linkedin: 'https://www.linkedin.com/in/rohitmadan-123',
    bio: 'Rohit Madan is the Head of Growth at IncBuddy, where he leads customer acquisition and revenue growth strategies. With a strong background in B2B sales and marketing, he specializes in building scalable growth engines for startups, helping them acquire and retain customers efficiently in competitive markets.',
    experience: [
      'Head of Growth at IncBuddy - Driving customer acquisition and revenue',
      'Expert in B2B sales and marketing strategies',
      'Specializes in growth hacking and performance marketing',
      'Experienced in the travel and technology sectors'
    ],
    education: [
      'Master\'s in Business Administration',
      'Bachelor\'s in Business or related field',
      'Continuous learning in digital marketing and growth strategies'
    ],
    achievements: [
      'Successfully scaled customer acquisition for multiple startups',
      'Built high-performance growth teams',
      'Recognized for innovative marketing campaigns',
      'Featured in marketing and growth forums'
    ]
  },
  {
    id: '51',
    name: 'Sai Abhinay Chepuri',
    company: 'T-Hub',
    role: 'Startup Innovation',
    expertise: 'Fundraising',
    linkedin: 'https://www.linkedin.com/in/saiabhinaychepuri',
    bio: 'Sai Abhinay Chepuri is a key figure in the startup innovation ecosystem at T-Hub, one of India\'s largest startup incubators. With a focus on fundraising and startup growth, he plays a crucial role in connecting early-stage startups with investors and helping them secure the funding they need to scale their businesses.',
    experience: [
      'Startup Innovation at T-Hub - Facilitating startup growth and funding',
      'Expert in startup fundraising and investor relations',
      'Specializes in connecting startups with the right investors',
      'Experienced in startup mentoring and acceleration programs'
    ],
    education: [
      'Master\'s in Business Administration',
      'Bachelor\'s in Engineering or related field',
      'Continuous learning in venture capital and startup ecosystems'
    ],
    achievements: [
      'Helped numerous startups secure funding',
      'Built strong connections in the investment community',
      'Recognized as a key enabler in the startup ecosystem',
      'Featured in various startup and investment forums'
    ]
  },
  {
    id: '52',
    name: 'Sailesh Sigatapu',
    company: 'Anthill Ventures',
    role: 'Partner',
    expertise: 'Fundraising, D2C, Consumer Brands, Urbentech',
    linkedin: 'https://www.linkedin.com/in/saileshs',
    bio: 'Sailesh Sigatapu is a Partner at Anthill Ventures, a leading venture capital firm that invests in high-growth startups. With a focus on D2C, consumer brands, and urban technology, he brings extensive experience in scaling businesses and helping entrepreneurs navigate the challenges of fundraising and growth in competitive markets.',
    experience: [
      'Partner at Anthill Ventures - Investing in and scaling high-growth startups',
      'Expert in consumer internet and D2C business models',
      'Specializes in urban technology and consumer brands',
      'Experienced in growth-stage investments'
    ],
    education: [
      'Master\'s in Business Administration',
      'Bachelor\'s in Engineering or related field',
      'Continuous learning in venture capital and private equity'
    ],
    achievements: [
      'Led investments in multiple successful startups',
      'Helped portfolio companies scale operations and raise follow-on funding',
      'Recognized as a thought leader in the venture capital space',
      'Featured in various startup and investment forums'
    ]
  },
  {
    id: '53',
    name: 'Samit Khanna',
    company: 'Signal Ventures',
    role: 'CoFounder & Partner',
    expertise: 'Growth, Fundraising',
    linkedin: 'https://www.linkedin.com/in/samitkhanna',
    bio: 'Samit Khanna is the CoFounder and Partner at Signal Ventures, where he focuses on identifying and supporting high-potential startups. With a strong background in growth strategies and fundraising, he helps entrepreneurs scale their businesses and navigate the challenges of building successful, sustainable companies in competitive markets.',
    experience: [
      'CoFounder & Partner at Signal Ventures - Investing in and supporting startups',
      'Expert in growth strategies and scaling businesses',
      'Specializes in fundraising and investor relations',
      'Experienced in both early and growth-stage investments'
    ],
    education: [
      'Master\'s in Business Administration',
      'Bachelor\'s in Engineering or related field',
      'Continuous learning in venture capital and private equity'
    ],
    achievements: [
      'Successfully led investments in multiple high-growth startups',
      'Helped portfolio companies raise significant follow-on funding',
      'Recognized as a key player in the venture capital ecosystem',
      'Featured in various startup and investment forums'
    ]
  },
  {
    id: '54',
    name: 'Sandeep Balaji',
    company: 'IncrementumX',
    role: 'CEO',
    expertise: 'Software, B2B, IOT, AI, AR-VR, D2C',
    linkedin: 'https://www.linkedin.com/in/sandeepbalaji/',
    bio: 'Sandeep Balaji is the CEO of IncrementumX, a technology company at the forefront of digital transformation. With expertise spanning across AI, IoT, and AR/VR, he leads a team that builds innovative solutions for businesses looking to leverage cutting-edge technologies to solve complex problems and create exceptional customer experiences.',
    experience: [
      'CEO at IncrementumX - Leading digital transformation initiatives',
      'Expert in AI, IoT, and immersive technologies',
      'Specializes in enterprise software solutions',
      'Experienced in both B2B and D2C technology products'
    ],
    education: [
      'Bachelor\'s in Computer Science or related field',
      'Advanced certifications in AI and emerging technologies',
      'Continuous learning in technology and business strategy'
    ],
    achievements: [
      'Successfully led multiple digital transformation initiatives',
      'Built innovative products using AI and IoT technologies',
      'Recognized as a thought leader in emerging technologies',
      'Featured in various technology and business publications'
    ]
  },
  {
    id: '55',
    name: 'Shreya Bhatnagar',
    company: 'Anthill Ventures',
    role: 'Principal',
    expertise: 'Fundraising, Urban Tech, Consumer Brands',
    linkedin: 'https://www.linkedin.com/in/shbhatnagar90',
    bio: 'Shreya Bhatnagar is a Principal at Anthill Ventures, where she focuses on identifying and supporting innovative startups in urban technology and consumer brands. With a keen eye for market trends and investment opportunities, she plays a crucial role in helping portfolio companies scale and succeed in competitive markets.',
    experience: [
      'Principal at Anthill Ventures - Investing in and supporting high-growth startups',
      'Expert in urban technology and consumer brands',
      'Specializes in fundraising and growth strategies',
      'Experienced in market analysis and due diligence'
    ],
    education: [
      'Master\'s in Business Administration',
      'Bachelor\'s in Business or related field',
      'Continuous learning in venture capital and private equity'
    ],
    achievements: [
      'Played a key role in multiple successful investments',
      'Helped portfolio companies refine their business models and scale operations',
      'Recognized as a rising star in the venture capital ecosystem',
      'Active participant in startup and investment forums'
    ]
  },
  {
    id: '56',
    name: 'Karan Punjabi',
    company: 'Exponent Energy',
    role: 'Chief Financial Officer',
    expertise: 'Finance, Fundraising',
    linkedin: 'https://linkedin.com/in/karan-punjabi-74493526',
    bio: 'Karan Punjabi serves as the Chief Financial Officer at Exponent Energy, a company revolutionizing energy storage solutions. With extensive experience in finance and fundraising, he plays a pivotal role in shaping the company\'s financial strategy and securing the capital needed to drive innovation in the clean energy sector.',
    experience: [
      'CFO at Exponent Energy - Leading financial strategy and fundraising',
      'Expert in corporate finance and capital raising',
      'Specializes in financial planning and analysis',
      'Experienced in managing investor relations'
    ],
    education: [
      'Chartered Accountant (CA)',
      'Bachelor\'s in Commerce or related field',
      'Continuous learning in finance and clean energy'
    ],
    achievements: [
      'Successfully led multiple funding rounds for Exponent Energy',
      'Established strong financial systems and controls',
      'Recognized as a key leader in the clean energy finance space',
      'Featured in financial and energy industry publications'
    ]
  },
  {
    id: '57',
    name: 'Kulmani Rana',
    company: 'Fibonacci X',
    role: 'CoFounder',
    expertise: 'D2C, EdTech, Fundraising, GenZ & Alpha, Bharat Fundraising',
    linkedin: 'https://www.linkedin.com/in/kulmanirana',
    bio: 'Kulmani Rana is the CoFounder of Fibonacci X, a company focused on building and scaling D2C and EdTech brands for the next generation. With a deep understanding of Gen Z and Alpha consumers, he helps brands connect with younger audiences and secure funding to scale their operations, particularly in the Indian market.',
    experience: [
      'CoFounder at Fibonacci X - Building next-gen consumer brands',
      'Expert in D2C business models and EdTech',
      'Specializes in fundraising for Bharat-focused startups',
      'Experienced in youth marketing and engagement strategies'
    ],
    education: [
      'Bachelor\'s in Business or related field',
      'Continuous learning in digital marketing and consumer behavior',
      'Specialized training in education technology'
    ],
    achievements: [
      'Successfully launched multiple D2C brands',
      'Helped numerous startups raise funding',
      'Recognized as an expert in youth-focused marketing',
      'Featured in various business and startup publications'
    ]
  },
  {
    id: '58',
    name: 'Madhusmita Das',
    company: 'Leo Capital',
    role: 'Vice President',
    expertise: 'Fundraising',
    linkedin: 'https://www.linkedin.com/in/madhusmitadas',
    bio: 'Madhusmita Das is a Vice President at Leo Capital, a leading venture capital firm that invests in early-stage technology companies. With extensive experience in fundraising and startup investments, she plays a key role in identifying promising startups and helping them secure the capital they need to grow and scale their businesses.',
    experience: [
      'Vice President at Leo Capital - Leading investment decisions and portfolio management',
      'Expert in early-stage startup financing',
      'Specializes in technology investments',
      'Experienced in cross-border funding strategies'
    ],
    education: [
      'Master\'s in Business Administration',
      'Bachelor\'s in Engineering or related field',
      'Continuous learning in venture capital and private equity'
    ],
    achievements: [
      'Led investments in multiple successful startups',
      'Helped portfolio companies raise significant follow-on funding',
      'Recognized as a key player in the venture capital ecosystem',
      'Featured in various startup and investment forums'
    ]
  },
  {
    id: '59',
    name: 'Manish Johari',
    company: 'Lead Angels & Maple Capital Advisors',
    role: 'Partner',
    expertise: 'Fundraising, PE, Deep Tech',
    linkedin: 'https://www.linkedin.com/in/johari',
    bio: 'Manish Johari is a Partner at Lead Angels and Maple Capital Advisors, where he focuses on identifying and supporting innovative startups in deep tech and other high-growth sectors. With extensive experience in private equity and fundraising, he helps entrepreneurs navigate the complex world of startup financing and growth.',
    experience: [
      'Partner at Lead Angels & Maple Capital Advisors - Investing in and supporting startups',
      'Expert in private equity and venture capital',
      'Specializes in deep tech investments',
      'Experienced in cross-border transactions'
    ],
    education: [
      'Master\'s in Business Administration',
      'Bachelor\'s in Engineering or related field',
      'Continuous learning in investment strategies and emerging technologies'
    ],
    achievements: [
      'Led investments in multiple successful deep tech startups',
      'Helped portfolio companies secure significant funding',
      'Recognized as a thought leader in the investment community',
      'Featured in various financial and technology publications'
    ]
  },
  {
    id: '60',
    name: 'Mayuresh Raut',
    company: 'Seafund Ventures',
    role: 'CoFounder',
    expertise: 'Fundraising, Finance, Deeptech, Fintech, SaaS',
    linkedin: 'https://www.linkedin.com/in/mayureshrraut',
    bio: 'Mayuresh Raut is the CoFounder of Seafund Ventures, a venture capital firm that invests in early-stage technology companies. With expertise spanning deep tech, fintech, and SaaS, he is passionate about supporting innovative startups that are solving complex problems through technology and helping them scale their businesses.',
    experience: [
      'CoFounder at Seafund Ventures - Investing in early-stage technology startups',
      'Expert in fintech and deep tech investments',
      'Specializes in SaaS business models and scaling',
      'Experienced in corporate finance and fundraising'
    ],
    education: [
      'Master\'s in Business Administration',
      'Bachelor\'s in Engineering or related field',
      'Continuous learning in venture capital and emerging technologies'
    ],
    achievements: [
      'Co-founded and scaled Seafund Ventures into a leading early-stage VC firm',
      'Invested in multiple successful technology startups',
      'Recognized as a thought leader in fintech and deep tech',
      'Featured in various startup and investment publications'
    ]
  },
  {
    id: '61',
    name: 'Murali Krishna',
    company: 'Inflexor',
    role: 'Principal',
    expertise: 'Fundraising',
    linkedin: 'https://www.linkedin.com/in/murali-krishna-gunturu-5226877b',
    bio: 'Murali Krishna serves as a Principal at Inflexor Ventures, a technology-focused venture capital firm. With a strong background in fundraising and startup investments, he plays a crucial role in identifying promising technology startups and helping them secure the necessary funding to scale their operations and achieve their growth objectives.',
    experience: [
      'Principal at Inflexor - Leading technology investments and portfolio management',
      'Expert in startup financing and growth strategies',
      'Specializes in deep tech and enterprise software',
      'Experienced in cross-border investment opportunities'
    ],
    education: [
      'Master\'s in Business Administration',
      'Bachelor\'s in Engineering or related field',
      'Continuous learning in venture capital and technology trends'
    ],
    achievements: [
      'Played a key role in multiple successful startup investments',
      'Helped portfolio companies refine their fundraising strategies',
      'Recognized as a rising star in the venture capital community',
      'Featured in various startup and investment forums'
    ]
  },
  {
    id: '62',
    name: 'Parinita Hendre',
    company: 'BoldCare',
    role: 'Business Head',
    expertise: 'Healthcare, Business Development',
    linkedin: 'https://www.linkedin.com/in/parinitahendre',
    bio: 'Parinita Hendre serves as the Business Head at BoldCare, a company dedicated to transforming healthcare delivery. With extensive experience in the healthcare sector, she leads business development initiatives and drives strategic partnerships to expand access to quality healthcare services and improve patient outcomes.',
    experience: [
      'Business Head at BoldCare - Leading healthcare innovation and growth',
      'Expert in healthcare business development and strategy',
      'Specializes in healthcare operations and service delivery',
      'Experienced in building healthcare partnerships'
    ],
    education: [
      'Master\'s in Healthcare Administration or related field',
      'Bachelor\'s in Life Sciences or related discipline',
      'Continuous learning in healthcare management and innovation'
    ],
    achievements: [
      'Successfully expanded healthcare services to new markets',
      'Established key strategic partnerships in the healthcare sector',
      'Recognized for contributions to healthcare innovation',
      'Featured in healthcare and business publications'
    ]
  },
  {
    id: '63',
    name: 'Praveen MN',
    company: 'CBRE',
    role: 'Director',
    expertise: 'Real Estate, GTM',
    linkedin: 'https://linkedin.com/in/praveen-mn-pgdm-mba-jagsom-ma-~mphil-christ-isb-4565947',
    bio: 'Praveen MN is a Director at CBRE, the world\'s largest commercial real estate services and investment firm. With extensive experience in real estate strategy and go-to-market execution, he helps businesses optimize their real estate portfolios and make informed decisions about property investments and facility management.',
    experience: [
      'Director at CBRE - Leading real estate strategy and solutions',
      'Expert in commercial real estate and facility management',
      'Specializes in go-to-market strategies for real estate services',
      'Experienced in corporate real estate advisory'
    ],
    education: [
      'Master\'s in Business Administration (MBA)',
      'Post Graduate Diploma in Management (PGDM)',
      'Master of Philosophy (MPhil)',
      'Bachelor\'s degree in relevant field',
      'Continuous learning in real estate and business strategy'
    ],
    achievements: [
      'Successfully advised numerous clients on real estate strategy',
      'Led high-value real estate transactions and portfolio optimizations',
      'Recognized as a thought leader in commercial real estate',
      'Featured in real estate and business publications'
    ]
  },
  {
    id: '64',
    name: 'Praveen Prakash',
    company: 'ITCMAARS',
    role: 'Head of Product',
    expertise: 'Product Management',
    linkedin: 'https://www.linkedin.com/in/praveenprakash10/',
    bio: 'Praveen Prakash serves as the Head of Product at ITCMAARS, where he leads product strategy and development initiatives. With a strong background in product management and technology, he is passionate about building user-centric products that solve real-world problems and deliver exceptional user experiences.',
    experience: [
      'Head of Product at ITCMAARS - Leading product strategy and development',
      'Expert in product lifecycle management',
      'Specializes in agile product development methodologies',
      'Experienced in building and scaling technology products'
    ],
    education: [
      'Bachelor\'s in Computer Science or related field',
      'Product Management certifications',
      'Continuous learning in technology and product innovation'
    ],
    achievements: [
      'Successfully launched multiple successful products',
      'Led cross-functional product teams to deliver innovative solutions',
      'Recognized for contributions to product strategy and execution',
      'Featured in product management and technology forums'
    ]
  },
  {
    id: '65',
    name: 'Rahul Roy',
    company: 'AristaVault',
    role: 'VP – Marketing',
    expertise: 'B2C Marketing, Travel',
    linkedin: 'https://www.linkedin.com/in/rahul-roy-hok',
    bio: 'Rahul Roy is the Vice President of Marketing at AristaVault, where he leads all marketing initiatives and brand strategy. With extensive experience in B2C marketing, particularly in the travel sector, he specializes in creating impactful marketing campaigns that drive customer acquisition and brand loyalty in competitive markets.',
    experience: [
      'VP of Marketing at AristaVault - Leading marketing strategy and execution',
      'Expert in B2C marketing and brand management',
      'Specializes in travel industry marketing',
      'Experienced in digital and performance marketing'
    ],
    education: [
      'Master\'s in Business Administration (Marketing)',
      'Bachelor\'s in Business or related field',
      'Continuous learning in digital marketing and consumer behavior'
    ],
    achievements: [
      'Successfully launched multiple high-impact marketing campaigns',
      'Significantly increased brand awareness and customer acquisition',
      'Recognized as a marketing leader in the travel industry',
      'Featured in marketing and business publications'
    ]
  },
  {
    id: '66',
    name: 'Ashna Gupta',
    company: 'Wennovate Tech',
    role: 'Director and Founder',
    expertise: 'UK, Fintech, GTM',
    linkedin: 'https://www.linkedin.com/in/ashna-gupta23/',
    bio: 'Ashna Gupta is the Director and Founder of Wennovate Tech, a company specializing in fintech innovation and go-to-market strategies. With a strong focus on the UK market, she helps fintech startups navigate regulatory landscapes and scale their operations through strategic planning and execution.',
    experience: [
      'Founder & Director at Wennovate Tech - Leading fintech innovation',
      'Expert in UK fintech regulations and compliance',
      'Specializes in go-to-market strategies for financial technology',
      'Experienced in scaling fintech startups'
    ],
    education: [
      'Master\'s in Business Administration or related field',
      'Bachelor\'s in Finance, Technology, or related discipline',
      'Continuous learning in fintech and financial regulations'
    ],
    achievements: [
      'Successfully launched and scaled multiple fintech solutions',
      'Established strong networks in the UK fintech ecosystem',
      'Recognized as a leader in fintech innovation',
      'Featured in fintech and business publications'
    ]
  },
  {
    id: '67',
    name: 'Atul Aggarwal',
    company: 'Reebok',
    role: 'Sales Head',
    expertise: 'Retail, Offline Distribution, Sales, GTM',
    linkedin: 'https://www.linkedin.com/in/atul-aggarwal-8592a313',
    bio: 'Atul Aggarwal serves as the Sales Head at Reebok, where he leads the company\'s sales strategy and execution across retail channels. With extensive experience in retail and offline distribution, he specializes in building high-performing sales teams and developing go-to-market strategies that drive revenue growth and market expansion.',
    experience: [
      'Sales Head at Reebok - Leading sales strategy and execution',
      'Expert in retail sales and distribution management',
      'Specializes in offline sales channel development',
      'Experienced in go-to-market planning and execution'
    ],
    education: [
      'Master\'s in Business Administration (Sales/Marketing)',
      'Bachelor\'s in Business or related field',
      'Continuous learning in retail management and sales strategies'
    ],
    achievements: [
      'Successfully expanded retail presence in multiple markets',
      'Led high-performing sales teams to exceed revenue targets',
      'Recognized for contributions to sales excellence in retail',
      'Featured in retail and business publications'
    ]
  },
  {
    id: '68',
    name: 'Balaram',
    company: 'Yogabar',
    role: 'CSO',
    expertise: 'Retail, FMCG, B2C Marketing',
    linkedin: 'https://www.linkedin.com/in/balaram-bhattacharjee/',
    bio: 'Balaram serves as the Chief Strategy Officer (CSO) at Yogabar, a leading health food brand in India. With extensive experience in the FMCG sector, he specializes in retail strategy, brand building, and B2C marketing, helping the company establish itself as a trusted name in the health and wellness space.',
    experience: [
      'Chief Strategy Officer at Yogabar - Leading business strategy and growth',
      'Expert in FMCG and retail strategy',
      'Specializes in B2C marketing and brand development',
      'Experienced in scaling consumer brands'
    ],
    education: [
      'Master\'s in Business Administration (Strategy/Marketing)',
      'Bachelor\'s in Business or related field',
      'Continuous learning in consumer behavior and retail trends'
    ],
    achievements: [
      'Played a key role in scaling Yogabar\'s market presence',
      'Developed successful retail and distribution strategies',
      'Recognized for contributions to brand building in FMCG',
      'Featured in business and retail publications'
    ]
  },
  {
    id: '69',
    name: 'Bhushan Nadoni',
    company: 'Reliance Consumer Products',
    role: 'Category Lead',
    expertise: 'Offline, Online GTM, Strategy, Pricing',
    linkedin: 'https://www.linkedin.com/in/bhushan-nadoni/'
  },
  {
    id: '70',
    name: 'Chaitra Suresha',
    company: 'Rakuten India',
    role: 'Senior Product Manager',
    expertise: 'Product, Ecommerce, CRM, Regulatory Tech',
    linkedin: 'https://www.linkedin.com/in/chaitra-suresha'
  },
  {
    id: '71',
    name: 'Chand Tiwari',
    company: 'Happilo',
    role: 'Head of Ecommerce',
    expertise: 'Ecommerce, D2C',
    linkedin: 'https://www.linkedin.com/in/chandtiwari'
  },
  {
    id: '72',
    name: 'Daanish Suhail',
    company: 'Playo',
    role: 'CoFounder',
    expertise: 'Product, B2C GTM, Marketing',
    linkedin: 'https://www.linkedin.com/in/daanish-suhail/'
  },
  {
    id: '73',
    name: 'Dhruvin Mehta',
    company: 'Pravega Ventures',
    role: 'Investments',
    expertise: 'Enterprise Tech, Fintech, Embedded Systems, Vertical Software, EV Robotics',
    linkedin: 'https://www.linkedin.com/in/dhruvinm/'
  },
  {
    id: '74',
    name: 'Divya Bajaj',
    company: 'London and Partners',
    role: 'Vice President',
    expertise: 'International Business Development',
    linkedin: 'https://www.linkedin.com/in/divya-bajaj-007/'
  },
  {
    id: '75',
    name: 'Harshit Thakkar',
    company: 'Qube Cinema Inc',
    role: 'Director – Product',
    expertise: 'Product, Cinema',
    linkedin: 'https://www.linkedin.com/in/harshitthakkar/'
  }
];

// Function to generate placeholder data for advisors without full details
export function generateAdvisorPlaceholder(advisor: BasicAdvisor): Advisor {
  return {
    ...advisor,
    bio: `${advisor.name} is an experienced professional at ${advisor.company} with expertise in ${advisor.expertise}.`,
    experience: [
      `${advisor.role} at ${advisor.company}`,
      'Extensive experience in their field',
      'Proven track record of success'
    ],
    education: [
      'Relevant degree or certification',
      'Additional education or training'
    ]
  };
}

// Function to get advisor by ID
export function getAdvisorById(id: string): Advisor | undefined {
  return advisors.find(a => a.id === id);
}

// Function to get all advisor IDs for static generation
export function getAllAdvisorIds() {
  return advisors.map(advisor => ({
    id: advisor.id,
  }));
}
