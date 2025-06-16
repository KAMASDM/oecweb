// src/components/sections/ServicesPreview.jsx
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { GraduationCap, FileText, Passport, Calculator, Plane, HeadphonesIcon } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPreview() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Course Selection & University Matching',
      description: 'AI-powered matching system to find the perfect university and program based on your goals, budget, and academic background.',
      features: ['Personalized university shortlisting', 'Program finder with career outcomes', 'Budget optimization strategies']
    },
    {
      icon: FileText,
      title: 'Application Support',
      description: 'Complete application assistance with document preparation, essay writing, and interview coaching for maximum success.',
      features: ['Step-by-step application timeline', 'Professional essay writing workshops', 'Mock interview sessions']
    },
    {
      icon: Passport,
      title: 'Visa & Immigration',
      description: 'Expert visa guidance with our 95% success rate, including document preparation and mock visa interviews.',
      features: ['Country-specific visa guidance', 'Document checklist and review', 'Mock visa interview preparation']
    },
    {
      icon: Calculator,
      title: 'Financial Planning',
      description: 'Comprehensive financial guidance including education loans, scholarship applications, and cost optimization.',
      features: ['Education loan partnerships', 'Scholarship database access', 'ROI analysis and projections']
    },
    {
      icon: Plane,
      title: 'Pre-Departure Support',
      description: 'Complete preparation including accommodation, travel arrangements, and comprehensive cultural orientation.',
      features: ['Accommodation assistance', 'Travel planning guidance', 'Cultural orientation sessions']
    },
    {
      icon: HeadphonesIcon,
      title: 'Post-Arrival Support',
      description: 'Continued support after you reach your destination, including academic guidance and emergency assistance.',
      features: ['24/7 emergency support', 'Academic performance monitoring', 'Career guidance and placement']
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Support for Your Study Abroad Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From university selection to graduation support, we're with you every step of the way
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}