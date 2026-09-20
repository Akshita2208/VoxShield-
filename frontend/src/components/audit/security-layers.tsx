import { GlassCard } from "@/components/ui/glass-card"
import { ArrowDown, BrainCircuit, UserCheck, ShieldAlert, Fingerprint } from "lucide-react"

export function SecurityLayers() {
  const layers = [
    {
      name: "Layer 1",
      title: "AI / Anti-Spoofing",
      description: "Detect suspicious voice signals.",
      icon: BrainCircuit,
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20"
    },
    {
      name: "Layer 2",
      title: "Speaker Verification",
      description: "Compare against an optional trusted identity.",
      icon: UserCheck,
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20"
    },
    {
      name: "Layer 3",
      title: "Risk Engine",
      description: "Combine security and contextual signals.",
      icon: ShieldAlert,
      color: "text-warning",
      bg: "bg-warning/10",
      border: "border-warning/20"
    },
    {
      name: "Layer 4",
      title: "Blockchain Audit",
      description: "Protect integrity of selected identity/audit references.",
      icon: Fingerprint,
      color: "text-success",
      bg: "bg-success/10",
      border: "border-success/20",
      isFinal: true
    }
  ]

  return (
    <GlassCard level={1} className="p-6 mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-2">VoxShield Security Layers</h2>
      <p className="text-muted mb-8">
        Make clear that blockchain is the FINAL integrity layer, not the detection layer.
      </p>

      <div className="flex flex-col gap-2 max-w-2xl mx-auto">
        {layers.map((layer, index) => (
          <div key={index} className="flex flex-col">
            <div className={`flex items-center gap-4 p-4 rounded-xl border ${layer.bg} ${layer.border}`}>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 bg-background/50 border border-border`}>
                <layer.icon className={`h-5 w-5 ${layer.color}`} />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{layer.name}</span>
                  <span className="text-lg font-bold text-foreground">{layer.title}</span>
                </div>
                <p className="text-sm text-muted">{layer.description}</p>
              </div>
            </div>
            
            {index < layers.length - 1 && (
              <div className="flex justify-center py-2">
                <ArrowDown className="h-5 w-5 text-muted-foreground/50" />
              </div>
            )}
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
