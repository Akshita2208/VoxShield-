"use client"

import { ProtectionPipeline } from "../home/protection-pipeline"
import { QuickActions } from "../home/quick-actions"

export function ProtectionFlow() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <ProtectionPipeline />
        <QuickActions />
      </div>
    </section>
  )
}
