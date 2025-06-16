// src/components/forms/MultiStepForm.jsx
'use client'
import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { 
  ChevronRight, 
  ChevronLeft, 
  Check,
  User,
  GraduationCap,
  MapPin,
  DollarSign,
  Send
} from 'lucide-react'

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    
    // Academic Info
    currentEducation: '',
    academicScore: '',
    testScores: '',
    studyLevel: '',
    fieldOfInterest: '',
    
    // Preferences
    preferredCountries: [],
    budget: '',
    intake: '',
    
    // Additional
    specificGoals: '',
    contactMethod: '',
    contactTime: ''
  })

  const totalSteps = 4

  const steps = [
    {
      id: 1,
      title: 'Personal Information',
      icon: User,
      description: 'Let us know who you are'
    },
    {
      id: 2,
      title: 'Academic Background',
      icon: GraduationCap,
      description: 'Tell us about your education'
    },
    {
      id: 3,
      title: 'Study Preferences',
      icon: MapPin,
      description: 'Where do you want to study?'
    },
    {
      id: 4,
      title: 'Goals & Contact',
      icon: DollarSign,
      description: 'Final details and preferences'
    }
  ]

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
    alert('Thank you! We will contact you within 24 hours.')
  }

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone
      case 2:
        return formData.currentEducation && formData.academicScore
      case 3:
        return formData.studyLevel && formData.budget
      case 4:
        return true
      default:
        return false
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const StepIcon = step.icon
            const isCompleted = currentStep > step.id
            const isCurrent = currentStep === step.id
            
            return (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isCompleted 
                      ? 'bg-green-500 text-white'
                      : isCurrent 
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                  }`}>
                    {isCompleted ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      <StepIcon className="h-6 w-6" />
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p className={`text-sm font-medium ${
                      isCurrent ? 'text-primary-600' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-400 hidden sm:block">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 transition-all duration-200 ${
                    currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>

      {/* Form Content */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            Step {currentStep} of {totalSteps}: {steps[currentStep - 1].title}
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="First Name *"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    required
                  />
                  <Input
                    label="Last Name *"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Email Address *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    required
                  />
                  <Input
                    label="Phone Number *"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    required
                  />
                </div>
                <Input
                  label="Current City"
                  value={formData.city}
                  onChange={(e) => updateFormData('city', e.target.value)}
                  placeholder="e.g., Mumbai, Delhi, Bangalore"
                />
              </div>
            )}

            {/* Step 2: Academic Background */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <Input
                  label="Current Education *"
                  value={formData.currentEducation}
                  onChange={(e) => updateFormData('currentEducation', e.target.value)}
                  placeholder="e.g., 12th Grade, B.Tech Computer Science, MBA"
                  required
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Academic Score *"
                    value={formData.academicScore}
                    onChange={(e) => updateFormData('academicScore', e.target.value)}
                    placeholder="e.g., 85%, 8.5 CGPA"
                    required
                  />
                  <Input
                    label="English/Test Scores"
                    value={formData.testScores}
                    onChange={(e) => updateFormData('testScores', e.target.value)}
                    placeholder="e.g., IELTS 7.0, GRE 320, Not taken yet"
                  />
                </div>
                <Select
                  label="Level of Study"
                  options={[
                    { value: 'undergraduate', label: 'Undergraduate' },
                    { value: 'masters', label: 'Masters' },
                    { value: 'phd', label: 'PhD' },
                    { value: 'diploma', label: 'Diploma/Certificate' }
                  ]}
                  value={formData.studyLevel}
                  onChange={(e) => updateFormData('studyLevel', e.target.value)}
                />
                <Select
                  label="Field of Interest"
                  options={[
                    { value: 'engineering', label: 'Engineering' },
                    { value: 'computer-science', label: 'Computer Science' },
                    { value: 'business', label: 'Business & Management' },
                    { value: 'medicine', label: 'Medicine & Healthcare' },
                    { value: 'arts', label: 'Arts & Humanities' },
                    { value: 'social-sciences', label: 'Social Sciences' },
                    { value: 'natural-sciences', label: 'Natural Sciences' },
                    { value: 'other', label: 'Other' }
                  ]}
                  value={formData.fieldOfInterest}
                  onChange={(e) => updateFormData('fieldOfInterest', e.target.value)}
                />
              </div>
            )}

            {/* Step 3: Study Preferences */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Study Destinations (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Singapore'].map((country) => (
                      <label key={country} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.preferredCountries.includes(country)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              updateFormData('preferredCountries', [...formData.preferredCountries, country])
                            } else {
                              updateFormData('preferredCountries', formData.preferredCountries.filter(c => c !== country))
                            }
                          }}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm">{country}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    label="Budget Range (Total) *"
                    options={[
                      { value: '10-20', label: '₹10-20 Lakhs' },
                      { value: '20-40', label: '₹20-40 Lakhs' },
                      { value: '40-60', label: '₹40-60 Lakhs' },
                      { value: '60+', label: '₹60+ Lakhs' },
                      { value: 'scholarship', label: 'Looking for Scholarships' }
                    ]}
                    value={formData.budget}
                    onChange={(e) => updateFormData('budget', e.target.value)}
                    required
                  />
                  <Select
                    label="Preferred Intake"
                    options={[
                      { value: 'fall-2025', label: 'Fall 2025' },
                      { value: 'spring-2026', label: 'Spring 2026' },
                      { value: 'fall-2026', label: 'Fall 2026' },
                      { value: 'spring-2027', label: 'Spring 2027' }
                    ]}
                    value={formData.intake}
                    onChange={(e) => updateFormData('intake', e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Goals & Contact Preferences */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Goals & Questions
                  </label>
                  <textarea
                    value={formData.specificGoals}
                    onChange={(e) => updateFormData('specificGoals', e.target.value)}
                    rows={4}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us about your specific goals, concerns, or questions. This helps us prepare for your consultation."
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    label="Preferred Contact Method"
                    options={[
                      { value: 'phone', label: 'Phone Call' },
                      { value: 'whatsapp', label: 'WhatsApp Call' },
                      { value: 'video', label: 'Video Call (Zoom/Teams)' },
                      { value: 'office', label: 'In-Person at Office' }
                    ]}
                    value={formData.contactMethod}
                    onChange={(e) => updateFormData('contactMethod', e.target.value)}
                  />
                  <Select
                    label="Preferred Contact Time"
                    options={[
                      { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
                      { value: 'afternoon', label: 'Afternoon (12 PM - 4 PM)' },
                      { value: 'evening', label: 'Evening (4 PM - 8 PM)' },
                      { value: 'weekend', label: 'Weekend' }
                    ]}
                    value={formData.contactTime}
                    onChange={(e) => updateFormData('contactTime', e.target.value)}
                  />
                </div>

                {/* Summary */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Your Information Summary</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Phone:</strong> {formData.phone}</p>
                      <p><strong>Education:</strong> {formData.currentEducation}</p>
                    </div>
                    <div>
                      <p><strong>Study Level:</strong> {formData.studyLevel}</p>
                      <p><strong>Field:</strong> {formData.fieldOfInterest}</p>
                      <p><strong>Budget:</strong> {formData.budget}</p>
                      <p><strong>Countries:</strong> {formData.preferredCountries.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid(currentStep)}
                  className="flex items-center"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="flex items-center"
                  disabled={!isStepValid(currentStep)}
                >
                  Submit Application
                  <Send className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
