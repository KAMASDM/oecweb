"use client";
import React, { useState, useEffect } from "react";
import {
  Grid,
  List,
  Search,
  ChevronDown,
  Star,
  MapPin,
  BookOpen,
  GraduationCap,
  Globe,
  Calendar,
  Users,
  Award,
  CircleDollarSign,
  Clock,
  Percent,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import OpenAI from "openai";

const Universities = ({ country, course }) => {
  const [viewMode, setViewMode] = useState("grid");
  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    degree: "bachelor",
    country: country ? country : "united-states",
    course: course ? course : "computer-science",
    type: "public",
    rank: "top50",
  });
  const [search, setSearch] = useState("");

  const getUniversityLogo = (name) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
    return `https://placehold.co/100x100/2563eb/white?text=${initials}`;
  };

  const fetchUniversities = async () => {
    setIsLoading(true);
    setError(null);
    setUniversities([]);

    if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
      setError("OpenAI API key not configured.");
      setIsLoading(false);
      return;
    }

    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    const prompt = `
      You are an expert university database assistant. Generate a list of 6 fictional but realistic universities based on:
      - Degree Level: ${filters.degree}
      - Country: ${filters.country}
      - Course: ${filters.course}
      - Type: ${filters.type}
      - Rank: ${filters.rank}

      Return valid JSON like:
      {
        "universities": [
          {
            "id": "unique-id",
            "name": "University Name",
            "country": "Country",
            "city": "City",
            "description": "20-25 word reason to choose this university.",
            "rank": "Top 50",
            "type": "Public",
            "tuition": "$25,000 - $35,000",
            "courseDuration": "4 years",
            "intake": "Fall, Spring",
            "scholarship": "Up to 30%",
            "acceptanceRate": "35%",
            "studentPopulation": "15,000",
            "facultyCount": "1,200",
            "campusSize": "200 acres",
            "established": "1890",
            "accreditation": "Nationally Accredited",
            "popularCourses": ["Computer Science", "Engineering", "Business"],
            "facilities": ["Library", "Sports Complex", "Research Labs"],
            "rankingSources": ["QS World Rankings", "Times Higher Education"]
          }
        ]
      }
    `;

    try {
      const res = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });

      const json = JSON.parse(res.choices[0].message.content);
      const universitiesWithLogos = Array.isArray(json.universities)
        ? json.universities.map((uni) => ({
            ...uni,
            logo: getUniversityLogo(uni.name),
          }))
        : [];
      setUniversities(universitiesWithLogos);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Unable to fetch university data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUniversities();
    }, 500);

    return () => clearTimeout(timer);
  }, [filters]);

  const filteredUniversities = universities.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.course?.toLowerCase()?.includes(search.toLowerCase()) ||
      u.popularCourses?.some((course) =>
        course.toLowerCase().includes(search.toLowerCase())
      )
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skeletonCards = Array.from({ length: 6 }).map((_, i) => (
    <div
      key={`skel-${i}`}
      className={`bg-white rounded-xl shadow-sm overflow-hidden ${
        viewMode === "list"
          ? "flex flex-col md:flex-row w-full"
          : "flex flex-col"
      }`}
    >
      <div className="p-6 w-full">
        <div className="animate-pulse flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 rounded-full bg-gray-200 mr-3"></div>
            <div>
              <div className="h-5 bg-gray-200 rounded w-48 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-32"></div>
            </div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="h-6 bg-gray-200 rounded-full w-16"></div>
            <div className="h-6 bg-gray-200 rounded-full w-20"></div>
            <div className="h-6 bg-gray-200 rounded-full w-24"></div>
          </div>
          <div className="flex justify-between items-center mt-auto">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="h-10 bg-gray-200 rounded-full w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="bg-gray-100">
      <header className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Colleges & Universities to Study Abroad
          </h1>
          <p className="text-secondary-500 text-xl md:text-3xl max-w-5xl mx-auto">
            All you need to know about university fees, courses, deadlines,
            scholarships and more.
          </p>
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-secondary-500" />
              <input
                type="search"
                placeholder="Search universities, courses, or locations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 rounded-full bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex flex-wrap gap-3 w-full">
              {[
                {
                  name: "degree",
                  options: ["bachelor", "master", "phd"],
                  icon: <GraduationCap className="h-4 w-4 mr-2" />,
                },
                {
                  name: "country",
                  options: [
                    "united-states",
                    "canada",
                    "united-kingdom",
                    "germany",
                    "australia",
                  ],
                  icon: <Globe className="h-4 w-4 mr-2" />,
                },
                {
                  name: "course",
                  options: [
                    "computer-science",
                    "mba",
                    "data-science",
                    "engineering",
                    "business",
                    "medicine",
                    "architecture",
                  ],
                  icon: <BookOpen className="h-4 w-4 mr-2" />,
                },
                {
                  name: "type",
                  options: ["public", "private", "community"],
                  icon: <Users className="h-4 w-4 mr-2" />,
                },
                {
                  name: "rank",
                  options: ["top30", "top50", "top100", "top200"],
                  icon: <Star className="h-4 w-4 mr-2" />,
                },
              ].map(({ name, options, icon }) => (
                <div key={name} className="relative flex-1 min-w-[150px]">
                  <div className="flex items-center text-sm text-secondary-500 mb-1 ml-1">
                    {icon}
                    <span className="text-primary-800">
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </span>
                  </div>
                  <select
                    name={name}
                    value={filters[name]}
                    onChange={handleFilterChange}
                    className="appearance-none w-full pl-3 pr-8 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-primary-800 focus:border-primary-800 shadow-sm"
                  >
                    {options.map((o) => (
                      <option key={o} value={o}>
                        {o
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 bottom-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-6 p-1">
              {["grid", "list"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`p-2 rounded-lg flex items-center ${
                    viewMode === mode
                      ? "bg-white text-secondary-500 shadow-sm"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                  aria-label={`${mode} view`}
                >
                  {mode === "grid" ? (
                    <Grid className="h-5 w-5" />
                  ) : (
                    <List className="h-5 w-5" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-6"
            }
          >
            <AnimatePresence>
              {isLoading ? (
                skeletonCards
              ) : error ? (
                <div className="col-span-full text-center py-10">
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg max-w-2xl mx-auto">
                    <h3 className="font-bold text-lg mb-1">
                      Error Loading Data
                    </h3>
                    <p>{error}</p>
                    <button
                      onClick={fetchUniversities}
                      className="mt-3 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Retry
                    </button>
                  </div>
                </div>
              ) : filteredUniversities.length === 0 ? (
                <div className="col-span-full text-center py-16">
                  <div className="bg-primary-50 border border-primary-200 text-primary-800 px-4 py-3 rounded-lg max-w-2xl mx-auto">
                    <h3 className="font-bold text-lg mb-1">
                      No Universities Found
                    </h3>
                    <p>Try adjusting your filters or search term</p>
                  </div>
                </div>
              ) : (
                filteredUniversities.map((uni) => (
                  <motion.div
                    key={uni.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
                      viewMode === "list"
                        ? "flex flex-col md:flex-row"
                        : "flex flex-col"
                    }`}
                  >
                    <div className="p-6 w-full">
                      <div className="flex items-start mb-4">
                        <img
                          src={uni.logo}
                          alt={`${uni.name} logo`}
                          className="h-12 w-12 rounded-full object-contain mr-4 border border-gray-200"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {uni.name}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>
                              {uni.city}, {uni.country}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{uni.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          <Star className="h-3 w-3 mr-1" /> {uni.rank}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <Users className="h-3 w-3 mr-1" /> {uni.type}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          <Calendar className="h-3 w-3 mr-1" /> {uni.intake}
                        </span>
                        {uni.scholarship && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Award className="h-3 w-3 mr-1" /> Scholarship:{" "}
                            {uni.scholarship}
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm mb-6">
                        <div>
                          <div className="text-gray-500 flex items-center">
                            <CircleDollarSign className="h-4 w-4 mr-1.5 text-secondary-500" />
                            Tuition
                          </div>
                          <div className="font-medium pl-6">
                            {uni.tuition}/year
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-500 flex items-center">
                            <Clock className="h-4 w-4 mr-1.5 text-secondary-500" />
                            Duration
                          </div>
                          <div className="font-medium pl-6">
                            {uni.courseDuration}
                          </div>
                        </div>
                        {uni.acceptanceRate && (
                          <div>
                            <div className="text-gray-500 flex items-center">
                              <Percent className="h-4 w-4 mr-1.5 text-secondary-500" />
                              Acceptance
                            </div>
                            <div className="font-medium pl-6">
                              {uni.acceptanceRate}
                            </div>
                          </div>
                        )}
                        {uni.studentPopulation && (
                          <div>
                            <div className="text-gray-500 flex items-center">
                              <Users className="h-4 w-4 mr-1.5 text-secondary-500" />
                              Students
                            </div>
                            <div className="font-medium pl-6">
                              {uni.studentPopulation}
                            </div>
                          </div>
                        )}
                      </div>

                      {uni.popularCourses && (
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <BookOpen className="h-4 w-4 mr-1.5 text-secondary-500" />
                            Popular Courses
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {uni.popularCourses.slice(0, 3).map((course, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 bg-white rounded-md border border-primary-800 text-primary-800"
                              >
                                {course}
                              </span>
                            ))}
                            {uni.popularCourses.length > 3 && (
                              <span className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-500">
                                +{uni.popularCourses.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Universities;
