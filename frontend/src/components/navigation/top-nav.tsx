"use client"

import * as React from "react"
import Link from "next/link"
import { VoxLogo } from "../ui/vox-logo"
import { ThemeToggle } from "../ui/theme-toggle"
import { ShieldCheck, Activity, Search, Shield, Clock, ShieldAlert, User } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: ShieldCheck },
  { label: "Live Protection", href: "/live", icon: Activity },
  { label: "Scanner", href: "/scanner", icon: Search },
  { label: "Identity", href: "/identity", icon: Shield },
  { label: "Threats", href: "/threats", icon: ShieldAlert }, 
  { label: "History", href: "/history", icon: Clock },
  { label: "Design System", href: "/design-system", icon: User },
]

export function TopNav() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 w-full hidden lg:block transition-all duration-300",
        scrolled 
          ? "glass-2 border-b shadow-sm" 
          : "bg-background/50 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <VoxLogo />
          </Link>
          <nav className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="text-sm font-medium text-secondary hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="h-8 w-8 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-foreground font-semibold">
            US
          </div>
        </div>
      </div>
    </header>
  )
}
