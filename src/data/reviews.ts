import { Review, ReviewsSummary } from "@/types/review";

// Reseñas reales, copiadas tal cual de la ficha pública de Google Maps de
// "Mas Verde" (depósito Córdoba), verificadas con Agent Browser el
// 2026-09-15 sin iniciar sesión. Es la vista pública/limitada de Google
// Maps, que en esta pasada sí exponía autor, estrellas, fecha relativa y
// texto de las 5 reseñas más relevantes (de un total de 35, 34 con 5
// estrellas y 1 con 1 estrella). No editorializar ni corregir tipeo del
// autor/comentario original. Si en el futuro se agrega
// GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID (ver src/app/api/reviews/route.ts),
// esta lista pasa a ser solo el fallback y el componente consume la API en
// runtime.
export const FALLBACK_REVIEWS: Review[] = [
  {
    id: "google-marcos-haag",
    author: "Marcos Haag",
    rating: 5,
    text: "Excelente servicio! El producto es muy bueno, me sorprendió, quedó mejor de lo que esperaba. Muy recomendable",
    date: "Hace un año",
  },
  {
    id: "google-aurelia-facello",
    author: "Aurelia Facello",
    rating: 5,
    text: "Me encantó! La verdad es que me sorprendió lo simple que fue y lo lindo que quedó. Y Diego un 10 como me asesoró. Súper recomendable para cualquier espacio y la calidad muy superadora de otras opciones que vi.",
    date: "Hace un año",
  },
  {
    id: "google-rolando-alemani",
    author: "Rolando Alemañi",
    rating: 5,
    text: "Conozco del tema y la experiencia fue ampliamente superadora. Relación precio calidad muy conveniente, los tiempos fueron los acordados. Excelente atención. Muy conforme!!",
    date: "Hace un año",
  },
  {
    id: "google-sabina-asteggiano",
    author: "Sabina Asteggiano",
    rating: 5,
    text: "Muy buena experiencia!!no solo en la calidad y resultado final sino el acompañamiento y las sugerencias que te brindan. Lo recomiendo",
    date: "Hace un año",
  },
  {
    id: "google-florencia-camano",
    author: "florencia camaño",
    rating: 5,
    text: "Increíble producto!! Sobre todo el asesoramiento y atención! Me encantó.. muchas gracias ☺️",
    date: "Hace un año",
  },
];

export const REVIEWS_SUMMARY: ReviewsSummary | null = {
  rating: 4.9,
  count: 35,
  placeUrl:
    "https://www.google.com/maps/place/Mas+Verde/@-31.4382667,-64.2027013,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a3471434fed9:0xf2dc242038f83544!8m2!3d-31.4382667!4d-64.2027013!16s%2Fg%2F11mcfw0z71",
};
