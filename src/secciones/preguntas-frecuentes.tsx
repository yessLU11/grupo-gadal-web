// src/secciones/preguntas-frecuentes.tsx
"use client";

import React, { useState } from "react";
import { LISTA_FAQ } from "@/lib/datos-mock";
import { ChevronDown, HelpCircle } from "lucide-react";

export function PreguntasFrecuentes() {
  const [abiertoId, setAbiertoId] = useState<string | null>(LISTA_FAQ[0]?.id || null);

  const toggle = (id: string) => {
    setAbiertoId(abiertoId === id ? null : id);
  };

  return (
    //<section className="py-16 sm:py-20 bg-white">
    <section className="relative py-16 sm:py-20 bg-[#FAAE34]/15 text-white overflow-hidden">
      {/* ¡AQUÍ ESTÁN LOS DESTELLOS AMARILLOS DIFUMINADOS! */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffffff]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#ffffff]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="text-center mb-12">
          <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#FAAE34] block mb-2">
            Resolución de Dudas
          </span>
          <h2 className="text-[26px] md:text-[28px] font-bold text-[#21272A] leading-snug">
            Preguntas Frecuentes sobre el Alquiler
          </h2>
          <p className="mt-3 text-[15px] md:text-[16px] text-zinc-600">
            Conozca los aspectos clave sobre nuestras modalidades de contratación, logística y soporte técnico.
          </p>
        </div>

        <div className="space-y-3">
          {LISTA_FAQ.map((faq) => {
            const estaAbierto = abiertoId === faq.id;

            return (
              <div
                key={faq.id}
                className="border border-zinc-200 rounded-xl overflow-hidden transition-all duration-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
                >
                  <span className="font-semibold text-base text-[#21272A] flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#FAAE34] shrink-0" />
                    {faq.pregunta}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-200 ${
                      estaAbierto ? "rotate-180 text-[#FAAE34]" : ""
                    }`}
                  />
                </button>

                {estaAbierto && (
                  <div className="px-5 pb-5 pt-1 text-[15px] text-zinc-600 leading-relaxed border-t border-zinc-100 bg-[#F1F1F1]/30">
                    <p className="pl-8">{faq.respuesta}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
