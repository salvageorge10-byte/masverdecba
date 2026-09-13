"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import { whatsapp } from "@/lib/whatsapp";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || window.innerWidth < 640) return;
    setShowVideo(true);
  }, []);

  return (
    <section className="relative flex min-h-[max(100svh,600px)] items-end overflow-hidden bg-[var(--color-carbon)] pt-28">
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

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-carbon)]/60 via-transparent to-transparent" />

      <div className="relative w-full px-6 pb-10 lg:px-10 lg:pb-14">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
            Especialistas en césped sintético para fútbol
          </p>
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

        <div className="mx-auto mt-10 flex max-w-[1440px] flex-wrap gap-x-8 gap-y-2 border-t border-white/15 pt-5 text-[11px] uppercase tracking-wide text-white/45">
          <span>Instalación con equipo propio</span>
          <span>50mm de fibra</span>
          <span>5 años de garantía</span>
        </div>
      </div>
    </section>
  );
}
