import Image from "next/image";
import Reveal from "@/components/Reveal";
import MetricsStrip from "@/components/home/MetricsStrip";

const STEPS = [
  {
    n: "01",
    title: "Consulta",
    text: "Nos contás qué espacio querés transformar: una cancha nueva, una renovación o un proyecto decorativo.",
    tag: "Escuchamos tu idea",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4.5 5a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Relevamiento",
    text: "Analizamos el uso que le vas a dar, la superficie y las condiciones del terreno.",
    tag: "Evaluamos el potencial",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Propuesta",
    text: "Definimos el material, la solución técnica y el presupuesto a medida.",
    tag: "Una solución a tu medida",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" strokeLinejoin="round" />
        <path d="M9 12h6M9 16h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Instalación",
    text: "Nuestro equipo propio ejecuta la obra de principio a fin, sin subcontratar.",
    tag: "Manos en la obra",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <rect x="3" y="14" width="18" height="4" rx="1" />
        <path d="M6 14V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6M8 18v2M16 18v2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Entrega",
    text: "Revisión final del espacio terminado, listo para disfrutar.",
    tag: "Disfrutá el resultado",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M5 21V4" strokeLinecap="round" />
        <path d="M5 5h13l-2.5 3.5L18 12H5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[var(--color-carbon)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative flex min-h-[480px] flex-col justify-between overflow-hidden lg:min-h-[760px]">
            <Image
              src="/images/hero/cancha-hero.jpg"
              alt="Instalación de césped sintético en una cancha de fútbol"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/25 to-[var(--color-carbon)]/70" />

            <div className="relative z-10 p-8 lg:p-10">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lime)]">
                <span className="h-px w-6 bg-[var(--color-lime)]" />
                Nuestro proceso
              </p>
              <h2 className="mt-4 max-w-md font-display text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl">
                Así encaramos <span className="text-[var(--color-grass)]">cada proyecto.</span>
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/70">
                Un proceso claro, eficiente y acompañado en todo momento. Nos
                encargamos de cada detalle para que vos solo te ocupes de
                disfrutar el resultado.
              </p>
            </div>

            <div className="relative z-10 flex items-end justify-between p-8 lg:p-10">
              <p className="text-[11px] uppercase leading-relaxed tracking-[0.2em] text-white/45">
                Proyectos
                <br />
                que suman valor
              </p>
              <p className="text-right text-[11px] uppercase leading-relaxed tracking-[0.25em] text-white/55">
                De la idea
                <br />
                al juego real
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 70}>
                <div className="flex gap-5 sm:gap-6">
                  <div className="flex flex-col items-center">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-white/15 bg-white/5 text-[var(--color-grass)]">
                      {step.icon}
                    </span>
                    {i < STEPS.length - 1 && <span className="mt-2 w-px flex-1 bg-white/10" />}
                  </div>

                  <div className="flex flex-1 flex-wrap items-start justify-between gap-x-6 gap-y-1 pb-9">
                    <div className="max-w-md">
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-2xl font-medium text-white/25">{step.n}</span>
                        <h3 className="text-lg font-medium text-white">{step.title}</h3>
                      </div>
                      <p className="mt-2 text-[14px] leading-relaxed text-white/60">{step.text}</p>
                    </div>
                    <p className="hidden shrink-0 pt-1.5 text-right text-[10px] uppercase leading-relaxed tracking-[0.15em] text-white/35 lg:block">
                      {step.tag}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <MetricsStrip />
        </div>
      </div>
    </section>
  );
}
