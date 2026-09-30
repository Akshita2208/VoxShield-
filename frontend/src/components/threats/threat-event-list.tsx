"use client"

import React from "react"
import { ThreatFilters } from "./threat-filters"
import { ThreatEmptyState } from "./threat-empty-state"

export function ThreatEventList() {
  return (
    <div className="max-w-5xl mx-auto w-full mb-12">
      <h3 className="text-xl font-bold text-foreground mb-2">Recent Threat Events</h3>
      <p className="text-sm text-muted mb-6">
        Threat events will appear here after VoxShield analyzes protected calls or audio recordings.
      </p>
      
      <ThreatFilters />
      
      <ThreatEmptyState />
    </div>
  )
}
