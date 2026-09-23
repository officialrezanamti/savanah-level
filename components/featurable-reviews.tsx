"use client";

import { useEffect, useState } from "react";
import { ReactGoogleReviews } from "react-google-reviews";

const FEATURABLE_WIDGET_ID = "f378b087-83f8-4e41-8134-915082018ce1";

// Render the production Featurable widget through the library's v1 API adapter.
export function FeaturableReviews() {
  const[showDots, setShowDots] = useState({showdots: false , maxitem:0});
  useEffect(() => {
    if(window.innerWidth < 640) {
      setShowDots({showdots: false, maxitem: 1});
    } else {
      setShowDots({showdots: true, maxitem: 3});
    }

  },[]);
  return (
    <>
      <ReactGoogleReviews layout="badge" featurableId={FEATURABLE_WIDGET_ID} />

      <ReactGoogleReviews
        layout="carousel"
        featurableId={FEATURABLE_WIDGET_ID}
        apiBaseUrl="https://featurable.com/api"
        widgetVersion="v1"
        theme="light"
        maxItems={showDots.maxitem}
        carouselAutoplay={false}
        showDots={showDots.showdots}
        accessibility
        brandName="Savannah Level"
      />
    </>
  );
}
