// src/components/ContadorDinamico.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface ContadorDinamicoProps {
  valorFinal: number;
  duracion?: number; // Duración total de la animación en milisegundos
  prefijo?: string;
  sufijo?: string;
  decimales?: number; // Cantidad de decimales a mostrar (por defecto 0)
  className?: string;
}

export function ContadorDinamico({
  valorFinal,
  duracion = 2200,
  prefijo = "",
  sufijo = "",
  decimales = 0,
  className = "",
}: ContadorDinamicoProps) {
  const [cuenta, setCuenta] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  // hook de Framer Motion para detectar cuando el contador entra en el viewport
  const estaEnVista = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!estaEnVista) return;

    let inicioTiempo: number | null = null;
    let animacionId: number;

    const animar = (tiempoActual: number) => {
      if (!inicioTiempo) inicioTiempo = tiempoActual;
      const progreso = Math.min((tiempoActual - inicioTiempo) / duracion, 1);

      // Función de atenuación suave profesional (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - progreso, 4);
      const valorCalculado = easeOut * valorFinal;

      setCuenta(valorCalculado);

      if (progreso < 1) {
        animacionId = requestAnimationFrame(animar);
      } else {
        setCuenta(valorFinal);
      }
    };

    animacionId = requestAnimationFrame(animar);
    return () => cancelAnimationFrame(animacionId);
  }, [estaEnVista, valorFinal, duracion]);

  // Formatear el valor calculado según el número de decimales
  const valorFormateado = cuenta.toLocaleString("es-PE", {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  });

  return (
    <span
      ref={ref}
      className={`font-extrabold tracking-tight tabular-nums transition-all ${className}`}
    >
      {prefijo}
      {valorFormateado}
      {sufijo}
    </span>
  );
}