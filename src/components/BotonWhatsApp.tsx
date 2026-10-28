// src/components/BotonWhatsApp.tsx
"use client";

import React, { useMemo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LISTA_MAQUINARIAS } from "@/lib/datos-mock";

export function BotonWhatsApp() {
  const pathname = usePathname();
  const [mostrarTooltip, setMostrarTooltip] = useState(false);

  // Muestra el mensaje flotante automáticamente tras 4 segundos de navegación
  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const mensajeWhatsApp = useMemo(() => {
    if (pathname.startsWith("/equipos/")) {
      const slug = pathname.replace("/equipos/", "").trim();
      const equipo = LISTA_MAQUINARIAS.find((item) => item.slug === slug);

      if (equipo) {
        return `Hola GRUPO GADAL, deseo cotizar el alquiler del equipo: ${equipo.nombre} (Modelo ${equipo.modelo}). ¿Me podrían brindar tarifas y disponibilidad?`;
      }
    }

    if (pathname === "/carrito") {
      return "Hola GRUPO GADAL, deseo asistencia para completar mi solicitud de cotización de flota.";
    }

    return "Hola GRUPO GADAL, deseo información sobre el alquiler de maquinaria pesada para mi proyecto.";
  }, [pathname]);

  const enlaceWhatsApp = `https://wa.me/51962335073?text=${encodeURIComponent(
    mensajeWhatsApp
  )}`;

  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center group">
      
      {/* Tooltip Dinámico / Llamado a la Acción B2B */}
    

      <a
        href={enlaceWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a GRUPO GADAL por WhatsApp"
        className="relative w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#22bf5b] hover:scale-108 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* EFECTO LATIDO SUTIL (Efecto Onda Expandible) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-55 animate-ping pointer-events-none" style={{ animationDuration: '7s' }} />

        {/* Punto de estado en línea */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white z-10" />

        {/* Vector exacto de WhatsApp */}
        <svg
          className="w-10 h-10 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.932 9.932 0 0 0 1.34 5.011L2 22l5.127-1.34a9.92 9.92 0 0 0 4.882 1.28h.003c5.505 0 9.988-4.478 9.989-9.984 0-2.666-1.037-5.17-2.923-7.058C17.192 3.02 14.68 2 12.012 2zm5.83 14.364c-.244.686-1.42 1.312-1.982 1.396-.51.076-1.152.108-1.859-.117-.428-.136-.977-.318-1.681-.622-2.962-1.278-4.896-4.249-5.044-4.446-.148-.197-1.205-1.594-1.205-3.042 0-1.448.758-2.162 1.028-2.456.27-.296.591-.37.788-.37.197 0 .394.002.565.011.181.009.424-.069.664.507.245.59.838 2.045.912 2.193.074.148.123.321.025.518-.098.197-.148.321-.296.494-.148.173-.311.386-.444.518-.148.148-.303.309-.13.606.173.297.765 1.258 1.642 2.04 1.127 1.004 2.078 1.314 2.373 1.462.296.148.469.123.642-.074.173-.197.74-.862.937-1.158.197-.296.394-.247.665-.148.271.098 1.722.812 2.018.96.296.148.493.222.567.345.074.123.074.718-.17 1.404z" />
        </svg>
      </a>
    </aside>
  );
}