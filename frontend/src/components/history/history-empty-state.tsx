"use client"

import React from "react"
import { History, Shield, Waves, Fingerprint } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HistoryEmptyState() {
  return (
    <div className="bg-surface border border-dashed border-border/50 rounded-xl p-8 sm:p-12 flex flex-col items-center justify-center text-center my-8">
      <div className="w-16 h-16 rounded-full bg-surface-elevated flex items-center justify-center mb-6 text-muted relative">
        <History className="h-8 w-8" />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-background border border-border/50 flex items-center justify-center">
          <Shield className="h-3 w-3 text-primary" />
        </div>
      </div>
      
      <h4 className="text-xl font-bold text-foreground mb-3">No security activity yet</h4>
      
      <p className="text-sm text-muted max-w-md mb-8">
        Your VoxShield security events will appear here after you use protected calls, audio scanning, or identity verification.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <Button variant="primary" className="w-full sm:w-auto" onClick={() => window.location.href = "/live"}>
          <Shield className="h-4 w-4 mr-2" />
          Start Protected Call
        </Button>
        <Button variant="outline" className="w-full sm:w-auto" onClick={() => window.location.href = "/scanner"}>
          <Waves className="h-4 w-4 mr-2" />
          Scan Audio
        </Button>
        <Button variant="ghost" className="w-full sm:w-auto" onClick={() => window.location.href = "/identity"}>
          <Fingerprint className="h-4 w-4 mr-2" />
          Set Up Identity
        </Button>
      </div>
    </div>
  )
}
