"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import { LOCATIONS } from "@/data/company";
import { getProjectsWithCoordinates } from "@/data/projects";

const PIN_SVG = (color: string) =>
  `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="38" viewBox="0 0 28 38">
      <path d="M14 0C6.3 0 0 6.3 0 14c0 10.5 14 24 14 24s14-13.5 14-24c0-7.7-6.3-14-14-14z" fill="${color}"/>
      <circle cx="14" cy="14" r="5.5" fill="white"/>
    </svg>
  `)}`;

export default function ProjectsMap() {
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

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const depotIcon = L.icon({
        iconUrl: PIN_SVG("#0e1210"),
        iconSize: [28, 38],
        iconAnchor: [14, 38],
        popupAnchor: [0, -34],
      });

      LOCATIONS.forEach((loc) => {
        L.marker(loc.coordinates, { icon: depotIcon })
          .addTo(map)
          .bindPopup(`<strong>${loc.label}</strong><br/>${loc.city}, ${loc.province}`);
      });

      const projectIcon = L.icon({
        iconUrl: PIN_SVG("#0a7d2c"),
        iconSize: [28, 38],
        iconAnchor: [14, 38],
        popupAnchor: [0, -34],
      });

      getProjectsWithCoordinates().forEach((project) => {
        if (!project.coordinates) return;
        L.marker(project.coordinates, { icon: projectIcon })
          .addTo(map)
          .bindPopup(`<strong>${project.name}</strong><br/>${project.location}`);
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
