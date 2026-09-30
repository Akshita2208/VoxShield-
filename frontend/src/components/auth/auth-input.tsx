"use client"

import React, { useState, forwardRef } from "react"
import { GlassInput } from "@/components/ui/inputs"
import { Eye, EyeOff } from "lucide-react"

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, error, type = "text", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    
    const isPassword = type === "password"
    const inputType = isPassword ? (showPassword ? "text" : "password") : type

    return (
      <div className="flex flex-col space-y-1.5 w-full">
        <label className="text-sm font-medium text-foreground">
          {label}
        </label>
        <div className="relative">
          <GlassInput
            type={inputType}
            ref={ref}
            error={!!error}
            className={isPassword ? "pr-10" : ""}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          )}
        </div>
        {error && (
          <p className="text-xs text-danger font-medium animate-in fade-in slide-in-from-top-1">
            {error}
          </p>
        )}
      </div>
    )
  }
)

AuthInput.displayName = "AuthInput"
