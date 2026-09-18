import { BadgeCheck } from 'lucide-react'
import { trustBadges } from '@/data/site'

export function TrustBar() {
  return (
    <div className="border-b border-white/10 bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 py-5 sm:px-6">
        {trustBadges.map((badge) => (
          <div key={badge} className="flex items-center gap-2.5">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue/15 text-blue ring-1 ring-blue/40">
              <BadgeCheck className="size-4" aria-hidden="true" />
            </span>
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              {badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
