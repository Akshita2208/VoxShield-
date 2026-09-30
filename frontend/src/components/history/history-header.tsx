"use client"

import React from "react"
import { Clock } from "lucide-react"

export function HistoryHeader() {
  return (
    <div className="flex flex-col items-center text-center pb-8 border-b border-border/50">
      <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-4 border border-primary/20">
        <Clock className="h-8 w-8" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Security History</h1>
      <p className="text-muted max-w-lg mb-4 text-sm sm:text-base">
        Review your past VoxShield security activity and protection decisions.
      </p>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-elevated border border-border/50">
        <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Security Log</span>
      </div>
    </div>
  )
}
