// src/secciones/ficha-tecnica.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Maquinaria } from "@/types";
import { LISTA_MAQUINARIAS } from "@/lib/datos-mock";
import { useCarritoStore } from "@/lib/estado-carrito";
import { TarjetaMaquinaria } from "@/components/TarjetaMaquinaria";
import { MiniVehiculosAnimados } from "@/components/ui/MiniVehiculosAnimados";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Check,
  Plus,
  Phone,
  ShieldCheck,
  FileText,
  Truck,
  Wrench,
  CheckCircle2
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

  const mensajeWhatsApp = `Hola GRUPO GADAL, deseo cotizar el alquiler del equipo: ${maquinaria.nombre} (Modelo ${maquinaria.modelo}). ¿Me podrían enviar tarifas por favor?`;
  const urlWhatsApp = `https://wa.me/51962335073?text=${encodeURIComponent(mensajeWhatsApp)}`;

  return (
    <div className="bg-zinc-50/50 py-10 sm:py-14 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-8 overflow-x-auto whitespace-nowrap pb-1">
          <Link href="/" className="hover:text-[#21272A]">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/equipos" className="hover:text-[#21272A]">Catálogo</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-zinc-400">{maquinaria.categoria}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-[#21272A]">{maquinaria.nombre}</span>
        </nav>

        <MiniVehiculosAnimados className="mb-6" />

        {/* Bloque Superior: Galería y Acciones de Cotización */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Galería de Imágenes (7 cols en desktop) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Imagen Principal */}
            <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200">
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
                    className={`relative w-20 h-16 sm:w-24 sm:h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
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

          {/* Información y Botones de Compra/Cotización (5 cols) */}
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

              {/* Aspectos destacados rápidos */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-[#F1F1F1] text-xs">
                  <span className="text-zinc-500 block">Potencia Neta</span>
                  <span className="font-bold text-[#21272A] text-sm">{maquinaria.potenciaHp} HP</span>
                </div>
                <div className="p-3 rounded-lg bg-[#F1F1F1] text-xs">
                  <span className="text-zinc-500 block">Peso Operativo</span>
                  <span className="font-bold text-[#21272A] text-sm">{(maquinaria.pesoOperativoKg / 1000).toFixed(1)} Toneladas</span>
                </div>
              </div>
            </div>

            {/* Bloque de Acciones */}
            <div className="pt-6 border-t border-zinc-200 space-y-3">
              <button
                onClick={manejarAgregar}
                className={`w-full py-3.5 px-6 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                  agregadoReciente
                    ? "bg-emerald-600 text-white"
                    : "bg-[#FAAE34] hover:bg-[#e99e28] text-[#21272A]"
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

              <a
                href={urlWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-lg border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                Consultar Disponibilidad por WhatsApp
              </a>

              <div className="pt-3 flex items-center justify-between text-xs text-zinc-500 border-t border-zinc-100">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#FAAE34]" />
                  Inspección pre-entrega
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#FAAE34]" />
                  Despacho nacional
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Ficha Técnica: Tabla de Especificaciones y Aplicaciones */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tabla de Especificaciones Técnicas (2 cols) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-sm">
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
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
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

            <div className="bg-[#F9F2E6] rounded-2xl border border-[#FAAE34]/60 p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#21272A] font-bold text-sm">
                <Wrench className="w-4 h-4 text-[#FAAE34]" />
                Condiciones de Alquiler B2B
              </div>
              <p className="text-xs text-zinc-700 leading-relaxed">
                Contratos flexibles por mes o por campaña. Soporte técnico en sitio para resolución de incidencias. Opciones de transporte en cama baja puerta a puerta.
              </p>
              <Link
                href="/carrito"
                className="inline-block text-xs font-bold text-[#21272A] underline hover:text-amber-800"
              >
                Configurar requerimiento en el carrito →
              </Link>
            </div>
          </div>
        </div>

        {/* Sección: Equipos Relacionados */}
        {equiposRelacionados.length > 0 && (
          <div className="mt-16 pt-12 border-t border-zinc-200">
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
          </div>
        )}
      </div>
    </div>
  );
}
