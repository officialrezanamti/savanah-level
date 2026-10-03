"use client";

import { useEffect, useState } from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import { publicConfig } from "@/lib/public-config";

// Render the production Featurable widget through the library's v1 API adapter.
export function FeaturableReviews() {
  const [showDots, setShowDots] = useState({ showdots: true, maxitem: 3 });
  useEffect(() => {
    if (window.innerWidth < 640) {
      setShowDots({ showdots: true, maxitem: 1 });
    } else {
      setShowDots({ showdots: true, maxitem: 3 });
    }
  }, []);
  return (
    <>
      <ReactGoogleReviews
        layout="badge"
        featurableId={publicConfig.featurableWidgetId}
      />

      <div className="mt-6 min-h-[22rem] sm:min-h-[18rem]">
        <ReactGoogleReviews
          layout="carousel"
          featurableId={publicConfig.featurableWidgetId}
          apiBaseUrl={publicConfig.featurableApiUrl}
          widgetVersion="v1"
          theme="light"
          maxItems={showDots.maxitem}
          carouselAutoplay={false}
          showDots={showDots.showdots}
          accessibility
          brandName="Savannah Level"
        />
      </div>
    </>
  );
}
