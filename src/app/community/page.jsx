import React from "react";
import Community from "@/components/community/Community";

export const metadata = {
  title: "Study Abroad Community - Connect & Learn | OEC India",
  description:
    "Join the OEC India Study Abroad Community to connect with fellow aspirants, share experiences, and get expert guidance on universities, visas, and global education trends.",
  openGraph: {
    title: "Study Abroad Community - Connect & Learn | OEC India",
    description:
      "Join the OEC India Study Abroad Community to connect with fellow aspirants, share experiences, and get expert guidance on universities, visas, and global education trends.",
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
    title: "Study Abroad Community - Connect & Learn | OEC India",
    description:
      "Join the OEC India Study Abroad Community to connect with fellow aspirants, share experiences, and get expert guidance on universities, visas, and global education trends.",
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

const Communitypage = () => {
  return <Community />;
};

export default Communitypage;
