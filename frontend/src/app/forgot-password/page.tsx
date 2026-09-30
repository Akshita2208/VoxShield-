"use client"

import React, { useState } from "react"
import Link from "next/link"
import { AuthLayout } from "@/components/auth/auth-layout"
import { AuthCard } from "@/components/auth/auth-card"
import { AuthInput } from "@/components/auth/auth-input"
import { AuthStatus } from "@/components/auth/auth-status"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MailCheck } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ type: "error" | "success", message: string } | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus(null)

    if (!email.trim() || !email.includes("@")) {
      setStatus({ type: "error", message: "Please enter a valid email address." })
      return
    }

    // UI Simulation only
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <AuthLayout>
        <AuthCard title="Check your inbox">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center text-success border border-success/20">
              <MailCheck className="h-8 w-8" />
            </div>
            
            <p className="text-muted leading-relaxed">
              You'll receive password reset instructions if an account exists for <span className="text-foreground font-medium">{email}</span>.
            </p>
            
            <Link href="/login" className="w-full">
              <Button variant="primary" className="w-full">
                Back to Sign In
              </Button>
            </Link>
          </div>
        </AuthCard>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout>
      <AuthCard 
        title="Reset Your Password" 
        description="Enter your email and we'll help you regain access to your account."
      >
        <AuthStatus {...(status || { type: "error", message: "" })} />
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <AuthInput
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          
          <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending Link..." : "Send Reset Link"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Link 
            href="/login" 
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Sign In
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  )
}
