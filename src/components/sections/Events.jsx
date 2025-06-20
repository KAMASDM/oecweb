"use client";
import React from "react";
import Link from "next/link";
import moment from "moment";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const events = [
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
];

const Events = () => {
  return (
    <section className="py-20 bg-gray-100" aria-labelledby="services-heading">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-primary-800 mb-4"
          >
            What's happening with overseas education
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay up-to-date with the latest updates on overseas education,
            student life, rules, COVID-19, and many more!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
            >
              <div className="relative overflow-hidden h-48">
                <Link href={`/events/${event.slug}`} aria-label={event.title}>
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
                  <Link href={`/events/${event.slug}`} className="line-clamp-2">
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

        <div className="text-center mt-12">
          <Link
            href="/events"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-800 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            aria-label="Explore all study destinations"
          >
            Explore All Events
            <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
