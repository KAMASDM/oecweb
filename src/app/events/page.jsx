import React from "react";
import Events from "@/components/events/Events";

export const metadata = {
  title: "Upcoming Study Abroad Events & Webinars | OEC India",
  description:
    "Join OEC India’s free study abroad webinars, university fairs, and expert sessions for the latest updates on overseas education.",
  openGraph: {
    title: "Upcoming Study Abroad Events & Webinars | OEC India",
    description:
      "Join OEC India’s free study abroad webinars, university fairs, and expert sessions for the latest updates on overseas education.",
    images: [
      {
        url: "https://oecindia.com/oec.png",
        width: 800,
        height: 600,
        alt: "OEC India",
      },
    ],
    siteName: "OEC India",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upcoming Study Abroad Events & Webinars | OEC India",
    description:
      "Join OEC India’s free study abroad webinars, university fairs, and expert sessions for the latest updates on overseas education.",
    images: [
      {
        url: "https://oecindia.com/oec.png",
        width: 800,
        height: 600,
        alt: "OEC India",
      },
    ],
  },
};

const EventsPage = () => {
  return <Events />;
};

export default EventsPage;
