import { HeroSection } from "@/components/landing/hero"
import { ProblemSection } from "@/components/landing/problem-section"
import { ProtectionFlow } from "@/components/landing/protection-flow"
import { RealtimeSection } from "@/components/landing/realtime-section"
import { ScannerSection } from "@/components/landing/scanner-section"
import { SecurityDecisions } from "@/components/landing/security-decisions"
import { PrivacySection } from "@/components/landing/privacy-section"
import { FinalCta } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ProtectionFlow />
      <RealtimeSection />
      <ScannerSection />
      <SecurityDecisions />
      <PrivacySection />
      <FinalCta />
      <Footer />
    </div>
  )
}
