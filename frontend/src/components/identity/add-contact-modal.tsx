"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AddContactModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (name: string, relationship: string) => void
}

export function AddContactModal({ isOpen, onClose, onAdd }: AddContactModalProps) {
  const [name, setName] = useState("")
  const [relationship, setRelationship] = useState("")
  const [phone, setPhone] = useState("")

  const handleSave = () => {
    if (!name.trim()) return
    onAdd(name.trim(), relationship.trim() || "Contact")
    setName("")
    setRelationship("")
    setPhone("")
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-surface border border-border/50 rounded-xl shadow-2xl p-6 w-full max-w-md relative z-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-xl font-bold text-foreground mb-1">Add Trusted Contact</h3>
            <p className="text-sm text-muted mb-6">Set up an optional identity for speaker verification.</p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jane Doe"
                  className="w-full bg-background border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-cyan-500/50"
                  autoFocus
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">Relationship / Label</label>
                <input 
                  type="text" 
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  placeholder="e.g. Manager, Spouse"
                  className="w-full bg-background border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-cyan-500/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">Phone or Identifier (Optional)</label>
                <input 
                  type="text" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +1 555 123 4567"
                  className="w-full bg-background border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-cyan-500/50"
                />
              </div>
            </div>

            <div className="bg-surface-elevated rounded-lg p-4 border border-border/50 mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-1">Voice Verification Reference</h4>
              
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="h-4 w-4 text-warning" />
                <span className="text-xs font-bold text-warning uppercase">Not configured</span>
              </div>
              
              <Button variant="outline" className="w-full text-xs h-8 mb-2" onClick={() => {}}>
                Add Voice Reference
              </Button>
              <p className="text-[10px] text-muted text-center italic">
                Voice reference setup will be connected to the VoxShield verification service later.
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="ghost" onClick={onClose}>Cancel</Button>
              <Button variant="primary" onClick={handleSave} disabled={!name.trim()}>Save Contact</Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
