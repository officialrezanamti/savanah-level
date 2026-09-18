import { ArrowRight, Phone } from 'lucide-react'
import { site } from '@/data/site'

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-white/10 p-3 backdrop-blur-md lg:hidden">
      <a
        href={site.phoneHref}
        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-orange font-heading text-sm font-bold text-orange-foreground shadow-lg"
      >
        <Phone className="size-4" aria-hidden="true" />
        Call
      </a>
      <a
        href="#contact"
        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full brand-gradient-btn font-heading text-sm font-bold text-green-foreground shadow-lg"
      >
        Get an Estimate
        <ArrowRight className="size-4" aria-hidden="true" />
      </a>
    </div>
  )
}
