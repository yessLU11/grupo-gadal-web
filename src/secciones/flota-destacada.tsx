// src/secciones/flota-destacada.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LISTA_MAQUINARIAS } from "@/lib/datos-mock";
import { TarjetaMaquinaria } from "@/components/TarjetaMaquinaria";
import { ArrowRight } from "lucide-react";

export function FlotaDestacada() {
  const maquinariasDestacadas = LISTA_MAQUINARIAS.slice(0, 3);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative py-16 sm:py-24 bg-white text-[#21272A] overflow-hidden border-b border-zinc-100 z-20"
    > 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAAE34] block">
              FLOTA LISTA PARA DESPACHO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#21272A] leading-snug">
              Maquinaria Pesada Destacada
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-xl font-normal">
              Unidades modernas y operativas para alquiler inmediato en minería, carreteras y proyectos de movimiento de tierras.
            </p>
          </div>

          <Link
            href="/equipos"
            className="inline-flex items-center gap-2 text-sm font-black text-[#21272A] hover:text-[#FAAE34] transition-colors group self-start md:self-auto"
          >
            Ver catálogo completo ({LISTA_MAQUINARIAS.length} equipos)
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid de Maquinarias con Elevación */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {maquinariasDestacadas.map((maquinaria) => (
            <TarjetaMaquinaria key={maquinaria.id} maquinaria={maquinaria} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}