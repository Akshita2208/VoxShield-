// Future Data Contracts for VoxShield Security History

export type HistoryEventType =
  | "PROTECTED_CALL"
  | "AUDIO_SCAN"
  | "VOICE_SPOOF"
  | "IDENTITY_VERIFICATION"
  | "CONTEXT_RISK"
  | "STEP_UP_VERIFICATION"
  | "ACTION_RESTRICTED"
  | "ACTION_BLOCKED";

export type HistoryStatus =
  | "ALLOWED"
  | "REVIEW_REQUIRED"
  | "VERIFICATION_REQUIRED"
  | "RESTRICTED"
  | "BLOCKED"
  | "COMPLETED";

export interface SecurityHistoryEvent {
  id: string;
  timestamp: string;
  type: HistoryEventType;
  title: string;
  description: string;
  status: HistoryStatus;
  severity?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  call_id?: string;
  model_version?: string;
}
