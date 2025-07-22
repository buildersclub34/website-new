import ClientLayout from '../ClientLayout';

function BuildersCircle() {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-black">
      <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Builders Circle</h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Join our exclusive community of builders and innovators. Connect, collaborate, and grow together.
          </p>
          <a 
            href="https://nas.io/tbc" 
            target="_blank"
            rel="noopener noreferrer"
            className="neopop-btn neopop-primary text-lg inline-block"
          >
            Join The Club
          </a>
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
