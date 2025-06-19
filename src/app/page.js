import Hero from "@/components/sections/Hero";
import Events from "@/components/sections/Events";
import Testimonials from "@/components/sections/Testimonials";
import Universities from "@/components/sections/Universities";
import SmartFeatures from "@/components/sections/SmartFeatures";
import ExplorePremium from "@/components/sections/ExplorePremium";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <Universities />
      <SmartFeatures />
      <ExplorePremium />
      <Events />
      <Testimonials />
      <FloatingCTA />
    </div>
  );
}