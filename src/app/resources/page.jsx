import React from "react";
import Resources from "@/components/resources/Resources";

export const metadata = {
  title: "Free Study Abroad Resources - Guides & Checklists | OEC India",
  description:
    "Download free study abroad resources, including admission checklists, visa documents, and scholarship guides from OEC India.",
  openGraph: {
    title: "Free Study Abroad Resources - Guides & Checklists | OEC India",
    description:
      "Download free study abroad resources, including admission checklists, visa documents, and scholarship guides from OEC India.",
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
    title: "Free Study Abroad Resources - Guides & Checklists | OEC India",
    description:
      "Download free study abroad resources, including admission checklists, visa documents, and scholarship guides from OEC India.",
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

const Resourcespage = () => {
  return <Resources />;
};

export default Resourcespage;
