"use client"

import React from "react"
import { ShieldCheck } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Security Overview</h1>
        <p className="text-muted mt-1">Your voice protection status at a glance.</p>
      </div>
      
      <div className="flex items-center gap-2 bg-success/10 border border-success/20 px-3 py-1.5 rounded-full w-fit">
        <ShieldCheck className="h-4 w-4 text-success" />
        <span className="text-xs font-semibold text-success uppercase tracking-wider">Protection Active</span>
      </div>
    </div>
  )
}
