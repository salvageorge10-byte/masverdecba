"use client";

import Image from "next/image";
import Link from "next/link";
import { CATEGORY_LIST } from "@/data/categories";
import { getProductsByCategory, formatPrice } from "@/data/products";

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
      <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-10 px-10 py-10">
        {CATEGORY_LIST.map((category) => {
          const products = getProductsByCategory(category.slug);
          if (products.length === 0) return null;

          return (
            <div key={category.slug}>
              <Link
                href={`/productos?categoria=${category.slug}`}
                onClick={onClose}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lime)] hover:underline"
              >
                {category.name}
              </Link>
              <ul className="mt-5 space-y-4">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/producto/${product.slug}`}
                      onClick={onClose}
                      className="group flex items-center gap-3"
                    >
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden bg-white/5">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="48px"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-[13px] font-medium text-white/90 group-hover:text-white">
                          {product.name}
                        </p>
                        {product.price && (
                          <p className="text-xs text-white/45">{formatPrice(product.price)}</p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div className="flex flex-col justify-between border-l border-white/10 pl-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Catálogo completo
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Todos los productos, precios y fichas técnicas en un solo lugar.
            </p>
          </div>
          <Link
            href="/productos"
            onClick={onClose}
            className="mt-6 inline-flex w-fit items-center gap-2 bg-[var(--color-lime)] px-5 py-3 text-[12px] font-semibold uppercase tracking-wide text-[var(--color-carbon)] transition-colors hover:bg-white"
          >
            Ver todos los productos
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
