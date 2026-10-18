// src/secciones/llamado-accion.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, ClipboardList } from "lucide-react";

export function LlamadoAccion() {
  return (
    <section className="relative py-60 sm:py-50 bg-white text-[#21272A] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAAE34]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FAAE34]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#FAAE34] block">
          Inicie su Requerimiento Hoy
        </span>

        <h2 className="text-[26px] md:text-[34px] font-bold leading-tight max-w-3xl mx-auto text-[#21272A]">
          ¿Listo para equipar su obra con maquinaria pesada de alto rendimiento?
        </h2>

        <p className="text-[15px] md:text-[16px] text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Reciba una cotización formal y asesoría técnica directa sin intermediarios. Coordinamos despachos a cualquier punto del país.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/carrito"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#FAAE34] hover:bg-[#e99e28] text-[#21272A] font-extrabold text-sm transition-all shadow-lg active:scale-95"
          >
            <ClipboardList className="w-5 h-5" />
            Solicitar Cotización
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/51962335073"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-zinc-300 hover:border-[#FAAE34] text-[#21272A] hover:text-[#FAAE34] font-bold text-sm bg-white transition-colors"
          >
            <Phone className="w-4 h-4 text-[#FAAE34]" />
            Hablar con un Asesor por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}