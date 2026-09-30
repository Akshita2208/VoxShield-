"use client"

import React from "react"
import { Shield } from "lucide-react"

export function ThreatEmptyState() {
  return (
    <div className="bg-surface border border-dashed border-border/50 rounded-xl p-12 flex flex-col items-center justify-center text-center my-6">
      <div className="w-16 h-16 rounded-full bg-surface-elevated flex items-center justify-center mb-4 text-muted">
        <Shield className="h-8 w-8" />
      </div>
      <h4 className="text-lg font-bold text-foreground mb-2">No threats detected</h4>
      <p className="text-sm text-muted max-w-sm">
        Your Threat Center is ready. Security events will appear here when VoxShield identifies activity that requires attention.
      </p>
    </div>
  )
}
