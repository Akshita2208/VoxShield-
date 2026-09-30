"use client"

import React, { useEffect, useState, useRef } from "react"
import { Play, Pause, FileAudio, Trash2, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

interface AudioPreviewProps {
  file: File
  onRemove: () => void
  onScan: () => void
}

export function AudioPreview({ file, onRemove, onScan }: AudioPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState<number | null>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [audioUrl, setAudioUrl] = useState<string>("")
  
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const url = URL.createObjectURL(file)
    setAudioUrl(url)
    
    const audio = new Audio(url)
    audioRef.current = audio

    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration)
    })
    
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime)
    })
    
    audio.addEventListener("ended", () => {
      setIsPlaying(false)
      setCurrentTime(0)
    })

    return () => {
      audio.pause()
      URL.revokeObjectURL(url)
    }
  }, [file])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const formatTime = (time: number | null) => {
    if (time === null || isNaN(time) || !isFinite(time)) return "00:00"
    const m = Math.floor(time / 60)
    const s = Math.floor(time % 60)
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
  }

  // Get extension from name or type
  const getExt = (name: string) => {
    const parts = name.split(".")
    return parts.length > 1 ? parts.pop()?.toUpperCase() : "AUDIO"
  }

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0

  return (
    <GlassCard level={2} className="max-w-2xl mx-auto w-full p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
            <FileAudio className="h-6 w-6" />
          </div>
          <div className="min-w-0 overflow-hidden">
            <h3 className="text-base font-semibold text-foreground truncate max-w-[200px] sm:max-w-[300px]">
              {file.name}
            </h3>
            <p className="text-sm text-muted">
              {getExt(file.name)} &middot; {formatSize(file.size)}
            </p>
          </div>
        </div>
      </div>

      {/* Visualizer Mock Area */}
      <div className="w-full bg-surface-elevated border border-border/50 rounded-lg p-4 mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors shrink-0"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-1" />}
          </button>
          
          <div className="flex-1">
            {/* Fake waveform rendering */}
            <div className="w-full h-8 flex items-center gap-0.5 mb-2 relative">
              {/* Progress Overlay */}
              <div 
                className="absolute left-0 top-0 bottom-0 bg-primary/20 z-10 pointer-events-none transition-all duration-75"
                style={{ width: `${progressPercentage}%` }}
              />
              {/* Generate deterministic bars based on filename length so it looks like a waveform */}
              {Array.from({ length: 40 }).map((_, i) => {
                const h = 20 + (Math.sin(i * 0.5 + file.name.length) * 10) + (Math.cos(i * 0.2) * 5)
                return (
                  <div key={i} className="flex-1 bg-border/80 rounded-full overflow-hidden flex items-end">
                    <div 
                      className="w-full bg-primary/40 rounded-full transition-all"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                )
              })}
            </div>
            
            <div className="flex justify-between text-xs font-medium text-muted font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{duration ? formatTime(duration) : "Loading..."}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/50 pt-6">
        <Button variant="ghost" className="text-danger hover:text-danger hover:bg-danger/10 w-full sm:w-auto" onClick={onRemove}>
          <Trash2 className="h-4 w-4 mr-2" />
          Remove
        </Button>
        <Button variant="primary" className="w-full sm:w-auto" onClick={onScan}>
          <ShieldCheck className="h-4 w-4 mr-2" />
          Scan Audio
        </Button>
      </div>
    </GlassCard>
  )
}
