// src/components/ui/ProgressBar.jsx
'use client'
import React from 'react'

export default function ProgressBar({ 
  percentage, 
  label, 
  color = 'bg-primary-500',
  height = 'h-2',
  showPercentage = true,
  animated = true 
}) {
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {showPercentage && (
            <span className="text-sm text-gray-500">{percentage}%</span>
          )}
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full ${height}`}>
        <div 
          className={`${color} ${height} rounded-full transition-all duration-1000 ease-out ${
            animated ? 'animate-pulse' : ''
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
