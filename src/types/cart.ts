export interface CartItem {
  slug: string;
  name: string;
  price: number;
  priceUnit?: string;
  image: string;
  quantity: number;
  step: number;
  /** Compra mínima del producto (ej. 15 m²). No se puede bajar de acá. */
  min?: number;
}
