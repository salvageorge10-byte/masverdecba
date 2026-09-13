export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  /** Orden de protagonismo: 1 = más importante (deportivo). */
  priority: number;
}

export interface ProductStat {
  value: string;
  label: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  /** true = producto vigente en el catálogo actual. */
  active: boolean;
  price?: number;
  currency?: "ARS";
  priceUnit?: string;
  unit?: string;
  specs: ProductSpec[];
  stat?: ProductStat;
  extraLines?: string[];
  description: string;
  advantages?: string[];
  images: string[];
  // Campos reservados para una futura etapa de e-commerce.
  // No completar hasta tener información real de stock/envío/variantes.
  stock?: number;
  variants?: { label: string; value: string }[];
  shipping?: { weight?: string; note?: string };
}
