import React from "react";
import Finance from "@/components/finance/Finance";

export const metadata = {
  title: "Study Abroad Finance Guidance - Loans & Scholarships | OEC India",
  description:
    "Get expert advice on education loans, scholarships, tuition costs, and financial planning for your study abroad journey with OEC India’s finance experts.",
  openGraph: {
    title: "Study Abroad Finance Guidance - Loans & Scholarships | OEC India",
    description:
      "Get expert advice on education loans, scholarships, tuition costs, and financial planning for your study abroad journey with OEC India’s finance experts.",
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
    title: "Study Abroad Finance Guidance - Loans & Scholarships | OEC India",
    description:
      "Get expert advice on education loans, scholarships, tuition costs, and financial planning for your study abroad journey with OEC India’s finance experts.",
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

const FinancePage = () => {
  return <Finance />;
};

export default FinancePage;
