import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import BottomNavigation from "@/components/ui/BottomNavigation";

export const metadata = {
  title: "OEC India - Best Overseas Education Consultants for Study Abroad",
  description:
    "OEC India helps students achieve their dream of studying abroad. Get expert guidance on university selection, visas, scholarships & more for the UK, USA, Canada, Australia & Europe.",
  icons: {
    icon: [
      { url: "/oec.png" },
      { url: "/oec.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/oec.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "OEC India - Best Overseas Education Consultants for Study Abroad",
    description:
      "OEC India helps students achieve their dream of studying abroad. Get expert guidance on university selection, visas, scholarships & more for the UK, USA, Canada, Australia & Europe.",
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
    title: "OEC India - Best Overseas Education Consultants for Study Abroad",
    description:
      "OEC India helps students achieve their dream of studying abroad. Get expert guidance on university selection, visas, scholarships & more for the UK, USA, Canada, Australia & Europe.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        {children}
        <Footer />
        <BottomNavigation />
      </body>
    </html>
  );
}
