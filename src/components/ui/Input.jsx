// src/components/ui/Input.jsx
import React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ 
  className, 
  type = "text", 
  label, 
  error, 
  helperText, 
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
      <input
        type={type}
        id={id}
        className={cn(
          "flex h-12 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm transition-all duration-200 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-500 focus-visible:ring-red-500",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-gray-600">{helperText}</p>
      )}
    </div>
  )
})
Input.displayName = "Input"

export { Input }