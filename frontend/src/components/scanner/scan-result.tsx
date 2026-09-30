"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

interface ScanResultProps {
  result: "genuine" | "suspicious"
  onReset: () => void
}

export function ScanResult({ result, onReset }: ScanResultProps) {
  const isGenuine = result === "genuine"
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto w-full"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground">Scan Result</h2>
        <p className="text-sm text-muted mt-1">Prototype analysis complete</p>
      </div>

      <GlassCard level={3} className={`p-8 sm:p-12 text-center border-2 ${isGenuine ? "border-success/20 bg-success/5" : "border-warning/20 bg-warning/5"}`}>
        <div className="flex flex-col items-center">
          
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isGenuine ? "bg-success/20 text-success" : "bg-warning/20 text-warning"}`}>
            {isGenuine ? <CheckCircle2 className="h-8 w-8" /> : <ShieldAlert className="h-8 w-8" />}
          </div>

          <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest mb-4 border ${isGenuine ? "bg-success/10 text-success border-success/20" : "bg-warning/10 text-warning border-warning/20"}`}>
            {isGenuine ? "Low Risk" : "Review Required"}
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-3">
            {isGenuine ? "Voice Signal Appears Genuine" : "Suspicious Voice Signal Detected"}
          </h3>
          
          <p className="text-base text-muted max-w-md mx-auto mb-8">
            {isGenuine 
              ? "No significant synthetic or replay indicators were identified by the prototype analysis."
              : "The prototype analysis identified signals that require additional verification."
            }
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto" onClick={onReset}>
              Scan Another Audio
            </Button>
            
            {isGenuine ? (
              <Button variant="primary" className="w-full sm:w-auto" onClick={() => window.location.href = "/history"}>
                View Security History
              </Button>
            ) : (
              <Button variant="primary" className="w-full sm:w-auto" onClick={() => window.location.href = "/identity"}>
                Start Verification
              </Button>
            )}
          </div>
          
        </div>
      </GlassCard>
    </motion.div>
  )
}
