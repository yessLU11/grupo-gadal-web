// src/secciones/beneficios-operativos.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Lock, Activity } from "lucide-react";

export function BeneficiosOperativos() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="py-16 sm:py-24 bg-white relative z-20 border-b border-zinc-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          
          {/* Fila superior: Tarjeta 1 y Tarjeta 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Tarjeta 1 */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center justify-between border border-zinc-200/90 shadow-xl hover-elevate relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#FAAE34]" />
              <div>
                <span className="w-8 h-8 rounded-full bg-zinc-100 font-extrabold text-[#21272A] text-xs flex items-center justify-center mb-3 mx-auto">
                  1
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#21272A] leading-snug">
                  Cero paradas no programadas en obra
                </h3>
              </div>

              <div className="my-6 text-[#FAAE34] flex items-center justify-center">
                <Calendar className="w-14 h-14 stroke-[1.5]" />
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-md mx-auto font-normal">
                Protege el cronograma de entregas. Tus ingenieros y directores de proyecto trabajan con la tranquilidad de que la maquinaria jamás se convertirá en un cuello de botella que genere costos por inactividad o penalizaciones contractuales.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center justify-between border border-zinc-200/90 shadow-xl hover-elevate relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#21272A]" />
              <div>
                <span className="w-8 h-8 rounded-full bg-zinc-100 font-extrabold text-[#21272A] text-xs flex items-center justify-center mb-3 mx-auto">
                  2
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#21272A] leading-snug">
                  Presupuesto protegido de principio a fin
                </h3>
              </div>

              <div className="my-6 text-[#FAAE34] flex items-center justify-center">
                <Lock className="w-14 h-14 stroke-[1.5]" />
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-md mx-auto font-normal">
                Maximiza la rentabilidad de la obra. Eliminas por completo los gastos imprevistos de reparaciones mecánicas, repuestos de emergencia y mantenimientos complejos, manteniendo un flujo de caja predecible para el área de compras.
              </p>
            </div>
          </div>

          {/* Fila inferior: Tarjeta 3 */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center justify-between border border-zinc-200/90 shadow-xl hover-elevate relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#FAAE34]" />
              <div>
                <span className="w-8 h-8 rounded-full bg-zinc-100 font-extrabold text-[#21272A] text-xs flex items-center justify-center mb-3 mx-auto">
                  3
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#21272A] leading-snug">
                  Aprobación e ingreso inmediato a cualquier frente de trabajo
                </h3>
              </div>

              <div className="my-6 text-[#FAAE34] flex items-center justify-center">
                <Activity className="w-14 h-14 stroke-[1.5]" />
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-2xl mx-auto font-normal">
                Agiliza tus operaciones sin trabas burocráticas. La flota supera sin demoras las auditorías de seguridad en mina, licitaciones públicas y otros proyectos, permitiendo iniciar operaciones desde el primer día.
              </p>
            </div>
          </div>
        </div>

        {/* Lema inferior */}
        <div className="mt-16 sm:mt-20 text-center space-y-2">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAAE34] block">
            GRUPO GADAL
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#21272A] tracking-tight leading-tight">
            &ldquo;Menos fricción operativa, más proyectos completados.&rdquo;
          </h2>
        </div>
      </div>
    </motion.section>
  );
}