// src/components/ui/LoadingSpinner.jsx
import React from 'react'

export default function LoadingSpinner({ size = 'md', color = 'primary' }) {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  }

  const colors = {
    primary: 'text-primary-500',
    white: 'text-white',
    gray: 'text-gray-500'
  }

  return (
    <div className="flex justify-center items-center">
      <div className={`animate-spin rounded-full border-2 border-gray-200 border-t-current ${sizes[size]} ${colors[color]}`} />
    </div>
  )
}