"use client"

import React from "react"
import { LockKeyhole } from "lucide-react"

export function PrivacyNotice() {
  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-background border border-border/50 rounded-xl p-4">
        <div className="w-8 h-8 rounded-full bg-surface-elevated flex items-center justify-center shrink-0">
          <LockKeyhole className="h-4 w-4 text-muted" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-0.5">Privacy by Design</h4>
          <p className="text-xs text-muted leading-relaxed max-w-3xl">
            VoxShield is designed to minimize sensitive data exposure. Voice analysis and identity verification are handled as separate security layers.
          </p>
        </div>
      </div>
    </div>
  )
}
