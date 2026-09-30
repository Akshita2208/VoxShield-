"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalCta() {
  return (
    <section className="py-32 relative overflow-hidden bg-primary/5 border-t border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Make Voice <br className="hidden md:block" />
            <span className="text-primary">Trustworthy Again.</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Add a security layer between convincing voices and sensitive actions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/login" className="w-full sm:w-auto">
              <Button size="lg" variant="primary" className="w-full px-8">
                Get Protected
              </Button>
            </Link>
            <Link href="#how-it-works" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full px-8">
                Explore How It Works
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
