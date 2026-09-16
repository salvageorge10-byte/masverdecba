"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ProductGallery from "@/components/ProductGallery";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { whatsapp } from "@/lib/whatsapp";

// Casos reales armados solo con fotos verificadas (sin texto/logo de redes,
// sin personas identificables) y con la descripción del producto que mejor
// corresponde a ese tipo de trabajo, tomada tal cual de src/data/products.ts.
// No incluyen localidad, cliente, m² ni producto específico porque no están
// confirmados para cada obra puntual: mostrar esos campos sería inventar dato.
interface RealCase {
  id: string;
  workType: string;
  photos: string[];
  description: string;
}

const CASES: RealCase[] = [
  {
    id: "gimnasio",
    workType: "Piso de gimnasio",
    photos: [
      "/images/proyectos/gimnasio-detalle.jpg",
      "/images/proyectos/gimnasio-detalle-2.jpg",
      "/images/proyectos/gimnasio-detalle-3.jpg",
      "/images/proyectos/gimnasio-detalle-4.jpg",
    ],
    description:
      "Dale a tu gimnasio un toque natural sin complicaciones. Con nuestro césped sintético de 30mm, conseguís la apariencia y suavidad del césped real, pero sin el mantenimiento. Ideal para zonas de aparatos y áreas de entrenamiento funcional, es resistente, estético y siempre verde.",
  },
  {
    id: "cancha-futbol",
    workType: "Cancha de fútbol",
    photos: [
      "/images/productos/cesped-futbol/futbol-4.jpg",
      "/images/productos/cesped-futbol/futbol-5.jpg",
      "/images/productos/cesped-futbol/futbol-6.jpg",
    ],
    description:
      "Transforma tu cancha en un campo de juego profesional. Con nuestro césped sintético de 50mm, logramos la combinación perfecta entre resistencia y rendimiento deportivo. Diseñado para brindar tracción óptima y amortiguación, este césped reduce el impacto y mejora la experiencia de juego.",
  },
];

export default function RealProjectsGrid() {
  const [openCase, setOpenCase] = useState<RealCase | null>(null);

  useEffect(() => {
    document.body.style.overflow = openCase ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openCase]);

  return (
    <section className="bg-[var(--color-paper)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Proyectos reales"
          title="Obras que ya entregamos."
          description="Fotos reales de instalaciones terminadas. Todavía no publicamos localidad, cliente ni m² exactos de cada obra puntual: los compartimos a pedido."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal key={c.id} delay={i * 100}>
              <button
                type="button"
                onClick={() => setOpenCase(c)}
                className="group relative block aspect-[4/3] w-full overflow-hidden text-left"
              >
                <Image
                  src={c.photos[0]}
                  alt={c.workType}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)]/85 via-[var(--color-carbon)]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-lime)]">
                      {c.photos.length} fotos reales
                    </p>
                    <h3 className="mt-1.5 text-xl font-medium text-white">{c.workType}</h3>
                  </div>
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-white/25 text-white transition-colors group-hover:border-white group-hover:bg-white group-hover:text-[var(--color-carbon)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Vista de caso: overlay simple con fotos + qué se hizo */}
      <div
        className={`fixed inset-0 z-50 overflow-y-auto transition-opacity duration-300 ${
          openCase ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!openCase}
      >
        <div
          className={`absolute inset-0 bg-[var(--color-carbon)]/90 transition-opacity duration-300 ${
            openCase ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpenCase(null)}
        />

        {openCase && (
          <div className="relative mx-auto my-10 max-w-3xl bg-[var(--color-paper)] p-6 sm:my-16 sm:p-10">
            <button
              type="button"
              onClick={() => setOpenCase(null)}
              aria-label="Cerrar"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center text-[var(--color-ink)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-grass)]">
              Caso real · {openCase.photos.length} fotos
            </p>
            <h3 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--color-ink)]">
              {openCase.workType}
            </h3>

            <div className="mt-6">
              <ProductGallery images={openCase.photos} name={openCase.workType} />
            </div>

            <div className="mt-8 border-t border-[var(--color-line)] pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-ink-soft)]">
                Qué se hizo
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]/85">
                {openCase.description}
              </p>
            </div>

            <div className="mt-8">
              <CtaButton href={whatsapp.product(openCase.workType)} external variant="solid">
                Consultar por un proyecto similar
              </CtaButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
