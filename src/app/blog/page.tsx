// src/app/blog/page.tsx
import React from "react";
import { Metadata } from "next";
import { BlogSeccion } from "@/secciones/blog-seccion";

export const metadata: Metadata = {
  title: "Blog Técnico y Consejos de Operación | GRUPO GADAL",
  description:
    "Artículos técnicos sobre mantenimiento de maquinaria pesada, seguridad en obra y optimización de costos para contratistas en el Perú.",
};

export default function PaginaBlog() {
  return <BlogSeccion />;
}
