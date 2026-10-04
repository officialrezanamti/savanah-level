import type { ReactGoogleReview } from "react-google-reviews";

// ponytail: 1h cache keeps calls under Google's 1,000/month free tier; Google's terms discourage caching reviews.
const REVIEWS_CACHE_SECONDS = 3600;

type Place = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: {
    name: string;
    rating: number;
    text?: { text: string };
    authorAttribution: { displayName: string; photoUri?: string };
    publishTime: string;
  }[];
};

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export async function GET() {
  const placeId = requiredEnv("GOOGLE_PLACE_ID");
  const response = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
    {
      headers: {
        "X-Goog-Api-Key": requiredEnv("GOOGLE_PLACES_API_KEY"),
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
      },
      next: { revalidate: REVIEWS_CACHE_SECONDS },
    },
  );

  if (!response.ok) {
    console.error(
      `Google Places request failed (${response.status}): ${await response.text()}`,
    );
    return Response.json({ error: "Reviews are unavailable." }, { status: 502 });
  }

  const place: Place = await response.json();
  const reviews: ReactGoogleReview[] = (place.reviews ?? []).map((review) => ({
    reviewId: review.name,
    reviewer: {
      profilePhotoUrl: review.authorAttribution.photoUri ?? "",
      displayName: review.authorAttribution.displayName,
      isAnonymous: false,
    },
    starRating: review.rating,
    comment: review.text?.text ?? "",
    createTime: review.publishTime,
    updateTime: review.publishTime,
  }));

  return Response.json({
    averageRating: place.rating,
    totalReviewCount: place.userRatingCount,
    profileUrl: place.googleMapsUri,
    reviews,
  });
}
