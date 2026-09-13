import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import MapLoader from "@/components/home/MapLoader";
import LocationCards from "@/components/home/LocationCards";
import { PROJECTS } from "@/data/projects";
import { whatsapp } from "@/lib/whatsapp";

export const metadata = {
  title: "Proyectos",
  description: "Canchas e instalaciones de césped sintético realizadas por Más Verde en Córdoba.",
};

export default function ProyectosPage() {
  return (
    <main>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-[var(--color-carbon)]">
        <Image
          src="/images/productos/cesped-futbol/futbol-1.jpg"
          alt="Instalación de césped sintético deportivo"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/60 to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-32 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
            Proyectos
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Canchas y espacios instalados por Más Verde.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        {PROJECTS.length === 0 ? (
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="En construcción"
              title="Estamos documentando cada obra realizada."
              description="Todavía no publicamos el registro fotográfico de canchas y proyectos puntuales, para no mostrar información sin verificar. En cuanto tengamos ese material lo vas a poder ver acá, con ubicación y detalle de cada instalación. Mientras tanto, contactanos directamente y te mostramos referencias de trabajos realizados."
            />
            <div className="mt-8">
              <CtaButton href={whatsapp.quoteProject()} external variant="solid">
                Pedir referencias por WhatsApp
              </CtaButton>
            </div>
          </div>
        ) : null}

        <div className="mt-16 grid gap-px overflow-hidden bg-[var(--color-line)] lg:grid-cols-[1.3fr_1fr]">
          <div className="bg-white">
            <MapLoader />
          </div>
          <LocationCards />
        </div>
      </section>
    </main>
  );
}
