import Hero from "@/components/sections/Hero";
import Universities from "@/components/sections/Universities";
import Services from "@/components/sections/Services";
import QuickTools from "@/components/sections/QuickTools";
import Countries from "@/components/sections/Countries";
import Testimonials from "@/components/sections/Testimonials";
import Blogs from "@/components/sections/Blogs";
import CTA from "@/components/sections/CTA";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <Universities />
      <Services />
      <QuickTools />
      <Countries />
      <Testimonials />
      <Blogs />
      <CTA />
      <FloatingCTA />
    </div>
  );
}