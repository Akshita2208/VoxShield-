import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export const GlassInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border bg-surface/50 px-3 py-2 text-sm text-foreground shadow-sm backdrop-blur-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
          error 
            ? "border-danger focus-visible:ring-danger" 
            : "border-border focus-visible:ring-primary",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
GlassInput.displayName = "GlassInput"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
}

export const GlassSelect = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-10 w-full rounded-md border bg-surface/50 px-3 py-2 text-sm text-foreground shadow-sm backdrop-blur-sm transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
          error 
            ? "border-danger focus-visible:ring-danger" 
            : "border-border focus-visible:ring-primary",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    )
  }
)
GlassSelect.displayName = "GlassSelect"
