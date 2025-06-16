// src/components/tools/CostCalculator.jsx
'use client'
import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { Calculator, IndianRupee } from 'lucide-react'
import { calculateCosts } from '@/lib/utils'

export default function CostCalculator() {
  const [formData, setFormData] = useState({
    country: '',
    program: ''
  })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const countryOptions = [
    { value: 'usa', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' },
    { value: 'germany', label: 'Germany' },
  ]

  const programOptions = [
    { value: 'bachelor', label: "Bachelor's Degree" },
    { value: 'master', label: "Master's Degree" },
    { value: 'phd', label: 'PhD' },
  ]

  const handleCalculate = async () => {
    if (!formData.country || !formData.program) {
      alert('Please fill all fields')
      return
    }

    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const costs = calculateCosts(formData.country, formData.program)
      setResult(costs)
      setLoading(false)
    }, 1000)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setResult(null) // Clear results when inputs change
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary-500" />
          Study Abroad Cost Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select
          label="Destination Country"
          options={countryOptions}
          value={formData.country}
          onChange={(e) => handleInputChange('country', e.target.value)}
          placeholder="Select Country"
        />
        
        <Select
          label="Program Level"
          options={programOptions}
          value={formData.program}
          onChange={(e) => handleInputChange('program', e.target.value)}
          placeholder="Select Program"
        />
        
        <Button 
          onClick={handleCalculate} 
          className="w-full"
          loading={loading}
          disabled={!formData.country || !formData.program}
        >
          Calculate Cost
        </Button>
        
        {result && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <IndianRupee className="h-4 w-4" />
              Estimated Total Cost
            </h4>
            <div className="space-y-1 text-sm">
              <p><strong>₹{result.totalCost} Lakhs</strong> (Total)</p>
              <p>Annual Cost: ₹{result.annualCost} Lakhs</p>
              <p>Duration: {result.duration} years</p>
              <p className="text-xs text-gray-600 mt-2">*Includes tuition and living expenses</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}