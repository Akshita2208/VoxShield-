"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Activity, Search, Fingerprint, AlertTriangle } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const ACTIONS = [
  {
    title: "Live Protection",
    description: "Protect a live conversation",
    icon: Activity,
    href: "/live",
    color: "text-primary",
  },
  {
    title: "Audio Scanner",
    description: "Analyze an audio recording",
    icon: Search,
    href: "/scanner",
    color: "text-cyan-500",
  },
  {
    title: "Identity",
    description: "Manage trusted identities",
    icon: Fingerprint,
    href: "/identity",
    color: "text-violet-500",
  },
  {
    title: "Threat Center",
    description: "Review security threats",
    icon: AlertTriangle,
    href: "/threats",
    color: "text-danger",
  }
]

export function QuickActions() {
  return (
    <div className="mb-12">
      <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ACTIONS.map((action, idx) => (
          <Link key={idx} href={action.href} className="group outline-none">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <GlassCard className="p-4 border-border/50 transition-all duration-300 group-hover:bg-surface-elevated group-hover:border-primary/30 group-hover:shadow-md group-focus-visible:ring-2 group-focus-visible:ring-primary h-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border/50 group-hover:border-primary/20 transition-colors">
                    <action.icon className={`h-4 w-4 ${action.color}`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{action.title}</h4>
                    <p className="text-xs text-muted mt-0.5">{action.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
