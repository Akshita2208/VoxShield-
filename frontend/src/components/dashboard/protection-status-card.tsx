"use client"

import React from "react"
import Link from "next/link"
import { Shield } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

export function ProtectionStatusCard() {
  return (
    <GlassCard className="p-8 relative overflow-hidden mb-8 border-primary/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start md:items-center gap-6">
          <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">VoxShield Protection</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">You're Protected</h2>
            <p className="text-muted max-w-md text-sm md:text-base">
              VoxShield is ready to analyze suspicious voice activity in your protected environment.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 shrink-0">
          <Link href="/live">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Start Live Protection
            </Button>
          </Link>
          <Link href="/scanner">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Scan Audio
            </Button>
          </Link>
        </div>
      </div>
    </GlassCard>
  )
}
