"use client"

import React, { useState, useEffect } from "react"
import { User, Phone } from "lucide-react"

export function CallIdentity() {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex flex-col items-center justify-center py-6 gap-3">
      <div className="w-16 h-16 rounded-full bg-surface-elevated border border-border/50 flex items-center justify-center relative shadow-sm">
        <User className="h-8 w-8 text-secondary" />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center border-2 border-background">
          <Phone className="h-3 w-3 text-white" />
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-foreground tracking-tight">Incoming Caller</h2>
        <p className="text-sm text-muted mt-1">Protected VoxShield Call</p>
      </div>

      <div className="mt-2 text-primary font-medium font-mono text-lg">
        {formatTime(elapsed)}
      </div>
    </div>
  )
}
