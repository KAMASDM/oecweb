// src/app/contact/page.js - Complete Contact Page
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import MultiStepForm from '@/components/forms/MultiStepForm'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - Book Free Consultation | OEC India',
  description: 'Ready to start your study abroad journey? Contact OEC India for expert guidance. Book your free consultation with our experienced counselors.',
  keywords: ['contact study abroad consultant', 'free consultation', 'education counseling', 'study abroad guidance'],
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-500 to-secondary-600 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Ready to start your international education journey? Get in touch with our expert counselors for personalized guidance
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-soft text-center">
              <Phone className="h-8 w-8 text-primary-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-2">+91 98765 43210</p>
              <p className="text-gray-500 text-xs">Mon-Sat: 9 AM - 8 PM</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft text-center">
              <MessageCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm mb-2">+91 98765 43210</p>
              <p className="text-gray-500 text-xs">24/7 Quick Support</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft text-center">
              <Mail className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-2">info@oecindia.com</p>
              <p className="text-gray-500 text-xs">Response within 2 hours</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft text-center">
              <Clock className="h-8 w-8 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Emergency</h3>
              <p className="text-gray-600 text-sm mb-2">+91 98765 43212</p>
              <p className="text-gray-500 text-xs">24/7 for current students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Step Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tell us about your goals and we'll create a personalized plan for your study abroad journey
            </p>
          </div>
          <MultiStepForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}