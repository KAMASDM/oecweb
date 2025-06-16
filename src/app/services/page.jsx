// src/app/services/page.js - Complete Services Page
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import DetailedServicesSection from '@/components/sections/DetailedServicesSection'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'Study Abroad Services - OEC India | Complete Education Consulting',
  description: 'Comprehensive study abroad services including university selection, application support, visa assistance, and pre-departure guidance with 95% success rate.',
  keywords: ['study abroad services', 'university application', 'visa assistance', 'education consultant', 'overseas education'],
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-500 to-secondary-600 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Comprehensive Study Abroad Services</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            End-to-end support for your international education journey, backed by 10 years of expertise and a 95% success rate
          </p>
        </div>
      </section>

      <DetailedServicesSection />
      <CTASection />
      <Footer />
    </main>
  )
}