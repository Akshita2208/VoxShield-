"use client"

import React from "react"
import { IdentityHeader } from "@/components/identity/identity-header"
import { IdentityOverview } from "@/components/identity/identity-overview"
import { MyIdentityCard } from "@/components/identity/my-identity-card"
import { TrustedContacts } from "@/components/identity/trusted-contacts"
import { IdentityFlow } from "@/components/identity/identity-flow"
import { IdentityPrivacy } from "@/components/identity/identity-privacy"

export default function IdentityPage() {
  
  // FUTURE AI CONTRACT
  // The UI should eventually be able to consume a speaker verification response such as:
  // {
  //   "speaker_match": true,
  //   "similarity": 0.91,
  //   "identity_id": "usr_abc123",
  //   "identity_name": "Jane Doe",
  //   "model_version": "voxshield-speaker-v1"
  // }
  
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-cyan-500/5 via-background to-background pointer-events-none" />
      
      <div className="flex-1 container mx-auto px-4 max-w-5xl pt-8 pb-20 relative z-10 flex flex-col">
        <IdentityHeader />
        
        <IdentityOverview />
        
        <MyIdentityCard />

        <TrustedContacts />

        <IdentityFlow />

        <IdentityPrivacy />
      </div>
    </div>
  )
}
