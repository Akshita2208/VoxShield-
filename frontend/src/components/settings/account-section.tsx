"use client"

import React from "react"
import { User, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AccountSection() {
  return (
    <div className="space-y-10">
      
      {/* Account Info Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Account & Access
          </h2>
          <p className="text-sm text-muted mb-6">Manage your VoxShield account connection.</p>
        </div>

        <div className="bg-surface border border-border/50 rounded-xl overflow-hidden divide-y divide-border/50">
          
          {/* Account Information */}
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">Account Information</h3>
                <p className="text-sm text-muted mb-3 max-w-lg">
                  Currently signed-in account.
                </p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-elevated border border-border/50 text-xs font-medium text-muted italic">
                  Not connected
                </div>
              </div>
              <div className="shrink-0">
                <Button variant="outline" onClick={() => window.location.href = "/login"}>
                  Sign In
                </Button>
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">Password</h3>
                <p className="text-sm text-muted max-w-lg">
                  Manage your account password.
                </p>
              </div>
              <div className="shrink-0">
                <Button variant="outline" onClick={() => window.location.href = "/forgot-password"}>
                  Manage Password
                </Button>
              </div>
            </div>
          </div>

          {/* Sign Out */}
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">Sign Out</h3>
                <p className="text-sm text-muted max-w-lg">
                  End your current session.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <span className="text-xs text-muted italic">Authentication not connected</span>
                <Button variant="outline" disabled>
                  Sign Out
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Danger Zone */}
      <div className="space-y-4 pt-6 border-t border-border/50">
        <h3 className="text-lg font-bold text-destructive flex items-center gap-2 mb-4">
          <AlertTriangle className="h-5 w-5" />
          Danger Zone
        </h3>

        <div className="bg-destructive/5 border border-destructive/20 rounded-xl overflow-hidden divide-y divide-destructive/10">
          
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-foreground mb-1">Remove Voice Identity</h4>
                <p className="text-sm text-muted max-w-lg">
                  Remove configured trusted voice identity references.
                </p>
              </div>
              <div className="shrink-0">
                <Button variant="destructive" onClick={() => window.location.href = "/identity"}>
                  Manage Identity
                </Button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-foreground mb-1">Clear Security History</h4>
                <p className="text-sm text-muted max-w-lg">
                  Remove security activity records.
                </p>
              </div>
              <div className="shrink-0">
                <Button variant="destructive" onClick={() => window.location.href = "/history"}>
                  Manage History
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
