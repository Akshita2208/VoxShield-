"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Fingerprint, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

interface ChallengePanelProps {
  state: "connecting" | "detecting" | "verifying" | "assessing" | "safe" | "suspicious" | "challenge" | "blocked" | "call_ended"
}

export function ChallengePanel({ state }: ChallengePanelProps) {
  const [isListening, setIsListening] = useState(false)

  if (state !== "challenge") return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="w-full max-w-md mx-auto my-4"
      >
        <GlassCard level={3} className="p-6 border-warning/50">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center mb-4 text-warning">
              <Fingerprint className="h-6 w-6" />
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-2">Verify Before You Continue</h3>
            <p className="text-sm text-muted mb-6">Complete the security challenge to continue the protected conversation.</p>
            
            <div className="w-full bg-surface-elevated border border-border/50 rounded-lg p-4 mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Challenge Response</p>
              <p className="text-sm text-foreground mb-4">Please repeat the displayed phrase.</p>
              <div className="bg-background rounded p-3 text-center border border-primary/20">
                <p className="text-base font-medium text-primary">"VoxShield protects my voice."</p>
              </div>
            </div>

            {isListening ? (
              <div className="flex flex-col items-center gap-3 w-full">
                <div className="w-full h-12 rounded-lg bg-surface flex items-center justify-center gap-2 border border-primary/50 text-primary">
                  <Mic className="h-4 w-4 animate-pulse" />
                  <span className="text-sm font-medium animate-pulse">Listening...</span>
                </div>
                <p className="text-xs text-muted">Awaiting demo control input (Simulate Pass/Fail)</p>
              </div>
            ) : (
              <Button variant="primary" className="w-full" onClick={() => setIsListening(true)}>
                Start Challenge
              </Button>
            )}
          </div>
        </GlassCard>
      </motion.div>
    </AnimatePresence>
  )
}
