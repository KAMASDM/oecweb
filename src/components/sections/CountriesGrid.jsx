// src/components/sections/CountriesGrid.jsx
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Users, DollarSign, Clock, Award } from 'lucide-react'
import Link from 'next/link'
import { COUNTRIES } from '@/lib/constants'

export default function CountriesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Study Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore world-class education opportunities across 15+ countries with detailed insights on universities, costs, and career prospects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COUNTRIES.map((country) => (
            <Card key={country.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-6 text-center">
                <div className="text-4xl mb-2">{country.flag}</div>
                <h3 className="text-2xl font-bold mb-2">{country.name}</h3>
                <p className="text-blue-100">{country.description}</p>
              </div>

              <CardContent className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-5 w-5 text-primary-500 mr-1" />
                      <span className="text-lg font-bold text-primary-600">{country.universities}</span>
                    </div>
                    <p className="text-sm text-gray-600">Universities</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <DollarSign className="h-5 w-5 text-green-500 mr-1" />
                      <span className="text-lg font-bold text-green-600">{country.cost}</span>
                    </div>
                    <p className="text-sm text-gray-600">Annual Cost</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Award className="h-4 w-4 text-yellow-500 mr-2" />
                      Top Universities
                    </h4>
                    <p className="text-sm text-gray-600">{country.topUniversities.slice(0, 3).join(', ')}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Clock className="h-4 w-4 text-blue-500 mr-2" />
                      Work Opportunities
                    </h4>
                    <p className="text-sm text-gray-600">{country.workOpportunities}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {country.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Button asChild className="w-full group-hover:scale-105 transition-transform duration-200">
                    <Link href={`/countries#${country.id}`} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/countries">
              Explore All Destinations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}