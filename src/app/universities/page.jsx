import React from "react";
import Universities from "@/components/universities/Universities";

export const metadata = {
  title: "Top Universities Abroad - Partner Institutions | OEC India",
  description:
    "Discover the best global universities partnered with OEC India for admissions in the UK, USA, Canada, Australia & Europe.",
  openGraph: {
    title: "Top Universities Abroad - Partner Institutions | OEC India",
    description:
      "Discover the best global universities partnered with OEC India for admissions in the UK, USA, Canada, Australia & Europe.",
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
    title: "Top Universities Abroad - Partner Institutions | OEC India",
    description:
      "Discover the best global universities partnered with OEC India for admissions in the UK, USA, Canada, Australia & Europe.",
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

const UniversitiesPage = () => {
  return <Universities />;
};

export default UniversitiesPage;
