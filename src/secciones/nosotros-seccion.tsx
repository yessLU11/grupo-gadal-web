// src/secciones/nosotros-seccion.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PUNTOS_POR_QUE_ELEGIRNOS } from "@/lib/datos-mock";
import { TestimoniosSeccion } from "@/secciones/testimonios-seccion";
import { LlamadoAccion } from "@/secciones/llamado-accion";
import { Play, X, MapPin, Clock, ShieldCheck, Award, FileCheck, CheckCircle2 } from "lucide-react";
import { EncabezadoSeccion } from "@/components/EncabezadoSeccion";
import { DATOS_EMPRESA } from "@/lib/constantes-empresa";
import { ContadorDinamico } from "@/components/ContadorDinamico";

export function NosotrosSeccion() {
  const [mostrarVideo, setMostrarVideo] = useState(false);

  return (
    <div className="bg-white">
      {/* 1. ENCABEZADO CON IMAGEN DE FONDO */}
      <EncabezadoSeccion
        titulo="Nosotros"
        subtitulo="¿Quieres conocernos más?"
        imagen="/images/encabezado/encabezado-nosotros.jpg"
      />

      {/* 2. QUIÉNES SOMOS + VIDEO DE LA EMPRESA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Columna Izquierda: Video */}
            <div className="lg:col-span-6">
              <div
                onClick={() => setMostrarVideo(true)}
                className="group relative h-[300px] sm:h-[380px] md:h-[420px] w-full rounded-3xl overflow-hidden shadow-lg border border-zinc-200 cursor-pointer bg-zinc-900"
              >
                <Image
                  src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=1200&q=80"
                  alt="Operaciones mineras y maquinaria pesada GRUPO GADAL"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge VIDEO en esquina superior izquierda */}
                <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-xs text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  VIDEO
                </div>

                {/* Botón Play Central */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FAAE34] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Quiénes Somos */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FAAE34] block">
                QUIÉNES SOMOS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#21272A] leading-tight">
                Experiencia y compromiso en cada proyecto
              </h2>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                Somos una empresa dedicada al alquiler de maquinaria pesada para los sectores de minería y construcción. Nos diferenciamos por responder en menos tiempo, acompañar de cerca a nuestros operadores y clientes, y mantener costos accesibles sin sacrificar confiabilidad ni seguridad operativa.
              </p>

              {/* Métricas con Contadores Numéricos Dinámicos */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-100">
                <div className="bg-[#FAAE34]/10 rounded-xl p-3 text-center border border-[#FAAE34]/20">
                  <span className="block text-xl sm:text-2xl font-black text-[#21272A] font-mono">
                    <ContadorDinamico valorFinal={100} sufijo="%" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-zinc-600 block mt-0.5">
                    Disponibilidad Operativa
                  </span>
                </div>
                <div className="bg-[#FAAE34]/10 rounded-xl p-3 text-center border border-[#FAAE34]/20">
                  <span className="block text-xl sm:text-2xl font-black text-[#21272A] font-mono">
                    <ContadorDinamico valorFinal={24} prefijo="+" sufijo=" Deptos" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-zinc-600 block mt-0.5">
                    Cobertura Nacional
                  </span>
                </div>
                <div className="bg-[#FAAE34]/10 rounded-xl p-3 text-center border border-[#FAAE34]/20">
                  <span className="block text-xl sm:text-2xl font-black text-[#21272A] font-mono">
                    <ContadorDinamico valorFinal={2} sufijo="h" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-zinc-600 block mt-0.5">
                    Respuesta Comercial
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL DE VIDEO INTERACTIVO */}
      {mostrarVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setMostrarVideo(false)}
              className="absolute top-3 right-3 z-10 p-2 text-white/80 hover:text-white bg-black/60 rounded-full transition-colors"
              aria-label="Cerrar video"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video Corporativo GRUPO GADAL"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

      {/* 3. MISIÓN Y VISIÓN */}
      <section className="py-14 sm:py-18 bg-[#FAAE34]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tarjeta Misión */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-[#FAAE34]/20 flex flex-col justify-between tarjeta-maquinaria-elevacion">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#21272A] mb-3">
                  Nuestra Misión
                </h3>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                  Brindar soluciones de maquinaria pesada confiables y accesibles que impulsen la productividad de nuestros clientes, respaldadas por acompañamiento técnico cercano y altos estándares de seguridad. [Placeholder - validar con el cliente]
                </p>
              </div>
            </div>

            {/* Tarjeta Visión */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-[#FAAE34]/20 flex flex-col justify-between tarjeta-maquinaria-elevacion">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#21272A] mb-3">
                  Nuestra Visión
                </h3>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                  Ser el aliado de referencia en alquiler de maquinaria pesada para los sectores minero y de construcción en el Perú. [Placeholder - validar con el cliente]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POR QUÉ ELEGIRNOS (5 TARJETAS CON APARICIÓN EN CASCADA / ELEVACIÓN) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2 mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FAAE34] block">
              POR QUÉ ELEGIRNOS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#21272A] leading-tight">
              Somos nuevos en el mercado, no en el compromiso
            </h2>
          </div>

          {/* Grid de 5 tarjetas en bg-[#FAAE34]/15 con retardo escalonado y elevación industrial */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {PUNTOS_POR_QUE_ELEGIRNOS.map((punto, index) => {
              const retardos = [
                "transition-all duration-300 delay-100",
                "transition-all duration-300 delay-200",
                "transition-all duration-300 delay-300",
                "transition-all duration-300 delay-400",
                "transition-all duration-300 delay-500",
              ];
              return (
                <div
                  key={punto.numero}
                  className={`bg-[#FAAE34]/15 rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-[#FAAE34]/30 shadow-xs tarjeta-maquinaria-elevacion ${
                    retardos[index % retardos.length]
                  }`}
                >
                  <div>
                    <span className="text-xl sm:text-2xl font-black text-[#FAAE34] block mb-3 font-mono">
                      {punto.numero}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#21272A] mb-2 leading-snug">
                      {punto.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                      {punto.descripcion}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICACIONES Y ESTÁNDARES (FONDO #FAAE34) */}
      <section className="py-16 sm:py-24 bg-[#FAAE34]/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#21272A] bg-white/30 px-3.5 py-1 rounded-full inline-block backdrop-blur-xs">
              Cumplimiento y Homologación
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FAAE34] tracking-tight">
              Certificaciones y Estándares
            </h2>
            <p className="text-sm sm:text-base text-[#21272A]/50 leading-relaxed font-medium">
              Operamos bajo lineamientos internacionales para garantizar la máxima seguridad en faena, operatividad mecánica continua y aprobación expedita en garita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Card 1: ISO 9001 */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-amber-200/50 tarjeta-maquinaria-elevacion group flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-zinc-100">
                  <Image
                    src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&q=80"
                    alt="Inspección y Gestión de Calidad ISO 9001"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                    <Award className="w-3.5 h-3.5 text-[#FAAE34]" />
                    Calidad Operativa
                  </div>
                </div>
                <h3 className="font-black text-[#21272A] text-lg sm:text-xl mb-1.5">
                  ISO 9001
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Sistemas de Gestión de Calidad aplicados al mantenimiento preventivo riguroso, inspección técnica y trazabilidad de cada máquina.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-bold text-[#21272A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Listas de chequeo pre-entrega</span>
              </div>
            </div>

            {/* Card 2: ISO 45001 */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-amber-200/50 tarjeta-maquinaria-elevacion group flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-zinc-100">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
                    alt="Seguridad y Salud Ocupacional ISO 45001"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FAAE34]" />
                    Seguridad SST
                  </div>
                </div>
                <h3 className="font-black text-[#21272A] text-lg sm:text-xl mb-1.5">
                  ISO 45001
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Sistemas de Gestión de Seguridad y Salud en el Trabajo orientados a la protección de operadores y personal técnico en obra.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-bold text-[#21272A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Protocolos de prevención de riesgos</span>
              </div>
            </div>

            {/* Card 3: Estándares HSE */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-amber-200/50 tarjeta-maquinaria-elevacion group flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-zinc-100">
                  <Image
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=600&q=80"
                    alt="Cumplimiento de Estándares HSE y Minería"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                    <FileCheck className="w-3.5 h-3.5 text-[#FAAE34]" />
                    Dossier Técnico
                  </div>
                </div>
                <h3 className="font-black text-[#21272A] text-lg sm:text-xl mb-1.5">
                  Estándares HSE
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Cumplimiento riguroso de normativas ambientales, pólizas TREC y requisitos documentales para ingreso inmediato a faenas mineras.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-bold text-[#21272A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pólizas TREC y auditorías en garita</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NUESTRO EQUIPO HUMANO */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FAAE34] block">
              NUESTRO EQUIPO HUMANO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#21272A] leading-snug">
              &ldquo;Un equipo de especialistas dedicados a mantener tu obra en marcha sin interrupciones&rdquo;
            </h2>
          </div>

          {/* Fotografía principal del equipo en faena */}
          <div className="max-w-5xl mx-auto">
            <div className="relative h-[320px] sm:h-[460px] md:h-[520px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-zinc-100">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80"
                alt="Equipo humano de ingenieros y especialistas GRUPO GADAL"
                fill
                sizes="(max-width: 1200px) 100vw, 1024px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIOS (CON BANNER MÓVIL Y CARRUSEL) */}
      <TestimoniosSeccion />

      {/* 8. UBÍCANOS + GOOGLE MAPS ABANCAY */}
      <section className="py-16 sm:py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Título Lateral Izquierdo */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-black text-[#21272A] tracking-tight">
                Ubícanos
              </h2>
            </div>

            {/* Contenido Derecho: 2 Tarjetas y Mapa de Abancay */}
            <div className="lg:col-span-9 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Tarjeta 1: Oficina Central */}
                <div className="bg-[#FAAE34]/15 rounded-2xl p-5 border border-[#FAAE34]/30 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="relative h-40 w-full rounded-xl overflow-hidden mb-3 bg-zinc-100">
                      <Image
                        src="https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80"
                        alt="Patio de operaciones y flota GRUPO GADAL"
                        fill
                        sizes="(max-width: 640px) 100vw, 400px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="flex items-center gap-1.5 mb-1 text-[#21272A]">
                      <MapPin className="w-4 h-4 text-[#FAAE34]" />
                      <h3 className="font-black text-sm uppercase text-[#21272A]">
                        OFICINA CENTRAL
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-700 font-medium">
                      {DATOS_EMPRESA.direccion}
                    </p>
                  </div>
                </div>

                {/* Tarjeta 2: Horarios de Atención */}
                <div className="bg-[#FAAE34]/15 rounded-2xl p-5 border border-[#FAAE34]/30 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="relative h-40 w-full rounded-xl overflow-hidden mb-3 bg-zinc-100">
                      <Image
                        src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
                        alt="Taller técnico de mantenimiento GRUPO GADAL"
                        fill
                        sizes="(max-width: 640px) 100vw, 400px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="flex items-center gap-1.5 mb-1 text-[#21272A]">
                      <Clock className="w-4 h-4 text-[#FAAE34]" />
                      <h3 className="font-black text-sm text-[#21272A]">
                        Horarios de atención
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed">
                      {DATOS_EMPRESA.horario}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mapa Interactivo de Abancay */}
              <div className="rounded-2xl border border-[#FAAE34]/30 overflow-hidden shadow-sm h-72 sm:h-80 w-full bg-zinc-100">
                <iframe
                  src={DATOS_EMPRESA.mapaEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación en Abancay, Apurímac"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LLAMADO A LA ACCIÓN (CTA) */}
      <LlamadoAccion />
    </div>
  );
}
