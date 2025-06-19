import React from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Study in Canada Virtual Fair",
    date: "2023-11-15",
    time: "14:00 - 16:00",
    location: "Online",
    description:
      "Meet top Canadian universities and get application tips directly from admission officers.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "UK Student Visa Updates Workshop",
    date: "2023-11-20",
    time: "11:00 - 12:30",
    location: "Delhi Office",
    description:
      "Learn about the latest UK visa policy changes and documentation requirements for 2024 intakes.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    title: "Scholarship Strategies Webinar",
    date: "2023-11-25",
    time: "15:00 - 16:30",
    location: "Online",
    description:
      "Discover how to secure scholarships worth $50,000+ at top US universities with our expert guidance.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden flex-shrink-0 m-4 rounded-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">
                    {event.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-5 w-5 text-secondary-500" />
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-5 w-5 text-secondary-500" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-5 w-5 text-secondary-500" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="mt-4 text-gray-700 line-clamp-3 flex-grow">
                  {event.description}
                </p>
              </div>
            </div>
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
