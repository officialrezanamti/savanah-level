import type { Metadata } from 'next'
import { site } from '@/data/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { GalleryGrid } from '@/components/gallery-grid'
import { CallButton, EstimateButton } from '@/components/cta-buttons'

export const metadata: Metadata = {
  title: `Project Gallery | ${site.name}`,
  description:
    'See real TV mounting, appliance installation, wall art hanging, and home projects completed by Savannah Level across Savannah, Pooler, Georgetown, and surrounding areas.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 lg:pb-0">
        <section className="bg-navy py-14 text-navy-foreground sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex flex-col gap-5">
              <h1 className="text-balance font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Project Gallery
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
                Real work from real homes around Savannah. Every install is
                mounted level, anchored securely, and finished clean. Filter by
                service to see the projects that match what you need.
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
            <GalleryGrid />
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}
