// src/secciones/formulario-contacto.tsx
"use client";

import React from "react";
import { FormularioCotizacion } from "@/components/FormularioCotizacion";
import { Phone, Mail, MapPin, Clock, ShieldCheck, MessageCircle } from "lucide-react";
import { EncabezadoSeccion } from "@/components/EncabezadoSeccion";
import { DATOS_EMPRESA } from "@/lib/constantes-empresa";

export function SeccionContacto() {
  return (
    <div className="bg-white">

      <EncabezadoSeccion
        titulo="Contacto Comercial y Cotizaciones"
        subtitulo="Complete el formulario para recibir una cotización formal estructurada o comuníquese directamente con nuestra gerencia comercial."
        imagen="/images/encabezado/encabezado-blog.jpg"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 sm:mt-4">
        

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Formulario (7 columnas) */}
          <div className="lg:col-span-7">
            <FormularioCotizacion textoBoton="Enviar Solicitud de Cotización" />
          </div>

          {/* Tarjeta de Información de Contacto (5 columnas) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-2xl border border-zinc-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-[#21272A] pb-3 border-b border-zinc-100">
                Información de la Empresa
              </h2>

              <ul className="space-y-5 text-sm text-zinc-700">
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAAE34]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#21272A]" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-zinc-400">
                      Central Telefónica y WhatsApp
                    </span>
                    <a
                      href={DATOS_EMPRESA.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#21272A] text-base hover:text-amber-600"
                    >
                      {DATOS_EMPRESA.telefonoInternacional}
                    </a>
                    <span className="block text-xs text-zinc-500 mt-0.5">
                      Atención comercial inmediata
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAAE34]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#21272A]" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-zinc-400">
                      Correo Electrónico
                    </span>
                    <a
                      href={`mailto:${DATOS_EMPRESA.email}`}
                      className="font-semibold text-zinc-900 hover:text-amber-600"
                    >
                      {DATOS_EMPRESA.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAAE34]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#21272A]" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-zinc-400">
                      Sede Principal y Despachos
                    </span>
                    <span className="font-semibold text-zinc-900 block">
                      {DATOS_EMPRESA.ubicacion}
                    </span>
                    <span className="text-xs text-zinc-500">
                      Cobertura y movilización a los 24 departamentos
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAAE34]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#21272A]" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-zinc-400">
                      Horario de Atención
                    </span>
                    <span className="font-semibold text-zinc-900">
                      {DATOS_EMPRESA.horario}
                    </span>
                  </div>
                </li>
              </ul>

              {/* Botón directo WhatsApp */}
              <div className="pt-2">
                <a
                  href={DATOS_EMPRESA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Escribir al WhatsApp Comercial
                </a>
              </div>
            </div>

            {/* Banner de Garantía B2B */}
            <div className="bg-[#21272A] text-white p-6 rounded-2xl space-y-2 border border-zinc-800">
              <div className="flex items-center gap-2 text-[#FAAE34] font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                Compromiso de Respuesta Rápida
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Todas las cotizaciones son evaluadas por nuestro equipo técnico para ofrecer la alternativa de transporte y régimen de horas más conveniente para su operación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
