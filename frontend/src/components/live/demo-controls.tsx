"use client"

import React from "react"
import { Button } from "@/components/ui/button"

interface DemoControlsProps {
  state: "connecting" | "detecting" | "verifying" | "assessing" | "safe" | "suspicious" | "challenge" | "blocked" | "call_ended"
  onSimulateSafe: () => void
  onSimulateSuspicious: () => void
  onSimulatePass: () => void
  onSimulateFail: () => void
  onReset: () => void
}

export function DemoControls({ state, onSimulateSafe, onSimulateSuspicious, onSimulatePass, onSimulateFail, onReset }: DemoControlsProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-background/80 backdrop-blur-md border border-border rounded-lg p-4 shadow-xl w-64 max-w-[calc(100vw-2rem)]">
      <div className="flex items-center justify-between mb-3 border-b border-border/50 pb-2">
        <h4 className="text-xs font-bold text-foreground tracking-wider uppercase">Demo Controls</h4>
        <span className="text-[10px] font-semibold bg-primary/10 text-primary px-1.5 py-0.5 rounded">Prototype</span>
      </div>
      
      <div className="flex flex-col gap-2">
        {(state === "connecting" || state === "detecting" || state === "verifying" || state === "assessing" || state === "safe" || state === "suspicious") && (
          <>
            <Button size="sm" variant="success" onClick={onSimulateSafe} className="w-full text-xs h-8">
              Simulate Safe Call
            </Button>
            <Button size="sm" variant="warning" onClick={onSimulateSuspicious} className="w-full text-xs h-8">
              Simulate Suspicious Call
            </Button>
          </>
        )}

        {state === "challenge" && (
          <>
            <Button size="sm" variant="success" onClick={onSimulatePass} className="w-full text-xs h-8">
              Simulate Pass
            </Button>
            <Button size="sm" variant="danger" onClick={onSimulateFail} className="w-full text-xs h-8">
              Simulate Fail
            </Button>
          </>
        )}

        {state === "call_ended" && (
          <Button size="sm" variant="outline" onClick={onReset} className="w-full text-xs h-8">
            Reset Demo
          </Button>
        )}
      </div>
      
      <div className="mt-3 text-center">
        <p className="text-[10px] text-muted">Current State: <strong className="text-foreground">{state}</strong></p>
      </div>
    </div>
  )
}
