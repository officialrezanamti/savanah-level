import { gallery } from '@/data/site'

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
          {gallery.map((item, index) => (
            <div
              key={item.src}
              className={`overflow-hidden rounded-2xl bg-secondary ${
                index === 0 ? 'col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              <img
                src={item.src || '/placeholder.svg'}
                alt={item.alt}
                className={`w-full object-cover transition-transform duration-500 hover:scale-105 ${
                  index === 0 ? 'h-full min-h-56' : 'aspect-[4/3]'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
