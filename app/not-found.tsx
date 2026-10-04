import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 lg:pb-0">
        <section className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center gap-4 px-4 py-20 text-center sm:px-6">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
            404
          </p>
          <h1 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Page not found
          </h1>
          <p className="text-muted-foreground">
            The page you are looking for does not exist or has moved.
          </p>
          <Link
            href="/"
            className="mt-2 inline-flex min-h-11 items-center justify-center rounded-lg bg-orange px-5 py-2.5 text-sm font-semibold text-orange-foreground transition-opacity hover:opacity-90"
          >
            Back to home
          </Link>
        </section>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}
