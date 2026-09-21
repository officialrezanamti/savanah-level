import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Service } from '@/data/services'
import { ServiceIcon } from '@/components/service-icon'

export function ServiceCard({
  service,
  variant = 'detailed',
}: {
  service: Service
  variant?: 'selector' | 'detailed'
}) {
  if (variant === 'selector') {
    return (
      <Link
        href={`/services/${service.slug}`}
        className="group flex flex-col items-start gap-2 rounded-xl border border-navy/10 bg-white p-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-orange/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
      >
        <span className="grid size-9 place-items-center rounded-lg bg-navy/5 text-navy transition-colors duration-200 group-hover:bg-orange group-hover:text-orange-foreground">
          <ServiceIcon name={service.icon} className="size-5" />
        </span>
        <span className="font-heading text-[0.8rem] font-bold leading-tight text-navy">
          {service.title}
        </span>
      </Link>
    )
  }

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-orange/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
    >
      <span className="grid size-12 place-items-center rounded-xl bg-linear-to-r from-navy to-blue-500 text-navy-foreground transition-colors duration-200 group-hover:from-orange group-hover:to-orange-900 group-hover:text-orange-foreground">
        <ServiceIcon name={service.icon} className="size-6" />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.short}
        </p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1 font-heading text-sm font-bold text-orange">
        Learn more
        <ChevronRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  )
}
