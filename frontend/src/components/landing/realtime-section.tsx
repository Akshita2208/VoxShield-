"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { StatusIndicator } from "@/components/ui/badge"

export function RealtimeSection() {
  return (
    <section id="protection" className="py-24 bg-surface-elevated/20 border-y border-border/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Protection That Works <br className="hidden md:block" />
              While the Conversation Happens.
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                VoxShield is designed for protected calling environments where voice can be analyzed in short, real-time windows.
              </p>
              <p>
                Our system continuously assesses acoustic risk signals during a session, enabling immediate security interventions the moment an anomaly is detected.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <GlassCard level={3} className="w-full max-w-sm p-6 border border-border/50">
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 bg-surface-elevated rounded-full mb-4 flex items-center justify-center border border-border">
                  <span className="text-xl font-bold text-muted">?</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Unknown Contact</h3>
                <span className="text-sm text-muted">Incoming Call</span>
              </div>

              <GlassCard level={1} className="p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Voice Analysis</span>
                  <StatusIndicator status="analyzing" label="Analyzing" pulsing={true} />
                </div>
                <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-2/3 animate-pulse rounded-full" />
                </div>
              </GlassCard>

              <div className="flex items-center justify-center pt-4 border-t border-border/50">
                <StatusIndicator status="safe" label="Call Protected" />
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
