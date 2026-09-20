"use client"

import React, { useState, useEffect } from "react"
import { AlertCircle, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SettingsSaveBarProps {
  isVisible: boolean;
  onSave: () => void;
  onDiscard: () => void;
}

export function SettingsSaveBar({ isVisible, onSave, onDiscard }: SettingsSaveBarProps) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setIsSaved(false);
    }
  }, [isVisible]);

  const handleSave = () => {
    setIsSaved(true);
    // Call onSave after a short delay so user can see the checkmark
    setTimeout(() => {
      onSave();
    }, 1200);
  };

  if (!isVisible && !isSaved) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4 animate-in slide-in-from-bottom-8 fade-in duration-300">
      <div className="bg-surface-elevated border border-border/50 shadow-lg shadow-black/20 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          {isSaved ? (
            <>
              <div className="h-8 w-8 rounded-full bg-success/20 text-success flex items-center justify-center">
                <Check className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-foreground">
                Preferences updated for this session.
              </p>
            </>
          ) : (
            <>
              <div className="h-8 w-8 rounded-full bg-warning/20 text-warning flex items-center justify-center">
                <AlertCircle className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-foreground">
                Unsaved changes
              </p>
            </>
          )}
        </div>

        {!isSaved && (
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button variant="ghost" className="flex-1 sm:flex-none" onClick={onDiscard}>
              Discard
            </Button>
            <Button variant="primary" className="flex-1 sm:flex-none" onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        )}
        
      </div>
    </div>
  )
}
