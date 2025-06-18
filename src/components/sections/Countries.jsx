"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Users, DollarSign, Clock, Award } from "lucide-react";

const CountryData = [
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    universities: "4,000+",
    cost: "$25-60L",
    description:
      "World's largest higher education system with unparalleled research opportunities",
    topUniversities: [
      "Harvard",
      "MIT",
      "Stanford",
      "Yale",
      "Princeton",
      "Columbia",
    ],
    workOpportunities: "F-1 OPT (1-3 years), H-1B visa pathway",
    benefits: [
      "Diverse academic programs",
      "Research opportunities",
      "Global recognition",
      "Strong alumni networks",
    ],
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    universities: "130+",
    cost: "$20-35L",
    description:
      "Home to world's oldest universities with rich academic traditions",
    topUniversities: [
      "Oxford",
      "Cambridge",
      "Imperial College",
      "UCL",
      "LSE",
      "Edinburgh",
    ],
    workOpportunities: "Graduate visa (2 years), skilled worker visa",
    benefits: [
      "Shorter program duration",
      "Cultural proximity",
      "Gateway to Europe",
      "Prestigious degrees",
    ],
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    universities: "100+",
    cost: "$15-25L",
    description:
      "Welcoming immigration policies with high-quality education and excellent quality of life",
    topUniversities: [
      "University of Toronto",
      "UBC",
      "McGill",
      "Waterloo",
      "McMaster",
    ],
    workOpportunities: "PGWP (up to 3 years), express entry for PR",
    benefits: [
      "Post-graduation work permits",
      "Pathway to permanent residency",
      "Affordable education",
      "Safe environment",
    ],
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    universities: "40+",
    cost: "$18-30L",
    description:
      "High-quality education with excellent climate and multicultural environment",
    topUniversities: [
      "University of Melbourne",
      "ANU",
      "University of Sydney",
      "UNSW",
      "Monash",
    ],
    workOpportunities: "Post-study work visa (2-4 years), skilled migration",
    benefits: [
      "High quality of life",
      "Research opportunities",
      "Diverse culture",
      "Excellent climate",
    ],
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    universities: "400+",
    cost: "$5-12L",
    description:
      "Tuition-free education at public universities with strong industry connections",
    topUniversities: [
      "TU Munich",
      "Heidelberg",
      "LMU Munich",
      "TU Berlin",
      "RWTH Aachen",
    ],
    workOpportunities: "18-month job search visa, EU Blue Card",
    benefits: [
      "Low or no tuition fees",
      "Strong economy",
      "Central location in Europe",
      "Excellent research facilities",
    ],
  },
];

const Countries = () => {
  return (
    <section
      className="py-10 bg-gray-50"
      aria-labelledby="study-destinations-heading"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="study-destinations-heading"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Study Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore world-class education opportunities across 15+ countries
            with detailed insights on universities, costs, and career prospects
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-4">
          <div className="flex gap-8 animate-infinite-scroll">
            {[...CountryData, ...CountryData].map((country, index) => (
              <div
                key={`${country.id}-${index}`}
                className="flex-shrink-0 w-[350px] bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-6 text-center">
                  <div className="text-4xl mb-2" aria-hidden="true">
                    {country.flag}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{country.name}</h3>
                  <p className="text-blue-100">{country.description}</p>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <Users
                          className="h-5 w-5 text-primary-500 mr-1"
                          aria-hidden="true"
                        />
                        <span className="text-lg font-bold text-primary-600">
                          {country.universities}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Universities</p>
                    </div>

                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <DollarSign
                          className="h-5 w-5 text-green-500 mr-1"
                          aria-hidden="true"
                        />
                        <span className="text-lg font-bold text-green-600">
                          {country.cost}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Annual Cost</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Award
                          className="h-4 w-4 text-yellow-500 mr-2"
                          aria-hidden="true"
                        />
                        Top Universities
                      </h4>
                      <p className="text-sm text-gray-600">
                        {country.topUniversities.slice(0, 3).join(", ")}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Clock
                          className="h-4 w-4 text-blue-500 mr-2"
                          aria-hidden="true"
                        />
                        Work Opportunities
                      </h4>
                      <p className="text-sm text-gray-600">
                        {country.workOpportunities}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Benefits
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {country.benefits.slice(0, 2).map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link
                      href={`/countries#${country.id}`}
                      className="flex items-center justify-center w-full py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 group-hover:scale-105 transition-transform duration-200"
                      aria-label={`Learn more about studying in ${country.name}`}
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/countries"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            aria-label="Explore all study destinations"
          >
            Explore All Destinations
            <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Countries;