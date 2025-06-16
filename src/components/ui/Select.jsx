// src/components/ui/Select.jsx
import React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const Select = React.forwardRef(({ 
  className, 
  label, 
  error, 
  helperText, 
  options = [], 
  placeholder = "Select an option",
  ...props 
}, ref) => {
  const id = React.useId()
  
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          className={cn(
            "flex h-12 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
      </div>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-gray-600">{helperText}</p>
      )}
    </div>
  )
})
Select.displayName = "Select"

export { Select }