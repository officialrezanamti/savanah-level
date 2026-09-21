import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { gallery } from '@/data/gallery'

const preview = gallery.slice(0, 6)

export function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
            Our Work
          </p>
          <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            A few recent jobs around Savannah
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground">
            Clean, level, and done right. Here is a look at the kind of work we
            bring to every home.
          </p>
        </div>

        <div className="reveal mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {preview.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-secondary ${
                index === 0 ? 'col-span-2 lg:col-span-1 lg:row-span-2' : 'aspect-4/3'
              }`}
            >
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-heading text-sm font-bold text-background transition-colors hover:bg-orange"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
