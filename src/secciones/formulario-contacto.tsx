// src/secciones/formulario-contacto.tsx
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FormularioCotizacion } from "@/components/FormularioCotizacion";
import { Phone, Mail, MapPin, Clock, ShieldCheck, MessageCircle, ExternalLink, Cog, Truck } from "lucide-react";
import { EncabezadoSeccion } from "@/components/EncabezadoSeccion";
import { DATOS_EMPRESA } from "@/lib/constantes-empresa";

export function SeccionContacto() {
  // Transición rápida del encabezado al hacer scroll
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const headerY = useTransform(scrollY, [0, 100], [0, -50]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.96]);

  return (
    <div className="bg-slate-50/70 min-h-screen pb-16 lg:pb-24 overflow-hidden relative">
      
      {/* ⚙️ ENGRANANJES INDUSTRIALES DE FONDO (VISIBLES) */}
      
      {/* Engranaje Ámbar Gigante - Superior Derecho */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute -top-12 -right-24 opacity-25 pointer-events-none z-0 text-[#FAAE34]"
      >
        <Cog className="w-[480px] h-[480px]" />
      </motion.div>

      {/* Engranaje Oscuro - Superior Izquierdo */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute top-40 -left-20 opacity-10 pointer-events-none z-0 text-[#21272A]"
      >
        <Cog className="w-[350px] h-[350px]" />
      </motion.div>

      {/* Engranaje Ámbar Intermedio - Centro/Derecho */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute top-[48%] -right-16 opacity-30 pointer-events-none z-0 text-[#FAAE34]"
      >
        <Cog className="w-[280px] h-[280px]" />
      </motion.div>

      {/* Engranaje Oscuro Inferior - Izquierda de Abajo */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute bottom-10 -left-28 opacity-25 pointer-events-none z-0 text-[#21272A]"
      >
        <Cog className="w-[500px] h-[500px]" />
      </motion.div>


      {/* Encabezado con efecto Parallax y Desaparición Veloz */}
      <motion.div 
        style={{ opacity: headerOpacity, y: headerY, scale: headerScale }}
        className="will-change-transform sticky top-0 z-10"
      >
        <EncabezadoSeccion
          titulo="Contacto Comercial y Cotizaciones"
          subtitulo="Complete el formulario para recibir una cotización formal estructurada o comuníquese directamente con nuestra gerencia comercial."
          imagen="/images/encabezado/encabezado-blog.jpg"
        />
      </motion.div>

      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:mt-10 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Formulario (7 Columnas) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-zinc-200 shadow-xl hover-elevate relative overflow-hidden"
          >
            {/* 🚜 PISTA CON TRACTOR ANIMADO ANDANDO SOBRE EL FORMULARIO */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-100/90 border-b border-zinc-200 overflow-hidden flex items-center">
              <motion.div
                className="flex items-center gap-2 text-[#21272A] font-bold text-xs whitespace-nowrap"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "linear",
                }}
              >
                <Truck className="w-6 h-6 text-[#FAAE34]" />
                <span className="text-[11px] uppercase tracking-widest text-zinc-700 font-extrabold">
                  GRUPO GADAL • MAQUINARIA PESADA 
                </span>
              </motion.div>
            </div>

            {/* Espaciado para la pista superior */}
            <div className="pt-6">
              <FormularioCotizacion textoBoton="Enviar Solicitud de Cotización" />
            </div>
          </motion.div>

          {/* Lateral Derecha (5 Columnas): Información + Mapa de Abancay */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Tarjeta de Información de Empresa */}
            <div className="bg-white p-7 rounded-2xl border border-zinc-200 shadow-xl hover-elevate space-y-6">
              <div className="pb-3 border-b border-zinc-100 flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#21272A]">
                  Información de la Empresa
                </h2>
                {/* Engranaje giratorio interactivo en el título */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                  <Cog className="w-6 h-6 text-[#FAAE34]" />
                </motion.div>
              </div>

              <ul className="space-y-5 text-sm text-zinc-700">
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAAE34]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#21272A]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-zinc-400">
                      Central Telefónica
                    </span>
                    <a
                      href={DATOS_EMPRESA.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#21272A] text-base hover:text-[#FAAE34] transition-colors"
                    >
                      {DATOS_EMPRESA.telefonoInternacional}
                    </a>
                    <span className="block text-xs text-zinc-500 mt-0.5">
                      Atención comercial inmediata
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAAE34]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#21272A]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-zinc-400">
                      Correo Electrónico
                    </span>
                    <a
                      href={`mailto:${DATOS_EMPRESA.email}`}
                      className="font-semibold text-zinc-900 hover:text-[#FAAE34] transition-colors"
                    >
                      {DATOS_EMPRESA.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAAE34]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#21272A]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-zinc-400">
                      Sede Principal
                    </span>
                    <span className="font-semibold text-zinc-900 block">
                      {DATOS_EMPRESA.ubicacion}
                    </span>
                    <span className="text-xs text-zinc-500">
                      Cobertura a nivel nacional
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAAE34]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#21272A]">
                    <Clock className="w-5 h-5" />
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
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Escribir al WhatsApp Comercial
                </a>
              </div>
            </div>

            {/* Mapa Interactivo de Abancay */}
            <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-xl hover-elevate space-y-3">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2 text-zinc-800 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-[#FAAE34]" />
                  <span>Ubicación Comercial (Abancay)</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Abancay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#FAAE34] hover:underline flex items-center gap-1"
                >
                  Abrir en Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-48 rounded-xl overflow-hidden border border-zinc-100">
                <iframe
                  title="Ubicación Abancay GRUPO GADAL"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31063.14930252175!2d-72.88880625!3d-13.63387865!2m3!1f0!100.0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d02d184eb430d%3A0xc3f83733c7fef0bf!2sAbancay!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </motion.div>
        </div>

        {/* Banner de Compromiso de Respuesta Rápida al Final */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 bg-[#21272A] text-white p-6 sm:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden"
        >
          {/* Engranaje animado de fondo en el Banner */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="absolute -right-12 -bottom-12 opacity-20 pointer-events-none text-[#FAAE34]"
          >
            <Cog className="w-64 h-64" />
          </motion.div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 justify-between">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2.5 text-[#FAAE34] font-bold text-base sm:text-lg">
                <ShieldCheck className="w-6 h-6 shrink-0" />
                <span>Compromiso de Respuesta Rápida</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Todas las cotizaciones son evaluadas por nuestro equipo técnico para ofrecer la alternativa de transporte y régimen de horas más conveniente para su operación.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}