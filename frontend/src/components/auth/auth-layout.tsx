"use client"

import React from "react"
import Link from "next/link"
import { VoxLogo } from "@/components/ui/vox-logo"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { ShieldCheck } from "lucide-react"

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Background patterns and gradients similar to the landing page */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      
      {/* Auth Header */}
      <header className="relative z-10 p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <VoxLogo />
        </Link>
        <ThemeToggle />
      </header>

      {/* Main Content Centered */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 w-full max-w-md mx-auto">
        {children}
      </main>
      
      {/* Subtle Security Visual in the Background */}
      <div className="fixed bottom-[-10%] left-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />
      
      {/* Auth Footer */}
      <footer className="relative z-10 p-6 text-center text-xs text-muted">
        <div className="flex items-center justify-center gap-2 mb-2 text-primary/80">
          <ShieldCheck className="h-4 w-4" />
          <span>Protected by VoxShield Security</span>
        </div>
        <p>© {new Date().getFullYear()} VoxShield. All rights reserved.</p>
      </footer>
    </div>
  )
}
