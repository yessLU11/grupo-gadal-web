// src/components/BarraNavegacion.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useCarritoStore } from "@/lib/estado-carrito";
import { Menu, X, ShoppingCart, ChevronRight, Phone, Sparkles } from "lucide-react";

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
    { nombre: "Equipos", ruta: "/equipos", destacada: true },
    { nombre: "Proyectos", ruta: "/proyectos" },
    { nombre: "Blog", ruta: "/blog" },
    { nombre: "Contacto", ruta: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#000000]/90 backdrop-blur-md shadow-2xl py-2.5 border-b border-zinc-800/80"
            : "bg-[#000000] border-b border-zinc-800 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LOGO ESTÁTICO Y ELEGANTE */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 sm:h-14 w-auto flex items-center justify-center">
              <img
                src="/logo-gadal.png"
                alt="Logo GRUPO GADAL"
                className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:brightness-110"
              />
            </div>
          </Link>

          {/* Enlaces Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {enlaces.map((enlace) => {
              const activo = pathname.startsWith(enlace.ruta);
              return (
                <Link
                  key={enlace.ruta}
                  href={enlace.ruta}
                  className={`text-[15px] font-medium transition-all relative py-1.5 flex items-center gap-1.5 ${
                    activo
                      ? "text-[#FAAE34] font-bold"
                      : "text-zinc-200 hover:text-[#FAAE34]"
                  }`}
                >
                  <span>{enlace.nombre}</span>

                  {/* INCENTIVO VISTOSO PERO SUTIL EN "EQUIPOS" */}
                  {enlace.destacada && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#FAAE34] text-[#21272A] flex items-center gap-1 shadow-sm">
                      <Sparkles className="w-2.5 h-2.5 fill-current" />
                      
                    </span>
                  )}

                  {activo && (
                    <motion.span
                      layoutId="linea-activa-nav"
                      className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#FAAE34] rounded-full shadow-[0_0_8px_#FAAE34]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Acciones Derecha (Carrito y Cotizador) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Botón Carrito de Cotización */}
            <Link
              href="/carrito"
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl border border-zinc-700/80 hover:border-[#FAAE34] text-white hover:bg-zinc-800/80 transition-all shadow-sm"
              aria-label="Ver cotización en curso"
            >
              <ShoppingCart className="w-5 h-5 text-[#FAAE34]" />
              {montado && totalItems > 0 && (
                <span className="flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-[#FAAE34] text-[#21272A] text-xs font-black shadow-md">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* CTA Cotizar Flota */}
            <Link
              href="/carrito"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#FAAE34] text-[#21272A] font-extrabold text-sm btn-piston-hidraulico shadow-md active:scale-95"
            >
              Cotizar Flota
            </Link>

            {/* Botón móvil hamburguesa */}
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="md:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
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
          <div className="md:hidden bg-[#181C1E] border-t border-zinc-800 px-4 pt-4 pb-6 mt-3 shadow-2xl text-white">
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
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-medium transition-all ${
                      activo
                        ? "bg-[#FAAE34]/15 text-[#FAAE34] font-bold border-l-4 border-[#FAAE34]"
                        : "text-zinc-300 hover:bg-zinc-800/60"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {enlace.nombre}
                      {enlace.destacada && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-[#FAAE34] text-[#21272A]">
                          CATÁLOGO
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 text-zinc-500" />
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-zinc-800 mt-2 flex flex-col gap-2.5">
                <Link
                  href="/carrito"
                  onClick={() => setMenuAbierto(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#FAAE34] text-[#21272A] font-extrabold text-center shadow-md"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Ver Carrito de Cotización ({montado ? totalItems : 0})
                </Link>

                <a
                  href="https://wa.me/51962335073"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-zinc-700 text-zinc-200 font-bold text-sm bg-zinc-900/80"
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