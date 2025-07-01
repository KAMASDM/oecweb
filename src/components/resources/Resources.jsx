"use client";
import React, { useState } from "react";
import {
  Calendar,
  User,
  Download,
  FileText,
  LineChart,
  CalendarCheck,
  IdCard,
  Banknote,
} from "lucide-react";

const articlesData = [
  {
    date: "June 15, 2025",
    author: "Rajesh Mehta",
    title: "Complete Guide to US Student Visa Interview 2025",
    excerpt:
      "Essential tips and strategies for acing your F-1 visa interview, including common questions and expert advice from former visa officers.",
    tags: ["USA", "Visa", "Interview Tips"],
  },
  {
    date: "June 10, 2025",
    author: "Priya Sharma",
    title: "UK Graduate Visa Changes: What Students Need to Know",
    excerpt:
      "Latest updates on the UK Graduate visa route, new requirements, and how these changes affect international students planning to work in the UK.",
    tags: ["UK", "Graduate Visa", "Policy Update"],
  },
  {
    date: "June 5, 2025",
    author: "Amit Kumar",
    title: "Canada Express Entry 2025: Changes for International Students",
    excerpt:
      "How recent changes to Canada's Express Entry system benefit international graduates and the new pathways to permanent residency.",
    tags: ["Canada", "Immigration", "Express Entry"],
  },
  {
    date: "May 28, 2025",
    author: "Dr. Vikram Gupta",
    title: "Top 10 Scholarships for Indian Students in 2025",
    excerpt:
      "Comprehensive list of merit-based and need-based scholarships available for Indian students, including application deadlines and requirements.",
    tags: ["Scholarships", "Financial Aid", "Application Tips"],
  },
  {
    date: "May 20, 2025",
    author: "Sneha Krishnan",
    title: "Australia Student Visa Processing Times and Updates",
    excerpt:
      "Current processing times for Australian student visas, new requirements, and tips for faster visa approval.",
    tags: ["Australia", "Student Visa", "Processing Times"],
  },
  {
    date: "May 15, 2025",
    author: "Neha Tandon",
    title: "Education Loan Guide: Best Banks and Interest Rates 2025",
    excerpt:
      "Detailed comparison of education loan options from major Indian banks, including interest rates, processing fees, and eligibility criteria.",
    tags: ["Education Loans", "Banking", "Financial Planning"],
  },
];

const downloadableResourcesData = [
  {
    icon: <Download size={32} />,
    title: "University Application Checklist",
    description:
      "Comprehensive checklist covering all documents and requirements for university applications across different countries.",
    buttonText: "Download PDF",
  },
  {
    icon: <FileText size={32} />,
    title: "SOP Writing Guide",
    description:
      "Step-by-step guide to writing compelling statements of purpose with examples and templates for different programs.",
    buttonText: "Download PDF",
  },
  {
    icon: <LineChart size={32} />,
    title: "Cost Comparison Spreadsheet",
    description:
      "Excel template to compare costs across different universities and countries, including tuition and living expenses.",
    buttonText: "Download Excel",
  },
  {
    icon: <CalendarCheck size={32} />,
    title: "Application Timeline Planner",
    description:
      "Month-by-month planning template to keep track of application deadlines, test dates, and visa requirements.",
    buttonText: "Download PDF",
  },
  {
    icon: <IdCard size={32} />,
    title: "Visa Interview Preparation Kit",
    description:
      "Complete guide with common visa interview questions, sample answers, and tips from visa officers.",
    buttonText: "Download PDF",
  },
  {
    icon: <Banknote size={32} />,
    title: "Scholarship Application Templates",
    description:
      "Proven templates and examples for scholarship essays, recommendation letter requests, and financial aid applications.",
    buttonText: "Download ZIP",
  },
];

const faqData = {
  "Application Process": [
    {
      q: "When should I start my application process?",
      a: "Ideally, start 12-18 months before your intended intake. This gives you enough time for test preparation, application development, and visa processing.",
    },
    {
      q: "How many universities should I apply to?",
      a: "We recommend applying to 5-8 universities: 2-3 reach schools, 3-4 target schools, and 1-2 safety schools to ensure you have good options.",
    },
    {
      q: "Can I apply without IELTS/TOEFL scores?",
      a: "Some universities accept applications without test scores initially, but you'll need to submit them before the deadline. We recommend taking tests early.",
    },
  ],
  "Financial Planning": [
    {
      q: "What is the total cost of studying abroad?",
      a: "Costs vary by country and program. Including tuition, living expenses, and other costs, expect ₹15-60 lakhs for a full program.",
    },
    {
      q: "Are education loans easily available?",
      a: "Yes, we have partnerships with major banks offering competitive interest rates and favorable terms for international education loans.",
    },
    {
      q: "What scholarships are available for Indian students?",
      a: "Many merit-based and need-based scholarships are available. Our students have secured over $50 million in scholarships across various universities.",
    },
  ],
  "Visa Process": [
    {
      q: "How long does the visa process take?",
      a: "Processing times vary: USA (2-8 weeks), UK (3-6 weeks), Canada (4-12 weeks), Australia (4-8 weeks), Germany (4-12 weeks).",
    },
    {
      q: "What if my visa gets rejected?",
      a: "With our comprehensive preparation, rejection rates are very low (under 5%). If rejected, we help with reapplication strategies.",
    },
  ],
  "Post-Graduation": [
    {
      q: "Can I work during my studies?",
      a: "Most countries allow 20 hours/week work during studies. This helps with living expenses and gaining local work experience.",
    },
    {
      q: "What are the chances of getting a job after graduation?",
      a: "85% of our graduates secure employment within 6 months. We provide career guidance and connect students with our alumni network.",
    },
  ],
};

const Resources = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Resources & Insights
          </h1>
          <p className="text-secondary-500 text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive guides, latest updates, and expert insights to help
            you make informed decisions about your international education
            journey
          </p>
        </div>
      </div>

      <section className="content-section py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesData.map((article, index) => (
              <div
                key={index}
                className="blog-card bg-white rounded-2xl shadow-lg border overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="blog-header bg-gray-50 p-6 border-b">
                  <div className="blog-meta flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar
                        size={16}
                        className="h-5 w-5 text-secondary-500"
                      />{" "}
                      {article.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <User size={16} className="h-5 w-5 text-secondary-500" />{" "}
                      {article.author}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {article.title}
                  </h3>
                  <p className="blog-excerpt text-gray-600 text-sm">
                    {article.excerpt}
                  </p>
                </div>
                <div className="blog-content p-6 mt-auto">
                  <div className="blog-tags flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800">
              Downloadable Resources
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Free guides, checklists, and templates to help you navigate your
              study abroad journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloadableResourcesData.map((resource, index) => (
              <div
                key={index}
                className="service-card bg-white p-8 rounded-2xl shadow-lg border flex flex-col text-center"
              >
                <div className="service-icon w-16 h-16 bg-secondary-500 rounded-xl flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {resource.description}
                </p>
                <button className="calculate-btn bg-primary-800 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity mt-auto">
                  {resource.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Answers to the most common questions we receive from students and
              parents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-8">
              {Object.entries(faqData).map(
                ([category, faqs], categoryIndex) => (
                  <div key={category}>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {category}
                    </h3>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => {
                        const id = `${categoryIndex}-${index}`;
                        const isOpen = openIndex === id;

                        return (
                          <div
                            key={id}
                            className="border rounded-xl overflow-hidden transition-all"
                          >
                            <button
                              onClick={() => handleToggle(id)}
                              className="w-full flex justify-between items-center p-4 font-semibold text-left text-gray-700 hover:bg-gray-100 transition"
                            >
                              {faq.q}
                              <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
                            </button>
                            {isOpen && (
                              <div className="p-4 border-t text-gray-600">
                                {faq.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              )}
            </div>

            <aside className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm md:sticky md:top-24">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">🔗</span> Quick Links
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#services"
                        className="flex items-center text-primary-600 hover:text-primary-800 transition"
                      >
                        <span className="mr-2">💼</span> Our Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#countries"
                        className="flex items-center text-primary-600 hover:text-primary-800 transition"
                      >
                        <span className="mr-2">🌍</span> Study Destinations
                      </a>
                    </li>
                    <li>
                      <a
                        href="#success"
                        className="flex items-center text-primary-600 hover:text-primary-800 transition"
                      >
                        <span className="mr-2">🎯</span> Success Stories
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="flex items-center text-primary-600 hover:text-primary-800 transition"
                      >
                        <span className="mr-2">📅</span> Book Consultation
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">📞</span> Contact Info
                  </h3>
                  <div className="space-y-4 text-gray-600 text-sm">
                    <div>
                      <strong>General Inquiries:</strong>
                      <br />
                      <a
                        href="tel:+919876543210"
                        className="text-primary-600 hover:underline"
                      >
                        📞 +91 93275 81167
                      </a>
                      <br />
                      <a
                        href="mailto:uk@oecindia.com"
                        className="text-primary-600 hover:underline"
                      >
                        📧 uk@oecindia.com
                      </a>
                    </div>
                    <div>
                      <strong>Counseling Sessions:</strong>
                      <br />
                      <a
                        href="tel:+919876543211"
                        className="text-primary-600 hover:underline"
                      >
                        📞 +91 98765 43211
                      </a>
                      <br />
                      <a
                        href="mailto:counseling@oecindia.com"
                        className="text-primary-600 hover:underline"
                      >
                        📧 counseling@oecindia.com
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">⏰</span> Office Hours
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      <strong>Monday-Friday:</strong> 9:00 AM - 8:00 PM
                    </li>
                    <li>
                      <strong>Saturday:</strong> 10:00 AM - 6:00 PM
                    </li>
                    <li>
                      <strong>Sunday:</strong> By Appointment
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
