export interface Project {
  id: string;
  name: string;
  location: string;
  province: string;
  /** [lat, lng]. Solo completar con coordenadas verificadas, nunca aproximar. */
  coordinates?: [number, number];
  images: string[];
  surface?: string;
  grassType?: string;
  description?: string;
  date?: string;
  featured?: boolean;
}
