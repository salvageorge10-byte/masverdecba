import { Product } from "@/types/product";
import { CATEGORIES } from "@/data/categories";

// Contenido, precios y especificaciones reales relevados de masverdecba.com.ar.
// No se inventan datos: cada spec, descripción y precio proviene de la ficha
// original de cada producto.
export const PRODUCTS: Product[] = [
  {
    id: "cesped-sintetico-premium-para-futbol",
    slug: "cesped-sintetico-premium-para-futbol",
    name: "Césped Sintético Premium para Fútbol",
    active: true,
    price: 22500,
    currency: "ARS",
    priceUnit: "Precio x m2",
    category: CATEGORIES["cesped-deportivo"],
    specs: [
      { label: "Altura de fibra", value: "50mm" },
      { label: "Tipo de fibra", value: "Monofilamento de alta resistencia" },
      { label: "Densidad", value: "Alta, diseñada para alto tránsito deportivo" },
      { label: "Base", value: "Doble capa con protección UV" },
      { label: "Medidas", value: "Se vende por rollos cerrado (100m2) mide 4 x 25m" },
      { label: "Aplicación", value: "Canchas de fútbol profesionales y amateurs" },
    ],
    stat: { value: "+9000", label: "Fibras por metro cuadrado" },
    extraLines: [
      "Certificación para competencias deportivas.",
      "Requiere relleno de arena de sílice y caucho para mejor amortiguación.",
    ],
    description:
      "Transforma tu cancha en un campo de juego profesional. Con nuestro césped sintético de 50mm, logramos la combinación perfecta entre resistencia y rendimiento deportivo. Diseñado para brindar tracción óptima y amortiguación, este césped reduce el impacto y mejora la experiencia de juego.",
    advantages: [
      "Máxima resistencia al desgaste y la intemperie.",
      "Amortiguación ideal para evitar lesiones.",
      "Bajo mantenimiento, sin necesidad de riego ni cortes.",
    ],
    images: [
      "/images/productos/cesped-futbol/futbol-1.jpg",
      "/images/productos/cesped-futbol/futbol-2.jpg",
      "/images/productos/cesped-futbol/futbol-3.jpg",
      "/images/productos/cesped-futbol/futbol-4.jpg",
      "/images/productos/cesped-futbol/futbol-5.jpg",
      "/images/productos/cesped-futbol/futbol-6.jpg",
    ],
  },
  {
    id: "cesped-sintetico-20-mm",
    slug: "cesped-sintetico-20-mm",
    name: "Césped Sintético 20 mm",
    active: true,
    price: 12250,
    currency: "ARS",
    priceUnit: "Precio x m2",
    category: CATEGORIES["cesped-deportivo"],
    specs: [
      { label: "Altura de fibra", value: "20mm" },
      { label: "Tipo de fibra", value: "Polipropileno texturizado con filtro UV" },
      { label: "Densidad", value: "Media, con estructura firme y compacta" },
      { label: "Base", value: "Reforzada para soportar tránsito moderado" },
      { label: "Medidas", value: "Se vende en rollos de 2 m de ancho. Compra mínima 15 m²." },
      { label: "Aplicación", value: "Gimnasios y áreas de entrenamiento." },
    ],
    description:
      "Funcionalidad y estética en un solo producto. Nuestro césped sintético de 20mm es la opción ideal para decorar locales comerciales, gimnasios, stands de ferias o eventos. Superficies de alto tránsito. Su estructura compacta lo hace fácil de limpiar y mantener, siempre con un aspecto impecable.",
    images: [
      "/images/productos/cesped-20mm/20-1-1.jpg",
      "/images/productos/cesped-20mm/20-2-1.jpg",
      "/images/productos/cesped-20mm/20-3-1.jpg",
      "/images/productos/cesped-20mm/20-4-1.jpg",
      "/images/productos/cesped-20mm/20-5-1.jpg",
      "/images/productos/cesped-20mm/20-6-1.jpg",
      "/images/productos/cesped-20mm/20-7-1.jpg",
    ],
  },
  {
    id: "cesped-sintetico-30-mm",
    slug: "cesped-sintetico-30-mm",
    name: "Césped Sintético 30 mm",
    active: true,
    price: 14000,
    currency: "ARS",
    priceUnit: "Precio x m2",
    category: CATEGORIES["cesped-deportivo"],
    specs: [
      { label: "Altura de fibra", value: "30mm" },
      { label: "Tipo de fibra", value: "Polietileno texturizado con protección UV" },
      { label: "Densidad", value: "Alta, con aspecto natural y suave al tacto" },
      { label: "Base", value: "Látex reforzada para mayor durabilidad" },
      { label: "Medidas", value: "Disponible en rollos de 2m de ancho. Compra mínima 15 m²." },
      { label: "Aplicación", value: "Gimnasios y zonas de entrenamiento funcional." },
    ],
    extraLines: [
      "Drenaje eficiente para evitar acumulación de agua.",
      "Resistente a la intemperie y rayos UV.",
      "Apto para usos intensivos, con fibras diseñadas para evitar enredos.",
    ],
    description:
      "Dale a tu gimnasio un toque natural sin complicaciones. Con nuestro césped sintético de 30mm, conseguís la apariencia y suavidad del césped real, pero sin el mantenimiento. Ideal para zonas de aparatos y áreas de entrenamiento funcional, es resistente, estético y siempre verde.",
    images: [
      "/images/productos/cesped-30mm/30-1.jpg",
      "/images/productos/cesped-30mm/30-2.jpg",
      "/images/productos/cesped-30mm/30-3.jpg",
      "/images/productos/cesped-30mm/30-4.jpg",
      "/images/productos/cesped-30mm/30-5.jpg",
    ],
  },
  {
    id: "cesped-sintetico-40-mm",
    slug: "cesped-sintetico-40-mm",
    name: "Césped Sintético 40 mm",
    active: true,
    price: 24300,
    currency: "ARS",
    priceUnit: "Precio x m2",
    category: CATEGORIES["cesped-decorativo"],
    specs: [
      { label: "Altura de fibra", value: "40mm" },
      { label: "Tipo de fibra", value: "Polietileno texturizado con protección UV" },
      { label: "Densidad", value: "Alta, con aspecto natural y suave al tacto" },
      { label: "Base", value: "Látex reforzada para mayor durabilidad" },
      { label: "Medidas", value: "Disponible en rollos de 2m de ancho. Compra mínima 15 m²." },
      { label: "Aplicación", value: "Jardines, terrazas y espacios recreativos" },
    ],
    extraLines: [
      "Drenaje eficiente para evitar acumulación de agua.",
      "Resistente a la intemperie y rayos UV.",
      "Apto para mascotas, con fibras diseñadas para evitar enredos.",
    ],
    description:
      "Dale a tu hogar un toque natural sin complicaciones. Con nuestro césped sintético de 40mm, conseguís la apariencia y suavidad del césped real, pero sin el mantenimiento. Ideal para jardines, patios o balcones, es resistente, estético y siempre verde.",
    images: [
      "/images/productos/cesped-40mm/40-1.jpg",
      "/images/productos/cesped-40mm/40-2.jpg",
      "/images/productos/cesped-40mm/40-3.jpg",
      "/images/productos/cesped-40mm/40-4.jpg",
      "/images/productos/cesped-40mm/40-5.jpg",
      "/images/productos/cesped-40mm/40-6.jpg",
    ],
  },
  {
    id: "jardin-vertical-de-exterior",
    slug: "jardin-vertical-de-exterior",
    name: "Jardín vertical de exterior",
    active: true,
    price: 9349,
    currency: "ARS",
    category: CATEGORIES["jardin-vertical"],
    specs: [
      { label: "Protección", value: "Tratamiento UV para resistir el sol y la lluvia" },
      { label: "Material", value: "Placas modulares con follaje sintético de alta densidad" },
      { label: "Tamaño", value: "Paneles de 40 x 60cm" },
      { label: "Aplicación", value: "Fachadas, balcones y muros exteriores" },
    ],
    stat: { value: "+5000", label: "Horas de resistencia a la exposición solar" },
    extraLines: [
      "Incluye módulos intercambiables para mayor personalización.",
      "Sistema de fijación se vende por separado.",
    ],
    description:
      "Verde siempre vivo, sin mantenimiento. Nuestro jardín vertical para exterior transforma cualquier muro en un oasis natural, sin riego ni poda. Resistente a la intemperie, mantiene su color vibrante a lo largo del tiempo.",
    images: [
      "/images/productos/jardin-exterior/exterior-1.jpg",
      "/images/productos/jardin-exterior/exterior-2.jpg",
      "/images/productos/jardin-exterior/exterior-3.jpg",
      "/images/productos/jardin-exterior/exterior-4.jpg",
      "/images/productos/jardin-exterior/exterior-5.jpg",
    ],
  },
  {
    id: "jardin-vertical-de-interior",
    slug: "jardin-vertical-de-interior",
    name: "Jardín vertical de interior",
    active: true,
    price: 5499,
    currency: "ARS",
    category: CATEGORIES["jardin-vertical"],
    specs: [
      { label: "Material", value: "Follaje sintético de alta calidad" },
      { label: "Densidad", value: "Alta, con combinaciones de distintas especies" },
      { label: "Medidas", value: "Paneles de 40 x 60cm" },
      { label: "Aplicación", value: "Oficinas, salas de estar, restaurantes y comercios" },
    ],
    description:
      "Ambientes más vivos y elegantes sin esfuerzo. Nuestro jardín vertical de interior es la opción perfecta para agregar belleza y frescura a cualquier espacio. Con más de 500 combinaciones posibles, podés personalizarlo a tu gusto.",
    images: [
      "/images/productos/jardin-interior/interior-1.jpg",
      "/images/productos/jardin-interior/interior-2.jpg",
      "/images/productos/jardin-interior/interior-3.jpg",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug && p.active);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.active && p.category.slug === categorySlug);
}

export function getRelatedProducts(product: Product, count = 3): Product[] {
  return PRODUCTS.filter(
    (p) => p.active && p.category.slug === product.category.slug && p.slug !== product.slug
  ).slice(0, count);
}

export function formatPrice(price: number): string {
  return price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });
}
