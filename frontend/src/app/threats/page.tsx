"use client"

import React from "react"
import { ThreatHeader } from "@/components/threats/threat-header"
import { ThreatOverview } from "@/components/threats/threat-overview"
import { ActiveThreats } from "@/components/threats/active-threats"
import { ThreatEventList } from "@/components/threats/threat-event-list"
import { ThreatPipeline } from "@/components/threats/threat-pipeline"
import { ThreatPrivacy } from "@/components/threats/threat-privacy"
import { ThreatQuickActions } from "@/components/threats/threat-quick-actions"

export default function ThreatsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="flex-1 container mx-auto px-4 pt-8 pb-20 relative z-10 flex flex-col">
        <ThreatHeader />
        
        <ThreatOverview />
        
        <ActiveThreats />
        
        <ThreatEventList />
        
        <ThreatPipeline />
        
        <ThreatQuickActions />

        <ThreatPrivacy />
      </div>
    </div>
  )
}
