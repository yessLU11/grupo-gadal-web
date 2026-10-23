// src/secciones/reto-operativo.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cog, Download, Truck } from "lucide-react";

export function RetoOperativo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative z-20 overflow-hidden bg-white py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#FAAE34]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-[#FAAE34]/15 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="pointer-events-none absolute -right-24 top-12 z-0 text-[#FAAE34]/10"
      >
        <Cog className="h-80 w-80" />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* Video interactivo con tarjeta elevada */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative aspect-video overflow-hidden rounded-3xl border border-zinc-200/90 bg-zinc-900 shadow-2xl group hover-elevate"
        >
          <video
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/reto-operativo-poster.jpg"
          >
            <source src="/videos/reto-operativo.mp4" type="video/mp4" />
          </video>

          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FAAE34] animate-pulse" />
            OPERATIVIDAD EN FAENA
          </div>
        </motion.div>

        {/* Texto informativo */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          className="space-y-4"
        >
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAAE34] block">
            EL RETO OPERATIVO EN OBRA
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#21272A] leading-tight">
            Por tu cronograma y presupuesto.
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
            Una sola máquina detenida en mina o carretera genera miles de dólares en pérdidas diarias
            y penalizaciones por incumplimiento. En GRUPO GADAL eliminamos el riesgo operativo entregando
            flota de línea amarilla 100% inspeccionada pre-entrega, respaldamos tu gestión con alquiler ágil,
            equipos certificados bajo normativa vigente y unidades de reemplazo rápido para garantizar la
            continuidad de tu inversión.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3.5">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FAAE34] hover:bg-[#e99e28] text-[#21272A] font-extrabold text-sm transition-all shadow-md active:scale-95 btn-piston-hidraulico"
            >
              Cotizar Equipos
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="/brochure-gadal.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-zinc-300 text-[#21272A] font-bold text-sm bg-zinc-50 hover:bg-zinc-100 transition-colors shadow-xs"
            >
              Descargar Brochure (PDF)
              <Download className="w-4 h-4 text-[#FAAE34]" />
            </a>
          </div>
        </motion.div>
      </div>


    </motion.section>
  );
}