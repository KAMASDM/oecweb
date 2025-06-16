// src/components/sections/CTASection.jsx
import React from 'react'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Phone, Calendar, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Study Abroad Journey?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Join 2,000+ students who have successfully achieved their international education dreams with our expert guidance
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
              <p className="text-blue-100">Get personalized guidance from our experts</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-blue-100">Round-the-clock assistance when you need it</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
              <p className="text-blue-100">10+ years of experience, 95% success rate</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="xl" asChild className="bg-white text-primary-600 hover:bg-gray-100 font-semibold">
              <Link href="/contact" className="flex items-center">
                Book Free Consultation Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
              <Link href="tel:+919876543210" className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Call +91 98765 43210
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-blue-200 mt-6">
            🎓 No hidden fees • 📞 Free consultation • ⭐ 95% success rate • 🏆 10 years experience
          </p>
        </div>
      </div>
    </section>
  )
}