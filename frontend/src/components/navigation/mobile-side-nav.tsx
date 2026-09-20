"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShieldCheck, Activity, Search, Shield, Clock, ShieldAlert, User } from "lucide-react"
import { VoxLogo } from "../ui/vox-logo"
import { IconButton } from "../ui/button"
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

  // Prevent scrolling when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
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
                </nav>
              </div>
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-3 rounded-lg px-4 py-3 bg-surface-elevated">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    US
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">User Profile</span>
                    <span className="text-xs text-muted">Manage account</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
