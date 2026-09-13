"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

// Fotos reales: las primeras 4 son de la cuenta pública de Instagram
// @masverde.cba (contenido propio, con su logo), el resto es fotografía de
// producto ya usada en el catálogo. Nada acá es generado ni de stock.
// Ver masverde-audit/google-social-verification-2026-09-13.txt para el
// detalle de la verificación.
const PHOTOS = [
  {
    src: "/images/proyectos/gimnasio-piso-cesped.jpg",
    alt: "Gimnasio con piso de césped sintético instalado",
    caption: "Gimnasio con piso de césped sintético",
  },
  {
    src: "/images/proyectos/jardin-infantes.jpg",
    alt: "Jardín de infantes con césped sintético en el patio de juegos",
    caption: "Jardín de infantes",
  },
  {
    src: "/images/proyectos/patio-transformacion.jpg",
    alt: "Patio residencial transformado con césped sintético",
    caption: "Patio residencial",
  },
  {
    src: "/images/proyectos/deposito-rollos.jpg",
    alt: "Rollos de césped sintético en el depósito de Más Verde",
    caption: "Nuestro depósito",
  },
  {
    src: "/images/productos/cesped-futbol/futbol-1.jpg",
    alt: "Césped sintético deportivo, vista general de cancha",
    caption: "Césped deportivo 50mm",
  },
  {
    src: "/images/productos/cesped-futbol/futbol-2.jpg",
    alt: "Detalle de fibra de césped sintético para fútbol",
    caption: "Detalle de fibra",
  },
  {
    src: "/images/productos/cesped-futbol/futbol-3.jpg",
    alt: "Línea de cancha marcada sobre césped sintético",
    caption: "Línea de cancha",
  },
  {
    src: "/images/productos/cesped-futbol/futbol-4.jpg",
    alt: "Césped sintético deportivo de alta densidad",
    caption: "Alta densidad",
  },
  {
    src: "/images/productos/cesped-futbol/futbol-5.jpg",
    alt: "Textura de césped sintético premium para fútbol",
    caption: "Textura premium",
  },
  {
    src: "/images/productos/cesped-futbol/futbol-6.jpg",
    alt: "Instalación de césped sintético deportivo",
    caption: "Terminación de obra",
  },
];

// Grilla asimétrica: cada foto define su propio tamaño en el mosaico,
// con un patrón propio para mobile (no es el desktop apilado a lo bruto).
const LAYOUT = [
  "col-span-2 sm:col-span-4 sm:row-span-2",
  "col-span-1 sm:col-span-2",
  "col-span-1 sm:col-span-2",
  "col-span-2 sm:col-span-2",
  "col-span-1 sm:col-span-3",
  "col-span-1 sm:col-span-3",
  "col-span-2 sm:col-span-2",
  "col-span-1 sm:col-span-2",
  "col-span-1 sm:col-span-2",
  "col-span-2 sm:col-span-6",
];

export default function WorkGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length)),
    []
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % PHOTOS.length)),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, prev, next]);

  return (
    <section className="bg-[var(--color-paper)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Proyectos y trabajo real"
          title="Así se ve nuestro césped, instalado."
          description="Fotos reales de nuestro trabajo: desde el depósito hasta el espacio terminado — gimnasios, jardines de infantes, patios y canchas. Publicamos casos puntuales con dirección a medida que cada cliente nos autoriza a compartirlos."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-6 sm:gap-3 sm:[grid-auto-rows:220px]">
          {PHOTOS.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={i * 50}
              className={`${LAYOUT[i]} aspect-square ${i === 0 ? "sm:row-span-2" : ""} sm:aspect-auto`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block h-full w-full overflow-hidden"
                aria-label={`Ampliar foto: ${photo.caption}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)]/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="absolute bottom-0 left-0 p-3 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {photo.caption}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
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
              prev();
            }}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white/70 transition-colors hover:text-white sm:left-6"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="relative h-[70vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={PHOTOS[openIndex].src}
              alt={PHOTOS[openIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-carbon)] to-transparent p-4 text-center text-sm text-white/80">
              {PHOTOS[openIndex].caption}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
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
