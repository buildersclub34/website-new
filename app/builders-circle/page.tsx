import ClientLayout from '../ClientLayout';
import NeoPopButton from '../../components/ui/NeoPopButton';
import SectionHeader from '../../components/SectionHeader';

function BuildersCircle() {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-black">
      <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="text-center max-w-3xl">
          <SectionHeader
            title="Builders Circle"
            subtitle="Join our exclusive community of builders and innovators. Connect, collaborate, and grow together."
            className="mb-8"
            titleClassName="text-4xl md:text-5xl font-bold"
          />
          <NeoPopButton
            as="link"
            href="https://nas.io/tbc"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
          >
            Join The Club
          </NeoPopButton>
        </div>
      </main>
    </div>
  );
}

// Use a type assertion to add the getLayout property to the page component
const PageWithLayout = BuildersCircle as any;
PageWithLayout.getLayout = function getLayout(page: React.ReactNode) {
  return <ClientLayout>{page}</ClientLayout>;
};

export default PageWithLayout;
