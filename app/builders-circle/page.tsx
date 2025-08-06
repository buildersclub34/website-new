import ClientLayout from '../ClientLayout';
import NeoPopButton from '../../components/ui/NeoPopButton';
import SectionHeader from '../../components/SectionHeader';

const TrustedByLeaders = () => (
  <section className="w-full py-20 bg-black">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Trusted by <span className="text-yellow-400">Top Leaders</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Leaders from top tech companies support us in this mission.
          </p>
          <NeoPopButton
            as="link"
            href="#WIP-membership"
            variant="secondary"
            className="mt-4"
          >
            Become a Member
          </NeoPopButton>
        </div>
        <div className="bg-yellow-400 p-8 rounded-2xl shadow-neo">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Apple'].map((company) => (
              <div key={company} className="text-black font-bold text-xl">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

function BuildersCircle() {
  return (
    <div className="flex flex-col bg-black">
      <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <div className="text-center max-w-3xl">
            <SectionHeader
              title="Builders Circle"
              description="Join our exclusive community of builders and innovators. Connect, collaborate, and grow together."
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
        </div>
      </section>
      <TrustedByLeaders />
    </div>
  );
}

// Use a type assertion to add the getLayout property to the page component
const PageWithLayout = BuildersCircle as any;
PageWithLayout.getLayout = function getLayout(page: React.ReactNode) {
  return <ClientLayout>{page}</ClientLayout>;
};

export default PageWithLayout;
