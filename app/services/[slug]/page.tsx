import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'
import { getService, services } from '@/data/services'
import { site } from '@/data/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { ServiceIcon } from '@/components/service-icon'
import { ServiceGrid } from '@/components/service-grid'
import { CallButton, EstimateButton } from '@/components/cta-buttons'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: `${service.title} in Savannah, GA | ${site.name}`,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <>
      <SiteHeader />
      <main className="pb-20 lg:pb-0">
        <section className="bg-navy py-14 text-navy-foreground sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All services
            </Link>
            <div className="mt-6 flex flex-col gap-5">
              <span className="grid size-14 place-items-center rounded-2xl bg-orange text-orange-foreground">
                <ServiceIcon name={service.icon} className="size-7" />
              </span>
              <h1 className="text-balance font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {service.title}
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
                {service.short}
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <CallButton />
                <EstimateButton />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-20">
          <div className="mx-auto grid max-w-4xl gap-10 px-4 sm:px-6 lg:grid-cols-5">
            <div className="flex flex-col gap-4 lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                What&apos;s included
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
            <ul className="flex flex-col gap-3 lg:col-span-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-green text-green-foreground">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border bg-secondary py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground">
              Explore our other services
            </h2>
            <ServiceGrid activeSlug={service.slug} />
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}
