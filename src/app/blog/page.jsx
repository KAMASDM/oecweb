import React from "react";
import Blogs from "@/components/blogs/Blogs";

export const metadata = {
  title: "Study Abroad Blog - Latest Updates & Tips | OEC India",
  description:
    "Stay updated with the latest study abroad news, visa changes, and university admission tips from OEC India’s expert consultants.",
  openGraph: {
    title: "Study Abroad Blog - Latest Updates & Tips | OEC India",
    description:
      "Stay updated with the latest study abroad news, visa changes, and university admission tips from OEC India’s expert consultants.",
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
    title: "Study Abroad Blog - Latest Updates & Tips | OEC India",
    description:
      "Stay updated with the latest study abroad news, visa changes, and university admission tips from OEC India’s expert consultants.",
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

const BlogsPage = () => {
  return <Blogs />;
};

export default BlogsPage;
