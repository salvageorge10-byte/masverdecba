"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import { LOCATIONS } from "@/data/company";
import { getProjectsWithCoordinates } from "@/data/projects";

// Mapa exclusivo de la sección "Nuestra cobertura" del home. Es una copia
// deliberada de ProjectsMap (usado en /proyectos) y no un reemplazo: acá
// el mapa va en color natural (sin filtro invertido) y los popups muestran
// foto real, así que se mantiene aparte para no alterar la página /proyectos.
const PIN_SVG = (color: string) =>
  `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 28 38">
      <path d="M14 0C6.3 0 0 6.3 0 14c0 10.5 14 24 14 24s14-13.5 14-24c0-7.7-6.3-14-14-14z" fill="${color}"/>
      <circle cx="14" cy="14" r="5.5" fill="white"/>
    </svg>
  `)}`;

export default function CoverageMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const L = (await import("leaflet")).default;

      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      }).setView([-31.9, -63.5], 7);

      // Tiles gratuitas de OpenStreetMap en color natural, sin ningún
      // filtro CSS: se ve como un mapa real, no "generado".
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const depotIcon = L.icon({
        iconUrl: PIN_SVG("#0a7d2c"),
        iconSize: [30, 40],
        iconAnchor: [15, 40],
        popupAnchor: [0, -36],
      });

      LOCATIONS.forEach((loc) => {
        L.marker(loc.coordinates, { icon: depotIcon }).addTo(map).bindPopup(
          `<div class="mv-coverage-popup">
            <img src="${loc.image}" alt="${loc.label}" />
            <p class="mv-coverage-popup-tag">Base operativa</p>
            <strong>${loc.city}</strong>
            <span>${loc.address}</span>
          </div>`,
          { maxWidth: 220 }
        );
      });

      const projectIcon = L.icon({
        iconUrl: PIN_SVG("#b6d602"),
        iconSize: [30, 40],
        iconAnchor: [15, 40],
        popupAnchor: [0, -36],
      });

      getProjectsWithCoordinates().forEach((project) => {
        if (!project.coordinates) return;
        const photo = project.images[0];
        L.marker(project.coordinates, { icon: projectIcon }).addTo(map).bindPopup(
          `<div class="mv-coverage-popup">
            ${photo ? `<img src="${photo}" alt="${project.name}" />` : ""}
            <p class="mv-coverage-popup-tag">${project.grassType ?? "Proyecto realizado"}</p>
            <strong>${project.name}</strong>
            <span>${project.location}${project.surface ? ` · ${project.surface}` : ""}</span>
          </div>`,
          { maxWidth: 220 }
        );
      });

      mapRef.current = map;
    }

    init();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="h-[420px] w-full sm:h-[480px]" />;
}
