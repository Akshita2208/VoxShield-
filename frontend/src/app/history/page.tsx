"use client"

import React from "react"
import { TopNav } from "@/components/navigation/top-nav"
import { MobileSideNav } from "@/components/navigation/mobile-side-nav"
import { HistoryHeader } from "@/components/history/history-header"
import { HistorySummary } from "@/components/history/history-summary"
import { HistoryList } from "@/components/history/history-list"
import { HistoryPrivacy } from "@/components/history/history-privacy"

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      
      <TopNav />
      <MobileSideNav />

      <main className="flex-1 container mx-auto px-4 pt-24 pb-20 relative z-10 flex flex-col">
        <HistoryHeader />
        
        <HistorySummary />
        
        <HistoryList />
        
        <HistoryPrivacy />
      </main>
    </div>
  )
}
