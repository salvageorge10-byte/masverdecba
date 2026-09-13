import Image from "next/image";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import { getProductBySlug } from "@/data/products";

export default function FootballShowcase() {
  const product = getProductBySlug("cesped-sintetico-premium-para-futbol");
  if (!product) return null;

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Césped deportivo"
          title="Pensado para el impacto, el rebote y el uso intensivo."
          description="El mismo césped que usamos en canchas techadas y a la intemperie: monofilamento de alta resistencia, doble base con protección UV y una densidad diseñada para el tránsito de un partido, todos los días."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[16/11]">
              <Image
                src={product.images[0]}
                alt="Detalle de línea de cancha en césped sintético deportivo"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-between lg:col-span-5">
            <div className="grid grid-cols-2 gap-px bg-[var(--color-line)]">
              {product.specs.slice(0, 4).map((spec) => (
                <div key={spec.label} className="bg-white p-5">
                  <p className="text-xs uppercase tracking-wide text-[var(--color-ink-soft)]">
                    {spec.label}
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-[var(--color-ink)]">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {product.stat && (
              <div className="mt-6 border-t border-[var(--color-line)] pt-6">
                <p className="font-display text-5xl font-medium text-[var(--color-grass)]">
                  <Counter value={product.stat.value} />
                </p>
                <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{product.stat.label}</p>
              </div>
            )}

            {product.advantages && (
              <ul className="mt-6 space-y-3">
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

            <div className="mt-8">
              <CtaButton href="/cesped-deportivo" variant="outline">
                Ver ficha técnica completa
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
