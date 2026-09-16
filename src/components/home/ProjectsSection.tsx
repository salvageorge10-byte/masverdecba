"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import MapLoader from "@/components/home/MapLoader";
import { LOCATIONS } from "@/data/company";
import { whatsapp } from "@/lib/whatsapp";

const FEATURES = [
  {
    label: "Entrega y logística propia",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17" cy="18" r="1.6" />
      </svg>
    ),
  },
  {
    label: "Instalación profesional",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M12 3a4 4 0 0 1 4 4v2H8V7a4 4 0 0 1 4-4Z" strokeLinejoin="round" />
        <path d="M4 11h16l-1.5 9h-13L4 11Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Acompañamiento en todo el proceso",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ProjectsSection({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="bg-[var(--color-carbon)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Encabezado + foto grande */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
              Nuestra cobertura
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl">
              Llevamos el mismo estándar de calidad a{" "}
              <span className="text-[var(--color-lime)]">cada proyecto</span>.
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/65">
              Operamos desde dos bases —Córdoba Capital y Bell Ville— y viajamos a
              la obra con nuestro propio equipo, sin subcontratar la instalación.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {FEATURES.map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 text-[var(--color-lime)]">{f.icon}</span>
                  <p className="text-[13px] leading-snug text-white/70">{f.label}</p>
                </div>
              ))}
            </div>

            {showLink && (
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <CtaButton href={whatsapp.quoteProject()} external variant="solid-light">
                  Solicitar presupuesto
                </CtaButton>
                <Link
                  href="/proyectos"
                  className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
                >
                  Ver proyectos
                </Link>
              </div>
            )}
          </Reveal>

          <Reveal delay={100} className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-[480px]">
            <Image
              src="/images/productos/cesped-futbol/futbol-3.jpg"
              alt="Detalle de instalación de césped sintético para cancha de fútbol"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)]/70 via-transparent to-transparent" />
            <p className="absolute right-6 top-6 text-right text-xs font-semibold uppercase leading-relaxed tracking-[0.15em] text-white/70">
              Espacios que
              <br />
              generan deporte
            </p>
            <p className="absolute bottom-5 left-6 text-xs uppercase tracking-[0.1em] text-white/60">
              Instalación césped sintético · Córdoba
            </p>
          </Reveal>
        </div>

        {/* Ubicaciones + mapa */}
        <Reveal delay={150} className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.3fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {LOCATIONS.map((loc, i) => (
              <div key={loc.id} className="group overflow-hidden border border-white/10 bg-[#0b100e]">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={loc.image}
                    alt={`Depósito Más Verde en ${loc.city}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 22vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b100e] via-[#0b100e]/10 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-lime)]">
                    {i === 0 ? "Base principal" : "Segunda base"}
                  </p>
                  <h3 className="mt-2 text-xl font-medium text-white">{loc.city}</h3>
                  <p className="mt-1 text-sm text-white/55">{loc.address}</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${loc.coordinates[0]},${loc.coordinates[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-[var(--color-lime)]"
                  >
                    Cómo llegar
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
                      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="min-h-[360px] overflow-hidden border border-white/10 bg-[#0b100e] lg:min-h-[520px]">
            <MapLoader dark />
          </div>
        </Reveal>

        {/* Frase de marca */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-lg italic leading-snug text-white/70">
            “Más que césped, instalamos canchas donde se juega en serio.”
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">— Más Verde</p>
        </div>
      </div>
    </section>
  );
}
