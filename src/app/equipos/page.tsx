// src/app/equipos/page.tsx
import React, { Suspense } from "react";
import { Metadata } from "next";
import { CatalogoEquipos } from "@/secciones/catalogo-equipos";

export const metadata: Metadata = {
  title: "Catálogo de Flota y Maquinaria Pesada | GRUPO GADAL",
  description:
    "Explore nuestra flota disponible de excavadoras, cargadores frontales, tractores de oruga y rodillos compactadores para alquiler en el Perú.",
};

export default function PaginaEquipos() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-zinc-50">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-4 border-[#FAAE34] border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-semibold text-zinc-600">
              Cargando catálogo de maquinaria...
            </p>
          </div>
        </div>
      }
    >
      <CatalogoEquipos />
    </Suspense>
  );
}
