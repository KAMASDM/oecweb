import Hero from "@/components/sections/Hero";
import Events from "@/components/sections/Events";
import Testimonials from "@/components/sections/Testimonials";
import Universities from "@/components/sections/Universities";
import SmartFeatures from "@/components/sections/SmartFeatures";
import ExplorePremium from "@/components/sections/ExplorePremium";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function Home() {
  
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OEC India | Overseas Education Consultants in Vadodara",
    url: "https://oecindia.com",
    logo: "https://oecindia.com/oec.png",
    sameAs: [
      "https://www.facebook.com/oecbaroda",
      "https://www.instagram.com/oecindia",
      "https://x.com/oec_india",
    ],
    description:
      "OEC India helps students achieve their dream of studying abroad. Get expert guidance on university selection, visas, scholarships & more for the UK, USA, Canada, Australia & Europe.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <div>
        <Hero />
        <Universities />
        <SmartFeatures />
        <ExplorePremium />
        <Events />
        <Testimonials />
        <FloatingCTA />
      </div>
    </>
  );
}
