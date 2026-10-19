// src/types/cotizacion.ts
// Definiciones de tipos para el módulo de cotizaciones

import { Maquinaria } from "./maquinaria";

export type TipoOperacion = "Alquiler" | "Compra";

export type EstadoCotizacion =
  | "pendiente"
  | "en_revision"
  | "aprobada"
  | "rechazada"
  | "contactado";

export interface ItemCotizacion {
  id: string;
  maquinaria: Maquinaria;
  cantidad: number;
  tipoOperacion: TipoOperacion;
  precioUnitarioEstimado?: number;
  diasAlquiler?: number;
}

export interface ClienteInfo {
  tipoDocumento: "RUC" | "DNI";
  numeroDocumento: string;
  nombresApellidos: string;
  razonSocial?: string;
  correo: string;
  codigoPais: string;
  celular: string;
  departamento: string;
  pais: string;
  mensaje?: string;
}

export interface Cotizacion {
  id: string;
  codigoCotizacion: string;
  cliente: ClienteInfo;
  items: ItemCotizacion[];
  tipoOperacion: TipoOperacion;
  estado: EstadoCotizacion;
  totalEstimado?: number;
  createdAt: string;
  updatedAt?: string;
}
