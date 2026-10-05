"use client";

import { useEffect, useState } from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import { publicConfig } from "@/lib/public-config";

type RatingData = {
  averageRating: number;
  totalReviewCount: number;
  profileUrl: string;
};

export function GoogleReviews() {
  const [data, setData] = useState<RatingData | null>(null);
  const [maxItems, setMaxItems] = useState(3);

  useEffect(() => {
    if (window.innerWidth < 640) setMaxItems(1);
    fetch("/api/reviews")
      .then((response) => (response.ok ? response.json() : null))
      .then(setData)
      .catch(() => setData(null));
  }, []);

  return (
    <>
      {data && (
        <ReactGoogleReviews
          layout="badge"
          reviews={[]}
          averageRating={data.averageRating}
          totalReviewCount={data.totalReviewCount}
          profileUrl={data.profileUrl}
        />
      )}

      <div className="mt-6 min-h-88 sm:min-h-72">
        <ReactGoogleReviews
          layout="carousel"
          featurableId={publicConfig.featurableWidgetId}
          apiBaseUrl={publicConfig.featurableApiUrl}
          widgetVersion="v1"
          theme="light"
          maxItems={maxItems}
          carouselAutoplay
          showDots={false}
          accessibility
          brandName="Savannah Level"
          structuredData
        />
      </div>
    </>
  );
}
