// src/components/tools/EligibilityChecker.jsx
'use client'
import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Select } from '@/components/ui/Select'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { CheckCircle, XCircle } from 'lucide-react'

export default function EligibilityChecker() {
  const [formData, setFormData] = useState({
    qualification: '',
    percentage: ''
  })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const qualificationOptions = [
    { value: '12th', label: '12th Grade' },
    { value: 'bachelor', label: "Bachelor's Degree" },
    { value: 'master', label: "Master's Degree" },
  ]

  const checkEligibility = () => {
    if (!formData.qualification || !formData.percentage) {
      alert('Please fill required fields')
      return
    }

    setLoading(true)
    
    setTimeout(() => {
      const score = parseFloat(formData.percentage)
      let eligibleCountries = []
      
      if (score >= 85) {
        eligibleCountries = ['USA (Top Universities)', 'UK (Russell Group)', 'Canada', 'Australia', 'Germany', 'Singapore']
      } else if (score >= 75) {
        eligibleCountries = ['USA (Good Universities)', 'UK', 'Canada', 'Australia', 'Germany', 'Ireland']
      } else if (score >= 65) {
        eligibleCountries = ['Canada', 'Australia', 'Germany', 'Ireland', 'New Zealand']
      } else {
        eligibleCountries = ['Germany (Some Programs)', 'Ireland', 'New Zealand']
      }
      
      setResult({ eligibleCountries, score })
      setLoading(false)
    }, 1000)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="h-6 w-6 text-green-500" />
          Eligibility Checker
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select
          label="Highest Qualification"
          options={qualificationOptions}
          value={formData.qualification}
          onChange={(e) => setFormData(prev => ({ ...prev, qualification: e.target.value }))}
          placeholder="Select Qualification"
        />
        
        <Input
          label="Percentage/CGPA"
          type="number"
          value={formData.percentage}
          onChange={(e) => setFormData(prev => ({ ...prev, percentage: e.target.value }))}
          placeholder="Enter your percentage or CGPA"
        />
        
        <Button 
          onClick={checkEligibility} 
          className="w-full"
          loading={loading}
          disabled={!formData.qualification || !formData.percentage}
        >
          Check Eligibility
        </Button>
        
        {result && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2">Eligibility Assessment</h4>
            <div className="space-y-2">
              <p className="font-medium text-green-800">You're eligible for:</p>
              <ul className="space-y-1">
                {result.eligibleCountries.map((country, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {country}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-600 mt-2">
                Recommendation: Consider test preparation to improve your options
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}