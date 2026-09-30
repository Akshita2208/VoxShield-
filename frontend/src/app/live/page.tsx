"use client"

import React, { useState, useEffect, useRef } from "react"
import { TopNav } from "@/components/navigation/top-nav"
import { MobileSideNav } from "@/components/navigation/mobile-side-nav"
import { LiveHeader } from "@/components/live/live-header"
import { CallIdentity } from "@/components/live/call-identity"
import { VoiceVisualizer } from "@/components/live/voice-visualizer"
import { AnalysisPipeline } from "@/components/live/analysis-pipeline"
import { SecurityStatus } from "@/components/live/security-status"
import { ChallengePanel } from "@/components/live/challenge-panel"
import { CallControls } from "@/components/live/call-controls"
import { DemoControls } from "@/components/live/demo-controls"

type LiveState = "connecting" | "detecting" | "verifying" | "assessing" | "safe" | "suspicious" | "challenge" | "blocked" | "call_ended"

export default function LiveProtectionPage() {
  const [state, setState] = useState<LiveState>("connecting")
  const stateRef = useRef(state)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Sync ref so async timeouts read the latest state
  useEffect(() => {
    stateRef.current = state
  }, [state])

  // Initial simulated flow
  useEffect(() => {
    startSimulatedAnalysis()
    return () => clearTimers()
  }, [])

  const clearTimers = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
  }

  const startSimulatedAnalysis = () => {
    clearTimers()
    setState("connecting")
    
    // connecting -> detecting
    timerRef.current = setTimeout(() => {
      if (stateRef.current !== "connecting") return
      setState("detecting")
      
      // detecting -> verifying
      timerRef.current = setTimeout(() => {
        if (stateRef.current !== "detecting") return
        setState("verifying")
        
        // verifying -> assessing
        timerRef.current = setTimeout(() => {
          if (stateRef.current !== "verifying") return
          setState("assessing")
          
          // assessing -> safe
          timerRef.current = setTimeout(() => {
            if (stateRef.current !== "assessing") return
            setState("safe")
          }, 2000)
        }, 2000)
      }, 2000)
    }, 2000)
  }

  const handleEndCall = () => {
    clearTimers()
    setState("call_ended")
  }

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      
      <TopNav />
      <MobileSideNav />

      <main className="flex-1 container mx-auto px-4 max-w-4xl pt-24 pb-8 flex flex-col relative z-10">
        <LiveHeader />
        
        <div className="flex-1 flex flex-col pt-8">
          <CallIdentity />
          
          <VoiceVisualizer state={state} />
          
          <AnalysisPipeline state={state} />
          
          <SecurityStatus 
            state={state} 
            onStartVerification={() => setState("challenge")} 
            onEndCall={handleEndCall} 
          />

          <ChallengePanel state={state} />

          <CallControls 
            onEndCall={handleEndCall} 
            disabled={state === "call_ended"} 
          />
        </div>
      </main>

      <DemoControls 
        state={state}
        onSimulateSafe={() => {
          clearTimers()
          setState("safe")
        }}
        onSimulateSuspicious={() => {
          clearTimers()
          setState("suspicious")
        }}
        onSimulatePass={() => {
          clearTimers()
          setState("safe")
        }}
        onSimulateFail={() => {
          clearTimers()
          setState("blocked")
        }}
        onReset={() => {
          startSimulatedAnalysis()
        }}
      />
    </div>
  )
}
