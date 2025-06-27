"use client";
import React, { useState, useEffect } from "react";
import OpenAI from "openai";
import { motion, AnimatePresence } from "framer-motion";
import {
  Grid,
  List,
  Search,
  ChevronDown,
  BookOpen,
  GraduationCap,
  Clock,
  Percent,
  CircleDollarSign,
  Globe,
  Calendar,
  Award,
  User,
  BarChart2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const AICollegeFinder = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    degree: "bachelor",
    country: "united-states",
    university: "",
    field: "computer-science",
    duration: "4-years",
    delivery: "on-campus",
  });
  const [search, setSearch] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCourses, setTotalCourses] = useState(0);
  const coursesPerPage = 6;

  const getUniversityLogo = (name) => {
    if (!name) return "https://placehold.co/100x100/2563eb/white?text=U";
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
    return `https://placehold.co/100x100/2563eb/white?text=${initials}`;
  };

  const fetchCourses = async () => {
    setIsLoading(true);
    setError(null);
    setCourses([]);
    setCurrentPage(1); // Reset to first page on new filter

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
      You are an expert course database assistant. Generate a list of 18 fictional but realistic courses based on:
      - Degree Level: ${filters.degree}
      - Country: ${filters.country}
      - University: ${filters.university || "any reputable university"}
      - Field: ${filters.field}
      - Duration: ${filters.duration}
      - Delivery Mode: ${filters.delivery}

      Return valid JSON like:
      {
        "courses": [
          {
            "id": "unique-id",
            "name": "Course Name",
            "university": "University Name",
            "country": "Country",
            "description": "20-25 word overview of the course.",
            "degree": "Bachelor",
            "field": "Computer Science",
            "duration": "4 years",
            "delivery": "On Campus",
            "tuition": "$25,000 - $35,000",
            "intake": "Fall, Spring",
            "scholarship": "Up to 30%",
            "acceptanceRate": "35%",
            "careerOutcomes": ["Software Developer", "Data Analyst", "IT Consultant"],
            "curriculum": ["Algorithms", "Data Structures", "Machine Learning"],
            "faculty": "School of Computer Science",
            "requirements": ["High School Diploma", "Math Proficiency"],
            "language": "English",
            "accreditation": "Nationally Accredited"
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
      const coursesWithLogos = Array.isArray(json.courses)
        ? json.courses.map((course) => ({
            ...course,
            logo: getUniversityLogo(course.university),
          }))
        : [];
      setCourses(coursesWithLogos);
      setTotalCourses(coursesWithLogos.length);
      setTotalPages(Math.ceil(coursesWithLogos.length / coursesPerPage));
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Unable to fetch course data. Please try again later.");
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
      fetchCourses();
    }, 500);

    return () => clearTimeout(timer);
  }, [filters]);

  const filteredCourses = courses.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.university?.toLowerCase()?.includes(search.toLowerCase()) ||
      c.field?.toLowerCase()?.includes(search.toLowerCase()) ||
      c.curriculum?.some((topic) =>
        topic.toLowerCase().includes(search.toLowerCase())
      )
  );

  // Pagination logic
  useEffect(() => {
    setTotalPages(Math.ceil(filteredCourses.length / coursesPerPage));
    setTotalCourses(filteredCourses.length);
    // Reset to first page when search changes
    setCurrentPage(1);
  }, [filteredCourses.length, search]);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skeletonCards = Array.from({ length: coursesPerPage }).map((_, i) => (
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

  // Pagination controls component
  const PaginationControls = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    // Calculate range of pages to show
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust if we're at the start or end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
        <div className="text-sm text-gray-600">
          Showing {indexOfFirstCourse + 1} to{" "}
          {Math.min(indexOfLastCourse, totalCourses)} of {totalCourses} courses
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {startPage > 1 && (
            <>
              <button
                onClick={() => paginate(1)}
                className={`px-3 py-1 rounded-lg ${
                  1 === currentPage
                    ? "bg-primary-800 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                1
              </button>
              {startPage > 2 && <span className="px-2">...</span>}
            </>
          )}

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-3 py-1 rounded-lg ${
                number === currentPage
                  ? "bg-primary-800 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {number}
            </button>
          ))}

          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <span className="px-2">...</span>}
              <button
                onClick={() => paginate(totalPages)}
                className={`px-3 py-1 rounded-lg ${
                  totalPages === currentPage
                    ? "bg-primary-800 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Course
          </h1>
          <p className="text-secondary-500 text-xl md:text-3xl max-w-5xl mx-auto">
            Discover programs that match your academic goals and career
            aspirations
          </p>
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-secondary-500" />
              <input
                type="search"
                placeholder="Search courses, universities, or fields..."
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
                  options: ["bachelor", "master", "phd", "diploma"],
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
                  name: "field",
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
                  name: "duration",
                  options: ["1-year", "2-years", "3-years", "4-years"],
                  icon: <Clock className="h-4 w-4 mr-2" />,
                },
                {
                  name: "delivery",
                  options: ["on-campus", "online", "hybrid"],
                  icon: <User className="h-4 w-4 mr-2" />,
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
                      onClick={fetchCourses}
                      className="mt-3 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Retry
                    </button>
                  </div>
                </div>
              ) : currentCourses.length === 0 ? (
                <div className="col-span-full text-center py-16">
                  <div className="bg-primary-50 border border-primary-200 text-primary-800 px-4 py-3 rounded-lg max-w-2xl mx-auto">
                    <h3 className="font-bold text-lg mb-1">No Courses Found</h3>
                    <p>Try adjusting your filters or search term</p>
                  </div>
                </div>
              ) : (
                currentCourses.map((course) => (
                  <motion.div
                    key={course.id}
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
                          src={course.logo}
                          alt={`${course.university} logo`}
                          className="h-12 w-12 rounded-full object-contain mr-4 border border-gray-200"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {course.name}
                          </h3>
                          <div className="text-sm text-gray-500 mt-1">
                            {course.university}, {course.country}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{course.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          <GraduationCap className="h-3 w-3 mr-1" />{" "}
                          {course.degree}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <BookOpen className="h-3 w-3 mr-1" /> {course.field}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          <Clock className="h-3 w-3 mr-1" /> {course.duration}
                        </span>
                        {course.scholarship && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Award className="h-3 w-3 mr-1" /> Scholarship:{" "}
                            {course.scholarship}
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
                            {course.tuition || "Varies"}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-500 flex items-center">
                            <Calendar className="h-4 w-4 mr-1.5 text-secondary-500" />
                            Intake
                          </div>
                          <div className="font-medium pl-6">
                            {course.intake || "Multiple"}
                          </div>
                        </div>
                        {course.acceptanceRate && (
                          <div>
                            <div className="text-gray-500 flex items-center">
                              <Percent className="h-4 w-4 mr-1.5 text-secondary-500" />
                              Acceptance
                            </div>
                            <div className="font-medium pl-6">
                              {course.acceptanceRate}
                            </div>
                          </div>
                        )}
                        {course.delivery && (
                          <div>
                            <div className="text-gray-500 flex items-center">
                              <User className="h-4 w-4 mr-1.5 text-secondary-500" />
                              Delivery
                            </div>
                            <div className="font-medium pl-6">
                              {course.delivery}
                            </div>
                          </div>
                        )}
                      </div>

                      {course.curriculum && (
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <BookOpen className="h-4 w-4 mr-1.5 text-secondary-500" />
                            Key Topics
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {course.curriculum.slice(0, 3).map((topic, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 bg-white rounded-md border border-primary-800 text-primary-800"
                              >
                                {topic}
                              </span>
                            ))}
                            {course.curriculum.length > 3 && (
                              <span className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-500">
                                +{course.curriculum.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {course.careerOutcomes && (
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <BarChart2 className="h-4 w-4 mr-1.5 text-secondary-500" />
                            Career Outcomes
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {course.careerOutcomes
                              .slice(0, 3)
                              .map((career, i) => (
                                <span
                                  key={i}
                                  className="text-xs px-2 py-1 bg-white rounded-md border border-green-600 text-green-700"
                                >
                                  {career}
                                </span>
                              ))}
                            {course.careerOutcomes.length > 3 && (
                              <span className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-500">
                                +{course.careerOutcomes.length - 3} more
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
          {!isLoading && !error && filteredCourses.length > 0 && (
            <PaginationControls />
          )}
        </div>
      </main>
    </div>
  );
};

export default AICollegeFinder;
