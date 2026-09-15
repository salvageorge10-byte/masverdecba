"use client";

import { Product } from "@/types/product";
import { useCart } from "@/lib/cart-context";
import { metaPixel } from "@/lib/analytics/metaPixel";

export default function AddToCartButton({ product, className = "" }: { product: Product; className?: string }) {
  const { addItem } = useCart();
  if (!product.price) return null;

  const unitIsM2 = Boolean(product.priceUnit?.includes("m2"));
  const defaultQty = unitIsM2 ? 15 : 1;

  return (
    <button
      type="button"
      onClick={() => {
        addItem({
          slug: product.slug,
          name: product.name,
          price: product.price!,
          priceUnit: product.priceUnit,
          image: product.images[0],
          step: unitIsM2 ? 5 : 1,
          quantity: defaultQty,
        });
        metaPixel.addToCart({
          content_name: product.name,
          value: product.price! * defaultQty,
          currency: "ARS",
        });
      }}
      className={className}
    >
      Agregar al carrito
    </button>
  );
}
