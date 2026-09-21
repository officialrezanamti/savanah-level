import { Check } from 'lucide-react'
import { about } from '@/data/site'
import { CallButton, EstimateButton } from '@/components/cta-buttons'

export function AboutSection() {
  return (
    <section className=" py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="reveal order-2 lg:order-1">
          <img
            src="/gallery/using-the-stud-finder.webp"
            alt="A clean, level TV installation completed by Savannah Level"
            className="aspect-4/3 w-full rounded-3xl object-cover shadow-xl"
          />
        </div>

        <div className="reveal order-1 flex flex-col gap-5 lg:order-2">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
            {about.eyebrow}
          </p>
          <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {about.heading}
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-pretty leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
          <ul className="flex flex-col gap-3">
            {about.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-green text-green-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap gap-3">
            <CallButton />
            <div className="group">
              <EstimateButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
