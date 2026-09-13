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
    setShowVideo(true);
  }, []);

  return (
    <section className="relative grid overflow-hidden bg-[var(--color-carbon)] lg:grid-cols-[minmax(0,44%)_1fr]">
      {/* Panel de texto */}
      <div className="relative z-10 order-2 flex flex-col justify-center px-6 pb-14 pt-12 lg:order-1 lg:px-12 lg:pb-0 lg:pt-28">
        <div className="mx-auto w-full max-w-md lg:mx-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
              Especialistas en fútbol
            </p>
            <a
              href={GOOGLE_RATING.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-[var(--color-lime)]">
                <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
              </svg>
              {GOOGLE_RATING.value} en Google
            </a>
          </div>

          <h1 className="mt-6 font-display text-[15vw] font-medium leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]">
            Instalamos tu cancha.
          </h1>

          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
            Césped sintético deportivo, preparación de base e instalación con
            equipo propio. De punta a punta, en Córdoba.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaButton href={whatsapp.quoteProject()} external variant="solid-light">
              Cotizar mi cancha
            </CtaButton>
            <a
              href="/cesped-deportivo"
              className="group inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.08em] text-white/70 transition-colors hover:text-white"
            >
              Ver césped deportivo
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-white/50">
            <div>
              <p className="font-display text-lg font-medium text-white">50mm</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wide">Fibra</p>
            </div>
            <div>
              <p className="font-display text-lg font-medium text-white">5 años</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wide">Garantía</p>
            </div>
            <div>
              <p className="font-display text-lg font-medium text-white">Propio</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wide">Equipo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Panel visual */}
      <div className="relative order-1 h-[48vh] min-h-[320px] lg:order-2 lg:h-auto lg:min-h-[92vh]">
        <Image
          src="/images/hero/cancha-hero.jpg"
          alt="Cancha de fútbol con césped sintético profesional instalado por Más Verde"
          fill
          priority
          className={`object-cover transition-opacity duration-700 ${showVideo ? "opacity-0" : "opacity-100"}`}
          sizes="(min-width: 1024px) 56vw, 100vw"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)]/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[var(--color-carbon)]/10" />
        <div className="absolute inset-y-0 left-0 hidden w-px bg-[var(--color-lime)]/40 lg:block" />
      </div>
    </section>
  );
}
