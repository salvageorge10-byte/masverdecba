import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import QuoteForm from "@/components/QuoteForm";
import { getProductsByCategory, formatPrice } from "@/data/products";
import { whatsapp } from "@/lib/whatsapp";

function spec(product: ReturnType<typeof getProductsByCategory>[number], label: string) {
  return product.specs.find((s) => s.label === label)?.value;
}

export const metadata = {
  title: "Césped Sintético para Fútbol e Instalación de Canchas",
  description:
    "Césped sintético deportivo de alta densidad para canchas de fútbol, gimnasios y espacios de entrenamiento. Instalación con equipo propio en Córdoba.",
};

export default function CespedDeportivoPage() {
  const products = getProductsByCategory("cesped-deportivo");

  return (
    <main>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[var(--color-carbon)]">
        <Image
          src="/images/productos/cesped-futbol/futbol-4.jpg"
          alt="Césped sintético deportivo de alta densidad"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/50 to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-40 lg:px-10 xl:pt-48">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
            Césped deportivo
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-5xl font-medium leading-[1] tracking-tight text-white sm:text-6xl">
            Tres densidades de césped, un mismo estándar profesional.
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/75">
            Desde gimnasios y áreas de entrenamiento hasta canchas de fútbol
            completas. Elegimos la fibra según el uso real que le vas a dar.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        <SectionHeading
          eyebrow="Nuestras variantes"
          title="Elegí según el uso."
          description="Cada producto tiene su propia ficha técnica completa: altura de fibra, densidad, base y aplicación recomendada."
        />
      </section>

      <div className="divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
        {products.map((product, i) => (
          <section key={product.slug} className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
              <Reveal
                className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                </div>
              </Reveal>

              <Reveal delay={100} className="flex flex-col justify-center lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-grass)]">
                  {spec(product, "Altura de fibra")}
                </p>
                <h3 className="mt-3 font-display text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl">
                  {product.name}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                  {product.description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-px bg-[var(--color-line)]">
                  {product.specs.map((s) => (
                    <div key={s.label} className="bg-white/5 p-4">
                      <p className="text-[11px] uppercase tracking-wide text-[var(--color-ink-soft)]">{s.label}</p>
                      <p className="mt-1 text-sm font-medium text-[var(--color-ink)]">{s.value}</p>
                    </div>
                  ))}
                </div>

                {product.extraLines && (
                  <ul className="mt-6 space-y-2">
                    {product.extraLines.map((line) => (
                      <li key={line} className="flex items-start gap-3 text-sm text-[var(--color-ink)]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--color-grass)"
                          strokeWidth="2.5"
                          className="mt-0.5 h-4 w-4 flex-shrink-0"
                        >
                          <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {line}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                  {product.price && (
                    <p className="text-lg font-medium text-[var(--color-ink)]">
                      {formatPrice(product.price)}
                      {product.priceUnit && (
                        <span className="ml-1.5 text-sm font-normal text-[var(--color-ink-soft)]">
                          {product.priceUnit}
                        </span>
                      )}
                    </p>
                  )}
                  <Link
                    href={`/producto/${product.slug}`}
                    className="text-sm font-medium text-[var(--color-grass)] hover:underline"
                  >
                    Ver ficha completa →
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-[var(--color-paper)] py-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <SectionHeading
            eyebrow="Cotizá tu cancha"
            title="Contanos sobre tu proyecto deportivo."
            description="Cancha nueva, renovación o un espacio de entrenamiento: dejanos tus datos y te respondemos con una cotización a medida."
          />
          <div className="border border-[var(--color-line)] bg-white/5 p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-carbon)] py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-6 text-center lg:px-10">
          <p className="max-w-md text-lg text-white/80">
            ¿Preferís hablar directamente? Contanos por WhatsApp qué necesitás.
          </p>
          <CtaButton href={whatsapp.quoteProject()} external variant="solid-light">
            Cotizar mi cancha
          </CtaButton>
        </div>
      </section>
    </main>
  );
}
