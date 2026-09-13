import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import MapLoader from "@/components/home/MapLoader";
import LocationCards from "@/components/home/LocationCards";
import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="bg-[var(--color-carbon)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Más Verde en el mapa"
            title="Presencia en Córdoba, con equipo propio de instalación."
            light
            description={
              PROJECTS.length === 0
                ? "Estamos ordenando el registro fotográfico de las canchas que instalamos para mostrarlas acá, con ubicación y detalle de cada obra. Mientras tanto, así estamos organizados en el territorio."
                : undefined
            }
          />
          <CtaButton href="/proyectos" variant="outline-light" className="w-fit">
            Ver proyectos
          </CtaButton>
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
