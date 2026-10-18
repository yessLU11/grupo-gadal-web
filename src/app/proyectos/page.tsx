// src/app/proyectos/page.tsx
import React from "react";
import { Metadata } from "next";
import { ProyectosSeccion } from "@/secciones/proyectos-seccion";

export const metadata: Metadata = {
  title: "Sectores y Metodología de Trabajo | GRUPO GADAL",
  description:
    "Descubra los sectores de minería, construcción y carreteras donde opera GRUPO GADAL, y nuestra metodología de suministro de maquinaria pesada.",
};

export default function PaginaProyectos() {
  return <ProyectosSeccion />;
}
