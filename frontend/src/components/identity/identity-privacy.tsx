"use client"

import React from "react"
import { ShieldAlert } from "lucide-react"

export function IdentityPrivacy() {
  return (
    <div className="bg-surface-elevated/50 p-6 rounded-xl border border-border/40 max-w-4xl mx-auto my-8 flex flex-col md:flex-row items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <ShieldAlert className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-base font-bold text-foreground mb-2">Your Voice Identity Is Optional</h4>
        <div className="text-sm text-muted space-y-2">
          <p>
            VoxShield does not require voice registration for basic voice authenticity detection.
          </p>
          <ul className="list-disc pl-4 space-y-1 mt-2">
            <li>Voice identity is strictly an optional verification layer.</li>
            <li>We do not create a universal voice database.</li>
            <li>Raw voice recordings should not be stored unnecessarily.</li>
            <li>Biometric and audio data will not be placed on any blockchain.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
