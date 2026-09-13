import { ProductCategory } from "@/types/product";

// Jerarquía de categorías basada en la aplicación real de cada producto
// (campo "Aplicación" relevado de masverdecba.com.ar): el césped de 20mm y 30mm
// se vende para gimnasios/entrenamiento (deportivo), mientras que el de 40mm se
// vende para jardines/terrazas (decorativo). No es una reclasificación inventada,
// es la que ya surge de la ficha técnica original de cada producto.
export const CATEGORIES: Record<string, ProductCategory> = {
  "cesped-deportivo": {
    slug: "cesped-deportivo",
    name: "Césped Deportivo",
    priority: 1,
  },
  "cesped-decorativo": {
    slug: "cesped-decorativo",
    name: "Césped Decorativo",
    priority: 2,
  },
  "jardin-vertical": {
    slug: "jardin-vertical",
    name: "Jardín Vertical",
    priority: 3,
  },
  mobiliario: {
    slug: "mobiliario",
    name: "Mobiliario",
    priority: 4,
  },
};

export const CATEGORY_LIST = Object.values(CATEGORIES).sort(
  (a, b) => a.priority - b.priority
);
