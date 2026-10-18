// src/secciones/hero-inicio.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";

const diapositivas = [
  {
    imagen: "/images/hero/hero-1.jpg",
    titulo: "Alquiler de Maquinaria Pesada para Proyectos más grandes del Perú",
    subtitulo: "Suministramos flotas de excavadoras, cargadores, tractores y volquetes en condiciones mecánicas óptimas.",
  },
  {
    imagen: "/images/hero/hero-2.jpg",
    titulo: "Flota Moderna, Lista para Operar en Cualquier Frente de Trabajo",
    subtitulo: "Equipos inspeccionados antes de cada entrega, con documentación técnica al día.",
  },
  {
    imagen: "/images/hero/hero-3.jpg",
    titulo: "Respuesta Comercial en Menos de 2 Horas",
    subtitulo: "Cotización ágil y acompañamiento técnico continuo durante todo el alquiler.",
  },
];

export function HeroInicio() {
  const [activo, setActivo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActivo((anterior) => (anterior + 1) % diapositivas.length);
    }, 4000); // cambia cada 4 segundos
    return () => clearInterval(intervalo);
  }, []);

  const slide = diapositivas[activo];

  return (
    <section className="relative bg-[#21272A] text-white py-16 sm:py-24 overflow-hidden border-b border-zinc-800 min-h-[560px] flex items-center">
      {/* Imágenes de fondo, una por diapositiva, con fundido */}
      {diapositivas.map((d, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === activo ? "opacity-100" : "opacity-0"}`}>
          <Image src={d.imagen} alt="" fill priority={i === 0} className="object-cover" />
          <div className="absolute inset-0 bg-[#21272A]/70" />
        </div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FAAE34]" />
            <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#FAAE34]">
              Soluciones para Minería y Construcción
            </span>
          </div>

          {/* Título y subtítulo cambian con cada diapositiva */}
          <h1 className="text-[34px] md:text-[36px] font-bold leading-tight tracking-tight text-white">
            {slide.titulo}
          </h1>
          <p className="text-[15px] md:text-[16px] text-zinc-300 leading-relaxed max-w-2xl">
            {slide.subtitulo}
          </p>

          {/* Botones fijos, no cambian entre diapositivas */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <Link
              href="/equipos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#FAAE34] text-[#21272A] font-extrabold text-sm btn-piston-hidraulico shadow-md active:scale-95"
            >
              Explorar Catálogo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-zinc-600 text-white font-bold text-sm bg-zinc-800/60 btn-piston-oscuro hover:text-[#21272A]"
            >
              Solicitar Cotización Rápida
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-6 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-zinc-300">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FAAE34] shrink-0" /><span>Atención directa sin intermediarios</span></div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FAAE34] shrink-0" /><span>Despachos a nivel nacional</span></div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#FAAE34] shrink-0" /><span>Inspección técnica pre-entrega</span></div>
          </div>
        </div>
      </div>

      {/* Puntos de paginación */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {diapositivas.map((_, i) => (
          <button
            key={i}
            onClick={() => setActivo(i)}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === activo ? "w-6 bg-[#FAAE34]" : "w-2 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}