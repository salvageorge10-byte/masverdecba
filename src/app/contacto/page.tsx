import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { COMPANY, LOCATIONS } from "@/data/company";
import { whatsapp } from "@/lib/whatsapp";

export const metadata = {
  title: "Contacto",
  description: "Solicitá una cotización para tu cancha o hacé una consulta general a Más Verde.",
};

const DIFFERENTIALS = [
  {
    label: "Equipo propio",
    detail: "Asesoramiento experto y cercano.",
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
    label: "Hasta 3 cuotas sin interés",
    detail: "Más fácil, más verde.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 3v3M16 3v3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "5 años de garantía",
    detail: "Calidad que te acompaña.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const CONTACT_CHANNELS = [
  {
    label: "Teléfono",
    value: COMPANY.phoneDisplay,
    href: `https://wa.me/${COMPANY.phoneWhatsapp}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M4 5h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 14l5 2v4a2 2 0 0 1-2 2C10 22 2 14 2 7a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Cobertura",
    value: LOCATIONS.map((loc) => loc.city).join(" · "),
    href: "/empresa",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.3" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: COMPANY.instagramHandle,
    href: COMPANY.instagramUrl,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function ContactoPage() {
  return (
    <main className="bg-[var(--color-carbon)] pb-24 pt-32 sm:pb-32 xl:pt-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* Columna izquierda: título + diferenciales + foto */}
          <Reveal className="lg:col-span-5">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
              <span className="h-px w-6 bg-[var(--color-lime)]" />
              Contacto
            </p>
            <h1 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl">
              Hablemos de tu próximo <span className="text-[var(--color-lime)]">proyecto</span>.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
              Contanos qué necesitás. Te asesoramos para encontrar la mejor
              solución en césped sintético, ya sea para tu hogar, club o
              proyecto comercial.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7">
              {DIFFERENTIALS.map((d) => (
                <div key={d.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 text-[var(--color-lime)]">{d.icon}</span>
                  <div>
                    <p className="text-sm font-medium leading-snug text-white">{d.label}</p>
                    <p className="mt-0.5 text-[13px] leading-snug text-white/45">{d.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-10 hidden aspect-[4/3] w-full overflow-hidden rounded-2xl lg:block">
              <Image
                src="/images/contacto/contact.jpg"
                alt="Espacio exterior transformado con césped sintético Más Verde"
                fill
                className="object-cover"
                sizes="35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/10 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-display text-xl italic leading-snug text-white/90">
                Más espacios para lo que importa.
              </p>
              <p className="absolute left-6 top-6 text-[11px] uppercase tracking-[0.15em] text-white/60">
                Superficies que transforman
              </p>
            </div>
          </Reveal>

          {/* Formulario principal */}
          <Reveal delay={80} className="lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lime)]">
                Solicitá tu presupuesto
              </p>
              <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-white">
                Completá tus datos.
              </h2>
              <p className="mt-2 text-sm text-white/55">
                Te respondemos a la brevedad con una propuesta personalizada.
              </p>
              <div className="mt-8">
                <QuoteForm />
              </div>
            </div>
          </Reveal>

          {/* Sidebar: otras formas de contacto */}
          <Reveal delay={140} className="lg:col-span-3">
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lime)]">
                Otras formas de contacto
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                ¿Preferís hablar directamente? También podés contactarnos por
                estos medios.
              </p>

              <a
                href={whatsapp.general()}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex items-center gap-3 rounded-xl bg-[var(--color-grass)] p-4 transition-colors hover:bg-[var(--color-forest)]"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.6.1-.7.8-.9 1-.3.2-.6.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5s.3-.3.4-.5a2 2 0 0 0 .3-.5.6.6 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2c0 1.3.9 2.5 1 2.7s1.8 2.7 4.3 3.8a14 14 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.1 2.1 0 0 0 .1-1.2c-.1-.1-.2-.2-.4-.3Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">WhatsApp</span>
                  <span className="block text-[13px] text-white/80">La forma más rápida</span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="ml-auto h-4 w-4 flex-shrink-0 text-white/80 transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <ul className="mt-2 divide-y divide-white/10">
                {CONTACT_CHANNELS.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 py-4 transition-colors"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors group-hover:border-[var(--color-lime)] group-hover:text-[var(--color-lime)]">
                        {c.icon}
                      </span>
                      <span>
                        <span className="block text-[13px] font-medium uppercase tracking-[0.08em] text-white/45">
                          {c.label}
                        </span>
                        <span className="block text-sm text-white transition-colors group-hover:text-[var(--color-lime)]">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center gap-2 border-t border-white/10 pt-6">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[var(--color-lime)]">
                  <path d="M4 21c4-10 9-13 16-15-1 8-6 13-16 15Z" />
                </svg>
                <p className="text-[11px] uppercase leading-tight tracking-[0.12em] text-white/45">
                  Superficies que
                  <br />
                  transforman
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
