"use client"

import React from "react"
import { ScanLine, Activity, Shield } from "lucide-react"

const INSIGHTS = [
  {
    title: "Voice Analysis",
    description: "Detect synthetic, manipulated, or replayed voice signals.",
    icon: ScanLine,
  },
  {
    title: "Risk Assessment",
    description: "Evaluate voice and contextual risk together.",
    icon: Activity,
  },
  {
    title: "Security Intervention",
    description: "Require additional verification when a sensitive action is at risk.",
    icon: Shield,
  }
]

export function SecurityInsights() {
  return (
    <div className="mb-12">
      <h3 className="text-lg font-semibold text-foreground mb-4">How VoxShield Protects You</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {INSIGHTS.map((insight, idx) => (
          <div key={idx} className="flex flex-col items-start p-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <insight.icon className="h-4 w-4" />
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-1">{insight.title}</h4>
            <p className="text-xs text-muted leading-relaxed">{insight.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
