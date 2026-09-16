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

const PROCESS = [
  {
    n: "01",
    title: "Asesoramiento",
    text: "Te ayudamos a elegir el espesor y la textura según el espacio que querés renovar.",
  },
  {
    n: "02",
    title: "Elección",
    text: "Definís el césped según el uso: jardines, terrazas o espacios recreativos.",
  },
  {
    n: "03",
    title: "Preparación",
    text: "Preparamos la superficie para asegurar un resultado prolijo y duradero.",
  },
  {
    n: "04",
    title: "Instalación",
    text: "Nuestro equipo propio instala el césped de punta a punta, sin subcontratar.",
  },
];

const FAQS = [
  {
    q: "¿Dónde se puede instalar el césped decorativo?",
    a: "Está pensado para jardines, terrazas y espacios recreativos.",
  },
  {
    q: "¿Necesita riego o corte?",
    a: "No requiere riego ni corte. El mantenimiento se limita a limpieza básica según el uso y la exposición del espacio.",
  },
  {
    q: "¿Cómo funciona el drenaje?",
    a: "Cuenta con un sistema de drenaje eficiente para evitar la acumulación de agua sobre la superficie.",
  },
  {
    q: "¿Es apto para mascotas?",
    a: "Sí, sus fibras están diseñadas para evitar enredos y resistir el uso diario de mascotas.",
  },
  {
    q: "¿Qué garantía tiene?",
    a: "5 años de garantía en toda nuestra variedad de césped sintético.",
  },
];

export default function CespedDecorativoPage() {
  const product = getProductBySlug("cesped-sintetico-40-mm");

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-[var(--color-carbon)]">
        <Image
          src="/images/productos/cesped-40mm/40-2.jpg"
          alt="Césped sintético decorativo de 40mm"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/35 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-16 pt-40 lg:px-10 xl:pt-48">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
            Césped decorativo
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl">
            Verde todo el año, sin mantenimiento.
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/70">
            La misma calidad de fibra de nuestro césped deportivo, en una
            versión pensada para jardines, terrazas y espacios recreativos.
          </p>
          <div className="mt-9">
            <CtaButton href={whatsapp.quoteProject({ tipoProyecto: "Césped decorativo" })} external variant="solid-light">
              Solicitar presupuesto
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Transformá tu espacio */}
      <section className="bg-[var(--color-paper)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-grass)]">
            Transformá tu espacio
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl">
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

      {/* Ventajas, editorial */}
      <section className="bg-[var(--color-carbon)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lime)]">
                Por qué elegirlo
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl">
                Apariencia natural, cero complicaciones.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70">
                Conseguís la apariencia y suavidad del césped real, sin
                mantenimiento: no necesita riego ni corte, y mantiene su
                color todo el año. Su fibra de polietileno texturizado lleva
                protección UV para no perder aspecto con el sol, y una base
                de látex reforzada con drenaje eficiente para evitar que se
                acumule agua sobre la superficie.
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
                  {product.description}
                </p>

                <dl className="mt-8 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between gap-6 py-3">
                      <dt className="text-sm text-[var(--color-ink-soft)]">{spec.label}</dt>
                      <dd className="text-right text-sm font-medium text-[var(--color-ink)]">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 flex flex-wrap gap-3">
                  <CtaButton href={`/producto/${product.slug}`} variant="solid">
                    Ver ficha completa
                  </CtaButton>
                  <AddToCartButton
                    product={product}
                    className="inline-flex items-center justify-center gap-2 border border-white/40 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)] transition-colors hover:bg-white hover:text-[var(--color-carbon)]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Proceso */}
      <section className="bg-[var(--color-carbon)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lime)]">
            Cómo lo instalamos
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            De la consulta a la instalación, con el mismo equipo.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step) => (
              <div key={step.n} className="border-t border-white/15 pt-5">
                <p className="font-display text-2xl font-medium text-white/25">{step.n}</p>
                <p className="mt-2 text-base font-medium text-white">{step.title}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-paper)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-grass)]">
                Preguntas frecuentes
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-[var(--color-ink)]">
                Sobre el césped decorativo.
              </h2>
            </div>

            <div className="divide-y divide-[var(--color-line)] border-t border-[var(--color-line)] lg:col-span-8">
              {FAQS.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[15px] font-medium text-[var(--color-ink)]">
                    {item.q}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-open:rotate-45"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cierre */}
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
