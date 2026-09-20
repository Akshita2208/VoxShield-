"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, ShieldAlert, Loader2, Play } from "lucide-react"

export type PipelineState = "idle" | "active" | "completed" | "warning" | "critical"

interface Step {
  id: string
  label: string
}

const STEPS: Step[] = [
  { id: "detect", label: "DETECT" },
  { id: "verify", label: "VERIFY" },
  { id: "assess", label: "ASSESS" },
  { id: "prevent", label: "PREVENT" },
]

export interface SecurityPipelineProps extends React.HTMLAttributes<HTMLDivElement> {
  activeStep?: number
  pipelineState?: PipelineState
}

export function SecurityPipeline({ 
  className, 
  activeStep = 0, 
  pipelineState = "idle",
  ...props 
}: SecurityPipelineProps) {
  
  const getStepStatus = (index: number) => {
    if (pipelineState === "idle") return "idle"
    if (index < activeStep) return "completed"
    if (index === activeStep) return pipelineState
    return "idle"
  }

  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed": return <Check className="h-4 w-4" />
      case "active": return <Loader2 className="h-4 w-4 animate-spin" />
      case "warning": return <ShieldAlert className="h-4 w-4 text-warning" />
      case "critical": return <ShieldAlert className="h-4 w-4 text-danger" />
      default: return <div className="h-2 w-2 rounded-full bg-current opacity-50" />
    }
  }

  const getStepColors = (status: string) => {
    switch (status) {
      case "completed": return "text-success border-success bg-success/10"
      case "active": return "text-primary border-primary bg-primary/10 shadow-[0_0_10px_rgba(37,99,235,0.3)]"
      case "warning": return "text-warning border-warning bg-warning/10 shadow-[0_0_10px_rgba(217,119,6,0.3)]"
      case "critical": return "text-danger border-danger bg-danger/10 shadow-[0_0_10px_rgba(225,29,72,0.3)]"
      default: return "text-muted border-border bg-surface-elevated"
    }
  }

  return (
    <div className={cn("w-full py-4", className)} {...props}>
      <div className="flex items-center justify-between relative">
        {/* Background Track */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-border rounded-full" />
        
        {/* Active Track */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full transition-all duration-500 ease-in-out" 
          style={{ width: `${(Math.min(activeStep, STEPS.length - 1) / (STEPS.length - 1)) * 100}%` }}
        />

        {STEPS.map((step, index) => {
          const status = getStepStatus(index)
          const colors = getStepColors(status)
          
          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
              <div 
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300",
                  colors
                )}
              >
                {getStepIcon(status)}
              </div>
              <span 
                className={cn(
                  "absolute -bottom-6 text-[10px] font-bold tracking-wider",
                  status === "idle" ? "text-muted" : "text-foreground"
                )}
              >
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
