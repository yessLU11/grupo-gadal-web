// src/app/carrito/page.tsx
import React from "react";
import { Metadata } from "next";
import { CarritoCotizacion } from "@/secciones/carrito-cotizacion";

export const metadata: Metadata = {
  title: "Carrito de Cotización de Flota | GRUPO GADAL",
  description:
    "Revise y formalice su requerimiento de alquiler o compra de maquinaria pesada con GRUPO GADAL. Cotización rápida y directa.",
};

export default function PaginaCarrito() {
  return <CarritoCotizacion />;
}
