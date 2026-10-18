// src/app/equipos/[slug]/page.tsx
import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LISTA_MAQUINARIAS } from "@/lib/datos-mock";
import { FichaTecnica } from "@/secciones/ficha-tecnica";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LISTA_MAQUINARIAS.map((m) => ({
    slug: m.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const equipo = LISTA_MAQUINARIAS.find((item) => item.slug === slug);

  if (!equipo) {
    return {
      title: "Equipo no encontrado | GRUPO GADAL",
    };
  }

  return {
    title: `${equipo.nombre} | Alquiler de Maquinaria Pesada | GRUPO GADAL`,
    description: equipo.descripcionCorta,
  };
}

export default async function PaginaDetalleEquipo({ params }: Props) {
  const { slug } = await params;
  const equipo = LISTA_MAQUINARIAS.find((item) => item.slug === slug);

  if (!equipo) {
    notFound();
  }

  return <FichaTecnica maquinaria={equipo} />;
}
