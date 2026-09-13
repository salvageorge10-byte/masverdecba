// Capa fina sobre Meta Pixel. Ningún componente debe llamar a `window.fbq`
// directamente: todo pasa por acá para poder cambiar de proveedor o agregar
// deduplicación sin tocar el resto del código.
//
// Eventos habilitados en esta etapa (sin e-commerce funcional):
//   PageView, ViewContent, Contact, Lead
// Eventos reservados para cuando exista checkout real:
//   AddToCart, InitiateCheckout, Purchase (NO usar todavía)

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

type StandardEvent = "PageView" | "ViewContent" | "Contact" | "Lead";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function isReady() {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

function track(event: StandardEvent, params?: Record<string, unknown>) {
  if (!META_PIXEL_ID || !isReady()) return;
  window.fbq!("track", event, params);
}

export const metaPixel = {
  pageView() {
    track("PageView");
  },

  /** Vista de una ficha de producto o landing de categoría. */
  viewContent(params: { content_name: string; content_category?: string }) {
    track("ViewContent", params);
  },

  /** Clic en WhatsApp, envío de formulario de contacto general. */
  contact(params?: { content_name?: string }) {
    track("Contact", params);
  },

  /** Solicitud de presupuesto / cotización — el evento de mayor valor hoy. */
  lead(params?: { content_name?: string; value?: number; currency?: string }) {
    track("Lead", params);
  },
};
