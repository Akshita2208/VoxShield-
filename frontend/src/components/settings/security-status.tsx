"use client"

import React from "react"
import { ShieldCheck, CheckCircle2 } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

export function SecurityStatus() {
  return (
    <div className="mb-8 w-full max-w-4xl mx-auto">
      <GlassCard level={1} className="p-6 border-success/30 bg-success/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-success/20 text-success flex items-center justify-center shrink-0">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-1">VoxShield Protection</h3>
            <p className="text-lg font-bold text-success flex items-center gap-2">
              PROTECTION READY
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 text-sm text-foreground/90 bg-surface/50 p-4 rounded-lg border border-border/50">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <span>Protected Call Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <span>Step-Up Verification</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <span>Sensitive Action Protection</span>
          </div>
        </div>
      </GlassCard>
      <p className="text-xs text-muted text-center mt-3">
        Security services will become active when connected.
      </p>
    </div>
  )
}
