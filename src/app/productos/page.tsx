import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import CatalogGrid from "@/components/CatalogGrid";
import TrustStrip from "@/components/TrustStrip";

export const metadata = {
  title: "Productos",
  description:
    "Catálogo de césped sintético deportivo y decorativo y jardines verticales de Más Verde.",
};

// Ordenado por prioridad de categoría (deportivo primero), luego por nombre.
const SORTED_PRODUCTS = [...PRODUCTS].sort(
  (a, b) => a.category.priority - b.category.priority || a.name.localeCompare(b.name)
);

export default function ProductosPage() {
  return (
    <main className="pt-24 xl:pt-32">
      <div className="bg-[var(--color-paper)]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
          <p className="text-sm text-[var(--color-ink-soft)]">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <span>Productos</span>
          </p>
          <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-[var(--color-ink)]">
            Catálogo
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
            Césped deportivo, césped decorativo y jardines verticales.
            Todos los precios son por m² y pueden variar según superficie y obra.
          </p>
        </div>
      </div>

      <TrustStrip />

      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
        <CatalogGrid products={SORTED_PRODUCTS} />
      </section>
    </main>
  );
}
