"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/data/products";
import { whatsapp } from "@/lib/whatsapp";
import { metaPixel } from "@/lib/analytics/metaPixel";

export default function ProductDetails({ product }: { product: Product }) {
  const [productUrl, setProductUrl] = useState(
    `https://masverdecba.com.ar/producto/${product.slug}/`
  );

  useEffect(() => {
    setProductUrl(window.location.href);
    metaPixel.viewContent({ content_name: product.name, content_category: product.category.name });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDeportivo = product.category.slug === "cesped-deportivo";

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-grass)]">
        {product.category.name}
      </p>
      <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl">
        {product.name}
      </h1>

      {product.price && (
        <p className="mt-4 text-xl text-[var(--color-ink)]">
          {formatPrice(product.price)}
          {product.priceUnit && (
            <span className="ml-2 text-sm font-normal text-[var(--color-ink-soft)]">
              {product.priceUnit}
            </span>
          )}
        </p>
      )}

      <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden bg-[var(--color-line)] sm:grid-cols-2">
        {product.specs.map((spec) => (
          <div key={spec.label} className="bg-white/5 p-4">
            <dt className="text-xs uppercase tracking-wide text-[var(--color-ink-soft)]">
              {spec.label}
            </dt>
            <dd className="mt-1 text-sm font-medium text-[var(--color-ink)]">{spec.value}</dd>
          </div>
        ))}
      </dl>

      {product.extraLines && product.extraLines.length > 0 && (
        <ul className="mt-6 space-y-2">
          {product.extraLines.map((line) => (
            <li key={line} className="flex items-start gap-2.5 text-sm text-[var(--color-ink)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-grass)" strokeWidth="2.5" className="mt-0.5 h-3.5 w-3.5 flex-shrink-0">
                <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {line}
            </li>
          ))}
        </ul>
      )}

      <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-ink)]/85">
        {product.description}
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsapp.product(product.name, productUrl)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => metaPixel.contact({ content_name: product.name })}
          className="inline-flex items-center justify-center gap-2 bg-[var(--color-carbon)] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-forest)]"
        >
          Consultar este producto
        </a>
        {isDeportivo ? (
          <a
            href={whatsapp.quoteProject({ tipoProyecto: product.name })}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => metaPixel.lead({ content_name: product.name })}
            className="inline-flex items-center justify-center gap-2 border border-[var(--color-carbon)] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-carbon)] transition-colors hover:bg-[var(--color-carbon)] hover:text-white"
          >
            Solicitar presupuesto
          </a>
        ) : (
          <a
            href={whatsapp.availability(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[var(--color-carbon)] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-carbon)] transition-colors hover:bg-[var(--color-carbon)] hover:text-white"
          >
            Consultar disponibilidad
          </a>
        )}
      </div>

      {product.advantages && product.advantages.length > 0 && (
        <div className="mt-10 border-t border-[var(--color-line)] pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
            Ventajas
          </p>
          <ul className="mt-4 space-y-3">
            {product.advantages.map((advantage) => (
              <li key={advantage} className="flex items-start gap-3 text-sm text-[var(--color-ink)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-grass)" strokeWidth="2.5" className="mt-0.5 h-4 w-4 flex-shrink-0">
                  <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {advantage}
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-8 text-sm text-[var(--color-ink-soft)]">
        Categoría:{" "}
        <Link href="/productos" className="text-[var(--color-grass)] hover:underline">
          {product.category.name}
        </Link>
      </p>
    </div>
  );
}
