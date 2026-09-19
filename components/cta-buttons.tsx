'use client'

import { ArrowRight, Phone } from 'lucide-react'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'
import { useEstimateModal } from '@/components/estimate-modal'

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
  const { open } = useEstimateModal()

  return (
    <button
      type="button"
      onClick={open}
      className={cn(
        base,
        sizes[size],
        'brand-gradient-btn text-white shadow-lg shadow-navy-900/25 hover:brightness-110 hover:shadow-navy-900/40 focus-visible:ring-blue-400',
        className,
      )}
    >
      <span>{label}</span>
      <ArrowRight className="size-[1.1em] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
    </button>
  )
}
