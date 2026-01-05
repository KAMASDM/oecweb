import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import BottomNavigation from "@/components/ui/BottomNavigation";
import ICEFBadge from "@/components/ui/ICEFBadge";

export const metadata = {
  title: "OEC India - Best Overseas Education Consultants for Study Abroad",
  description: 
  "OEC India helps students achieve their dream of studying abroad. Get expert guidance on university selection, visas, scholarships & more for the UK, USA, Canada, Australia & Europe.",
  icons: {
    icon: [
      { url: "/OEC.png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    shortcut: "/OEC.png",
  },
  openGraph: {
    title: "OEC India - Best Overseas Education Consultants for Study Abroad",
    description:
      "OEC India helps students achieve their dream of studying abroad. Get expert guidance on university selection, visas, scholarships & more for the UK, USA, Canada, Australia & Europe.",
    images: [
      {
        url: "https://oecindia.com/OEC.png",
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
        url: "https://oecindia.com/OEC.png",
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
      <head>
        <meta
          name="google-site-verification"
          content="BBEJORnmYafy3WXKp8YM_vAEOoWDnJp7kh2XtH4-6LI"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '864579596089023');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=864579596089023&ev=PageView&noscript=1"
          />
        </noscript>
        {process.env.NODE_ENV === 'development' && (
          <script src="/unregister-sw.js"></script>
        )}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <BottomNavigation />
        <ICEFBadge />
      </body>
    </html>
  );
}
