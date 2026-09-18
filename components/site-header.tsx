'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { nav, site } from '@/data/site'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/80 text-navy-foreground backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-1.5 font-heading text-sm font-bold text-white transition-colors hover:text-orange"
          >
            <Phone className="size-4 text-orange" aria-hidden="true" />
            <span className="hidden sm:inline">{site.phone}</span>
          </a>
          <a
            href="#contact"
            className="hidden h-9 items-center rounded-full bg-orange px-4 font-heading text-sm font-bold text-orange-foreground transition-all hover:brightness-105 sm:inline-flex"
          >
            Free Estimate
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-9 place-items-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-navy px-4 pb-4 pt-2 lg:hidden"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex h-11 items-center justify-center rounded-full bg-orange font-heading text-sm font-bold text-orange-foreground"
          >
            Free Estimate
          </a>
        </nav>
      )}
    </header>
  )
}
