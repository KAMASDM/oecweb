// src/components/sections/DetailedServicesSection.jsx
'use client'
import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { 
  GraduationCap, 
  FileText, 
  Passport, 
  Calculator,
  Plane,
  Headphones,
  Check,
  Star,
  ArrowRight,
  Users,
  Award,
  DollarSign
} from 'lucide-react'
import { DETAILED_SERVICES } from '@/data/services'

const iconMap = {
  GraduationCap,
  FileText,
  Passport,
  Calculator,
  Plane,
  Headphones
}

export default function DetailedServicesSection() {
  const [selectedService, setSelectedService] = useState(0)
  const service = DETAILED_SERVICES[selectedService]
  const IconComponent = iconMap[service?.icon] || GraduationCap

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end support for your international education journey with proven results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-2 sticky top-24">
              {DETAILED_SERVICES.map((svc, index) => {
                const SvcIcon = iconMap[svc.icon] || GraduationCap
                return (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedService(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      selectedService === index
                        ? 'bg-primary-50 border-primary-200 border-2'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        selectedService === index ? 'bg-primary-500' : 'bg-gray-400'
                      }`}>
                        <SvcIcon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-semibold text-sm ${
                          selectedService === index ? 'text-primary-700' : 'text-gray-700'
                        }`}>
                          {svc.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {svc.shortDescription}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <p className="text-gray-600">{service.fullDescription}</p>
                    </div>
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-6 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Award className="h-5 w-5 text-green-500 mr-1" />
                      <span className="text-lg font-bold text-green-600">{service.successRate}</span>
                    </div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="h-5 w-5 text-blue-500 mr-1" />
                      <span className="text-lg font-bold text-blue-600">{service.avgScholarship}</span>
                    </div>
                    <p className="text-sm text-gray-600">Avg Scholarship</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-5 w-5 text-purple-500 mr-1" />
                      <span className="text-lg font-bold text-purple-600">500+</span>
                    </div>
                    <p className="text-sm text-gray-600">Students Helped</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">What's Included</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Our Process</h4>
                    <div className="space-y-4">
                      {service.process.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-sm text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 italic mb-2">
                        "{service.testimonial.text}"
                      </p>
                      <div className="text-xs text-gray-600">
                        <strong>{service.testimonial.name}</strong> - {service.testimonial.outcome}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1">
                    Get Started with This Service
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}