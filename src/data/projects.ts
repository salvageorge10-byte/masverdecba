import { Project } from "@/types/project";

// Todavía no contamos con material fotográfico ni datos verificados de canchas
// u obras puntuales realizadas por Más Verde (dirección, superficie, fecha).
//
// Investigado activamente con Agent Browser el 2026-09-13 (Google Maps,
// Instagram @masverde.cba, Facebook, masverdecba.com.ar): hay fotos reales
// de instalaciones (gimnasio, cancha exterior, jardín de infantes, patios)
// en Instagram, pero ninguna trae ubicación verificable. Ver detalle en
// masverde-audit/google-social-verification-2026-09-13.txt. Esta lista
// sigue vacía a propósito, no por falta de búsqueda.
//
// Cuando el cliente entregue ese material, cargarlo acá con este mismo shape:
//
// {
//   id: "cancha-tal-lugar",
//   name: "Cancha de fútbol 5 — Club X",
//   location: "Bell Ville",
//   province: "Córdoba",
//   coordinates: [-32.6259, -62.6890], // dirección real geocodificada, no aproximar
//   images: ["/images/proyectos/cancha-x-1.jpg"],
//   surface: "300 m2",
//   grassType: "Césped Premium para Fútbol 50mm",
//   date: "2025",
//   featured: true,
// }
//
// No completar con datos de ejemplo: la UI está preparada para mostrar un
// estado vacío honesto mientras esta lista esté así.
export const PROJECTS: Project[] = [];

export function getFeaturedProjects(count = 6): Project[] {
  return PROJECTS.filter((p) => p.featured).slice(0, count);
}

export function getProjectsWithCoordinates(): Project[] {
  return PROJECTS.filter((p) => Boolean(p.coordinates));
}
