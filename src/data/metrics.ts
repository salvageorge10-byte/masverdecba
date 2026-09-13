export interface Metric {
  value: string;
  label: string;
}

// Todavía no tenemos cifras globales verificadas (m2 instalados, canchas
// realizadas, años operando, etc.). No completar con estimaciones: cargar
// acá solo cuando el cliente confirme un dato real, con este shape:
//
// { value: "+12.000", label: "m2 de césped instalados" }
//
// Mientras esta lista esté vacía, <MetricsStrip> no se renderiza.
export const METRICS: Metric[] = [];
