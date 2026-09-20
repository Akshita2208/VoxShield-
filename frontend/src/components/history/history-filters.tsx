"use client"

import React from "react"
import { Search, Filter, Calendar } from "lucide-react"

export function HistoryFilters() {
  return (
    <div className="flex flex-col gap-4 mb-6">
      
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
        <input 
          type="text" 
          placeholder="Search security history..." 
          disabled
          className="w-full bg-surface border border-border/50 rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 opacity-50 cursor-not-allowed"
        />
      </div>
      
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        
        {/* Activity Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none max-w-full">
          <Filter className="h-4 w-4 text-muted shrink-0 mr-1" />
          <span className="text-xs font-semibold text-muted uppercase tracking-wider mr-2 shrink-0">All Activity</span>
          
          <button className="px-3 py-1.5 rounded-full bg-surface-elevated border border-border/50 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            All
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Protected Calls
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Audio Scans
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Threats
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Identity
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Verification
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Actions
          </button>
        </div>

        {/* Date Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none max-w-full">
          <Calendar className="h-4 w-4 text-muted shrink-0 mr-1" />
          <span className="text-xs font-semibold text-muted uppercase tracking-wider mr-2 shrink-0">All Time</span>
          
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Today
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Last 7 Days
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface border border-border/30 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            Last 30 Days
          </button>
          <button className="px-3 py-1.5 rounded-full bg-surface-elevated border border-border/50 text-xs font-medium text-muted opacity-50 cursor-not-allowed shrink-0">
            All Time
          </button>
        </div>
        
      </div>
    </div>
  )
}
