import React from "react";
import AddCourse from "@/components/addCourse/AddCourse";

export const metadata = {
  title: "Add Course - Explore Overseas Study Programs | OEC India",
  description: "Add and explore courses for overseas study with detailed university, fee, and intake information to find the perfect program.",
  openGraph: {
    title: "Add Course - Explore Overseas Study Programs | OEC India",
    description: "Add and explore courses for overseas study with detailed university, fee, and intake information to find the perfect program.",
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
};

const AddCoursepage = () => {
  return <AddCourse />;
};

export default AddCoursepage;
