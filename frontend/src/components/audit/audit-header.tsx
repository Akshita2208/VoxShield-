import { ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function AuditHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
          <ShieldCheck className="h-8 w-8 text-primary" />
          Blockchain Identity & Audit
        </h1>
        <p className="text-muted mt-2 max-w-2xl text-lg">
          A tamper-evident layer for identity credentials and security audit records.
        </p>
      </div>
      <Badge variant="active" className="w-fit text-sm py-1 px-3">
        AUDIT INTEGRITY
      </Badge>
    </div>
  )
}
