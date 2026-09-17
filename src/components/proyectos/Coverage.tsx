"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import MapLoader from "@/components/home/MapLoader";
import { LOCATIONS, GOOGLE_RATING } from "@/data/company";

// Datos verificados (ver masverde-audit/google-social-verification-2026-09-13.txt):
// direcciones y coordenadas de ambos depósitos, y rating de Google de Córdoba.
const STATS = [
  { value: `${GOOGLE_RATING.value}`, label: "Rating en Google (depósito Córdoba)" },
  { value: "2", label: "Bases: Córdoba y Bell Ville" },
  { value: "5 años", label: "De garantía en todo el césped sintético" },
];

export default function Coverage() {
  return (
    <section className="bg-[var(--color-carbon)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
              Dónde trabajamos
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl">
              Dos bases, cobertura en todo el país.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
              Operamos desde Córdoba Capital y Bell Ville, con equipo propio para
              la instalación y envíos coordinados a cualquier provincia.
            </p>

            <dl className="mt-9 grid grid-cols-3 gap-6 border-t border-white/10 pt-7">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-medium text-[var(--color-lime)]">{s.value}</dt>
                  <dd className="mt-1.5 text-xs leading-snug text-white/55">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7">
            <div className="min-h-[340px] overflow-hidden border border-white/10 bg-[#0b100e] sm:min-h-[420px]">
              <MapLoader dark />
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.id} delay={i * 80} className="group overflow-hidden border border-white/10 bg-[#0b100e]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={loc.image}
                  alt={`Depósito Más Verde en ${loc.city}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 90vw"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
