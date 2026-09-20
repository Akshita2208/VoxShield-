"use client"

import React from "react"
import { Search, Filter } from "lucide-react"

export function ThreatFilters() {
  return (
    <div className="flex flex-col gap-4 mb-6">
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
        <input 
          type="text" 
          placeholder="Search security events..." 
          disabled
          className="w-full bg-surface border border-border/50 rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 opacity-50 cursor-not-allowed"
        />
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 overflow-x-auto pb-2 scrollbar-none">
        
        <div className="flex items-center gap-2 shrink-0">
          <Filter className="h-4 w-4 text-muted shrink-0 mr-1" />
          <span className="text-xs font-semibold text-muted uppercase tracking-wider mr-2 shrink-0">Type</span>
          
          <button className="px-3 py-1.5 rounded-full bg-surface-elevated border border-border/50 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            All
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Voice Spoof
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Identity
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Context
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Verification
          </button>
        </div>

        <div className="hidden md:block w-px h-6 bg-border/50 self-center" />

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-semibold text-muted uppercase tracking-wider mr-2 shrink-0">Severity</span>
          
          <button className="px-3 py-1.5 rounded-full bg-surface-elevated border border-border/50 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            All
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Low
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Medium
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            High
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Critical
          </button>
        </div>
        
      </div>
    </div>
  )
}
