"use client"

import React, { useState } from "react"
import Link from "next/link"
import { AuthLayout } from "@/components/auth/auth-layout"
import { AuthCard } from "@/components/auth/auth-card"
import { AuthInput } from "@/components/auth/auth-input"
import { AuthDivider } from "@/components/auth/auth-divider"
import { AuthStatus } from "@/components/auth/auth-status"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ type: "error" | "success", message: string } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus(null)

    if (!email) {
      setStatus({ type: "error", message: "Please enter a valid email address." })
      return
    }
    if (!password) {
      setStatus({ type: "error", message: "Please enter your password." })
      return
    }

    // UI Simulation only
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setStatus({ type: "error", message: "Authentication failed. (UI Simulation)" })
    }, 1500)
  }

  return (
    <AuthLayout>
      <AuthCard 
        title="Welcome Back" 
        description="Sign in to continue protecting your conversations."
      >
        <AuthStatus {...(status || { type: "error", message: "" })} />
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <AuthInput
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          
          <AuthInput
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-muted hover:text-foreground transition-colors cursor-pointer">
              <input type="checkbox" className="rounded border-border bg-background/50 text-primary focus:ring-primary" disabled={isLoading} />
              Remember me
            </label>
            <Link href="/forgot-password" className="text-primary font-medium hover:underline">
              Forgot password?
            </Link>
          </div>
          
          <Button type="submit" variant="primary" className="w-full mt-2" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <AuthDivider />

        <Button variant="outline" className="w-full gap-2" disabled={isLoading}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
              fill="#EA4335"
            />
            <path
              d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
              fill="#4285F4"
            />
            <path
              d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
              fill="#FBBC05"
            />
            <path
              d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.26538 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
              fill="#34A853"
            />
          </svg>
          Continue with Google
        </Button>

        <p className="text-center text-sm text-muted mt-6">
          Don't have an account?{" "}
          <Link href="/signup" className="text-primary font-medium hover:underline">
            Create Account
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  )
}
