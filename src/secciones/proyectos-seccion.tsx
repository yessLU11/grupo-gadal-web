// src/secciones/proyectos-seccion.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { EncabezadoSeccion } from "@/components/EncabezadoSeccion";
import {
  ArrowRight,
  Mountain,
  HardHat,
  Compass,
  Droplet,
  CheckCircle,
  Cog,
  Truck
} from "lucide-react";

export function ProyectosSeccion() {
  // Manejo de Scroll para Ocultar Velozmente el Encabezado
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const headerY = useTransform(scrollY, [0, 100], [0, -50]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.96]);

  const sectores = [
    {
      titulo: "Sector Minería y Canteras",
      descripcion:
        "Equipos de gran tonelaje para extracción de material, carguío de tolvas, conformación de botaderos y apertura de accesos en operaciones de altura.",
      icono: <Mountain className="w-8 h-8 text-[#FAAE34]" />,
      equiposClave: ["Excavadoras 36t", "Tractores D8T", "Volquetes 8x4"]
    },
    {
      titulo: "Infraestructura Vial y Carreteras",
      descripcion:
        "Maquinaria especializada para corte de taludes, conformación de subrasante, compactación de base granular y mantenimiento periódico de vías.",
      icono: <Compass className="w-8 h-8 text-[#FAAE34]" />,
      equiposClave: ["Rodillos 12t", "Cargadores Frontales", "Retroexcavadoras"]
    },
    {
      titulo: "Movimiento de Tierras y Plataformas",
      descripcion:
        "Nivelación masiva de terrenos para plantas industriales, habilitaciones urbanas y cimentaciones pesadas con ciclos continuos de empuje y acarreo.",
      icono: <HardHat className="w-8 h-8 text-[#FAAE34]" />,
      equiposClave: ["Tractores de Oruga", "Excavadoras Hidráulicas", "Volquetes"]
    },
    {
      titulo: "Obras Hidráulicas y Saneamiento",
      descripcion:
        "Excavación de zanjas para tuberías matrices, encauzamiento de ríos, defensas ribereñas y construcción de pozas de sedimentación.",
      icono: <Droplet className="w-8 h-8 text-[#FAAE34]" />,
      equiposClave: ["Retroexcavadoras", "Excavadoras sobre Orugas"]
    }
  ];

  const pasosMetodologia = [
    {
      paso: "01",
      titulo: "Evaluación y Diagnóstico de Requerimiento",
      detalle:
        "Analizamos las características del terreno, el volumen de material y el plazo de obra para sugerir la combinación de maquinaria más idónea."
    },
    {
      paso: "02",
      titulo: "Asignación y Verificación Técnica",
      detalle:
        "Se seleccionan las unidades y se somete cada equipo a una inspección técnica completa antes de emitir la documentación de salida."
    },
    {
      paso: "03",
      titulo: "Logística y Despacho en Cama Baja",
      detalle:
        "Coordinamos el traslado seguro hasta el campamento u obra en cualquier región del país, gestionando los permisos correspondientes."
    },
    {
      paso: "04",
      titulo: "Puesta en Marcha y Acompañamiento",
      detalle:
        "Entrega formal en faena con personal técnico disponible para resolver cualquier consulta mecánica durante el periodo del contrato."
    }
  ];

  const casosRepresentativos = [
    {
      nombre: "Apertura de Accesos en Zona Andina",
      sector: "Minería y Carreteras",
      alcance:
        "Suministro de flota combinada de tractores de oruga y excavadoras hidráulicas para el corte en roca y conformación de plataformas en terreno agreste.",
      resultado:
        "Desarrollo continuo de las labores de movimiento de tierras cumpliendo rigurosamente los cronogramas fijados por el consorcio ejecutor."
    },
    {
      nombre: "Conformación de Terraplenes para Vía Interprovincial",
      sector: "Infraestructura Vial",
      alcance:
        "Despliegue de rodillos compactadores y cargadores frontales para la preparación de base y sub-base a lo largo del tramo asignado.",
      resultado:
        "Niveles de densidad y compactación conformes en cada prueba de laboratorio sin detenciones imprevistas por causas mecánicas."
    },
    {
      nombre: "Movimiento Masivo de Suelos para Parque Logístico",
      sector: "Movimiento de Tierras",
      alcance:
        "Flota de volquetes pesados y cargadores frontales para el traslado y retiro de material excedente en frente urbano.",
      resultado:
        "Ciclos de carguío ágiles y orden operativo en coordinación con las autoridades de transporte locales."
    }
  ];

  return (
    <div className="bg-white min-h-screen relative overflow-hidden text-[#21272A]">
      
      {/* 🌟 RESPLANDORES DE LUZ ÁMBAR DE FONDO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-32 h-[500px] w-[500px] rounded-full bg-[#FAAE34]/15 blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[35%] h-[500px] w-[500px] rounded-full bg-[#FAAE34]/15 blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 bottom-40 h-[500px] w-[500px] rounded-full bg-[#FAAE34]/15 blur-3xl z-0"
      />

      {/* ⚙️ ENGRANANJES INDUSTRIALES DE FONDO */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        className="absolute top-28 -left-28 opacity-15 pointer-events-none z-0 text-[#FAAE34]"
      >
        <Cog className="w-[520px] h-[520px]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        className="absolute top-[30%] -right-20 opacity-10 pointer-events-none z-0 text-[#21272A]"
      >
        <Cog className="w-[320px] h-[320px]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute bottom-20 -right-24 opacity-15 pointer-events-none z-0 text-[#21272A]"
      >
        <Cog className="w-[480px] h-[480px]" />
      </motion.div>

      {/* 1. ENCABEZADO CON PARALLAX Y DESAPARICIÓN RÁPIDA */}
      <motion.div
        style={{ opacity: headerOpacity, y: headerY, scale: headerScale }}
        className="will-change-transform sticky top-0 z-10"
      >
        <EncabezadoSeccion
          titulo="Sectores Atendidos y Metodología de Trabajo"
          subtitulo="Descubra los sectores productivos que impulsamos con nuestra maquinaria y la forma estructurada en que garantizamos el cumplimiento de cada entrega."
          imagen="/images/encabezado/encabezado-proyectos.jpg"
        />
      </motion.div>

      {/* 2. PISTA CON TRACTOR/CAMIÓN ANIMADO SOBRE LA SECCIÓN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-20">
        <div className="h-9 bg-zinc-100 rounded-2xl border border-zinc-200/90 overflow-hidden flex items-center shadow-xs">
          <motion.div
            className="flex items-center gap-2 text-[#21272A] font-bold text-xs whitespace-nowrap"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              repeat: Infinity,
              duration: 9,
              ease: "linear",
            }}
          >
            <Truck className="w-5 h-5 text-[#FAAE34]" />
            <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-black">
              DESPLIEGUE OPERATIVO A NIVEL NACIONAL • RESPALDO TÉCNICO EN SITIO • GRUPO GADAL
            </span>
          </motion.div>
        </div>
      </div>

      {/* 3. SECTORES ATENDIDOS */}
      <motion.section
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-14 sm:py-20 relative z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAAE34] block">
              SECTORES PRODUCTIVOS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#21272A] leading-tight">
              Sectores Donde Operamos
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Adaptamos las configuraciones de nuestros equipos a los desafíos geográficos y climáticos del Perú.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectores.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-8 rounded-3xl border border-zinc-200/90 bg-white shadow-xl hover-elevate space-y-4 relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-[#FAAE34]/30 flex items-center justify-center">
                  {s.icono}
                </div>
                <h3 className="text-xl font-extrabold text-[#21272A]">{s.titulo}</h3>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                  {s.descripcion}
                </p>
                <div className="pt-3 border-t border-zinc-100 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-bold text-zinc-400">Flota recomendada:</span>
                  {s.equiposClave.map((eq, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-zinc-100 border border-zinc-200/80 text-xs font-bold text-[#21272A]"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. CÓMO TRABAJAMOS - METODOLOGÍA */}
      <motion.section
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-16 sm:py-24 bg-[#21272A] text-white relative z-20 overflow-hidden"
      >
        {/* Engranaje de Fondo */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute -left-16 -bottom-16 opacity-10 pointer-events-none text-[#FAAE34]"
        >
          <Cog className="w-80 h-80" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#FAAE34] bg-white/10 px-3.5 py-1.5 rounded-full inline-block backdrop-blur-md">
              PROCESO TRANSPARENTE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Cómo Trabajamos: De la Cotización a la Faena
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
              Un flujo coordinado para asegurar que los equipos lleguen puntuales y listos para rendir.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasosMetodologia.map((p, idx) => (
              <motion.div
                key={p.paso}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white text-zinc-900 p-7 rounded-3xl border border-zinc-200 shadow-2xl hover-elevate flex flex-col justify-between"
              >
                <div>
                  <span className="w-10 h-10 rounded-xl bg-[#21272A] text-[#FAAE34] font-black flex items-center justify-center mb-4 text-sm font-mono shadow-sm">
                    {p.paso}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#21272A] mb-2 leading-snug">
                    {p.titulo}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {p.detalle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. CASOS REPRESENTATIVOS */}
      <motion.section
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-16 sm:py-24 relative z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAAE34] block">
              CASOS REPRESENTATIVOS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#21272A] leading-tight">
              Proyectos Respaldados por Nuestra Maquinaria
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Muestras del desempeño de nuestra flota en frentes reales de trabajo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {casosRepresentativos.map((caso, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-7 rounded-3xl border border-zinc-200/90 bg-white shadow-xl hover-elevate flex flex-col justify-between space-y-4 relative overflow-hidden"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase text-[#FAAE34] tracking-wider block">
                    {caso.sector}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#21272A]">
                    {caso.nombre}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                    <strong className="text-[#21272A]">Alcance:</strong> {caso.alcance}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 text-xs sm:text-sm text-zinc-800 flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-zinc-700">{caso.resultado}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/carrito"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FAAE34] text-[#21272A] font-extrabold text-sm shadow-md btn-piston-hidraulico"
            >
              Solicitar Cotización para su Proyecto
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.section>

    </div>
  );
}