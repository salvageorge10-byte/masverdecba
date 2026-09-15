import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/producto/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden bg-[var(--color-paper)]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="pt-4">
        <p className="text-xs uppercase tracking-wide text-[var(--color-ink-soft)]">
          {product.category.name}
        </p>
        <h3 className="mt-1 text-[15px] font-medium text-[var(--color-ink)]">{product.name}</h3>
        {product.price && (
          <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{formatPrice(product.price)}</p>
        )}
      </div>
    </Link>
  );
}
