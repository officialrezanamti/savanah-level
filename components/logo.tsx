import Link from 'next/link'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  tone = 'light',
}: {
  className?: string
  tone?: 'light' | 'dark'
}) {
  return (
    <Link
      href="#home"
      aria-label={`${site.name} home`}
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      <span className="relative grid size-10 place-items-center rounded-full bg-white shadow-sm ring-1 ring-navy/10">
        <svg viewBox="0 0 48 48" className="size-8" aria-hidden="true">
          <g
            className="stroke-navy"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* bridge deck */}
            <line x1="7" y1="27" x2="41" y2="27" strokeWidth="2.4" />
            {/* towers */}
            <path d="M17 27 L18.5 8 L20 27" strokeWidth="1.8" />
            <path d="M28 27 L29.5 8 L31 27" strokeWidth="1.8" />
            {/* cables */}
            <g strokeWidth="0.9">
              <line x1="18.5" y1="10" x2="10" y2="26" />
              <line x1="18.5" y1="10" x2="14" y2="26" />
              <line x1="29.5" y1="10" x2="34" y2="26" />
              <line x1="29.5" y1="10" x2="38" y2="26" />
            </g>
          </g>
          {/* orange level bar */}
          <rect x="10" y="31" width="28" height="7" rx="3.5" className="fill-orange" />
          <circle cx="24" cy="34.5" r="1.5" className="fill-navy" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-base font-black uppercase tracking-tight',
            tone === 'light' ? 'text-white' : 'text-foreground',
          )}
        >
          Savannah Level
        </span>
        <span
          className={cn(
            'mt-1 text-[10px] font-semibold uppercase tracking-[0.18em]',
            tone === 'light' ? 'text-white/60' : 'text-muted-foreground',
          )}
        >
          Home Services
        </span>
      </span>
    </Link>
  )
}
