import "server-only";
import { MercadoPagoConfig, Order } from "mercadopago";

const accessToken = process.env.MP_ACCESS_TOKEN;

if (!accessToken) {
  throw new Error("MP_ACCESS_TOKEN no está configurado (.env.local)");
}

const client = new MercadoPagoConfig({
  accessToken,
  options: { timeout: 5000 },
});

export const mpOrder = new Order(client);
