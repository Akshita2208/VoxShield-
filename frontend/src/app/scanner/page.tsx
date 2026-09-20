"use client"

import React, { useState } from "react"
import { ScannerHeader } from "@/components/scanner/scanner-header"
import { Button } from "@/components/ui/button"
import { ScannerPrivacy } from "@/components/scanner/scanner-privacy"
import { AudioDropzone } from "@/components/scanner/audio-dropzone"
import { AudioPreview } from "@/components/scanner/audio-preview"
import { ScanProgress } from "@/components/scanner/scan-progress"
import { ScanResult } from "@/components/scanner/scan-result"
import { AnalysisLayers } from "@/components/scanner/analysis-layers"
import { AnimatePresence, motion } from "framer-motion"

type ScannerState = "idle" | "selected" | "scanning" | "result-genuine" | "result-suspicious"

export default function ScannerPage() {
  const [state, setState] = useState<ScannerState>("idle")
  const [file, setFile] = useState<File | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleFileSelect = (selectedFile: File) => {
    setErrorMsg(null)
    setFile(selectedFile)
    setState("selected")
  }

  const handleError = (msg: string) => {
    setErrorMsg(msg)
    setFile(null)
    setState("idle")
  }

  const handleRemove = () => {
    setFile(null)
    setState("idle")
    setErrorMsg(null)
  }

  const handleScan = () => {
    setState("scanning")
  }

  const handleScanComplete = () => {
    // Deterministic simulation based on file name length (just for prototype demo variety)
    const isSuspicious = file?.name.toLowerCase().includes("fake") || (file?.name.length || 0) % 2 === 0
    
    // FUTURE AI CONTRACT:
    // This UI is designed to eventually consume a real response like:
    // {
    //   "classification": "genuine", // or "suspicious"
    //   "spoof_probability": 0.08,
    //   "genuine_probability": 0.92,
    //   "confidence": 0.92,
    //   "model_version": "voxshield-cnn-v1"
    // }
    
    setState(isSuspicious ? "result-suspicious" : "result-genuine")
  }

  const handleReset = () => {
    setFile(null)
    setState("idle")
    setErrorMsg(null)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="flex-1 container mx-auto px-4 max-w-5xl pt-8 pb-20 relative z-10 flex flex-col">
        <ScannerHeader />
        
        {state === "idle" && <ScannerPrivacy />}

        {errorMsg && (
          <div className="max-w-2xl mx-auto w-full mb-6 p-6 bg-surface-elevated border border-danger/30 rounded-lg text-center flex flex-col items-center">
            <h3 className="font-semibold text-lg text-foreground mb-2">Unable to prepare this recording</h3>
            <p className="text-sm text-muted mb-6">The selected audio could not be loaded ({errorMsg}). Please try another file.</p>
            <Button variant="outline" onClick={handleReset}>Try Another File</Button>
          </div>
        )}

        <div className="flex-1 flex flex-col mt-8 relative">
          <AnimatePresence mode="wait">
            
            {state === "idle" && !errorMsg && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full"
              >
                <AudioDropzone onFileSelect={handleFileSelect} onError={handleError} />
              </motion.div>
            )}

            {state === "selected" && file && (
              <motion.div
                key="selected"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full"
              >
                <AudioPreview file={file} onRemove={handleRemove} onScan={handleScan} />
              </motion.div>
            )}

            {state === "scanning" && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full"
              >
                <ScanProgress onComplete={handleScanComplete} />
              </motion.div>
            )}

            {(state === "result-genuine" || state === "result-suspicious") && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full flex flex-col items-center"
              >
                <ScanResult 
                  result={state === "result-genuine" ? "genuine" : "suspicious"} 
                  onReset={handleReset} 
                />
                <AnalysisLayers />
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
