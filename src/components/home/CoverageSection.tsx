"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import CoverageMapLoader from "@/components/home/CoverageMapLoader";
import { GOOGLE_RATING } from "@/data/company";

// Fotos reales de instalaciones terminadas (sin dirección ni m² verificados
// todavía: ver src/data/projects.ts, que sigue vacío a propósito). Se
// muestran solo con el tipo de espacio, nunca con datos inventados.
// "gimnasio-detalle.jpg" es un recorte de gimnasio-piso-cesped.jpg sin el
// texto/logo promocional del original, para que se vea como foto y no como
// pieza de redes.
const FEATURED_WORK = [
  {
    src: "/images/proyectos/gimnasio-detalle.jpg",
    alt: "Gimnasio con piso de césped sintético instalado por Más Verde",
    label: "Gimnasio",
  },
  {
    src: "/images/productos/cesped-futbol/futbol-6.jpg",
    alt: "Detalle de fibra de césped sintético para cancha de fútbol",
    label: "Cancha de fútbol",
  },
  {
    src: "/images/productos/jardin-exterior/exterior-1.jpg",
    alt: "Jardín exterior con césped sintético instalado",
    label: "Jardín exterior",
  },
];

const STATS = [
  { value: "2", label: "Bases operativas: Córdoba y Bell Ville" },
  { value: `${GOOGLE_RATING.value}★`, label: "Calificación en Google" },
  { value: "Propio", label: "Equipo de instalación, sin subcontratar" },
];

export default function CoverageSection() {
  return (
    <section className="bg-[var(--color-carbon)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Izquierda: intro + proyectos destacados */}
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
              Nuestra cobertura
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl">
              Presencia real, no una promesa en el mapa.
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/65">
              Operamos desde dos bases propias y viajamos con nuestro equipo a
              instalar cada proyecto, sin subcontratar. Estas son algunas de
              las obras que ya entregamos.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              {FEATURED_WORK.map((work) => (
                <div key={work.src} className="group relative aspect-[3/4] overflow-hidden bg-white/5">
                  <Image
                    src={work.src}
                    alt={work.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 16vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)]/90 via-[var(--color-carbon)]/10 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-[11px] font-medium uppercase leading-tight tracking-[0.06em] text-white">
                    {work.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/40">
              Fotos reales de obras entregadas. Dirección exacta de cada
              proyecto disponible a pedido.
            </p>
          </Reveal>

          {/* Derecha: mapa real e interactivo */}
          <Reveal delay={100} className="flex flex-col">
            <div className="min-h-[360px] flex-1 overflow-hidden border border-white/10 lg:min-h-[480px]">
              <CoverageMapLoader />
            </div>
            <p className="mt-4 text-xs text-white/40">
              Pines verdes: bases operativas de Más Verde. Tocá un pin para
              ver la ubicación. Sumamos obras a medida que confirmamos foto y
              dirección.
            </p>
          </Reveal>
        </div>

        {/* Métricas reales + CTA */}
        <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-medium text-white">{stat.value}</p>
                <p className="mt-1 max-w-[16rem] text-xs leading-snug text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>

          <CtaButton href="/proyectos" variant="solid-light" className="w-fit flex-shrink-0">
            Ver proyectos
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
