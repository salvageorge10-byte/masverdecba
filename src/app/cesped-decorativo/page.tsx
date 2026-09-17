import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { getProductBySlug, formatPrice } from "@/data/products";
import { whatsapp } from "@/lib/whatsapp";

export const metadata = {
  title: "Césped Sintético Decorativo",
  description:
    "Césped sintético decorativo para jardines, terrazas y espacios recreativos. Aspecto natural, sin mantenimiento.",
};

const MAIN_SPEC_LABELS = ["Altura de fibra", "Medidas", "Aplicación"];

const USES = [
  {
    label: "Jardines",
    src: "/images/productos/cesped-40mm/40-4.jpg",
    alt: "Césped sintético decorativo instalado en un jardín, con plantas reales",
  },
  {
    label: "Terrazas",
    src: "/images/productos/cesped-40mm/40-1.jpg",
    alt: "Detalle de césped sintético decorativo para terrazas",
  },
  {
    label: "Espacios recreativos",
    src: "/images/productos/cesped-40mm/40-6.jpg",
    alt: "Césped sintético decorativo para espacios recreativos al aire libre",
  },
];

export default function CespedDecorativoPage() {
  const product = getProductBySlug("cesped-sintetico-40-mm");
  const mainSpecs = product?.specs.filter((s) => MAIN_SPEC_LABELS.includes(s.label)) ?? [];

  return (
    <main>
      {/* Hero corto */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-[var(--color-carbon)]">
        <Image
          src="/images/productos/cesped-40mm/40-2.jpg"
          alt="Césped sintético decorativo de 40mm"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/35 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-14 pt-32 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
            Césped decorativo
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl">
            Verde todo el año, sin mantenimiento.
          </h1>
        </div>
      </section>

      {/* Producto: Césped 40mm */}
      {product && (
        <section className="bg-[var(--color-paper)] py-24 sm:py-32">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
              <Reveal className="relative aspect-[4/3] lg:col-span-7 lg:aspect-auto lg:h-[560px]">
                <Image
                  src="/images/productos/cesped-40mm/40-5.jpg"
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </Reveal>

              <Reveal delay={100} className="flex flex-col justify-center lg:col-span-5">
                <h2 className="font-display text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl">
                  {product.name}
                </h2>
                {product.price && (
                  <p className="mt-3 text-lg text-[var(--color-ink)]">
                    {formatPrice(product.price)}{" "}
                    <span className="text-sm text-[var(--color-ink-soft)]">{product.priceUnit}</span>
                  </p>
                )}
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                  Apariencia y suavidad del césped real, sin riego ni corte. Ideal
                  para jardines, patios o balcones: resistente, estético y
                  siempre verde.
                </p>

                <dl className="mt-8 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
                  {mainSpecs.map((spec) => (
                    <div key={spec.label} className="flex justify-between gap-6 py-3">
                      <dt className="text-sm text-[var(--color-ink-soft)]">{spec.label}</dt>
                      <dd className="text-right text-sm font-medium text-[var(--color-ink)]">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8">
                  <AddToCartButton
                    product={product}
                    className="inline-flex items-center justify-center gap-2 bg-[var(--color-carbon)] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-forest)]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Fotos / aplicaciones */}
      <section className="bg-[var(--color-carbon)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lime)]">
            Transformá tu espacio
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Un mismo césped, tres formas de usarlo.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {USES.map((use, i) => (
              <Reveal key={use.label} delay={i * 80} className="group relative aspect-[3/4] overflow-hidden">
                <Image
                  src={use.src}
                  alt={use.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)]/80 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 text-lg font-medium text-white">{use.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-[var(--color-paper)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-grass)]">
                Por qué elegirlo
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[var(--color-ink)] sm:text-4xl">
                Apariencia natural, cero complicaciones.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                Sin riego ni corte, mantiene su color todo el año. Fibra con
                protección UV y base con drenaje eficiente. Apto para
                mascotas.
              </p>
            </Reveal>

            <Reveal
              delay={100}
              className="relative aspect-[4/3] lg:col-span-7 lg:col-start-6 lg:aspect-auto lg:h-[520px]"
            >
              <Image
                src="/images/home/cesped-2.jpg"
                alt="Detalle de la base y drenaje del césped sintético decorativo"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cierre / CTA */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-[var(--color-carbon)]">
        <Image
          src="/images/home/cesped-1.jpg"
          alt="Césped sintético decorativo instalado"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/40 to-transparent" />
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-16 sm:flex-row sm:items-end sm:justify-between lg:px-10">
          <p className="max-w-md font-display text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl">
            ¿Tenés un espacio para transformar?
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <CtaButton href={whatsapp.quoteProject({ tipoProyecto: "Césped decorativo" })} external variant="solid-light">
              Solicitar presupuesto
            </CtaButton>
            <Link
              href="/proyectos"
              className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              Ver proyectos reales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
