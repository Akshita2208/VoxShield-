"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { GlassCard } from "@/components/ui/glass-card"

interface ScanProgressProps {
  onComplete: () => void
}

const STAGES = [
  { id: "detect", label: "DETECT", desc: "Inspecting voice signal" },
  { id: "verify", label: "VERIFY", desc: "Checking speaker characteristics" },
  { id: "assess", label: "ASSESS", desc: "Evaluating risk signals" },
]

export function ScanProgress({ onComplete }: ScanProgressProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    // 1 second per stage
    const timer1 = setTimeout(() => setActiveIndex(1), 1000)
    const timer2 = setTimeout(() => setActiveIndex(2), 2000)
    const timer3 = setTimeout(() => onComplete(), 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  return (
    <GlassCard level={2} className="max-w-2xl mx-auto w-full p-8 sm:p-12 relative overflow-hidden">
      {/* Scanning Background Effect */}
      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-32 bg-primary/10 blur-3xl -z-10 pointer-events-none"
        animate={{ x: ["-100%", "800%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />

      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          Analyzing Audio
        </h3>
        <p className="text-sm text-muted">VoxShield is preparing the voice signal for security analysis.</p>
        <span className="inline-block mt-3 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-widest bg-surface-elevated border border-border text-muted">
          Prototype simulation
        </span>
      </div>

      <div className="flex items-start justify-between relative px-2 sm:px-6 max-w-lg mx-auto">
        {/* Background Line */}
        <div className="absolute left-[15%] right-[15%] top-3 h-[2px] bg-border/40 -z-10" />

        {STAGES.map((stage, idx) => {
          const isActive = idx === activeIndex
          const isPassed = idx < activeIndex
          
          let dotColor = "bg-surface-elevated border-border"
          if (isActive) dotColor = "bg-primary border-primary"
          else if (isPassed) dotColor = "bg-primary/50 border-primary/50"

          return (
            <div key={stage.id} className="flex flex-col items-center gap-3 w-1/3">
              <div className="relative flex items-center justify-center w-6 h-6">
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 1 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-primary/40 pointer-events-none"
                    />
                  )}
                </AnimatePresence>
                <div className={cn("w-3 h-3 rounded-full border-2 transition-colors duration-500", dotColor)} />
              </div>
              
              <div className="text-center h-12">
                <p className={cn("text-xs font-bold tracking-widest uppercase transition-colors mb-1", isActive ? "text-primary" : isPassed ? "text-foreground" : "text-muted")}>
                  {stage.label}
                </p>
                <p className={cn("text-[10px] sm:text-xs transition-colors", isActive ? "text-foreground" : "text-muted/50")}>
                  {stage.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>

    </GlassCard>
  )
}
