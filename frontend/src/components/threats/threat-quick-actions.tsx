"use client"

import React from "react"
import { Shield, Fingerprint, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThreatQuickActions() {
  return (
    <div className="max-w-5xl mx-auto w-full mb-16">
      <h3 className="text-xl font-bold text-foreground mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bg-surface border border-border/50 rounded-xl p-6 flex flex-col items-start">
          <div className="w-10 h-10 rounded bg-primary/10 text-primary flex items-center justify-center mb-4">
            <Shield className="h-5 w-5" />
          </div>
          <h4 className="text-sm font-bold text-foreground mb-1">Live Protection</h4>
          <p className="text-xs text-muted mb-4">Monitor real-time calling environment.</p>
          <Button variant="outline" className="w-full mt-auto" onClick={() => window.location.href = "/live"}>
            Go to Live Protection
          </Button>
        </div>

        <div className="bg-surface border border-border/50 rounded-xl p-6 flex flex-col items-start">
          <div className="w-10 h-10 rounded bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-4">
            <Waves className="h-5 w-5" />
          </div>
          <h4 className="text-sm font-bold text-foreground mb-1">Audio Scanner</h4>
          <p className="text-xs text-muted mb-4">Scan pre-recorded audio files for spoofing.</p>
          <Button variant="outline" className="w-full mt-auto" onClick={() => window.location.href = "/scanner"}>
            Scan Audio
          </Button>
        </div>

        <div className="bg-surface border border-border/50 rounded-xl p-6 flex flex-col items-start">
          <div className="w-10 h-10 rounded bg-violet-500/10 text-violet-500 flex items-center justify-center mb-4">
            <Fingerprint className="h-5 w-5" />
          </div>
          <h4 className="text-sm font-bold text-foreground mb-1">Identity Management</h4>
          <p className="text-xs text-muted mb-4">Configure trusted voice contacts.</p>
          <Button variant="outline" className="w-full mt-auto" onClick={() => window.location.href = "/identity"}>
            Manage Identity
          </Button>
        </div>
        
      </div>
    </div>
  )
}
