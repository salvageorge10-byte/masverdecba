"use client";

import dynamic from "next/dynamic";

const ProjectsMap = dynamic(() => import("./ProjectsMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] w-full items-center justify-center bg-[var(--color-paper)] text-sm text-[var(--color-ink-soft)] sm:h-[480px]">
      Cargando mapa…
    </div>
  ),
});

export default function MapLoader() {
  return <ProjectsMap />;
}
