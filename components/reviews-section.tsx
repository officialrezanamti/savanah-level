import { Star } from 'lucide-react'
import { ratingPlatforms, reviews } from '@/data/site'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={
            index < rating
              ? 'size-4 fill-orange text-orange'
              : 'size-4 text-muted-foreground/30'
          }
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
            Reviews &amp; Ratings
          </p>
          <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Trusted by neighbors across the Savannah area
          </h2>
        </div>

        <div className="reveal mt-8 flex flex-wrap items-stretch justify-center gap-3">
          {ratingPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="flex min-w-40 flex-1 flex-col items-center gap-1 rounded-xl border border-border bg-card px-4 py-4 text-center"
            >
              <Stars rating={5} />
              <span className="font-heading text-sm font-bold text-foreground">
                {platform.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {platform.note}
              </span>
            </div>
          ))}
        </div>

        <div className="reveal mt-6 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <Stars rating={review.rating} />
              <blockquote className="text-pretty text-sm leading-relaxed text-foreground">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex flex-col">
                <span className="font-heading text-sm font-bold text-foreground">
                  {review.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {review.location} &middot; {review.service}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
