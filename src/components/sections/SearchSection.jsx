// src/components/sections/SearchSection.jsx
'use client'
import React, { useState, useEffect } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Search, Filter, X } from 'lucide-react'

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    country: '',
    program: '',
    budget: ''
  })
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  // Mock data for demonstration
  const mockResults = [
    {
      id: 1,
      title: 'Computer Science at MIT',
      country: 'USA',
      type: 'Masters',
      cost: '₹50L',
      duration: '2 years',
      requirements: 'IELTS 7.0, GRE 320+',
      description: 'World-class AI and machine learning program'
    },
    {
      id: 2,
      title: 'Business Administration at Oxford',
      country: 'UK',
      type: 'MBA',
      cost: '₹40L',
      duration: '1 year',
      requirements: 'IELTS 7.5, GMAT 700+',
      description: 'Prestigious MBA program with global recognition'
    },
    // Add more mock results...
  ]

  const performSearch = async () => {
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      // Filter mock results based on search criteria
      const filteredResults = mockResults.filter(result => {
        const matchesQuery = !searchQuery || 
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.description.toLowerCase().includes(searchQuery.toLowerCase())
        
        const matchesCountry = !filters.country || result.country === filters.country
        const matchesProgram = !filters.program || result.type === filters.program
        
        return matchesQuery && matchesCountry && matchesProgram
      })
      
      setResults(filteredResults)
      setLoading(false)
    }, 1000)
  }

  const clearFilters = () => {
    setSearchQuery('')
    setFilters({ country: '', program: '', budget: '' })
    setResults([])
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Search through our database of universities and programs to find the perfect match for your goals
          </p>
        </div>

        {/* Search Interface */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Main Search */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search programs, universities, or fields..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12"
                  />
                </div>
                <Button 
                  onClick={performSearch}
                  loading={loading}
                  size="lg"
                  className="px-8"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Filters:</span>
                </div>
                
                <select
                  value={filters.country}
                  onChange={(e) => setFilters(prev => ({ ...prev, country: e.target.value }))}
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="">All Countries</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                </select>

                <select
                  value={filters.program}
                  onChange={(e) => setFilters(prev => ({ ...prev, program: e.target.value }))}
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="">All Programs</option>
                  <option value="Masters">Masters</option>
                  <option value="MBA">MBA</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="PhD">PhD</option>
                </select>

                <select
                  value={filters.budget}
                  onChange={(e) => setFilters(prev => ({ ...prev, budget: e.target.value }))}
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="">Any Budget</option>
                  <option value="low">Under ₹20L</option>
                  <option value="medium">₹20L - ₹40L</option>
                  <option value="high">Above ₹40L</option>
                </select>

                {(searchQuery || Object.values(filters).some(f => f)) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-gray-500"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-3">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-gray-300 border-t-primary-500"></div>
              <span className="text-gray-600">Searching programs...</span>
            </div>
          </div>
        )}

        {!loading && results.length > 0 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Found {results.length} programs
              </h3>
              <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm">
                <option>Sort by Relevance</option>
                <option>Sort by Cost (Low to High)</option>
                <option>Sort by Cost (High to Low)</option>
                <option>Sort by Duration</option>
              </select>
            </div>

            <div className="grid gap-6">
              {results.map((result) => (
                <Card key={result.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {result.title}
                        </h4>
                        <p className="text-gray-600 mb-2">{result.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span>📍 {result.country}</span>
                          <span>💰 {result.cost}</span>
                          <span>⏱️ {result.duration}</span>
                          <span>📋 {result.requirements}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                        <Button size="sm">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {!loading && searchQuery && results.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or contact our counselors for personalized recommendations.
            </p>
            <Button>
              Talk to a Counselor
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
