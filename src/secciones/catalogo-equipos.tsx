"use client";

import React, { useState, useMemo } from "react";
import { EncabezadoSeccion } from "@/components/EncabezadoSeccion";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { LISTA_MAQUINARIAS } from "@/lib/datos-mock";
import { TarjetaMaquinaria } from "@/components/TarjetaMaquinaria";
import { MiniVehiculosAnimados } from "@/components/ui/MiniVehiculosAnimados";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  X,
  RotateCcw,
  SlidersHorizontal,
  ClipboardList, // <-- Agregar esta importación
  ArrowRight
} from "lucide-react";

export function CatalogoEquipos() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [modalFiltrosMovil, setModalFiltrosMovil] = useState(false);

  // Filtros desde la URL
  const sectorActual = searchParams.get("sector") || "todos";
  const tipoActual = searchParams.get("tipo") || "todos";
  const busquedaActual = searchParams.get("busqueda") || "";

  // Opciones únicas disponibles
  const sectores = ["Todos", "Minería", "Construcción"];
  const tipos = [
    "todos",
    "Excavadoras",
    "Cargadores Frontales",
    "Tractores",
    "Rodillos",
    "Retroexcavadoras",
    "Volquetes"
  ];

  // Actualizar parámetros de búsqueda en la URL
  const actualizarFiltro = (clave: string, valor: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (valor && valor !== "todos") {
      params.set(clave, valor);
    } else {
      params.delete(clave);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const limpiarFiltros = () => {
    router.push(pathname, { scroll: false });
    setModalFiltrosMovil(false);
  };

  // Filtrado de equipos
  const equiposFiltrados = useMemo(() => {
    return LISTA_MAQUINARIAS.filter((equipo) => {
      const coincideSector =
        sectorActual === "todos" || equipo.sector === sectorActual;
      const coincideTipo =
        tipoActual === "todos" || equipo.categoria === tipoActual;
      const coincideBusqueda =
        !busquedaActual ||
        equipo.nombre.toLowerCase().includes(busquedaActual.toLowerCase()) ||
        equipo.marca.toLowerCase().includes(busquedaActual.toLowerCase()) ||
        equipo.modelo.toLowerCase().includes(busquedaActual.toLowerCase()) ||
        equipo.capacidad.toLowerCase().includes(busquedaActual.toLowerCase());

      return coincideSector && coincideTipo && coincideBusqueda;
    });
  }, [sectorActual, tipoActual, busquedaActual]);

  const hayFiltrosActivos =
    sectorActual !== "todos" || tipoActual !== "todos" || busquedaActual !== "";

  // 1. AJUSTE DE COLORES EN EL INTERIOR DE LOS FILTROS
  const ContenidoFiltros = (
    <div className="space-y-5">
      {/* Buscador */}
      <div>
        <label className="text-xs font-bold text-zinc-800 block mb-1.5 uppercase tracking-wider">
          Búsqueda por texto
        </label>
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
          <Input
            value={busquedaActual}
            onChange={(e) => actualizarFiltro("busqueda", e.target.value)}
            placeholder="Ej. CAT, Komatsu, 36 Ton..."
            className="pl-9 bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400 text-xs focus-visible:ring-[#FAAE34] h-9"
          />
        </div>
      </div>

      {/* Filtro por Sector */}
      <div>
        <label className="text-xs font-bold text-zinc-800 block mb-1.5 uppercase tracking-wider">
          Sector del Proyecto
        </label>
        <div className="space-y-1">
          {sectores.map((s) => (
            <button
              key={s}
              onClick={() => {
                actualizarFiltro("sector", s);
                setModalFiltrosMovil(false);
              }}
              className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-all flex items-center justify-between ${
                sectorActual === s
                  ? "bg-[#FAAE34] text-[#21272A] font-bold"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
            >
              <span>{s === "todos" ? "Todos los sectores" : s}</span>
              {sectorActual === s && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#21272A]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Filtro por Tipo de Maquinaria */}
      <div>
        <label className="text-xs font-bold text-zinc-800 block mb-1.5 uppercase tracking-wider">
          Tipo de Maquinaria
        </label>
        <div className="space-y-1">
          {tipos.map((t) => (
            <button
              key={t}
              onClick={() => {
                actualizarFiltro("tipo", t);
                setModalFiltrosMovil(false);
              }}
              className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-all flex items-center justify-between ${
                tipoActual === t
                  ? "bg-[#FAAE34] text-[#21272A] font-bold"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
            >
              <span>{t === "todos" ? "Todas las categorías" : t}</span>
              {tipoActual === t && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#21272A]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Botón de Limpiar */}
      {hayFiltrosActivos && (
        <button
          onClick={limpiarFiltros}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-zinc-200 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-zinc-500" />
          Restablecer Filtros
        </button>
      )}
    </div>
  );

return (
    <div className="bg-white">
      <EncabezadoSeccion
        titulo="Catálogo de Maquinaria"
        subtitulo="Filtre por sector o tipo de equipo para encontrar la maquinaria que su frente de trabajo requiere."
        imagen="/images/encabezado/encabezado-equipos.jpg"
      />
      <MiniVehiculosAnimados className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      {/* FONDO DE LA SECCIÓN GRIS */}
      <div className="bg-zinc-100 py-10 sm:py-14 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Barra superior de control móvil */}
          <div className="md:hidden flex items-center justify-between mb-6 bg-white p-3 rounded-xl border border-zinc-200 shadow-sm">
            <button
              onClick={() => setModalFiltrosMovil(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FAAE34] text-[#21272A] font-bold text-sm shadow-sm"
            >
              <Filter className="w-4 h-4" />
              Filtros
              {hayFiltrosActivos && (
                <span className="w-2 h-2 rounded-full bg-[#21272A]" />
              )}
            </button>

            <span className="text-xs text-zinc-600 font-semibold">
              {equiposFiltrados.length} equipo(s) disponible(s)
            </span>
          </div>

          {/* Layout Principal */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* SIDEBAR DESKTOP */}
            <aside className="hidden md:block col-span-1">
              <div className="sticky top-24 bg-white text-zinc-900 p-5 rounded-2xl border border-zinc-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
                  <span className="font-bold text-zinc-900 text-xs uppercase tracking-wider flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-[#FAAE34]" />
                    Filtros
                  </span>
                  {hayFiltrosActivos && (
                    <button
                      onClick={limpiarFiltros}
                      className="text-xs text-zinc-500 hover:text-zinc-900 hover:underline font-bold"
                    >
                      Limpiar
                    </button>
                  )}
                </div>

                {ContenidoFiltros}
              </div>
            </aside>

            {/* Grid de Maquinarias */}
            <main className="col-span-1 md:col-span-3">
              <div className="hidden md:flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-zinc-700">
                  Mostrando <strong className="text-[#21272A]">{equiposFiltrados.length}</strong> maquinaria(s)
                </span>

                {hayFiltrosActivos && (
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-zinc-500">Filtro aplicado:</span>
                    {sectorActual !== "todos" && (
                      <span className="px-2 py-0.5 rounded bg-zinc-200 text-zinc-800 font-bold">
                        {sectorActual}
                      </span>
                    )}
                    {tipoActual !== "todos" && (
                      <span className="px-2 py-0.5 rounded bg-zinc-200 text-zinc-800 font-bold">
                        {tipoActual}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {equiposFiltrados.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {equiposFiltrados.map((m) => (
                    <TarjetaMaquinaria key={m.id} maquinaria={m} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-zinc-200 p-12 text-center space-y-4 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center mx-auto">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#21272A]">
                    No se encontraron maquinarias con los filtros seleccionados
                  </h3>
                  <p className="text-sm text-zinc-500 max-w-md mx-auto">
                    Intente ajustando los términos de búsqueda o restableciendo los filtros para ver toda la flota disponible.
                  </p>
                  <button
                    onClick={limpiarFiltros}
                    className="px-4 py-2 rounded-lg bg-[#FAAE34] text-[#21272A] font-bold text-xs btn-piston-hidraulico shadow-sm"
                  >
                    Restablecer todos los filtros
                  </button>
                </div>
              )}

              {/* Banner inferior con botón de contacto corregido */}
              <div className="mt-12 p-8 rounded-2xl bg-white border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#21272A]">
                    ¿No encuentras la máquina específica que buscas?
                  </h3>
                  <p className="text-sm text-zinc-600">
                    Podemos gestionar flotas adicionales o configuraciones especiales directamente para tu proyecto.
                  </p>
                </div>
                
                <Link
                  href="/contacto"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#FAAE34] text-[#21272A] font-extrabold text-sm whitespace-nowrap shadow-sm btn-piston-hidraulico"
                >
                  <ClipboardList className="w-5 h-5" />
                  Consultar Ahora
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </main>
          </div>
        </div>

        {/* Modal Móvil */}
        {modalFiltrosMovil && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4">
            <div className="w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl p-6 max-h-[85vh] overflow-y-auto space-y-5 animate-in slide-in-from-bottom">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
                <span className="font-bold text-base text-[#21272A]">
                  Filtros de Catálogo
                </span>
                <button
                  onClick={() => setModalFiltrosMovil(false)}
                  className="p-1 rounded-lg text-zinc-500 hover:bg-zinc-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {ContenidoFiltros}

              <div className="pt-3 border-t border-zinc-200 flex gap-3">
                <button
                  onClick={() => setModalFiltrosMovil(false)}
                  className="flex-1 py-3 rounded-lg bg-[#FAAE34] text-[#21272A] font-extrabold text-sm text-center"
                >
                  Ver {equiposFiltrados.length} Equipos
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}