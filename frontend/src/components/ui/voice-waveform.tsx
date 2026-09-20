"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface VoiceWaveformProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
  intensity?: "low" | "medium" | "high"
  colorVariant?: "primary" | "success" | "warning" | "danger"
  bars?: number
  animated?: boolean
}

export function VoiceWaveform({ 
  className, 
  active = false, 
  intensity = "medium",
  colorVariant = "primary",
  bars = 16,
  animated = true,
  ...props 
}: VoiceWaveformProps) {
  
  const getIntensityScale = () => {
    switch (intensity) {
      case "low": return [0.2, 0.4, 0.3, 0.5, 0.2]
      case "high": return [0.5, 0.9, 1.0, 0.8, 0.6]
      case "medium": 
      default: return [0.3, 0.6, 0.8, 0.5, 0.4]
    }
  }

  const getColorClass = () => {
    switch (colorVariant) {
      case "success": return "bg-success"
      case "warning": return "bg-warning"
      case "danger": return "bg-danger"
      case "primary":
      default: return "bg-primary"
    }
  }

  const baseScales = getIntensityScale()

  return (
    <div className={cn("flex items-center gap-1 h-16", className)} {...props}>
      {Array.from({ length: bars }).map((_, i) => {
        // Create a pseudo-random looking pattern that loops smoothly
        const scaleIndex = i % baseScales.length
        const targetScale = active ? baseScales[scaleIndex] : 0.1
        
        return (
          <motion.div
            key={i}
            className={cn("w-1.5 rounded-full", getColorClass())}
            initial={{ height: "10%" }}
            animate={{ 
              height: active ? `${targetScale * 100}%` : "10%",
              opacity: active ? 1 : 0.3
            }}
            transition={{
              repeat: active && animated ? Infinity : 0,
              repeatType: "mirror",
              duration: 0.5 + (i % 3) * 0.2, // Randomize duration slightly for organic feel
              ease: "easeInOut"
            }}
          />
        )
      })}
    </div>
  )
}
