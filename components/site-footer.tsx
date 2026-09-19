import { Mail, MapPin, Phone } from 'lucide-react'
import { nav, site } from '@/data/site'
import { services } from '@/data/services'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Logo />
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-white/70">
            {site.areas} Fully licensed and insured home services for the
            greater Savannah, GA area.
          </p>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-white">
              <Phone className="size-4 text-orange" aria-hidden="true" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-white">
              <Mail className="size-4 text-orange" aria-hidden="true" />
              {site.email}
            </a>
            <a href='https://www.google.com/maps/place/Savannah+Level/@32.062721,-81.20604,9z/data=!4m6!3m5!1s0x8fbf57004b808cd5:0xf9ab3f462397e678!8m2!3d32.062721!4d-81.2060396!16s%2Fg%2F11x6dp92yr?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D' target='_blank' className="flex items-center gap-2">
              <MapPin className="size-4 text-orange" aria-hidden="true" />
              {site.address}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-heading text-sm font-bold text-white">Services</p>
          <ul className="flex flex-col gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <a
                  href={`/services/${service.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-heading text-sm font-bold text-white">Company</p>
          <ul className="flex flex-col gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Licensed &amp; insured &middot; Serving Savannah, GA</p>
        </div>
      </div>
    </footer>
  )
}
