// src/app/page.js - Updated complete home page
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import UniversityLogos from '@/components/sections/UniversityLogos'
import ServicesPreview from '@/components/sections/ServicesPreview'
import QuickTools from '@/components/sections/QuickTools'
import CountriesGrid from '@/components/sections/CountriesGrid'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import BlogPreview from '@/components/sections/BlogPreview'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'
import FloatingCTA from '@/components/ui/FloatingCTA'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <UniversityLogos />
      <ServicesPreview />
      <QuickTools />
      <CountriesGrid />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}