import { COMPANY } from "@/data/company";

function buildUrl(message: string) {
  return `https://api.whatsapp.com/send?phone=${COMPANY.phoneWhatsapp}&text=${encodeURIComponent(
    message
  )}`;
}

export const whatsapp = {
  /** Consulta general (footer, botón flotante, contacto). */
  general(): string {
    return buildUrl(`Hola *${COMPANY.name}*, quiero hacer una consulta.`);
  },

  /** Consulta puntual sobre un producto del catálogo. */
  product(productName: string, url?: string): string {
    const lines = [`Hola, quería consultar por *${productName}*.`];
    if (url) lines.push(url);
    return buildUrl(lines.join("\n"));
  },

  /** Pedido de cotización para cancha/proyecto deportivo. */
  quoteProject(details?: {
    nombre?: string;
    localidad?: string;
    tipoProyecto?: string;
    dimensiones?: string;
    mensaje?: string;
  }): string {
    const lines = [
      "Hola, quisiera solicitar presupuesto para una cancha/proyecto de césped sintético.",
    ];
    if (details?.nombre) lines.push(`Nombre: ${details.nombre}`);
    if (details?.localidad) lines.push(`Localidad: ${details.localidad}`);
    if (details?.tipoProyecto) lines.push(`Tipo de proyecto: ${details.tipoProyecto}`);
    if (details?.dimensiones) lines.push(`Dimensiones aproximadas: ${details.dimensiones}`);
    if (details?.mensaje) lines.push(`Mensaje: ${details.mensaje}`);
    return buildUrl(lines.join("\n"));
  },

  /** Consulta general de contacto con datos de un formulario simple. */
  contactForm(details: {
    nombre?: string;
    email?: string;
    telefono?: string;
    asunto?: string;
    mensaje?: string;
  }): string {
    const lines = [`Hola *${COMPANY.name}*, quiero hacer una consulta.`];
    if (details.nombre) lines.push(`Nombre: ${details.nombre}`);
    if (details.email) lines.push(`Email: ${details.email}`);
    if (details.telefono) lines.push(`Teléfono: ${details.telefono}`);
    if (details.asunto) lines.push(`Asunto: ${details.asunto}`);
    if (details.mensaje) lines.push(`Mensaje: ${details.mensaje}`);
    return buildUrl(lines.join("\n"));
  },

  /** Consulta sobre disponibilidad de un producto/servicio. */
  availability(itemName: string): string {
    return buildUrl(`Hola, quería consultar disponibilidad de *${itemName}*.`);
  },
};
