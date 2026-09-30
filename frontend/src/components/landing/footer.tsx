"use client"

import Link from "next/link"
import { VoxLogo } from "../ui/vox-logo"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-2 space-y-4">
            <VoxLogo />
            <p className="text-sm text-muted max-w-xs">
              Real-Time AI Voice Identity & Anti-Spoofing Security Platform.
              Protecting communication from impersonation.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-foreground tracking-wider uppercase">Product</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="#how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="#protection" className="hover:text-primary transition-colors">Protection</Link>
              </li>
              <li>
                <Link href="/scanner" className="hover:text-primary transition-colors">Scanner</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-foreground tracking-wider uppercase">Security & Privacy</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <span className="hover:text-foreground cursor-default transition-colors">Data Privacy</span>
              </li>
              <li>
                <span className="hover:text-foreground cursor-default transition-colors">No Voice Database</span>
              </li>
              <li>
                <Link href="#security" className="hover:text-primary transition-colors">Security Decisions</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} VoxShield. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-default hover:text-foreground transition-colors">Terms of Service</span>
            <span className="cursor-default hover:text-foreground transition-colors">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
