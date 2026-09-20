import * as React from "react"
import { cn } from "@/lib/utils"
import { ShieldCheck, Loader2, AlertTriangle, AlertOctagon, WifiOff } from "lucide-react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "safe" | "warning" | "critical" | "neutral" | "active"
}

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  const variants = {
    safe: "bg-success/10 text-success border border-success/20",
    warning: "bg-warning/10 text-warning border border-warning/20",
    critical: "bg-danger/10 text-danger border border-danger/20",
    neutral: "bg-muted/10 text-muted border border-muted/20",
    active: "bg-primary/10 text-primary border border-primary/20",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export interface StatusIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  status: "safe" | "analyzing" | "warning" | "critical" | "offline"
  label?: string
  showIcon?: boolean
  pulsing?: boolean
}

export function StatusIndicator({ 
  className, 
  status, 
  label, 
  showIcon = true,
  pulsing = false,
  ...props 
}: StatusIndicatorProps) {
  
  const config = {
    safe: {
      colorClass: "text-success",
      bgClass: "bg-success",
      borderClass: "border-success",
      icon: ShieldCheck,
      defaultLabel: "Safe / Protected"
    },
    analyzing: {
      colorClass: "text-primary",
      bgClass: "bg-primary",
      borderClass: "border-primary",
      icon: Loader2,
      defaultLabel: "Analyzing / Checking"
    },
    warning: {
      colorClass: "text-warning",
      bgClass: "bg-warning",
      borderClass: "border-warning",
      icon: AlertTriangle,
      defaultLabel: "Warning"
    },
    critical: {
      colorClass: "text-danger",
      bgClass: "bg-danger",
      borderClass: "border-danger",
      icon: AlertOctagon,
      defaultLabel: "Critical"
    },
    offline: {
      colorClass: "text-muted",
      bgClass: "bg-muted",
      borderClass: "border-muted",
      icon: WifiOff,
      defaultLabel: "Offline"
    }
  }

  const { colorClass, bgClass, borderClass, icon: Icon, defaultLabel } = config[status]

  return (
    <div className={cn("inline-flex items-center gap-2", colorClass, className)} {...props}>
      <div className="relative flex items-center justify-center">
        {pulsing && (
          <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-75", bgClass)}></span>
        )}
        <div className={cn("relative flex h-6 w-6 items-center justify-center rounded-full border-2", borderClass, "bg-background")}>
          {showIcon && <Icon className="h-3.5 w-3.5" />}
        </div>
      </div>
      <span className="text-sm font-medium tracking-wide uppercase">
        {label || defaultLabel}
      </span>
    </div>
  )
}
