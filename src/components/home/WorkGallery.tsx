import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { whatsapp } from "@/lib/whatsapp";

// Fotos reales, ya verificadas y usadas en el resto del sitio (hero y
// portfolio de proyectos). Nada generado ni de stock.
const SPACES = [
  {
    id: "deporte",
    title: "Canchas y deporte",
    description: "Clubes, fútbol 5 y espacios de entrenamiento.",
    cta: "Ver soluciones deportivas",
    href: "/cesped-deportivo",
    external: false,
    image: "/images/hero/cancha-hero.jpg",
    alt: "Cancha de fútbol con césped sintético instalado por Más Verde",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8l3 2.2-1.1 3.6H10.1L9 10.2 12 8z" />
      </svg>
    ),
  },
  {
    id: "hogar",
    title: "Hogar y exteriores",
    description: "Patios, jardines y terrazas.",
    cta: "Ver césped decorativo",
    href: "/cesped-decorativo",
    external: false,
    image: "/images/proyectos/patio-transformacion.jpg",
    alt: "Patio residencial transformado con césped sintético",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M3 11l9-7 9 7M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "comercial",
    title: "Gimnasios y proyectos comerciales",
    description: "Alto tránsito, empresas e instituciones.",
    cta: "Consultar proyecto",
    href: whatsapp.quoteProject({ tipoProyecto: "Gimnasio o proyecto comercial" }),
    external: true,
    image: "/images/proyectos/gimnasio-piso-cesped.jpg",
    alt: "Gimnasio con piso de césped sintético instalado",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M4 12h2M18 12h2M6 8v8M18 8v8M8 12h8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const HIGHLIGHTS = [
  {
    label: "5 años de garantía",
    detail: "Calidad y respaldo en cada proyecto.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Instalación con equipo propio",
    detail: "Sin subcontratar, mayor control.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <circle cx="12" cy="7" r="3" />
        <path d="M5 21c0-4 3-6 7-6s7 2 7 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Envíos a todo el país",
    detail: "Llegamos donde nos necesites.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17" cy="18" r="1.6" />
      </svg>
    ),
  },
  {
    label: "Asesoramiento personalizado",
    detail: "Te ayudamos a elegir la mejor opción.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M4 5h16v11H8l-4 4V5Z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WorkGallery() {
  return (
    <section className="bg-[var(--color-paper)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-grass)]">
              <span className="h-px w-6 bg-[var(--color-grass)]" />
              Soluciones para cada espacio
            </p>
            <h2 className="mt-3 text-4xl font-medium leading-[1.05] tracking-tight text-[var(--color-ink)] sm:text-5xl">
              ¿Qué espacio querés <span className="text-[var(--color-grass)]">transformar</span>?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              Césped sintético de alto rendimiento para proyectos deportivos,
              hogares, gimnasios y espacios comerciales. Te acompañamos desde
              la elección del producto hasta la instalación.
            </p>
          </div>

          <Link
            href="/productos"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-forest)] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[var(--color-carbon)]"
          >
            Ver todas las soluciones
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {SPACES.map((space, i) => (
            <Reveal key={space.id} delay={i * 80}>
              {space.external ? (
                <a
                  href={space.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-[420px] w-full overflow-hidden rounded-2xl sm:h-[480px]"
                >
                  <Image
                    src={space.image}
                    alt={space.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)]/90 via-[var(--color-carbon)]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="inline-flex items-center gap-2 text-[var(--color-grass)]">
                      {space.icon}
                      <span className="h-px w-6 bg-[var(--color-grass)]" />
                    </span>
                    <h3 className="mt-4 text-2xl font-medium leading-tight text-white">{space.title}</h3>
                    <p className="mt-1.5 text-sm text-white/70">{space.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-white transition-colors group-hover:text-[var(--color-grass)]">
                      {space.cta}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
                        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </a>
              ) : (
                <Link
                  href={space.href}
                  className="group relative block h-[420px] w-full overflow-hidden rounded-2xl sm:h-[480px]"
                >
                  <Image
                    src={space.image}
                    alt={space.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)]/90 via-[var(--color-carbon)]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="inline-flex items-center gap-2 text-[var(--color-grass)]">
                      {space.icon}
                      <span className="h-px w-6 bg-[var(--color-grass)]" />
                    </span>
                    <h3 className="mt-4 text-2xl font-medium leading-tight text-white">{space.title}</h3>
                    <p className="mt-1.5 text-sm text-white/70">{space.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-white transition-colors group-hover:text-[var(--color-grass)]">
                      {space.cta}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
                        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-[var(--color-line)] pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 text-[var(--color-grass)]">{h.icon}</span>
              <div>
                <p className="text-sm font-medium text-[var(--color-ink)]">{h.label}</p>
                <p className="mt-0.5 text-[13px] leading-snug text-[var(--color-ink-soft)]">{h.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
