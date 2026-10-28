// src/types/maquinaria.ts
// Definiciones de tipos para el catálogo de maquinaria pesada

export type EstadoEquipo = "disponible" | "mantenimiento" | "alquilado" | "reservado";

export type SectorIndustria =
  | "Minería"
  | "Construcción"
  | "Movimiento de Tierras"
  | "Obras Viales";

export interface EspecificacionTecnica {
  motor: string;
  potenciaBruta: string;
  pesoOperativo: string;
  capacidadCuchara: string;
  profundidadExcavacion?: string;
  velocidadDesplazamiento?: string;
  combustible: string;
  dimensionesTransporte: string;
  [key: string]: string | undefined;
}

export interface Categoria {
  id: string;
  nombre: string;
  slug: string;
  descripcion?: string;
  icono?: string;
}

export interface Maquinaria {
  id: string;
  slug: string;
  nombre: string;
  categoria: string;
  marca: string;
  modelo: string;
  año: number;
  sector: SectorIndustria | string;
  capacidad: string;
  potenciaHp: number;
  pesoOperativoKg: number;
  imagenPrincipal: string;
  galeria: string[];
  descripcionCorta: string;
  descripcionCompleta: string;
  disponible: boolean;
  destacado: boolean;
  estado?: EstadoEquipo;
  precioDia?: number;
  especificaciones: EspecificacionTecnica;
  aplicaciones: string[];
}
