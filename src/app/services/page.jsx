import React from "react";
import {
  School,
  FileText,
  IdCard,
  Calculator,
  Plane,
  Headset,
} from "lucide-react";

const services = [
  {
    icon: <School size={32} />,
    title: "Course Selection & University Matching",
    description:
      "Our AI-powered matching system analyzes your academic background, career goals, and budget to identify the perfect university and program combinations.",
    features: [
      "Personalized university shortlisting based on your profile",
      "Program finder with detailed career outcome data",
      "Budget optimization strategies and cost comparisons",
      "Alternative pathway recommendations",
      "University ranking analysis and interpretation",
      "Faculty research matching for graduate programs",
    ],
    included:
      "3-5 university recommendations, detailed program analysis, cost breakdown, and application timeline planning.",
  },
  {
    icon: <FileText size={32} />,
    title: "Application Support",
    description:
      "Complete application assistance with our team of former admissions officers and expert writers to maximize your chances of acceptance.",
    features: [
      "Step-by-step application timeline and checklist",
      "Professional essay writing workshops and reviews",
      "Document verification and preparation",
      "Mock interview sessions with feedback",
      "Application portal guidance and submission support",
      "Follow-up with universities and status tracking",
    ],
    included:
      "Success Rate: 92% of our students receive admission to at least one of their top 3 university choices.",
  },
  {
    icon: <IdCard size={32} />,
    title: "Visa & Immigration",
    description:
      "Expert visa guidance with our industry-leading 95% success rate, including comprehensive document preparation and interview coaching.",
    features: [
      "Country-specific visa guidance and requirements",
      "Document checklist and thorough review process",
      "Mock visa interview preparation with real scenarios",
      "Immigration law updates and policy changes",
      "DS-160, study permit, and visa application assistance",
      "Emergency visa consultation and problem resolution",
    ],
    included:
      "Visa Success Rate: 95% across all countries (98% for first-time applicants)",
  },
  {
    icon: <Calculator size={32} />,
    title: "Financial Planning & Scholarship Assistance",
    description:
      "Comprehensive financial guidance including education loans, scholarship applications, and cost optimization strategies.",
    features: [
      "Education loan partnerships with major banks",
      "Scholarship database with personalized recommendations",
      "Detailed cost calculators by destination and program",
      "ROI analysis and career outcome projections",
      "Financial aid application assistance",
      "Part-time work and internship guidance",
    ],
    included:
      "Scholarship Success: $50M+ in scholarships secured for our students over 10 years",
  },
  {
    icon: <Plane size={32} />,
    title: "Pre-Departure Support",
    description:
      "Complete preparation for your departure including accommodation, travel arrangements, and comprehensive cultural orientation.",
    features: [
      "University accommodation assistance and booking",
      "Off-campus housing search and verification",
      "Travel planning and insurance guidance",
      "Cultural orientation sessions by country",
      "Academic preparation and study skills workshops",
      "Airport pickup arrangements and local contacts",
    ],
    included:
      "Comprehensive pre-departure checklist, country-specific orientation, and 24/7 emergency contacts",
  },
  {
    icon: <Headset size={32} />,
    title: "Post-Arrival & Ongoing Support",
    description:
      "Continued support after you reach your destination, including academic guidance, career counseling, and emergency assistance.",
    features: [
      "24/7 emergency support hotline for students abroad",
      "Academic performance monitoring and guidance",
      "Career guidance and internship placement support",
      "Alumni network access and mentorship programs",
      "Work permit and immigration extension assistance",
      "Family visit visa guidance and support",
    ],
    included: "Lifetime access to our support network and alumni community",
  },
];

const Services = () => {
  return (
    <div>
      <div className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Study Abroad Services
          </h1>
          <p className="text-secondary-500 text-lg md:text-xl max-w-3xl mx-auto">
            End-to-end support for your international education journey, backed
            by 10 years of expertise and a 95% success rate
          </p>
        </div>
      </div>

      <section className="content-section py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="service-icon w-16 h-16 bg-secondary-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="service-features space-y-2 text-gray-700 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 font-bold mr-2 mt-1">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <div className="p-4 bg-primary-50 text-primary-800 rounded-lg border-l-4 border-primary-400">
                    <strong>{service.included.split(":")[0]}:</strong>
                    {service.included.substring(
                      service.included.indexOf(":") + 1
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800">
              Why Choose OEC India's Services?
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Our comprehensive approach sets us apart from other consultants
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  The OEC India Difference
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Personalized Strategy Development:</strong> Unlike
                  generic consultants, we develop a unique strategy for each
                  student based on their academic background, career
                  aspirations, financial situation, and personal preferences.
                  Our detailed profiling process ensures that every
                  recommendation is tailored specifically to your goals.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Former Admissions Officers on Staff:</strong> Our team
                  includes former admissions officers from top universities who
                  understand exactly what admissions committees look for. This
                  insider knowledge gives our students a significant advantage
                  in the application process.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Comprehensive Support Ecosystem:</strong> We don't
                  just help with applications - we provide end-to-end support
                  from initial consultation to graduation and beyond. Our alumni
                  network spans 15 countries and provides ongoing mentorship and
                  career guidance.
                </p>
                <p className="text-gray-600">
                  <strong>Technology-Enhanced Guidance:</strong> Our proprietary
                  matching algorithms and application tracking systems ensure
                  that nothing falls through the cracks. Students and parents
                  have 24/7 access to their application status and can track
                  progress in real-time.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Service Packages
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong>Essential Package (₹75,000):</strong> University
                  selection, application support for 3 universities, visa
                  guidance, and basic pre-departure briefing.
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Premium Package (₹1,25,000):</strong> All Essential
                  services plus scholarship assistance, comprehensive essay
                  review, mock interview sessions, and 6-month post-arrival
                  support.
                </p>
                <p className="text-gray-600">
                  <strong>Elite Package (₹2,00,000):</strong> All Premium
                  services plus unlimited university applications, priority
                  advisor access, family consultation sessions, and lifetime
                  alumni network access.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Success Metrics
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    📈 92% of students get into their top 3 university choices
                  </li>
                  <li>🎓 95% visa success rate across all countries</li>
                  <li>💰 Average scholarship of $15,000 per student</li>
                  <li>⭐ 98% student satisfaction rating</li>
                  <li>🏆 85% of graduates secure jobs within 6 months</li>
                </ul>
              </div>
            </div>

            <aside className="sidebar bg-white p-8 rounded-2xl border space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Service Timeline
                </h3>
                <ul className="divide-y">
                  <li className="py-2">
                    <strong>Week 1-2:</strong> Profile assessment & shortlisting
                  </li>
                  <li className="py-2">
                    <strong>Week 3-8:</strong> Application prep & submission
                  </li>
                  <li className="py-2">
                    <strong>Week 9-16:</strong> Tracking & interview prep
                  </li>
                  <li className="py-2">
                    <strong>Week 17-20:</strong> Decisions & university
                    selection
                  </li>
                  <li className="py-2">
                    <strong>Week 21-24:</strong> Visa application & preparation
                  </li>
                  <li className="py-2">
                    <strong>Week 25-28:</strong> Pre-departure & travel
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Document Checklist
                </h3>
                <ul className="divide-y">
                  <li className="py-2">Academic transcripts & certificates</li>
                  <li className="py-2">English proficiency test scores</li>
                  <li className="py-2">Standardized test scores (SAT/GRE)</li>
                  <li className="py-2">Letters of recommendation</li>
                  <li className="py-2">
                    Statement of purpose/Personal statement
                  </li>
                  <li className="py-2">Resume/CV</li>
                  <li className="py-2">Financial documents</li>
                  <li className="py-2">IdCard and photographs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>Service Inquiries:</strong>
                    <br />
                    <a
                      href="tel:+919876543210"
                      className="text-primary-600 hover:underline"
                    >
                      📞 +91 98765 43210
                    </a>
                    <br />
                    <a
                      href="mailto:services@oecindia.com"
                      className="text-primary-600 hover:underline"
                    >
                      📧 services@oecindia.com
                    </a>
                  </p>
                  <p>
                    <strong>Emergency Support:</strong>
                    <br />
                    <a
                      href="tel:+919876543211"
                      className="text-primary-600 hover:underline"
                    >
                      📞 +91 98765 43211
                    </a>
                    <br />
                    <a
                      href="mailto:emergency@oecindia.com"
                      className="text-primary-600 hover:underline"
                    >
                      📧 emergency@oecindia.com
                    </a>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
