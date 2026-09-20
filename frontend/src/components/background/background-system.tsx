import * as React from "react"
import { cn } from "@/lib/utils"

export function PageBackground({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={cn("relative min-h-screen w-full overflow-x-hidden bg-background", className)}>
      <GridOverlay />
      <AmbientGlow />
      <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
    </div>
  )
}

export function GridOverlay() {
  return (
    <div 
      className="pointer-events-none absolute inset-0 z-0 opacity-20 dark:opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(to right, var(--color-border) 1px, transparent 1px),
          linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
        `,
        backgroundSize: '4rem 4rem',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black, transparent)'
      }}
    />
  )
}

export function AmbientGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Top right primary glow */}
      <div className="absolute -top-[20%] -right-[10%] h-[50vw] w-[50vw] rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10" />
      
      {/* Top left subtle cyan glow */}
      <div className="absolute -left-[10%] top-[10%] h-[40vw] w-[40vw] rounded-full bg-cyan-500/5 blur-[100px] dark:bg-cyan-500/10" />
    </div>
  )
}
