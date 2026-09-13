export interface NavLink {
  label: string;
  href: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Césped deportivo", href: "/cesped-deportivo" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Productos", href: "/productos" },
  { label: "Césped decorativo", href: "/cesped-decorativo" },
  { label: "Empresa", href: "/empresa" },
  { label: "Contacto", href: "/contacto" },
];
