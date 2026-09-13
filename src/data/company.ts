// Información comercial real de Más Verde, relevada de masverdecba.com.ar.
// No agregar datos que no puedan verificarse contra el sitio actual o el cliente.

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
  /** Coordenadas de referencia a nivel ciudad (no dirección exacta del depósito). */
  coordinates: [number, number];
  image: string;
}

export const LOCATIONS: Location[] = [
  {
    id: "cordoba",
    label: "Depósito Córdoba",
    city: "Córdoba",
    province: "Córdoba",
    coordinates: [-31.4201, -64.1888],
    image: "/images/empresa/cordoba.jpg",
  },
  {
    id: "bell-ville",
    label: "Depósito Bell Ville",
    city: "Bell Ville",
    province: "Córdoba",
    coordinates: [-32.6259, -62.689],
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
