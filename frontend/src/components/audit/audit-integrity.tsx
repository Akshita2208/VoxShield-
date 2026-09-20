import { GlassCard } from "@/components/ui/glass-card"
import { History } from "lucide-react"

export function AuditIntegrity() {
  return (
    <GlassCard level={1} className="p-6 mb-8">
      <div className="flex items-center gap-3 mb-2">
        <History className="h-6 w-6 text-foreground" />
        <h2 className="text-2xl font-bold text-foreground">Audit Integrity</h2>
      </div>
      <p className="text-muted mb-6">
        Important security events can later be associated with tamper-evident integrity references.
      </p>
      
      <div className="bg-background/50 border border-border border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center">
        <div className="h-12 w-12 bg-muted/10 rounded-full flex items-center justify-center mb-4">
          <History className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-foreground font-medium mb-1">No audit records connected</p>
        <p className="text-sm text-muted">
          Audit records will appear here when blockchain auditing is connected.
        </p>
      </div>
    </GlassCard>
  )
}
