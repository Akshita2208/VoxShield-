import { GlassCard } from "@/components/ui/glass-card"
import { StatusIndicator } from "@/components/ui/badge"

export function IntegrityStatus() {
  return (
    <GlassCard level={2} className="p-6 mb-8 border border-primary/20 bg-primary/5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-foreground mb-2">VoxShield Integrity Layer</h2>
          <p className="text-muted">
            Blockchain can provide tamper-evident verification for identity credentials and security audit records.
          </p>
        </div>
        <div className="flex-shrink-0 bg-background/50 rounded-xl p-4 border border-border">
          <StatusIndicator status="safe" label="READY FOR CONNECTION" pulsing={true} />
        </div>
      </div>
    </GlassCard>
  )
}
