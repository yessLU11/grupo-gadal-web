// src/components/TarjetaMaquinaria.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Maquinaria } from "@/types";
import { useCarritoStore } from "@/lib/estado-carrito";
import { Badge } from "@/components/ui/badge";
import { Check, Plus, Eye, Zap, Scale, Layers } from "lucide-react";

interface PropsTarjeta {
  maquinaria: Maquinaria;
}

export function TarjetaMaquinaria({ maquinaria }: PropsTarjeta) {
  const [agregadoReciente, setAgregadoReciente] = useState(false);
  const agregarEquipo = useCarritoStore((state) => state.agregarEquipo);

  const manejarAgregar = (e: React.MouseEvent) => {
    e.preventDefault();
    agregarEquipo(maquinaria, "Alquiler");
    setAgregadoReciente(true);
    setTimeout(() => setAgregadoReciente(false), 2000);
  };

  return (
    <div className="group rounded-xl border border-zinc-200/90 bg-white shadow-sm tarjeta-maquinaria-elevacion flex flex-col overflow-hidden">
      {/* Contenedor de Imagen */}
      <div className="relative w-full h-52 sm:h-56 bg-zinc-100 overflow-hidden">
        <Image
          src={maquinaria.imagenPrincipal}
          alt={maquinaria.nombre}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge de Categoría / Sector */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-0.5">
          <Badge className="bg-[#21272A]/80 text-white font-bold text-xs tracking-wider backdrop-blur-sm">
            {maquinaria.sector}
          </Badge>
          {maquinaria.destacado && (
            <Badge className="bg-[#FAAE34]/80  text-[#21272A]  text-xs">
              Destacado
            </Badge>
          )}
        </div>

        {/* Badge de Disponibilidad */}
        <div className="absolute bottom-1 right-1">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-600/90 text-white shadow-sm backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Disponible
          </span>
        </div>
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Eyebrow / Categoría */}
          <span className="text-[12px] md:text-[8px] font-bold uppercase tracking-wider text-[#FAAE34] block mb-1">
            {maquinaria.categoria} • {maquinaria.marca}
          </span>

          {/* H3: Título de tarjeta */}
          <h3 className="text-[18px] md:text-[15px] font-semibold text-[#21272A] leading-snug group-hover:text-amber-600 transition-colors">
            <Link href={`/equipos/${maquinaria.slug}`}>
              {maquinaria.nombre}
            </Link>
          </h3>

          <p className="mt-2 text-zinc-600 text-[10px] line-clamp-2 leading-relaxed">
            {maquinaria.descripcionCorta}
          </p>

          {/* Especificaciones clave */}
          <div className="mt-4 pt-3 border-t border-zinc-100 grid grid-cols-3 gap-2 text-[9px]">
            <div className="flex flex-col items-center text-center p-2 rounded-lg bg-[#F1F1F1]">
              <Zap className="w-3.5 h-3.5 text-[#FAAE34] mb-1" />
              <span className="text-zinc-500 font-medium">Potencia</span>
              <span className="font-bold text-[#21272A]">{maquinaria.potenciaHp} HP</span>
            </div>

            <div className="flex flex-col items-center text-center p-2 rounded-lg bg-[#F1F1F1]">
              <Scale className="w-3.5 h-3.5 text-[#FAAE34] mb-1" />
              <span className="text-zinc-500 font-medium">Peso</span>
              <span className="font-bold text-[#21272A]">
                {(maquinaria.pesoOperativoKg / 1000).toFixed(1)} t
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-2 rounded-lg bg-[#F1F1F1]">
              <Layers className="w-3.5 h-3.5 text-[#FAAE34] mb-1" />
              <span className="text-zinc-500 font-medium">Capacidad</span>
              <span className="font-bold text-[#21272A] truncate max-w-full">
                {maquinaria.capacidad}
              </span>
            </div>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center gap-2">
          <Link
            href={`/equipos/${maquinaria.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg border border-zinc-300 text-zinc-800 text-[9px] font-bold hover:bg-[#FAAE34]/15 transition-colors"
          >
            <Eye className="w-4 h-4 text-zinc-600" />
            Ver Ficha
          </Link>

          <button
            onClick={manejarAgregar}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg text-[9px] font-bold transition-all ${
              agregadoReciente
                ? "bg-emerald-600 text-white"
                : "bg-[#FAAE34] text-[#21272A] hover:bg-[#e99e28]"
            }`}
          >
            {agregadoReciente ? (
              <>
                <Check className="w-4 h-4" />
                Agregado
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                Añadir a Cotizar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
