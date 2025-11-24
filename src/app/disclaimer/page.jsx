import React from "react";

export const metadata = {
  title: "Disclaimer | OEC India",
  description: "Read the disclaimer for OEC India's overseas education consulting services and website content.",
  openGraph: {
    title: "Disclaimer | OEC India",
    description: "Read the disclaimer for OEC India's overseas education consulting services and website content.",
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

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-800 text-white py-20 mt-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Disclaimer</h1>
          <p className="text-secondary-500 text-lg md:text-xl mt-4">
            Important information about our services and website
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">General Information</h2>
              <p className="text-gray-700 mb-4">
                The information provided on the OEC India website is for general informational purposes only. 
                While we strive to keep the information up to date and accurate, we make no representations or 
                warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                suitability, or availability with respect to the website or the information, products, services, 
                or related graphics contained on the website for any purpose.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">No Professional Advice</h2>
              <p className="text-gray-700 mb-4">
                The content on this website is not intended to be a substitute for professional advice. 
                Always seek the advice of qualified professionals regarding study abroad decisions, visa 
                applications, and educational matters. OEC India provides guidance and consultancy services, 
                but final decisions and outcomes rest with the individual student and relevant authorities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">University and Course Information</h2>
              <p className="text-gray-700 mb-4">
                Information about universities, courses, fees, admission requirements, and other details are 
                subject to change without notice. We recommend verifying all information directly with the 
                respective universities or official sources. OEC India is not responsible for any changes made 
                by universities or educational institutions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Visa and Immigration</h2>
              <p className="text-gray-700 mb-4">
                Visa and immigration regulations are subject to change by the respective governments. While we 
                provide guidance based on current information, we cannot guarantee visa approval. Students are 
                responsible for ensuring they meet all requirements and provide accurate information in their 
                applications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">External Links</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to external websites that are not provided or maintained by OEC India. 
                We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on 
                these external websites. The inclusion of any links does not necessarily imply a recommendation 
                or endorse the views expressed within them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                In no event will OEC India be liable for any loss or damage including without limitation, 
                indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss 
                of data or profits arising out of, or in connection with, the use of this website or our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Changes to Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                OEC India reserves the right to modify this disclaimer at any time without prior notice. 
                Please check this page regularly for updates. Your continued use of this website following 
                any changes constitutes acceptance of those changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this disclaimer, please contact us through our contact page 
                or reach out to our support team.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Disclaimer;
