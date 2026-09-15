import Link from "next/link";
import { COMPANY, LOCATIONS } from "@/data/company";
import { whatsapp } from "@/lib/whatsapp";

const CATALOG_LINKS = [
  { label: "Césped deportivo", href: "/cesped-deportivo" },
  { label: "Césped decorativo", href: "/cesped-decorativo" },
  { label: "Jardines verticales", href: "/productos?categoria=jardin-vertical" },
];

const COMPANY_LINKS = [
  { label: "Proyectos", href: "/proyectos" },
  { label: "Empresa", href: "/empresa" },
  { label: "Productos", href: "/productos" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-carbon)] text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">Más Verde</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Césped sintético deportivo, instalación de canchas y soluciones de
              paisajismo sintético en Córdoba.
            </p>
            <a
              href={whatsapp.general()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-white/25 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition-colors hover:bg-white hover:text-[var(--color-carbon)]"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Catálogo</p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {CATALOG_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Empresa</p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Contacto</p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <a href={`https://wa.me/${COMPANY.phoneWhatsapp}`} className="hover:text-white">
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
              {LOCATIONS.map((loc) => (
                <li key={loc.id} className="text-white/50">
                  {loc.city}, {loc.province}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-4">
              <a
                href={COMPANY.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center border border-white/20 hover:border-white/50"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2C16.5 3.1 15.4 3 14.2 3c-2.5 0-4.3 1.6-4.3 4.4v2.3H7.2v3.2h2.7V21h3.6z" />
                </svg>
              </a>
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center border border-white/20 hover:border-white/50"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Más Verde. Todos los derechos reservados.</p>
          <p>Hecho en Córdoba, Argentina.</p>
        </div>
      </div>
    </footer>
  );
}
