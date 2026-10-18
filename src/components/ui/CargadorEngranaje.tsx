// src/components/ui/CargadorEngranaje.tsx
import React from "react";
import { Settings, Cog } from "lucide-react";

interface CargadorEngranajeProps {
  tamaño?: "sm" | "md" | "lg";
  texto?: string;
  className?: string;
}

export function CargadorEngranaje({
  tamaño = "md",
  texto = "Cargando maquinaria...",
  className = "",
}: CargadorEngranajeProps) {
  const tamañosContenedor = {
    sm: "w-8 h-8",
    md: "w-14 h-14",
    lg: "w-20 h-20",
  };

  const tamañosEngranajePrincipal = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const tamañosEngranajeSecundario = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div
      role="status"
      aria-label={texto}
      className={`flex flex-col items-center justify-center gap-3 p-4 ${className}`}
    >
      <div className={`relative ${tamañosContenedor[tamaño]} flex items-center justify-center`}>
        {/* Engranaje Principal */}
        <Settings
          className={`${tamañosEngranajePrincipal[tamaño]} text-[#FAAE34] animacion-engranaje stroke-[1.5] drop-shadow-sm`}
        />
        {/* Engranaje Secundario entrelazado rotando al revés */}
        <Cog
          className={`absolute -bottom-1 -right-1 ${tamañosEngranajeSecundario[tamaño]} text-[#21272A] animacion-engranaje-reversa stroke-[2] drop-shadow-xs`}
        />
      </div>
      {texto && (
        <span className="text-xs sm:text-sm font-bold text-zinc-700 tracking-wide uppercase font-sans">
          {texto}
        </span>
      )}
    </div>
  );
}
