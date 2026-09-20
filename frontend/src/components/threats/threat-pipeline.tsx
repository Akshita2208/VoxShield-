"use client"

import React from "react"
import { ArrowDown, ArrowRight } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

export function ThreatPipeline() {
  return (
    <div className="max-w-5xl mx-auto w-full mb-12">
      <h3 className="text-xl font-bold text-foreground mb-6">How VoxShield Responds</h3>
      
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
        
        <GlassCard level={2} className="flex-1 p-5 flex flex-col items-center justify-center text-center border-primary/20 h-full">
          <div className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 tracking-wider mb-3">
            DETECT
          </div>
          <p className="text-sm text-muted">Screen the voice signal</p>
        </GlassCard>

        <div className="flex items-center justify-center text-muted shrink-0 py-2 md:py-0">
          <ArrowRight className="hidden md:block h-5 w-5" />
          <ArrowDown className="md:hidden h-5 w-5" />
        </div>

        <GlassCard level={2} className="flex-1 p-5 flex flex-col items-center justify-center text-center border-cyan-500/20 h-full">
          <div className="px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold border border-cyan-500/20 tracking-wider mb-3">
            VERIFY
          </div>
          <p className="text-sm text-muted">Check trusted identity when available</p>
        </GlassCard>

        <div className="flex items-center justify-center text-muted shrink-0 py-2 md:py-0">
          <ArrowRight className="hidden md:block h-5 w-5" />
          <ArrowDown className="md:hidden h-5 w-5" />
        </div>

        <GlassCard level={2} className="flex-1 p-5 flex flex-col items-center justify-center text-center border-violet-500/20 h-full">
          <div className="px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-500 text-xs font-bold border border-violet-500/20 tracking-wider mb-3">
            ASSESS
          </div>
          <p className="text-sm text-muted">Combine security and context signals</p>
        </GlassCard>

        <div className="flex items-center justify-center text-muted shrink-0 py-2 md:py-0">
          <ArrowRight className="hidden md:block h-5 w-5" />
          <ArrowDown className="md:hidden h-5 w-5" />
        </div>

        <GlassCard level={2} className="flex-1 p-5 flex flex-col items-center justify-center text-center border-success/20 h-full">
          <div className="px-4 py-1.5 rounded-full bg-success/10 text-success text-xs font-bold border border-success/20 tracking-wider mb-3">
            PREVENT
          </div>
          <p className="text-sm text-muted">Restrict sensitive actions when risk is elevated</p>
        </GlassCard>

      </div>
    </div>
  )
}
