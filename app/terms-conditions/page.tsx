import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | The Builders Club',
  description: 'Terms and conditions for using The Builders Club platform and services.',
};

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">Terms & Conditions</h1>
        <p className="text-black">Last updated: August 15, 2025</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-8 sm:p-10">
        <div className="prose prose-base max-w-none text-black space-y-8">
          <section className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
            <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
            <p className="text-black">
              Welcome to The Builders Club. These terms and conditions outline the rules and regulations for the use of our website and services.
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use The Builders Club&apos;s website if you do not accept all of the terms and conditions stated on this page.
            </p>
          </section>

          <section className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">2. Intellectual Property Rights</h2>
            <p className="text-black">
              Unless otherwise stated, The Builders Club and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from The Builders Club for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
          </section>

          <section className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">3. User Responsibilities</h2>
            <p className="text-black">
              As a user of our website, you agree to the following:
            </p>
            <ul className="list-disc pl-6 text-black space-y-3 mt-3">
              <li>Not to use the website in any way that causes damage to the website or impairs its availability</li>
              <li>Not to use the website for any unlawful, illegal, or fraudulent purpose</li>
              <li>Not to conduct any systematic or automated data collection activities on or in relation to our website</li>
              <li>Not to use this website to transmit or send unsolicited commercial communications</li>
            </ul>
          </section>

          <section className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">4. Membership</h2>
            <p className="text-black">
              Membership to The Builders Club is subject to approval. We reserve the right to accept or reject any membership application at our sole discretion. Members are responsible for maintaining the confidentiality of their account and password.
            </p>
          </section>

          <section className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p className="text-black">
              In no event shall The Builders Club, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. The Builders Club, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
            </p>
          </section>

          <section className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">6. Changes to Terms</h2>
            <p className="text-black">
              The Builders Club is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.
            </p>
          </section>

          <section className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">7. Governing Law & Jurisdiction</h2>
            <p className="text-black">
              These terms will be governed by and interpreted in accordance with the laws of the jurisdiction of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
            </p>
          </section>

          <section className="pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">8. Contact Information</h2>
            <p className="text-black">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-black mt-4">
              Email: legal@thebuildersclub.me<br />
              Address: [Your Company Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
