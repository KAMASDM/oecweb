import React from "react";
import CountryGuides from "@/components/countryGuides/CountryGuides";

export const metadata = {
  title: "Study Abroad Country Guides - Top Destinations | OEC India",
  description:
    "Explore detailed guides on top study abroad destinations including the USA, UK, Canada, Australia, and more. Get insights on universities, visas, costs, and student life with OEC India.",
  openGraph: {
    title: "Study Abroad Country Guides - Top Destinations | OEC India",
    description:
      "Explore detailed guides on top study abroad destinations including the USA, UK, Canada, Australia, and more. Get insights on universities, visas, costs, and student life with OEC India.",
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
    title: "Study Abroad Country Guides - Top Destinations | OEC India",
    description:
      "Explore detailed guides on top study abroad destinations including the USA, UK, Canada, Australia, and more. Get insights on universities, visas, costs, and student life with OEC India.",
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

const CountryGuidesPage = () => {
  return <CountryGuides />;
};

export default CountryGuidesPage;
