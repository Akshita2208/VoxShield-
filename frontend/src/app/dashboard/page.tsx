"use client"

import React from "react"
import { Footer } from "@/components/landing/footer"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ProtectionStatusCard } from "@/components/dashboard/protection-status-card"
import { ProtectionPipeline } from "@/components/dashboard/protection-pipeline"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { SecurityInsights } from "@/components/dashboard/security-insights"
import { PrivacyNotice } from "@/components/dashboard/privacy-notice"
import { DashboardCTA } from "@/components/dashboard/dashboard-cta"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="flex-1 container mx-auto px-6 max-w-6xl pt-8 pb-16 relative z-10">
        <DashboardHeader />
        <ProtectionStatusCard />
        <ProtectionPipeline />
        <QuickActions />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
          <div className="lg:col-span-1">
            <SecurityInsights />
          </div>
        </div>

        <PrivacyNotice />
        <DashboardCTA />
      </div>

      <Footer />
    </div>
  )
}
