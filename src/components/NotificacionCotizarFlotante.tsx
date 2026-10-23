// src/components/NotificacionCotizarFlotante.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Truck, X, ArrowRight } from "lucide-react";

export function NotificacionCotizarFlotante() {
  const [visible, setVisible] = useState(false);
  const [descartado, setDescartado] = useState(false);

  useEffect(() => {
    if (descartado) return;

    // Mostrar primera vez a los 12 segundos
    const primerTimer = setTimeout(() => {
      setVisible(true);
    }, 12000);

    // Luego repetir cada 5 minutos si está cerrado
    const intervalo = setInterval(() => {
      setVisible((prev) => {
        if (!descartado && !prev) {
          return true;
        }
        return prev;
      });
    }, 300000);

    return () => {
      clearTimeout(primerTimer);
      clearInterval(intervalo);
    };
  }, [descartado]);

  if (!visible || descartado) return null;

  return (
    <aside
      aria-label="Aviso de cotización disponible"
      className="fixed bottom-24 left-4 sm:left-6 z-40 max-w-sm bg-[#21272A] text-white p-4 rounded-2xl shadow-2xl border border-amber-500/40 animacion-avance-tractor backdrop-blur-md"
    >
      <div className="flex items-start gap-3 relative">
        {/* Icono de Maquinaria / Tractor animado */}
        <div className="w-10 h-10 rounded-xl bg-[#FAAE34] text-[#21272A] flex items-center justify-center shrink-0 shadow-md">
          <Truck className="w-5 h-5 animate-pulse" />
        </div>

        <div className="flex-1 pr-6">
          <span className="inline-block text-[10px] font-black uppercase tracking-wider text-[#FAAE34] bg-amber-500/10 px-2 py-0.5 rounded-full mb-1">
            Flota Disponible
          </span>
          <h4 className="text-sm font-bold text-white leading-snug">
            ¿Necesitas maquinaria en tu obra?
          </h4>
          <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
            Cotiza excavadoras, tractores y volquetes con despacho nacional inmediato.
          </p>

          <div className="mt-3 flex items-center gap-2">
            <Link
              href="/carrito"
              onClick={() => setVisible(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAAE34] text-[#21272A] text-xs font-black hover:bg-[#e99e28] transition-colors btn-piston-hidraulico"
            >
              Cotizar ahora
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setVisible(false)}
              className="text-xs text-zinc-400 hover:text-white px-2 py-1 transition-colors"
            >
              Más tarde
            </button>
          </div>
        </div>

        {/* Botón Cerrar */}
        <button
          onClick={() => {
            setVisible(false);
            setDescartado(true);
          }}
          className="absolute top-0 right-0 p-1 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800 transition-colors"
          aria-label="Cerrar notificación"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
