import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { ServicesSection } from '@/components/services-section'
import { DiscountBanner } from '@/components/discount-banner'
import { AboutSection } from '@/components/about-section'
import { GallerySection } from '@/components/gallery-section'
import { ReviewsSection } from '@/components/reviews-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <TrustBar />
        <ServicesSection />
        <DiscountBanner />
        <AboutSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}
