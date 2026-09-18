import { ServiceGrid } from '@/components/service-grid'

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
            What We Do
          </p>
          <h2 className="text-balance text-left font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Every home project, handled by one trusted crew
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground text-left">
            From mounting your TV to installing appliances and assembling
            furniture, we take care of the setup so you can enjoy your home.
          </p>
        </div>

        <div className="reveal mt-12">
          <ServiceGrid variant="detailed" />
        </div>
      </div>
    </section>
  )
}
