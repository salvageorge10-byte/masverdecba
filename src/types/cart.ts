export interface CartItem {
  slug: string;
  name: string;
  price: number;
  priceUnit?: string;
  image: string;
  quantity: number;
  step: number;
}
