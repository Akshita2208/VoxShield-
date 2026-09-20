"use client"

import { GlassModal } from "@/components/ui/overlays"
import { Button } from "@/components/ui/button"
import { ShieldAlert } from "lucide-react"

export interface ConnectCredentialModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConnectCredentialModal({ isOpen, onClose }: ConnectCredentialModalProps) {
  return (
    <GlassModal isOpen={isOpen} onClose={onClose} title="Connect Credential">
      <div className="flex flex-col items-center text-center py-4">
        <div className="h-16 w-16 bg-muted/20 rounded-full flex items-center justify-center mb-6">
          <ShieldAlert className="h-8 w-8 text-muted-foreground" />
        </div>
        
        <p className="text-foreground font-medium text-lg mb-4">
          Blockchain integration is not connected yet.
        </p>
        
        <div className="bg-background/50 border border-border rounded-lg p-4 w-full text-left mb-6">
          <p className="text-sm text-muted mb-3">Future connection will allow VoxShield to:</p>
          <ul className="text-sm text-foreground space-y-2 pl-4 list-disc marker:text-primary">
            <li>register identity credentials</li>
            <li>verify credential integrity</li>
            <li>create tamper-evident audit references</li>
          </ul>
        </div>

        <p className="text-sm text-muted mb-6 bg-primary/5 border border-primary/10 rounded-md p-3 w-full text-center">
          Blockchain connection is currently unavailable in this prototype.
        </p>

        <div className="flex gap-3 w-full">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" className="flex-1" onClick={onClose}>
            Continue
          </Button>
        </div>
      </div>
    </GlassModal>
  )
}
