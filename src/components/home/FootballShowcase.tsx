import Image from "next/image";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import { getProductBySlug } from "@/data/products";

export default function FootballShowcase() {
  const product = getProductBySlug("cesped-sintetico-premium-para-futbol");
  if (!product) return null;

  return (
    <section className="bg-[var(--color-paper)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Nuestro producto deportivo"
          title="Pensado para el impacto, el rebote y el uso intensivo."
          description="El mismo césped que usamos en canchas techadas y a la intemperie: monofilamento de alta resistencia, doble base con protección UV y una densidad diseñada para el tránsito de un partido, todos los días."
        />
      </div>

      <Reveal className="relative mt-14 aspect-[16/7] w-full overflow-hidden sm:aspect-[16/6]">
        <Image
          src={product.images[0]}
          alt="Detalle de línea de cancha en césped sintético deportivo"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </Reveal>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-10 border-t border-[var(--color-line)] pt-10 sm:grid-cols-3 sm:gap-6">
          <Reveal className="grid grid-cols-2 gap-px bg-[var(--color-line)] sm:grid-cols-1">
            {product.specs.slice(0, 4).map((spec) => (
              <div key={spec.label} className="bg-white/5 p-5 pl-0 sm:pl-5">
                <p className="text-xs uppercase tracking-wide text-[var(--color-ink-soft)]">
                  {spec.label}
                </p>
                <p className="mt-1.5 text-sm font-medium text-[var(--color-ink)]">{spec.value}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={100}>
            {product.advantages && (
              <ul className="space-y-3">
                {product.advantages.map((adv) => (
                  <li key={adv} className="flex items-start gap-3 text-sm text-[var(--color-ink)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-grass)"
                      strokeWidth="2.5"
                      className="mt-0.5 h-4 w-4 flex-shrink-0"
                    >
                      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {adv}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>

          <Reveal delay={200} className="flex flex-col items-start gap-6 sm:items-end sm:text-right">
            {product.stat && (
              <div>
                <p className="font-display text-5xl font-medium text-[var(--color-grass)]">
                  {product.stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{product.stat.label}</p>
              </div>
            )}
            <CtaButton href="/cesped-deportivo" variant="outline">
              Ver ficha técnica completa
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
