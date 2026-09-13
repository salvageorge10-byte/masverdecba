"use client";

import { useState } from "react";
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

// Fotos reales (mismas que en el portfolio de WorkGallery): producto ya
// usado en el catálogo + fotos verificadas de @masverde.cba.
const CAROUSEL_PHOTOS = [
  { src: "/images/hero/cancha-hero.jpg", alt: "Cancha de fútbol con césped sintético" },
  { src: "/images/productos/cesped-futbol/futbol-2.jpg", alt: "Detalle de fibra de césped sintético" },
  { src: "/images/proyectos/deposito-rollos.jpg", alt: "Rollos de césped en el depósito" },
  { src: "/images/productos/cesped-futbol/futbol-4.jpg", alt: "Césped sintético de alta densidad" },
  { src: "/images/proyectos/gimnasio-piso-cesped.jpg", alt: "Gimnasio con piso de césped sintético" },
  { src: "/images/productos/cesped-futbol/futbol-6.jpg", alt: "Terminación de obra en césped sintético" },
  { src: "/images/proyectos/patio-transformacion.jpg", alt: "Patio residencial con césped sintético" },
  { src: "/images/proyectos/jardin-infantes.jpg", alt: "Jardín de infantes con césped sintético" },
];

export default function ProjectsSection({ showLink = true }: { showLink?: boolean }) {
  const [offset, setOffset] = useState(0);
  const visible = Array.from({ length: 4 }, (_, i) => CAROUSEL_PHOTOS[(offset + i) % CAROUSEL_PHOTOS.length]);

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
              src="/images/hero/cancha-hero.jpg"
              alt="Instalación de césped sintético en cancha de fútbol, Córdoba"
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

        {/* Franja de 3 columnas */}
        <Reveal delay={150} className="mt-6 grid gap-px overflow-hidden bg-white/10 lg:grid-cols-3">
          <div className="bg-[#0b100e] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lime)]">
              Proyectos reales
            </p>
            <h3 className="mt-3 text-xl font-medium text-white">Nuestro trabajo, de cerca.</h3>

            <div className="mt-6 grid grid-cols-4 gap-2">
              {visible.map((photo) => (
                <div key={photo.src} className="relative aspect-square overflow-hidden">
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="80px" />
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Link
                href="/proyectos"
                className="text-sm font-medium text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white"
              >
                Ver galería →
              </Link>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setOffset((o) => (o - 1 + CAROUSEL_PHOTOS.length) % CAROUSEL_PHOTOS.length)}
                  aria-label="Fotos anteriores"
                  className="flex h-8 w-8 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-white/50 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                    <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setOffset((o) => (o + 1) % CAROUSEL_PHOTOS.length)}
                  aria-label="Fotos siguientes"
                  className="flex h-8 w-8 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-white/50 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="min-h-[320px] bg-[#0b100e] lg:min-h-0">
            <MapLoader dark />
          </div>

          <div className="bg-[#0b100e] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lime)]">
              En Córdoba
            </p>
            <h3 className="mt-3 text-xl font-medium text-white">Dos bases, un mismo equipo.</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-white/60">
              Contamos con depósitos en Córdoba Capital y Bell Ville, lo que nos
              permite coordinar stock y logística para acompañar cada proyecto,
              deportivo o decorativo.
            </p>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-lime)]" />
                  <div>
                    <p className="text-sm font-medium text-white">{loc.city}</p>
                    <p className="text-xs text-white/50">{loc.address}</p>
                  </div>
                </div>
              ))}
            </div>
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
