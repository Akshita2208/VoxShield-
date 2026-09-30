"use client"

import React from "react"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface AuthStatusProps {
  type: "error" | "success"
  message: string
}

export function AuthStatus({ type, message }: AuthStatusProps) {
  if (!message) return null

  const isError = type === "error"
  const Icon = isError ? AlertCircle : CheckCircle2
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
        animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
        className="overflow-hidden"
      >
        <div 
          className={cn(
            "p-3 rounded-lg border flex items-start gap-3 text-sm",
            isError 
              ? "bg-danger/10 border-danger/20 text-danger" 
              : "bg-success/10 border-success/20 text-success"
          )}
        >
          <Icon className="h-5 w-5 shrink-0 mt-0.5" />
          <p className="font-medium">{message}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
