import React from "react";
import FAQs from "@/components/faqs/FAQs";

export const metadata = {
  title: "Study Abroad FAQs - Get Answers from OEC India Experts",
  description:
    "Have questions about studying abroad? OEC India answers common FAQs on visas, scholarships, admissions, and more for Indian students.",
  openGraph: {
    title: "Study Abroad FAQs - Get Answers from OEC India Experts",
    description:
      "Have questions about studying abroad? OEC India answers common FAQs on visas, scholarships, admissions, and more for Indian students.",
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
    title: "Study Abroad FAQs - Get Answers from OEC India Experts",
    description:
      "Have questions about studying abroad? OEC India answers common FAQs on visas, scholarships, admissions, and more for Indian students.",
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

const FAQsPage = () => {
  return <FAQs />;
};

export default FAQsPage;
