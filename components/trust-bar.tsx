import { BadgeCheck } from 'lucide-react'
import { trustBadges } from '@/data/site'

export function TrustBar() {
  return (
    <div className="border-b border-border bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 sm:px-6">
        {trustBadges.map((badge) => (
          <div key={badge} className="flex items-center gap-2">
            <BadgeCheck className="size-4 shrink-0 text-orange" aria-hidden="true" />
            <span className="text-sm font-medium text-white/90">{badge}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
