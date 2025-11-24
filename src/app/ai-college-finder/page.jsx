import React from "react";
import StepperCollegeFinder from "@/components/aiCollegeFinder/StepperCollegeFinder";

export const metadata = {
  title: "AI College Finder | Best Universities For You | OEC India",
  description:
    "Discover the best universities for your study abroad dream with OEC India's AI-powered college finder.",
  openGraph: {
    title: "AI College Finder | Best Universities For You | OEC India",
    description:
      "Discover the best universities for your study abroad dream with OEC India's AI-powered college finder.",
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
    title: "AI College Finder | Best Universities For You | OEC India",
    description:
      "Discover the best universities for your study abroad dream with OEC India's AI-powered college finder.",
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

const AICollegeFinderPage = () => {
  return <StepperCollegeFinder />;
};

export default AICollegeFinderPage;
