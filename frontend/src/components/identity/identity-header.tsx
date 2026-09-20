"use client"

import React from "react"
import { Fingerprint } from "lucide-react"

export function IdentityHeader() {
  return (
    <div className="flex flex-col items-center text-center pb-8 border-b border-border/50">
      <div className="inline-flex items-center justify-center p-3 rounded-full bg-cyan-500/10 text-cyan-500 mb-4 border border-cyan-500/20">
        <Fingerprint className="h-8 w-8" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Identity & Trusted Contacts</h1>
      <p className="text-muted max-w-lg mb-4 text-sm sm:text-base">
        Manage optional trusted identities used for speaker verification.
      </p>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-elevated border border-border/50">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
        <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Optional Security Layer</span>
      </div>
    </div>
  )
}
