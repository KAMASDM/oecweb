import React from "react";
import Link from "next/link";
import moment from "moment";
import {
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Users,
  CheckCircle,
  ChevronRight,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

const allEvents = [
  {
    id: 1,
    title: "Global University Fair 2025",
    description:
      "Meet representatives from 50+ top international universities including Harvard, Oxford, and ETH Zurich. Get exclusive application fee waivers and on-spot evaluations.",
    organizer: "Global Education Network",
    date: "2025-03-15",
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

const EventDetailPage = ({ slug }) => {
  const event = allEvents.find((event) => event.slug === slug);

  const formatTimeRange = (timeString) => {
    return timeString.replace(" - ", " – ");
  };

  return (
    <div className="bg-gray-100">
      <div className=" bg-primary-800 text-white mt-20 py-20 md:py-32 ">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="md:w-2/3">
              <Link
                href="/events"
                className="inline-flex items-center text-secondary-500 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Events
              </Link>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-secondary-500 rounded-full text-sm font-medium">
                  {event.category}
                </span>
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {event.title}
              </h1>
              <p className="text-xl text-secondary-500 mb-8">
                {event.description}
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-6 w-6 text-secondary-500" />
                  <span className="text-lg">
                    {moment(event.date).format("MMMM D, YYYY")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-secondary-500" />
                  <span className="text-lg">{formatTimeRange(event.time)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-secondary-500" />
                  <span className="text-lg">{event.location}</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold block mb-1">
                  {event.price === "Free" ? "FREE" : event.price}
                </span>
                <span className="text-sm text-secondary-500">PER PERSON</span>
              </div>
              <button className="w-full bg-white text-primary-800 py-3 px-6 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors mb-4 flex items-center justify-center gap-2">
                Register Now
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="flex justify-center gap-4 mt-4">
                <button className="text-white hover:text-secondary-500 transition-colors flex items-center gap-1">
                  <Share2 className="h-5 w-5" />
                  <span className="text-sm">Share</span>
                </button>
                <button className="text-white hover:text-secondary-500 transition-colors flex items-center gap-1">
                  <Bookmark className="h-5 w-5" />
                  <span className="text-sm">Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    About This Event
                  </h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      Join us for this exclusive {event.category.toLowerCase()}{" "}
                      where you'll get firsthand information about studying
                      abroad. This event is perfect for students who are
                      considering international education opportunities.
                    </p>
                    <p className="mb-4">
                      Our expert speakers will cover all aspects of the
                      application process, including admission requirements,
                      scholarship opportunities, visa procedures, and post-study
                      work options.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                      Event Highlights
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary-800 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                      Who Should Attend
                    </h3>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary-800 mt-0.5 flex-shrink-0" />
                        <span>
                          High school students planning to study abroad
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary-800 mt-0.5 flex-shrink-0" />
                        <span>
                          University students considering transfer options
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary-800 mt-0.5 flex-shrink-0" />
                        <span>
                          Parents seeking information about international
                          education
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Organizer
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="sm:w-1/4">
                      <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
                        <Users className="h-12 w-12 text-gray-400" />
                      </div>
                    </div>
                    <div className="sm:w-3/4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {event.organizer}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {event.organizer} is a leading education consultancy
                        specializing in international student placements. We
                        have helped thousands of students achieve their dreams
                        of studying abroad.
                      </p>
                      <button className="text-primary-800 hover:text-primary-600 font-medium flex items-center gap-1">
                        Contact Organizer
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Location
                  </h2>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-secondary-500" />
                      <span className="ml-2 text-gray-600">
                        Map of {event.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">
                    <strong>Venue:</strong> {event.location}
                  </p>
                  <p className="text-gray-600">
                    <strong>Address:</strong> 123 Education Street, Knowledge
                    District,{" "}
                    {event.location.includes("Online")
                      ? "Virtual Event"
                      : "City, Country"}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-28 mb-8">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {event.price === "Free" ? "FREE" : event.price}
                    </span>
                    <span className="text-sm text-gray-500">per person</span>
                  </div>
                  <button className="w-full bg-primary-800 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-bold text-lg transition-colors mb-4 flex items-center justify-center gap-2">
                    Register Now
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="text-center text-sm text-gray-500 mb-4">
                    Limited seats available. Register early to secure your spot.
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Event Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CalendarIcon className="h-5 w-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {moment(event.date).format("MMMM D, YYYY")}
                          </div>
                          <div className="text-sm text-gray-500">
                            {formatTimeRange(event.time)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {event.location}
                          </div>
                          {!event.location.includes("Online") && (
                            <div className="text-sm text-gray-500">
                              123 Education Street, Knowledge District
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Share This Event
                  </h3>
                  <div className="flex justify-between">
                    <Link
                      href="#"
                      className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <FacebookIcon />
                    </Link>
                    <Link
                      href="#"
                      className="w-12 h-12 rounded-full bg-blue-100 text-blue-400 flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <TwitterIcon />
                    </Link>
                    <Link
                      href="#"
                      className="w-12 h-12 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-200 transition-colors"
                    >
                      <InstagramIcon />
                    </Link>
                    <Link
                      href="#"
                      className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <LinkedinIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetailPage;
