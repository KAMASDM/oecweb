"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ajaxCall from "@/helpers/ajaxCall";
import ReactHtmlParser from "react-html-parser";
import { Search, ArrowRight, GraduationCap } from "lucide-react";

const CountryGuides = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const response = await ajaxCall("/academics/academics/countries/", {
          method: "GET",
        });

        const results = response?.data?.results || [];
        setCountries(results);
        setFilteredCountries(results);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setCountries([]);
        setFilteredCountries([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    let filtered = [...countries];

    if (searchTerm) {
      const lowercasedFilter = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (country) =>
          country.name.toLowerCase().includes(lowercasedFilter) ||
          country.description.toLowerCase().includes(lowercasedFilter)
      );
    }

    if (activeFilter !== "all") {
      filtered = filtered.filter((country) => {
        const count = country.university_count;
        if (activeFilter === "high") return count >= 10;
        if (activeFilter === "medium") return count >= 5 && count < 10;
        if (activeFilter === "low") return count < 5;
        return true;
      });
    }

    setFilteredCountries(filtered);
    setCurrentPage(1);
  }, [searchTerm, activeFilter, countries]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Country Study Guides
          </h1>
          <p className="text-secondary-500 text-xl md:text-3xl max-w-5xl mx-auto">
            Explore comprehensive guides and expert insights to choose the
            perfect destination for your international education.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by country or program..."
                className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 font-medium whitespace-nowrap">
                Filter by Universities:
              </span>
              <select
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="high">10+ Universities</option>
                <option value="medium">5-9 Universities</option>
                <option value="low">1-4 Universities</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h3 className="font-bold text-2xl text-primary-800">
                {countries.length}
              </h3>
              <p className="text-primary-800 text-sm">Countries Covered</p>
            </div>
            <div className="bg-secondary-50 p-4 rounded-lg">
              <h3 className="font-bold text-2xl text-secondary-500">
                {countries.reduce(
                  (sum, country) => sum + country.university_count,
                  0
                )}
              </h3>
              <p className="text-secondary-500 text-sm">Universities Listed</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg">
              <h3 className="font-bold text-2xl text-primary-800">100+</h3>
              <p className="text-primary-800 text-sm">Program Categories</p>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600"></div>
          </div>
        ) : filteredCountries.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentCountries.map((country) => (
                <div
                  key={country.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="relative h-48">
                    <img
                      src={country.flag_image}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-2xl font-bold text-white">
                        {country.name}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <GraduationCap className="w-4 h-4 mr-1.5" />
                      {country.university_count} Universities
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h4 className="font-semibold text-primary-800 mb-2">
                      Popular Programs
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {ReactHtmlParser(
                        country.description
                          .replace(/<[^>]+>/g, "")
                          .substring(0, 200)
                      )}
                      ...
                    </p>
                    <div className="mt-auto pt-4">
                      <Link
                        href={`/country-guides/${country.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-primary-600 font-bold group-hover:text-primary-800 transition-colors"
                      >
                        Explore Guide{" "}
                        <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center">
                <nav className="flex items-center gap-2">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-md border border-gray-300 disabled:opacity-50"
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (num) => (
                      <button
                        key={num}
                        onClick={() => paginate(num)}
                        className={`px-4 py-2 rounded-md border ${
                          currentPage === num
                            ? "bg-primary-800 text-white border-primary-600"
                            : "border-gray-300"
                        }`}
                      >
                        {num}
                      </button>
                    )
                  )}
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-md border border-gray-300 disabled:opacity-50"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700">
              No Matches Found
            </h3>
            <p className="text-gray-500 mt-2">
              {searchTerm
                ? `Your search for "${searchTerm}" did not return any results.`
                : "No country guides are available at the moment."}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CountryGuides;
