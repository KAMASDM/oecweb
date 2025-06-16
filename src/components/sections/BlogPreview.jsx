// src/components/sections/BlogPreview.jsx
import React from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Calendar, User, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BlogPreview() {
  const articles = [
    {
      id: 1,
      title: 'Complete Guide to US Student Visa Interview 2025',
      excerpt: 'Essential tips and strategies for acing your F-1 visa interview, including common questions and expert advice from former visa officers.',
      author: 'Rajesh Mehta',
      date: 'December 15, 2024',
      readTime: '8 min read',
      tags: ['USA', 'Visa', 'Interview Tips'],
      featured: true
    },
    {
      id: 2,
      title: 'UK Graduate Visa Changes: What Students Need to Know',
      excerpt: 'Latest updates on the UK Graduate visa route, new requirements, and how these changes affect international students.',
      author: 'Priya Sharma',
      date: 'December 10, 2024',
      readTime: '6 min read',
      tags: ['UK', 'Graduate Visa', 'Policy Update']
    },
    {
      id: 3,
      title: 'Top 10 Scholarships for Indian Students in 2025',
      excerpt: 'Comprehensive list of merit-based and need-based scholarships available for Indian students, including application deadlines.',
      author: 'Dr. Vikram Gupta',
      date: 'November 28, 2024',
      readTime: '12 min read',
      tags: ['Scholarships', 'Financial Aid', 'Application Tips']
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, requirements, and opportunities in international education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-1">
                <div className="bg-white p-6 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Featured
                    </span>
                    {articles[0].tags.map((tag) => (
                      <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {articles[0].title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {articles[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {articles[0].date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {articles[0].readTime}
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="group-hover:bg-primary-50 group-hover:text-primary-600">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Other Articles */}
          <div className="space-y-6">
            {articles.slice(1).map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/resources">
              View All Resources
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
