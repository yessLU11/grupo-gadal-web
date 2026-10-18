// src/components/EncabezadoSeccion.tsx
import Image from "next/image";

interface EncabezadoSeccionProps {
  titulo: string;
  subtitulo: string;
  imagen: string;
  alt?: string;
}

export function EncabezadoSeccion({
  titulo,
  subtitulo,
  imagen,
  alt = "Maquinaria pesada GRUPO GADAL",
}: EncabezadoSeccionProps) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-28 border-b border-zinc-200">
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
    </section>
  );
}