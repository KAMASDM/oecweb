import React from "react";
import TestPreparation from "@/components/testPreparation/TestPreparation";

export const metadata = {
  title: "IELTS Coaching & Test Preparation - OEC India",
  description:
    "Get top-notch IELTS, TOEFL, and PTE coaching from OEC India to achieve high scores for your study abroad journey.",
  openGraph: {
    title: "IELTS Coaching & Test Preparation - OEC India",
    description:
      "Get top-notch IELTS, TOEFL, and PTE coaching from OEC India to achieve high scores for your study abroad journey.",
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
    title: "IELTS Coaching & Test Preparation - OEC India",
    description:
      "Get top-notch IELTS, TOEFL, and PTE coaching from OEC India to achieve high scores for your study abroad journey.",
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

const TestPrePage = () => {
  return <TestPreparation />;
};

export default TestPrePage;
