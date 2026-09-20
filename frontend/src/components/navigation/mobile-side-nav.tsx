"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShieldCheck, Activity, Search, Shield, Clock, ShieldAlert, User, UserRound, LogIn, Settings } from "lucide-react"
import { VoxLogo } from "../ui/vox-logo"
import { IconButton, Button } from "../ui/button"
import { ThemeToggle } from "../ui/theme-toggle"
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

export function MobileSideNav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent scrolling when drawer is open and listen for Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
      document.removeEventListener("keydown", handleKeyDown)
    }
    return () => { 
      document.body.style.overflow = "unset" 
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <div 
        className={cn(
          "fixed top-0 left-0 right-0 z-40 w-full lg:hidden transition-all duration-300",
          scrolled 
            ? "glass-2 border-b shadow-sm" 
            : "bg-background/50 backdrop-blur-sm border-b border-transparent"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/">
            <VoxLogo />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <IconButton variant="ghost" onClick={() => setIsOpen(true)} aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </IconButton>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm glass-3 shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-semibold text-foreground">Menu</span>
                <IconButton variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </IconButton>
              </div>
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="flex flex-col gap-1 px-2">
                  {NAV_ITEMS.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-secondary hover:bg-surface-elevated hover:text-foreground transition-colors"
                      >
                        <Icon className="h-5 w-5" />
                        {item.label}
                      </Link>
                    )
                  })}
                  <div className="px-4 py-2 mt-2">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button className="w-full" variant="primary">Get Protected</Button>
                    </Link>
                  </div>
                </nav>
              </div>
              <div className="p-4 border-t border-border">
                <div className="flex flex-col gap-2">
                  <div className="px-2 pb-2 mb-2 border-b border-border/50">
                    <p className="text-sm font-semibold text-foreground">Account</p>
                    <p className="text-xs text-muted mt-0.5">Not signed in</p>
                  </div>
                  
                  <Link href="#profile" onClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-secondary hover:bg-surface-elevated hover:text-foreground transition-colors">
                    <UserRound className="h-4 w-4" />
                    Profile
                  </Link>
                  <Link href="#settings" onClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-secondary hover:bg-surface-elevated hover:text-foreground transition-colors">
                    <Settings className="h-4 w-4" />
                    Security Settings
                  </Link>
                  <Link href="/login" onClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-primary hover:bg-surface-elevated transition-colors">
                    <LogIn className="h-4 w-4" />
                    Sign In
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
