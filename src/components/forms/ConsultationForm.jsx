// src/components/forms/ConsultationForm.jsx
'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { Send, CheckCircle } from 'lucide-react'

export default function ConsultationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const countryOptions = [
    { value: 'usa', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' },
    { value: 'germany', label: 'Germany' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'other', label: 'Other/Undecided' },
  ]

  const studyLevelOptions = [
    { value: 'undergraduate', label: 'Undergraduate' },
    { value: 'masters', label: 'Masters' },
    { value: 'phd', label: 'PhD' },
    { value: 'diploma', label: 'Diploma/Certificate' },
  ]

  const intakeOptions = [
    { value: 'fall-2025', label: 'Fall 2025' },
    { value: 'spring-2026', label: 'Spring 2026' },
    { value: 'fall-2026', label: 'Fall 2026' },
    { value: 'spring-2027', label: 'Spring 2027' },
  ]

  const fieldOptions = [
    { value: 'engineering', label: 'Engineering' },
    { value: 'computer-science', label: 'Computer Science' },
    { value: 'business', label: 'Business & Management' },
    { value: 'medicine', label: 'Medicine & Healthcare' },
    { value: 'arts', label: 'Arts & Humanities' },
    { value: 'social-sciences', label: 'Social Sciences' },
    { value: 'natural-sciences', label: 'Natural Sciences' },
    { value: 'other', label: 'Other' },
  ]

  const budgetOptions = [
    { value: '10-20', label: '₹10-20 Lakhs' },
    { value: '20-40', label: '₹20-40 Lakhs' },
    { value: '40-60', label: '₹40-60 Lakhs' },
    { value: '60+', label: '₹60+ Lakhs' },
    { value: 'scholarship', label: 'Looking for Scholarships' },
  ]

  const contactMethodOptions = [
    { value: 'phone', label: 'Phone Call' },
    { value: 'whatsapp', label: 'WhatsApp Call' },
    { value: 'video', label: 'Video Call (Zoom/Teams)' },
    { value: 'office', label: 'In-Person at Office' },
  ]

  const timeOptions = [
    { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 4 PM)' },
    { value: 'evening', label: 'Evening (4 PM - 8 PM)' },
    { value: 'weekend', label: 'Weekend' },
  ]

  const onSubmit = async (data) => {
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', data)
      setIsSubmitted(true)
      setLoading(false)
      reset()
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">
            We have received your consultation request. Our counselor will contact you within 24 hours to schedule your free consultation session.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Book Your Free Consultation</CardTitle>
        <p className="text-gray-600">
          Fill out the form below and our expert counselors will contact you within 24 hours to schedule your personalized consultation session.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name *"
              {...register('firstName', { required: 'First name is required' })}
              error={errors.firstName?.message}
            />
            <Input
              label="Last Name *"
              {...register('lastName', { required: 'Last name is required' })}
              error={errors.lastName?.message}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Email Address *"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
              error={errors.email?.message}
            />
            <Input
              label="Phone Number *"
              type="tel"
              {...register('phone', { required: 'Phone number is required' })}
              error={errors.phone?.message}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Current City"
              {...register('city')}
              placeholder="e.g., Mumbai, Delhi, Bangalore"
            />
            <Select
              label="Preferred Destination"
              options={countryOptions}
              {...register('destination')}
            />
          </div>

          {/* Academic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Level of Study"
              options={studyLevelOptions}
              {...register('studyLevel')}
            />
            <Select
              label="Preferred Intake"
              options={intakeOptions}
              {...register('intake')}
            />
          </div>

          <Select
            label="Field of Interest"
            options={fieldOptions}
            {...register('field')}
          />

          <Input
            label="Current Education"
            {...register('education')}
            placeholder="e.g., 12th Grade, B.Tech Computer Science, MBA"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Academic Score"
              {...register('academicScore')}
              placeholder="e.g., 85%, 8.5 CGPA"
            />
            <Input
              label="English/Test Scores"
              {...register('testScores')}
              placeholder="e.g., IELTS 7.0, GRE 320, Not taken yet"
            />
          </div>

          <Select
            label="Budget Range (Total)"
            options={budgetOptions}
            {...register('budget')}
          />

          {/* Additional Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specific Questions/Goals
              </label>
              <textarea
                {...register('questions')}
                rows={4}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Tell us about your specific goals, concerns, or questions. This helps us prepare for your consultation."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Preferred Contact Method"
                options={contactMethodOptions}
                {...register('contactMethod')}
              />
              <Select
                label="Preferred Contact Time"
                options={timeOptions}
                {...register('contactTime')}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            loading={loading}
          >
            <Send className="h-4 w-4 mr-2" />
            Book Free Consultation
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}