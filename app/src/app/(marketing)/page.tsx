import Hero from './_components/Hero';
import About from './_components/About';
import BrandsSection from './_components/BrandsSection';
import Contact from './_components/Contact';
import Testimonials from './_components/Testimonials';
import InvestmentPartners from './_components/InvestmentPartners';
import PartnerInitiatives from './_components/PartnerInitiatives';
import OfficialPartners from './_components/OfficialPartners';
import UnfairAdvantages from './_components/UnfairAdvantages';
import OurPerks from './_components/OurPerks';

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <main>
        <Hero />
        <About />
        <BrandsSection />
        <OurPerks />
        <UnfairAdvantages />
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