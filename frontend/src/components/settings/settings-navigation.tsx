"use client"

import React from "react"
import { Shield, ShieldAlert, Eye, Bell, User, Fingerprint } from "lucide-react"

export type SettingsSection = "security" | "protection" | "privacy" | "notifications" | "account";

interface SettingsNavigationProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

export function SettingsNavigation({ activeSection, onSectionChange }: SettingsNavigationProps) {
  
  const navItems = [
    { id: "security", label: "Security", icon: Shield },
    { id: "protection", label: "Protection Controls", icon: ShieldAlert },
    { id: "privacy", label: "Privacy & Data", icon: Eye },
    { id: "audit", label: "Identity & Audit Integrity", icon: Fingerprint, href: "/audit" },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "account", label: "Account & Access", icon: User },
  ] as const;

  return (
    <div className="flex flex-col gap-2 min-w-[220px]">
      <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2 px-3">Settings</h3>
      
      {navItems.map((item) => {
        const Icon = item.icon;
        
        // Handle external/direct route links
        if ('href' in item) {
          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left text-foreground hover:bg-surface-elevated`}
            >
              <Icon className={`h-4 w-4 text-muted`} />
              {item.label}
            </a>
          )
        }
        
        // Handle internal section changes
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id as SettingsSection)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
              isActive 
                ? "bg-primary/10 text-primary" 
                : "text-foreground hover:bg-surface-elevated"
            }`}
          >
            <Icon className={`h-4 w-4 ${isActive ? "text-primary" : "text-muted"}`} />
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
