/ src/lib/constants.js
export const SITE_CONFIG = {
  name: "OEC India",
  description: "Your trusted partner for world-class education abroad with 10 years of expertise and 2,000+ successful placements.",
  url: "https://oecindia.com",
  ogImage: "https://oecindia.com/og.jpg",
  links: {
    twitter: "https://twitter.com/oecindia",
    linkedin: "https://linkedin.com/company/oecindia",
    facebook: "https://facebook.com/oecindia",
    instagram: "https://instagram.com/oecindia",
    youtube: "https://youtube.com/@oecindia",
  },
}

export const NAVIGATION_ITEMS = [
  { name: 'Services', href: '/services' },
  { name: 'Study Destinations', href: '/countries' },
  { name: 'About Us', href: '/about' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
]

export const COUNTRIES = [
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    universities: '4,000+',
    cost: '$25-60L',
    description: "World's largest higher education system with unparalleled research opportunities",
    topUniversities: ['Harvard', 'MIT', 'Stanford', 'Yale', 'Princeton', 'Columbia'],
    workOpportunities: 'F-1 OPT (1-3 years), H-1B visa pathway',
    benefits: ['Diverse academic programs', 'Research opportunities', 'Global recognition', 'Strong alumni networks'],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    universities: '130+',
    cost: '$20-35L',
    description: "Home to world's oldest universities with rich academic traditions",
    topUniversities: ['Oxford', 'Cambridge', 'Imperial College', 'UCL', 'LSE', 'Edinburgh'],
    workOpportunities: 'Graduate visa (2 years), skilled worker visa',
    benefits: ['Shorter program duration', 'Cultural proximity', 'Gateway to Europe', 'Prestigious degrees'],
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    universities: '100+',
    cost: '$15-25L',
    description: 'Welcoming immigration policies with high-quality education and excellent quality of life',
    topUniversities: ['University of Toronto', 'UBC', 'McGill', 'Waterloo', 'McMaster'],
    workOpportunities: 'PGWP (up to 3 years), express entry for PR',
    benefits: ['Post-graduation work permits', 'Pathway to permanent residency', 'Affordable education', 'Safe environment'],
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    universities: '40+',
    cost: '$18-30L',
    description: 'High-quality education with excellent climate and multicultural environment',
    topUniversities: ['University of Melbourne', 'ANU', 'University of Sydney', 'UNSW', 'Monash'],
    workOpportunities: 'Post-study work visa (2-4 years), skilled migration',
    benefits: ['High quality of life', 'Research opportunities', 'Diverse culture', 'Excellent climate'],
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    universities: '400+',
    cost: '$5-12L',
    description: 'Tuition-free education at public universities with strong industry connections',
    topUniversities: ['TU Munich', 'Heidelberg', 'LMU Munich', 'TU Berlin', 'RWTH Aachen'],
    workOpportunities: '18-month job search visa, EU Blue Card',
    benefits: ['Low or no tuition fees', 'Strong economy', 'Central location in Europe', 'Excellent research facilities'],
  },
]

export const TRUST_INDICATORS = [
  { number: '2000+', label: 'Students Placed' },
  { number: '95%', label: 'Visa Success Rate' },
  { number: '500+', label: 'University Partners' },
  { number: '10', label: 'Years Experience' },
]

export const UNIVERSITY_LOGOS = [
  '🎓 Harvard University',
  '🎓 Oxford University', 
  '🎓 MIT',
  '🎓 University of Toronto',
  '🎓 University of Melbourne',
  '🎓 Technical University Munich',
]

// src/components/ui/Button.jsx
import React from "react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const buttonVariants = {
  variant: {
    default: "bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 shadow-colored hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
    ghost: "text-primary-500 hover:bg-primary-50",
    gradient: "bg-gradient-to-r from-primary-500 to-purple-600 text-white hover:from-primary-600 hover:to-purple-700 shadow-lg hover:shadow-xl",
  },
  size: {
    default: "h-12 px-6 py-3",
    sm: "h-9 px-4 text-sm",
    lg: "h-14 px-8 text-base",
    xl: "h-16 px-10 text-lg",
    icon: "h-10 w-10",
  },
}

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  loading = false, 
  children, 
  disabled, 
  ...props 
}, ref) => {
  const variantClasses = buttonVariants.variant[variant] || buttonVariants.variant.default
  const sizeClasses = buttonVariants.size[size] || buttonVariants.size.default
  
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 duration-200",
        variantClasses,
        sizeClasses,
        className
      )}
      ref={ref}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  )
})
Button.displayName = "Button"

export { Button }
