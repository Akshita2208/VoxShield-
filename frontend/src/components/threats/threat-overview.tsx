"use client"

import React from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { ShieldCheck, Bell, Ban, Activity } from "lucide-react"

export function ThreatOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto my-8 w-full">
      <GlassCard level={2} className="p-4 border-success/20">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded bg-success/10 text-success shrink-0">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Threat Status</p>
            <p className="text-sm font-bold text-foreground">No Active Threats</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard level={2} className="p-4 border-border/50">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded bg-surface-elevated text-muted shrink-0">
            <Bell className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Recent Alerts</p>
            <p className="text-xl font-bold text-foreground">0</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard level={2} className="p-4 border-border/50">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded bg-surface-elevated text-muted shrink-0">
            <Ban className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Restricted Actions</p>
            <p className="text-xl font-bold text-foreground">0</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard level={2} className="p-4 border-border/50">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded bg-surface-elevated text-muted shrink-0">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Security Events</p>
            <p className="text-xl font-bold text-foreground">0</p>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
