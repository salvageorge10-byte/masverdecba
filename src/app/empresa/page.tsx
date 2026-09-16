import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { GOOGLE_RATING } from "@/data/company";
import { whatsapp } from "@/lib/whatsapp";

export const metadata = {
  title: "Empresa",
  description:
    "Más Verde: césped sintético con equipo propio de instalación, depósitos en Córdoba y Bell Ville.",
};

const STATS = [
  { value: `${GOOGLE_RATING.value}★`, label: "Calificación en Google, con 35 reseñas" },
  { value: "2", label: "Bases propias: Córdoba y Bell Ville" },
  { value: "5 años", label: "De garantía en nuestro césped sintético" },
];

export default function EmpresaPage() {
  return (
    <main>
      {/* Hero editorial: foto real a pantalla completa */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-[var(--color-carbon)]">
        <Image
          src="/images/hero/cancha-hero.jpg"
          alt="Cancha de fútbol con césped sintético instalado por Más Verde"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-16 pt-40 lg:px-10 xl:pt-48">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
            Empresa
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl">
            Instalamos césped sintético con equipo propio, desde Córdoba y Bell Ville.
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/70">
            Depósito propio en dos ciudades y una instalación de punta a
            punta, sin subcontratar ninguna etapa.
          </p>
        </div>
      </section>

      {/* Bloque asimétrico: texto + foto real */}
      <section className="bg-[var(--color-paper)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-grass)]">
                Cómo operamos
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[var(--color-ink)] sm:text-4xl">
                Un equipo, dos bases, un mismo estándar.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-ink)]/75">
                Trabajamos con depósito propio en Córdoba y Bell Ville, así
                garantizamos stock permanente y tiempos de entrega cortos. El
                mismo equipo que te asesora es el que instala la obra: no
                subcontratamos ninguna etapa, del primer contacto a la
                entrega final.
              </p>
            </Reveal>

            <Reveal
              delay={100}
              className="relative aspect-[4/3] lg:col-span-7 lg:col-start-6 lg:aspect-auto lg:h-[560px]"
            >
              <Image
                src="/images/productos/cesped-futbol/futbol-4.jpg"
                alt="Detalle de instalación de césped sintético"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Franja de datos reales, sin íconos */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-carbon)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl font-medium text-white sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 max-w-[16rem] text-sm text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajan: foto real grande + texto corto */}
      <section className="bg-[var(--color-paper)] py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <Reveal className="relative order-2 aspect-[4/3] lg:order-1 lg:col-span-7 lg:aspect-auto lg:h-[560px]">
              <Image
                src="/images/productos/jardin-exterior/exterior-2.jpg"
                alt="Instalación real de césped sintético en muro exterior"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </Reveal>

            <Reveal delay={100} className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-grass)]">
                Cómo trabajamos
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[var(--color-ink)] sm:text-4xl">
                Asesoramiento, instalación y seguimiento, de punta a punta.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-ink)]/75">
                Te ayudamos a elegir el césped según el uso real que le vas a
                dar, instalamos con nuestro propio equipo y hacemos el
                seguimiento hasta que el espacio queda terminado.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cierre: foto real de proyecto terminado + CTA */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[var(--color-carbon)]">
        <Image
          src="/images/productos/cesped-futbol/futbol-5.jpg"
          alt="Césped sintético deportivo terminado"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/40 to-transparent" />
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-16 sm:flex-row sm:items-end sm:justify-between lg:px-10">
          <p className="max-w-md font-display text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl">
            ¿Tenés un proyecto para transformar?
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <CtaButton href={whatsapp.quoteProject()} external variant="solid-light">
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
