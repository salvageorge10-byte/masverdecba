import SectionHeading from "@/components/SectionHeading";

const FAQS = [
  {
    q: "¿Cómo se calcula el presupuesto de una cancha o proyecto?",
    a: "Depende de la superficie a cubrir, el tipo de césped elegido y la preparación de base que requiera el terreno. Te lo cotizamos sin cargo después de una consulta inicial.",
  },
  {
    q: "¿Qué garantía tiene el césped sintético?",
    a: "5 años de garantía en toda nuestra variedad de césped.",
  },
  {
    q: "¿Hacen envíos a todo el país?",
    a: "Sí, coordinados por Andreani.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Hasta 3 cuotas sin interés con tarjetas bancarizadas (Visa, Mastercard), además de débito, efectivo y transferencia.",
  },
  {
    q: "¿Cuál es la diferencia entre el césped deportivo y el decorativo?",
    a: "El césped deportivo (20mm a 50mm de fibra, alta densidad) está pensado para tránsito intenso, entrenamiento y canchas. El decorativo (40mm) está orientado a jardines, terrazas y espacios recreativos.",
  },
  {
    q: "¿El césped sintético necesita mantenimiento?",
    a: "No requiere riego ni corte. El mantenimiento se limita a limpieza básica según el uso y la exposición del espacio.",
  },
  {
    q: "¿Cómo funciona el drenaje?",
    a: "Nuestros céspedes cuentan con sistema de drenaje eficiente para evitar la acumulación de agua sobre la superficie.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[var(--color-paper)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Preguntas frecuentes" title="Lo que más nos preguntan." />
          </div>

          <div className="divide-y divide-[var(--color-line)] border-t border-[var(--color-line)] lg:col-span-8">
            {FAQS.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[15px] font-medium text-[var(--color-ink)]">
                  {item.q}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-open:rotate-45"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
