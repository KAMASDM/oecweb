import React from "react";
import Courses from "@/components/courses/Courses";

export const metadata = {
  title: "Best Courses to Study Abroad - Career-Focused Programs | OEC India",
  description:
    "Explore high-demand courses like Engineering, MBA, Medicine & more with OEC India’s guidance on top universities abroad.",
  openGraph: {
    title: "Best Courses to Study Abroad - Career-Focused Programs | OEC India",
    description:
      "Explore high-demand courses like Engineering, MBA, Medicine & more with OEC India’s guidance on top universities abroad.",
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
    title: "Best Courses to Study Abroad - Career-Focused Programs | OEC India",
    description:
      "Explore high-demand courses like Engineering, MBA, Medicine & more with OEC India’s guidance on top universities abroad.",
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

const PopularCourses = () => {
  return <Courses />;
};

export default PopularCourses;
