import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import MapLoader from "@/components/home/MapLoader";
import LocationCards from "@/components/home/LocationCards";

export default function ProjectsSection({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="bg-[var(--color-carbon)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Dónde trabajamos"
            title="Equipo propio de instalación en toda la provincia de Córdoba."
            light
            description="Operamos desde dos bases —Córdoba Capital y Bell Ville— y viajamos a la obra con nuestro propio equipo, sin subcontratar la instalación."
          />
          {showLink && (
            <CtaButton href="/proyectos" variant="outline-light" className="w-fit">
              Ver proyectos
            </CtaButton>
          )}
        </div>

        <Reveal className="mt-14 grid gap-px overflow-hidden bg-white/10 lg:grid-cols-[1.3fr_1fr]">
          <div className="bg-white">
            <MapLoader />
          </div>
          <LocationCards />
        </Reveal>
      </div>
    </section>
  );
}
