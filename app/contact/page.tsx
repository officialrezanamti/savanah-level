import type { Metadata } from 'next'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { site, hours, socials } from '@/data/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { DiscountBanner } from '@/components/discount-banner'
import { EstimateForm } from '@/components/estimate-form'

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description:
    'Contact Savannah Level for a free, no-obligation estimate. Call, text, or send a message and we\u2019ll follow up fast. Fully licensed and insured, serving Savannah, Pooler, Georgetown, and surrounding areas.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 lg:pb-0">
        <section className="bg-navy py-14 text-navy-foreground sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex flex-col gap-5">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
                Get In Touch
              </p>
              <h1 className="text-balance font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Contact Savannah Level
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
                Reach out for a free, no-obligation estimate. Fully licensed
                and insured, serving the greater Savannah area.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
                  Contact Details
                </p>
                <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  Talk to {site.contactName}
                </h2>
                <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                  Call, text, or fill out the form and we&apos;ll follow up
                  the same day with a free estimate.
                </p>
              </div>

              <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:p-8">
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-3.5 transition-colors hover:text-orange"
                >
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-orange/10 text-orange">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-heading text-sm font-bold text-foreground">
                      Call or Text
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {site.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3.5 transition-colors hover:text-orange"
                >
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-orange/10 text-orange">
                    <Mail className="size-4" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-heading text-sm font-bold text-foreground">
                      Email
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {site.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-orange/10 text-orange">
                    <MapPin className="size-4" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-heading text-sm font-bold text-foreground">
                      Service Area
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {site.address}
                    </span>
                  </span>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-orange/10 text-orange">
                    <Clock className="size-4" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-heading text-sm font-bold text-foreground">
                      Hours
                    </span>
                    {hours.map((entry) => (
                      <span
                        key={entry.days}
                        className="text-sm text-muted-foreground"
                      >
                        {entry.days} &middot; {entry.time}
                      </span>
                    ))}
                  </span>
                </div>

                <div className="flex flex-col gap-3 border-t border-border pt-5">
                  <span className="font-heading text-sm font-bold text-foreground">
                    Follow Along
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {socials
                      .filter((social) => social.href !== '#')
                      .map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-orange hover:text-orange-foreground"
                        >
                          {social.label}
                          {'handle' in social && social.handle ? (
                            <span className="ml-1.5 text-muted-foreground group-hover:text-orange-foreground">
                              {social.handle}
                            </span>
                          ) : null}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-2xl sm:p-8">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
                  Free Estimate
                </p>
                <h2 className="mt-2 text-balance font-heading text-2xl font-extrabold tracking-tight text-foreground">
                  Tell us about your project
                </h2>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  Fill out the form below and we&apos;ll follow up with a
                  free, no-pressure estimate.
                </p>
                <div className="mt-6">
                  <EstimateForm />
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
