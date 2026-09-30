"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { VoiceWaveform } from "@/components/ui/voice-waveform"
import { StatusIndicator, Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <Badge variant="active" className="w-fit">
              VoxShield Voice Protection
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
              Know When a Voice <br className="hidden md:block" />
              <span className="text-primary">Isn't Real.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-xl">
              VoxShield detects AI-generated, synthetic, manipulated, or suspicious voice signals during protected communication and helps prevent impersonation-driven actions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/login" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full">
                  Get Protected
                </Button>
              </Link>
              <Link href="#how-it-works" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full">
                  See How It Works
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Visual Mock UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg mx-auto"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

            <GlassCard level={3} className="relative p-6 border border-border/50 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8 border-b border-border/50 pb-4">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-muted font-semibold mb-1">Status</span>
                  <StatusIndicator status="analyzing" label="Call Protected" pulsing={true} />
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-wider text-muted font-semibold block mb-1">Network</span>
                  <span className="text-sm font-medium text-foreground">Secure Channel</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-medium text-foreground">Voice Signal</span>
                    <span className="text-xs text-primary animate-pulse">Analyzing...</span>
                  </div>
                  <GlassCard level={1} className="p-4 bg-background/50 border border-border/50">
                    <VoiceWaveform active={true} intensity="medium" colorVariant="primary" bars={32} />
                  </GlassCard>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "DETECT", status: "safe" },
                    { label: "VERIFY", status: "safe" },
                    { label: "ASSESS", status: "analyzing" },
                    { label: "PREVENT", status: "neutral" }
                  ].map((step, idx) => (
                    <GlassCard key={idx} level={1} className="p-3 bg-background/30 border border-border/30 flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-wider">{step.label}</span>
                      <div className={`w-2 h-2 rounded-full ${
                        step.status === 'safe' ? 'bg-success' : 
                        step.status === 'analyzing' ? 'bg-primary animate-pulse' : 'bg-muted'
                      }`} />
                    </GlassCard>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
