import { ArrowRight, Phone } from 'lucide-react'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'

const sizes = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-5 text-[0.95rem] gap-2',
  lg: 'h-13 px-7 text-base gap-2',
}

type Size = keyof typeof sizes

const base =
  'inline-flex items-center justify-center rounded-full font-heading font-bold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:translate-y-px'

export function CallButton({
  size = 'md',
  className,
}: {
  size?: Size
  className?: string
}) {
  return (
    <a
      href={site.phoneHref}
      className={cn(
        base,
        sizes[size],
        'bg-orange text-orange-foreground shadow-lg shadow-orange/25 hover:brightness-105 hover:shadow-orange/40 focus-visible:ring-orange',
        className,
      )}
    >
      <Phone className="size-[1.1em]" aria-hidden="true" />
      <span>Call {site.phone}</span>
    </a>
  )
}

export function EstimateButton({
  size = 'md',
  className,
  label = 'Get an Estimate',
}: {
  size?: Size
  className?: string
  label?: string
}) {
  return (
    <a
      href="#contact"
      className={cn(
        base,
        sizes[size],
        'bg-green text-green-foreground shadow-lg shadow-green/25 hover:brightness-110 focus-visible:ring-green',
        className,
      )}
    >
      <span>{label}</span>
      <ArrowRight className="size-[1.1em] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
    </a>
  )
}
