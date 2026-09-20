"use client"

import { useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { ConnectCredentialModal } from "./connect-credential-modal"
import { useRouter } from "next/navigation"

export function CredentialStatus({ status }: { status: "NOT_CONNECTED" | "PENDING" | "VERIFIED" | "REVOKED" | "ERROR" }) {
  const statusStyles = {
    NOT_CONNECTED: "text-muted",
    PENDING: "text-warning",
    VERIFIED: "text-success",
    REVOKED: "text-danger",
    ERROR: "text-danger"
  }

  const statusDisplay = {
    NOT_CONNECTED: "Not connected",
    PENDING: "Pending",
    VERIFIED: "Verified",
    REVOKED: "Revoked",
    ERROR: "Error"
  }

  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-muted uppercase font-bold tracking-wider">Credential Status</span>
      <span className={`text-sm font-medium ${statusStyles[status]}`}>
        {statusDisplay[status]}
      </span>
    </div>
  )
}

export function IdentityCredential() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  return (
    <>
      <GlassCard level={1} className="p-6 mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Identity Credential</h2>
        <p className="text-muted mb-6">
          A future blockchain credential can provide a tamper-evident reference for a trusted identity.
        </p>
        
        <div className="bg-background/50 border border-border rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <CredentialStatus status="NOT_CONNECTED" />
          
          <div className="flex items-center gap-2 text-sm text-muted italic">
            No blockchain credential connected
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Connect Credential
          </Button>
          <Button variant="outline" onClick={() => router.push('/identity')}>
            View Identity
          </Button>
        </div>
      </GlassCard>

      <ConnectCredentialModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
