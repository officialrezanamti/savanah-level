"use client";

import { FeaturableReviews } from "@/components/featurable-reviews";
import { publicConfig } from "@/lib/public-config";

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="scroll-mt-20 bg-secondary pb-28 pt-12 sm:pb-20 sm:pt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
            Reviews &amp; Ratings
          </p>
          <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            4.9 stars from 89 local homeowners
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            See why homeowners across Savannah, Pooler, and Georgetown call us
            when the details matter.
          </p>
        </div>

        <div className="reveal mx-auto mt-8 max-w-6xl overflow-hidden">
          <FeaturableReviews />
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={publicConfig.googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
          >
            See all Google reviews
          </a>
        </div>
      </div>
    </section>
  );
}
