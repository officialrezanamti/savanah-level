"use client";

import { ReactGoogleReviews } from "react-google-reviews";

const FEATURABLE_WIDGET_ID = "f378b087-83f8-4e41-8134-915082018ce1";

// Render the production Featurable widget through the library's v1 API adapter.
export function FeaturableReviews() {
  return (
    <>
      <ReactGoogleReviews layout="badge" featurableId={FEATURABLE_WIDGET_ID} />

      <ReactGoogleReviews
        layout="carousel"
        featurableId={FEATURABLE_WIDGET_ID}
        apiBaseUrl="https://featurable.com/api"
        widgetVersion="v1"
        theme="light"
        maxItems={3}
        carouselAutoplay={false}
        showDots
        accessibility
        brandName="Savannah Level"
      />
    </>
  );
}
