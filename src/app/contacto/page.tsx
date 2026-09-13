import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import ContactForm from "@/components/ContactForm";
import { COMPANY, LOCATIONS } from "@/data/company";

export const metadata = {
  title: "Contacto",
  description: "Solicitá una cotización para tu cancha o hacé una consulta general a Más Verde.",
};

export default function ContactoPage() {
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-grass)]">
          Contacto
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-5xl font-medium tracking-tight text-[var(--color-ink)]">
          Tu consulta nos importa.
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
          Elegí la opción que mejor describa lo que necesitás. Te respondemos a
          la brevedad.
        </p>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="border-y border-[var(--color-line)] bg-[var(--color-paper)] p-8 sm:p-14 lg:border-r lg:border-y-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-grass)]">
            Opción A
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-[var(--color-ink)]">
            Cotización de cancha o proyecto
          </h2>
          <p className="mt-3 text-sm text-[var(--color-ink-soft)]">
            Para canchas nuevas, renovaciones u otros proyectos deportivos.
          </p>
          <div className="mt-8">
            <QuoteForm />
          </div>
        </div>

        <div className="border-b border-[var(--color-line)] p-8 sm:p-14 lg:border-b-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-grass)]">
            Opción B
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-[var(--color-ink)]">
            Consulta general
          </h2>
          <p className="mt-3 text-sm text-[var(--color-ink-soft)]">
            Productos, envíos, formas de pago o cualquier otra duda.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
              Teléfono
            </p>
            <a href={`https://wa.me/${COMPANY.phoneWhatsapp}`} className="mt-2 block text-lg text-[var(--color-ink)] hover:text-[var(--color-grass)]">
              {COMPANY.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
              Email
            </p>
            <a href={`mailto:${COMPANY.email}`} className="mt-2 block text-lg text-[var(--color-ink)] hover:text-[var(--color-grass)]">
              {COMPANY.email}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
              Depósitos
            </p>
            {LOCATIONS.map((loc) => (
              <p key={loc.id} className="mt-2 text-lg text-[var(--color-ink)]">
                {loc.city}, {loc.province}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-64 sm:h-80">
        <Image src="/images/contacto/contact.jpg" alt="Más Verde" fill className="object-cover" sizes="100vw" />
      </section>
    </main>
  );
}
