"use client";

import { useEffect, useState } from "react";
import {
  ReactGoogleReviews,
  type ReactGoogleReview,
} from "react-google-reviews";

type ReviewsData = {
  averageRating: number;
  totalReviewCount: number;
  profileUrl: string;
  reviews: ReactGoogleReview[];
};

export function GoogleReviews() {
  const [maxItems, setMaxItems] = useState(3);
  const [data, setData] = useState<ReviewsData | null>();

  useEffect(() => {
    if (window.innerWidth < 640) setMaxItems(1);
    fetch("/api/reviews")
      .then((response) => (response.ok ? response.json() : null))
      .then(setData)
      .catch(() => setData(null));
  }, []);

  // The library copies `reviews` into state on mount, so render only once data has arrived.
  if (data === null) return null;
  if (!data) return <div className="min-h-88 sm:min-h-72" />;

  return (
    <>
      <ReactGoogleReviews
        layout="badge"
        reviews={data.reviews}
        averageRating={data.averageRating}
        totalReviewCount={data.totalReviewCount}
        profileUrl={data.profileUrl}
      />

      <div className="mt-6 min-h-88 sm:min-h-72">
        <ReactGoogleReviews
          layout="carousel"
          reviews={data.reviews}
          averageRating={data.averageRating}
          totalReviewCount={data.totalReviewCount}
          theme="light"
          maxItems={maxItems}
          carouselAutoplay
          showDots={false}
          hideEmptyReviews
          accessibility
          brandName="Savannah Level"
          structuredData
        />
      </div>
    </>
  );
}
