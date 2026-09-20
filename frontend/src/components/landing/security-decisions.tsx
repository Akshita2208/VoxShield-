"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"

export function SecurityDecisions() {
  const decisions = [
    { level: "LOW RISK", action: "Allow", variant: "safe" as const, desc: "Normal communication flow." },
    { level: "MEDIUM RISK", action: "Step-Up Verification", variant: "warning" as const, desc: "Prompt for secondary authentication." },
    { level: "HIGH RISK", action: "Restrict", variant: "critical" as const, desc: "Limit access to sensitive actions." },
    { level: "CRITICAL", action: "Block", variant: "critical" as const, desc: "Terminate communication." }
  ]

  return (
    <section id="security" className="py-24 bg-surface-elevated/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Detection Informs Action
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Detection is not the final decision. VoxShield integrates with your security policies to take proportional action based on assessed risk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {decisions.map((decision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard level={2} className="h-full p-6 flex flex-col items-center text-center">
                <Badge variant={decision.variant} className="mb-6">
                  {decision.level}
                </Badge>
                <div className="text-2xl font-bold text-foreground mb-2">
                  → {decision.action}
                </div>
                <p className="text-sm text-muted mt-auto">
                  {decision.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
