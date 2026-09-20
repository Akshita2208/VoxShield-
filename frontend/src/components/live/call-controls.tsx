"use client"

import React, { useState } from "react"
import { Mic, MicOff, Volume2, VolumeX, PhoneOff } from "lucide-react"

interface CallControlsProps {
  onEndCall: () => void
  disabled?: boolean
}

export function CallControls({ onEndCall, disabled = false }: CallControlsProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [isSpeaker, setIsSpeaker] = useState(true)

  return (
    <div className="flex items-center justify-center gap-6 py-6 mt-auto">
      <button
        disabled={disabled}
        onClick={() => setIsMuted(!isMuted)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
          isMuted ? "bg-surface-elevated text-foreground" : "bg-surface border border-border/50 text-foreground"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-surface-elevated hover:scale-105"}`}
      >
        {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
      </button>

      <button
        disabled={disabled}
        onClick={onEndCall}
        className={`w-16 h-16 rounded-full flex items-center justify-center bg-danger text-white shadow-lg transition-all ${
          disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-danger/90 hover:scale-105 hover:shadow-danger/20"
        }`}
      >
        <PhoneOff className="h-7 w-7" />
      </button>

      <button
        disabled={disabled}
        onClick={() => setIsSpeaker(!isSpeaker)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
          !isSpeaker ? "bg-surface-elevated text-foreground" : "bg-surface border border-border/50 text-foreground"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-surface-elevated hover:scale-105"}`}
      >
        {!isSpeaker ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
      </button>
    </div>
  )
}
