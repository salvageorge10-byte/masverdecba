import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import QuoteForm from "@/components/QuoteForm";
import { getProductsByCategory, formatPrice } from "@/data/products";
import { whatsapp } from "@/lib/whatsapp";

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
        <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-40 lg:px-10">
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

        <div className="mt-14 space-y-px bg-[var(--color-line)]">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 60}>
              <Link
                href={`/producto/${product.slug}`}
                className="group grid gap-6 bg-white p-6 transition-colors hover:bg-[var(--color-paper)] sm:grid-cols-[140px_1fr_auto] sm:items-center sm:p-8"
              >
                <div className="relative aspect-square w-full overflow-hidden sm:w-[140px]">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="140px" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[var(--color-ink)]">{product.name}</h3>
                  <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
                    {product.specs.find((s) => s.label === "Aplicación")?.value}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs uppercase tracking-wide text-[var(--color-ink-soft)]">
                    <span>{product.specs.find((s) => s.label === "Altura de fibra")?.value}</span>
                    <span>{product.specs.find((s) => s.label === "Densidad")?.value}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:flex-col sm:items-end sm:gap-2">
                  {product.price && (
                    <p className="text-sm font-medium text-[var(--color-ink)]">{formatPrice(product.price)}</p>
                  )}
                  <span className="text-sm text-[var(--color-grass)] group-hover:underline">Ver ficha →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-paper)] py-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <SectionHeading
            eyebrow="Cotizá tu cancha"
            title="Contanos sobre tu proyecto deportivo."
            description="Cancha nueva, renovación o un espacio de entrenamiento: dejanos tus datos y te respondemos con una cotización a medida."
          />
          <div className="bg-white p-8">
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
