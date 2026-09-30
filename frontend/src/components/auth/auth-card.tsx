"use client"

import React from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

interface AuthCardProps {
  children: React.ReactNode
  title: string
  description?: string
}

export function AuthCard({ children, title, description }: AuthCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      <GlassCard className="p-8 w-full glass-2 border-border/50 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow inside card */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] -mr-10 -mt-10 pointer-events-none" />
        
        <div className="text-center mb-8 relative z-10">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
          {description && (
            <p className="text-sm text-muted mt-2">{description}</p>
          )}
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
      </GlassCard>
    </motion.div>
  )
}
