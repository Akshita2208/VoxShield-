import { AuditHeader } from "@/components/audit/audit-header"
import { IntegrityStatus } from "@/components/audit/integrity-status"
import { BlockchainPurpose } from "@/components/audit/blockchain-purpose"
import { BlockchainLimitations } from "@/components/audit/blockchain-limitations"
import { IdentityCredential } from "@/components/audit/identity-credential"
import { AuditIntegrity } from "@/components/audit/audit-integrity"
import { HashExplanation } from "@/components/audit/hash-explanation"
import { AuditPrivacy } from "@/components/audit/audit-privacy"
import { SecurityLayers } from "@/components/audit/security-layers"

export default function AuditPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <AuditHeader />
      
      <div className="flex flex-col gap-8">
        <IntegrityStatus />
        
        <BlockchainPurpose />
        
        <BlockchainLimitations />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <IdentityCredential />
          <AuditIntegrity />
        </div>
        
        <HashExplanation />
        
        <AuditPrivacy />
        
        <SecurityLayers />
      </div>
    </div>
  )
}
