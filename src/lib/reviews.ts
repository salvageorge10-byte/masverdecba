import { FALLBACK_REVIEWS, REVIEWS_SUMMARY } from "@/data/reviews";
import { Review, ReviewsSummary } from "@/types/review";

interface GooglePlaceReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description?: string;
  time?: number;
  author_url?: string;
}

export interface ReviewsResult {
  reviews: Review[];
  summary: ReviewsSummary | null;
  source: "google" | "fallback";
}

// Server-only. Requiere GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID en el entorno.
// Sin credenciales, devuelve el fallback (vacío por ahora, ver data/reviews.ts)
// en lugar de reseñas inventadas.
export async function getReviews(): Promise<ReviewsResult> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return { reviews: FALLBACK_REVIEWS, summary: REVIEWS_SUMMARY, source: "fallback" };
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,review,url&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.status !== "OK") {
      return { reviews: FALLBACK_REVIEWS, summary: REVIEWS_SUMMARY, source: "fallback" };
    }

    const reviews: Review[] = (data.result.reviews ?? []).map(
      (r: GooglePlaceReview, index: number) => ({
        id: `google-${r.time ?? index}`,
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        date: r.relative_time_description,
        profileUrl: r.author_url,
      })
    );

    const summary: ReviewsSummary = {
      rating: data.result.rating,
      count: data.result.user_ratings_total,
      placeUrl: data.result.url,
    };

    return { reviews, summary, source: "google" };
  } catch {
    return { reviews: FALLBACK_REVIEWS, summary: REVIEWS_SUMMARY, source: "fallback" };
  }
}
