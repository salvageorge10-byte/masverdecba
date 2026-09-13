import Image from "next/image";
import { LOCATIONS } from "@/data/company";

export default function LocationCards() {
  return (
    <div className="flex h-[420px] flex-col sm:h-[480px]">
      {LOCATIONS.map((loc) => (
        <div key={loc.id} className="relative flex-1">
          <Image
            src={loc.image}
            alt={loc.label}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 30vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-xs uppercase tracking-wide text-white/60">{loc.province}</p>
            <p className="mt-1 font-display text-xl font-medium text-white">{loc.city}</p>
            <p className="mt-1 text-xs text-white/60">{loc.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
