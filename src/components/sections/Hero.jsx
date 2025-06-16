// src/components/sections/Hero.jsx
'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Users, Award, Globe, Clock } from 'lucide-react'
import Link from 'next/link'
import { TRUST_INDICATORS } from '@/lib/constants'

export default function Hero() {
  const [counters, setCounters] = useState({
    students: 0,
    visa: 0,
    partners: 0,
    years: 0
  })

  useEffect(() => {
    const animateCounters = () => {
      const targets = {
        students: 2000,
        visa: 95,
        partners: 500,
        years: 10
      }

      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          students: Math.floor(targets.students * progress),
          visa: Math.floor(targets.visa * progress),
          partners: Math.floor(targets.partners * progress),
          years: Math.floor(targets.years * progress)
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters(targets)
        }
      }, increment)

      return () => clearInterval(timer)
    }

    const timer = setTimeout(animateCounters, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              From Application to Graduation:
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Your Trusted Partner
              </span>
              <br />
              for World-Class Education
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Join 2,000+ students who've successfully started their international education journey 
              with India's most trusted overseas education consultant
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button size="xl" variant="default" asChild className="bg-white text-primary-600 hover:bg-gray-100">
              <Link href="/contact" className="flex items-center gap-2">
                Book Your Free Consultation Today
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 animate-fade-in-up">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-yellow-400 mr-2" />
                <span className="text-4xl md:text-5xl font-bold">{counters.students}+</span>
              </div>
              <p className="text-blue-200">Students Placed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-yellow-400 mr-2" />
                <span className="text-4xl md:text-5xl font-bold">{counters.visa}%</span>
              </div>
              <p className="text-blue-200">Visa Success Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="h-8 w-8 text-yellow-400 mr-2" />
                <span className="text-4xl md:text-5xl font-bold">{counters.partners}+</span>
              </div>
              <p className="text-blue-200">University Partners</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-8 w-8 text-yellow-400 mr-2" />
                <span className="text-4xl md:text-5xl font-bold">{counters.years}</span>
              </div>
              <p className="text-blue-200">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L1440 120L1440 0C1440 0 1140 60 720 60C300 60 0 0 0 0L0 120Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
