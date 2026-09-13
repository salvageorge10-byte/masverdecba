import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "Consulta",
    text: "Nos contás qué necesitás: una cancha nueva, una renovación o un espacio decorativo.",
  },
  {
    n: "02",
    title: "Asesoramiento",
    text: "Te recomendamos el césped y la preparación de base según el uso real que le vas a dar.",
  },
  {
    n: "03",
    title: "Presupuesto",
    text: "Cotización a medida en base a superficie, tipo de césped y complejidad de la obra.",
  },
  {
    n: "04",
    title: "Instalación",
    text: "Preparación del terreno e instalación con nuestro propio equipo de trabajo.",
  },
  {
    n: "05",
    title: "Entrega",
    text: "Revisión final de la cancha o el espacio terminado, listo para usarse.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Así solemos encarar cada proyecto."
          description="El proceso puede variar según la escala del trabajo, pero en líneas generales lo llevamos adelante así."
        />

        <div className="mt-16 grid gap-0 border-t border-[var(--color-line)] sm:grid-cols-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <div className="border-b border-[var(--color-line)] py-8 pr-6 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <p className="font-display text-sm text-[var(--color-grass)]">{step.n}</p>
                <p className="mt-4 text-lg font-medium text-[var(--color-ink)]">{step.title}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
