"use client"

import React from "react"
import { ShieldAlert } from "lucide-react"

export function ThreatPrivacy() {
  return (
    <div className="bg-surface-elevated/50 p-6 rounded-xl border border-border/40 max-w-5xl mx-auto my-8 flex flex-col md:flex-row items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <ShieldAlert className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-base font-bold text-foreground mb-2">Threat Data Privacy</h4>
        <div className="text-sm text-muted space-y-2">
          <p>
            Threat Center stores security event information needed to explain VoxShield decisions.
          </p>
          <ul className="list-disc pl-4 space-y-1 mt-2">
            <li>Raw voice recordings and biometric audio data should not be stored here unnecessarily.</li>
            <li>Blockchain is not used to detect the voice. (Audit information belongs to a separate ledger).</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
