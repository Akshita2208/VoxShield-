"use client"

import * as React from "react"
import { GlassCard, GlassPanel } from "@/components/ui/glass-card"
import { Button, IconButton } from "@/components/ui/button"
import { Badge, StatusIndicator } from "@/components/ui/badge"
import { GlassInput, GlassSelect } from "@/components/ui/inputs"
import { GlassModal, GlassTooltip } from "@/components/ui/overlays"
import { VoiceWaveform } from "@/components/ui/voice-waveform"
import { MetricCard, SectionHeader, Divider, Avatar } from "@/components/ui/data-display"
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/states"
import { Bell, ShieldCheck, AlertTriangle } from "lucide-react"

export default function DesignSystemPage() {
  const [modalOpen, setModalOpen] = React.useState(false)

  return (
    <div className="container max-w-5xl mx-auto py-12 px-6 flex flex-col gap-12 relative z-10">
      
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">VOXSHIELD DESIGN SYSTEM</h1>
        <p className="text-lg text-secondary">BLOCK 1 PREVIEW</p>
      </div>

      <section>
        <SectionHeader title="1. Glass Cards & Panels" description="Three distinct layers of elevation and blur." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard level={1} className="p-6">
            <h3 className="font-semibold mb-2">Level 1 - Subtle Glass</h3>
            <p className="text-sm text-secondary">Used for large background panels and secondary surfaces.</p>
          </GlassCard>
          
          <GlassCard level={2} className="p-6">
            <h3 className="font-semibold mb-2">Level 2 - Standard Glass</h3>
            <p className="text-sm text-secondary">Used for primary feature and metric cards.</p>
          </GlassCard>
          
          <GlassCard level={3} className="p-6">
            <h3 className="font-semibold mb-2">Level 3 - Focus Glass</h3>
            <p className="text-sm text-secondary">Used for overlays, modals, and critical alerts.</p>
          </GlassCard>
        </div>
      </section>

      <Divider />

      <section>
        <SectionHeader title="2. Typography" description="Hierarchy using the system sans font." />
        <GlassCard level={1} className="p-8 flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Heading 1</h1>
          <h2 className="text-3xl font-semibold tracking-tight">Heading 2</h2>
          <h3 className="text-2xl font-medium tracking-tight">Heading 3</h3>
          <p className="text-base text-foreground">Body Text - A modern, clean, and highly readable font suitable for long-form reading and UI labels. Represents premium and professional security software.</p>
          <p className="text-sm text-secondary">Body Small - Secondary information and helper text.</p>
          <span className="text-xs uppercase tracking-wider font-semibold text-muted">Label & Caption Text</span>
        </GlassCard>
      </section>

      <Divider />

      <section>
        <SectionHeader title="3. Buttons" description="Interactive elements with different variants and sizes." />
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large Button</Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <IconButton variant="primary"><ShieldCheck className="h-5 w-5" /></IconButton>
            <IconButton variant="secondary"><Bell className="h-5 w-5" /></IconButton>
            <IconButton variant="outline"><AlertTriangle className="h-5 w-5" /></IconButton>
            <IconButton variant="ghost"><Bell className="h-5 w-5" /></IconButton>
          </div>
        </div>
      </section>

      <Divider />

      <section>
        <SectionHeader title="4. Badges & Status" description="Semantic state indicators." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard level={1} className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold mb-2">Badges</h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="safe">Safe</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="critical">Critical</Badge>
              <Badge variant="active">Active</Badge>
              <Badge variant="neutral">Neutral</Badge>
            </div>
          </GlassCard>
          
          <GlassCard level={1} className="p-6 flex flex-col gap-4">
            <h3 className="font-semibold mb-2">Status Indicators</h3>
            <div className="flex flex-col gap-3">
              <StatusIndicator status="safe" />
              <StatusIndicator status="analyzing" pulsing />
              <StatusIndicator status="warning" />
              <StatusIndicator status="critical" pulsing />
              <StatusIndicator status="offline" />
            </div>
          </GlassCard>
        </div>
      </section>

      <Divider />

      <section>
        <SectionHeader title="5. Data Display" description="Metric cards and avatars." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard title="Threats Prevented" value="1,284" trend={{ value: "+12%", direction: "up" }} />
          <MetricCard title="Active Sessions" value="42" trend={{ value: "-3", direction: "down" }} />
          <MetricCard title="System Load" value="18%" trend={{ value: "Stable", direction: "neutral" }} />
        </div>
        <div className="flex gap-4">
          <Avatar fallback="US" />
          <Avatar fallback="AX" />
          <Avatar fallback="JD" />
        </div>
      </section>

      <Divider />

      <section>
        <SectionHeader title="6. Inputs & Forms" description="Glass-style form elements." />
        <GlassCard level={1} className="p-6 max-w-md flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email Address</label>
            <GlassInput type="email" placeholder="Enter your email" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Session Type</label>
            <GlassSelect>
              <option>Incoming Call</option>
              <option>Outgoing Call</option>
              <option>Audio File Analysis</option>
            </GlassSelect>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-danger">Error State</label>
            <GlassInput type="text" error value="Invalid input" readOnly />
          </div>
        </GlassCard>
      </section>

      <Divider />

      <section>
        <SectionHeader title="7. Live Interactions" description="Waveforms." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard level={2} className="p-6 flex flex-col items-center justify-center min-h-[200px]">
            <h3 className="font-semibold mb-6 self-start">Voice Waveform (Visual)</h3>
            <VoiceWaveform active={true} intensity="medium" colorVariant="primary" />
          </GlassCard>
          
          <GlassCard level={2} className="p-6 flex flex-col items-center justify-center min-h-[200px]">
            <h3 className="font-semibold mb-6 self-start">Voice Waveform (Critical)</h3>
            <VoiceWaveform active={true} intensity="high" colorVariant="danger" />
          </GlassCard>
        </div>
      </section>

      <Divider />

      <section>
        <SectionHeader title="8. UI States & Overlays" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <EmptyState title="No Threats Found" description="Your communication channels are currently secure." />
          <ErrorState description="Failed to connect to the analysis engine. Please check your connection." onRetry={() => {}} />
          <GlassCard level={1}>
            <LoadingState text="Analyzing audio stream..." />
          </GlassCard>
        </div>
        
        <div className="flex gap-4">
          <Button onClick={() => setModalOpen(true)}>Open Glass Modal</Button>
          <GlassTooltip content="This is a secure action" position="top">
            <Button variant="outline">Hover for Tooltip</Button>
          </GlassTooltip>
        </div>
        
        <GlassModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Security Alert Details">
          <p className="text-secondary mb-6">
            Detailed information about the detected threat would appear here. 
            This modal uses a level 3 glass effect with an animated entrance.
          </p>
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setModalOpen(false)}>Acknowledge</Button>
          </div>
        </GlassModal>
      </section>

    </div>
  )
}
