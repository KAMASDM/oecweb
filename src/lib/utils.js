// src/lib/utils.js
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount, currency = 'INR') {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function calculateROI(totalCost, currentSalary, expectedSalary) {
  const salaryIncrease = expectedSalary - currentSalary
  const paybackPeriod = totalCost / salaryIncrease
  const tenYearROI = ((salaryIncrease * 10) / totalCost) * 100

  return {
    salaryIncrease,
    paybackPeriod,
    tenYearROI,
  }
}

export function calculateCosts(country, program) {
  const costs = {
    usa: { bachelor: 30, master: 40, phd: 25 },
    uk: { bachelor: 25, master: 30, phd: 20 },
    canada: { bachelor: 18, master: 25, phd: 15 },
    australia: { bachelor: 22, master: 28, phd: 18 },
    germany: { bachelor: 8, master: 12, phd: 5 }
  }
  
  const annualCost = costs[country]?.[program] || 0
  const duration = program === 'bachelor' ? 3 : program === 'master' ? 2 : 4
  const totalCost = annualCost * duration
  
  return { annualCost, duration, totalCost }
}
