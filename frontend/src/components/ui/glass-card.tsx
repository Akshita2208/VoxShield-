import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  level?: 1 | 2 | 3
}

export function GlassCard({ className, level = 2, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden text-foreground",
        level === 1 && "glass-1",
        level === 2 && "glass-2",
        level === 3 && "glass-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  level?: 1 | 2 | 3
}

export function GlassPanel({ className, level = 1, children, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-xl text-foreground",
        level === 1 && "glass-1",
        level === 2 && "glass-2",
        level === 3 && "glass-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
