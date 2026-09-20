"use client"

import React from "react"
import { ShieldAlert, Activity } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { GlassCard } from "@/components/ui/glass-card"
import { SecurityPreferences } from "./types"

interface ProtectionSectionProps {
  preferences: SecurityPreferences;
  onChange: (key: keyof SecurityPreferences, value: boolean) => void;
}

export function ProtectionSection({ preferences, onChange }: ProtectionSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-warning" />
          Protection Controls
        </h2>
        <p className="text-sm text-muted mb-6">These settings relate specifically to VoxShield's protection behavior.</p>
      </div>

      <div className="bg-surface border border-border/50 rounded-xl overflow-hidden divide-y divide-border/50">
        
        {/* Protected Call Analysis */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Protected Call Analysis</h3>
              <p className="text-sm text-muted mb-2 max-w-lg">
                Analyze voice signals during VoxShield protected calls.
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                Protected environment
              </div>
            </div>
            <div className="shrink-0">
              <Switch 
                checked={preferences.protectedCallAnalysisEnabled} 
                onCheckedChange={(v) => onChange("protectedCallAnalysisEnabled", v)}
                aria-label="Toggle protected call analysis"
              />
            </div>
          </div>
        </div>

        {/* Step-Up Verification */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Step-Up Verification</h3>
              <p className="text-sm text-muted max-w-lg">
                Require additional identity verification when security risk increases.
              </p>
            </div>
            <div className="shrink-0">
              <Switch 
                checked={preferences.stepUpVerificationEnabled} 
                onCheckedChange={(v) => onChange("stepUpVerificationEnabled", v)}
                aria-label="Toggle step-up verification"
              />
            </div>
          </div>
        </div>

        {/* Sensitive Action Protection */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Sensitive Action Protection</h3>
              <p className="text-sm text-muted max-w-lg">
                Restrict sensitive actions when VoxShield identifies elevated security risk.
              </p>
            </div>
            <div className="shrink-0">
              <Switch 
                checked={preferences.sensitiveActionProtectionEnabled} 
                onCheckedChange={(v) => onChange("sensitiveActionProtectionEnabled", v)}
                aria-label="Toggle sensitive action protection"
              />
            </div>
          </div>
        </div>

        {/* Challenge Before Sensitive Actions */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Challenge Before Sensitive Actions</h3>
              <p className="text-sm text-muted max-w-lg">
                Require a challenge-response verification before continuing with selected sensitive actions.
              </p>
            </div>
            <div className="shrink-0">
              <Switch 
                checked={preferences.challengeBeforeSensitiveActions} 
                onCheckedChange={(v) => onChange("challengeBeforeSensitiveActions", v)}
                aria-label="Toggle challenge before sensitive actions"
              />
            </div>
          </div>
        </div>

      </div>

      <div className="pt-6">
        <GlassCard level={2} className="p-6 border-border/50">
          <div className="flex items-start gap-4 mb-4">
            <div className="h-10 w-10 rounded-full bg-violet-500/10 text-violet-500 flex items-center justify-center shrink-0">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Risk Response</h3>
              <p className="text-sm text-muted max-w-xl">
                Choose how VoxShield should respond when security signals require additional attention.
              </p>
            </div>
          </div>
          
          <div className="mt-6 border border-border/50 rounded-lg p-4 bg-surface-elevated">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-3">
              <h4 className="font-semibold text-foreground">Balanced Protection</h4>
              <div className="inline-flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded-md bg-surface border border-border/50 text-muted">ALLOW</span>
                <span className="text-xs px-2 py-1 rounded-md bg-warning/10 text-warning border border-warning/20">STEP-UP</span>
                <span className="text-xs px-2 py-1 rounded-md bg-destructive/10 text-destructive border border-destructive/20">RESTRICT</span>
              </div>
            </div>
            <p className="text-sm text-muted">
              VoxShield can combine voice authenticity, identity, and context signals to determine when additional protection is required.
            </p>
          </div>
        </GlassCard>
      </div>

    </div>
  )
}
