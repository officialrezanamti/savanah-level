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
      <span className="relative grid size-9 place-items-center rounded-full bg-orange text-orange-foreground shadow-sm ring-2 ring-white/15">
        <span className="font-heading text-sm font-extrabold leading-none tracking-tight">
          SL
        </span>
        <span className="absolute inset-x-1.5 bottom-2 h-0.5 rounded-full bg-navy/70" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-base font-extrabold tracking-tight',
            tone === 'light' ? 'text-white' : 'text-foreground',
          )}
        >
          Savannah Level
        </span>
        <span
          className={cn(
            'mt-1 text-[10px] font-medium uppercase tracking-[0.18em]',
            tone === 'light' ? 'text-white/60' : 'text-muted-foreground',
          )}
        >
          Home Services
        </span>
      </span>
    </Link>
  )
}
