// app/api/reviews/route.ts

import { NextResponse } from "next/server";

const PLACE_ID = "ChIJ1YyASwBXv48ReOaXI0Y_q_k";

export async function GET() {
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${PLACE_ID}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY!,
        "X-Goog-FieldMask":
          "displayName,rating,userRatingCount,reviews",
      },
      next: {
        revalidate: 86400,
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: res.status }
    );
  }

  const data = await res.json();

  return NextResponse.json(data);
}