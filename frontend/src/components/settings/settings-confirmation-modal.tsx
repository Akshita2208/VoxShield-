"use client"

import React from "react"
import { AlertTriangle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SettingsConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function SettingsConfirmationModal({ isOpen, onClose, onConfirm }: SettingsConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-surface-elevated border border-border/50 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          <div className="flex items-center gap-2 text-warning">
            <AlertTriangle className="h-5 w-5" />
            <h2 className="font-semibold text-foreground">Reset Preferences</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-surface text-muted transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-sm text-foreground mb-4">
            Are you sure you want to restore VoxShield security preferences to their default configuration?
          </p>
          <p className="text-xs text-muted">
            This will discard any unsaved changes and reset all toggles on this page.
          </p>
        </div>
        
        <div className="flex items-center justify-end gap-3 p-4 border-t border-border/50 bg-surface/50">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            variant="primary"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            Confirm Reset
          </Button>
        </div>
      </div>
    </div>
  )
}
