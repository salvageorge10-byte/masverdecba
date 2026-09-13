"use client";

import { FormEvent, useState } from "react";
import { whatsapp } from "@/lib/whatsapp";
import { metaPixel } from "@/lib/analytics/metaPixel";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    const url = whatsapp.contactForm({
      nombre: String(data.get("nombre") || ""),
      email: String(data.get("email") || ""),
      telefono: String(data.get("telefono") || ""),
      asunto: String(data.get("asunto") || ""),
      mensaje: String(data.get("mensaje") || ""),
    });

    const win = window.open(url, "_blank", "noopener,noreferrer");

    if (!win) {
      setStatus("error");
      return;
    }

    metaPixel.contact({ content_name: "formulario-contacto" });
    setStatus("success");
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nombre" className="text-sm font-medium text-[var(--color-ink)]">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="mt-2 w-full border border-[var(--color-line)] px-4 py-3 text-sm outline-none focus:border-[var(--color-grass)]"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-[var(--color-ink)]">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full border border-[var(--color-line)] px-4 py-3 text-sm outline-none focus:border-[var(--color-grass)]"
        />
      </div>
      <div>
        <label htmlFor="telefono" className="text-sm font-medium text-[var(--color-ink)]">
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          required
          className="mt-2 w-full border border-[var(--color-line)] px-4 py-3 text-sm outline-none focus:border-[var(--color-grass)]"
        />
      </div>
      <div>
        <label htmlFor="asunto" className="text-sm font-medium text-[var(--color-ink)]">
          Asunto
        </label>
        <input
          id="asunto"
          name="asunto"
          type="text"
          required
          className="mt-2 w-full border border-[var(--color-line)] px-4 py-3 text-sm outline-none focus:border-[var(--color-grass)]"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="text-sm font-medium text-[var(--color-ink)]">
          Mensaje (opcional)
        </label>
        <textarea
          id="mensaje"
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
        {status === "submitting" ? "Enviando…" : "Enviar por WhatsApp"}
      </button>

      {status === "success" && (
        <p className="text-sm text-[var(--color-grass)]">
          Te abrimos WhatsApp con tu consulta cargada. ¡Gracias por escribirnos!
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Tu navegador bloqueó la ventana de WhatsApp. Habilitá los pop-ups para
          este sitio o escribinos directamente al {" "}
          <a href={whatsapp.general()} className="underline">
            +54 9 351 837‑2244
          </a>
          .
        </p>
      )}
    </form>
  );
}
