"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ScannerSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Check a Voice Before You Trust It.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Not in a protected communication environment? You can manually upload an audio file to analyze its authenticity before taking any sensitive action.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-muted-foreground bg-surface-elevated/30 w-fit mx-auto p-4 rounded-xl border border-border/50">
            <span>Upload Audio</span>
            <span className="hidden sm:inline">→</span>
            <span>Analyze</span>
            <span className="hidden sm:inline">→</span>
            <span>Authenticity Assessment</span>
            <span className="hidden sm:inline">→</span>
            <span className="text-primary">Security Result</span>
          </div>

          <div className="pt-4">
            {/* Using Link to conceptually point to scanner route without breaking navigation */}
            <Link href="/scanner">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Scan an Audio File
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
