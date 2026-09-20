"use client"

import React from "react"
import { ArrowRight, Fingerprint, Waves, Brain, UserCheck } from "lucide-react"

export function IdentityFlow() {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-foreground">How Identity Verification Works</h3>
        <span className="text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded uppercase tracking-wider">
          Architecture preview
        </span>
      </div>

      <div className="bg-surface border border-border/50 rounded-xl p-6 sm:p-8 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[600px] gap-4">
          
          <div className="flex flex-col items-center flex-1 text-center">
            <div className="w-12 h-12 rounded-lg bg-surface-elevated border border-border flex items-center justify-center mb-3 text-muted">
              <Fingerprint className="h-6 w-6" />
            </div>
            <p className="text-xs font-bold text-foreground uppercase">Trusted Reference</p>
          </div>

          <ArrowRight className="h-5 w-5 text-muted shrink-0" />

          <div className="flex flex-col items-center flex-1 text-center">
            <div className="w-12 h-12 rounded-lg bg-surface-elevated border border-border flex items-center justify-center mb-3 text-muted">
              <Waves className="h-6 w-6" />
            </div>
            <p className="text-xs font-bold text-foreground uppercase">Speaker Embedding</p>
          </div>

          <ArrowRight className="h-5 w-5 text-muted shrink-0" />

          <div className="flex flex-col items-center flex-1 text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 text-primary relative">
              <Brain className="h-6 w-6" />
            </div>
            <p className="text-xs font-bold text-foreground uppercase">Similarity Check</p>
          </div>

          <ArrowRight className="h-5 w-5 text-muted shrink-0" />

          <div className="flex flex-col items-center flex-1 text-center">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3 text-cyan-500">
              <UserCheck className="h-6 w-6" />
            </div>
            <p className="text-xs font-bold text-foreground uppercase">Identity Match</p>
          </div>

        </div>
      </div>
    </div>
  )
}
