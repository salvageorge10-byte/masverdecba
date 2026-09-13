// Información comercial real de Más Verde, relevada de masverdecba.com.ar.
// No agregar datos que no puedan verificarse contra el sitio actual o el cliente.

// Rating verificado en la ficha de Google Maps del depósito Córdoba
// ("Mas Verde", coincide en teléfono y sitio web). Google no expone la
// cantidad de reseñas ni su texto sin sesión iniciada, así que solo se usa
// el puntaje agregado — nunca se muestran reseñas individuales inventadas.
// Ver masverde-audit/google-social-verification-2026-09-13.txt para el detalle.
export const GOOGLE_RATING = {
  value: 4.9,
  url: "https://www.google.com/maps/place/Mas+Verde/@-31.4382667,-64.2027013,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a3471434fed9:0xf2dc242038f83544!8m2!3d-31.4382667!4d-64.2027013!16s%2Fg%2F11mcfw0z71",
};

export const COMPANY = {
  name: "Más Verde",
  legalName: "Más Verde CBA",
  phoneDisplay: "+54 9 3518372244",
  phoneWhatsapp: "5493518372244",
  email: "info@masverdecba.com.ar",
  facebookUrl: "https://www.facebook.com/profile.php?id=61570540136712",
  instagramUrl: "https://www.instagram.com/masverde.cba/",
  instagramHandle: "@masverde.cba",
};

export interface Location {
  id: string;
  label: string;
  city: string;
  province: string;
  /** Dirección real, verificada en la ficha de Google Maps de cada depósito. */
  address: string;
  /** Coordenadas exactas tomadas de la ficha de Google Maps (no aproximadas). */
  coordinates: [number, number];
  image: string;
}

export const LOCATIONS: Location[] = [
  {
    id: "cordoba",
    label: "Depósito Córdoba",
    city: "Córdoba",
    province: "Córdoba",
    address: "Dr. José Manuel Álvarez 593, Córdoba",
    coordinates: [-31.4382667, -64.2027013],
    image: "/images/empresa/cordoba.jpg",
  },
  {
    id: "bell-ville",
    label: "Depósito Bell Ville",
    city: "Bell Ville",
    province: "Córdoba",
    address: "RN9 Km501, Bell Ville, Córdoba",
    coordinates: [-32.6062718, -62.6804804],
    image: "/images/empresa/bellville.jpg",
  },
];

export interface CommercialCondition {
  title: string;
  detail: string;
  image: string;
}

// Condiciones comerciales reales, relevadas del sitio actual ("Asegurá tu inversión!").
export const COMMERCIAL_CONDITIONS: CommercialCondition[] = [
  {
    title: "Hasta 3 cuotas sin interés",
    detail: "Visa, Mastercard y tarjetas bancarizadas. También débito, efectivo y transferencia.",
    image: "/images/trust/mercadopago.jpg",
  },
  {
    title: "Envíos a todo el país",
    detail: "Coordinados por Andreani.",
    image: "/images/trust/andreani.jpg",
  },
  {
    title: "5 años de garantía",
    detail: "En toda nuestra variedad de césped sintético.",
    image: "/images/trust/garantia.jpg",
  },
];
