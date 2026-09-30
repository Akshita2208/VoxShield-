"use client"

import React from "react"
import { ShieldCheck } from "lucide-react"

export function LiveHeader() {
  return (
    <div className="flex items-center justify-between w-full pb-6 border-b border-border/50">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold tracking-tight text-foreground">Live Protection</h1>
      </div>
      <div className="flex items-center gap-2 bg-success/10 text-success px-3 py-1.5 rounded-full border border-success/20">
        <ShieldCheck className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-wider">Protected Environment</span>
      </div>
    </div>
  )
}
