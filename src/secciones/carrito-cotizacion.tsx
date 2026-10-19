// src/secciones/carrito-cotizacion.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
  ArrowLeft
} from "lucide-react";

export function CarritoCotizacion() {
  const [montado, setMontado] = useState(false);
  const [pasoActual, setPasoActual] = useState<1 | 2 | 3>(2);
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
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#FAAE34] border-t-transparent rounded-full animate-spin" />
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
    <div className="bg-zinc-50/50 py-10 sm:py-14 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BANNER OSCURO DE STEPPER: Tienda → Carrito → Finalizar (Diseño Figma) */}
        <div className="mb-10 max-w-3xl mx-auto bg-[#21272A] text-white p-6 sm:p-7 rounded-2xl border border-zinc-800 shadow-md">
          <div className="flex items-center justify-between relative max-w-xl mx-auto">
            <div className="absolute top-5 left-0 w-full h-1 bg-zinc-700 -z-0" />

            {/* Paso 1: Tienda */}
            <Link
              href="/equipos"
              className="relative z-10 flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                  pasoActual > 1
                    ? "bg-[#FAAE34] border-[#FAAE34] text-[#21272A]"
                    : "bg-[#21272A] border-[#FAAE34] text-[#FAAE34]"
                }`}
              >
                <Store className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold mt-2 text-zinc-300">
                1. Tienda
              </span>
            </Link>

            {/* Paso 2: Carrito */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
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
                2. Carrito
              </span>
            </div>

            {/* Paso 3: Finalizar */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
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
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-emerald-200 p-8 sm:p-10 shadow-sm text-center space-y-6 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase font-extrabold text-emerald-600 tracking-wider">
                Solicitud Registrada
              </span>
              <h1 className="text-[26px] md:text-[30px] font-bold text-[#21272A] mt-1">
                ¡Cotización Generada con Éxito!
              </h1>
              <p className="text-sm text-zinc-600 mt-2">
                Hemos recibido su requerimiento formal. Nuestro equipo comercial
                se comunicará con usted a la brevedad posible.
              </p>
            </div>

            {/* Tarjeta de Código */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 inline-block w-full max-w-sm">
              <span className="text-xs text-zinc-500 font-medium block">
                Código de Referencia:
              </span>
              <span className="font-mono text-xl font-extrabold text-[#21272A] tracking-wider">
                {datosConfirmacion.codigo}
              </span>
            </div>

            {/* Resumen de Datos */}
            <div className="text-left bg-zinc-50/70 p-5 rounded-xl border border-zinc-200 text-xs space-y-2 text-zinc-700">
              <div className="flex justify-between">
                <span className="font-medium text-zinc-500">Solicitante:</span>
                <span className="font-bold text-[#21272A]">
                  {datosConfirmacion.datos.nombresApellidos}
                </span>
              </div>
              {datosConfirmacion.datos.razonSocial && (
                <div className="flex justify-between">
                  <span className="font-medium text-zinc-500">Razón Social:</span>
                  <span className="font-bold text-[#21272A]">
                    {datosConfirmacion.datos.razonSocial}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="font-medium text-zinc-500">Ubicación del Proyecto:</span>
                <span className="font-bold text-[#21272A]">
                  {datosConfirmacion.datos.departamento}, {datosConfirmacion.datos.pais}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-zinc-500">Contacto:</span>
                <span className="font-bold text-[#21272A]">
                  {datosConfirmacion.datos.codigoPais} {datosConfirmacion.datos.celular} | {datosConfirmacion.datos.correo}
                </span>
              </div>
              <div className="pt-2 border-t border-zinc-200">
                <span className="font-medium text-zinc-500 block mb-1">
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
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/51962335073?text=Hola%20GRUPO%20GADAL,%20acabo%20de%20generar%20la%20solicitud%20${datosConfirmacion.codigo}%20a%20nombre%20de%20${encodeURIComponent(
                  datosConfirmacion.datos.nombresApellidos
                )}.%20Deseo%20hacerle%20seguimiento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-lg bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Seguimiento por WhatsApp
              </a>

              <Link
                href="/equipos"
                className="py-3 px-5 rounded-lg border border-zinc-300 font-bold text-sm text-zinc-700 hover:bg-zinc-50 text-center"
              >
                Volver al Catálogo
              </Link>
            </div>
          </div>
        )}

        {/* PANTALLA PASO 2: CARRITO VACÍO */}
        {pasoActual === 2 && items.length === 0 && (
          <div className="max-w-md mx-auto bg-white rounded-2xl border border-zinc-200 p-10 text-center space-y-5 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-[#FAAE34] flex items-center justify-center mx-auto">
              <ShoppingBag className="w-8 h-8" />
            </div>

            <h2 className="text-xl font-bold text-[#21272A]">
              Su lista de cotización está vacía
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Explore nuestro catálogo de maquinaria pesada y añada los equipos que requiere para su proyecto de obra o minería.
            </p>

            <Link
              href="/equipos"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-lg bg-[#FAAE34] text-[#21272A] font-extrabold text-sm hover:bg-[#e99e28] transition-colors"
            >
              Ver Catálogo de Flota
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* PANTALLA PASO 2: CON EQUIPOS (2 columnas en desktop, apiladas verticalmente en móvil: resumen primero, formulario después) */}
        {pasoActual === 2 && items.length > 0 && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-[26px] md:text-[30px] font-bold text-[#21272A]">
                  Revisión y Envío de Cotización
                </h1>
                <p className="text-sm text-zinc-600">
                  Verifique las unidades seleccionadas y complete los datos de su empresa para formalizar el requerimiento.
                </p>
              </div>

              <Link
                href="/equipos"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-zinc-600 hover:text-[#FAAE34] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Agregar más equipos
              </Link>
            </div>

            {/* Layout responsivo: en móvil se apila mostrando primero el resumen de equipos y luego el formulario */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Columna 1: Resumen de Equipos Seleccionados (Lg: 5 cols / Móvil: Primero en el orden) */}
              <div className="lg:col-span-5 space-y-4 order-1 lg:order-1">
                <div className="bg-white rounded-2xl border border-zinc-200 p-5 sm:p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                    <span className="font-bold text-[#21272A] text-base">
                      Equipos Seleccionados ({items.length})
                    </span>
                    <button
                      onClick={limpiarCarrito}
                      className="text-xs text-red-600 hover:underline font-semibold"
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
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-zinc-100 border border-zinc-200 shrink-0">
                          <Image
                            src={item.maquinaria.imagenPrincipal}
                            alt={item.maquinaria.nombre}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Detalles del equipo */}
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-bold uppercase text-[#FAAE34] tracking-wider block">
                            {item.maquinaria.categoria}
                          </span>
                          <h4 className="text-sm font-bold text-[#21272A] truncate">
                            {item.maquinaria.nombre}
                          </h4>
                          <span className="text-xs text-zinc-500 block mb-2">
                            {item.maquinaria.capacidad} • {item.maquinaria.potenciaHp} HP
                          </span>

                          {/* Toggle Operación: Alquiler / Compra */}
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[11px] text-zinc-500 font-medium">Modo:</span>
                            <div className="inline-flex rounded border border-zinc-200 p-0.5 text-xs">
                              <button
                                type="button"
                                onClick={() =>
                                  actualizarTipoOperacion(item.id, "Alquiler")
                                }
                                className={`px-2 py-0.5 rounded font-semibold ${
                                  item.tipoOperacion === "Alquiler"
                                    ? "bg-[#21272A] text-white"
                                    : "text-zinc-600"
                                }`}
                              >
                                Alquiler
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  actualizarTipoOperacion(item.id, "Compra")
                                }
                                className={`px-2 py-0.5 rounded font-semibold ${
                                  item.tipoOperacion === "Compra"
                                    ? "bg-[#21272A] text-white"
                                    : "text-zinc-600"
                                }`}
                              >
                                Compra
                              </button>
                            </div>
                          </div>

                          {/* Contador de Cantidad y Eliminar */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border border-zinc-300 rounded-lg bg-zinc-50">
                              <button
                                onClick={() =>
                                  actualizarCantidad(item.id, item.cantidad - 1)
                                }
                                className="p-1.5 text-zinc-600 hover:text-black"
                                aria-label="Disminuir cantidad"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="px-2.5 text-xs font-bold text-[#21272A]">
                                {item.cantidad}
                              </span>
                              <button
                                onClick={() =>
                                  actualizarCantidad(item.id, item.cantidad + 1)
                                }
                                className="p-1.5 text-zinc-600 hover:text-black"
                                aria-label="Aumentar cantidad"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              onClick={() => eliminarEquipo(item.id)}
                              className="text-zinc-400 hover:text-red-600 p-1"
                              aria-label="Eliminar equipo"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#FAAE34]" />
                      Soporte y traslado coordinado
                    </span>
                    <Link
                      href="/equipos"
                      className="text-[#FAAE34] font-bold hover:underline"
                    >
                      + Añadir más
                    </Link>
                  </div>
                </div>
              </div>

              {/* Columna 2: Formulario de Cotización B2B (Lg: 7 cols / Móvil: Segundo en el orden) */}
              <div className="lg:col-span-7 order-2 lg:order-2">
                <FormularioCotizacion
                  mostrarTipoOperacion={true}
                  alEnviarExitoso={manejarEnvioExitoso}
                  textoBoton="Generar Solicitud de Cotización Formal"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
