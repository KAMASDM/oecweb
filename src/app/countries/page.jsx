import React from "react";

const countriesData = [
  {
    flag: "🇺🇸",
    name: "United States",
    description:
      "World's largest higher education system with unparalleled research opportunities.",
    stats: { universities: "4,000+", cost: "₹25-60L" },
    topUniversities: "Harvard, MIT, Stanford, Yale, Princeton, Columbia",
    popularPrograms: "Engineering, Computer Science, Business, Medicine, Law",
    workOpportunities: "F-1 OPT (1-3 years), H-1B visa pathway",
    keyBenefits:
      "Diverse academic programs, research opportunities, global recognition, strong alumni networks",
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    description:
      "Home to world's oldest universities with rich academic traditions.",
    stats: { universities: "130+", cost: "₹20-35L" },
    topUniversities: "Oxford, Cambridge, Imperial College, UCL, LSE, Edinburgh",
    popularPrograms:
      "Business, Engineering, Medicine, Arts & Humanities, Finance",
    workOpportunities: "Graduate visa (2 years), skilled worker visa",
    keyBenefits:
      "Shorter program duration, cultural proximity, gateway to Europe, prestigious degrees",
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    description:
      "Welcoming immigration policies with high-quality education and excellent quality of life.",
    stats: { universities: "100+", cost: "₹15-25L" },
    topUniversities: "University of Toronto, UBC, McGill, Waterloo, McMaster",
    popularPrograms:
      "Engineering, Computer Science, Business, Healthcare, Natural Resources",
    workOpportunities: "PGWP (up to 3 years), express entry for PR",
    keyBenefits:
      "Post-graduation work permits, pathway to permanent residency, affordable education, safe environment",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    description:
      "High-quality education with excellent climate and multicultural environment.",
    stats: { universities: "40+", cost: "₹18-30L" },
    topUniversities:
      "University of Melbourne, ANU, University of Sydney, UNSW, Monash",
    popularPrograms:
      "Engineering, Business, Medicine, Environmental Studies, Mining",
    workOpportunities: "Post-study work visa (2-4 years), skilled migration",
    keyBenefits:
      "High quality of life, research opportunities, diverse culture, excellent climate",
  },
  {
    flag: "🇩🇪",
    name: "Germany",
    description:
      "Tuition-free education at public universities with strong industry connections.",
    stats: { universities: "400+", cost: "₹5-12L" },
    topUniversities:
      "TU Munich, Heidelberg, LMU Munich, TU Berlin, RWTH Aachen",
    popularPrograms:
      "Engineering, Computer Science, Natural Sciences, Business, Medicine",
    workOpportunities: "18-month job search visa, EU Blue Card",
    keyBenefits:
      "Low or no tuition fees, strong economy, central location in Europe, excellent research facilities",
  },
  {
    flag: "🇸🇬",
    name: "Singapore",
    description:
      "Asia's education hub with strong industry connections and multicultural environment.",
    stats: { universities: "30+", cost: "₹20-35L" },
    topUniversities: "NUS, NTU, SMU, SUTD, Singapore Institute of Technology",
    popularPrograms:
      "Business, Engineering, Computer Science, Finance, Biotechnology",
    workOpportunities:
      "Work permits for graduates, pathway to permanent residency",
    keyBenefits:
      "Strategic location, business hub, high employment rates, cultural diversity",
  },
];

const comparisonData = [
  {
    flag: "🇺🇸",
    name: "United States",
    duration: "2-4 years",
    workDuring: "20 hrs/week on-campus",
    postStudy: "1-3 years (OPT)",
    pathToPr: "H-1B → Green Card",
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    duration: "1-3 years",
    workDuring: "20 hrs/week",
    postStudy: "2 years",
    pathToPr: "Skilled Worker Visa",
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    duration: "1-4 years",
    workDuring: "20 hrs/week",
    postStudy: "1-3 years (PGWP)",
    pathToPr: "Express Entry (CEC)",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    duration: "1-4 years",
    workDuring: "20 hrs/week",
    postStudy: "2-4 years",
    pathToPr: "SkillSelect Program",
  },
  {
    flag: "🇩🇪",
    name: "Germany",
    duration: "2-4 years",
    workDuring: "20 hrs/week",
    postStudy: "18 months",
    pathToPr: "EU Blue Card",
  },
];

const Countries = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Study Destinations
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Explore world-class education opportunities across 15+ countries
            with detailed insights on universities, costs, visa requirements,
            and career prospects
          </p>
        </div>
      </div>

      <section className="content-section py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {countriesData.map((country) => (
              <div
                key={country.name}
                className="country-card bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="country-header bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-8 text-center">
                  <h3 className="text-3xl font-bold mb-2">
                    {country.flag} {country.name}
                  </h3>
                  <p className="opacity-90">{country.description}</p>
                </div>
                <div className="country-content p-6 md:p-8 flex-grow flex flex-col space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="stat-item bg-gray-50 p-4 rounded-lg">
                      <span className="stat-number block text-2xl font-bold text-purple-600">
                        {country.stats.universities}
                      </span>
                      <span className="stat-label text-sm text-gray-500">
                        Universities
                      </span>
                    </div>
                    <div className="stat-item bg-gray-50 p-4 rounded-lg">
                      <span className="stat-number block text-2xl font-bold text-purple-600">
                        {country.stats.cost}
                      </span>
                      <span className="stat-label text-sm text-gray-500">
                        Annual Cost
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>
                      <strong>Top Universities:</strong>{" "}
                      {country.topUniversities}
                    </p>
                    <p>
                      <strong>Popular Programs:</strong>{" "}
                      {country.popularPrograms}
                    </p>
                    <p>
                      <strong>Work Opportunities:</strong>{" "}
                      {country.workOpportunities}
                    </p>
                    <p>
                      <strong>Key Benefits:</strong> {country.keyBenefits}
                    </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Detailed Country Comparison
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Choose the right destination based on your priorities and goals
            </p>
          </div>
          <div className="overflow-x-auto shadow-xl rounded-2xl">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-white uppercase bg-gradient-to-r from-[#667eea] to-[#764ba2]">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Country
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Study Duration
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Work During Study
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Post-Study Work
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Path to PR
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((country, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-semibold whitespace-nowrap">
                      {country.flag} {country.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {country.duration}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {country.workDuring}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {country.postStudy}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {country.pathToPr}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Application Requirements by Country
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Understanding the specific requirements for each destination
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  English Language Requirements (IELTS)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🇺🇸 USA: 6.0-7.5 (varies by university and program)</li>
                  <li>🇬🇧 UK: 6.0-7.5 (UKVI IELTS required for visa)</li>
                  <li>🇨🇦 Canada: 6.5-7.0 (minimum 6.0 in each band)</li>
                  <li>🇦🇺 Australia: 6.5-7.0 (minimum 6.0 in each band)</li>
                  <li>🇩🇪 Germany: 6.0-6.5 (some programs taught in German)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Standardized Test Requirements
                </h3>
                <p className="font-semibold mb-2">Undergraduate Programs:</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>
                    📝 SAT: Required for most US universities (1200-1500+)
                  </li>
                  <li>📝 A-Levels: Required for UK universities</li>
                  <li>
                    📝 High School Diploma: Accepted in Canada and Australia
                  </li>
                </ul>
                <p className="font-semibold mb-2">Graduate Programs:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    📝 GRE: Required for most US graduate programs (300-330+)
                  </li>
                  <li>📝 GMAT: Required for MBA programs (600-750+)</li>
                  <li>📝 Some countries don't require standardized tests</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Academic Requirements (Minimum Scores)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🎓 USA: 3.0+ GPA (varies significantly by university)</li>
                  <li>🎓 UK: 60-85% (depends on university ranking)</li>
                  <li>🎓 Canada: 65-85% (varies by province and university)</li>
                  <li>
                    🎓 Australia: 65-80% (varies by university and program)
                  </li>
                  <li>🎓 Germany: 60-75% (varies by university and program)</li>
                </ul>
              </div>
            </div>
            <aside className="sidebar bg-gray-50 p-8 rounded-2xl border space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Visa Processing Times
                </h3>
                <ul className="space-y-2 divide-y">
                  <li className="pt-2">
                    <strong>USA (F-1):</strong> 2-8 weeks
                  </li>
                  <li className="pt-2">
                    <strong>UK (Tier 4):</strong> 3-6 weeks
                  </li>
                  <li className="pt-2">
                    <strong>Canada (Study Permit):</strong> 4-12 weeks
                  </li>
                  <li className="pt-2">
                    <strong>Australia (Student Visa):</strong> 4-8 weeks
                  </li>
                  <li className="pt-2">
                    <strong>Germany (Student Visa):</strong> 4-12 weeks
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Financial Requirements
                </h3>
                <ul className="space-y-2 divide-y">
                  <li className="pt-2">
                    <strong>USA:</strong> I-20 + $10,000 living expenses
                  </li>
                  <li className="pt-2">
                    <strong>UK:</strong> CAS + £1,023/month living expenses
                  </li>
                  <li className="pt-2">
                    <strong>Canada:</strong> $10,000+ proof of funds
                  </li>
                  <li className="pt-2">
                    <strong>Australia:</strong> AUD $21,041/year living expenses
                  </li>
                  <li className="pt-2">
                    <strong>Germany:</strong> €10,332/year blocked account
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Application Deadlines
                </h3>
                <ul className="space-y-2 divide-y">
                  <li className="pt-2">
                    <strong>Fall Intake:</strong> Jan-Mar (most countries)
                  </li>
                  <li className="pt-2">
                    <strong>Spring Intake:</strong> Sep-Oct (USA, Canada)
                  </li>
                  <li className="pt-2">
                    <strong>Summer Intake:</strong> Jan-Feb (Australia, some UK)
                  </li>
                  <li className="pt-2">
                    <strong>Rolling Admissions:</strong> Available in some
                    universities
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Countries;
