// Future Data Contracts for VoxShield Threat Center

export type ThreatSeverity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export type ThreatType =
  | "VOICE_SPOOF"
  | "REPLAY_ATTACK"
  | "IDENTITY_MISMATCH"
  | "CONTEXT_RISK"
  | "SENSITIVE_ACTION"
  | "VERIFICATION_FAILURE";

export type SecurityDecision =
  | "ALLOW"
  | "STEP_UP_VERIFICATION"
  | "RESTRICT"
  | "BLOCK";

export interface ThreatEvent {
  event_id: string;
  timestamp: string;
  type: ThreatType;
  severity: ThreatSeverity;
  source: string;
  decision: SecurityDecision;
  reasons: string[];
  call_id?: string;
  model_version?: string;
}
