import * as React from "react"
import { cn } from "@/lib/utils"

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  trend?: {
    value: string
    direction: "up" | "down" | "neutral"
  }
}

export function MetricCard({ className, title, value, trend, ...props }: MetricCardProps) {
  return (
    <div className={cn("glass-2 rounded-xl p-6 flex flex-col gap-2", className)} {...props}>
      <span className="text-sm font-medium text-muted uppercase tracking-wider">{title}</span>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-foreground">{value}</span>
        {trend && (
          <span className={cn(
            "text-sm font-semibold",
            trend.direction === "up" ? "text-success" : 
            trend.direction === "down" ? "text-danger" : "text-muted"
          )}>
            {trend.value}
          </span>
        )}
      </div>
    </div>
  )
}

export function Divider({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) {
  return <hr className={cn("border-t border-border w-full my-4", className)} {...props} />
}

export function SectionHeader({ title, description, className, ...props }: { title: string, description?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-1 mb-6", className)} {...props}>
      <h2 className="text-2xl font-bold text-foreground tracking-tight">{title}</h2>
      {description && <p className="text-sm text-secondary">{description}</p>}
    </div>
  )
}

export function Avatar({ fallback, src, className, ...props }: { fallback: string, src?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full glass-2 items-center justify-center bg-surface-elevated text-foreground font-semibold", className)} {...props}>
      {src ? (
        <img src={src} alt="Avatar" className="h-full w-full object-cover" />
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  )
}
