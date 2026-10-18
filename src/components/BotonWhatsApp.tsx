// src/components/BotonWhatsApp.tsx
"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { LISTA_MAQUINARIAS } from "@/lib/datos-mock";
import { MessageCircle } from "lucide-react";

export function BotonWhatsApp() {
  const pathname = usePathname();

  const mensajeWhatsApp = useMemo(() => {
    // Si estamos en la página de ficha técnica /equipos/[slug]
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
      {/* Tooltip visible en hover desktop */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-lg bg-[#21272A] text-white text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-zinc-700">
        ¿Cotización urgente? Escríbenos
      </span>

      <a
        href={enlaceWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a GRUPO GADAL por WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </aside>
  );
}
