"use client"

import React, { useCallback, useState, useRef } from "react"
import { AudioWaveform, UploadCloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

interface AudioDropzoneProps {
  onFileSelect: (file: File) => void
  onError: (error: string) => void
}

const MAX_FILE_SIZE = 25 * 1024 * 1024 // 25 MB
const ALLOWED_TYPES = ["audio/wav", "audio/mpeg", "audio/mp4", "audio/x-m4a", "audio/mp3"]

export function AudioDropzone({ onFileSelect, onError }: AudioDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const validateAndSelectFile = (file: File) => {
    // Validate size
    if (file.size > MAX_FILE_SIZE) {
      onError("File is too large. Maximum size is 25 MB.")
      return
    }

    // Validate type (very basic frontend check)
    // Some browsers return empty type for unknown files, or mpeg for mp3. We also check extension.
    const isValidType = ALLOWED_TYPES.includes(file.type) || 
                        /\.(wav|mp3|m4a)$/i.test(file.name)
    
    if (!isValidType) {
      onError("Unsupported file format. Please upload WAV, MP3, or M4A.")
      return
    }

    onFileSelect(file)
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndSelectFile(e.dataTransfer.files[0])
    }
  }, [onFileSelect, onError])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSelectFile(e.target.files[0])
    }
  }

  return (
    <GlassCard level={2} className={`max-w-2xl mx-auto w-full transition-all duration-300 relative overflow-hidden ${isDragging ? "border-cyan-500 bg-cyan-500/5 scale-[1.01]" : ""}`}>
      <div 
        className="p-12 flex flex-col items-center justify-center text-center border-2 border-dashed border-transparent hover:border-border/50 rounded-xl cursor-pointer"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input 
          type="file" 
          ref={inputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".wav,.mp3,.m4a,audio/wav,audio/mpeg,audio/mp4,audio/x-m4a,audio/*"
        />

        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${isDragging ? "bg-cyan-500/20 text-cyan-500" : "bg-surface-elevated text-muted border border-border/50"}`}>
          {isDragging ? <UploadCloud className="h-8 w-8" /> : <AudioWaveform className="h-8 w-8" />}
        </div>
        
        <h2 className="text-xl font-bold text-foreground mb-2">
          {isDragging ? "Drop audio to scan" : "Upload an audio recording"}
        </h2>
        
        <p className="text-sm text-muted mb-6 max-w-sm">
          Choose a voice recording to prepare it for VoxShield analysis.
        </p>

        <Button variant="primary" className="mb-4 pointer-events-none" asChild>
          <span>Choose Audio</span>
        </Button>
        
        <p className="text-xs text-muted/80 font-medium">
          WAV, MP3, M4A &middot; Up to 25 MB<br/>
          <span className="font-normal opacity-75 mt-1 block">or drag and drop your file here</span>
        </p>
      </div>
    </GlassCard>
  )
}
