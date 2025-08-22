import { newAdvisors, Advisor } from '../data/new-advisors';

// Function to check if URL is valid
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

// Function to ensure HTTPS
const ensureHttps = (url: string): string => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `https://${url}`;
};

// Function to validate LinkedIn URLs
const validateLinkedIn = (url: string): string => {
  if (!url) return '';
  
  // If it's already a full URL, return as is
  if (url.startsWith('http')) {
    return url;
  }
  
  // If it's just a LinkedIn handle
  if (url.startsWith('in/') || url.startsWith('/in/')) {
    return `https://linkedin.com/${url.replace(/^\/+/, '')}`;
  }
  
  // If it's just a name, create a search URL
  return `https://linkedin.com/search/results/all/?keywords=${encodeURIComponent(url)}`;
};

// Function to validate and fix advisor links
const validateAdvisorLinks = (advisors: Advisor[]): Advisor[] => {
  return advisors.map(advisor => {
    const fixedAdvisor = { ...advisor };
    
    // Fix LinkedIn URL
    if (fixedAdvisor.linkedin) {
      fixedAdvisor.linkedin = validateLinkedIn(fixedAdvisor.linkedin);
    }
    
    // Fix website URL
    if (fixedAdvisor.website) {
      fixedAdvisor.website = ensureHttps(fixedAdvisor.website);
    }
    
    // Fix company logo URL
    if (fixedAdvisor.companyLogo) {
      fixedAdvisor.companyLogo = ensureHttps(fixedAdvisor.companyLogo);
    }
    
    return fixedAdvisor;
  });
};

// Get all advisors (combine newAdvisors with existing ones)
const allAdvisors: Advisor[] = [
  ...newAdvisors,
  // Add existing advisors from page.tsx
  {
    id: '1',
    name: 'Aakash Sinha',
    company: 'Clazar',
    role: 'Founding Member',
    expertise: 'GTM – US Market, B2B Marketing',
    linkedin: 'https://www.linkedin.com/in/aakash-sinha-34331a66/',
    website: 'https://clazar.io',
    companyLogo: 'https://logo.clearbit.com/clazar.io',
    image: '/Speakers-Advisors-Circle Members/Advisor - Clazar - Aakash.png'
  },
  // Add other existing advisors...
];

// Validate all advisors
const validatedAdvisors = validateAdvisorLinks(allAdvisors);

// Log any issues
console.log('Validated Advisors:');
validatedAdvisors.forEach(advisor => {
  if (!isValidUrl(advisor.linkedin)) {
    console.warn(`⚠️ Invalid LinkedIn URL for ${advisor.name}: ${advisor.linkedin}`);
  }
  if (advisor.website && !isValidUrl(advisor.website)) {
    console.warn(`⚠️ Invalid website URL for ${advisor.name}: ${advisor.website}`);
  }
  if (advisor.companyLogo && !isValidUrl(advisor.companyLogo)) {
    console.warn(`⚠️ Invalid company logo URL for ${advisor.name}: ${advisor.companyLogo}`);
  }
});

console.log('\nValidation complete. Check above for any issues.');

// Export the fixed advisors for use in the application
export const fixedAdvisors = validatedAdvisors;
