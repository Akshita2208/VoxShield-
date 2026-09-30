"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Mic, Fingerprint, BarChart3, ShieldCheck } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { cn } from "@/lib/utils"

const STAGES = [
  { 
    id: "detect", 
    title: "DETECT", 
    desc: "Identify whether the incoming voice signal appears genuine, synthetic, manipulated, or replayed.", 
    icon: Mic, 
    color: "#2563EB", 
    textColor: "text-primary", 
    bgColor: "bg-primary/10",
    borderColor: "border-primary/50" 
  },
  { 
    id: "verify", 
    title: "VERIFY", 
    desc: "Optionally verify whether the speaker matches a registered/trusted identity. (No mandatory registration required).", 
    icon: Fingerprint, 
    color: "#06B6D4", 
    textColor: "text-cyan-500", 
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/50"
  },
  { 
    id: "assess", 
    title: "ASSESS", 
    desc: "Combine voice signals with contextual risk signals (e.g., sensitive requests, urgency, OTP requests).", 
    icon: BarChart3, 
    color: "#7C6FF6", 
    textColor: "text-violet-500", 
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/50"
  },
  { 
    id: "prevent", 
    title: "PREVENT", 
    desc: "If risk is high, VoxShield can trigger step-up verification, restrict sensitive actions, or block communication.", 
    icon: ShieldCheck, 
    color: "#16A34A", 
    textColor: "text-success", 
    bgColor: "bg-success/10",
    borderColor: "border-success/50"
  },
]

export function ProtectionPipeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const particleRef = useRef<SVGCircleElement>(null)
  const trailRef = useRef<SVGLineElement>(null)
  const activeStageRef = useRef(0)
  const statusRef = useRef("Detecting voice signal...")
  
  const shouldReduceMotion = useReducedMotion()

  const [activeStage, setActiveStage] = useState(0)
  const [status, setStatus] = useState("Detecting voice signal...")
  const [pulseKey, setPulseKey] = useState(0)

  useEffect(() => {
    if (shouldReduceMotion) return

    let rafId: number
    let startTime = performance.now()
    
    // Cycle duration is ~6 seconds
    const loop = (now: number) => {
      let elapsed = now - startTime
      if (elapsed > 6000) {
        startTime = now
        elapsed = 0
        setPulseKey(prev => prev + 1) // Trigger re-render for pulses on new cycle
      }

      let currentStage = 0
      let startP = 0
      let endP = 0
      let localProgress = 0
      let newStatus = ""

      if (elapsed < 1500) {
        currentStage = 0
        startP = 0; endP = 1; localProgress = elapsed / 1500
        newStatus = "Detecting voice signal..."
      } else if (elapsed < 3000) {
        currentStage = 1
        startP = 1; endP = 2; localProgress = (elapsed - 1500) / 1500
        newStatus = "Verifying speaker..."
      } else if (elapsed < 4500) {
        currentStage = 2
        startP = 2; endP = 3; localProgress = (elapsed - 3000) / 1500
        newStatus = "Assessing contextual risk..."
      } else if (elapsed < 5500) {
        currentStage = 3
        startP = 3; endP = 3; localProgress = 1
        newStatus = "Applying protection..."
      } else {
        currentStage = 3
        startP = 3; endP = 3; localProgress = 1
        newStatus = "Protection pipeline complete"
      }

      // Only trigger React state updates when values change
      if (currentStage !== activeStageRef.current) {
        activeStageRef.current = currentStage
        setActiveStage(currentStage)
      }
      if (newStatus !== statusRef.current) {
        statusRef.current = newStatus
        setStatus(newStatus)
      }

      // Directly manipulate the DOM for continuous smooth animation without React re-renders
      if (containerRef.current && particleRef.current && trailRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        const isMobile = width < 1024

        // Exact physical coordinates
        const positions = isMobile ? [
          { x: width / 2, y: height * 0.12 },
          { x: width / 2, y: height * 0.3733 },
          { x: width / 2, y: height * 0.6266 },
          { x: width / 2, y: height * 0.88 },
        ] : [
          { x: width * 0.12, y: height / 2 },
          { x: width * 0.3733, y: height / 2 },
          { x: width * 0.6266, y: height / 2 },
          { x: width * 0.88, y: height / 2 },
        ]

        const startPos = positions[startP]
        const endPos = positions[endP]

        const cx = startPos.x + (endPos.x - startPos.x) * localProgress
        const cy = startPos.y + (endPos.y - startPos.y) * localProgress

        particleRef.current.setAttribute("cx", cx.toString())
        particleRef.current.setAttribute("cy", cy.toString())

        // Trail logic: Line from slightly behind particle to particle
        const trailLength = 80 // pixels
        let trailStartX = cx
        let trailStartY = cy

        if (isMobile) {
          trailStartY = Math.max(positions[0].y, cy - trailLength)
        } else {
          trailStartX = Math.max(positions[0].x, cx - trailLength)
        }

        trailRef.current.setAttribute("x1", trailStartX.toString())
        trailRef.current.setAttribute("y1", trailStartY.toString())
        trailRef.current.setAttribute("x2", cx.toString())
        strokeGradientUpdate(currentStage)
        trailRef.current.setAttribute("y2", cy.toString())

        const opacity = elapsed > 5500 ? (1 - (elapsed - 5500)/500) : 1
        particleRef.current.setAttribute("opacity", opacity.toString())
        trailRef.current.setAttribute("opacity", (opacity * 0.7).toString())
      }

      rafId = requestAnimationFrame(loop)
    }

    rafId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafId)
  }, [shouldReduceMotion])

  const strokeGradientUpdate = (stage: number) => {
    if(particleRef.current && trailRef.current) {
        const color = STAGES[stage].color
        particleRef.current.style.filter = `drop-shadow(0 0 10px ${color})`
        trailRef.current.style.stroke = color
    }
  }

  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">Four Layers of Voice Protection</h3>
          <p className="text-sm text-muted">VoxShield provides a continuous protection pipeline designed to catch impersonation attempts before they succeed.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {!shouldReduceMotion && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
            <span className="text-xs font-semibold text-muted uppercase tracking-wider">
              Prototype visualization
            </span>
          </div>
          <div className="bg-surface-elevated border border-border/50 rounded-full px-4 py-2 min-w-[240px] text-center shadow-sm">
            <AnimatePresence mode="wait">
              <motion.span
                key={status}
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.15 }}
                className="text-xs font-medium text-foreground inline-block"
              >
                {status}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {/* Visual Pipeline Container */}
        <div 
          ref={containerRef}
          className="relative px-8 lg:px-12 py-8 lg:py-12 flex flex-col lg:flex-row items-center justify-between min-h-[450px] lg:min-h-[220px] w-full"
        >
          {/* Base SVG Layer for exact positioning */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Defs for gradients */}
            <defs>
              <linearGradient id="wave-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                <stop offset="50%" stopColor="#2563EB" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Background Line (Desktop) */}
            <line x1="12%" y1="50%" x2="88%" y2="50%" stroke="currentColor" strokeWidth="2" className="text-border/40 hidden lg:block" />
            {/* Background Line (Mobile) */}
            <line x1="50%" y1="12%" x2="50%" y2="88%" stroke="currentColor" strokeWidth="2" className="text-border/40 lg:hidden" />

            {/* Audio Waveform (Animated via CSS/Framer Motion conceptually, but rendered in SVG) */}
            {!shouldReduceMotion && (
              <motion.path
                d="M 15% 50 Q 18% 40, 20% 50 T 25% 50"
                stroke="url(#wave-grad)"
                strokeWidth="2"
                fill="none"
                className="hidden lg:block opacity-60"
                animate={{
                  d: [
                    "M 15% 50 Q 18% 40, 20% 50 T 25% 50 T 30% 50",
                    "M 15% 50 Q 18% 60, 20% 50 T 25% 50 T 30% 50",
                    "M 15% 50 Q 18% 40, 20% 50 T 25% 50 T 30% 50"
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            )}

            {/* Signal Trail */}
            {!shouldReduceMotion && (
              <line 
                ref={trailRef}
                x1="0" y1="0" x2="0" y2="0" 
                stroke="#2563EB" 
                strokeWidth="4" 
                strokeLinecap="round" 
              />
            )}

            {/* Moving Particle */}
            {!shouldReduceMotion && (
              <circle 
                ref={particleRef} 
                cx="-100" cy="-100" 
                r="7" 
                fill="#ffffff" 
              />
            )}
          </svg>

          {/* HTML Nodes overlaying the SVG */}
          {STAGES.map((stage, idx) => {
            const isStageActive = idx === activeStage
            
            return (
              <div key={stage.id} className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  {/* Single Pulse Effect when Stage becomes active */}
                  <AnimatePresence>
                    {isStageActive && !shouldReduceMotion && (
                      <motion.div
                        key={`pulse-${pulseKey}-${idx}`}
                        initial={{ opacity: 0.8, scale: 1 }}
                        animate={{ opacity: 0, scale: 2.2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className={cn("absolute inset-0 rounded-full border-[3px] pointer-events-none", stage.borderColor)}
                      />
                    )}
                  </AnimatePresence>

                  <div
                    className={cn(
                      "w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-full border-[2px] flex items-center justify-center transition-all duration-300 relative z-10 bg-surface dark:bg-surface-elevated",
                      isStageActive ? cn(stage.borderColor, "scale-[1.05]") : "border-border/60 scale-100"
                    )}
                    style={{
                      boxShadow: isStageActive ? `0 0 20px ${stage.color}80` : undefined
                    }}
                  >
                    <stage.icon className={cn("h-6 w-6 lg:h-8 lg:w-8 transition-colors duration-300", isStageActive ? stage.textColor : "text-muted opacity-60")} />
                  </div>
                </div>
                
                {/* Desktop Text */}
                <div className="hidden lg:block absolute -bottom-10 text-center w-32 left-1/2 -translate-x-1/2">
                  <span className={cn(
                    "text-xs font-bold tracking-widest uppercase transition-colors duration-300",
                    isStageActive ? "text-foreground" : "text-muted"
                  )}>
                    {stage.title}
                  </span>
                </div>
                
                {/* Mobile Text */}
                <div className="lg:hidden mt-3 mb-8">
                  <span className={cn(
                    "text-xs font-bold tracking-widest uppercase transition-colors duration-300",
                    isStageActive ? "text-foreground" : "text-muted"
                  )}>
                    {stage.title}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {STAGES.map((stage, idx) => {
            const isStageActive = idx === activeStage
            
            return (
              <GlassCard 
                key={stage.id} 
                className={cn(
                  "p-5 transition-all duration-300 relative overflow-hidden group border",
                  isStageActive 
                    ? cn("bg-surface-elevated border-l-4 lg:border-l-0 lg:border-t-4 shadow-md scale-[1.01]") 
                    : "border-border/40 opacity-70 hover:opacity-100 bg-background scale-100"
                )}
                style={{
                  borderColor: isStageActive ? stage.color : undefined
                }}
              >
                {/* Active Accent Gradient Background */}
                <div 
                  className={cn(
                    "absolute inset-0 pointer-events-none transition-opacity duration-300", 
                    isStageActive ? cn(stage.bgColor, "opacity-15") : "opacity-0"
                  )} 
                />
                
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300", 
                  isStageActive ? stage.bgColor : "bg-surface-elevated border border-border/50"
                )}>
                  <stage.icon className={cn(
                    "h-5 w-5 transition-colors duration-300", 
                    isStageActive ? stage.textColor : "text-muted"
                  )} />
                </div>
                
                <h4 className={cn(
                  "text-sm font-bold tracking-wider mb-2 transition-colors duration-300", 
                  isStageActive ? "text-foreground" : "text-muted group-hover:text-foreground/80"
                )}>
                  {idx + 1}. {stage.title}
                </h4>
                
                <p className="text-xs text-muted leading-relaxed relative z-10">
                  {stage.desc}
                </p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </div>
  )
}
