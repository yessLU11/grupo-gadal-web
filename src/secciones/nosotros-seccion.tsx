// src/secciones/nosotros-seccion.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { PUNTOS_POR_QUE_ELEGIRNOS } from "@/lib/datos-mock";
import { TestimoniosSeccion } from "@/secciones/testimonios-seccion";
import { LlamadoAccion } from "@/secciones/llamado-accion";
import { 
  Play, 
  X, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  FileCheck, 
  CheckCircle2, 
  Cog, 
  Truck, 
  ExternalLink 
} from "lucide-react";
import { EncabezadoSeccion } from "@/components/EncabezadoSeccion";
import { DATOS_EMPRESA } from "@/lib/constantes-empresa";
import { ContadorDinamico } from "@/components/ContadorDinamico";

export function NosotrosSeccion() {
  const [mostrarVideo, setMostrarVideo] = useState(false);

  // Manejo de Scroll para Ocultar Velozmente el Encabezado
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 80], [1, 0]);
  const headerY = useTransform(scrollY, [0, 80], [0, -80]);
  const headerScale = useTransform(scrollY, [0, 80], [1, 0.96]);
  const headerPointerEvents = useTransform(scrollY, (value) =>
    value >= 80 ? "none" : "auto"
  );

  return (
    <div className="bg-white min-h-screen relative overflow-hidden text-[#21272A]">
      
      {/* 🌟 RESPLANDORES DE LUZ AMBAR UNIFICADOS DE FONDO */}
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

      {/* ⚙️ ENGRANANJES INDUSTRIALES DE FONDO (FONDO AMBIENTAL) */}
      
      {/* Engranaje Gigante Superior Izquierdo */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        className="absolute top-28 -left-28 opacity-15 pointer-events-none z-0 text-[#FAAE34]"
      >
        <Cog className="w-[520px] h-[520px]" />
      </motion.div>

      {/* Engranaje Oscuro - Centro Derecho */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        className="absolute top-[20%] -right-20 opacity-10 pointer-events-none z-0 text-[#21272A]"
      >
        <Cog className="w-[320px] h-[320px]" />
      </motion.div>

      {/* Engranaje Oscuro Inferior */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute bottom-20 -right-24 opacity-15 pointer-events-none z-0 text-[#21272A]"
      >
        <Cog className="w-[480px] h-[480px]" />
      </motion.div>

      {/* 1. ENCABEZADO CON EFECTO PARALLAX Y DESAPARICIÓN RÁPIDA */}
      <motion.div 
        style={{
          opacity: headerOpacity,
          y: headerY,
          scale: headerScale,
          pointerEvents: headerPointerEvents,
        }}
        className="will-change-transform sticky top-0 z-10"
      >
        <EncabezadoSeccion
          titulo="Nosotros"
          subtitulo="¿Quieres conocernos más?"
          imagen="/images/encabezado/encabezado-nosotros.jpg"
        />
      </motion.div>

      {/* 2. QUIÉNES SOMOS + VIDEO DE LA EMPRESA (CON EFECTO ENFOQUE DE SCROLL) */}
      <motion.section 
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-12 sm:py-20 relative z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Columna Izquierda: Video Interactivo con Elevación */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6"
            >
              <div
                onClick={() => setMostrarVideo(true)}
                className="group relative h-[320px] sm:h-[400px] lg:h-[440px] w-full rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 cursor-pointer bg-zinc-900 hover-elevate"
              >
                <Image
                  src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=1200&q=80"
                  alt="Operaciones mineras y maquinaria pesada GRUPO GADAL"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Badge VIDEO */}
                <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  VIDEO CORPORATIVO
                </div>

                {/* Botón Play Central Animado */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FAAE34] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1 text-[#21272A]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Columna Derecha: Quiénes Somos */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 space-y-5"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAAE34]">
                  QUIÉNES SOMOS
                </span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                >
                  <Cog className="w-4 h-4 text-[#FAAE34]" />
                </motion.div>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#21272A] leading-tight">
                Experiencia y compromiso en cada proyecto
              </h2>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                Somos una empresa dedicada al alquiler de maquinaria pesada para los sectores de minería y construcción. Nos diferenciamos por responder en menos tiempo, acompañar de cerca a nuestros operadores y clientes, y mantener costos accesibles sin sacrificar confiabilidad ni seguridad operativa.
              </p>

              {/* Métricas con Contadores Numéricos Dinámicos en Tarjetas Elevadas */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-200">
                <div className="bg-white rounded-xl p-3.5 text-center border border-zinc-200/90 shadow-md hover-elevate">
                  <span className="block text-xl sm:text-2xl font-black text-[#21272A] font-mono">
                    <ContadorDinamico valorFinal={100} sufijo="%" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-zinc-600 block mt-0.5">
                    Disponibilidad
                  </span>
                </div>
                <div className="bg-white rounded-xl p-3.5 text-center border border-zinc-200/90 shadow-md hover-elevate">
                  <span className="block text-xl sm:text-2xl font-black text-[#21272A] font-mono">
                    <ContadorDinamico valorFinal={24} prefijo="+" sufijo=" Dptos" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-zinc-600 block mt-0.5">
                    Cobertura
                  </span>
                </div>
                <div className="bg-white rounded-xl p-3.5 text-center border border-zinc-200/90 shadow-md hover-elevate">
                  <span className="block text-xl sm:text-2xl font-black text-[#21272A] font-mono">
                    <ContadorDinamico valorFinal={2} sufijo="h" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-zinc-600 block mt-0.5">
                    Respuesta
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* MODAL DE VIDEO INTERACTIVO */}
      {mostrarVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
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

      {/* 3. MISIÓN Y VISIÓN (TARJETAS EN CASCADA CON ENFOQUE DE SCROLL) */}
      <motion.section 
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-14 sm:py-20 relative z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Tarjeta Misión */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-zinc-200/90 flex flex-col justify-between hover-elevate relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-[#FAAE34]" />
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#21272A] mb-3">
                  Nuestra Misión
                </h3>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                  Brindar soluciones de maquinaria pesada confiables y accesibles que impulsen la productividad de nuestros clientes, respaldadas por acompañamiento técnico cercano y altos estándares de seguridad.
                </p>
              </div>
            </motion.div>

            {/* Tarjeta Visión */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-zinc-200/90 flex flex-col justify-between hover-elevate relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-[#21272A]" />
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#21272A] mb-3">
                  Nuestra Visión
                </h3>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                  Ser el aliado de referencia en alquiler de maquinaria pesada para los sectores minero y de construcción en el Perú, destacando por nuestro compromiso operativo y disponibilidad inmediata.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* 4. POR QUÉ ELEGIRNOS (ENFOQUE DE SCROLL CON 5 TARJETAS) */}
      <motion.section 
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-14 sm:py-22 relative z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2 mb-10">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAAE34] block">
              POR QUÉ ELEGIRNOS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#21272A] leading-tight">
              Somos nuevos en el mercado, no en el compromiso
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {PUNTOS_POR_QUE_ELEGIRNOS.map((punto, index) => (
              <motion.div
                key={punto.numero}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-zinc-200/90 shadow-lg hover-elevate"
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
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. CERTIFICACIONES Y ESTÁNDARES */}
      <motion.section 
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-16 sm:py-24 bg-[#21272A] text-white relative z-20 overflow-hidden"
      >
        {/* Engranaje en el Fondo de Certificaciones */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute -right-16 -bottom-16 opacity-10 pointer-events-none text-[#FAAE34]"
        >
          <Cog className="w-80 h-80" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#FAAE34] bg-white/10 px-3.5 py-1.5 rounded-full inline-block backdrop-blur-md">
              Cumplimiento y Homologación
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Certificaciones y Estándares
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
              Operamos bajo lineamientos internacionales para garantizar la máxima seguridad en faena, operatividad mecánica continua y aprobación expedita en garita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Card 1: ISO 9001 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-zinc-200 hover-elevate group flex flex-col justify-between text-zinc-800"
            >
              <div>
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-zinc-100">
                  <Image
                    src="/images/ISO-9001.jpg"
                    alt="Inspección ISO 9001"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                    <Award className="w-3.5 h-3.5 text-[#FAAE34]" />
                    Calidad Operativa
                  </div>
                </div>
                <h3 className="font-black text-[#21272A] text-lg sm:text-xl mb-1.5">
                  ISO 9001
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Sistemas de Gestión de Calidad aplicados al mantenimiento preventivo riguroso e inspección técnica continua.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-bold text-[#21272A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Listas de chequeo pre-entrega</span>
              </div>
            </motion.div>

            {/* Card 2: ISO 45001 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-zinc-200 hover-elevate group flex flex-col justify-between text-zinc-800"
            >
              <div>
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-zinc-100">
                  <Image
                    src="/images/ISO-9001.png"
                    alt="Seguridad SST ISO 45001"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FAAE34]" />
                    Seguridad SST
                  </div>
                </div>
                <h3 className="font-black text-[#21272A] text-lg sm:text-xl mb-1.5">
                  ISO 45001
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Sistemas de Gestión de Seguridad y Salud en el Trabajo para proteger a nuestros operadores en campo.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-bold text-[#21272A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Prevención activa de riesgos</span>
              </div>
            </motion.div>

            {/* Card 3: Estándares HSE */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-zinc-200 hover-elevate group flex flex-col justify-between text-zinc-800"
            >
              <div>
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-zinc-100">
                  <Image
                    src="/images/HSE.png"
                    alt="Estándares HSE"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                    <FileCheck className="w-3.5 h-3.5 text-[#FAAE34]" />
                    Dossier Técnico
                  </div>
                </div>
                <h3 className="font-black text-[#21272A] text-lg sm:text-xl mb-1.5">
                  Estándares HSE
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Pólizas TREC y cumplimiento ambiental rigoroso para ingreso inmediato a minas y proyectos clave.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-bold text-[#21272A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Auditoría de garita aprobada</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 6. NUESTRO EQUIPO HUMANO (CON TRACTOR ANIMADO Y ENFOQUE SCROLL) */}
      <motion.section 
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-16 sm:py-24 relative z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAAE34] block">
              NUESTRO EQUIPO HUMANO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#21272A] leading-snug">
              &ldquo;Un equipo de especialistas dedicados a mantener tu obra en marcha sin interrupciones&rdquo;
            </h2>
          </div>

          {/* Fotografía del equipo con Tractor Animado sobre ella */}
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-4 shadow-2xl border border-zinc-200/90 relative overflow-hidden">
            {/* 🚜 PISTA DE TRACTOR EN MOVIMIENTO */}
            <div className="h-8 bg-zinc-100 rounded-t-xl overflow-hidden mb-3 border-b border-zinc-200 flex items-center">
              <motion.div
                className="flex items-center gap-2 text-[#21272A] font-bold text-xs whitespace-nowrap"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
              >
                <Truck className="w-5 h-5 text-[#FAAE34]" />
                <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-black">
                  Un equipo técnico imparable • GRUPO GADAL
                </span>
              </motion.div>
            </div>

            <div className="relative h-[320px] sm:h-[460px] md:h-[500px] w-full rounded-2xl overflow-hidden bg-zinc-100">
              <Image
                src="/images/equipo-tecnico-grupo-gadal.jpg"
                alt="Equipo humano y especialistas GRUPO GADAL"
                fill
                sizes="(max-width: 1200px) 100vw, 1024px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. TESTIMONIOS */}

      <TestimoniosSeccion />

      {/* 8. UBÍCANOS + GOOGLE MAPS ABANCAY (MISMA PALETA DE FONDOS Y RESPLANDOR) */}
      <motion.section 
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 overflow-hidden bg-white py-16 text-[#21272A] sm:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-[#FAAE34]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FAAE34]/20 blur-3xl"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Título Lateral */}
            <div className="lg:col-span-3 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#FAAE34] block">
                SEDE OPERATIVA
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#21272A] tracking-tight">
                Ubícanos
              </h2>
            </div>

            {/* Contenido: Tarjetas e Iframe */}
            <div className="lg:col-span-9 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Oficina Central */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-5 border border-zinc-200/90 shadow-lg hover-elevate space-y-3"
                >
                  <div className="relative h-40 w-full rounded-xl overflow-hidden bg-zinc-100">
                    <Image
                      src="/images/abancay-imagen-ubicacion.jpg"
                      alt="Patio de operaciones"
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 text-[#21272A]">
                    <MapPin className="w-4 h-4 text-[#FAAE34]" />
                    <h3 className="font-black text-sm uppercase text-[#21272A]">
                      OFICINA CENTRAL
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 font-medium">
                    {DATOS_EMPRESA.direccion}
                  </p>
                </motion.div>

                {/* Horarios */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-zinc-200/90 shadow-lg hover-elevate space-y-3"
                >
                  <div className="relative h-40 w-full rounded-xl overflow-hidden bg-zinc-100">
                    <Image
                      src="/images/horario-atencion-imagen.jpg"
                      alt="Taller técnico"
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 text-[#21272A]">
                    <Clock className="w-4 h-4 text-[#FAAE34]" />
                    <h3 className="font-black text-sm text-[#21272A]">
                      HORARIO DE ATENCIÓN
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed">
                    {DATOS_EMPRESA.horario}
                  </p>
                </motion.div>

              </div>

              {/* Mapa Interactivo */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-3 rounded-2xl border border-zinc-200/90 shadow-xl space-y-3"
              >
                <div className="flex items-center justify-between px-2 pt-1">
                  <span className="font-bold text-xs text-zinc-800 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#FAAE34]" /> Sede Comercial Abancay
                  </span>
                  <a
                    href="https://maps.google.com/?q=Abancay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#FAAE34] hover:underline flex items-center gap-1"
                  >
                    Abrir Mapa <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="rounded-xl overflow-hidden h-72 sm:h-80 w-full bg-zinc-100">
                  <iframe
                    src={DATOS_EMPRESA.mapaEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicación en Abancay"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </motion.section>

      {/* 9. LLAMADO A LA ACCIÓN (CTA) */}
      <LlamadoAccion />

    </div>
  );
}