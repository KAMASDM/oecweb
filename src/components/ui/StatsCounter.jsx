// src/components/ui/StatsCounter.jsx
'use client'
import React, { useState, useEffect, useRef } from 'react'

export default function StatsCounter({ 
  target, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className = '' 
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const countRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          startCounting()
        }
      },
      { threshold: 0.1 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const startCounting = () => {
    const increment = target / (duration / 16) // 60fps
    let currentCount = 0

    const timer = setInterval(() => {
      currentCount += increment
      if (currentCount >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(currentCount))
      }
    }, 16)
  }

  return (
    <span ref={countRef} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}