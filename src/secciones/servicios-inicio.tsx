// src/secciones/servicios-inicio.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
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
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="py-16 sm:py-24 bg-white relative z-20 border-b border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAAE34] block">
            ACOMPAÑAMOS CADA ETAPA CON
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#21272A] leading-snug">
            Capacidad Operativa y Respaldo Continuo para su Frente de Proyecto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LISTA_SERVICIOS.map((servicio, idx) => (
            <motion.div
              key={servicio.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 sm:p-7 rounded-3xl border border-zinc-200/90 bg-white shadow-xl hover-elevate flex flex-col justify-between relative overflow-hidden group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FAAE34] flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform duration-300">
                  {MAPA_ICONOS[servicio.icono] || <Truck className="w-7 h-7 text-[#21272A]" />}
                </div>

                <span className="text-[10px] sm:text-xs font-bold uppercase text-zinc-400 tracking-wider block mb-1">
                  {servicio.subtitulo}
                </span>

                <h3 className="text-lg font-extrabold text-[#21272A] mb-3">
                  {servicio.titulo}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {servicio.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}