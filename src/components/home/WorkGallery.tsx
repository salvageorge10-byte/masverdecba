"use client";

import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { GOOGLE_RATING } from "@/data/company";

// Fotos reales: las de /images/proyectos son de la cuenta pública de
// Instagram @masverde.cba (contenido propio, con su logo). La de fútbol es
// la misma foto real usada en el hero. Nada acá es generado ni de stock.
// No se inventan ubicaciones (ciudad/barrio) porque no hay dirección
// verificada por foto — ver masverde-audit/google-social-verification-2026-09-13.txt.
type CategoryId = "futbol" | "gimnasios" | "jardines" | "patios" | "deposito";

const CATEGORIES: { id: CategoryId; label: string; icon: ReactNode }[] = [
  {
    id: "futbol",
    label: "Fútbol",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8l3 2.2-1.1 3.6H10.1L9 10.2 12 8z" />
      </svg>
    ),
  },
  {
    id: "gimnasios",
    label: "Gimnasios",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
        <path d="M4 12h2M18 12h2M6 8v8M18 8v8M8 12h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "jardines",
    label: "Jardines",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
        <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "patios",
    label: "Patios",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
        <path d="M3 11l9-7 9 7M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "deposito",
    label: "Depósito",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
        <path d="M3 7l9-4 9 4v10l-9 4-9-4V7Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

interface Photo {
  id: string;
  category: CategoryId;
  src: string;
  alt: string;
  title: string;
  detail: string;
  big?: boolean;
}

const PHOTOS: Photo[] = [
  {
    id: "futbol",
    category: "futbol",
    src: "/images/hero/cancha-hero.jpg",
    alt: "Cancha de fútbol con césped sintético instalado por Más Verde",
    title: "Césped deportivo",
    detail: "Fibra de 50mm",
    big: true,
  },
  {
    id: "gimnasio",
    category: "gimnasios",
    src: "/images/proyectos/gimnasio-piso-cesped.jpg",
    alt: "Gimnasio con piso de césped sintético instalado",
    title: "Gimnasio funcional",
    detail: "Piso de gimnasio",
  },
  {
    id: "patio",
    category: "patios",
    src: "/images/proyectos/patio-transformacion.jpg",
    alt: "Patio residencial transformado con césped sintético",
    title: "Patio residencial",
    detail: "Transformación de patio",
  },
  {
    id: "jardin-infantes",
    category: "jardines",
    src: "/images/proyectos/jardin-infantes.jpg",
    alt: "Jardín de infantes con césped sintético en el patio de juegos",
    title: "Jardín de infantes",
    detail: "Espacio de juegos",
  },
  {
    id: "deposito",
    category: "deposito",
    src: "/images/proyectos/deposito-rollos.jpg",
    alt: "Rollos de césped sintético en el depósito de Más Verde",
    title: "Nuestro depósito",
    detail: "Córdoba",
  },
];

function CategoryTag({ category }: { category: CategoryId }) {
  const cat = CATEGORIES.find((c) => c.id === category)!;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--color-ink)] shadow-sm">
      <span className="text-[var(--color-grass)]">{cat.icon}</span>
      {cat.label}
    </span>
  );
}

export default function WorkGallery() {
  const [filter, setFilter] = useState<CategoryId | "todos">("todos");
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = useMemo(
    () => (filter === "todos" ? PHOTOS : PHOTOS.filter((p) => p.category === filter)),
    [filter]
  );

  const openPhoto = useMemo(() => PHOTOS.find((p) => p.id === openId) ?? null, [openId]);

  const close = useCallback(() => setOpenId(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setOpenId((current) => {
        const list = visible.length ? visible : PHOTOS;
        const idx = list.findIndex((p) => p.id === current);
        if (idx === -1) return list[0]?.id ?? null;
        return list[(idx + dir + list.length) % list.length].id;
      });
    },
    [visible]
  );

  useEffect(() => {
    if (!openId) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId, close, step]);

  return (
    <section className="bg-[var(--color-paper)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-grass)]">
              <span className="h-px w-6 bg-[var(--color-grass)]" />
              Nuestros proyectos
            </p>
            <h2 className="mt-3 text-4xl font-medium leading-[1.05] tracking-tight text-[var(--color-ink)] sm:text-5xl">
              Trabajos <span className="text-[var(--color-grass)]">instalados</span>.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              Fotos reales de nuestro trabajo: desde el depósito hasta el espacio
              terminado. Publicamos casos puntuales con dirección a medida que
              cada cliente nos autoriza a compartirlos — nada de esto es
              generado ni de stock.
            </p>
          </div>

          <Link
            href="/proyectos"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-forest)] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[var(--color-carbon)]"
          >
            Ver todos los trabajos
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Filtros */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => setFilter("todos")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === "todos"
                ? "bg-[var(--color-forest)] text-white"
                : "border border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:border-[var(--color-grass)]"
            }`}
          >
            Todos
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === cat.id
                  ? "bg-[var(--color-forest)] text-white"
                  : "border border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:border-[var(--color-grass)]"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:[grid-auto-rows:260px]">
          {visible.map((photo, i) => (
            <Reveal
              key={photo.id}
              delay={i * 60}
              className={`col-span-2 aspect-square sm:aspect-auto ${
                photo.big ? "sm:col-span-2 sm:row-span-2" : "sm:col-span-1"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenId(photo.id)}
                className="group relative block h-full w-full overflow-hidden rounded-2xl"
                aria-label={`Ver ${photo.title}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 640px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)]/85 via-[var(--color-carbon)]/10 to-transparent" />

                <div className="absolute left-3 top-3">
                  <CategoryTag category={photo.category} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4">
                  <div>
                    <p className="text-base font-semibold text-white">{photo.title}</p>
                    <p className="mt-0.5 text-xs text-white/70">{photo.detail}</p>
                  </div>
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-[var(--color-carbon)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Dato real, no inventado */}
        <div className="mt-10 flex items-center gap-4 border-t border-[var(--color-line)] pt-8">
          <span className="h-8 w-1 flex-shrink-0 rounded-full bg-[var(--color-grass)]" />
          <a
            href={GOOGLE_RATING.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80"
          >
            <span className="font-display text-3xl font-medium text-[var(--color-ink)]">
              {GOOGLE_RATING.value}★
            </span>
            <span className="text-sm leading-snug text-[var(--color-ink-soft)]">
              Calificación real
              <br />
              en Google
            </span>
          </a>
        </div>
      </div>

      {openPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-carbon)]/95 p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center text-white/70 transition-colors hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white/70 transition-colors hover:text-white sm:left-6"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="relative h-[70vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image src={openPhoto.src} alt={openPhoto.alt} fill className="object-contain" sizes="100vw" />
            <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-carbon)] to-transparent p-4 text-center text-sm text-white/80">
              {openPhoto.title} · {openPhoto.detail}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Foto siguiente"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white/70 transition-colors hover:text-white sm:right-6"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
