// src/secciones/servicios-inicio.tsx
import React from "react";
import { LISTA_SERVICIOS } from "@/lib/datos-mock";
import { Truck, Wrench, Compass, ShieldCheck } from "lucide-react";

const MAPA_ICONOS: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-7 h-7 text-[#21272A]" />,
  Wrench: <Wrench className="w-7 h-7 text-[#21272A]" />,
  Compass: <Compass className="w-7 h-7 text-[#21272A]" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-[#21272A]" />,
};

export function ServiciosInicio() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#FAAE34] block mb-2">
            Acompañamos cada etapa con
          </span>
          <h2 className="text-[26px] md:text-[28px] font-bold text-[#21272A] leading-snug">
            Capacidad Operativa y Respaldo Continuo para su Frente de Proyecto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LISTA_SERVICIOS.map((servicio) => (
            <div
              key={servicio.id}
              className="p-6 rounded-xl border border-zinc-200 bg-[#F9F2E6]/40 hover:bg-[#F9F2E6] hover:border-[#FAAE34] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-13 h-13 rounded-lg bg-[#FAAE34] flex items-center justify-center mb-5 shadow-sm">
                  {MAPA_ICONOS[servicio.icono] || <Truck className="w-7 h-7 text-[#21272A]" />}
                </div>

                <span className="text-xs font-bold uppercase text-zinc-500 tracking-wider block mb-1">
                  {servicio.subtitulo}
                </span>

                <h3 className="text-[18px] md:text-[20px] font-semibold text-[#21272A] mb-3">
                  {servicio.titulo}
                </h3>

                <p className="text-[15px] text-zinc-700 leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
