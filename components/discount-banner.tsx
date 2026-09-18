import { BadgeCheck } from 'lucide-react'
import { site } from '@/data/site'
import { CallButton } from '@/components/cta-buttons'

export function DiscountBanner() {
  return (
    <section className="bg-background pb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal relative flex flex-col items-center gap-5 overflow-hidden rounded-3xl bg-navy px-6 py-8 text-center text-white sm:flex-row sm:justify-between sm:px-10 sm:text-left">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-72 bg-orange/90 lg:block [clip-path:polygon(38%_0,100%_0,100%_100%,0_100%)]"
            aria-hidden="true"
          />
          <div className="relative flex items-center gap-4">
            <span className="hidden size-12 shrink-0 place-items-center rounded-full bg-blue/15 text-blue ring-1 ring-blue/40 sm:grid">
              <BadgeCheck className="size-6" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="font-heading text-xl font-black tracking-tight sm:text-2xl">
                {site.discount}
              </p>
              <p className="text-sm font-medium text-white/70">
                Thank you for your service — just mention it when you call.
              </p>
            </div>
          </div>
          <CallButton size="lg" className="relative" />
        </div>
      </div>
    </section>
  )
}
