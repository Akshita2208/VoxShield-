export interface BlockchainCredential {
  credentialId: string;
  status:
    | "NOT_CONNECTED"
    | "PENDING"
    | "VERIFIED"
    | "REVOKED"
    | "ERROR";
  network?: string;
  address?: string;
  transactionHash?: string;
}

export interface AuditRecord {
  id: string;
  eventType:
    | "IDENTITY_REGISTERED"
    | "IDENTITY_UPDATED"
    | "IDENTITY_REVOKED"
    | "SECURITY_EVENT"
    | "VERIFICATION_EVENT"
    | "PROTECTION_EVENT";
  timestamp: string;
  integrityStatus: "VERIFIED" | "PENDING" | "FAILED";
  hashReference?: string;
  transactionReference?: string;
  network?: string;
  blockNumber?: number;
}
