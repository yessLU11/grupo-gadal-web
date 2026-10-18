// src/app/contacto/page.tsx
import React from "react";
import { Metadata } from "next";
import { SeccionContacto } from "@/secciones/formulario-contacto";

export const metadata: Metadata = {
  title: "Contacto y Cotizaciones B2B | GRUPO GADAL",
  description:
    "Comuníquese con GRUPO GADAL para cotizar el alquiler de maquinaria pesada. Atención rápida y directa sin intermediarios para todo el Perú.",
};

export default function PaginaContacto() {
  return <SeccionContacto />;
}
