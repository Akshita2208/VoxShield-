"use client"

import React from "react"
import { Mic, Fingerprint, ArrowRight } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

export function IdentityOverview() {
  return (
    <GlassCard level={2} className="p-6 mb-8 mt-8 border-cyan-500/20 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        <div className="flex-1">
          <h2 className="text-xl font-bold text-foreground mb-2">Identity Verification</h2>
          <p className="text-sm text-muted mb-6">Verify whether a speaker matches a trusted identity.</p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-surface p-3 rounded-lg border border-border/50">
              <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Mic className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">VOICE AUTHENTICITY</h4>
                <p className="text-xs text-muted mt-1">Checks whether the audio signal appears synthetic, manipulated, or replayed.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-cyan-500/5 p-3 rounded-lg border border-cyan-500/20">
              <div className="w-8 h-8 rounded bg-cyan-500/20 text-cyan-500 flex items-center justify-center shrink-0">
                <Fingerprint className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">IDENTITY MATCH</h4>
                <p className="text-xs text-muted mt-1">Checks whether the speaker matches a trusted reference identity.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-surface-elevated border border-border/50 rounded-xl p-6 min-w-[200px]">
          <div className="flex flex-col items-center">
            <div className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 tracking-wider">
              DETECT
            </div>
            <div className="h-6 border-l-2 border-dashed border-border/60 my-1" />
            <div className="px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold border border-cyan-500/20 tracking-wider">
              VERIFY
            </div>
          </div>
          <p className="text-[10px] text-muted uppercase mt-4 text-center font-semibold tracking-widest opacity-60">Separate Security Layers</p>
        </div>
        
      </div>
    </GlassCard>
  )
}
