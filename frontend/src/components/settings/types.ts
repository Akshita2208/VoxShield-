// Future Data Contracts for VoxShield Security Settings

export interface SecurityPreferences {
  // Security
  twoFactorEnabled: boolean;
  loginProtectionEnabled: boolean;
  
  // Protection
  protectedCallAnalysisEnabled: boolean;
  stepUpVerificationEnabled: boolean;
  sensitiveActionProtectionEnabled: boolean;
  challengeBeforeSensitiveActions: boolean;
  
  // Notifications
  threatAlertsEnabled: boolean;
  verificationNotificationsEnabled: boolean;
  protectionEventNotificationsEnabled: boolean;
}

export const defaultPreferences: SecurityPreferences = {
  twoFactorEnabled: false, // Defaulting to false as it requires setup
  loginProtectionEnabled: true,
  
  protectedCallAnalysisEnabled: true,
  stepUpVerificationEnabled: true,
  sensitiveActionProtectionEnabled: true,
  challengeBeforeSensitiveActions: true,
  
  threatAlertsEnabled: true,
  verificationNotificationsEnabled: true,
  protectionEventNotificationsEnabled: true,
}
