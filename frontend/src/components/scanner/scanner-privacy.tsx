"use client"

import React from "react"
import { Info } from "lucide-react"

export function ScannerPrivacy() {
  return (
    <div className="flex items-start gap-3 bg-surface-elevated/50 p-4 rounded-lg border border-border/40 max-w-2xl mx-auto my-6">
      <Info className="h-5 w-5 text-muted mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-sm font-semibold text-foreground mb-1">Scan audio only when you choose to.</p>
        <p className="text-xs text-muted leading-relaxed">
          VoxShield's scanner is designed for voluntary audio analysis. Do not upload recordings containing sensitive information unless you are authorized to analyze them.
        </p>
      </div>
    </div>
  )
}
