// src/secciones/reto-operativo.tsx
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export function RetoOperativo() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Video */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100 aspect-video">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/reto-operativo-poster.jpg"
          >
            <source src="/videos/reto-operativo.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Texto */}
        <div>
          <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#FAAE34] block mb-2">
            El Reto Operativo en Obra
          </span>
          <h2 className="text-[26px] md:text-[28px] font-bold text-[#21272A] leading-snug">
            Por tu cronograma y presupuesto.
          </h2>
          <p className="mt-4 text-[15px] md:text-[16px] text-zinc-600 leading-relaxed">
            Una sola máquina detenida en mina o carretera genera miles de dólares en pérdidas diarias
            y penalizaciones por incumplimiento. En GRUPO GADAL eliminamos el riesgo operativo entregando
            flota de línea amarilla 100% inspeccionada pre entrega, respaldamos tu gestión con alquiler ágil,
            equipos certificados bajo normativa vigente y unidades de reemplazo rápido para garantizar la
            continuidad de tu inversión.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3.5">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FAAE34] hover:bg-[#e99e28] text-[#21272A] font-extrabold text-sm transition-all shadow-md active:scale-95"
            >
              Cotizar Equipos
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="/brochure-gadal.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#FAAE34] text-[#21272A] font-bold text-sm hover:bg-[#F9F2E6] transition-colors"
            >
              Descargar Brochure (PDF)
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}