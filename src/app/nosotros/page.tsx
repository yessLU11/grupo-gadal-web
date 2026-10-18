// src/app/nosotros/page.tsx
import React from "react";
import { Metadata } from "next";
import { NosotrosSeccion } from "@/secciones/nosotros-seccion";

export const metadata: Metadata = {
  title: "Quiénes Somos | GRUPO GADAL Maquinaria Pesada",
  description:
    "Conozca a GRUPO GADAL, empresa líder en alquiler de maquinaria pesada para minería y construcción en el Perú. Compromiso B2B, atención directa y seguridad.",
};

export default function PaginaNosotros() {
  return <NosotrosSeccion />;
}
