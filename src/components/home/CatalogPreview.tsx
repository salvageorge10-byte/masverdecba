import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import { getProductsByCategory, formatPrice } from "@/data/products";
import { whatsapp } from "@/lib/whatsapp";

export default function CatalogPreview() {
  const deportivo = getProductsByCategory("cesped-deportivo");
  const secundarios = [
    ...getProductsByCategory("cesped-decorativo"),
    ...getProductsByCategory("jardin-vertical"),
  ];

  return (
    <section className="bg-[var(--color-paper)] py-24 sm:py-32">
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

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {deportivo.map((product, i) => (
            <Reveal key={product.slug} delay={i * 80}>
              <Link href={`/producto/${product.slug}`} className="group block">
                <div className="relative aspect-square overflow-hidden bg-[var(--color-paper)] sm:aspect-[4/5]">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 33vw, 50vw"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between sm:mt-4">
                  <p className="text-[13px] font-medium text-[var(--color-ink)] sm:text-[15px]">{product.name}</p>
                </div>
                {product.price && (
                  <p className="mt-1 text-xs text-[var(--color-ink-soft)] sm:text-sm">{formatPrice(product.price)}</p>
                )}
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 border-t border-[var(--color-line)] pt-10">
          <div className="flex items-baseline justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
              También ofrecemos otras líneas
            </p>
            <Link href="/productos" className="text-sm font-medium text-[var(--color-grass)] hover:underline">
              Ver catálogo completo →
            </Link>
          </div>

          {/* En mobile es un carrusel: el padding final evita que la última
              tarjeta quede cortada contra el borde de la pantalla. */}
          <div className="-mr-6 mt-8 flex snap-x gap-4 overflow-x-auto pb-2 pr-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mr-0 sm:gap-6 sm:overflow-visible sm:pr-0">
            {secundarios.map((product, i) => (
              <div
                key={product.slug}
                className={`group flex-shrink-0 snap-start ${
                  i === 0 ? "w-[68vw] sm:w-auto sm:flex-[2]" : "w-[60vw] sm:w-auto sm:flex-1"
                }`}
              >
                <Link href={`/producto/${product.slug}`} className="block">
                  <div className="relative aspect-square overflow-hidden bg-[var(--color-paper)]">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 640px) 25vw, 50vw"
                    />
                  </div>
                </Link>
                <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                  <Link href={`/producto/${product.slug}`} className="text-sm text-[var(--color-ink)] hover:underline">
                    {product.name}
                  </Link>
                  <a
                    href={whatsapp.product(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-xs font-medium uppercase tracking-wide text-[var(--color-grass)] hover:underline"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
