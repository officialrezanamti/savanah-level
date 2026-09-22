import type { Metadata } from 'next'
import { Check, Mail, MapPin, Phone } from 'lucide-react'
import { site, about } from '@/data/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { TrustBar } from '@/components/trust-bar'
import { DiscountBanner } from '@/components/discount-banner'
import { ServiceGrid } from '@/components/service-grid'
import { CallButton, EstimateButton } from '@/components/cta-buttons'

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description:
    'Meet Savannah Level, the licensed and insured home installation and mounting crew serving Savannah, Pooler, Georgetown, and surrounding areas. Learn what we do and how we work.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 lg:pb-0">
        <section className="bg-navy py-14 text-navy-foreground sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex flex-col gap-5">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
                {about.eyebrow}
              </p>
              <h1 className="text-balance font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                About Savannah Level
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
                A local crew of one, built on the same promise every time:
                show up on time, mount it level, and leave the place cleaner
                than we found it.
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <CallButton />
                <EstimateButton />
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
                What We Do
              </p>
              <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                One call covers the whole punch list
              </h2>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                {site.contactName} handles installation, mounting, and setup
                work around the house &mdash; TVs, appliances, furniture,
                cameras, fixtures, and more. Tap a service to see what&apos;s
                included and starting pricing.
              </p>
            </div>
            <div className="mt-12">
              <ServiceGrid variant="detailed" />
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
              Note: we install and set up appliances &mdash; we don&apos;t
              perform appliance repair. If a unit isn&apos;t running right
              after installation, give us a call and we&apos;ll make it
              right.
            </p>
          </div>
        </section>

        <section className="bg-secondary py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <img
                src="/gallery/using-the-stud-finder.webp"
                alt="Shawn Maddi checking a wall mount with a level before securing it"
                className="aspect-4/3 w-full rounded-3xl object-cover shadow-xl"
              />
            </div>
            <div className="order-1 flex flex-col gap-5 lg:order-2">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
                How We Work
              </p>
              <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {about.heading}
              </h2>
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-pretty leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
              <ul className="flex flex-col gap-3">
                {about.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-green text-green-foreground">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div className="flex flex-col gap-5">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
                  Service Area
                </p>
                <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  Rooted in the Savannah community
                </h2>
                <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
                  {site.areas} Jobs in Savannah, Downtown Savannah, and
                  Midtown Savannah are covered with no extra travel charge.
                  Homes outside those areas may include a $25&ndash;$45
                  travel fee, quoted up front before any work is scheduled.
                </p>
                <div className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                  <MapPin className="size-4 text-orange" aria-hidden="true" />
                  {site.address}
                </div>
              </div>

              <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:p-8">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
                  Talk to {site.contactName}
                </p>
                <h3 className="text-balance font-heading text-2xl font-extrabold tracking-tight text-foreground">
                  Ready to get your project on the calendar?
                </h3>
                <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-2.5 transition-colors hover:text-foreground"
                  >
                    <Phone className="size-4 text-orange" aria-hidden="true" />
                    {site.phone}
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-2.5 transition-colors hover:text-foreground"
                  >
                    <Mail className="size-4 text-orange" aria-hidden="true" />
                    {site.email}
                  </a>
                </div>
                <div className="mt-2 flex flex-wrap gap-3">
                  <CallButton />
                  <EstimateButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        <DiscountBanner />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}
