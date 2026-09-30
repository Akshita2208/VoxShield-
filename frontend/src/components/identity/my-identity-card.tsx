"use client"

import React, { useState } from "react"
import { User, AlertCircle, Fingerprint } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

export function MyIdentityCard() {
  const [isSettingUp, setIsSettingUp] = useState(false)

  return (
    <GlassCard level={2} className="p-6 mb-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
      <div className="flex items-start gap-4 flex-1">
        <div className="w-12 h-12 rounded-full bg-surface-elevated border border-border/50 flex items-center justify-center shrink-0">
          <User className="h-6 w-6 text-muted" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">My Voice Identity</h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-warning"></span>
            <span className="text-xs font-semibold text-warning tracking-wider uppercase">Not configured</span>
          </div>
          <p className="text-sm text-muted">
            Optional. Add a voice reference if you want VoxShield to perform speaker verification during protected calls.
          </p>
        </div>
      </div>

      <div className="w-full md:w-auto shrink-0 flex flex-col items-center md:items-end gap-3 border-t md:border-t-0 border-border/50 pt-4 md:pt-0">
        {!isSettingUp ? (
          <>
            <Button variant="outline" className="w-full md:w-auto" onClick={() => setIsSettingUp(true)}>
              Set Up Identity
            </Button>
            <p className="text-[10px] text-muted text-center md:text-right max-w-[200px]">
              You can use VoxShield's voice authenticity detection without setting up a voice identity.
            </p>
          </>
        ) : (
          <div className="bg-surface border border-cyan-500/30 rounded-lg p-4 w-full md:w-72 shadow-lg relative">
            <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
              <Fingerprint className="h-4 w-4 text-cyan-500" />
              Identity Setup
            </h4>
            <div className="text-xs text-muted mb-4">
              <p className="mb-2"><strong>Step 1:</strong> Identity Profile (Name)</p>
              <p><strong>Step 2:</strong> Voice Reference</p>
            </div>
            
            <div className="bg-surface-elevated p-3 rounded border border-border/50 mb-4">
              <p className="text-[10px] text-muted mb-2">
                A voice reference allows VoxShield to compare a future speaker against this trusted identity.
              </p>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-3 w-3 text-warning" />
                <span className="text-[10px] font-bold text-warning uppercase">Not configured</span>
              </div>
            </div>

            <Button variant="primary" className="w-full text-xs h-8 mb-3" onClick={() => {}}>
              Add Voice Reference
            </Button>
            
            <p className="text-[10px] text-muted text-center italic mb-3">
              * Voice reference setup will be connected to the VoxShield verification service later.
            </p>

            <Button variant="ghost" className="w-full text-xs h-8" onClick={() => setIsSettingUp(false)}>
              Cancel Setup
            </Button>
          </div>
        )}
      </div>
    </GlassCard>
  )
}
