"use client"

import React, { useState, useEffect } from "react"
import { SettingsHeader } from "@/components/settings/settings-header"
import { SecurityStatus } from "@/components/settings/security-status"
import { SettingsNavigation, SettingsSection } from "@/components/settings/settings-navigation"
import { SecuritySection } from "@/components/settings/security-section"
import { ProtectionSection } from "@/components/settings/protection-section"
import { PrivacySection } from "@/components/settings/privacy-section"
import { NotificationSection } from "@/components/settings/notification-section"
import { AccountSection } from "@/components/settings/account-section"
import { SettingsSaveBar } from "@/components/settings/settings-save-bar"
import { SettingsConfirmationModal } from "@/components/settings/settings-confirmation-modal"
import { SecurityPreferences, defaultPreferences } from "@/components/settings/types"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<SettingsSection>("security");
  
  // State management for settings
  const [preferences, setPreferences] = useState<SecurityPreferences>(defaultPreferences);
  const [savedPreferences, setSavedPreferences] = useState<SecurityPreferences>(defaultPreferences);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // Check for unsaved changes
  useEffect(() => {
    const isDirty = JSON.stringify(preferences) !== JSON.stringify(savedPreferences);
    setHasUnsavedChanges(isDirty);
  }, [preferences, savedPreferences]);

  const handlePreferenceChange = (key: keyof SecurityPreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    setSavedPreferences(preferences);
    setHasUnsavedChanges(false);
  };

  const handleDiscard = () => {
    setPreferences(savedPreferences);
    setHasUnsavedChanges(false);
  };

  const handleReset = () => {
    setPreferences(defaultPreferences);
    setSavedPreferences(defaultPreferences);
    setHasUnsavedChanges(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="flex-1 container mx-auto px-4 pt-8 lg:pt-16 pb-32 relative z-10 flex flex-col">
        <SettingsHeader />
        
        <SecurityStatus />
        
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 mt-4">
          
          {/* Left Navigation */}
          <div className="w-full md:w-64 shrink-0">
            <SettingsNavigation 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />
            
            <div className="mt-8 px-3">
              <Button 
                variant="ghost" 
                className="w-full text-muted hover:text-foreground justify-start"
                onClick={() => setIsResetModalOpen(true)}
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset Preferences
              </Button>
            </div>
          </div>
          
          {/* Right Content Area */}
          <div className="flex-1 min-w-0">
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              {activeSection === "security" && (
                <SecuritySection preferences={preferences} onChange={handlePreferenceChange} />
              )}
              {activeSection === "protection" && (
                <ProtectionSection preferences={preferences} onChange={handlePreferenceChange} />
              )}
              {activeSection === "privacy" && (
                <PrivacySection preferences={preferences} onChange={handlePreferenceChange} />
              )}
              {activeSection === "notifications" && (
                <NotificationSection preferences={preferences} onChange={handlePreferenceChange} />
              )}
              {activeSection === "account" && (
                <AccountSection />
              )}
            </div>
          </div>

        </div>

      </div>

      <SettingsSaveBar 
        isVisible={hasUnsavedChanges}
        onSave={handleSave}
        onDiscard={handleDiscard}
      />

      <SettingsConfirmationModal 
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={handleReset}
      />
    </div>
  )
}
