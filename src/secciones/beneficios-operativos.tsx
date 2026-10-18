// src/secciones/beneficios-operativos.tsx
import React from "react";
import { Calendar, Lock, Activity } from "lucide-react";

export function BeneficiosOperativos() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor de las 3 tarjetas redondeadas en fondo crema/ámbar (#F9F2E6) */}
        <div className="space-y-6">
          {/* Fila superior: Tarjeta 1 y Tarjeta 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Tarjeta 1 */}
            <div className="bg-[#FAAE34]/15 rounded-[32px] p-8 sm:p-10 text-center flex flex-col items-center justify-between border border-amber-200/50 shadow-sm transition-transform hover:-translate-y-1 duration-200">
              <div>
                <span className="text-sm font-bold text-zinc-900 block mb-1">1</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#21272A] leading-snug">
                  Cero paradas no programadas en obra
                </h3>
              </div>

              {/* Icono Calendario estilo minimalista */}
              <div className="my-6 text-[#FAAE34] flex items-center justify-center">
                <Calendar className="w-14 h-14 stroke-[1.5]" />
              </div>

              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed max-w-md mx-auto">
                Protege el cronograma de entregas. Tus ingenieros y directores de proyecto trabajan con la tranquilidad de que la maquinaria jamás se convertirá en un cuello de botella que genere costos por inactividad o penalizaciones contractuales.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-[#FAAE34]/15 rounded-[32px] p-8 sm:p-10 text-center flex flex-col items-center justify-between border border-amber-200/50 shadow-sm transition-transform hover:-translate-y-1 duration-200">
              <div>
                <span className="text-sm font-bold text-zinc-900 block mb-1">2</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#21272A] leading-snug">
                  Presupuesto protegido de principio a fin
                </h3>
              </div>

              {/* Icono Candado / Seguridad estilo minimalista */}
              <div className="my-6 text-[#FAAE34] flex items-center justify-center">
                <Lock className="w-14 h-14 stroke-[1.5]" />
              </div>

              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed max-w-md mx-auto">
                Maximiza la rentabilidad de la obra. Eliminas por completo los gastos imprevistos de reparaciones mecánicas, repuestos de emergencia y mantenimientos complejos, manteniendo un flujo de caja predecible para el área de compras.
              </p>
            </div>
          </div>

          {/* Fila inferior: Tarjeta 3 (Ancho completo) */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#FAAE34]/15 rounded-[32px] p-8 sm:p-10 text-center flex flex-col items-center justify-between border border-amber-200/50 shadow-sm transition-transform hover:-translate-y-1 duration-200">
              <div>
                <span className="text-sm font-bold text-zinc-900 block mb-1">3</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#21272A] leading-snug">
                  Aprobación e ingreso inmediato a cualquier frente de trabajo
                </h3>
              </div>

              {/* Icono Pulso / Onda de actividad estilo minimalista */}
              <div className="my-6 text-[#FAAE34] flex items-center justify-center">
                <Activity className="w-14 h-14 stroke-[1.5]" />
              </div>

              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed max-w-2xl mx-auto">
                Agiliza tus operaciones sin trabas burocráticas. La flota supera sin demoras las auditorías de seguridad en mina, licitaciones públicas y otros proyectos, permitiendo iniciar operaciones desde el primer día.
              </p>
            </div>
          </div>
        </div>

        {/* Lema inferior: GRUPO GADAL "Menos fricción operativa, más proyectos completados." */}
        <div className="mt-16 sm:mt-20 text-center space-y-2">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#FAAE34] block">
            GRUPO GADAL
          </span>
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#21272A] tracking-tight leading-tight">
            &ldquo;Menos fricción operativa, más proyectos completados.&rdquo;
          </h2>
        </div>
      </div>
    </section>
  );
}
