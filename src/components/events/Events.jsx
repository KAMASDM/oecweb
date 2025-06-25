"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import moment from "moment";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Grid,
  List,
  Search,
  Ticket,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import ajaxCall from "@/helpers/ajaxCall";

const dateFilters = [
  { id: "all", name: "All Dates" },
  { id: "upcoming", name: "Upcoming" },
  { id: "past", name: "Past Events" },
];

const Events = () => {
  const eventsPerPage = 6;
  const [events, setEvents] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await ajaxCall("/events/events/categories/", {
          method: "GET",
        });

        if (response?.data?.results?.length > 0) {
          setCategories(response.data.results);
        } else {
          setCategories([]);
        }
      } catch (error) {
        console.log("Error fetching categories:", error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const response = await ajaxCall("/events/events/events/", {
          method: "GET",
        });

        if (response?.data?.results?.length > 0) {
          setEvents(response.data.results);
        } else {
          setEvents([]);
        }
      } catch (error) {
        console.log("Error fetching events:", error);
        setEvents([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = useMemo(() => {
    const today = moment().startOf("day");
    return events.filter((event) => {
      const matchesSearch =
        searchQuery === "" ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.short_description
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || event.category_name === selectedCategory;

      const eventDate = moment(event.start_date);
      const matchesDate =
        dateFilter === "all" ||
        (dateFilter === "upcoming" && eventDate.isSameOrAfter(today)) ||
        (dateFilter === "past" && eventDate.isBefore(today));

      return matchesSearch && matchesCategory && matchesDate;
    });
  }, [searchQuery, selectedCategory, dateFilter, events]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, dateFilter]);

  const currentEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setDateFilter("all");
  };

  const toggleEventExpand = (id) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  if (isLoading) {
    return (
      <div className="bg-gray-100">
        <div className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-12 bg-gray-300 rounded w-1/2 mx-auto animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mt-4 animate-pulse"></div>
          </div>
        </div>

        <main className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 space-y-6">
              <div className="flex flex-wrap justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-10 bg-gray-200 rounded-full w-24 animate-pulse"
                  ></div>
                ))}
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="h-10 bg-gray-200 rounded-full w-full md:w-64 animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded-full w-24 animate-pulse"></div>
              </div>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                  <div className="flex flex-col h-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-pulse">
                    <div className="relative overflow-hidden h-48 bg-gray-200"></div>
                    <div className="p-6 flex-grow flex flex-col space-y-4">
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      </div>
                      <div className="space-y-2 mt-4">
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-pulse">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="md:w-1/4">
                          <div className="relative overflow-hidden rounded-lg h-40 bg-gray-200"></div>
                        </div>
                        <div className="md:w-3/4 space-y-4">
                          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                          <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      <div className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Upcoming Education Events
          </h1>
          <p className="text-secondary-500 text-xl md:text-2xl max-w-6xl mx-auto">
            Connect with universities, attend workshops, and get expert advice
            for your study abroad journey
          </p>
        </div>
      </div>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-6">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                aria-pressed={selectedCategory === "all"}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === "all"
                    ? "bg-primary-800 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-primary-100 hover:text-primary-800 border border-gray-300"
                }`}
              >
                All Events
              </button>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.name)}
                  aria-pressed={selectedCategory === category.name}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === category.name
                      ? "bg-primary-800 text-white shadow-md"
                      : "bg-white text-primary-800 hover:bg-primary-100 hover:text-primary-800 border border-primary-800"
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                <div className="relative w-full sm:w-auto md:max-w-xs">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-secondary-500" />
                  </div>
                  <input
                    type="search"
                    placeholder="Search events..."
                    aria-label="Search events"
                    className="block w-full pl-10 pr-3 py-2 border border-primary-800 rounded-full leading-5 bg-white placeholder-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-primary-800 sm:text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="relative w-full sm:w-auto">
                  <select
                    id="date-filter"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    aria-label="Filter events by date"
                    className="appearance-none block w-full pl-3 pr-10 py-2 border border-primary-800 rounded-full leading-5 bg-white text-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-primary-800 sm:text-sm"
                  >
                    {dateFilters.map((filter) => (
                      <option key={filter.id} value={filter.id}>
                        {filter.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-secondary-500">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-1 bg-gray-300 rounded-full">
                <button
                  onClick={() => setViewMode("grid")}
                  aria-pressed={viewMode === "grid"}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    viewMode === "grid"
                      ? "bg-white text-secondary-500 shadow"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  aria-pressed={viewMode === "list"}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    viewMode === "list"
                      ? "bg-white text-secondary-500 shadow"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                  aria-label="List view"
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <Ticket className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                No Events Found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or category filters.
              </p>
              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-800 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Reset Filters
                </motion.button>
              </div>
            </div>
          ) : (
            <>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="group flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                    >
                      <div className="relative overflow-hidden h-48">
                        <Link
                          href={`/events/${event.slug}`}
                          aria-label={event.title}
                        >
                          <img
                            src={event.featured_image}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                          <div className="absolute top-4 right-4 bg-white/90 text-primary-800 px-3 py-1 rounded-full text-xs font-bold">
                            FREE
                          </div>
                        </Link>
                      </div>

                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex justify-between items-start">
                          <span className="text-sm font-semibold text-secondary-500">
                            {event.category_name}
                          </span>
                        </div>

                        <h3 className="mt-3 text-xl font-bold text-gray-900 group-hover:text-primary-800 transition-colors">
                          <Link
                            href={`/events/${event.slug}`}
                            className="line-clamp-2"
                          >
                            {event.title}
                          </Link>
                        </h3>

                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4 text-secondary-500" />
                            {moment(event.start_date).format("MMMM D, YYYY")}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4 text-secondary-500" />
                            {moment(event.start_time, "HH:mm:ss").format(
                              "h:mm A"
                            )}{" "}
                            -{" "}
                            {moment(event.end_time, "HH:mm:ss").format(
                              "h:mm A"
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4 text-secondary-500" />
                            {event.venue_name || "Online"}
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                          <Link
                            href={`/events/${event.slug}`}
                            className="inline-flex items-center gap-1 font-semibold text-primary-600 hover:text-primary-800"
                          >
                            View Details
                            <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                          </Link>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-primary-800 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                          >
                            Register Now
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {currentEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                          <div className="md:w-1/4">
                            <div className="relative overflow-hidden rounded-lg h-40">
                              <img
                                src={event.featured_image}
                                alt={event.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-2 right-2 bg-white/90 text-primary-800 px-2 py-1 rounded text-xs font-bold">
                                FREE
                              </div>
                            </div>
                          </div>

                          <div className="md:w-3/4">
                            <div className="flex justify-between items-start">
                              <div>
                                <span className="text-sm font-semibold text-secondary-500">
                                  {event.category_name}
                                </span>
                                <h3 className="mt-1 text-xl font-bold text-gray-900 group-hover:text-primary-800 transition-colors">
                                  <Link href={`/events/${event.slug}`}>
                                    {event.title}
                                  </Link>
                                </h3>
                              </div>
                            </div>

                            <p className="mt-2 text-gray-600 line-clamp-2">
                              {event.short_description}
                            </p>

                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                              <div className="flex items-center gap-2 text-gray-600">
                                <Calendar className="h-4 w-4 text-secondary-500" />
                                {moment(event.start_date).format(
                                  "MMMM D, YYYY"
                                )}
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="h-4 w-4 text-secondary-500" />
                                {moment(event.start_time, "HH:mm:ss").format(
                                  "h:mm A"
                                )}{" "}
                                -{" "}
                                {moment(event.end_time, "HH:mm:ss").format(
                                  "h:mm A"
                                )}
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="h-4 w-4 text-secondary-500" />
                                {event.venue_name || "Online"}
                              </div>
                            </div>

                            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <Link
                                href={`/events/${event.slug}`}
                                className="inline-flex items-center gap-1 font-semibold text-primary-600 hover:text-primary-800"
                              >
                                View Details
                                <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                              </Link>
                              <div className="flex gap-3">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => toggleEventExpand(event.id)}
                                  className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-1"
                                >
                                  {expandedEvent === event.id ? (
                                    <>
                                      <ChevronUp className="h-4 w-4" />
                                      Less Info
                                    </>
                                  ) : (
                                    <>
                                      <ChevronDown className="h-4 w-4" />
                                      More Info
                                    </>
                                  )}
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-4 py-2 bg-primary-800 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                                >
                                  Register Now
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {expandedEvent === event.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6 pt-6 border-t border-gray-200"
                          >
                            <h4 className="font-semibold text-gray-900 mb-3">
                              Event Details
                            </h4>
                            <div className="prose prose-sm text-gray-600">
                              {event.short_description}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="mt-16 flex justify-center">
                  <nav
                    className="flex items-center gap-2"
                    aria-label="Pagination"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                    >
                      Previous
                    </motion.button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <motion.button
                          key={page}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setCurrentPage(page)}
                          aria-current={
                            currentPage === page ? "page" : undefined
                          }
                          className={`w-10 h-10 rounded-md text-sm font-medium transition-colors ${
                            currentPage === page
                              ? "bg-primary-800 text-white"
                              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {page}
                        </motion.button>
                      )
                    )}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                    >
                      Next
                    </motion.button>
                  </nav>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Events;
