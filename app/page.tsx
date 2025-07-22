import Hero from '@/components/Hero';
import About from '@/components/About';
import BrandsSection from '@/components/BrandsSection';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import InvestmentPartners from '@/components/InvestmentPartners';
import PartnerInitiatives from '@/components/PartnerInitiatives';
import OfficialPartners from '@/components/OfficialPartners';

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <main>
        <Hero />
        <About />
        <BrandsSection />
        <Testimonials />
        <InvestmentPartners />
        <PartnerInitiatives />
        <OfficialPartners />
        <Contact />
      </main>
    </div>
  );
}

// Use a type assertion to add the getLayout property to the page component
const PageWithLayout = Home as any;
PageWithLayout.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <div className="flex flex-col min-h-screen">
      {page}
    </div>
  );
};

export default PageWithLayout;