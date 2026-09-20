"use client"

import React from "react"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { SecurityPreferences } from "./types"

interface SecuritySectionProps {
  preferences: SecurityPreferences;
  onChange: (key: keyof SecurityPreferences, value: boolean) => void;
}

export function SecuritySection({ preferences, onChange }: SecuritySectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Security
        </h2>
        <p className="text-sm text-muted mb-6">Manage authentication and verification protections.</p>
      </div>

      <div className="bg-surface border border-border/50 rounded-xl overflow-hidden divide-y divide-border/50">
        
        {/* Two-Factor Authentication */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Two-Factor Authentication</h3>
              <p className="text-sm text-muted mb-3 max-w-lg">
                Add an additional verification step when signing in.
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-elevated border border-border/50 text-xs font-medium text-muted">
                Status: Not configured
              </div>
            </div>
            <div className="shrink-0">
              <Button variant="outline">Set Up</Button>
            </div>
          </div>
        </div>

        {/* Login Protection */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Login Protection</h3>
              <p className="text-sm text-muted max-w-lg">
                Require additional verification when unusual account access is detected.
              </p>
            </div>
            <div className="shrink-0">
              <Switch 
                checked={preferences.loginProtectionEnabled} 
                onCheckedChange={(v) => onChange("loginProtectionEnabled", v)}
                aria-label="Toggle login protection"
              />
            </div>
          </div>
        </div>

        {/* Session Security */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Session Security</h3>
              <p className="text-sm text-muted mb-3 max-w-lg">
                Review and control active account sessions.
              </p>
              <div className="text-sm text-muted italic">
                No active sessions available
              </div>
            </div>
            <div className="shrink-0">
              <Button variant="outline" disabled>Manage Sessions</Button>
            </div>
          </div>
        </div>

        {/* Blockchain Identity & Audit */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Blockchain Identity & Audit</h3>
              <p className="text-sm text-muted max-w-lg">
                View integrity status of identity credentials and audit records.
              </p>
            </div>
            <div className="shrink-0">
              <Button variant="outline" asChild>
                <a href="/audit">View Audit Layer</a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
