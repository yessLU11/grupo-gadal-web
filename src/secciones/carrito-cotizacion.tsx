// src/secciones/carrito-cotizacion.tsx

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useCarritoStore } from "@/lib/estado-carrito";
import type { ItemCotizacion } from "@/types";
import {
  FormularioCotizacion,
  DatosFormularioCotizacion,
} from "@/components/FormularioCotizacion";
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  CheckCircle2,
  Store,
  ClipboardList,
  CheckCheck,
  ShoppingBag,
  MessageCircle,
  ShieldCheck,
  ArrowLeft,
  Clock,
  Truck,
  Sparkles,
  Cog
} from "lucide-react";

export function CarritoCotizacion() {
  const [montado, setMontado] = useState(false);
  const [pasoActual, setPasoActual] = useState<1 | 2 | 3>(2);
  const movimientoReducido = useReducedMotion();
  const [datosConfirmacion, setDatosConfirmacion] = useState<{
    codigo: string;
    datos: DatosFormularioCotizacion;
    equipos: ItemCotizacion[];
  } | null>(null);

  const items = useCarritoStore((state) => state.items);
  const eliminarEquipo = useCarritoStore((state) => state.eliminarEquipo);
  const actualizarCantidad = useCarritoStore((state) => state.actualizarCantidad);
  const actualizarTipoOperacion = useCarritoStore(
    (state) => state.actualizarTipoOperacion
  );
  const limpiarCarrito = useCarritoStore((state) => state.limpiarCarrito);

  useEffect(() => {
    setMontado(true);
  }, []);

  if (!montado) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="w-10 h-10 border-4 border-[#FAAE34] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const manejarEnvioExitoso = (datos: DatosFormularioCotizacion) => {
    const codigoGenerado = `GADAL-COT-${Math.floor(1000 + Math.random() * 9000)}`;
    setDatosConfirmacion({
      codigo: codigoGenerado,
      datos,
      equipos: [...items],
    });
    limpiarCarrito();
    setPasoActual(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative z-20 overflow-hidden bg-white py-10 sm:py-16 min-h-screen"
    >
      {/* 🌟 RESPLANDORES ÁMBAR DIFUMINADOS DE FONDO EN LOS BORDES */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#FAAE34]/15 blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-[#FAAE34]/15 blur-3xl z-0"
      />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BANNER DE STEPPER: Tienda → Carrito → Finalizar */}
        <div className="mb-10 max-w-3xl mx-auto bg-[#000000] text-white p-6 sm:p-7 rounded-3xl border border-zinc-800 shadow-xl">
          <div className="flex items-center justify-between relative max-w-xl mx-auto">
            <div className="absolute top-5 left-0 w-full h-1 bg-zinc-700 -z-0" />

            {/* Paso 1: Tienda */}
            <Link
              href="/equipos"
              className="relative z-10 flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-black border-2 transition-all duration-300 ${
                  pasoActual > 1
                    ? "bg-[#FAAE34] border-[#FAAE34] text-[#21272A]"
                    : "bg-[#21272A] border-[#FAAE34] text-[#FAAE34]"
                }`}
              >
                <Store className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold mt-2 text-zinc-300 group-hover:text-[#FAAE34] transition-colors">
                1. Catálogo
              </span>
            </Link>

            {/* Paso 2: Carrito */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-black border-2 transition-all duration-300 ${
                  pasoActual === 2
                    ? "bg-[#FAAE34] border-[#FAAE34] text-[#21272A] shadow-md ring-4 ring-[#FAAE34]/30"
                    : pasoActual > 2
                    ? "bg-[#FAAE34] border-[#FAAE34] text-[#21272A]"
                    : "bg-[#21272A] border-zinc-600 text-zinc-400"
                }`}
              >
                <ClipboardList className="w-5 h-5" />
              </div>
              <span
                className={`text-xs font-bold mt-2 ${
                  pasoActual === 2 ? "text-[#FAAE34]" : "text-zinc-400"
                }`}
              >
                2. Cotización
              </span>
            </div>

            {/* Paso 3: Finalizar */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-black border-2 transition-all duration-300 ${
                  pasoActual === 3
                    ? "bg-emerald-500 border-emerald-500 text-white shadow-md ring-4 ring-emerald-500/30"
                    : "bg-[#21272A] border-zinc-600 text-zinc-400"
                }`}
              >
                <CheckCheck className="w-5 h-5" />
              </div>
              <span
                className={`text-xs font-bold mt-2 ${
                  pasoActual === 3 ? "text-emerald-400" : "text-zinc-400"
                }`}
              >
                3. Finalizar
              </span>
            </div>
          </div>
        </div>

        {/* PANTALLA PASO 3: CONFIRMACIÓN FINAL */}
        {pasoActual === 3 && datosConfirmacion && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-white rounded-3xl border border-zinc-200/90 p-8 sm:p-10 shadow-2xl text-center space-y-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase font-black text-emerald-600 tracking-widest block">
                SOLICITUD REGISTRADA
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#21272A] mt-1">
                ¡Cotización Generada con Éxito!
              </h1>
              <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-normal max-w-md mx-auto">
                Hemos recibido su requerimiento formal. Nuestro equipo comercial se comunicará con usted a la brevedad posible.
              </p>
            </div>

            {/* Tarjeta de Código */}
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 inline-block w-full max-w-sm">
              <span className="text-xs text-zinc-500 font-medium block">
                Código de Referencia:
              </span>
              <span className="font-mono text-xl font-black text-[#21272A] tracking-wider">
                {datosConfirmacion.codigo}
              </span>
            </div>

            {/* Resumen de Datos */}
            <div className="text-left bg-zinc-50/70 p-5 sm:p-6 rounded-2xl border border-zinc-200/80 text-xs sm:text-sm space-y-2.5 text-zinc-700">
              <div className="flex justify-between border-b border-zinc-200/60 pb-2">
                <span className="font-medium text-zinc-500">Solicitante:</span>
                <span className="font-bold text-[#21272A]">
                  {datosConfirmacion.datos.nombresApellidos}
                </span>
              </div>
              {datosConfirmacion.datos.razonSocial && (
                <div className="flex justify-between border-b border-zinc-200/60 pb-2">
                  <span className="font-medium text-zinc-500">Razón Social:</span>
                  <span className="font-bold text-[#21272A]">
                    {datosConfirmacion.datos.razonSocial}
                  </span>
                </div>
              )}
              <div className="flex justify-between border-b border-zinc-200/60 pb-2">
                <span className="font-medium text-zinc-500">Ubicación del Proyecto:</span>
                <span className="font-bold text-[#21272A]">
                  {datosConfirmacion.datos.departamento}, {datosConfirmacion.datos.pais}
                </span>
              </div>
              <div className="flex justify-between border-b border-zinc-200/60 pb-2">
                <span className="font-medium text-zinc-500">Contacto:</span>
                <span className="font-bold text-[#21272A]">
                  {datosConfirmacion.datos.codigoPais} {datosConfirmacion.datos.celular}
                </span>
              </div>

              {datosConfirmacion.datos.equipoAdicional && (
                <div className="flex justify-between border-b border-zinc-200/60 pb-2">
                  <span className="font-medium text-zinc-500">Equipo Adicional:</span>
                  <span className="font-bold text-[#21272A]">
                    {datosConfirmacion.datos.equipoAdicional}
                  </span>
                </div>
              )}

              <div className="pt-2">
                <span className="font-medium text-zinc-500 block mb-1.5">
                  Equipos Solicitados ({datosConfirmacion.equipos.length}):
                </span>
                <ul className="list-disc list-inside space-y-1 font-semibold text-[#21272A]">
                  {datosConfirmacion.equipos.map((item, idx) => (
                    <li key={idx}>
                      {item.cantidad}x {item.maquinaria.nombre} ({item.tipoOperacion})
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <a
                href={`https://wa.me/51962335073?text=Hola%20GRUPO%20GADAL,%20acabo%20de%20generar%20la%20solicitud%20${datosConfirmacion.codigo}%20a%20nombre%20de%20${encodeURIComponent(
                  datosConfirmacion.datos.nombresApellidos
                )}.%20Deseo%20hacerle%20seguimiento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Seguimiento por WhatsApp
              </a>

              <Link
                href="/equipos"
                className="py-3.5 px-6 rounded-xl border border-zinc-300 font-bold text-sm text-[#21272A] hover:bg-zinc-50 transition-colors text-center"
              >
                Volver al Catálogo
              </Link>
            </div>
          </motion.div>
        )}

        {/* PANTALLA PASO 2: CARRITO VACÍO */}
        {pasoActual === 2 && items.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto bg-white rounded-3xl border border-zinc-200/90 p-8 sm:p-10 text-center space-y-5 shadow-xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#FAAE34] flex items-center justify-center mx-auto shadow-xs">
              <ShoppingBag className="w-8 h-8" />
            </div>

            <h2 className="text-xl font-extrabold text-[#21272A]">
              Su lista de cotización está vacía
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
              Explore nuestro catálogo de maquinaria pesada y añada los equipos que requiere para su proyecto de obra o minería.
            </p>

            <Link
              href="/equipos"
              className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl bg-[#FAAE34] text-[#21272A] font-extrabold text-sm hover:bg-[#e99e28] transition-colors shadow-md btn-piston-hidraulico"
            >
              Ver Catálogo de Flota
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}

        {/* PANTALLA PASO 2: CON EQUIPOS */}
        {pasoActual === 2 && items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1">
          
                
                <p className="text-xs sm:text-sm text-zinc-600 font-normal">
                  Verifique las unidades seleccionadas y complete los datos de su empresa para formalizar el requerimiento.
                </p>
              </div>

              <Link
                href="/equipos"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#21272A] hover:text-[#FAAE34] transition-colors self-start sm:self-auto"
              >
                <ArrowLeft className="w-4 h-4" />
                Agregar más equipos
              </Link>
            </div>

            {/* Layout en 2 Columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Columna 1: Resumen de Equipos Seleccionados (Lg: 5 cols) */}
              <div className="lg:col-span-5 space-y-5 order-1 lg:order-1">
                <div className="bg-white rounded-3xl border border-zinc-200/90 p-5 sm:p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3.5 border-b border-zinc-100">
                    <span className="font-extrabold text-[#21272A] text-base flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#FAAE34]" />
                      Equipos Seleccionados ({items.length})
                    </span>
                    <button
                      onClick={limpiarCarrito}
                      className="text-xs text-red-600 hover:underline font-bold"
                    >
                      Vaciar lista
                    </button>
                  </div>

                  <div className="divide-y divide-zinc-100 space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="pt-4 first:pt-0 flex gap-4 items-start"
                      >
                        {/* Foto miniatura */}
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shrink-0">
                          <Image
                            src={item.maquinaria.imagenPrincipal}
                            alt={item.maquinaria.nombre}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Detalles del equipo */}
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-extrabold uppercase text-[#FAAE34] tracking-wider block">
                            {item.maquinaria.categoria}
                          </span>
                          <h4 className="text-sm font-extrabold text-[#21272A] truncate">
                            {item.maquinaria.nombre}
                          </h4>
                          <span className="text-xs text-zinc-500 block mb-2 font-normal">
                            {item.maquinaria.capacidad} | {item.maquinaria.potenciaHp} HP
                          </span>

                          {/* Contador de Cantidad y Eliminar */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border border-zinc-300 rounded-lg bg-zinc-50">
                              <button
                                onClick={() =>
                                  actualizarCantidad(item.id, item.cantidad - 1)
                                }
                                className="p-1.5 text-zinc-600 hover:text-black transition-colors"
                                aria-label="Disminuir cantidad"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="px-3 text-xs font-black text-[#21272A]">
                                {item.cantidad}
                              </span>
                              <button
                                onClick={() =>
                                  actualizarCantidad(item.id, item.cantidad + 1)
                                }
                                className="p-1.5 text-zinc-600 hover:text-black transition-colors"
                                aria-label="Aumentar cantidad"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              onClick={() => eliminarEquipo(item.id)}
                              className="text-zinc-400 hover:text-red-600 p-1 transition-colors"
                              aria-label="Eliminar equipo"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3.5 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#FAAE34]" />
                      Soporte y traslado coordinado
                    </span>
                    <Link
                      href="/equipos"
                      className="text-[#21272A] font-extrabold hover:text-[#FAAE34] transition-colors"
                    >
                      + Añadir más
                    </Link>
                  </div>
                </div>

              </div>

              {/* Columna 2: Formulario de Cotización B2B (Lg: 7 cols) */}
              <div className="lg:col-span-7 order-2 lg:order-2">
                <div className="bg-white rounded-3xl border border-zinc-200/80 p-2 sm:p-4 shadow-xl">
                  <FormularioCotizacion
                    mostrarTipoOperacion={true}
                    alEnviarExitoso={manejarEnvioExitoso}
                    textoBoton="Generar Solicitud de Cotización Formal"
                  />
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}