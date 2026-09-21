"use client";

import { useEffect, useState } from "react";

export function ReviewsSection() {
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const res = await fetch("/api/reviews");

        if (!res.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data = await res.json();
        setReviews(data?.reviews ?? []);
      } catch (error) {
        console.error("Reviews error:", error);
      }
    }

    getReviews();
  }, []);

  if (!reviews.length) {
    return null;
  }

  return (
    <section>
      {reviews.map((review) => (
        <article key={review.name}>
          <strong>
            {review.authorAttribution?.displayName}
          </strong>

          <div>
            {"★".repeat(review.rating)}
          </div>

          <p>
            {review.text?.text}
          </p>

          <small>
            {review.relativePublishTimeDescription}
          </small>
        </article>
      ))}
    </section>
  );
}