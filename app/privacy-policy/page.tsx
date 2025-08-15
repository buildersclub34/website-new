import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Builders Club',
  description: 'Learn how we protect your privacy and handle your data at The Builders Club.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">Privacy Policy</h1>
        <p className="text-black">Last updated: August 15, 2025</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-8 sm:p-10">
        <div className="prose prose-base max-w-none text-black space-y-8">
          <section className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
            <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
            <p className="text-black">
              Welcome to The Builders Club. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="text-black">
              We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-black space-y-3 mt-3">
              <li>Identity Data (name, username, title)</li>
              <li>Contact Data (email, phone number, address)</li>
              <li>Technical Data (IP address, browser type, location)</li>
              <li>Usage Data (how you use our website and services)</li>
              <li>Marketing and Communications Data (preferences in receiving marketing)</li>
            </ul>
          </section>

          <section className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-black">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-black space-y-3 mt-3">
              <li>To register you as a new member</li>
              <li>To manage our relationship with you</li>
              <li>To administer and protect our business and this website</li>
              <li>To deliver relevant website content and advertisements to you</li>
              <li>To use data analytics to improve our website and user experience</li>
            </ul>
          </section>

          <section className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">4. Data Security</h2>
            <p className="text-black">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those 
              employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">5. Your Legal Rights</h2>
            <p className="text-black">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, 
              including the right to request access, correction, erasure, restriction, transfer, to object to processing, 
              to portability of data, and (where the lawful ground of processing is consent) to withdraw consent.
            </p>
          </section>

          <section className="pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
            <p className="text-black">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="text-gray-300 mt-2">
              Email: privacy@thebuildersclub.me<br />
              Address: [Your Company Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
