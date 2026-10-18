// src/secciones/blog-seccion.tsx
"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { EncabezadoSeccion } from "@/components/EncabezadoSeccion";
import { LISTA_BLOG } from "@/lib/datos-mock";
import { Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react";
import { LlamadoAccion } from "./llamado-accion";

export function BlogSeccion() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  const categorias = ["Todas", "Guías Técnicas", "Mantenimiento", "Seguridad"];

  const articulosFiltrados = useMemo(() => {
    if (categoriaSeleccionada === "Todas") {
      return LISTA_BLOG;
    }
    return LISTA_BLOG.filter(
      (art) => art.categoria === categoriaSeleccionada
    );
  }, [categoriaSeleccionada]);

  return (
    
    <div className="bg-white">

      <EncabezadoSeccion
        titulo="Actualidad y Consejos Técnicos"
        subtitulo="Artículos especializados sobre mantenimiento preventivo, seguridad en faena y criterios de selección para optimizar sus costos operativos en obra."
        imagen="/images/encabezado/encabezado-blog.jpg"
      />

      {/* CAMBIO AQUÍ: Se agregó 'mt-10 sm:mt-16' para empujar las categorías hacia abajo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 sm:mt-4">
        
        {/* Filtro por Categorías */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-zinc-200">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSeleccionada(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                categoriaSeleccionada === cat
                  ? "bg-[#21272A] text-[#FAAE34] shadow-sm"
                  : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articulosFiltrados.map((articulo) => (
            <article
              key={articulo.id}
              className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md hover:border-[#FAAE34] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-48 bg-zinc-100">
                  <Image
                    src={articulo.imagen}
                    alt={articulo.titulo}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#21272A]/90 text-[#FAAE34] backdrop-blur-sm">
                      {articulo.categoria}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Metadatos */}
                  <div className="flex items-center gap-4 text-xs text-zinc-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {articulo.fecha}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {articulo.tiempoLectura}
                    </span>
                  </div>

                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#21272A] leading-snug mb-3">
                    {articulo.titulo}
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {articulo.resumen}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-zinc-100 mt-4 flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-semibold flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#FAAE34]" />
                  {articulo.autor}
                </span>

                <button
                  onClick={() => alert(`Lectura del artículo: "${articulo.titulo}"`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#21272A] hover:text-amber-600 transition-colors"
                >
                  Leer Artículo
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* 9. LLAMADO A LA ACCIÓN (CTA) */}
            <LlamadoAccion />
    </div>
  );
}
