// src/secciones/preguntas-frecuentes.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { LISTA_FAQ } from "@/lib/datos-mock";
import { ChevronDown, HelpCircle } from "lucide-react";

export function PreguntasFrecuentes() {
  const [abiertoId, setAbiertoId] = useState<string | null>(LISTA_FAQ[0]?.id || null);

  const toggle = (id: string) => {
    setAbiertoId(abiertoId === id ? null : id);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative py-16 sm:py-24 bg-white text-[#21272A] overflow-hidden z-20"
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAAE34] block">
            RESOLUCIÓN DE DUDAS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#21272A] leading-snug">
            Preguntas Frecuentes sobre el Alquiler
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal">
            Conozca los aspectos clave sobre nuestras modalidades de contratación, logística y soporte técnico.
          </p>
        </div>

        <div className="space-y-3">
          {LISTA_FAQ.map((faq) => {
            const estaAbierto = abiertoId === faq.id;

            return (
              <div
                key={faq.id}
                className="border border-zinc-200/90 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-md hover-elevate"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
                >
                  <span className="font-extrabold text-sm sm:text-base text-[#21272A] flex items-center gap-3">
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
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 bg-zinc-50/50">
                    <p className="pl-8">{faq.respuesta}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}