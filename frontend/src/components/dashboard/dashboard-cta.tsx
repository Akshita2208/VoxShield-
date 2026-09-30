"use client"

import React from "react"
import Link from "next/link"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

export function DashboardCTA() {
  return (
    <GlassCard className="p-8 text-center bg-primary/5 border-primary/20">
      <h2 className="text-2xl font-bold text-foreground mb-2">Ready to protect your next conversation?</h2>
      <p className="text-sm text-muted max-w-xl mx-auto mb-6">
        Start a protected session and let VoxShield analyze the voice in real time.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/live" className="w-full sm:w-auto">
          <Button variant="primary" size="lg" className="w-full">
            Start Live Protection
          </Button>
        </Link>
        <Link href="/scanner" className="w-full sm:w-auto">
          <Button variant="outline" size="lg" className="w-full">
            Explore Scanner
          </Button>
        </Link>
      </div>
    </GlassCard>
  )
}
