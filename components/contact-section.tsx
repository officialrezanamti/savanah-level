import { EstimateForm } from '@/components/estimate-form'

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-navy py-16 text-navy-foreground sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
              Free Estimate
            </p>
            <h2 className="text-balance font-heading text-3xl font-black tracking-tight text-white sm:text-4xl">
              Let&apos;s get your project on the calendar
            </h2>
            <p className="max-w-md text-pretty leading-relaxed text-white/75">
              Tell us what you need and we&apos;ll follow up with a free, no-pressure
              estimate. Fully licensed and insured, serving the greater Savannah
              area.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-card p-6 text-card-foreground shadow-2xl sm:p-8">
          <EstimateForm />
        </div>
      </div>
    </section>
  )
}
