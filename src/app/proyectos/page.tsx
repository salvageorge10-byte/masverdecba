import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import CaseStudies from "@/components/proyectos/CaseStudies";
import Coverage from "@/components/proyectos/Coverage";
import { GOOGLE_RATING } from "@/data/company";
import { whatsapp } from "@/lib/whatsapp";

export const metadata = {
  title: "Proyectos",
  description: "Canchas e instalaciones reales de césped sintético realizadas por Más Verde en Córdoba.",
};

export default function ProyectosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-[var(--color-carbon)]">
        <Image
          src="/images/home/vertical-exterior-hero.jpg"
          alt="Espacio exterior con jardín vertical y césped sintético de Más Verde"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/70 to-[var(--color-carbon)]/60" />
        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-16 pt-40 lg:px-10 xl:pt-48">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
            Portfolio · Obras reales
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[0.98] tracking-tight text-white sm:text-7xl">
            Cada instalación,
            <br />
            hecha con equipo propio.
          </h1>
          <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-white/70">
            Canchas, gimnasios y espacios residenciales transformados con
            césped sintético. Fotos reales, sin escenas armadas.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <CtaButton href={whatsapp.quoteProject()} external variant="solid-light">
              Cotizar mi proyecto
            </CtaButton>
            <span className="inline-flex items-center gap-2 text-[13px] font-medium text-white/70">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[var(--color-lime)]">
                <path d="M12 2.5l2.9 6 6.6.8-4.8 4.6 1.2 6.6L12 17.3l-5.9 3.2 1.2-6.6-4.8-4.6 6.6-.8L12 2.5z" />
              </svg>
              {GOOGLE_RATING.value} en Google — depósito Córdoba
            </span>
          </div>
        </div>
      </section>

      <CaseStudies />
      <Coverage />

      {/* CTA final */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-[var(--color-carbon)]">
        <Image
          src="/images/productos/cesped-futbol/futbol-1.jpg"
          alt="Cancha de césped sintético instalada por Más Verde"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/45 to-transparent" />
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-16 sm:flex-row sm:items-end sm:justify-between lg:px-10">
          <p className="max-w-md font-display text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl">
            ¿Tenés un proyecto para cotizar?
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <CtaButton href={whatsapp.quoteProject()} external variant="solid-light">
              Solicitar presupuesto
            </CtaButton>
            <Link
              href="/productos"
              className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              Ver productos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
