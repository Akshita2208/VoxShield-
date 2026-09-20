import * as React from "react"
import { cn } from "@/lib/utils"
import { AlertCircle, FileX, Loader2 } from "lucide-react"
import { Button } from "./button"

export function EmptyState({ 
  title, 
  description, 
  icon = FileX,
  action,
  className 
}: { 
  title: string
  description: string
  icon?: any
  action?: { label: string; onClick: () => void }
  className?: string
}) {
  const Icon = icon
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 text-center border border-dashed border-border rounded-xl bg-surface/50", className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/20 text-muted mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-secondary mt-1 mb-4 max-w-sm">{description}</p>
      {action && (
        <Button onClick={action.onClick} variant="secondary">{action.label}</Button>
      )}
    </div>
  )
}

export function ErrorState({ 
  title = "Something went wrong", 
  description, 
  onRetry,
  className 
}: { 
  title?: string
  description: string
  onRetry?: () => void
  className?: string
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 text-center border border-danger/20 rounded-xl bg-danger/5", className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-danger/10 text-danger mb-4">
        <AlertCircle className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-danger">{title}</h3>
      <p className="text-sm text-danger/80 mt-1 mb-4 max-w-sm">{description}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="danger">Try again</Button>
      )}
    </div>
  )
}

export function LoadingState({ text = "Loading...", className }: { text?: string, className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-12 text-center", className)}>
      <Loader2 className="h-8 w-8 text-primary animate-spin mb-4" />
      <p className="text-sm font-medium text-secondary animate-pulse">{text}</p>
    </div>
  )
}
