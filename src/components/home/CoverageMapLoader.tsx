"use client";

import dynamic from "next/dynamic";

const CoverageMap = dynamic(() => import("./CoverageMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] w-full items-center justify-center bg-[#e9e7e2] text-sm text-[#6b6b6b] sm:h-[480px]">
      Cargando mapa…
    </div>
  ),
});

export default function CoverageMapLoader() {
  return <CoverageMap />;
}
