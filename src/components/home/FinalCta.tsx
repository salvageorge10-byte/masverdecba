import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import { whatsapp } from "@/lib/whatsapp";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-carbon)] py-28 sm:py-36">
      <Image
        src="/images/productos/cesped-futbol/futbol-1.jpg"
        alt="Césped sintético deportivo, detalle de línea de cancha"
        fill
        className="object-cover opacity-25"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/80 to-[var(--color-carbon)]/40" />

      <div className="relative mx-auto max-w-[1440px] px-6 text-center lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
          Empecemos tu proyecto
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-white sm:text-6xl">
          ¿Tenés una cancha o un espacio para transformar?
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-white/70">
          Contanos tu proyecto y te enviamos una cotización a medida, sin
          compromiso.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaButton href={whatsapp.quoteProject()} external variant="solid-light">
            Solicitar presupuesto
          </CtaButton>
          <CtaButton href="/contacto" variant="outline-light">
            Hablar con un asesor
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
