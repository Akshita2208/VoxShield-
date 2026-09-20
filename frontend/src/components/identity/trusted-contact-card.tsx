"use client"

import React from "react"
import { User, AlertCircle, Edit2, Trash2, Fingerprint } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TrustedContactCardProps {
  id: string
  name: string
  relationship: string
  onRemove: (id: string) => void
}

export function TrustedContactCard({ id, name, relationship, onRemove }: TrustedContactCardProps) {
  return (
    <div className="bg-surface border border-border/50 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
          <User className="h-6 w-6 text-cyan-500" />
        </div>
        <div>
          <h4 className="text-base font-bold text-foreground">{name}</h4>
          <p className="text-xs text-muted mb-2">{relationship}</p>
          <div className="flex items-center gap-1.5 bg-surface-elevated px-2 py-1 rounded border border-border/50 inline-flex">
            <span className="text-[10px] text-muted font-medium">Identity reference:</span>
            <AlertCircle className="h-3 w-3 text-warning ml-1" />
            <span className="text-[10px] text-warning font-bold uppercase tracking-wider">Not configured</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto border-t sm:border-t-0 border-border/50 pt-4 sm:pt-0 mt-2 sm:mt-0">
        <Button variant="outline" size="sm" className="flex-1 sm:flex-none h-8 text-xs">
          <Fingerprint className="h-3 w-3 mr-1.5" />
          Verify
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted hover:text-foreground">
          <Edit2 className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-muted hover:text-danger hover:bg-danger/10"
          onClick={() => onRemove(id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      
    </div>
  )
}
