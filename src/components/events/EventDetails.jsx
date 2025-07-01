"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import ajaxCall from "@/helpers/ajaxCall";
import { notFound } from "next/navigation";
import {
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Users,
  ChevronRight,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";

const EventDetailPage = ({ slug }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [eventData, setEventData] = useState(null);

  const formatTimeRange = (startTime, endTime) => {
    return `${moment(startTime, "HH:mm:ss").format("h:mm A")} – ${moment(
      endTime,
      "HH:mm:ss"
    ).format("h:mm A")}`;
  };

  useEffect(() => {
    const fetchEvent = async () => {
      setIsLoading(true);
      try {
        const response = await ajaxCall(`/events/events/events/${slug}/`, {
          method: "GET",
        });
        if (response?.data) {
          setEventData(response.data);
        } else {
          notFound();
        }
      } catch (error) {
        console.log("Error fetching event:", error);
        notFound();
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-800"></div>
      </div>
    );
  }

  if (!eventData) {
    return notFound();
  }

  return (
    <div className="bg-gray-100">
      <div className="bg-primary-800 text-white mt-20 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  {eventData.category_name}
                </span>
                {eventData.event_type && (
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                    {eventData.event_type}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {eventData.title}
              </h1>
              <p className="text-xl text-secondary-500 mb-8">
                {eventData.short_description}
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-6 w-6 text-secondary-500" />
                  <span className="text-lg">
                    {moment(eventData.start_date).format("MMMM D, YYYY")}
                    {eventData.end_date &&
                      ` - ${moment(eventData.end_date).format("MMMM D, YYYY")}`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-secondary-500" />
                  <span className="text-lg">
                    {formatTimeRange(eventData.start_time, eventData.end_time)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-secondary-500" />
                  <span className="text-lg">
                    {eventData.is_online
                      ? "Online Event"
                      : eventData.venue_name}
                  </span>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold block mb-1">
                  {eventData.registration_fee === "0.00" ||
                  !eventData.registration_fee
                    ? "FREE"
                    : `₹${eventData.registration_fee}`}
                </span>
                <span className="text-sm text-secondary-500">PER PERSON</span>
              </div>
              {eventData.is_registration_required && (
                <a
                  href={eventData.registration_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-primary-800 py-3 px-6 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors mb-4 flex items-center justify-center gap-2"
                >
                  Register Now
                  <ChevronRight className="h-5 w-5" />
                </a>
              )}
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
                  <div
                    className="prose max-w-none text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: eventData.description,
                    }}
                  />
                  {eventData.benefits && (
                    <>
                      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                        Benefits
                      </h3>
                      <div
                        className="prose max-w-none text-gray-600 mb-6"
                        dangerouslySetInnerHTML={{
                          __html: eventData.benefits,
                        }}
                      />
                    </>
                  )}
                  {eventData.agenda && (
                    <>
                      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                        Agenda
                      </h3>
                      <div
                        className="prose max-w-none text-gray-600 mb-6"
                        dangerouslySetInnerHTML={{
                          __html: eventData.agenda,
                        }}
                      />
                    </>
                  )}
                  {eventData.requirements && (
                    <>
                      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                        Requirements
                      </h3>
                      <div
                        className="prose max-w-none text-gray-600 mb-6"
                        dangerouslySetInnerHTML={{
                          __html: eventData.requirements,
                        }}
                      />
                    </>
                  )}
                </div>
              </div>

              {eventData.speakers?.length > 0 && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Speakers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {eventData.speakers.map((speaker) => (
                        <div
                          key={speaker.id}
                          className="flex flex-col sm:flex-row gap-4"
                        >
                          <div className="sm:w-1/4">
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="w-full h-auto rounded-lg object-cover aspect-square"
                            />
                          </div>
                          <div className="sm:w-3/4">
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              {speaker.name}
                            </h3>
                            <p className="text-gray-600 mb-2">
                              {speaker.designation} at {speaker.company}
                            </p>
                            {speaker.bio && (
                              <p className="text-gray-600 text-sm mb-2">
                                {speaker.bio}
                              </p>
                            )}
                            {speaker.linkedin_url && (
                              <a
                                href={speaker.linkedin_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-800 hover:text-primary-600 font-medium text-sm flex items-center gap-1"
                              >
                                Connect on LinkedIn
                                <ChevronRight className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

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
                        {eventData.organizer_name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {eventData.organizer_name} is organizing this event.
                      </p>
                      {eventData.organizer_email && (
                        <a
                          href={`mailto:${eventData.organizer_email}`}
                          className="text-primary-800 hover:text-primary-600 font-medium flex items-center gap-1"
                        >
                          Contact Organizer
                          <ChevronRight className="h-4 w-4" />
                        </a>
                      )}
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
                    {eventData.google_map_url ? (
                      <iframe
                        src={eventData.google_map_url}
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    ) : (
                      <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                        <MapPin className="h-12 w-12 text-secondary-500" />
                        <span className="ml-2 text-gray-600">
                          {eventData.is_online
                            ? "This is an online event"
                            : `Map of ${eventData.venue_name}`}
                        </span>
                      </div>
                    )}
                  </div>
                  {!eventData.is_online && (
                    <>
                      <p className="text-gray-600 mb-2">
                        <strong>Venue:</strong> {eventData.venue_name}
                      </p>
                      {eventData.venue_address && (
                        <p className="text-gray-600">
                          <strong>Address:</strong> {eventData.venue_address}
                        </p>
                      )}
                    </>
                  )}
                  {eventData.is_online && eventData.meeting_link && (
                    <p className="text-gray-600">
                      <strong>Meeting Link:</strong>{" "}
                      <a
                        href={eventData.meeting_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-800 hover:underline"
                      >
                        {eventData.meeting_link}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-28 mb-8">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {eventData.registration_fee === "0.00" ||
                      !eventData.registration_fee
                        ? "FREE"
                        : `₹${eventData.registration_fee}`}
                    </span>
                    <span className="text-sm text-gray-500">per person</span>
                  </div>
                  {eventData.is_registration_required && (
                    <a
                      href={eventData.registration_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary-800 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-bold text-lg transition-colors mb-4 flex items-center justify-center gap-2"
                    >
                      Register Now
                      <ChevronRight className="h-5 w-5" />
                    </a>
                  )}
                  {eventData.max_participants && (
                    <div className="text-center text-sm text-gray-500 mb-4">
                      Limited to {eventData.max_participants} participants
                    </div>
                  )}
                  {eventData.registration_deadline && (
                    <div className="text-center text-sm text-gray-500 mb-4">
                      Registration deadline:{" "}
                      {moment(eventData.registration_deadline).format(
                        "MMMM D, YYYY h:mm A"
                      )}
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Event Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CalendarIcon className="h-5 w-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {moment(eventData.start_date).format(
                              "MMMM D, YYYY"
                            )}
                            {eventData.end_date &&
                              ` - ${moment(eventData.end_date).format(
                                "MMMM D, YYYY"
                              )}`}
                          </div>
                          <div className="text-sm text-gray-500">
                            {formatTimeRange(
                              eventData.start_time,
                              eventData.end_time
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {eventData.is_online
                              ? "Online Event"
                              : eventData.venue_name}
                          </div>
                          {!eventData.is_online && eventData.venue_address && (
                            <div className="text-sm text-gray-500">
                              {eventData.venue_address}
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
                      href="https://www.facebook.com/oecbaroda"
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <FacebookIcon />
                    </Link>
                    <Link
                      href="https://x.com/oec_india"
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-blue-100 text-blue-400 flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <TwitterIcon />
                    </Link>
                    <Link
                      href="https://www.instagram.com/oecindia"
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-200 transition-colors"
                    >
                      <InstagramIcon />
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
