// src/components/EncabezadoSeccion.tsx
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface EncabezadoSeccionProps {
  titulo: string;
  subtitulo: string;
  imagen: string;
  alt?: string;
}

/**
 * Encabezado de sección con efecto Parallax + Desaparición veloz.
 *
 * - Opacidad disminuye al hacer scroll.
 * - Traslación vertical (parallax) y ligera reducción de escala.
 * - Sticky para mantenerse visible al inicio de la página.
 */
export function EncabezadoSeccion({
  titulo,
  subtitulo,
  imagen,
  alt = "Maquinaria pesada GRUPO GADAL",
}: EncabezadoSeccionProps) {
  // Scroll progress (0‑1) of the viewport.
  const { scrollYProgress } = useScroll();

  // Transformations based on scroll progress.
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]); // move up 50px
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  return (
    <motion.section
      style={{ opacity, y, scale }}
      className="will-change-transform sticky top-0 z-10 relative overflow-hidden py-14 sm:py-28 border-b border-zinc-200"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat sm:bg-fixed"
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30 backdrop-blur-[1px]" />
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#FAAE34]/15 pointer-events-none" />
        <div className="absolute right-50 top-0 w-50 h-50 rounded-full bg-[#FAAE34]/10 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-2">
          <h1 className="text-4xl sm:text-3xl lg:text-5xl font-black text-[#FFFFFF]/95 tracking-tight">
            {titulo}
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-[#FAAE34]/65 font-medium">
            {subtitulo}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
