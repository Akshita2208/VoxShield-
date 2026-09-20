"use client"

import * as React from "react"
import Link from "next/link"
import { VoxLogo } from "../ui/vox-logo"
import { ThemeToggle } from "../ui/theme-toggle"
import { Button } from "../ui/button"
import { ShieldCheck, Activity, Search, Shield, Clock, ShieldAlert, User, UserRound, LogIn, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: ShieldCheck },
  { label: "Live Protection", href: "/live", icon: Activity },
  { label: "Scanner", href: "/scanner", icon: Search },
  { label: "Identity", href: "/identity", icon: Shield },
  { label: "Threats", href: "/threats", icon: ShieldAlert }, 
  { label: "History", href: "/history", icon: Clock },
  { label: "Design System", href: "/design-system", icon: User },
]

import { usePathname } from "next/navigation"

export function TopNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [isProfileOpen, setIsProfileOpen] = React.useState(false)
  const profileRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsProfileOpen(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
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
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive ? "text-primary font-semibold" : "text-secondary hover:text-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/login">
            <Button size="sm" variant="primary">Get Protected</Button>
          </Link>
          
          <div className="relative" ref={profileRef}>
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="h-8 w-8 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-foreground hover:bg-border/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-expanded={isProfileOpen}
              aria-haspopup="true"
            >
              <UserRound className="h-4 w-4 text-secondary" />
            </button>

            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 mt-2 w-56 glass-3 border border-border rounded-xl shadow-xl overflow-hidden z-50 flex flex-col"
                >
                  <div className="px-4 py-3 border-b border-border/50">
                    <p className="text-sm font-semibold text-foreground">Account</p>
                    <p className="text-xs text-muted mt-0.5">Not signed in</p>
                  </div>
                  
                  <div className="py-1 border-b border-border/50">
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-secondary hover:text-foreground hover:bg-surface-elevated transition-colors text-left focus:outline-none focus:bg-surface-elevated">
                      <UserRound className="h-4 w-4" />
                      Profile
                    </button>
                    <Link href="/settings" className="w-full flex items-center gap-3 px-4 py-2 text-sm text-secondary hover:text-foreground hover:bg-surface-elevated transition-colors text-left focus:outline-none focus:bg-surface-elevated">
                      <Settings className="h-4 w-4" />
                      Security Settings
                    </Link>
                  </div>
                  
                  <div className="py-1">
                    <Link href="/login" className="w-full flex items-center gap-3 px-4 py-2 text-sm text-primary hover:text-primary hover:bg-surface-elevated transition-colors text-left focus:outline-none focus:bg-surface-elevated font-medium">
                      <LogIn className="h-4 w-4" />
                      Sign In
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </header>
  )
}
