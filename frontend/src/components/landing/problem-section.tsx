"use client"

import { motion } from "framer-motion"

export function ProblemSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-surface-elevated/30 border-y border-border/50">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Your ears can be fooled. <br />
            <span className="text-muted-foreground opacity-80">Your security system shouldn't be.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Generative AI can now reproduce voices with convincing accuracy. VoxShield adds a critical security layer around your communication, ensuring that trust is based on cryptographic and acoustic analysis, not just what you hear.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
