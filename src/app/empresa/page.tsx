import Image from "next/image";

export const metadata = {
  title: "Empresa",
  description:
    "Más Verde: calidad, innovación y compromiso en césped sintético y jardines verticales.",
};

export default function EmpresaPage() {
  return (
    <main>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[var(--color-carbon)] pb-20 pt-40 xl:pt-48">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover opacity-60">
          <source src="/videos/empresa.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)] via-[var(--color-carbon)]/40 to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-lime)]">
            Empresa
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[1] tracking-tight text-white sm:text-6xl">
            Compromiso con la calidad, innovación y excelencia.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        <h2 className="max-w-4xl font-display text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Más Verde: calidad, innovación y compromiso en césped sintético y
          jardines verticales de alto nivel.
        </h2>

        <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-[var(--color-ink)]/85">
          En Más Verde ofrecemos soluciones en paisajismo sintético para
          hogares, empresas y espacios deportivos. Contamos con depósitos en
          Córdoba y Bell Ville, garantizando stock permanente y entregas
          rápidas. Nuestros productos combinan estética, resistencia y bajo
          mantenimiento para transformar cualquier entorno.
        </p>

        <div className="mt-10 grid gap-10 border-t border-[var(--color-line)] pt-10 sm:grid-cols-2">
          <p className="text-[15px] leading-relaxed text-[var(--color-ink)]/85">
            Trabajamos con materiales de alta calidad que aseguran durabilidad
            y apariencia natural en cada aplicación. Desde canchas deportivas
            hasta jardines verticales para interiores y exteriores, cada
            producto es diseñado para resistir el paso del tiempo, las
            inclemencias climáticas y el desgaste diario, sin perder su color
            ni textura original.
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--color-ink)]/85">
            Nuestro compromiso es brindar soluciones sustentables que
            optimicen el uso de recursos y reduzcan costos de mantenimiento.
            Nuestros clientes obtienen una alternativa ecológica, sin riego ni
            podas, que mantiene su atractivo todo el año. Asesoramos cada
            proyecto con dedicación para garantizar los mejores resultados.
          </p>
        </div>
      </section>

      <section className="grid sm:grid-cols-2">
        <div className="relative aspect-[4/3] sm:aspect-auto sm:h-[520px]">
          <Image src="/images/empresa/cordoba.jpg" alt="Depósito Córdoba" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/25" />
          <h3 className="absolute bottom-10 left-8 font-display text-2xl font-medium text-white sm:text-3xl">
            Depósito Córdoba
          </h3>
        </div>
        <div className="relative aspect-[4/3] sm:aspect-auto sm:h-[520px]">
          <Image src="/images/empresa/bellville.jpg" alt="Depósito Bell Ville" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/25" />
          <h3 className="absolute bottom-10 left-8 font-display text-2xl font-medium text-white sm:text-3xl">
            Depósito Bell Ville
          </h3>
        </div>
      </section>
    </main>
  );
}
