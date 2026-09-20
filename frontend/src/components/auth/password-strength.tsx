"use client"

import React from "react"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface PasswordStrengthProps {
  password?: string
}

export function PasswordStrength({ password = "" }: PasswordStrengthProps) {
  const reqs = [
    { label: "At least 8 characters", valid: password.length >= 8 },
    { label: "Uppercase letter", valid: /[A-Z]/.test(password) },
    { label: "Lowercase letter", valid: /[a-z]/.test(password) },
    { label: "Number", valid: /[0-9]/.test(password) }
  ]

  const strength = reqs.filter(r => r.valid).length
  
  let barColor = "bg-muted"
  if (strength === 1 || strength === 2) barColor = "bg-danger"
  if (strength === 3) barColor = "bg-warning"
  if (strength === 4) barColor = "bg-success"

  if (password.length === 0) barColor = "bg-surface-elevated"

  return (
    <div className="flex flex-col space-y-2 mt-2">
      {/* Strength Bar */}
      <div className="h-1.5 w-full bg-surface-elevated rounded-full overflow-hidden flex">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={cn(
              "h-full flex-1 transition-all duration-300",
              level <= strength ? barColor : "bg-transparent",
              level > 1 && "border-l border-background/20"
            )}
          />
        ))}
      </div>
      
      {/* Requirements List */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        {reqs.map((req, idx) => (
          <div 
            key={idx} 
            className={cn(
              "flex items-center gap-1.5 transition-colors",
              password.length === 0 ? "text-muted" : req.valid ? "text-success" : "text-muted"
            )}
          >
            {password.length > 0 && req.valid ? (
              <Check className="h-3 w-3" />
            ) : (
              <X className={cn("h-3 w-3", password.length > 0 ? "text-danger" : "opacity-50")} />
            )}
            <span>{req.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
