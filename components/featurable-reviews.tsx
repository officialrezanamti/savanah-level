"use client";

import { useEffect, useState } from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import { publicConfig } from "@/lib/public-config";

// Render the production Featurable widget through the library's v1 API adapter.
export function FeaturableReviews() {
  const [maxitem, setMaxitem] = useState({maxitem: 3 });
  useEffect(() => {
    if (window.innerWidth < 640) {
      setMaxitem({  maxitem: 1 });
    } else {
      setMaxitem({ maxitem: 3 });
    }
  }, []);
  return (
    <>
      <ReactGoogleReviews
        layout="badge"
        featurableId={publicConfig.featurableWidgetId}
        
      />

      <div className="mt-6 `min-h-88 sm:min-h-72">
        <ReactGoogleReviews
          layout="carousel"
          featurableId={publicConfig.featurableWidgetId}
          apiBaseUrl={publicConfig.featurableApiUrl}
          widgetVersion="v1"
          theme="light"
          maxItems={maxitem.maxitem}
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
