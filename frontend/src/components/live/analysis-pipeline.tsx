"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnalysisPipelineProps {
  state: "connecting" | "detecting" | "verifying" | "assessing" | "safe" | "suspicious" | "challenge" | "blocked" | "call_ended"
}

const STAGES = [
  { id: "detecting", label: "DETECT", desc: "Voice signal" },
  { id: "verifying", label: "VERIFY", desc: "Speaker identity" },
  { id: "assessing", label: "ASSESS", desc: "Risk context" },
  { id: "preventing", label: "PREVENT", desc: "Security action" }
]

export function AnalysisPipeline({ state }: AnalysisPipelineProps) {
  let activeIndex = -1
  if (state === "detecting") activeIndex = 0
  else if (state === "verifying") activeIndex = 1
  else if (state === "assessing") activeIndex = 2
  else if (["suspicious", "challenge", "blocked", "preventing"].includes(state)) activeIndex = 3
  else if (state === "safe") activeIndex = 4 // all done, none pulsating

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <div className="flex items-center justify-between relative px-2 sm:px-6">
        {/* Background Line */}
        <div className="absolute left-[10%] right-[10%] top-3 h-[2px] bg-border/40 -z-10" />

        {STAGES.map((stage, idx) => {
          const isActive = idx === activeIndex
          const isPassed = idx < activeIndex || state === "safe"
          
          let dotColor = "bg-surface-elevated border-border"
          if (isActive) dotColor = "bg-primary border-primary"
          else if (isPassed) dotColor = "bg-primary/50 border-primary/50"

          return (
            <div key={stage.id} className="flex flex-col items-center gap-2 relative">
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
              
              <div className="text-center">
                <p className={cn("text-xs font-bold tracking-widest uppercase transition-colors", isActive ? "text-primary" : isPassed ? "text-foreground" : "text-muted")}>
                  {stage.label}
                </p>
                <p className={cn("text-[10px] hidden sm:block transition-colors", isActive ? "text-foreground" : "text-muted/60")}>
                  {stage.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Active State Readout */}
      <div className="mt-6 flex justify-center h-6">
        <AnimatePresence mode="wait">
          {activeIndex >= 0 && activeIndex < 4 && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="flex items-center gap-2 text-sm font-medium text-muted"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {activeIndex === 0 && "Detecting voice signal..."}
              {activeIndex === 1 && "Verifying speaker..."}
              {activeIndex === 2 && "Assessing risk..."}
              {activeIndex === 3 && "Applying protection..."}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
