import type { Metadata } from 'next'
import { site } from '@/data/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { ServiceGrid } from '@/components/service-grid'
import { CallButton, EstimateButton } from '@/components/cta-buttons'

export const metadata: Metadata = {
  title: `Our Services | ${site.name}`,
  description:
    'Browse every home service Savannah Level offers: TV mounting, appliance installation, furniture assembly, security cameras, home maintenance, blinds & curtains, and wall art hanging.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 lg:pb-0">
        <section className="bg-navy py-14 text-navy-foreground sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex flex-col gap-5">
              <h1 className="text-balance font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Our Services
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
                Every home project, handled by one trusted crew. Pick a
                service below to see what&apos;s included and get a free
                estimate.
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <CallButton />
                <EstimateButton />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <ServiceGrid />
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}
