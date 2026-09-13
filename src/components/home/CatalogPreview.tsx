import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import { getProductsByCategory, formatPrice } from "@/data/products";

export default function CatalogPreview() {
  const deportivo = getProductsByCategory("cesped-deportivo");
  const secundarios = [
    ...getProductsByCategory("cesped-decorativo"),
    ...getProductsByCategory("jardin-vertical"),
    ...getProductsByCategory("mobiliario"),
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Catálogo"
            title="Césped deportivo, primero."
            description="Las tres variantes que más se piden para canchas y espacios de entrenamiento."
          />
          <CtaButton href="/cesped-deportivo" variant="outline" className="w-fit">
            Ver todo el césped deportivo
          </CtaButton>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {deportivo.map((product, i) => (
            <Reveal key={product.slug} delay={i * 80}>
              <Link href={`/producto/${product.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-paper)]">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <p className="text-[15px] font-medium text-[var(--color-ink)]">{product.name}</p>
                </div>
                {product.price && (
                  <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{formatPrice(product.price)}</p>
                )}
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 border-t border-[var(--color-line)] pt-10">
          <div className="flex items-baseline justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
              También en nuestro catálogo
            </p>
            <Link href="/productos" className="text-sm font-medium text-[var(--color-grass)] hover:underline">
              Ver catálogo completo →
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {secundarios.map((product) => (
              <Link key={product.slug} href={`/producto/${product.slug}`} className="group block">
                <div className="relative aspect-square overflow-hidden bg-[var(--color-paper)]">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      product.category.slug === "mobiliario" ? "object-contain p-6" : "object-cover"
                    }`}
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                </div>
                <p className="mt-3 text-sm text-[var(--color-ink)]">{product.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
