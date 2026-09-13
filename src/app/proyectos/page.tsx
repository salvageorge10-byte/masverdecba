import Image from "next/image";
import WorkGallery from "@/components/home/WorkGallery";
import ProjectsSection from "@/components/home/ProjectsSection";

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

      <WorkGallery />
      <ProjectsSection showLink={false} />
    </main>
  );
}
