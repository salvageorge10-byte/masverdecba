"use client";

import Image from "next/image";
import Link from "next/link";
import { CATEGORY_LIST } from "@/data/categories";
import { getProductsByCategory, formatPrice } from "@/data/products";
import { Product } from "@/types/product";

function specValue(product: Product, label: string) {
  return product.specs.find((s) => s.label === label)?.value;
}

function ProductRow({ product, onClose }: { product: Product; onClose: () => void }) {
  const height = specValue(product, "Altura de fibra");

  return (
    <li>
      <Link
        href={`/producto/${product.slug}`}
        onClick={onClose}
        className="group flex items-center gap-3.5 py-1.5 transition-colors"
      >
        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden bg-white/5 ring-1 ring-inset ring-white/10">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="56px"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-medium text-white/90 group-hover:text-white">
            {product.name}
          </p>
          <p className="mt-0.5 text-xs text-white/45">
            {height && <span>{height}</span>}
            {height && product.price && <span className="mx-1.5 text-white/25">·</span>}
            {product.price && <span className="text-[var(--color-lime)]/90">{formatPrice(product.price)}</span>}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default function MegaMenu({
  open,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  open: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute inset-x-0 top-full hidden border-b border-white/10 bg-[var(--color-carbon)] shadow-2xl transition-all duration-200 xl:block ${
        open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-10 pb-10 pt-9">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
          Catálogo
        </p>

        <div className="mt-6 grid grid-cols-4 gap-10">
          {CATEGORY_LIST.map((category) => {
            const products = getProductsByCategory(category.slug);
            if (products.length === 0) return null;

            return (
              <div key={category.slug} className="border-t border-[var(--color-grass)]/40 pt-5">
                <Link
                  href={`/productos?categoria=${category.slug}`}
                  onClick={onClose}
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lime)] hover:underline"
                >
                  {category.name}
                </Link>
                <ul className="mt-5 space-y-3">
                  {products.map((product) => (
                    <ProductRow key={product.slug} product={product} onClose={onClose} />
                  ))}
                </ul>
              </div>
            );
          })}

          <div className="relative flex flex-col justify-between overflow-hidden border-t border-white/15 pt-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/home/cesped-1.jpg"
                alt="Superficies Más Verde instaladas"
                fill
                className="object-cover"
                sizes="280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/10 to-transparent" />
            </div>
            <div className="mt-4">
              <p className="text-sm leading-relaxed text-white/60">
                Todos los productos, precios y fichas técnicas en un solo lugar.
              </p>
              <Link
                href="/productos"
                onClick={onClose}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-[var(--color-lime)] px-5 py-3 text-[12px] font-semibold uppercase tracking-wide text-[var(--color-carbon)] transition-colors hover:bg-white"
              >
                Ver todos los productos
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
