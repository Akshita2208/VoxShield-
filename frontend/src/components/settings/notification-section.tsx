"use client"

import React from "react"
import { Bell } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { SecurityPreferences } from "./types"

interface NotificationSectionProps {
  preferences: SecurityPreferences;
  onChange: (key: keyof SecurityPreferences, value: boolean) => void;
}

export function NotificationSection({ preferences, onChange }: NotificationSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          Security Notifications
        </h2>
        <p className="text-sm text-muted mb-6">Manage how and when VoxShield alerts you about security events.</p>
      </div>

      <div className="bg-surface border border-border/50 rounded-xl overflow-hidden divide-y divide-border/50">
        
        {/* Threat Alerts */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Threat Alerts</h3>
              <p className="text-sm text-muted max-w-lg">
                Receive alerts when VoxShield identifies activity requiring security attention.
              </p>
            </div>
            <div className="shrink-0">
              <Switch 
                checked={preferences.threatAlertsEnabled} 
                onCheckedChange={(v) => onChange("threatAlertsEnabled", v)}
                aria-label="Toggle threat alerts"
              />
            </div>
          </div>
        </div>

        {/* Verification Requests */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Verification Requests</h3>
              <p className="text-sm text-muted max-w-lg">
                Notify when additional identity verification is required.
              </p>
            </div>
            <div className="shrink-0">
              <Switch 
                checked={preferences.verificationNotificationsEnabled} 
                onCheckedChange={(v) => onChange("verificationNotificationsEnabled", v)}
                aria-label="Toggle verification requests"
              />
            </div>
          </div>
        </div>

        {/* Protection Events */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Protection Events</h3>
              <p className="text-sm text-muted max-w-lg">
                Receive notifications about restricted or blocked sensitive actions.
              </p>
            </div>
            <div className="shrink-0">
              <Switch 
                checked={preferences.protectionEventNotificationsEnabled} 
                onCheckedChange={(v) => onChange("protectionEventNotificationsEnabled", v)}
                aria-label="Toggle protection events"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
