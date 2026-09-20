"use client"

import React from "react"
import { ShieldAlert } from "lucide-react"

export function HistoryPrivacy() {
  return (
    <div className="bg-surface-elevated/50 p-6 rounded-xl border border-border/40 max-w-5xl mx-auto my-8 flex flex-col md:flex-row items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <ShieldAlert className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-base font-bold text-foreground mb-2">How VoxShield Records History</h4>
        <div className="text-sm text-muted space-y-2">
          <p>
            Security History records general activity. The Threat Center focuses specifically on events that require security attention.
          </p>
          <ul className="list-disc pl-4 space-y-1 mt-2">
            <li>Security History is designed to retain event information needed to explain VoxShield activity.</li>
            <li>Raw voice recordings and biometric audio data should not be stored here unnecessarily.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
