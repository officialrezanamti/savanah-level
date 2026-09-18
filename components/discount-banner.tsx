import { BadgeCheck } from 'lucide-react'
import { site } from '@/data/site'
import { CallButton } from '@/components/cta-buttons'

export function DiscountBanner() {
  return (
    <section className="bg-background pb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal flex flex-col items-center gap-5 rounded-3xl bg-orange px-6 py-8 text-center text-orange-foreground sm:flex-row sm:justify-between sm:px-10 sm:text-left">
          <div className="flex items-center gap-4">
            <BadgeCheck className="hidden size-10 shrink-0 sm:block" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <p className="font-heading text-xl font-extrabold tracking-tight sm:text-2xl">
                {site.discount}
              </p>
              <p className="text-sm font-medium text-orange-foreground/80">
                Thank you for your service — just mention it when you call.
              </p>
            </div>
          </div>
          <CallButton
            size="lg"
            className="bg-navy text-navy-foreground shadow-none hover:brightness-125 focus-visible:ring-navy"
          />
        </div>
      </div>
    </section>
  )
}
