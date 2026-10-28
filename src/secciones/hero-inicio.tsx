// src/secciones/hero-inicio.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  Cog, 
  Truck,
  Clock,
  Zap,
  MapPin,
  Sparkles
} from "lucide-react";

const diapositivas = [
  {
    imagen: "/images/hero/hero-1.jpg",
    badge: "Soluciones para Minería y Construcción",
    titulo: "Alquiler de Maquinaria Pesada para los Proyectos más Grandes del Perú",
    subtitulo: "Suministramos flotas de excavadoras, cargadores, tractores y volquetes con disponibilidad inmediata y respuesta comercial en menos de 2 horas.",
    equipoDestacado: {
      nombre: "Excavadora Hidráulica CAT 336",
      potencia: "314 HP",
      capacidad: "36.2 Ton",
      imagen: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    imagen: "/images/hero/hero-2.jpg",
    badge: "Garantía Operativa sin Paradas",
    titulo: "Flota Moderna 100% Inspeccionada Pre-Entrega",
    subtitulo: "Unidades verificadas bajo normativa vigente y listas para superar cualquier auditoría de garita o seguridad en mina desde el primer día.",
    equipoDestacado: {
      nombre: "Tractor de Oruga CAT D8T",
      potencia: "357 HP",
      capacidad: "39.4 Ton",
      imagen: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    }
  },
  {
    imagen: "/images/hero/hero-3.jpg",
    badge: "Atención Directa y Cobertura Nacional",
    titulo: "Respuesta Comercial Ágil y Soporte Técnico en Sitio",
    subtitulo: "Minimizamos el tiempo de inactividad de tu obra con logística en cama baja puerta a puerta y acompañamiento especializado constante.",
    equipoDestacado: {
      nombre: "Cargador Frontal CAT 966L",
      potencia: "307 HP",
      capacidad: "4.2 m³",
      imagen: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=800&q=80"
    }
  },
];

export function HeroInicio() {
  const [activo, setActivo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActivo((anterior) => (anterior + 1) % diapositivas.length);
    }, 5500);
    return () => clearInterval(intervalo);
  }, []);

  const slide = diapositivas[activo];

  return (
    <div className="relative bg-[#181C1E] text-white overflow-hidden min-h-[640px] lg:min-h-[720px] flex flex-col justify-between border-b border-zinc-800">
      
      {/* 🌟 RESPLANDOR ÁMBAR DE IMPACTO EN EL HERO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 h-[600px] w-[600px] rounded-full bg-[#FAAE34]/20 blur-3xl z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#FAAE34]/15 blur-3xl z-10"
      />


      {/* CARRUSEL DE IMÁGENES DE FONDO CON CINEMATIC GRADIENT */}
      {diapositivas.map((d, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 z-0 ${
            i === activo ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={d.imagen}
            alt="Maquinaria pesada GRUPO GADAL"
            fill
            priority={i === 0}
            className="object-cover object-center scale-105"
          />
          {/* Overlay oscuro con degradado radial para máximo contraste tipográfico */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#181C1E] via-[#181C1E]/85 to-[#181C1E]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181C1E] via-transparent to-black/40" />
        </div>
      ))}

      {/* CONTENIDO PRINCIPAL EN DOS COLUMNAS */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 z-20 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* COLUMNA IZQUIERDA: TITULAR + MENSAJE DE ENGANCHE B2B */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badge Dinámico Resplandeciente */}
            <motion.div 
              key={`badge-${activo}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#FAAE34]/50 backdrop-blur-md shadow-lg"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#FAAE34] animate-pulse shadow-[0_0_8px_#FAAE34]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FAAE34]">
                {slide.badge}
              </span>
            </motion.div>

            {/* Titular Principal Animado */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${activo}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white drop-shadow-md">
                  {slide.titulo}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed font-normal max-w-2xl">
                  {slide.subtitulo}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Botones de Acción de Alto Impacto */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/equipos"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FAAE34] text-[#21272A] font-black text-sm btn-piston-hidraulico shadow-xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(250,174,52,0.3)] active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#21272A] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Explorar Catálogo
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
              </Link>
              
            </div>

            {/* Garantes / Social Proof Rápidos */}
            <div className="pt-6 border-t border-zinc-800/90 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-bold text-zinc-300">
              <div className="flex items-center gap-2 bg-black/30 p-2.5 rounded-lg border border-zinc-800/60 backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-[#FAAE34] shrink-0" />
                <span>Atención directa</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 p-2.5 rounded-lg border border-zinc-800/60 backdrop-blur-xs">
                <MapPin className="w-4 h-4 text-[#FAAE34] shrink-0" />
                <span>Despacho a todo el Perú</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 p-2.5 rounded-lg border border-zinc-800/60 backdrop-blur-xs">
                <ShieldCheck className="w-4 h-4 text-[#FAAE34] shrink-0" />
                <span>Inspección técnica al 100%</span>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: TARJETA DE VISTA PREVIA Y ESTADO DE FLOTA EN VIVO */}
          <div className="lg:col-span-5 hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={`card-${activo}`}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-black/65s backdrop-blur-md rounded-3xl p-5 border border-zinc-200 shadow-2xl text-[#21272A] space-y-4 relative hover-elevate"
              >
                {/* Badge Flotante Superior */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FAAE34]" />
                    <span className="text-xs font-black uppercase tracking-wider text-[#FAAE34]">
                      EQUIPO DESTACADO
                    </span>
                  </div>
                </div>

                {/* Imagen del Equipo */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
                  <Image
                    src={slide.equipoDestacado.imagen}
                    alt={slide.equipoDestacado.nombre}
                    fill
                    className="object-cover object-center"
                  />
                 
                </div>

                {/* Detalles Rápidos */}
                <div>
                  <h3 className="text-lg font-black text-[#FFFFFF] leading-snug">
                    {slide.equipoDestacado.nombre}
                  </h3>
                </div>


                {/* CTA Inmediato de Ficha Técnica */}
                <Link
                  href="/equipos"
                  className="w-full py-3 px-4 rounded-xl bg-[#000000]/40 hover:bg-black text-[#FAAE34] font-extrabold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Clock className="w-4 h-4 text-[#FAAE34]" />
                  Reserva o Cotiza este equipo en 1 Clic →
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* PISTA TRACTOR / VEHÍCULO EN MOVIMIENTO AL PIE DEL HERO */}
      <div className="relative z-20 bg-zinc-900 border-t border-zinc-800 py-2.5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center gap-3 text-white font-bold text-xs whitespace-nowrap"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 11, ease: "linear" }}
          >
            <Truck className="w-5 h-5 text-[#FAAE34]" />
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-black">
              ALQUILER POR HORAS, DÍAS O CAMPAÑAS COMPLETAS • ASESORÍA Y LOGÍSTICA INCLUIDA • GRUPO GADAL
            </span>
          </motion.div>
        </div>
      </div>

      {/* PUNTOS DE PAGINACIÓN DEL SLIDER */}
      <div className="absolute bottom-12 right-6 lg:right-12 flex gap-2 z-20">
        {diapositivas.map((_, i) => (
          <button
            key={i}
            onClick={() => setActivo(i)}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === activo ? "w-8 bg-[#FAAE34] shadow-[0_0_8px_#FAAE34]" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

    </div>
  );
}