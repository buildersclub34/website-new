import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | The Builders Club',
  description: 'Learn about how we use cookies and similar technologies on The Builders Club website.',
};

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">Cookie Policy</h1>
        <p className="text-black">Last updated: August 15, 2025</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-8 sm:p-10">
        <div className="prose prose-base max-w-none text-black space-y-8">
          <section className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
            <h2 className="text-2xl font-bold text-black mb-4">1. What Are Cookies</h2>
            <ul className="list-disc pl-6 text-black space-y-3 mt-3">
              <li>Cookies are small text files that are placed on your computer by websites that you visit.</li>
              <li>They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</li>
            </ul>
          </section>

          <section className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">2. How We Use Cookies</h2>
            <p className="text-black">
              We use cookies for a variety of reasons detailed below. In most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
            </p>
          </section>

          <section className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-yellow-600 mt-8 mb-4">3.1 Essential Cookies</h3>
            <p className="text-black">
              These cookies are essential to provide you with services available through our website and to enable you to use some of its features. Without these cookies, the services that you have asked for cannot be provided, and we only use these cookies to provide you with those services.
            </p>
            
            <h3 className="text-xl font-semibold text-yellow-600 mt-8 mb-4">3.2 Functionality Cookies</h3>
            <p className="text-black">
              These cookies allow our website to remember choices you make when you use our website, such as remembering your login details or language preference. The purpose of these cookies is to provide you with a more personal experience and to avoid you having to re-enter your preferences every time you use our website.
            </p>
            
            <h3 className="text-xl font-semibold text-yellow-600 mt-8 mb-4">3.3 Analytics and Performance Cookies</h3>
            <p className="text-black">
              These cookies are used to collect information about traffic to our website and how users use our website. The information gathered does not identify any individual visitor. The information is aggregated and anonymous. It includes the number of visitors to our website, the websites that referred them to our website, the pages they visited on our website, what time of day they visited our website, whether they have visited our website before, and other similar information.
            </p>
            
            <h3 className="text-xl font-semibold text-yellow-600 mt-8 mb-4">3.4 Third-Party Cookies</h3>
            <p className="text-black">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on.
            </p>
          </section>

          <section className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">4. How to Control Cookies</h2>
            <p className="text-black">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>
          </section>

          <section className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">5. Changes to This Cookie Policy</h2>
            <p className="text-black">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the &quot;Last updated&quot; date at the top of this Cookie Policy.
            </p>
          </section>

          <section className="pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
            <p className="text-black">
              If you have any questions about this Cookie Policy, you can contact us at:
              <br /><br />
              Email: privacy@thebuildersclub.me<br />
              Address: [Your Company Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
