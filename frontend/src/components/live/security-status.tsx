"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, ShieldAlert, LockKeyhole } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

interface SecurityStatusProps {
  state: "connecting" | "detecting" | "verifying" | "assessing" | "safe" | "suspicious" | "challenge" | "blocked" | "call_ended"
  onStartVerification: () => void
  onEndCall: () => void
}

export function SecurityStatus({ state, onStartVerification, onEndCall }: SecurityStatusProps) {
  // Only show this component if we are in a resolved state
  const isVisible = ["safe", "suspicious", "blocked", "call_ended"].includes(state)

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={state}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="w-full max-w-md mx-auto my-4"
        >
          <GlassCard level={2} className="p-6 text-center flex flex-col items-center">
            
            {state === "safe" && (
              <>
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mb-4 text-success">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Voice appears safe</h3>
                <p className="text-sm text-muted mb-6">No immediate voice-spoofing indicators detected in this prototype simulation.</p>
                <div className="flex flex-col w-full gap-3">
                  <Button variant="success" className="w-full" onClick={() => {}}>Continue Conversation</Button>
                  <Button variant="ghost" className="w-full" onClick={onEndCall}>End Call</Button>
                </div>
              </>
            )}

            {state === "suspicious" && (
              <>
                <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center mb-4 text-warning">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Suspicious Voice Signal</h3>
                <p className="text-sm text-muted mb-2">VoxShield detected signals that require additional verification.</p>
                <p className="text-xs font-semibold text-warning mb-6">Sensitive actions are temporarily restricted.</p>
                <div className="flex flex-col w-full gap-3">
                  <Button variant="primary" className="w-full" onClick={onStartVerification}>Start Verification</Button>
                  <Button variant="ghost" className="w-full" onClick={onEndCall}>End Call</Button>
                </div>
              </>
            )}

            {state === "blocked" && (
              <>
                <div className="w-12 h-12 rounded-full bg-danger/20 flex items-center justify-center mb-4 text-danger">
                  <LockKeyhole className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Verification Failed</h3>
                <p className="text-sm text-muted mb-2">VoxShield could not complete the required verification.</p>
                <p className="text-xs font-semibold text-danger mb-4">Sensitive actions remain restricted.</p>
                <div className="bg-surface-elevated border border-border/50 rounded p-3 mb-6 w-full text-left">
                  <p className="text-xs text-foreground font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-success"></span> Communication Protected
                  </p>
                  <p className="text-xs text-muted mt-1 ml-3.5">Prototype security event recorded for this session.</p>
                </div>
                <div className="flex flex-col w-full gap-3">
                  <Button variant="danger" className="w-full" onClick={onEndCall}>End Call</Button>
                  <Button variant="outline" className="w-full" onClick={onStartVerification}>Try Verification Again</Button>
                </div>
              </>
            )}

            {state === "call_ended" && (
              <>
                <h3 className="text-xl font-bold text-foreground mb-2">Call Ended</h3>
                <p className="text-sm text-muted mb-6">VoxShield protection session complete.</p>
                <div className="flex flex-col w-full gap-3">
                  <Button variant="primary" className="w-full" onClick={() => window.location.href = "/"}>Back to Home</Button>
                  <Button variant="outline" className="w-full" onClick={() => window.location.href = "/history"}>View Security History</Button>
                </div>
              </>
            )}

          </GlassCard>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
