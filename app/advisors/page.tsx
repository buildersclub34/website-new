'use client';

import { useState, useMemo, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import { User, Linkedin, ArrowRight, ChevronRight, ChevronLeft, Search } from 'lucide-react';
import Link from 'next/link';
import NeoPopButton from '../../components/ui/NeoPopButton';
import ClientLayout from '../ClientLayout';

// Pagination settings
const ITEMS_PER_PAGE = 9;

interface Advisor {
  id: string;
  name: string;
  company: string;
  role: string;
  expertise: string;
  linkedin: string;
  website?: string;
  companyLogo?: string;
  image?: string;
}

const advisors: Advisor[] = [
  {
    id: '1',
    name: 'Aakash Sinha',
    company: 'Clazar',
    role: 'Founding Member',
    expertise: 'GTM – US Market, B2B Marketing',
    linkedin: 'https://www.linkedin.com/in/aakash-sinha-34331a66/',
    website: 'https://clazar.io',
    companyLogo: 'https://logo.clearbit.com/clazar.io'
  },
  {
    id: '2',
    name: 'Akshay Pohekar',
    company: 'Swiggy',
    role: 'Growth',
    expertise: 'Growth Marketing',
    linkedin: 'https://www.linkedin.com/in/akshaypohekar/',
    website: 'https://swiggy.com',
    companyLogo: 'https://logo.clearbit.com/swiggy.com'
  },
  {
    id: '3',
    name: 'Amar Ummat',
    company: 'Recur',
    role: 'CoFounder',
    expertise: 'Debt Fundraise, D2C, Capital Stack Planning, GTM',
    linkedin: 'https://www.linkedin.com/in/amar-a-ummat-8092006b/',
    website: 'https://recurclub.com',
    companyLogo: 'https://logo.clearbit.com/recurclub.com'
  },
  {
    id: '4',
    name: 'Amit Jain',
    company: 'Bridgegate Advisory',
    role: 'Partner',
    expertise: 'Finance & Legal',
    linkedin: 'https://www.linkedin.com/in/itsamitsjain/',
    website: 'https://bridgegateadvisory.com',
    companyLogo: 'https://logo.clearbit.com/bridgegateadvisory.com'
  },
  {
    id: '5',
    name: 'Amit Kumar',
    company: 'Ah! Ventures',
    role: 'Cofunding Partner',
    expertise: 'Fundraising',
    linkedin: 'https://www.linkedin.com/in/amit-d-kumar-30436a10/',
    website: 'https://ahventures.in',
    companyLogo: 'https://logo.clearbit.com/ahventures.in'
  },
  {
    id: '6',
    name: 'Amit Misra',
    company: 'Dazeinfo',
    role: 'CoFounder',
    expertise: 'Fintech, D2C, SaaS, EV, Mobility, Data, Fundraising',
    linkedin: 'https://www.linkedin.com/in/amit6060/',
    website: 'https://dazeinfo.com',
    companyLogo: 'https://logo.clearbit.com/dazeinfo.com'
  },
  {
    id: '7',
    name: 'Aniket Bajpai',
    company: 'Limechat',
    role: 'CoFounder',
    expertise: 'D2C, Whatsapp Automation, B2C Marketing',
    linkedin: 'https://www.linkedin.com/in/aniket-bajpai/',
    website: 'https://limechat.ai',
    companyLogo: 'https://logo.clearbit.com/limechat.ai'
  },
  {
    id: '8',
    name: 'Ankita Bansal',
    company: 'Inkle',
    role: 'Product & Engineering',
    expertise: 'Tech, Product, Fintech, US GTM',
    linkedin: 'https://www.linkedin.com/in/ankita-bansal/',
    website: 'https://www.inklive.ai',
    companyLogo: 'https://logo.clearbit.com/inklive.ai'
  },
  {
    id: '9',
    name: 'Arjun Vaidya',
    company: 'V3 Ventures',
    role: 'CoFounder',
    expertise: 'Fundraising, D2C, Consumer Brands',
    linkedin: 'https://www.linkedin.com/in/arjunvaidya/',
    website: 'https://v3ventures.com',
    companyLogo: 'https://logo.clearbit.com/v3ventures.com'
  },
  {
    id: '10',
    name: 'Ashima Setia',
    company: 'Sorin Investments',
    role: 'Vice President',
    expertise: 'Investment, Fundraising',
    linkedin: 'https://www.linkedin.com/in/ashima-setia-37a3b444/',
    website: 'https://sorininvestments.com',
    companyLogo: 'https://logo.clearbit.com/sorininvestments.com'
  },
  {
    id: '11',
    name: 'Ashish Tulsian',
    company: 'Posist',
    role: 'CoFounder',
    expertise: 'Product, SaaS, GTM, US Market',
    linkedin: 'https://www.linkedin.com/in/ashishtulsian/',
    website: 'https://posist.com',
    companyLogo: 'https://logo.clearbit.com/posist.com'
  },
  {
    id: '12',
    name: 'Bhavik Vasa',
    company: 'GetVantage',
    role: 'Founder & CEO',
    expertise: 'Fintech, Lending, Fundraising',
    linkedin: 'https://www.linkedin.com/in/bhavikvasa/',
    website: 'https://getvantage.tech',
    companyLogo: 'https://logo.clearbit.com/getvantage.tech'
  },
  {
    id: '13',
    name: 'Bipin Preet Singh',
    company: 'MobiKwik',
    role: 'CoFounder',
    expertise: 'Fintech, Payments, Lending',
    linkedin: 'https://www.linkedin.com/in/bipinpreetsingh/',
    website: 'https://mobikwik.com',
    companyLogo: 'https://logo.clearbit.com/mobikwik.com'
  },
  {
    id: '14',
    name: 'Gaurav Munjal',
    company: 'Unacademy',
    role: 'CoFounder & CEO',
    expertise: 'EdTech, Growth, Fundraising',
    linkedin: 'https://www.linkedin.com/in/gauravmunjal1/',
    website: 'https://unacademy.com',
    companyLogo: 'https://logo.clearbit.com/unacademy.com'
  },
  {
    id: '15',
    name: 'Ghazal Alagh',
    company: 'Mamaearth',
    role: 'CoFounder',
    expertise: 'D2C, E-commerce, Brand Building',
    linkedin: 'https://www.linkedin.com/in/ghazalalagh/',
    website: 'https://mamaearth.in',
    companyLogo: 'https://logo.clearbit.com/mamaearth.in'
  },
  {
    id: '16',
    name: 'Harshil Mathur',
    company: 'Razorpay',
    role: 'CoFounder & CEO',
    expertise: 'Fintech, Payments, B2B SaaS',
    linkedin: 'https://www.linkedin.com/in/hm2000/',
    website: 'https://razorpay.com',
    companyLogo: 'https://logo.clearbit.com/razorpay.com'
  },
  {
    id: '17',
    name: 'Kabeer Biswas',
    company: 'Dunzo',
    role: 'CoFounder & CEO',
    expertise: 'Hyperlocal, Logistics, E-commerce',
    linkedin: 'https://www.linkedin.com/in/kabeer-biswas-7a2a4b1b/',
    website: 'https://dunzo.com',
    companyLogo: 'https://logo.clearbit.com/dunzo.com'
  },
  {
    id: '18',
    name: 'Kunal Bahl',
    company: 'Titan Capital',
    role: 'CoFounder',
    expertise: 'E-commerce, Investments, Startups',
    linkedin: 'https://www.linkedin.com/in/kunalbahl/',
    website: 'https://titan-capital.com',
    companyLogo: 'https://logo.clearbit.com/titan-capital.com'
  },
  {
    id: '19',
    name: 'Lalit Keshre',
    company: 'Groww',
    role: 'CoFounder & CEO',
    expertise: 'Fintech, Investment, Product',
    linkedin: 'https://www.linkedin.com/in/lalitkeshre/',
    website: 'https://groww.in',
    companyLogo: 'https://logo.clearbit.com/groww.in'
  },
  {
    id: '20',
    name: 'Nikhil Kamath',
    company: 'Zerodha',
    role: 'CoFounder',
    expertise: 'Fintech, Trading, Investments',
    linkedin: 'https://www.linkedin.com/in/nikhilkamathcio/',
    website: 'https://zerodha.com',
    companyLogo: 'https://logo.clearbit.com/zerodha.com'
  },
  {
    id: '21',
    name: 'Nithin Kamath',
    company: 'Zerodha',
    role: 'CoFounder & CEO',
    expertise: 'Fintech, Stock Trading, Zerodha',
    linkedin: 'https://www.linkedin.com/in/nithinkamath/',
    website: 'https://zerodha.com',
    companyLogo: 'https://logo.clearbit.com/zerodha.com'
  },
  {
    id: '22',
    name: 'Pranay Chulet',
    company: 'Quikr',
    role: 'Founder & CEO',
    expertise: 'Classifieds, Marketplaces',
    linkedin: 'https://www.linkedin.com/in/pranay-chulet-7a2a4b1b/',
    website: 'https://quikr.com',
    companyLogo: 'https://logo.clearbit.com/quikr.com'
  },
  {
    id: '23',
    name: 'Prateek Sharma',
    company: 'Zomato',
    role: 'Head of Growth',
    expertise: 'Growth, Marketing, Consumer Tech',
    linkedin: 'https://www.linkedin.com/in/prateek-sharma-0a9b0a1b/',
    website: 'https://zomato.com',
    companyLogo: 'https://logo.clearbit.com/zomato.com'
  },
  {
    id: '24',
    name: 'Rahul Dalmia',
    company: 'Aroa Ventures',
    role: 'Founder',
    expertise: 'Early Stage Investing, Fintech, SaaS',
    linkedin: 'https://www.linkedin.com/in/rahuldalmia/',
    website: 'https://aroa.vc',
    companyLogo: 'https://logo.clearbit.com/aroa.vc'
  },
  {
    id: '25',
    name: 'Rahul Garg',
    company: 'Moglix',
    role: 'Founder & CEO',
    expertise: 'B2B E-commerce, Manufacturing, Supply Chain',
    linkedin: 'https://www.linkedin.com/in/rahulgargmoglix/',
    website: 'https://moglix.com',
    companyLogo: 'https://logo.clearbit.com/moglix.com'
  },
  {
    id: '26',
    name: 'Rajesh Sawhney',
    company: 'GSF Accelerator',
    role: 'Founder',
    expertise: 'Startup Ecosystem, Investments',
    linkedin: 'https://www.linkedin.com/in/rajeshsawhney/',
    website: 'https://gsfaccelerator.com',
    companyLogo: 'https://logo.clearbit.com/gsfaccelerator.com'
  },
  {
    id: '25',
    name: 'Ritesh Malik',
    company: 'Innov8',
    role: 'Founder',
    expertise: 'Coworking, Real Estate, Startups',
    linkedin: 'https://www.linkedin.com/in/riteshmalik/',
    website: 'https://innov8.work',
    companyLogo: 'https://logo.clearbit.com/innov8.work'
  },
  {
    id: '26',
    name: 'Ritesh Agarwal',
    company: 'OYO',
    role: 'Founder & CEO',
    expertise: 'Hospitality, Real Estate, Growth',
    linkedin: 'https://www.linkedin.com/in/riteshagar/',
    website: 'https://oyorooms.com',
    companyLogo: 'https://logo.clearbit.com/oyorooms.com'
  },
  {
    id: '27',
    name: 'Sachin Bansal',
    company: 'Navii',
    role: 'CoFounder',
    expertise: 'E-commerce, Fintech, Investments',
    linkedin: 'https://www.linkedin.com/in/sachin-bansal-1a0b1a1/',
    website: 'https://navi.com',
    companyLogo: 'https://logo.clearbit.com/navi.com'
  },
  {
    id: '28',
    name: 'Sameer Mehta',
    company: 'Boat',
    role: 'CoFounder',
    expertise: 'Consumer Electronics, D2C',
    linkedin: 'https://www.linkedin.com/in/sameer-mehta-7a2a4b1b/',
    website: 'https://www.boat-lifestyle.com',
    companyLogo: 'https://logo.clearbit.com/boat-lifestyle.com'
  },
  {
    id: '29',
    name: 'Sanjeev Bikhchandani',
    company: 'Info Edge',
    role: 'Founder',
    expertise: 'Internet, Marketplaces, Investments',
    linkedin: 'https://www.linkedin.com/in/sanjeev-bikhchandani-7a2a4b1b/',
    website: 'https://www.infoedge.com',
    companyLogo: 'https://logo.clearbit.com/infoedge.com'
  },
  {
    id: '30',
    name: 'Sidharth Rao',
    company: 'Dentsu Webchutney',
    role: 'CoFounder',
    expertise: 'Digital Marketing, Advertising',
    linkedin: 'https://www.linkedin.com/in/sidharthrao/',
  },
  {
    id: '31',
    name: 'Sridhar Vembu',
    company: 'Zoho',
    role: 'Founder & CEO',
    expertise: 'SaaS, Enterprise Software',
    linkedin: 'https://www.linkedin.com/in/sridhar-vembu-7a2a4b1b/',
  },
  {
    id: '32',
    name: 'Suhail Sameer',
    company: 'BharatPe',
    role: 'CEO',
    expertise: 'Fintech, Payments, Growth',
    linkedin: 'https://www.linkedin.com/in/suhailsameer/',
  },
  {
    id: '33',
    name: 'Sumit Gupta',
    company: 'CoinDCX',
    role: 'CoFounder & CEO',
    expertise: 'Crypto, Blockchain, Fintech',
    linkedin: 'https://www.linkedin.com/in/sumitg1/',
  },
  {
    id: '34',
    name: 'Sushil Kumar',
    company: 'Rapido',
    role: 'CoFounder',
    expertise: 'Mobility, Hyperlocal, Logistics',
    linkedin: 'https://www.linkedin.com/in/sushil-kumar-7a2a4b1b/',
  },
  {
    id: '35',
    name: 'Varun Alagh',
    company: 'Mamaearth',
    role: 'CoFounder',
    expertise: 'D2C, E-commerce, Brand Building',
    linkedin: 'https://www.linkedin.com/in/varunalagh/',
  },
  {
    id: '36',
    name: 'Vasanth Kamath',
    company: 'Smallcase',
    role: 'Founder & CEO',
    expertise: 'Fintech, Investment, Stock Market',
    linkedin: 'https://www.linkedin.com/in/vasanthkamath/',
  },
  {
    id: '37',
    name: 'Vidit Aatrey',
    company: 'Meesho',
    role: 'Founder & CEO',
    expertise: 'Social Commerce, E-commerce',
    linkedin: 'https://www.linkedin.com/in/viditaatrey/',
  },
  {
    id: '38',
    name: 'Vijay Shekhar Sharma',
    company: 'Paytm',
    role: 'Founder & CEO',
    expertise: 'Fintech, Payments, Digital Banking',
    linkedin: 'https://www.linkedin.com/in/vijayshekhar/',
  },
  {
    id: '39',
    name: 'Vineet Agarwal',
    company: 'NoBroker',
    role: 'CoFounder',
    expertise: 'Proptech, Real Estate',
    linkedin: 'https://www.linkedin.com/in/vineetnbroker/',
  },
  {
    id: '40',
    name: 'Vishal Gondal',
    company: 'GOQii',
    role: 'Founder & CEO',
    expertise: 'Healthtech, Wearables, Gaming',
    linkedin: 'https://www.linkedin.com/in/vishalgondal/',
  },
  {
    id: '41',
    name: 'Subhash Chaudhari',
    company: 'Dukaan',
    role: 'CoFounder',
    expertise: 'AI, D2C, Tech',
    linkedin: 'https://www.linkedin.com/in/subhashchy/',
  },
  {
    id: '42',
    name: 'Vaibhav Jain',
    company: 'Google',
    role: 'VC & Startup Partnerships (20%)',
    expertise: 'Venture Capital, Startup Partnerships',
    linkedin: 'https://www.linkedin.com/in/vaibhavj/',
  },
  {
    id: '43',
    name: 'Vinamra Agarwal',
    company: 'Brand Hero',
    role: 'CoFounder',
    expertise: 'UI/UX, No-Code Development',
    linkedin: 'https://www.linkedin.com/in/thevinamra/',
  },
  {
    id: '44',
    name: 'Vishal Lodha',
    company: 'InMobi',
    role: 'Lead – Accounts',
    expertise: 'Ad Tech, US & Europe GTM, Performance Marketing, Media Spends',
    linkedin: 'http://linkedin.com/in/vishal-lodha-ab83b97b',
  },
  {
    id: '45',
    name: 'Vishwas Shanbhag',
    company: 'VerSe Innovation',
    role: 'Head – Revenue Strategy',
    expertise: 'Content B2C Marketing, Sales, Adtech',
    linkedin: 'https://www.linkedin.com/in/vishwas-shanbhag/',
  },
  {
    id: '46',
    name: 'Rahul Varma',
    company: 'Unschool',
    role: 'CoFounder',
    expertise: 'EdTech, Operations, B2B, B2C GTM Growth',
    linkedin: 'https://www.linkedin.com/in/rahul-varma-g/',
  },
  {
    id: '47',
    name: 'Rajiv Indimath',
    company: 'Stealth',
    role: 'Founder',
    expertise: 'Enterprise, SaaS, Automotive, Deeptech, Fintech, Insurence Tech, Industries 5.0, Web 3.0, Healthcare',
    linkedin: 'https://www.linkedin.com/in/rajiv-indimath-2697074/',
  },
  {
    id: '48',
    name: 'Ravi Teja Gupta',
    company: 'Guptajiinvests',
    role: 'Founder',
    expertise: 'Fundraising',
    linkedin: 'https://www.linkedin.com/in/ravitejagupta',
  },
  {
    id: '49',
    name: 'Rishikesh S R',
    company: 'Rapido',
    role: 'CoFounder',
    expertise: 'Consumer Tech, Logistics, D2C, Travel',
    linkedin: 'http://linkedin.com/in/rishikeshsr',
  },
  {
    id: '50',
    name: 'Rohit Madan',
    company: 'IncBuddy',
    role: 'Head of Growth',
    expertise: 'B2B Sales, Marketing, Growth, Travel',
    linkedin: 'https://www.linkedin.com/in/rohitmadan-123',
  },
  {
    id: '51',
    name: 'Sai Abhinay Chepuri',
    company: 'T-Hub',
    role: 'Startup Innovation',
    expertise: 'Fundraising',
    linkedin: 'https://www.linkedin.com/in/saiabhinaychepuri',
  },
  {
    id: '52',
    name: 'Sailesh Sigatapu',
    company: 'Anthill Ventures',
    role: 'Partner',
    expertise: 'Fundraising, D2C, Consumer Brands, Urbentech',
    linkedin: 'https://www.linkedin.com/in/saileshs',
  },
  {
    id: '53',
    name: 'Samit Khanna',
    company: 'Signal Ventures',
    role: 'CoFounder & Partner',
    expertise: 'Growth, Fundraising',
    linkedin: 'https://www.linkedin.com/in/samitkhanna',
  },
  {
    id: '54',
    name: 'Sandeep Balaji',
    company: 'IncrementumX',
    role: 'CEO',
    expertise: 'Software, B2B, IOT, AI, AR-VR, D2C',
    linkedin: 'https://www.linkedin.com/in/sandeepbalaji/',
  },
  {
    id: '55',
    name: 'Shreya Bhatnagar',
    company: 'Anthill Ventures',
    role: 'Principal',
    expertise: 'Fundraising, Urban Tech, Consumer Brands',
    linkedin: 'https://www.linkedin.com/in/shbhatnagar90',
  },
  {
    id: '56',
    name: 'Karan Punjabi',
    company: 'Exponent Energy',
    role: 'Chief Financial Officer',
    expertise: 'Finance, Fundraising',
    linkedin: 'https://linkedin.com/in/karan-punjabi-74493526',
  },
  {
    id: '57',
    name: 'Kulmani Rana',
    company: 'Fibonacci X',
    role: 'CoFounder',
    expertise: 'D2C, EdTech, Fundraising, GenZ & Alpha, Bharat Fundraising',
    linkedin: 'https://www.linkedin.com/in/kulmanirana',
  },
  {
    id: '58',
    name: 'Madhusmita Das',
    company: 'Leo Capital',
    role: 'Vice President',
    expertise: 'Fundraising',
    linkedin: 'https://www.linkedin.com/in/madhusmitadas',
  },
  {
    id: '59',
    name: 'Manish Johari',
    company: 'Lead Angels & Maple Capital Advisors',
    role: 'Partner',
    expertise: 'Fundraising, PE, Deep Tech',
    linkedin: 'https://www.linkedin.com/in/johari',
  },
  {
    id: '60',
    name: 'Mayuresh Raut',
    company: 'Seafund Ventures',
    role: 'CoFounder',
    expertise: 'Fundraising, Finance, Deeptech, Fintech, SaaS',
    linkedin: 'https://www.linkedin.com/in/mayureshrraut',
  },
  {
    id: '61',
    name: 'Murali Krishna',
    company: 'Inflexor',
    role: 'Principal',
    expertise: 'Fundraising',
    linkedin: 'https://www.linkedin.com/in/murali-krishna-gunturu-5226877b',
  },
  {
    id: '62',
    name: 'Parinita Hendre',
    company: 'BoldCare',
    role: 'Business Head',
    expertise: 'Healthcare, Business Development',
    linkedin: 'https://www.linkedin.com/in/parinitahendre',
  },
  {
    id: '63',
    name: 'Praveen MN',
    company: 'CBRE',
    role: 'Director',
    expertise: 'Real Estate, GTM',
    linkedin: 'https://linkedin.com/in/praveen-mn-pgdm-mba-jagsom-ma-~mphil-christ-isb-4565947',
  },
  {
    id: '64',
    name: 'Praveen Prakash',
    company: 'ITCMAARS',
    role: 'Head of Product',
    expertise: 'Product Management',
    linkedin: 'https://www.linkedin.com/in/praveenprakash10/',
  },
  {
    id: '65',
    name: 'Rahul Roy',
    company: 'AristaVault',
    role: 'VP – Marketing',
    expertise: 'B2C Marketing, Travel',
    linkedin: 'https://www.linkedin.com/in/rahul-roy-hok',
  },
  {
    id: '66',
    name: 'Ashna Gupta',
    company: 'Wennovate Tech',
    role: 'Director and Founder',
    expertise: 'UK, Fintech, GTM',
    linkedin: 'https://www.linkedin.com/in/ashna-gupta23/',
  },
  {
    id: '67',
    name: 'Atul Aggarwal',
    company: 'Reebok',
    role: 'Sales Head',
    expertise: 'Retail, Offline Distribution, Sales, GTM',
    linkedin: 'https://www.linkedin.com/in/atul-aggarwal-8592a313',
  },
  {
    id: '68',
    name: 'Balaram',
    company: 'Yogabar',
    role: 'CSO',
    expertise: 'Retail, FMCG, B2C Marketing',
    linkedin: 'https://www.linkedin.com/in/balaram-bhattacharjee/',
  },
  {
    id: '69',
    name: 'Bhushan Nadoni',
    company: 'Reliance Consumer Products',
    role: 'Category Lead',
    expertise: 'Offline, Online GTM, Strategy, Pricing',
    linkedin: 'https://www.linkedin.com/in/bhushan-nadoni/',
  },
  {
    id: '70',
    name: 'Chaitra Suresha',
    company: 'Rakuten India',
    role: 'Senior Product Manager',
    expertise: 'Product, Ecommerce, CRM, Regulatory Tech',
    linkedin: 'https://www.linkedin.com/in/chaitra-suresha',
  },
  {
    id: '71',
    name: 'Chand Tiwari',
    company: 'Happilo',
    role: 'Head of Ecommerce',
    expertise: 'Ecommerce, D2C',
    linkedin: 'https://www.linkedin.com/in/chandtiwari',
  },
  {
    id: '72',
    name: 'Daanish Suhail',
    company: 'Playo',
    role: 'CoFounder',
    expertise: 'Product, B2C GTM, Marketing',
    linkedin: 'https://www.linkedin.com/in/daanish-suhail/',
  },
  {
    id: '73',
    name: 'Dhruvin Mehta',
    company: 'Pravega Ventures',
    role: 'Investments',
    expertise: 'Enterprise Tech, Fintech, Embedded Systems, Vertical Software, EV Robotics',
    linkedin: 'https://www.linkedin.com/in/dhruvinm/',
  },
  {
    id: '74',
    name: 'Divya Bajaj',
    company: 'London and Partners',
    role: 'Vice President',
    expertise: 'International Business Development',
    linkedin: 'https://www.linkedin.com/in/divya-bajaj-007/',
  },
  {
    id: '75',
    name: 'Harshit Thakkar',
    company: 'Qube Cinema Inc',
    role: 'Director – Product',
    expertise: 'Product, CinemaTech, Fintech, Product Strategy',
    linkedin: 'https://www.linkedin.com/in/hthakkar/',
  }
];

export default function AdvisorsPage() {
  // State initialization
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoized values and derived state
  const expertises = useMemo(() => {
    const allExpertises = new Set<string>();
    advisors.forEach(advisor => {
      advisor.expertise.split(',').forEach(exp => allExpertises.add(exp.trim().toLowerCase()));
    });
    return Array.from(allExpertises).sort();
  }, []);

  // Filter and paginate advisors
  const { paginatedAdvisors, totalPages } = useMemo(() => {
    if (isLoading || error) return { paginatedAdvisors: [], totalPages: 0 };
    
    const filtered = advisors.filter(advisor => {
      const matchesSearch = 
        advisor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        advisor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        advisor.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        advisor.expertise.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesExpertise = 
        selectedExpertise === 'all' || 
        advisor.expertise.toLowerCase().includes(selectedExpertise);
      
      return matchesSearch && matchesExpertise;
    });

    const total = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const pageStartIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginated = filtered.slice(pageStartIndex, pageStartIndex + ITEMS_PER_PAGE);
    
    return { paginatedAdvisors: paginated, totalPages: total };
  }, [searchTerm, selectedExpertise, currentPage, isLoading, error]);

  // Side effects
  useEffect(() => {
    // Initialize client-side state
    setIsClient(true);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Check for data loading errors
      if (advisors.length === 0) {
        setError('Failed to load advisors. Please try again later.');
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll and page reset effects
  useEffect(() => {
    if (!isLoading && !error) {
      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Reset to first page when filters change
      if (searchTerm || selectedExpertise !== 'all') {
        setCurrentPage(1);
      }
    }
  }, [searchTerm, selectedExpertise, currentPage, isLoading, error]);


  // Show skeleton loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="h-12 bg-gray-800 rounded-full w-1/3 mx-auto mb-6"></div>
            <div className="h-6 bg-gray-800 rounded-full w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-800 rounded-full w-1/4 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-gray-900/50 rounded-xl p-6 border-2 border-gray-800 animate-pulse">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-800"></div>
                <div className="h-6 bg-gray-800 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-800 rounded w-1/2 mx-auto mb-4"></div>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <div className="h-6 bg-gray-800 rounded-full px-3 py-1 w-16"></div>
                  <div className="h-6 bg-gray-800 rounded-full px-3 py-1 w-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-red-900/30 border border-red-800 rounded-xl p-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }


  // Generate page numbers for pagination
  const getPageNumbers = (): Array<number | '...'> => {
    const pageNumbers: Array<number | '...'> = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Calculate start and end of the middle section
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're near the start or end
      if (currentPage <= 3) {
        endPage = 3;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 2;
      }
      
      // Add ellipsis if needed
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  // Handle page change
  const handlePageChange = (page: number | '...') => {
    if (page === '...' || page === currentPage) return;
    setCurrentPage(Number(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate a consistent color based on advisor ID to avoid hydration mismatch
  const getAdvisorColor = (id: string) => {
    const colors = [
      'rgba(234, 179, 8, 0.2)',
      'rgba(59, 130, 246, 0.2)',
      'rgba(168, 85, 247, 0.2)',
      'rgba(16, 185, 129, 0.2)',
      'rgba(239, 68, 68, 0.2)'
    ];
    // Use the advisor ID to generate a consistent index
    const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <div className="min-h-screen bg-black text-white transition-opacity duration-300">
      <main className="relative pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-6 backdrop-blur-sm">
                <User className="w-5 h-5 mr-2" />
                MEET OUR ADVISORS
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="text-yellow-400">TBC</span> Advisory Board
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Connect with industry experts and successful entrepreneurs who dedicate their time to help founders and CXOs in The Builders Club community.
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search advisors by name, company, or expertise..."
                      className="w-full pl-12 pr-6 py-4 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <button
                    onClick={() => setSelectedExpertise('all')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedExpertise === 'all'
                        ? 'bg-yellow-500 text-black'
                        : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    All
                  </button>
                  {expertises.slice(0, 5).map((expertise) => (
                    <button
                      key={expertise}
                      onClick={() => setSelectedExpertise(expertise === selectedExpertise ? 'all' : expertise)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedExpertise === expertise
                          ? 'bg-yellow-500 text-black'
                          : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                      }`}
                    >
                      {expertise.charAt(0).toUpperCase() + expertise.slice(1)}
                    </button>
                  ))}
                  {expertises.length > 5 && (
                    <div className="relative">
                      <button
                        className="px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-gray-300 hover:bg-gray-800 transition-colors whitespace-nowrap"
                        onClick={(e) => {
                          e.stopPropagation();
                          const dropdown = e.currentTarget.nextElementSibling as HTMLElement;
                          dropdown.classList.toggle('hidden');
                        }}
                      >
                        More ▼
                      </button>
                      <div 
                        className="expertise-dropdown absolute right-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 hidden overflow-hidden"
                        style={{
                          maxHeight: 'min(400px, calc(100vh - 200px))',
                          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                        }}
                      >
                        <style jsx global>{`
                          .expertise-dropdown::-webkit-scrollbar {
                            width: 6px;
                          }
                          .expertise-dropdown::-webkit-scrollbar-track {
                            background: #1f2937;
                            border-radius: 3px;
                          }
                          .expertise-dropdown::-webkit-scrollbar-thumb {
                            background-color: #4b5563;
                            border-radius: 3px;
                          }
                        `}</style>
                        <div className="p-2">
                          {expertises.slice(5).map((expertise) => (
                            <button
                              key={expertise}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedExpertise(expertise);
                                const dropdown = document.querySelector('.expertise-dropdown');
                                if (dropdown) {
                                  dropdown.classList.add('hidden');
                                }
                              }}
                              className={`w-full text-left px-3 py-2 text-sm rounded-md mb-1 ${
                                selectedExpertise === expertise
                                  ? 'bg-yellow-500/20 text-yellow-400'
                                  : 'text-gray-300 hover:bg-gray-800'
                              }`}
                            >
                              {expertise.charAt(0).toUpperCase() + expertise.slice(1)}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {isClient && paginatedAdvisors.length > 0 && (
                  <div className="text-center text-gray-400 text-sm mt-4">
                    Showing {Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, paginatedAdvisors.length)}-{Math.min(currentPage * ITEMS_PER_PAGE, paginatedAdvisors.length)} of {paginatedAdvisors.length} advisors
                  </div>
                )}
              </div>
              
              <div className="flex justify-center gap-4">
                <Link href="/circle" className="block">
                  <NeoPopButton
                    variant="secondary"
                    className="flex items-center gap-2"
                  >
                    <span>Learn About The Circle</span>
                    <ArrowRight className="w-4 h-4" />
                  </NeoPopButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Advisors Grid */}
        <section className="py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedAdvisors.map((advisor) => {
                const advisorColor = getAdvisorColor(advisor.id);
                return (
                  <div key={advisor.id} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-900/50 rounded-xl p-6 border-2 border-gray-800 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 transform hover:-translate-y-2 overflow-hidden h-full">
                    <div className="relative block h-full group cursor-pointer">
                      <Link 
                        href={`/advisors/${advisor.id}`}
                        className="absolute inset-0 z-10 w-full h-full"
                        prefetch={true}
                      >
                        <span className="sr-only">View {advisor.name}&apos;s profile</span>
                      </Link>
                      <div className="flex-1 flex flex-col h-full">
                        {/* Company Logo */}
                        <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gray-800 p-2 flex items-center justify-center border border-gray-700 overflow-hidden">
                          {advisor.companyLogo ? (
                            <div className="relative w-full h-full">
                              <Image
                                src={advisor.companyLogo} 
                                alt={advisor.company}
                                fill
                                className="object-contain"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(advisor.company)}&background=1f2937&color=fff&size=128`;
                                }}
                              />
                            </div>
                          ) : (
                            <div className="text-yellow-400 font-bold text-lg">
                              {advisor.company.split(' ').map(n => n[0]).join('')}
                            </div>
                          )}
                        </div>
                        
                        {/* Advisor Initials Avatar */}
                        <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-yellow-400/30 group-hover:border-yellow-400 transition-all duration-300">
                          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-2xl font-bold text-white">
                            {advisor.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        
                        {/* Advisor Info */}
                        <div className="text-center mb-4">
                          <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                            {advisor.name}
                          </h3>
                          <p className="text-yellow-400 font-medium">{advisor.role}</p>
                          <p className="text-sm text-gray-400">
                            {advisor.website ? (
                              <a 
                                href={advisor.website.startsWith('http') ? advisor.website : `https://${advisor.website}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition-colors flex items-center justify-center gap-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {advisor.company}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 inline ml-0.5" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                              </a>
                            ) : (
                              advisor.company
                            )}
                          </p>
                        </div>
                        
                        {/* Expertise Tags */}
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                          {(
                            typeof advisor.expertise === 'string' 
                              ? advisor.expertise.split(',').map(e => e.trim())
                              : (Array.isArray(advisor.expertise) ? advisor.expertise : [])
                          ).slice(0, 3).map((exp: string, i: number) => (
                            <span 
                              key={i}
                              className="inline-block px-2 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-400 rounded-full border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                        
                        {/* Additional details */}
                        <div className="mt-auto">
                          <div className="pt-4 border-t border-gray-800">
                            <div className="flex items-center text-xs text-gray-400 min-h-[24px]">
                              <svg className="w-4 h-4 mr-1.5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                              <span className="line-clamp-1">Available for 1:1 sessions</span>
                            </div>
                            <div className="mt-2 flex items-center text-xs text-gray-400 min-h-[24px]">
                              <svg className="w-4 h-4 mr-1.5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="line-clamp-1">Response time: 48 hours</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover effect background */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                    
                    {/* Social Links */}
                    <div className="relative z-20 flex justify-center space-x-3 mt-4 pt-4 border-t border-gray-800" onClick={(e) => e.stopPropagation()}>
                      <a 
                        href={advisor.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 border border-gray-700 hover:border-yellow-400"
                        aria-label={`${advisor.name}'s LinkedIn`}
                        title="LinkedIn Profile"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      {advisor.website && (
                        <a
                          href={advisor.website.startsWith('http') ? advisor.website : `https://${advisor.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 border border-gray-700 hover:border-yellow-400"
                          aria-label={`${advisor.company} website`}
                          onClick={(e) => e.stopPropagation()}
                          title="Company Website"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {paginatedAdvisors.length === 0 ? (
              <div className="text-center py-12 col-span-full">
                <p className="text-gray-400 text-lg">No advisors found matching your search. Try different keywords.</p>
              </div>
            ) : (
              <div className="col-span-full mt-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-gray-400">
                    Showing {Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, paginatedAdvisors.length)}-{Math.min(currentPage * ITEMS_PER_PAGE, paginatedAdvisors.length)} of {paginatedAdvisors.length} advisors
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-gray-800 text-gray-400 hover:bg-gray-800/50 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <div className="flex items-center gap-1">
                      {getPageNumbers().map((page, index) => (
                        <button
                          key={index}
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                            page === currentPage
                              ? 'bg-yellow-500 text-black'
                              : page === '...'
                              ? 'text-gray-400 cursor-default'
                              : 'text-gray-300 hover:bg-gray-800/50'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-gray-800 text-gray-400 hover:bg-gray-800/50 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to join our advisory board?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for experienced professionals to help guide our community of builders.
            </p>
            <a 
              href="https://nas.io/tbc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <NeoPopButton
                variant="primary"
                size="lg"
                className="mx-auto"
              >
                Apply to be an Advisor
              </NeoPopButton>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function getLayout(page: ReactNode) {
  return <ClientLayout>{page}</ClientLayout>;
}

AdvisorsPage.getLayout = getLayout;
