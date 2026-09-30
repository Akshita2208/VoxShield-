"use client"

import React from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { ListIcon, Phone, ShieldAlert, Fingerprint } from "lucide-react"

export function HistorySummary() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto my-8 w-full">
      <GlassCard level={2} className="p-4 border-border/50">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded bg-surface-elevated text-muted shrink-0">
            <ListIcon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Total Events</p>
            <p className="text-xl font-bold text-foreground">0</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard level={2} className="p-4 border-border/50">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded bg-primary/10 text-primary shrink-0">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Protected Calls</p>
            <p className="text-xl font-bold text-foreground">0</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard level={2} className="p-4 border-border/50">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded bg-warning/10 text-warning shrink-0">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Threat Events</p>
            <p className="text-xl font-bold text-foreground">0</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard level={2} className="p-4 border-border/50">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded bg-cyan-500/10 text-cyan-500 shrink-0">
            <Fingerprint className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Verification Events</p>
            <p className="text-xl font-bold text-foreground">0</p>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
