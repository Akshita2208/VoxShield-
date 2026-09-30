"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Mic } from "lucide-react"
import { VoiceWaveform } from "@/components/ui/voice-waveform"

interface VoiceVisualizerProps {
  state: "connecting" | "detecting" | "verifying" | "assessing" | "safe" | "suspicious" | "challenge" | "blocked" | "call_ended"
}

export function VoiceVisualizer({ state }: VoiceVisualizerProps) {
  const shouldReduceMotion = useReducedMotion()

  const isActive = ["detecting", "verifying", "assessing", "challenge"].includes(state)
  const isSuspicious = ["suspicious", "challenge", "blocked"].includes(state)
  const isSafe = state === "safe"
  const isEnded = state === "call_ended"

  let ringColor = "border-primary/20"
  let micColor = "text-primary"
  let intensity: "low" | "medium" | "high" = "medium"
  let colorVariant: "primary" | "danger" | "success" | "neutral" = "primary"

  if (isSuspicious) {
    ringColor = "border-danger/30"
    micColor = "text-danger"
    intensity = "high"
    colorVariant = "danger"
  } else if (isSafe) {
    ringColor = "border-success/30"
    micColor = "text-success"
    intensity = "low"
    colorVariant = "success"
  } else if (isEnded) {
    ringColor = "border-border/50"
    micColor = "text-muted"
    intensity = "low"
    colorVariant = "neutral"
  }

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="relative flex items-center justify-center w-64 h-64">
        {/* Animated Rings */}
        {!shouldReduceMotion && !isEnded && (
          <>
            <motion.div
              className={`absolute inset-0 rounded-full border-[1px] ${ringColor}`}
              animate={{ scale: isActive ? [1, 1.4, 1] : 1, opacity: isActive ? [0.2, 0, 0.2] : 0.1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className={`absolute inset-4 rounded-full border-[1px] ${ringColor}`}
              animate={{ scale: isActive ? [1, 1.2, 1] : 1, opacity: isActive ? [0.4, 0.1, 0.4] : 0.2 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div
              className={`absolute inset-8 rounded-full border-[1px] ${ringColor}`}
              animate={{ scale: isActive ? [1, 1.1, 1] : 1, opacity: isActive ? [0.6, 0.3, 0.6] : 0.3 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
          </>
        )}

        {/* Central Hub */}
        <div className="absolute inset-12 bg-surface rounded-full shadow-lg border border-border/40 flex flex-col items-center justify-center overflow-hidden z-10">
          <Mic className={`h-8 w-8 mb-2 transition-colors duration-500 ${micColor}`} />
          
          <div className="w-24 h-12 flex items-center justify-center opacity-80">
            <VoiceWaveform 
              active={!isEnded && isActive} 
              intensity={intensity} 
              colorVariant={colorVariant} 
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        {isActive ? (
          <>
            <h3 className="text-lg font-semibold text-foreground">Analyzing voice signal</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <p className="text-sm text-muted">Real-time protection active</p>
            </div>
          </>
        ) : isEnded ? (
          <h3 className="text-lg font-semibold text-muted">Call Disconnected</h3>
        ) : (
          <h3 className="text-lg font-semibold text-foreground">Protected Session</h3>
        )}
        <p className="text-[10px] uppercase tracking-widest text-muted/50 mt-4 font-semibold">Prototype simulation</p>
      </div>
    </div>
  )
}
