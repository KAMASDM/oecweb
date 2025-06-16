// src/components/sections/UniversityLogos.jsx
import React from 'react'
import { UNIVERSITY_LOGOS } from '../../lib/constants'

export default function UniversityLogos() {
  return (
    <section className="py-16 bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg font-semibold text-gray-600 mb-8">
          Trusted by top universities worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
          {UNIVERSITY_LOGOS.map((logo, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl mb-2">{logo.split(' ')[0]}</div>
              <p className="text-sm font-medium text-gray-600">{logo.split(' ').slice(1).join(' ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
