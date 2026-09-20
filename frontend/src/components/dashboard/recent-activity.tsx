"use client"

import React from "react"
import Link from "next/link"
import { Clock } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

export function RecentActivity() {
  return (
    <div className="mb-12">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
      <GlassCard className="p-12 border-border/50 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-surface-elevated flex items-center justify-center mb-4 text-muted border border-border/50">
          <Clock className="h-6 w-6 opacity-50" />
        </div>
        <h4 className="text-base font-semibold text-foreground mb-2">No protection activity yet</h4>
        <p className="text-sm text-muted max-w-md mb-6">
          Your recent security events will appear here once VoxShield starts protecting conversations.
        </p>
        <Link href="/live">
          <Button variant="outline" size="sm">
            Start Live Protection
          </Button>
        </Link>
      </GlassCard>
    </div>
  )
}
