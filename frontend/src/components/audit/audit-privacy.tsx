import { GlassCard } from "@/components/ui/glass-card"
import { EyeOff, X, Check } from "lucide-react"

export function AuditPrivacy() {
  const noStore = [
    "raw voice recordings",
    "raw audio",
    "voice embeddings",
    "biometric voice data"
  ]

  const store = [
    "credential references",
    "integrity hashes",
    "audit references"
  ]

  return (
    <GlassCard level={2} className="p-6 mb-8 bg-surface-elevated/50">
      <div className="flex items-center gap-3 mb-6">
        <EyeOff className="h-6 w-6 text-foreground" />
        <h2 className="text-2xl font-bold text-foreground">Privacy by Design</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-danger/5 border border-danger/20 rounded-xl p-5">
          <h3 className="text-sm font-bold tracking-wider text-danger uppercase mb-4 flex items-center gap-2">
            <X className="h-4 w-4" /> NEVER on blockchain
          </h3>
          <p className="text-sm text-foreground/80 mb-4">
            VoxShield should NOT put the following directly on blockchain:
          </p>
          <ul className="space-y-2">
            {noStore.map((item, i) => (
              <li key={i} className="text-sm text-muted flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-danger/50" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-success/5 border border-success/20 rounded-xl p-5">
          <h3 className="text-sm font-bold tracking-wider text-success uppercase mb-4 flex items-center gap-2">
            <Check className="h-4 w-4" /> Allowed on blockchain
          </h3>
          <p className="text-sm text-foreground/80 mb-4">
            Instead, blockchain can hold public verification data:
          </p>
          <ul className="space-y-2">
            {store.map((item, i) => (
              <li key={i} className="text-sm text-muted flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-success/50" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </GlassCard>
  )
}
