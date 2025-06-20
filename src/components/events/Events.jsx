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

const eventCategories = [
  { id: 1, name: "University Fairs", slug: "university-fairs" },
  { id: 2, name: "Webinars", slug: "webinars" },
  { id: 3, name: "Workshops", slug: "workshops" },
  { id: 4, name: "Open Days", slug: "open-days" },
  { id: 5, name: "Alumni Meetups", slug: "alumni-meetups" },
];

const allEvents = [
  {
    id: 1,
    title: "Global University Fair 2025",
    description:
      "Meet representatives from 50+ top international universities including Harvard, Oxford, and ETH Zurich. Get exclusive application fee waivers and on-spot evaluations.",
    organizer: "Global Education Network",
    date: "2025-06-20",
    time: "10:00 AM - 4:00 PM",
    location: "Grand Hyatt, Mumbai",
    category: "University Fairs",
    featured: true,
    slug: "global-university-fair-2025",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Students interacting with university representatives at a fair",
    registrationLink: "#",
    price: "Free",
    tags: ["USA", "UK", "Europe", "On-Spot Evaluation"],
    highlights: [
      "One-on-one meetings with admissions officers",
      "Scholarship information sessions",
      "Visa guidance workshops",
      "Free profile evaluation",
    ],
  },
  {
    id: 2,
    title: "Study in Canada: Virtual Open Day",
    description:
      "Interactive virtual event with Canadian universities. Learn about programs, scholarships, and post-study work opportunities directly from institution representatives.",
    organizer: "Canadian Education Bureau",
    date: "2025-04-05",
    time: "2:00 PM - 5:00 PM",
    location: "Online",
    category: "Webinars",
    slug: "study-in-canada-virtual-open-day",
    image:
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Virtual meeting with Canadian university representatives",
    registrationLink: "#",
    price: "Free",
    tags: ["Canada", "Virtual", "Q&A Session"],
    highlights: [
      "Live Q&A with admissions staff",
      "Breakout room sessions by university",
      "Digital goodie bag for attendees",
      "Recording available for registrants",
    ],
  },
  {
    id: 3,
    title: "IELTS Masterclass Workshop",
    description:
      "Intensive 2-day workshop with British Council certified trainers. Learn proven strategies to boost your IELTS score by 1-2 bands.",
    organizer: "British Council",
    date: "2025-03-22",
    time: "9:00 AM - 3:00 PM",
    location: "British Council, Delhi",
    category: "Workshops",
    slug: "ielts-masterclass-workshop",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Students taking an English language test",
    registrationLink: "#",
    price: "₹2,500",
    tags: ["IELTS", "Test Prep", "British Council"],
    highlights: [
      "Diagnostic test with personalized feedback",
      "Speaking practice with native speakers",
      "Writing evaluation by examiners",
      "Free study materials",
    ],
  },
  {
    id: 4,
    title: "US Visa Success Seminar",
    description:
      "Former visa officers share insider tips for F-1 visa interviews. Includes mock interviews with personalized feedback.",
    organizer: "Visa Success Consultants",
    date: "2025-04-10",
    time: "11:00 AM - 1:00 PM",
    location: "Taj Lands End, Bangalore",
    category: "Workshops",
    slug: "us-visa-success-seminar",
    image:
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Passport with US visa stamp",
    registrationLink: "#",
    price: "₹1,500 (Early Bird)",
    tags: ["USA", "Visa", "Interview Preparation"],
    highlights: [
      "Mock interviews recorded and analyzed",
      "Document checklist review",
      "Common refusal reasons explained",
      "Q&A with former consular officers",
    ],
  },
  {
    id: 5,
    title: "UK Alumni Success Stories",
    description:
      "Hear from recent graduates about their study experience in the UK and how it helped their careers. Networking reception included.",
    organizer: "UK Alumni Association",
    date: "2025-05-08",
    time: "6:00 PM - 8:30 PM",
    location: "The Oberoi, Chennai",
    category: "Alumni Meetups",
    slug: "uk-alumni-success-stories",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Group of diverse graduates throwing caps",
    registrationLink: "#",
    price: "Free (Registration Required)",
    tags: ["UK", "Alumni", "Networking"],
    highlights: [
      "Panel discussion with alumni from various fields",
      "Breakout sessions by industry",
      "Networking cocktail hour",
      "Exclusive scholarship information",
    ],
  },
  {
    id: 6,
    title: "STEM Programs in Germany",
    description:
      "Discover cutting-edge STEM programs at German universities of applied sciences. Learn about tuition-free options and industry connections.",
    organizer: "DAAD India",
    date: "2025-04-18",
    time: "3:00 PM - 5:00 PM",
    location: "DAAD Office, New Delhi",
    category: "Open Days",
    slug: "stem-programs-in-germany",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Modern science laboratory in a German university",
    registrationLink: "#",
    price: "Free",
    tags: ["Germany", "STEM", "Engineering"],
    highlights: [
      "Presentation by German professors",
      "Student visa guidance",
      "German language course information",
      "Industry partnership opportunities",
    ],
  },
];

const dateFilters = [
  { id: "all", name: "All Dates" },
  { id: "upcoming", name: "Upcoming" },
  { id: "past", name: "Past Events" },
];

const Events = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;
  const [expandedEvent, setExpandedEvent] = useState(null);

  const filteredEvents = useMemo(() => {
    const today = moment().startOf("day");
    return allEvents.filter((event) => {
      const matchesSearch =
        searchQuery === "" ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "all" || event.category === selectedCategory;

      const eventDate = moment(event.date);
      const matchesDate =
        dateFilter === "all" ||
        (dateFilter === "upcoming" && eventDate.isSameOrAfter(today)) ||
        (dateFilter === "past" && eventDate.isBefore(today));

      return matchesSearch && matchesCategory && matchesDate;
    });
  }, [searchQuery, selectedCategory, dateFilter]);

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
              {eventCategories.map((category) => (
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

          {currentEvents.length === 0 ? (
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
                            src={event.image}
                            alt={event.imageAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                          <div className="absolute top-4 right-4 bg-white/90 text-primary-800 px-3 py-1 rounded-full text-xs font-bold">
                            {event.price === "Free" ? "FREE" : "REGISTER"}
                          </div>
                        </Link>
                      </div>

                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex justify-between items-start">
                          <span className="text-sm font-semibold text-secondary-500">
                            {event.category}
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {event.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
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
                            {moment(event.date).format("MMMM D, YYYY")}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4 text-secondary-500" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4 text-secondary-500" />
                            {event.location}
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
                                src={event.image}
                                alt={event.imageAlt}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-2 right-2 bg-white/90 text-primary-800 px-2 py-1 rounded text-xs font-bold">
                                {event.price === "Free" ? "FREE" : "REGISTER"}
                              </div>
                            </div>
                          </div>

                          <div className="md:w-3/4">
                            <div className="flex justify-between items-start">
                              <div>
                                <span className="text-sm font-semibold text-secondary-500">
                                  {event.category}
                                </span>
                                <h3 className="mt-1 text-xl font-bold text-gray-900 group-hover:text-primary-800 transition-colors">
                                  <Link href={`/events/${event.slug}`}>
                                    {event.title}
                                  </Link>
                                </h3>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {event.tags.slice(0, 2).map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <p className="mt-2 text-gray-600 line-clamp-2">
                              {event.description}
                            </p>

                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                              <div className="flex items-center gap-2 text-gray-600">
                                <CalendarIcon className="h-4 w-4 text-secondary-500" />
                                {moment(event.date).format("MMMM D, YYYY")}
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="h-4 w-4 text-secondary-500" />
                                {event.time}
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="h-4 w-4 text-secondary-500" />
                                {event.location}
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
                              Event Highlights
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {event.highlights.map((highlight, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2"
                                >
                                  <span className="text-primary-600 mt-0.5">
                                    •
                                  </span>
                                  <span className="text-gray-600">
                                    {highlight}
                                  </span>
                                </li>
                              ))}
                            </ul>
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
