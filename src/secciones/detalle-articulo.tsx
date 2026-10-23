// src/secciones/detalle-articulo.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LISTA_BLOG } from "@/lib/datos-mock";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  BookOpen,
  ClipboardList,
  Cog,
  Truck
} from "lucide-react";

interface PropsArticulo {
  articulo: (typeof LISTA_BLOG)[0];
}

export function DetalleArticulo({ articulo }: PropsArticulo) {
  // Artículos relacionados excluyendo el actual
  const relacionados = LISTA_BLOG.filter((item) => item.id !== articulo.id).slice(0, 2);

  return (
    <div className="bg-white min-h-screen relative overflow-hidden text-[#21272A] py-10 sm:py-14">
      
      {/* 🌟 RESPLANDORES ÁMBAR DE FONDO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-32 h-[500px] w-[500px] rounded-full bg-[#FAAE34]/15 blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[40%] h-[500px] w-[500px] rounded-full bg-[#FAAE34]/15 blur-3xl z-0"
      />

      {/* ⚙️ ENGRANANJES ANIMADOS */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        className="absolute top-28 -left-28 opacity-15 pointer-events-none z-0 text-[#FAAE34]"
      >
        <Cog className="w-[520px] h-[520px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Botón Volver */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-[#21272A] text-xs font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Todos los Artículos
          </Link>
        </div>

        {/* PISTA ANIMADA DE TRACTOR */}
        <div className="h-9 bg-zinc-100 rounded-2xl border border-zinc-200/90 overflow-hidden flex items-center shadow-xs mb-8">
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
              ARTÍCULO TÉCNICO • GUÍAS PARA MAQUINARIA PESADA • GRUPO GADAL
            </span>
          </motion.div>
        </div>

        {/* BLOQUE PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Cuerpos del Artículo (8 cols) */}
          <main className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-10 shadow-xl space-y-6"
            >
              {/* Badge + Título */}
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-[#21272A] text-[#FAAE34]">
                  {articulo.categoria}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#21272A] leading-tight">
                  {articulo.titulo}
                </h1>
                
                {/* Metadatos */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 pt-2 border-t border-zinc-100">
                  <span className="flex items-center gap-1.5 font-bold text-[#21272A]">
                    <User className="w-4 h-4 text-[#FAAE34]" />
                    {articulo.autor}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#FAAE34]" />
                    {articulo.fecha}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#FAAE34]" />
                    {articulo.tiempoLectura}
                  </span>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
                <Image
                  src={articulo.imagen}
                  alt={articulo.titulo}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Contenido Extenso */}
              <div className="prose prose-zinc max-w-none text-sm sm:text-base text-zinc-700 leading-relaxed space-y-4 pt-4 border-t border-zinc-100">
                <p className="font-semibold text-lg text-[#21272A] leading-snug">
                  {articulo.resumen}
                </p>
                <p>
                  En el sector de la construcción y minería en el Perú, mantener la operatividad constante de la maquinaria pesada es determinante para evitar sobrecostos o retrasos en el cronograma de obra. A continuación, repasamos las recomendaciones clave aprobadas por nuestros ingenieros mecánicos en campo.
                </p>
                <h2 className="text-xl font-bold text-[#21272A] pt-2">
                  1. Verificación Inicial de Niveles y Presión Hidráulica
                </h2>
                <p>
                  Antes de cada turno de trabajo, el operador debe ejecutar la lista de chequeo (checklist pre-operacional). Comprobar el nivel de aceite del motor, el estado de los filtros hidráulicos y la tensión de las orugas previene hasta un 80% de las fallas críticas inesperadas.
                </p>
                <h2 className="text-xl font-bold text-[#21272A] pt-2">
                  2. Adaptación según las Condiciones Geográficas
                </h2>
                <p>
                  Operar en zonas de alta montaña requiere especial atención al sistema de enfriamiento del motor debido a la baja presión atmosférica. Asimismo, la lubricación constante de pernos y bocinas en frentes abrasivos asegura una vida útil prolongada.
                </p>
              </div>
            </motion.div>
          </main>

          {/* Sidebar Lateral B2B (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Tarjeta Cotizar Flota */}
            <div className="bg-[#21272A] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#FAAE34]/20 flex items-center justify-center text-[#FAAE34]">
                <ClipboardList className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-white">
                ¿Necesita Maquinaria para su Proyecto?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Contamos con excavadoras, cargadores y tractores listos para ser desplegados en cualquier región.
              </p>
              <Link
                href="/equipos"
                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-[#FAAE34] text-[#21272A] font-extrabold text-sm shadow-md hover:bg-[#e99e28] transition-colors"
              >
                Ver Catálogo de Equipos
              </Link>
            </div>

            {/* Artículos Relacionados */}
            {relacionados.length > 0 && (
              <div className="bg-white p-6 rounded-3xl border border-zinc-200/90 shadow-xl space-y-4">
                <h3 className="text-base font-extrabold text-[#21272A] flex items-center gap-2 border-b border-zinc-100 pb-3">
                  <BookOpen className="w-4 h-4 text-[#FAAE34]" />
                  Artículos Relacionados
                </h3>
                <div className="space-y-4">
                  {relacionados.map((item) => (
                    <Link
                      key={item.id}
                      href={`/blog/${item.slug}`}
                      className="block group"
                    >
                      <h4 className="text-xs sm:text-sm font-bold text-[#21272A] group-hover:text-[#FAAE34] transition-colors line-clamp-2">
                        {item.titulo}
                      </h4>
                      <span className="text-[10px] text-zinc-400 font-medium">
                        {item.fecha} • {item.tiempoLectura}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>

        </div>
      </div>
    </div>
  );
}