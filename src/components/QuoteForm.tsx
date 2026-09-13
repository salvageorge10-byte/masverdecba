"use client";

import { FormEvent, useState } from "react";
import { whatsapp } from "@/lib/whatsapp";
import { metaPixel } from "@/lib/analytics/metaPixel";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    const url = whatsapp.quoteProject({
      nombre: String(data.get("nombre") || ""),
      localidad: String(data.get("localidad") || ""),
      tipoProyecto: String(data.get("tipoProyecto") || ""),
      dimensiones: String(data.get("dimensiones") || ""),
      mensaje: String(data.get("mensaje") || ""),
    });

    const win = window.open(url, "_blank", "noopener,noreferrer");

    if (!win) {
      setStatus("error");
      return;
    }

    metaPixel.lead({ content_name: "formulario-cotizacion-cancha" });
    setStatus("success");
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="q-nombre" className="text-sm font-medium text-[var(--color-ink)]">
            Nombre
          </label>
          <input
            id="q-nombre"
            name="nombre"
            type="text"
            required
            className="mt-2 w-full border border-[var(--color-line)] px-4 py-3 text-sm outline-none focus:border-[var(--color-grass)]"
          />
        </div>
        <div>
          <label htmlFor="q-localidad" className="text-sm font-medium text-[var(--color-ink)]">
            Localidad
          </label>
          <input
            id="q-localidad"
            name="localidad"
            type="text"
            required
            placeholder="Córdoba, Bell Ville…"
            className="mt-2 w-full border border-[var(--color-line)] px-4 py-3 text-sm outline-none focus:border-[var(--color-grass)]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="q-tipo" className="text-sm font-medium text-[var(--color-ink)]">
          Tipo de proyecto
        </label>
        <select
          id="q-tipo"
          name="tipoProyecto"
          required
          className="mt-2 w-full border border-[var(--color-line)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--color-grass)]"
        >
          <option value="Cancha nueva">Cancha nueva</option>
          <option value="Renovación de cancha">Renovación de cancha</option>
          <option value="Otro proyecto">Otro proyecto</option>
        </select>
      </div>

      <div>
        <label htmlFor="q-dimensiones" className="text-sm font-medium text-[var(--color-ink)]">
          Dimensiones aproximadas (opcional)
        </label>
        <input
          id="q-dimensiones"
          name="dimensiones"
          type="text"
          placeholder="Ej: 20 x 40 m"
          className="mt-2 w-full border border-[var(--color-line)] px-4 py-3 text-sm outline-none focus:border-[var(--color-grass)]"
        />
      </div>

      <div>
        <label htmlFor="q-mensaje" className="text-sm font-medium text-[var(--color-ink)]">
          Contanos más sobre tu proyecto
        </label>
        <textarea
          id="q-mensaje"
          name="mensaje"
          rows={4}
          className="mt-2 w-full border border-[var(--color-line)] px-4 py-3 text-sm outline-none focus:border-[var(--color-grass)]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 bg-[var(--color-carbon)] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-forest)] disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando…" : "Solicitar cotización por WhatsApp"}
      </button>

      {status === "success" && (
        <p className="text-sm text-[var(--color-grass)]">
          Te abrimos WhatsApp con los datos de tu proyecto. ¡Gracias!
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Tu navegador bloqueó la ventana de WhatsApp. Habilitá los pop-ups o
          escribinos directamente al{" "}
          <a href={whatsapp.general()} className="underline">
            +54 9 351 837‑2244
          </a>
          .
        </p>
      )}
    </form>
  );
}
