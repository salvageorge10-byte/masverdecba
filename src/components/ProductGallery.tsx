"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden bg-[var(--color-paper)]">
        <Image
          src={images[active]}
          alt={name}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-5 gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Ver imagen ${index + 1}`}
              className={`relative aspect-square overflow-hidden bg-[var(--color-paper)] transition-opacity ${
                active === index ? "opacity-100 ring-2 ring-[var(--color-grass)]" : "opacity-80 hover:opacity-100"
              }`}
            >
              <Image src={image} alt="" fill className="object-cover" sizes="140px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
