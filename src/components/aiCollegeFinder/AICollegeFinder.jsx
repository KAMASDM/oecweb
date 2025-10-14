"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ConsultationForm from "../forms/ConsultationForm";
import CourseCard from "./CourseCard";
import FilterBar from "./FilterBar";
import Pagination from "./Pagination";
import ViewModeToggle from "./ViewModeToggle";
import SearchBar from "./SearchBar";
import SkeletonCard from "./SkeletonCard";

const AICollegeFinder = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
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
    setCurrentPage(1);

    try {
      const response = await fetch("/api/ai-college-finder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          degree: filters.degree,
          country: filters.country,
          university: filters.university,
          field: filters.field,
          duration: filters.duration,
          delivery: filters.delivery,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch courses");
      }

      const json = await response.json();
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
      setError(
        err.message || "Unable to fetch course data. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyNow = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
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

  useEffect(() => {
    setTotalPages(Math.ceil(filteredCourses.length / coursesPerPage));
    setTotalCourses(filteredCourses.length);
    setCurrentPage(1);
  }, [filteredCourses.length, search]);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  return (
    <div className="bg-gray-100">
      <header className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Course
          </h1>
          <p className="text-secondary-500 text-xl md:text-2xl max-w-4xl mx-auto">
            Discover programs that match your academic goals and career
            aspirations
          </p>
          <SearchBar value={search} onChange={handleSearchChange} />
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <FilterBar filters={filters} onFilterChange={handleFilterChange} />
            <ViewModeToggle
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
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
                <SkeletonCard
                  viewMode={viewMode}
                  coursesPerPage={coursesPerPage}
                />
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
                  <CourseCard
                    key={course.id}
                    course={course}
                    viewMode={viewMode}
                    onApplyNow={handleApplyNow}
                  />
                ))
              )}
            </AnimatePresence>
          </div>

          {!isLoading && !error && filteredCourses.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalCourses}
              itemsPerPage={coursesPerPage}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </main>

      {isModalOpen && (
        <ConsultationForm
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          initialEnquiry={{
            name: selectedCourse?.name,
            university: selectedCourse?.university,
            country: selectedCourse?.country,
          }}
        />
      )}
    </div>
  );
};

export default AICollegeFinder;
