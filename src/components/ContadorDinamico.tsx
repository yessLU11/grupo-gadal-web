// src/components/ContadorDinamico.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

interface ContadorDinamicoProps {
  valorFinal: number;
  duracion?: number; // en milisegundos
  prefijo?: string;
  sufijo?: string;
  className?: string;
}

export function ContadorDinamico({
  valorFinal,
  duracion = 2000,
  prefijo = "",
  sufijo = "",
  className = "",
}: ContadorDinamicoProps) {
  const [cuenta, setCuenta] = useState(0);
  const [iniciado, setIniciado] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !iniciado) {
          setIniciado(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(elemento);
    return () => observer.disconnect();
  }, [iniciado]);

  useEffect(() => {
    if (!iniciado) return;

    let inicioTiempo: number | null = null;
    let animacionId: number;

    const animar = (tiempoActual: number) => {
      if (!inicioTiempo) inicioTiempo = tiempoActual;
      const progreso = Math.min((tiempoActual - inicioTiempo) / duracion, 1);
      // Función de aceleración suave (easeOutExpo)
      const easeOut = progreso === 1 ? 1 : 1 - Math.pow(2, -10 * progreso);
      const valorCalculado = Math.floor(easeOut * valorFinal);

      setCuenta(valorCalculado);

      if (progreso < 1) {
        animacionId = requestAnimationFrame(animar);
      } else {
        setCuenta(valorFinal);
      }
    };

    animacionId = requestAnimationFrame(animar);
    return () => cancelAnimationFrame(animacionId);
  }, [iniciado, valorFinal, duracion]);

  return (
    <span ref={ref} className={className}>
      {prefijo}
      {cuenta.toLocaleString("es-PE")}
      {sufijo}
    </span>
  );
}
