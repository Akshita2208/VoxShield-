"use client"

import React from "react"
import { HistoryFilters } from "./history-filters"
import { HistoryEmptyState } from "./history-empty-state"

export function HistoryList() {
  return (
    <div className="max-w-5xl mx-auto w-full mb-12">
      <h3 className="text-xl font-bold text-foreground mb-4">Security Activity</h3>
      
      <HistoryFilters />
      
      <div className="mt-8 relative">
        <HistoryEmptyState />
      </div>
    </div>
  )
}
