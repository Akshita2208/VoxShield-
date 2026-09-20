"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Database, Lock } from "lucide-react"

export function PrivacySection() {
  const principles = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "No Mandatory Registration",
      desc: "Basic anti-spoofing detection works without requiring a registered voice sample."
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "No Universal Database",
      desc: "We do not build a centralized database of human voices. Raw audio is not unnecessarily retained."
    },
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "Integrity, Not Storage",
      desc: "Blockchain technology is used strictly as an audit and credential integrity layer, never for storing raw voice data."
    }
  ]

  return (
    <section className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            Security Without Building a Voice Database.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted max-w-2xl mx-auto"
          >
            Voice data is deeply personal. VoxShield handles it with explicit security and privacy controls, prioritizing your privacy alongside your protection.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
