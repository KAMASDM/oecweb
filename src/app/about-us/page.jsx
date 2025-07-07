import React from "react";
import { Handshake, ShieldCheck, Clock, GraduationCap } from "lucide-react";

export const metadata = {
  title: "About OEC India - Trusted Study Abroad Consultants Since 2010",
  description:
    "Learn about OEC India’s mission, team, and success stories. We are a leading overseas education consultancy helping students study in top global universities.",
  openGraph: {
    title: "About OEC India - Trusted Study Abroad Consultants Since 2010",
    description:
      "Learn about OEC India’s mission, team, and success stories. We are a leading overseas education consultancy helping students study in top global universities.",
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
  twitter: {
    card: "summary_large_image",
    title: "About OEC India - Trusted Study Abroad Consultants Since 2010",
    description:
      "Learn about OEC India’s mission, team, and success stories. We are a leading overseas education consultancy helping students study in top global universities.",
    images: [
      {
        url: "https://oecindia.com/oec.png",
        width: 800,
        height: 600,
        alt: "OEC India",
      },
    ],
  },
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About OEC India
          </h1>
          <p className="text-secondary-500 text-xl md:text-2xl max-w-4xl mx-auto">
            Your trusted partner in international education with a decade of
            expertise, 2,000+ successful placements, and an unwavering
            commitment to student success.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
            <main className="md:col-span-2">
              <article>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Story: From Vision to Reality
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Founded in 2015 with a simple yet powerful vision: to
                  democratize access to world-class international education for
                  Indian students. What started as a small consultancy has grown
                  into India's most trusted overseas education partner, guiding
                  over 2,000 students to their dream universities across the
                  globe.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our founder, Rajesh Mehta, experienced firsthand the
                  challenges of navigating the complex overseas education
                  landscape. After successfully completing his MBA from Wharton
                  and working in international admissions, he recognized the gap
                  between student aspirations and the guidance available. This
                  inspired him to create OEC India - a consultancy that would
                  combine deep industry expertise with genuine care for student
                  success.
                </p>

                <section className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-700 mb-4">
                    Why We Started OEC India
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Every year, thousands of talented Indian students dream of
                    studying abroad but face numerous challenges: information
                    overload, hidden costs, unreliable guidance, and lack of
                    personalized support. We've seen too many students make
                    costly mistakes or miss opportunities simply because they
                    didn't have access to the right guidance at the right time.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    OEC India was born to bridge this gap. We believe that every
                    student deserves transparent, expert guidance that puts
                    their interests first. Our approach goes beyond just
                    securing admissions - we're committed to ensuring long-term
                    success, from the initial university search to graduation
                    and beyond.
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Our Mission
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To empower Indian students with the knowledge, guidance, and
                    support they need to achieve their international education
                    dreams while ensuring they make informed decisions that
                    align with their career goals and financial capabilities.
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Our Values
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Transparency: No hidden costs, no false promises - just honest, clear guidance",
                      "Expertise: Continuous learning and deep knowledge of international education systems",
                      "Personalization: Every student is unique, and so is our approach to their goals",
                      "Long-term Success: We measure our success by your success, not just admissions",
                      "Integrity: Always acting in the best interest of our students and their families",
                    ].map((item, index) => (
                      <li key={index} className="p-2 border-b border-gray-100">
                        <strong>{item.split(":")[0]}:</strong>{" "}
                        {item.split(":")[1]}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Our Track Record
                  </h2>
                  <ul className="space-y-2">
                    {[
                      "2,000+ students successfully placed in top universities worldwide",
                      "95% visa success rate across all countries",
                      "$50M+ in scholarships secured for our students",
                      "500+ university partnerships across 15 countries",
                      "98% student satisfaction rate",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </article>
            </main>

            <aside className="bg-gray-50 p-6 lg:p-8 rounded-lg border border-gray-200">
              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Quick Facts
                </h3>
                <ul className="divide-y divide-gray-200">
                  {[
                    ["Founded", "2015"],
                    ["Students Placed", "2,000+"],
                    ["Countries", "15+"],
                    ["University Partners", "500+"],
                    ["Team Size", "25+ Experts"],
                    ["Office Locations", "3"],
                  ].map(([label, value], index) => (
                    <li key={index} className="py-3 flex justify-between">
                      <span className="font-medium">{label}:</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Certifications
                </h3>
                <ul className="divide-y divide-gray-200 text-primary-700">
                  {[
                    "ICEF Agency Certified",
                    "British Council Trained",
                    "NAFSA Member",
                    "IELTS Official Test Partner",
                    "TOEFL Authorized Partner",
                  ].map((item, index) => (
                    <li key={index} className="py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Awards & Recognition
                </h3>
                <ul className="divide-y divide-gray-200 text-primary-700">
                  {[
                    "Best Education Consultant 2023",
                    "Student Choice Award 2022",
                    "Excellence in Service 2021",
                    "Top IELTS Partner 2020",
                  ].map((item, index) => (
                    <li key={index} className="py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Our diverse team of education experts, former admissions officers,
              and industry veterans are here to guide your journey
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                initials: "RM",
                name: "Rajesh Mehta",
                role: "Founder & CEO",
                bio: "MBA from Wharton, Former International Admissions Officer. 15+ years of experience helping students navigate global education opportunities.",
                expertise:
                  "USA Universities, MBA Programs, Scholarship Strategy",
              },
              {
                initials: "PS",
                name: "Priya Sharma",
                role: "Director - UK & Europe",
                bio: "Masters from Oxford, Former British Council Officer. Specialist in UK university applications and European education systems.",
                expertise: "UK Universities, European Programs, Visa Guidance",
              },
              {
                initials: "AK",
                name: "Amit Kumar",
                role: "Senior Counselor - Canada",
                bio: "Engineering graduate from University of Toronto. Specialist in Canadian immigration and technical programs.",
                expertise:
                  "Canada Universities, Engineering Programs, Immigration",
              },
              {
                initials: "SK",
                name: "Sneha Krishnan",
                role: "Director - Australia & New Zealand",
                bio: "Masters from University of Melbourne. Expert in Australian education system and student visa processes.",
                expertise:
                  "Australia Universities, Health Sciences, Student Visas",
              },
              {
                initials: "VG",
                name: "Dr. Vikram Gupta",
                role: "Academic Director",
                bio: "PhD from Stanford, Former Professor. Specialist in research programs, PhD applications, and academic career guidance.",
                expertise:
                  "PhD Programs, Research Opportunities, Academic Writing",
              },
              {
                initials: "NT",
                name: "Neha Tandon",
                role: "Financial Aid Specialist",
                bio: "MBA in Finance, Former Bank Manager. Expert in education loans, scholarships, and financial planning for international students.",
                expertise: "Education Loans, Scholarships, Financial Planning",
              },
            ].map((member, index) => (
              <article
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className="w-24 h-24 bg-secondary-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6"
                  aria-hidden="true"
                >
                  {member.initials}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 text-center">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold text-center mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-4 text-sm lg:text-base">
                  {member.bio}
                </p>
                <div className="bg-gray-100 p-3 rounded-lg border-l-4 border-primary-600">
                  <p className="text-sm font-medium">
                    <strong>Expertise:</strong> {member.expertise}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800">
              Our Commitment to You
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              When you choose OEC India, you're not just getting a consultant -
              you're getting a partner committed to your success
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Handshake,
                title: "Personalized Approach",
                description:
                  "Every student receives a customized strategy based on their unique goals, background, and aspirations. No one-size-fits-all solutions.",
              },
              {
                icon: ShieldCheck,
                title: "Guaranteed Transparency",
                description:
                  "Complete cost transparency from day one. No hidden fees, no surprise charges. You'll know exactly what you're paying for and why.",
              },
              {
                icon: Clock,
                title: "Lifetime Support",
                description:
                  "Our relationship doesn't end with admission. We provide ongoing support throughout your academic journey and beyond.",
              },
              {
                icon: GraduationCap,
                title: "Success Guarantee",
                description:
                  "We're so confident in our approach that we offer a success guarantee. If you don't get admitted to any of your target universities, we'll refund our service fee.",
              },
            ].map((item, index) => (
              <article
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <div className="w-16 h-16 bg-secondary-500 rounded-lg flex items-center justify-center text-white mb-6">
                  <item.icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
