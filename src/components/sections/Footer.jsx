// src/components/sections/Footer.jsx
import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    services: [
      { name: 'University Selection', href: '/services' },
      { name: 'Application Support', href: '/services' },
      { name: 'Visa Assistance', href: '/services' },
      { name: 'Financial Planning', href: '/services' },
      { name: 'Pre-Departure Support', href: '/services' },
      { name: 'Post-Arrival Support', href: '/services' },
      { name: 'Career Guidance', href: '/services' },
      { name: 'Alumni Network', href: '/services' },
    ],
    destinations: [
      { name: 'Study in USA', href: '/countries' },
      { name: 'Study in UK', href: '/countries' },
      { name: 'Study in Canada', href: '/countries' },
      { name: 'Study in Australia', href: '/countries' },
      { name: 'Study in Germany', href: '/countries' },
      { name: 'Study in Singapore', href: '/countries' },
      { name: 'Study in Ireland', href: '/countries' },
      { name: 'Study in New Zealand', href: '/countries' },
    ],
    resources: [
      { name: 'University Rankings', href: '/resources' },
      { name: 'Scholarship Database', href: '/resources' },
      { name: 'Cost Calculators', href: '/resources' },
      { name: 'Eligibility Checker', href: '/resources' },
      { name: 'Success Stories', href: '/success-stories' },
      { name: 'Blog & Articles', href: '/resources' },
      { name: 'Download Center', href: '/resources' },
      { name: 'FAQ', href: '/resources' },
    ],
    contact: [
      { name: 'Book Free Consultation', href: '/contact' },
      { name: 'Office Locations', href: '/contact' },
      { name: 'Working Hours', href: '/contact' },
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' },
    { icon: Twitter, href: '#', name: 'Twitter' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4">
              OEC India
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Your trusted partner for international education with 10 years of experience and 2,000+ successful placements.
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Established:</strong> 2015</p>
              <p><strong>Students Placed:</strong> 2,000+</p>
              <p><strong>Countries:</strong> 15+</p>
              <p><strong>Success Rate:</strong> 95%</p>
            </div>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerSections.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Study Destinations</h4>
            <ul className="space-y-2">
              {footerSections.destinations.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerSections.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Head Office: Mumbai</p>
                  <p className="text-gray-400">123 Education Hub, MG Road<br />Andheri East, Mumbai 400069</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <span>info@oecindia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-red-400" />
                <div>
                  <p className="font-medium text-red-400">Emergency: +91 98765 43212</p>
                </div>
              </div>
            </div>
            <ul className="space-y-2 mt-4">
              {footerSections.contact.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} OEC India. All rights reserved. |{' '}
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link> |{' '}
            <Link href="/terms" className="hover:text-white">Terms of Service</Link> |{' '}
            <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link> |{' '}
            <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
          </p>
          <p className="mt-2">
            Registered Education Consultant | ICEF Certified | British Council Partner | NAFSA Member
          </p>
        </div>
      </div>
    </footer>
  )
}
