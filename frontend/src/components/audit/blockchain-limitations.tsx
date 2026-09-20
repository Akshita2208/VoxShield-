import { GlassCard } from "@/components/ui/glass-card"
import { XCircle, Info } from "lucide-react"

export function BlockchainLimitations() {
  const limitations = [
    "Detect AI-generated voices",
    "Analyze audio",
    "Replace the anti-spoofing model",
    "Store raw voice recordings",
    "Store biometric voice data directly on-chain"
  ]

  return (
    <GlassCard level={2} className="p-6 mb-8 border border-danger/20 bg-danger/5">
      <div className="flex items-center gap-3 mb-4">
        <Info className="h-6 w-6 text-danger" />
        <h2 className="text-xl font-bold text-foreground">What Blockchain Does NOT Do</h2>
      </div>
      
      <ul className="space-y-3 mb-6">
        {limitations.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-muted">
            <XCircle className="h-5 w-5 text-danger flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="bg-background/50 rounded-lg p-4 border border-border">
        <p className="text-sm text-foreground font-medium">
          Voice authenticity analysis is performed by VoxShield's AI layer. Blockchain is an integrity and audit layer.
        </p>
      </div>
    </GlassCard>
  )
}
