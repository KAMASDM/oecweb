import React from "react";

export const metadata = {
  title: "Privacy Policy | OEC India",
  description: "Learn how OEC India collects, uses, and protects your personal information in our privacy policy.",
  openGraph: {
    title: "Privacy Policy | OEC India",
    description: "Learn how OEC India collects, uses, and protects your personal information in our privacy policy.",
    images: [
      {
        url: "https://oecindia.com/oec.png",
        width: 800,
        height: 600,
        alt: "OEC India",
      },
    ],
    siteName: "OEC India",
    locale: "en_US",
    type: "website",
  },
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-800 text-white py-20 mt-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-secondary-500 text-lg md:text-xl mt-4">
            Your privacy is important to us
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              <strong>Last Updated:</strong> November 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                At OEC India, we are committed to protecting your privacy and ensuring the security of your 
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-primary-700 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Register on our website</li>
                <li>Fill out consultation forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us through email or phone</li>
                <li>Attend our events or webinars</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This information may include: name, email address, phone number, date of birth, educational 
                background, intended course of study, preferred destination countries, and other relevant details.
              </p>

              <h3 className="text-xl font-semibold text-primary-700 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information about your device, 
                including information about your web browser, IP address, time zone, and cookies installed on 
                your device.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Provide personalized study abroad counseling and guidance</li>
                <li>Process your applications and requests</li>
                <li>Communicate with you about our services, events, and updates</li>
                <li>Send you marketing and promotional materials (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Sharing Your Information</h2>
              <p className="text-gray-700 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Universities and educational institutions you apply to</li>
                <li>Third-party service providers who assist us in operating our website and services</li>
                <li>Government authorities when required by law</li>
                <li>Business partners for specific services (with your consent)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and hold 
                certain information. Cookies are files with a small amount of data that may include an anonymous 
                unique identifier. You can instruct your browser to refuse all cookies or to indicate when a 
                cookie is being sent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no 
                method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent at any time</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are intended for individuals who are 16 years of age or older. We do not knowingly 
                collect personal information from children under 16. If you are a parent or guardian and believe 
                your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>OEC India</strong><br />
                  Email: info@oecindia.com<br />
                  Phone: +91 [Contact Number]
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
