import { Review, ReviewsSummary } from "@/types/review";

// Todavía no tenemos credenciales de Google Places ni reseñas reales cargadas
// a mano. No inventar autores, puntajes ni comentarios.
//
// Cuando se disponga de GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID (ver
// src/app/api/reviews/route.ts), esta lista puede quedar vacía: el componente
// <GoogleReviews> va a consumir la API en runtime. Si en cambio se prefiere
// cargar reseñas reales a mano como fallback, agregarlas acá con este shape:
//
// {
//   id: "review-1",
//   author: "Nombre real del cliente",
//   rating: 5,
//   text: "Comentario real copiado de Google.",
//   date: "2025-06",
//   profileUrl: "https://www.google.com/maps/...",
// }
export const FALLBACK_REVIEWS: Review[] = [];

export const REVIEWS_SUMMARY: ReviewsSummary | null = null;
