import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { hours, site } from '@/data/site'
import { EstimateForm } from '@/components/estimate-form'

const details = [
  { icon: Phone, label: 'Call or text', value: site.phone, href: site.phoneHref },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: 'Service area', value: site.address },
  {
    icon: Clock,
    label: 'Hours',
    value: hours.map((h) => `${h.days}: ${h.time}`).join(' · '),
  },
]

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

          <ul className="flex flex-col gap-5">
            {details.map((detail) => {
              const Icon = detail.icon
              const content = (
                <div className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-orange">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wide text-white/50">
                      {detail.label}
                    </span>
                    <span className="font-heading text-base font-bold text-white">
                      {detail.value}
                    </span>
                  </span>
                </div>
              )
              return (
                <li key={detail.label}>
                  {detail.href ? (
                    <a href={detail.href} className="transition-opacity hover:opacity-80">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="rounded-3xl bg-card p-6 text-card-foreground shadow-2xl sm:p-8">
          <EstimateForm />
        </div>
      </div>
    </section>
  )
}
