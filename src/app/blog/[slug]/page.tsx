// src/app/blog/[slug]/page.tsx
import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LISTA_BLOG } from "@/lib/datos-mock";
import { DetalleArticulo } from "@/secciones/detalle-articulo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LISTA_BLOG.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const articulo = LISTA_BLOG.find((item) => item.slug === slug);

  if (!articulo) {
    return {
      title: "Artículo no encontrado | GRUPO GADAL",
    };
  }

  return {
    title: `${articulo.titulo} | Blog GRUPO GADAL`,
    description: articulo.resumen,
  };
}

export default async function PaginaArticulo({ params }: Props) {
  const { slug } = await params;
  const articulo = LISTA_BLOG.find((item) => item.slug === slug);

  if (!articulo) {
    notFound();
  }

  return <DetalleArticulo articulo={articulo} />;
}