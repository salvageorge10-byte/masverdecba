import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import { whatsapp } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-[var(--color-carbon)] sm:min-h-screen">
      <Image
        src="/images/hero/cancha-hero.jpg"
        alt="Instalación de césped sintético en cancha de fútbol techada"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/50 to-[var(--color-carbon)]/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-carbon)]/70 via-transparent to-transparent" />

      <div className="relative w-full px-6 pb-16 pt-40 sm:pb-24 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
            Césped sintético deportivo · Instalación de canchas
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[0.98] tracking-tight text-white sm:text-7xl">
            Canchas de nivel profesional, instaladas de punta a punta.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-base">
            Elegimos el césped, preparamos la base e instalamos la cancha. Más de
            una década trabajando con césped sintético deportivo en Córdoba.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CtaButton
              href={whatsapp.quoteProject()}
              external
              variant="solid-light"
            >
              Cotizar mi cancha
            </CtaButton>
            <CtaButton href="/cesped-deportivo" variant="outline-light">
              Ver césped deportivo
            </CtaButton>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-xs uppercase tracking-wide text-white/50">
            <span>50mm de fibra</span>
            <span>Monofilamento de alta resistencia</span>
            <span>Uso deportivo profesional</span>
            <span>5 años de garantía</span>
          </div>
        </div>
      </div>
    </section>
  );
}
