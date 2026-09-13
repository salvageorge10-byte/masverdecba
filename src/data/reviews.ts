import { Review, ReviewsSummary } from "@/types/review";

// Todavía no tenemos credenciales de Google Places ni reseñas reales cargadas
// a mano. No inventar autores, puntajes ni comentarios.
//
// Investigado activamente con Agent Browser el 2026-09-13: el depósito
// Córdoba tiene 4.9 de rating en Google (ver COMPANY.GOOGLE_RATING en
// data/company.ts), pero Google no expone cantidad de reseñas ni su texto
// sin sesión iniciada. Facebook solo tiene 1 opinión y sin puntaje visible.
// No hay base real para armar tarjetas de reseña con nombre + comentario
// todavía. Detalle completo en
// masverde-audit/google-social-verification-2026-09-13.txt.
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
