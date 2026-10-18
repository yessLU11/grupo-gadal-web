// src/secciones/flota-destacada.tsx
import React from "react";
import Link from "next/link";
import { LISTA_MAQUINARIAS } from "@/lib/datos-mock";
import { TarjetaMaquinaria } from "@/components/TarjetaMaquinaria";
import { ArrowRight } from "lucide-react";

export function FlotaDestacada() {
  const maquinariasDestacadas = LISTA_MAQUINARIAS.slice(0, 3);

  return (
    
    <section className="relative py-16 sm:py-20 bg-[#FAAE34]/15 text-white overflow-hidden"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#FAAE34] block mb-2">
              Flota Lista para Despacho
            </span>
            <h2 className="text-[46px] md:text-[36px] font-bold text-[#21272A] leading-snug">
              Maquinaria Pesada Destacada
            </h2>
            <p className="mt-2 text-[15px] md:text-[14px] text-zinc-600 max-w-xl">
              Unidades modernas y operativas para alquiler inmediato en minería, carreteras y proyectos de movimiento de tierras.
            </p>
          </div>

          <Link
            href="/equipos"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#21272A] hover:text-[#FAAE34] transition-colors group self-start md:self-auto"
          >
            Ver catálogo completo ({LISTA_MAQUINARIAS.length} equipos)
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid de 3 columnas desktop -> 1 columna móvil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {maquinariasDestacadas.map((maquinaria) => (
            <TarjetaMaquinaria key={maquinaria.id} maquinaria={maquinaria} />
          ))}
        </div>
      </div>
    </section>
  );
}
