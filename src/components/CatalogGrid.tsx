"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { CATEGORY_LIST } from "@/data/categories";
import ProductGrid from "@/components/ProductGrid";

export default function CatalogGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState<string>("all");

  const filtered = active === "all" ? products : products.filter((p) => p.category.slug === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-[var(--color-line)] pb-6">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`px-4 py-2 text-[13px] font-medium uppercase tracking-wide transition-colors ${
            active === "all"
              ? "bg-[var(--color-carbon)] text-white"
              : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
          }`}
        >
          Todos
        </button>
        {CATEGORY_LIST.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => setActive(cat.slug)}
            className={`px-4 py-2 text-[13px] font-medium uppercase tracking-wide transition-colors ${
              active === cat.slug
                ? "bg-[var(--color-carbon)] text-white"
                : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
