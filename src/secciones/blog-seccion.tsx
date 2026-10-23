// src/secciones/blog-seccion.tsx
// src/secciones/blog-seccion.tsx
"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { EncabezadoSeccion } from "@/components/EncabezadoSeccion";
import { LISTA_BLOG } from "@/lib/datos-mock";
import { Calendar, Clock, User, ArrowRight, Cog, Truck } from "lucide-react";
import { LlamadoAccion } from "./llamado-accion";

export function BlogSeccion() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  // Manejo de Scroll para Ocultar Velozmente el Encabezado
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const headerY = useTransform(scrollY, [0, 100], [0, -50]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.96]);

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
    <div className="bg-white min-h-screen relative overflow-hidden text-[#21272A]">
      
      {/* 🌟 RESPLANDORES DE LUZ ÁMBAR DE FONDO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-32 h-[500px] w-[500px] rounded-full bg-[#FAAE34]/15 blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[35%] h-[500px] w-[500px] rounded-full bg-[#FAAE34]/15 blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 bottom-40 h-[500px] w-[500px] rounded-full bg-[#FAAE34]/15 blur-3xl z-0"
      />

      {/* ⚙️ ENGRANANJES INDUSTRIALES DE FONDO */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        className="absolute top-28 -left-28 opacity-15 pointer-events-none z-0 text-[#FAAE34]"
      >
        <Cog className="w-[520px] h-[520px]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        className="absolute top-[30%] -right-20 opacity-10 pointer-events-none z-0 text-[#21272A]"
      >
        <Cog className="w-[320px] h-[320px]" />
      </motion.div>

      {/* 1. ENCABEZADO CON PARALLAX Y DESAPARICIÓN RÁPIDA */}
      <motion.div
        style={{ opacity: headerOpacity, y: headerY, scale: headerScale }}
        className="will-change-transform sticky top-0 z-10"
      >
        <EncabezadoSeccion
          titulo="Actualidad y Consejos Técnicos"
          subtitulo="Artículos especializados sobre mantenimiento preventivo, seguridad en faena y criterios de selección para optimizar sus costos operativos en obra."
          imagen="/images/encabezado/encabezado-blog.jpg"
        />
      </motion.div>

      {/* 2. PISTA DE VEHÍCULO ANIMADO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-20">
        <div className="h-9 bg-zinc-100 rounded-2xl border border-zinc-200/90 overflow-hidden flex items-center shadow-xs">
          <motion.div
            className="flex items-center gap-2 text-[#21272A] font-bold text-xs whitespace-nowrap"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              repeat: Infinity,
              duration: 9,
              ease: "linear",
            }}
          >
            <Truck className="w-5 h-5 text-[#FAAE34]" />
            <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-black">
              CONOCIMIENTO ESPECIALIZADO Y GUÍAS DE OPERACIÓN • GRUPO GADAL
            </span>
          </motion.div>
        </div>
      </div>

      {/* 3. FILTROS Y GRID DE ARTÍCULOS */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20"
      >
        {/* Filtro por Categorías */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-zinc-200">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSeleccionada(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                categoriaSeleccionada === cat
                  ? "bg-[#21272A] text-[#FAAE34] shadow-md scale-105"
                  : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articulosFiltrados.map((articulo, idx) => (
            <motion.article
              key={articulo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-3xl border border-zinc-200/90 overflow-hidden shadow-xl hover-elevate flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full h-52 bg-zinc-100 overflow-hidden">
                  <Image
                    src={articulo.imagen}
                    alt={articulo.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider bg-[#21272A]/90 text-[#FAAE34] backdrop-blur-sm shadow-sm">
                      {articulo.categoria}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Metadatos */}
                  <div className="flex items-center gap-4 text-xs text-zinc-400 mb-3">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#FAAE34]" />
                      {articulo.fecha}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#FAAE34]" />
                      {articulo.tiempoLectura}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#21272A] leading-snug mb-3 group-hover:text-[#FAAE34] transition-colors">
                    <Link href={`/blog/${articulo.slug}`}>
                      {articulo.titulo}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-3">
                    {articulo.resumen}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-zinc-100 mt-4 flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-bold flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#FAAE34]" />
                  {articulo.autor}
                </span>

                <Link
                  href={`/blog/${articulo.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#21272A] hover:text-[#FAAE34] transition-colors"
                >
                  Leer Artículo
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* 4. LLAMADO A LA ACCIÓN */}
      <LlamadoAccion />
    </div>
  );
}