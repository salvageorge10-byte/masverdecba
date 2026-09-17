import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { mpOrder } from "@/lib/mercadopago";
import { PRODUCTS } from "@/data/products";

interface CheckoutRequestItem {
  slug: string;
  quantity: number;
}

export async function POST(req: NextRequest) {
  let body: { items?: CheckoutRequestItem[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const requested = body.items ?? [];
  if (!Array.isArray(requested) || requested.length === 0) {
    return NextResponse.json({ error: "El carrito está vacío." }, { status: 400 });
  }

  // Precio y nombre siempre desde el catálogo del servidor: nunca se confía
  // en lo que mande el cliente para evitar manipulación de precios.
  const orderItems: { title: string; unit_price: string; quantity: number }[] = [];
  let totalAmount = 0;

  for (const requestedItem of requested) {
    const product = PRODUCTS.find((p) => p.slug === requestedItem.slug && p.active);
    const quantity = Number(requestedItem.quantity);

    if (!product || !product.price || !Number.isFinite(quantity) || quantity <= 0) {
      return NextResponse.json(
        { error: `Producto inválido: ${requestedItem.slug}` },
        { status: 400 }
      );
    }

    totalAmount += product.price * quantity;

    orderItems.push({
      title: product.name,
      unit_price: product.price.toFixed(2),
      quantity,
    });
  }

  const origin = req.nextUrl.origin;
  const externalReference = randomUUID();
  // Mercado Pago exige back_urls públicas y alcanzables para habilitar
  // auto_return; en desarrollo local (localhost) no lo son, así que se omite.
  const isPubliclyReachable = !/^https?:\/\/(localhost|127\.0\.0\.1)/.test(origin);

  try {
    const order = await mpOrder.create({
      body: {
        type: "online",
        processing_mode: "manual",
        total_amount: totalAmount.toFixed(2),
        external_reference: externalReference,
        items: orderItems,
        config: {
          online: {
            success_url: `${origin}/pago-exitoso`,
            pending_url: `${origin}/pago-pendiente`,
            failure_url: `${origin}/pago-error`,
            callback_url: `${origin}/api/checkout/webhook`,
            ...(isPubliclyReachable && { auto_return: "approved" as const }),
          },
        },
      },
      requestOptions: { idempotencyKey: externalReference },
    });

    if (!order.checkout_url) {
      return NextResponse.json(
        { error: "Mercado Pago no devolvió una URL de pago." },
        { status: 502 }
      );
    }

    return NextResponse.json({ checkout_url: order.checkout_url });
  } catch (error) {
    console.error("Error creando la orden de Mercado Pago:", error);
    return NextResponse.json(
      { error: "No se pudo iniciar el pago. Probá de nuevo en unos minutos." },
      { status: 502 }
    );
  }
}
