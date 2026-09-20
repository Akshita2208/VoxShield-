import { GlassCard } from "@/components/ui/glass-card"
import { UserCircle, ShieldCheck, Fingerprint } from "lucide-react"

export function BlockchainPurpose() {
  const cards = [
    {
      title: "IDENTITY CREDENTIALS",
      description: "Helps verify that a registered identity credential has not been altered.",
      icon: UserCircle,
    },
    {
      title: "AUDIT RECORDS",
      description: "Provides tamper-evident references for important security events.",
      icon: ShieldCheck,
    },
    {
      title: "INTEGRITY VERIFICATION",
      description: "Allows future systems to compare stored hashes against recorded integrity references.",
      icon: Fingerprint,
    }
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">What Blockchain Protects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <GlassCard key={index} level={1} className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <card.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-sm font-bold tracking-widest text-foreground uppercase mb-2">{card.title}</h3>
            <p className="text-muted text-sm">{card.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
