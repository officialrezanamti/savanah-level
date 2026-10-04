"use client";

import { useEffect, useState } from "react";
import { ReactGoogleReviews } from "react-google-reviews";

type RatingData = {
  averageRating: number;
  totalReviewCount: number;
  profileUrl: string;
};

export function GoogleReviews() {
  const [data, setData] = useState<RatingData | null>(null);

  useEffect(() => {
    fetch("/api/reviews")
      .then((response) => (response.ok ? response.json() : null))
      .then(setData)
      .catch(() => setData(null));
  }, []);

  if (!data) return null;

  return (
    <ReactGoogleReviews
      layout="badge"
      reviews={[]}
      averageRating={data.averageRating}
      totalReviewCount={data.totalReviewCount}
      profileUrl={data.profileUrl}
    />
  );
}
