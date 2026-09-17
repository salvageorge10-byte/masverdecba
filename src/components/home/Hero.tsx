"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import { whatsapp } from "@/lib/whatsapp";
import { GOOGLE_RATING } from "@/data/company";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // El video pesa ~4MB: se omite si el visitante pidió ahorro de datos o
    // está en una conexión lenta. En el resto de los casos va también en
    // mobile, con la foto como poster mientras carga.
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    if (connection?.saveData) return;
    if (connection?.effectiveType && /2g/.test(connection.effectiveType)) return;

    setShowVideo(true);
  }, []);

  return (
    <section className="relative flex min-h-[80svh] items-end overflow-hidden bg-[var(--color-carbon)] pt-28 sm:min-h-[max(100svh,600px)] xl:pt-36">
      <Image
        src="/images/hero/cancha-hero.jpg"
        alt="Cancha de fútbol con césped sintético profesional instalado por Más Verde"
        fill
        priority
        className={`object-cover transition-opacity duration-700 ${showVideo ? "opacity-0" : "opacity-100"}`}
        sizes="100vw"
      />
      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster="/images/hero/cancha-hero.jpg"
        >
          <source src="/videos/cesped-futbol.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/45 to-[var(--color-carbon)]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-carbon)]/60 via-transparent to-transparent" />
      {/* Asegura que el logo y el menú se lean sobre la parte clara de la foto */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[var(--color-carbon)]/85 to-transparent" />

      <div className="relative w-full px-6 pb-10 lg:px-10 lg:pb-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
              Especialistas en césped sintético para fútbol
            </p>
            <a
              href={GOOGLE_RATING.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-[var(--color-lime)]">
                <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
              </svg>
              {GOOGLE_RATING.value} en Google
            </a>
          </div>
          <h1 className="mt-5 max-w-2xl font-display text-[13vw] font-medium leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-[6.5rem]">
            Canchas de nivel profesional.
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <CtaButton
              href={whatsapp.quoteProject()}
              external
              variant="solid-light"
            >
              Cotizar mi cancha
            </CtaButton>
            <a
              href="/cesped-deportivo"
              className="group inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white"
            >
              Ver césped deportivo
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1440px] flex-wrap gap-x-8 gap-y-2 border-t border-white/15 pt-5 pr-16 text-[11px] uppercase tracking-wide text-white/45 sm:pr-0">
          <span>Instalación con equipo propio</span>
          <span>50mm de fibra</span>
          <span>5 años de garantía</span>
        </div>
      </div>
    </section>
  );
}
