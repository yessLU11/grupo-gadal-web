// src/secciones/testimonios-seccion.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LISTA_TESTIMONIOS } from "@/lib/datos-mock";
import type { Testimonio } from "@/types";
import { ChevronLeft, ChevronRight, Star, Zap } from "lucide-react";

// Logos referenciales de clientes para el banner móvil (Ticker / Marquee)
const LOGOS_CLIENTES = [
  {
    nombre: "SHELLS",
    icono: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
  {
    nombre: "SmartFinder",
    icono: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 4c1.66 0 3 1.34 3 3 0 1.25-.77 2.32-1.86 2.76L13 15h-2l-.14-3.24C9.77 11.32 9 10.25 9 9c0-1.66 1.34-3 3-3z" />
      </svg>
    ),
  },
  {
    nombre: "Zoomerr",
    icono: (
      <div className="w-6 h-6 rounded-full bg-white text-[#FAAE34] flex items-center justify-center font-bold">
        <Zap className="w-4 h-4 fill-current text-[#FAAE34]" />
      </div>
    ),
  },
  {
    nombre: "ArtVenue",
    icono: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M4 4h4v16H4zm6 0h4v16h-4zm6 0h4v16h-4z" />
      </svg>
    ),
  },
  {
    nombre: "kontrastr",
    icono: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18V4c4.41 0 8 3.59 8 8s-3.59 8-8 8z" />
      </svg>
    ),
  },
  {
    nombre: "WAVESMARATHON",
    icono: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M2 10h2v4H2zm4-4h2v12H6zm4-3h2v18h-2zm4 5h2v8h-2zm4-3h2v14h-2zm4 4h2v6h-2z" />
      </svg>
    ),
  },
];

export function TestimoniosSeccion() {
  const [indiceActual, setIndiceActual] = useState(0);
  const total = LISTA_TESTIMONIOS.length;

  const anterior = () => {
    setIndiceActual((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndiceActual((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const testimonio: Testimonio = LISTA_TESTIMONIOS[indiceActual];

  return (
    <section className="bg-white overflow-hidden">
      {/* 1. BANNER QUE SE MUEVE (Ticker Marquee en fondo Ámbar #FAAE34) */}
      <div className="bg-[#FAAE34] py-5 overflow-hidden shadow-inner select-none border-y border-amber-400">
        <div className="animate-marquee flex items-center gap-12 sm:gap-20">
          {/* Se duplica la lista para crear un scroll infinito y continuo */}
          {[...LOGOS_CLIENTES, ...LOGOS_CLIENTES, ...LOGOS_CLIENTES].map(
            (cliente, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-white shrink-0 hover:opacity-90 transition-opacity"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {cliente.icono}
                </div>
                <span className="font-extrabold text-lg tracking-wide uppercase">
                  {cliente.nombre}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* 2. SUBTÍTULO DESCRIPTIVO CENTRADO */}
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-6 text-center">
        <p className="text-[15px] sm:text-base md:text-lg font-medium text-[#21272A] leading-relaxed">
          Lo que dicen directores de proyecto, jefes de compras e ingenieros sobre nuestro tiempo de respuesta y desempeño operativo.
        </p>
      </div>

      {/* 3. CARRUSEL CON FOTO ORGÁNICA + COMENTARIO */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="relative flex items-center justify-between gap-2 sm:gap-6">
          {/* Flecha Izquierda < */}
          <button
            onClick={anterior}
            aria-label="Testimonio anterior"
            className="p-2 sm:p-3 rounded-full text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-[#FAAE34]"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.75]" />
          </button>

          {/* Contenido del Testimonio (Slide Activo) */}
          <div className="flex-1 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center py-4">
            {/* Columna Izquierda: Imagen de la persona u obra en forma orgánica tipo blob */}
            <div className="md:col-span-5 flex justify-center">
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 overflow-hidden shadow-lg border-2 border-amber-200/60 bg-zinc-100 transition-all duration-300"
                style={{
                  borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%",
                }}
              >
                <Image
                  src={testimonio.imagen}
                  alt={`Fotografía de ${testimonio.nombre} en obra`}
                  fill
                  sizes="(max-width: 768px) 280px, 340px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Columna Derecha: Tarjeta con Borde Ámbar #FAAE34 */}
            <div className="md:col-span-7">
              <div className="bg-white rounded-2xl border-2 border-[#FAAE34] p-6 sm:p-8 md:p-10 shadow-sm flex flex-col justify-between space-y-5 transition-all">
                {/* Cabecera del Testimonio */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#21272A] text-center sm:text-left">
                      {testimonio.nombre}
                    </h3>
                    
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-600 text-center sm:text-left">
                    {testimonio.cargo}
                    {testimonio.obra && (
                      <span className="text-xs sm:text-sm font-semibold text-zinc-500 text-center sm:text-right">
                        {testimonio.obra}
                      </span>
                    )}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-500 text-center sm:text-right">
                    {testimonio.obra}
                    
                  </p>
                </div>

                {/* Comentario / Cita */}
                <blockquote className="text-[14px] sm:text-[15px] md:text-base text-zinc-800 leading-relaxed text-center font-normal py-2 px-1">
                  &ldquo;{testimonio.comentario}&rdquo;
                </blockquote>

                {/* Calificación 5 Estrellas */}
                <div className="flex items-center justify-center gap-1.5 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FAAE34] text-[#FAAE34]"
                    />
                  ))}
                </div>

                {/* Logo del Cliente en la Base */}
                <div className="pt-2 flex items-center justify-center gap-2 text-[#FAAE34]">
                  <div className="w-7 h-7 rounded-full bg-[#FAAE34] text-white flex items-center justify-center shadow-xs">
                    <Zap className="w-4 h-4 fill-current text-white" />
                  </div>
                  <span className="font-extrabold text-lg sm:text-xl text-[#FAAE34] tracking-tight">
                    {testimonio.empresa}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Flecha Derecha > */}
          <button
            onClick={siguiente}
            aria-label="Siguiente testimonio"
            className="p-2 sm:p-3 rounded-full text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-[#FAAE34]"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.75]" />
          </button>
        </div>

        {/* Indicadores de diapositiva (Puntos navegables) */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {LISTA_TESTIMONIOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndiceActual(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-200 ${
                indiceActual === i
                  ? "w-8 bg-[#FAAE34]"
                  : "w-2 bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
