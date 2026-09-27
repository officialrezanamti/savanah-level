"use client";

import { FeaturableReviews } from "@/components/featurable-reviews";

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-secondary py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange">
            Reviews &amp; Ratings
          </p>
          <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Trusted by neighbors across the Savannah area
          </h2>
        </div>

        <div className="reveal mx-auto mt-8 max-w-6xl overflow-hidden">
          <FeaturableReviews />
        </div>
      </div>
    </section>
  );
}
