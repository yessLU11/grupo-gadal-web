// src/components/BarraNavegacion.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCarritoStore } from "@/lib/estado-carrito";
import { Menu, X, ShoppingCart, ChevronRight, Phone } from "lucide-react";


export function BarraNavegacion() {
  const pathname = usePathname();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Evitar error de hidratación con el store persistido
  const [montado, setMontado] = useState(false);
  const totalItems = useCarritoStore((state) => state.obtenerTotalItems());

  useEffect(() => {
    setMontado(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const enlaces = [
  
    { nombre: "Nosotros", ruta: "/nosotros" },
    { nombre: "Equipos", ruta: "/equipos" },
    { nombre: "Proyectos", ruta: "/proyectos" },
    { nombre: "Blog", ruta: "/blog" },
    { nombre: "Contacto", ruta: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">

      {/* barra de contacto está aparte */}
      <nav
        className={`w-full transition-all duration-200 ${
          scrolled
            ? "bg-[#000000]/80 backdrop-blur-md shadow-lg py-3"
            : "bg-[#000000] border-b border-zinc-800 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo: única forma de volver a Inicio  */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-auto flex items-center justify-center group-hover:scale-[1.02] transition-transform">
              {/* Logo subido por el usuario */}
              <img
                src="/logo-gadal.png"
                alt="Logo GRUPO GADAL"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </Link>

          {/* Enlaces Desktop : Nosotros, Equipos, Proyectos, Blog, Contacto */}
          <div className="hidden md:flex items-center gap-7">
            {enlaces.map((enlace) => {
              const activo = pathname.startsWith(enlace.ruta);
              return (
                <Link
                  key={enlace.ruta}
                  href={enlace.ruta}
                  className={`text-[15px] font-medium transition-colors relative py-1 nav-linea-industrial ${
                    activo ? "text-[#FAAE34] font-bold" : "text-zinc-200 hover:text-[#FAAE34]"
                  }`}
                >
                  {enlace.nombre}
                  {activo && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#FAAE34] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Acciones derecha */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Botón Carrito de Cotización */}
            <Link
              href="/carrito"
              className="relative flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-700 hover:border-[#FAAE34] text-white hover:bg-zinc-800 transition-colors"
              aria-label="Ver cotización en curso"
            >
              <ShoppingCart className="w-5 h-5 text-[#FAAE34]" />
              {montado && totalItems > 0 && (
                <span className="flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-[#FAAE34] text-[#21272A] text-xs font-bold shadow-sm">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* CTA Cotizar Flota */}
            <Link
              href="/carrito"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#FAAE34] text-[#21272A] font-extrabold text-sm btn-piston-hidraulico shadow-sm"
            >
              Cotizar Flota
            </Link>

            {/* Botón móvil hamburguesa */}
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Abrir menú"
            >
              {menuAbierto ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {menuAbierto && (
          <div className="md:hidden bg-white border-t border-zinc-200 px-4 pt-3 pb-6 mt-3 shadow-lg">
            <div className="flex flex-col gap-2">
              {enlaces.map((enlace) => {
                const activo =
                  enlace.ruta === "/"
                    ? pathname === "/"
                    : pathname.startsWith(enlace.ruta);

                return (
                  <Link
                    key={enlace.ruta}
                    href={enlace.ruta}
                    onClick={() => setMenuAbierto(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      activo
                        ? "bg-amber-50 text-[#21272A] font-bold border-l-4 border-[#FAAE34]"
                        : "text-zinc-700 hover:bg-zinc-50"
                    }`}
                  >
                    <span>{enlace.nombre}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-zinc-100 mt-2 flex flex-col gap-2.5">
                <Link
                  href="/carrito"
                  onClick={() => setMenuAbierto(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#FAAE34] text-[#21272A] font-bold text-center"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Ver Carrito de Cotización ({montado ? totalItems : 0})
                </Link>

                <a
                  href="https://wa.me/51962335073"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-zinc-300 text-zinc-800 font-semibold text-sm"
                >
                  <Phone className="w-4 h-4 text-[#FAAE34]" />
                  WhatsApp Comercial Directo
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
