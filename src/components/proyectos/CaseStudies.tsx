"use client";

import { useEffect, useState, ReactNode } from "react";
import Image from "next/image";
import ProductGallery from "@/components/ProductGallery";
import Reveal from "@/components/Reveal";
import { whatsapp } from "@/lib/whatsapp";

// Casos armados solo con fotos reales y verificadas (ver
// masverde-audit/google-social-verification-2026-09-13.txt). No se muestra
// localidad, cliente ni m² porque no están confirmados obra por obra.
interface Feature {
  label: string;
  icon: ReactNode;
}

interface CaseStudy {
  id: string;
  n: string;
  tag: string;
  workType: string;
  caption: string;
  photos: string[];
  description: string;
  features: Feature[];
}

const ICONS = {
  trophy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" strokeLinejoin="round" />
      <path d="M8 5H5v2a3 3 0 0 0 3 3M16 5h3v2a3 3 0 0 1-3 3M10 20h4M12 13v7" strokeLinecap="round" />
    </svg>
  ),
  performance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M4 18a8 8 0 1 1 16 0" strokeLinecap="round" />
      <path d="m12 14 4-4" strokeLinecap="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" strokeLinejoin="round" />
    </svg>
  ),
  drain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M12 3s5 5.5 5 9a5 5 0 0 1-10 0c0-3.5 5-9 5-9Z" strokeLinejoin="round" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M20 4c0 9-5 14-13 14 0-8 5-13 13-14Z" strokeLinejoin="round" />
      <path d="M11 13 5 20" strokeLinecap="round" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M3 11l9-7 9 7M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
    </svg>
  ),
  dumbbell: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M4 12h2M18 12h2M6 8v8M18 8v8M8 12h8" strokeLinecap="round" />
    </svg>
  ),
};

const CASES: CaseStudy[] = [
  {
    id: "cancha-futbol",
    n: "01",
    tag: "Deportivo",
    workType: "Cancha de fútbol",
    caption: "Espacios que hacen la diferencia",
    photos: [
      "/images/productos/cesped-futbol/futbol-1.jpg",
      "/images/hero/cancha-hero.jpg",
      "/images/productos/cesped-futbol/futbol-3.jpg",
      "/images/productos/cesped-futbol/futbol-5.jpg",
    ],
    description:
      "Instalación de césped sintético premium de 50mm, diseñado para máximo rendimiento, tracción y amortiguación. Certificado para competencia, con relleno de arena de sílice y caucho.",
    features: [
      { label: "Certificado para competencia", icon: ICONS.trophy },
      { label: "Alto rendimiento", icon: ICONS.performance },
      { label: "Larga durabilidad", icon: ICONS.shield },
    ],
  },
  {
    id: "gimnasio",
    n: "02",
    tag: "Comercial",
    workType: "Piso de gimnasio",
    caption: "Espacios más fuertes",
    photos: [
      "/images/proyectos/gimnasio-detalle.jpg",
      "/images/proyectos/gimnasio-detalle-3.jpg",
      "/images/proyectos/gimnasio-detalle-2.jpg",
      "/images/proyectos/gimnasio-detalle-4.jpg",
    ],
    description:
      "Superficie de alto tránsito para zonas de entrenamiento funcional. Césped de 30mm con base reforzada, drenaje eficiente y una estética moderna que se limpia y mantiene fácil.",
    features: [
      { label: "Alto tránsito", icon: ICONS.dumbbell },
      { label: "Drenaje eficiente", icon: ICONS.drain },
      { label: "Base reforzada", icon: ICONS.shield },
    ],
  },
  {
    id: "jardin",
    n: "03",
    tag: "Decorativo",
    workType: "Césped decorativo para jardín",
    caption: "Naturaleza en tu espacio",
    photos: [
      "/images/productos/cesped-40mm/40-4.jpg",
      "/images/productos/cesped-40mm/40-2.jpg",
      "/images/productos/cesped-40mm/40-6.jpg",
      "/images/productos/cesped-40mm/40-3.jpg",
    ],
    description:
      "Un espacio verde siempre perfecto. Césped sintético de 40mm con aspecto natural, ideal para jardines, terrazas y patios. Sin riego ni corte, apto para mascotas.",
    features: [
      { label: "Apariencia natural", icon: ICONS.leaf },
      { label: "Bajo mantenimiento", icon: ICONS.home },
      { label: "Siempre verde", icon: ICONS.sun },
    ],
  },
];

export default function CaseStudies() {
  const [open, setOpen] = useState<CaseStudy | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="bg-[var(--color-paper)] py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Encabezado */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-grass)]">
              Nuestro trabajo
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-[1.05] tracking-tight text-[var(--color-ink)] sm:text-5xl">
              Proyectos destacados
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              Superficies que inspiran, espacios que mejoran vidas. Conocé algunos
              de nuestros trabajos y cómo el césped sintético transforma espacios
              deportivos, comerciales y residenciales.
            </p>
          </div>
          <div className="lg:col-span-2 lg:border-l lg:border-[var(--color-line)] lg:pl-8">
            <p className="font-display text-4xl font-medium text-[var(--color-lime)]">3</p>
            <p className="mt-1 text-[11px] font-semibold uppercase leading-snug tracking-[0.15em] text-[var(--color-ink-soft)]">
              Tipos de obra
              <br />
              documentados
            </p>
          </div>
        </div>

        {/* Casos */}
        <div className="mt-14 space-y-5">
          {CASES.map((c, i) => (
            <Reveal
              key={c.id}
              delay={i * 80}
              className="overflow-hidden border border-[var(--color-line)] bg-[#0b100e]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Foto */}
                <button
                  type="button"
                  onClick={() => setOpen(c)}
                  aria-label={`Ver galería: ${c.workType}`}
                  className={`group relative block aspect-[16/10] w-full overflow-hidden lg:col-span-6 lg:aspect-auto lg:min-h-[340px] ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={c.photos[0]}
                    alt={c.workType}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-carbon)]/70 via-transparent to-transparent" />
                  <p className="absolute bottom-6 left-6 max-w-[9rem] text-left text-[11px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-white/85">
                    {c.caption}
                  </p>
                  <span className="absolute bottom-6 right-6 flex items-center gap-2 bg-[var(--color-carbon)]/80 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    Ver {c.photos.length} fotos
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
                      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {/* Texto */}
                <div
                  className={`flex flex-col justify-center gap-6 p-7 sm:p-10 lg:col-span-4 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className="font-display text-4xl font-medium text-white/15">{c.n}</span>
                    <span className="h-px w-10 bg-white/15" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--color-grass)]">
                      {c.tag}
                    </p>
                    <h3 className="mt-2.5 font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">
                      {c.workType}
                    </h3>
                    <p className="mt-4 text-[14px] leading-relaxed text-white/60">{c.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setOpen(c)}
                      className="inline-flex items-center justify-center gap-2 bg-[var(--color-grass)] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-forest)]"
                    >
                      Ver proyecto
                      <span aria-hidden>→</span>
                    </button>
                    <a
                      href={whatsapp.quoteProject({ tipoProyecto: c.workType })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-[var(--color-carbon)]"
                    >
                      Solicitar similar
                    </a>
                  </div>
                </div>

                {/* Features */}
                <div
                  className={`flex flex-row flex-wrap gap-6 border-t border-white/10 p-7 sm:p-10 lg:col-span-2 lg:flex-col lg:justify-center lg:border-l lg:border-t-0 ${
                    i % 2 === 1 ? "lg:order-3" : ""
                  }`}
                >
                  {c.features.map((f) => (
                    <div key={f.label} className="flex items-center gap-3">
                      <span className="flex-shrink-0 text-[var(--color-grass)]">{f.icon}</span>
                      <p className="text-[12px] leading-snug text-white/70">{f.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={`fixed inset-0 z-50 overflow-y-auto transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-[var(--color-carbon)]/90 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(null)}
        />

        {open && (
          <div className="relative mx-auto my-10 max-w-3xl bg-[var(--color-paper)] p-6 sm:my-16 sm:p-10">
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Cerrar"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center text-[var(--color-ink)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-grass)]">
              {open.tag} · {open.photos.length} fotos
            </p>
            <h3 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--color-ink)]">
              {open.workType}
            </h3>

            <div className="mt-6">
              <ProductGallery images={open.photos} name={open.workType} />
            </div>

            <div className="mt-8 border-t border-[var(--color-line)] pt-6">
              <p className="text-[15px] leading-relaxed text-[var(--color-ink)]/85">{open.description}</p>
            </div>

            <a
              href={whatsapp.quoteProject({ tipoProyecto: open.workType })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-[var(--color-grass)] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-forest)]"
            >
              Cotizar un proyecto similar
              <span aria-hidden>→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
