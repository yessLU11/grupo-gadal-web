// src/secciones/ficha-tecnica.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Maquinaria } from "@/types";
import { LISTA_MAQUINARIAS } from "@/lib/datos-mock";
import { useCarritoStore } from "@/lib/estado-carrito";
import { TarjetaMaquinaria } from "@/components/TarjetaMaquinaria";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Check,
  Plus,
  Download,
  ShieldCheck,
  FileText,
  Truck,
  Wrench,
  CheckCircle2,
  Cog,
  ArrowRight,
  Clock,
  Zap,
  Scale,
  Layers,
  Fuel
} from "lucide-react";

interface PropsFicha {
  maquinaria: Maquinaria;
}

export function FichaTecnica({ maquinaria }: PropsFicha) {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(
    maquinaria.imagenPrincipal
  );
  const [agregadoReciente, setAgregadoReciente] = useState(false);

  const agregarEquipo = useCarritoStore((state) => state.agregarEquipo);

  // Equipos relacionados del mismo sector o categoría
  const equiposRelacionados = LISTA_MAQUINARIAS.filter(
    (m) => m.id !== maquinaria.id && (m.sector === maquinaria.sector || m.categoria === maquinaria.categoria)
  ).slice(0, 3);

  const manejarAgregar = () => {
    agregarEquipo(maquinaria, "Alquiler");
    setAgregadoReciente(true);
    setTimeout(() => setAgregadoReciente(false), 2500);
  };

  const descargarPDF = () => {
    window.print();
  };

  return (
    <div className="bg-white min-h-screen relative overflow-hidden text-[#21272A] py-10 sm:py-14">
      
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
        className="absolute top-[35%] -right-20 opacity-10 pointer-events-none z-0 text-[#21272A]"
      >
        <Cog className="w-[320px] h-[320px]" />
      </motion.div>

      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute bottom-20 -right-24 opacity-15 pointer-events-none z-0 text-[#21272A]"
      >
        <Cog className="w-[480px] h-[480px]" />
      </motion.div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-6 overflow-x-auto whitespace-nowrap pb-1">
          <Link href="/" className="hover:text-[#FAAE34] transition-colors">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/equipos" className="hover:text-[#FAAE34] transition-colors">Catálogo</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-zinc-400">{maquinaria.categoria}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-[#21272A]">{maquinaria.nombre}</span>
        </nav>

        {/* 🚜 PISTA DE TRACTOR EN MOVIMIENTO */}
        <div className="h-9 bg-zinc-100 rounded-2xl border border-zinc-200/90 overflow-hidden flex items-center shadow-xs mb-8">
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
              DISPONIBILIDAD INMEDIATA • ESPECIFICACIONES TÉCNICAS COMPLETAS • GRUPO GADAL
            </span>
          </motion.div>
        </div>

        {/* BLOQUE SUPERIOR: GALERÍA Y COTIZACIÓN */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 hover-elevate relative overflow-hidden"
        >
          {/* Galería de Imágenes (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Imagen Principal */}
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-sm">
              <Image
                src={imagenSeleccionada}
                alt={maquinaria.nombre}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />

              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-[#21272A] text-white font-bold text-xs uppercase tracking-wider">
                  {maquinaria.sector}
                </Badge>
                <Badge className="bg-emerald-600 text-white font-bold text-xs">
                  Disponible para Despacho
                </Badge>
              </div>
            </div>

            {/* Miniaturas de la Galería */}
            {maquinaria.galeria.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {maquinaria.galeria.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImagenSeleccionada(img)}
                    className={`relative w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      imagenSeleccionada === img
                        ? "border-[#FAAE34] ring-2 ring-[#FAAE34]/40 scale-105"
                        : "border-zinc-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${maquinaria.nombre} vista ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Información y Botones de Cotización (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#FAAE34] block mb-1">
                  {maquinaria.categoria} • Marca {maquinaria.marca}
                </span>
                <h1 className="text-[26px] md:text-[32px] font-bold text-[#21272A] leading-tight">
                  {maquinaria.nombre}
                </h1>
                <span className="text-xs text-zinc-500 font-semibold block mt-1">
                  Código de Flota: {maquinaria.id.toUpperCase()} | Año: {maquinaria.año}
                </span>
              </div>

              <p className="text-[15px] text-zinc-600 leading-relaxed">
                {maquinaria.descripcionCompleta}
              </p>

              {/* Grid Rápido de Rendimiento (4 Campos) */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs shadow-xs flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-[#FAAE34] shrink-0" />
                  <div>
                    <span className="text-zinc-500 block text-[10px]">Potencia Neta</span>
                    <span className="font-extrabold text-[#21272A] text-xs sm:text-sm">{maquinaria.potenciaHp} HP</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs shadow-xs flex items-center gap-2.5">
                  <Scale className="w-4 h-4 text-[#FAAE34] shrink-0" />
                  <div>
                    <span className="text-zinc-500 block text-[10px]">Peso Operativo</span>
                    <span className="font-extrabold text-[#21272A] text-xs sm:text-sm">{(maquinaria.pesoOperativoKg / 1000).toFixed(1)} t</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs shadow-xs flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-[#FAAE34] shrink-0" />
                  <div>
                    <span className="text-zinc-500 block text-[10px]">Capacidad</span>
                    <span className="font-extrabold text-[#21272A] text-xs sm:text-sm truncate max-w-[110px] block">{maquinaria.capacidad}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs shadow-xs flex items-center gap-2.5">
                  <Fuel className="w-4 h-4 text-[#FAAE34] shrink-0" />
                  <div>
                    <span className="text-zinc-500 block text-[10px]">Combustible</span>
                    <span className="font-extrabold text-[#21272A] text-xs sm:text-sm">{maquinaria.especificaciones.combustible}</span>
                  </div>
                </div>
              </div>

              {/* Caja Transparente de Tarifas Estimadas */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-[#FAAE34]/40 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FAAE34]" />
                  <span className="font-bold text-[#21272A]">Modalidad de Contrato:</span>
                </div>
                <span className="font-extrabold text-[#21272A] bg-white px-2.5 py-1 rounded-md border border-zinc-200 shadow-2xs">
                  Hora / Día / Mes B2B
                </span>
              </div>
            </div>

            {/* Bloque de Acciones */}
            <div className="pt-6 border-t border-zinc-200 space-y-3">
              <button
                onClick={manejarAgregar}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                  agregadoReciente
                    ? "bg-emerald-600 text-white"
                    : "bg-[#FAAE34] hover:bg-[#e99e28] text-[#21272A] btn-piston-hidraulico"
                }`}
              >
                {agregadoReciente ? (
                  <>
                    <Check className="w-5 h-5" />
                    ¡Equipo añadido a la cotización!
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    Añadir a Cotización
                  </>
                )}
              </button>

              {/* 📄 BOTÓN DESCARGAR FICHA TÉCNICA PDF EN LUGAR DE WHATSAPP */}
              <button
                onClick={descargarPDF}
                type="button"
                className="w-full py-3 px-6 rounded-xl border border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-[#21272A] font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Download className="w-4 h-4 text-[#FAAE34]" />
                Descargar Ficha Técnica (PDF)
              </button>

              <div className="pt-3 flex items-center justify-between text-xs text-zinc-500 border-t border-zinc-100">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#FAAE34]" />
                  Inspección pre-entrega
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Truck className="w-4 h-4 text-[#FAAE34]" />
                  Despacho nacional
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TABLA DE ESPECIFICACIONES Y APLICACIONES */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Tabla de Especificaciones Técnicas (2 cols) */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 shadow-xl hover-elevate">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-zinc-100">
              <FileText className="w-5 h-5 text-[#FAAE34]" />
              <h2 className="text-[20px] md:text-[22px] font-bold text-[#21272A]">
                Especificaciones Técnicas Detalladas
              </h2>
            </div>

            <div className="divide-y divide-zinc-100 text-sm">
              <div className="py-3 flex justify-between">
                <span className="text-zinc-500 font-medium">Modelo de Motor</span>
                <span className="font-bold text-[#21272A]">{maquinaria.especificaciones.motor}</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-zinc-500 font-medium">Potencia Bruta</span>
                <span className="font-bold text-[#21272A]">{maquinaria.especificaciones.potenciaBruta}</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-zinc-500 font-medium">Peso Operativo</span>
                <span className="font-bold text-[#21272A]">{maquinaria.especificaciones.pesoOperativo}</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-zinc-500 font-medium">Capacidad de Cuchara / Tolva</span>
                <span className="font-bold text-[#21272A]">{maquinaria.especificaciones.capacidadCuchara}</span>
              </div>
              {maquinaria.especificaciones.profundidadExcavacion && (
                <div className="py-3 flex justify-between">
                  <span className="text-zinc-500 font-medium">Profundidad de Excavación</span>
                  <span className="font-bold text-[#21272A]">{maquinaria.especificaciones.profundidadExcavacion}</span>
                </div>
              )}
              {maquinaria.especificaciones.velocidadDesplazamiento && (
                <div className="py-3 flex justify-between">
                  <span className="text-zinc-500 font-medium">Velocidad Máxima</span>
                  <span className="font-bold text-[#21272A]">{maquinaria.especificaciones.velocidadDesplazamiento}</span>
                </div>
              )}
              <div className="py-3 flex justify-between">
                <span className="text-zinc-500 font-medium">Tipo de Combustible</span>
                <span className="font-bold text-[#21272A]">{maquinaria.especificaciones.combustible}</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-zinc-500 font-medium">Dimensiones para Transporte</span>
                <span className="font-bold text-[#21272A] text-right">{maquinaria.especificaciones.dimensionesTransporte}</span>
              </div>
            </div>
          </div>

          {/* Aplicaciones Recomendadas y Condiciones de Servicio (1 col) */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 shadow-xl hover-elevate">
              <h3 className="text-base font-bold text-[#21272A] mb-4">
                Aplicaciones en Obra
              </h3>
              <ul className="space-y-2.5 text-sm text-zinc-700">
                {maquinaria.aplicaciones.map((app, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 shadow-xl space-y-3 hover-elevate relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#FAAE34]" />
              <div className="flex items-center gap-2 text-[#21272A] font-bold text-sm">
                <Wrench className="w-4 h-4 text-[#FAAE34]" />
                Condiciones de Alquiler B2B
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Contratos flexibles por mes o por campaña. Soporte técnico en sitio para resolución de incidencias. Opciones de transporte en cama baja puerta a puerta.
              </p>
              <Link
                href="/carrito"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#21272A] hover:text-[#FAAE34] transition-colors"
              >
                Configurar requerimiento en el carrito <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* SECCIÓN: EQUIPOS RELACIONADOS */}
        {equiposRelacionados.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-16 pt-12 border-t border-zinc-200"
          >
            <div className="mb-8">
              <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#FAAE34] block mb-1">
                Complemente su Flota
              </span>
              <h2 className="text-[26px] md:text-[28px] font-bold text-[#21272A]">
                Equipos Relacionados para su Obra
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {equiposRelacionados.map((m) => (
                <TarjetaMaquinaria key={m.id} maquinaria={m} />
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}