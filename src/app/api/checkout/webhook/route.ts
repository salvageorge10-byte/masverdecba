import { NextRequest, NextResponse } from "next/server";

// Mercado Pago llama acá cuando cambia el estado de una orden/pago.
// Por ahora solo confirmamos recepción (200) para que MP no reintente;
// no hay base de datos en el proyecto todavía para persistir el estado.
export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    console.log("Notificación de Mercado Pago:", payload);
  } catch {
    // Notificación sin body o no-JSON: la reconocemos igual.
  }
  return NextResponse.json({ received: true });
}
