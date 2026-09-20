import { GlassCard } from "@/components/ui/glass-card"
import { ArrowDown, Database, FileText, Lock, Shield, CheckCircle } from "lucide-react"

export function HashExplanation() {
  const steps = [
    { icon: Database, label: "Security Event" },
    { icon: FileText, label: "Event Metadata" },
    { icon: Lock, label: "Cryptographic Hash" },
    { icon: Shield, label: "Blockchain Reference" },
    { icon: CheckCircle, label: "Integrity Verification" }
  ]

  return (
    <GlassCard level={1} className="p-6 mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-4">How Integrity Verification Works</h2>
      <p className="text-muted mb-8 max-w-3xl">
        VoxShield can store a cryptographic reference to important metadata rather than placing sensitive voice or audio data on-chain.
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col items-center text-center w-32">
              <div className="h-12 w-12 bg-surface-elevated border border-border rounded-full flex items-center justify-center mb-3 text-primary shadow-sm">
                <step.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold text-foreground">{step.label}</span>
            </div>
            
            {index < steps.length - 1 && (
              <div className="flex items-center justify-center text-muted-foreground my-2 md:my-0 md:mx-2">
                <ArrowDown className="h-5 w-5 md:hidden" />
                <div className="hidden md:block w-8 border-t-2 border-dashed border-border"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
