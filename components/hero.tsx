import { site } from '@/data/site'
import { CallButton, EstimateButton } from '@/components/cta-buttons'
import { ServiceGrid } from '@/components/service-grid'

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy">
      <img
        src="/images/savannah-river-bridge.jpg"
        alt="The Talmadge Memorial Bridge over the Savannah River with a riverboat docked in the foreground"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        className="brand-gradient-overlay absolute inset-0 -z-10"
        aria-hidden="true"
      />

      {/* Bold diagonal split panels (desktop) — orange edge line behind the brand gradient panel */}
      <div
        className="absolute inset-y-0 left-0 -z-10 hidden w-[63%] bg-orange lg:block [clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]"
        aria-hidden="true"
      />
      <div
        className="brand-gradient absolute inset-y-0 left-0 -z-10 hidden w-[62%] lg:block [clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-12 pt-10 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:pb-20 lg:pt-16">
        <div className="flex flex-col gap-3 lg:col-start-1 lg:row-start-1">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
            {site.tagline}
          </p>
          <div className="flex flex-col gap-1">
            <span className="font-heading text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              {site.name}
            </span>
            <span className="text-sm font-medium text-white/70">
              {site.positioning}
            </span>
          </div>
        </div>

        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
          <div className="rounded-2xl brand-gradient-card border border-white/15 bg-white/95 p-4 shadow-2xl backdrop-blur sm:p-5">
            <p className="mb-3 font-heading text-sm font-bold text-white">
              What can we help you set up?
            </p>
            <ServiceGrid variant="selector" />
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:col-start-1 lg:row-start-2">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center rounded-full border border-blue/40 bg-white md:bg-blue/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue">
              Contact Us Today To Get A Free Estimate
            </span>
            <h1 className="max-w-xl text-balance font-heading text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Savannah Level is a Fully Licensed &amp; Insured Handyman Company with 27+ Years of Experience Serving Savannah, GA
            </h1>
            <p className="max-w-md text-pretty text-base leading-relaxed text-white/75">
              {site.areas}
            </p>
          </div>

          <div className="hidden flex-wrap gap-3 lg:flex">
            <CallButton size="lg" />
            <div className="group">
              <EstimateButton size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
