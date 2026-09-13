import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import MetricsStrip from "@/components/home/MetricsStrip";

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
    <section className="bg-[var(--color-carbon)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionHeading
          eyebrow="Nuestra experiencia"
          title="Así encaramos cada proyecto."
          light
          description="El proceso puede variar según la escala del trabajo, pero en líneas generales lo llevamos adelante así, con equipo propio de principio a fin."
        />

        <div className="mt-16 divide-y divide-white/10 border-t border-white/10">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 70}>
              <div className="grid items-baseline gap-2 py-7 sm:grid-cols-[100px_200px_1fr] sm:gap-8 sm:py-8">
                <p className="font-display text-3xl font-medium text-white/25 sm:text-4xl">{step.n}</p>
                <p className="text-lg font-medium text-white sm:text-xl">{step.title}</p>
                <p className="max-w-xl text-[14px] leading-relaxed text-white/60">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <MetricsStrip />
        </div>
      </div>
    </section>
  );
}
