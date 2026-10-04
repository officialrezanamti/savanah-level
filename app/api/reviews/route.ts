// ponytail: 1h cache keeps calls inside Google's free monthly tier.
const RATING_CACHE_SECONDS = 3600;

type Place = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
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
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri",
      },
      next: { revalidate: RATING_CACHE_SECONDS },
    },
  );

  if (!response.ok) {
    console.error(
      `Google Places request failed (${response.status}): ${await response.text()}`,
    );
    return Response.json({ error: "Reviews are unavailable." }, { status: 502 });
  }

  const place: Place = await response.json();
  if (place.rating == null || place.userRatingCount == null) {
    console.error(`Google Places returned no rating for ${placeId}`);
    return Response.json({ error: "Reviews are unavailable." }, { status: 502 });
  }

  return Response.json({
    averageRating: place.rating,
    totalReviewCount: place.userRatingCount,
    profileUrl: place.googleMapsUri,
  });
}
