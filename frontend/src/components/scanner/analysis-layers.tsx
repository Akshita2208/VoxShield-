"use client"

import React from "react"
import { Mic, Fingerprint, Activity } from "lucide-react"

export function AnalysisLayers() {
  return (
    <div className="mt-12 w-full max-w-4xl mx-auto">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4 px-2">Analysis Layers</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Voice Signal Card */}
        <div className="bg-surface-elevated border border-border/50 rounded-lg p-4 flex flex-col">
          <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center mb-3">
            <Mic className="h-4 w-4" />
          </div>
          <h5 className="text-sm font-bold text-foreground mb-1">DETECT</h5>
          <p className="text-xs text-muted mb-4">Voice signal screening</p>
          <div className="mt-auto border-t border-border/50 pt-3">
            <span className="text-[10px] uppercase font-semibold text-muted/60">Pending live AI model</span>
          </div>
        </div>

        {/* Speaker Characteristics Card */}
        <div className="bg-surface-elevated border border-border/50 rounded-lg p-4 flex flex-col">
          <div className="w-8 h-8 rounded bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-3">
            <Fingerprint className="h-4 w-4" />
          </div>
          <h5 className="text-sm font-bold text-foreground mb-1">VERIFY</h5>
          <p className="text-xs text-muted mb-4">Speaker verification layer</p>
          <div className="mt-auto border-t border-border/50 pt-3">
            <span className="text-[10px] uppercase font-semibold text-muted/60">Pending live AI model</span>
          </div>
        </div>

        {/* Context Risk Card */}
        <div className="bg-surface-elevated border border-border/50 rounded-lg p-4 flex flex-col">
          <div className="w-8 h-8 rounded bg-violet-500/10 text-violet-500 flex items-center justify-center mb-3">
            <Activity className="h-4 w-4" />
          </div>
          <h5 className="text-sm font-bold text-foreground mb-1">ASSESS</h5>
          <p className="text-xs text-muted mb-4">Context and risk assessment</p>
          <div className="mt-auto border-t border-border/50 pt-3">
            <span className="text-[10px] uppercase font-semibold text-muted/60">Pending live AI model</span>
          </div>
        </div>
      </div>
    </div>
  )
}
