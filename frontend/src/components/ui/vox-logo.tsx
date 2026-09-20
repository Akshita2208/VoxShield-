import * as React from "react"
import { cn } from "@/lib/utils"
import { Shield } from "lucide-react"

export function VoxLogo({ className, showText = true }: { className?: string, showText?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2 font-bold tracking-tight text-foreground", className)}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-sm overflow-hidden">
        {/* Subtle inner glow/glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
        <Shield className="h-5 w-5 relative z-10" />
      </div>
      {showText && (
        <span className="text-xl">
          Vox<span className="text-primary">Shield</span>
        </span>
      )}
    </div>
  )
}
