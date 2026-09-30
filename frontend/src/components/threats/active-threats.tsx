"use client"

import React from "react"
import { ShieldCheck } from "lucide-react"

export function ActiveThreats() {
  return (
    <div className="max-w-5xl mx-auto w-full mb-12">
      <h3 className="text-xl font-bold text-foreground mb-4">Active Threats</h3>
      
      <div className="bg-success/5 border border-success/20 rounded-xl p-8 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-full bg-success/10 text-success flex items-center justify-center mb-4">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <h4 className="text-lg font-bold text-success mb-2">No active threats</h4>
        <p className="text-sm text-muted max-w-md">
          VoxShield will surface suspicious activity here when a protected call requires attention.
        </p>
      </div>
    </div>
  )
}
