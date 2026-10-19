// src/secciones/proyectos-seccion.tsx
import React from "react";
import { EncabezadoSeccion } from "@/components/EncabezadoSeccion";
import { MiniVehiculosAnimados } from "@/components/ui/MiniVehiculosAnimados";
import Link from "next/link";
import { ArrowRight, Mountain, HardHat, Compass, Droplet, CheckCircle, ShieldCheck } from "lucide-react";

export function ProyectosSeccion() {
  const sectores = [
    {
      titulo: "Sector Minería y Canteras",
      descripcion: "Equipos de gran tonelaje para extracción de material, carguío de tolvas, conformación de botaderos y apertura de accesos en operaciones de altura.",
      icono: <Mountain className="w-8 h-8 text-[#FAAE34]" />,
      equiposClave: ["Excavadoras 36t", "Tractores D8T", "Volquetes 8x4"]
    },
    {
      titulo: "Infraestructura Vial y Carreteras",
      descripcion: "Maquinaria especializada para corte de taludes, conformación de subrasante, compactación de base granular y mantenimiento periódico de vías.",
      icono: <Compass className="w-8 h-8 text-[#FAAE34]" />,
      equiposClave: ["Rodillos 12t", "Cargadores Frontales", "Retroexcavadoras"]
    },
    {
      titulo: "Movimiento de Tierras y Plataformas",
      descripcion: "Nivelación masiva de terrenos para plantas industriales, habilitaciones urbanas y cimentaciones pesadas con ciclos continuos de empuje y acarreo.",
      icono: <HardHat className="w-8 h-8 text-[#FAAE34]" />,
      equiposClave: ["Tractores de Oruga", "Excavadoras Hidráulicas", "Volquetes"]
    },
    {
      titulo: "Obras Hidráulicas y Saneamiento",
      descripcion: "Excavación de zanjas para tuberías matrices, encauzamiento de ríos, defensas ribereñas y construcción de pozas de sedimentación.",
      icono: <Droplet className="w-8 h-8 text-[#FAAE34]" />,
      equiposClave: ["Retroexcavadoras", "Excavadoras sobre Orugas"]
    }
  ];

  const pasosMetodologia = [
    {
      paso: "01",
      titulo: "Evaluación y Diagnóstico de Requerimiento",
      detalle: "Analizamos las características del terreno, el volumen de material y el plazo de obra para sugerir la combinación de maquinaria más idónea."
    },
    {
      paso: "02",
      titulo: "Asignación y Verificación Técnica",
      detalle: "Se seleccionan las unidades y se somete cada equipo a una inspección técnica completa antes de emitir la documentación de salida."
    },
    {
      paso: "03",
      titulo: "Logística y Despacho en Cama Baja",
      detalle: "Coordinamos el traslado seguro hasta el campamento u obra en cualquier región del país, gestionando los permisos correspondientes."
    },
    {
      paso: "04",
      titulo: "Puesta en Marcha y Acompañamiento",
      detalle: "Entrega formal en faena con personal técnico disponible para resolver cualquier consulta mecánica durante el periodo del contrato."
    }
  ];

  const casosRepresentativos = [
    {
      nombre: "Apertura de Accesos en Zona Andina",
      sector: "Minería y Carreteras",
      alcance: "Suministro de flota combinada de tractores de oruga y excavadoras hidráulicas para el corte en roca y conformación de plataformas en terreno agreste.",
      resultado: "Desarrollo continuo de las labores de movimiento de tierras cumpliendo rigurosamente los cronogramas fijados por el consorcio ejecutor."
    },
    {
      nombre: "Conformación de Terraplenes para Vía Interprovincial",
      sector: "Infraestructura Vial",
      alcance: "Despliegue de rodillos compactadores y cargadores frontales para la preparación de base y sub-base a lo largo del tramo asignado.",
      resultado: "Niveles de densidad y compactación conformes en cada prueba de laboratorio sin detenciones imprevistas por causas mecánicas."
    },
    {
      nombre: "Movimiento Masivo de Suelos para Parque Logístico",
      sector: "Movimiento de Tierras",
      alcance: "Flota de volquetes pesados y cargadores frontales para el traslado y retiro de material excedente en frente urbano.",
      resultado: "Ciclos de carguío ágiles y orden operativo en coordinación con las autoridades de transporte locales."
    }
  ];

  return (
    <div className="bg-white">
      <EncabezadoSeccion
        titulo="Sectores Atendidos y Metodología de Trabajo"
        subtitulo="Descubra los sectores productivos que impulsamos con nuestra maquinaria y la forma estructurada en que garantizamos el cumplimiento de cada entrega."
        imagen="/images/encabezado/encabezado-proyectos.jpg"
      />
      <MiniVehiculosAnimados className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      {/* Sectores Atendidos */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#FAAE34] block mb-2">
              Sectores Productivos
            </span>
            <h2 className="text-[26px] md:text-[28px] font-bold text-[#21272A]">
              Sectores Donde Operamos
            </h2>
            <p className="mt-3 text-[15px] text-zinc-600">
              Adaptamos las configuraciones de nuestros equipos a los desafíos geográficos y climáticos del Perú.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectores.map((s, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm tarjeta-maquinaria-elevacion space-y-4"
              >
                <div className="w-14 h-14 rounded-xl bg-[#F9F2E6] flex items-center justify-center">
                  {s.icono}
                </div>
                <h3 className="text-[20px] font-bold text-[#21272A]">{s.titulo}</h3>
                <p className="text-[15px] text-zinc-600 leading-relaxed">
                  {s.descripcion}
                </p>
                <div className="pt-2 border-t border-zinc-100 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-bold text-zinc-400">Flota recomendada:</span>
                  {s.equiposClave.map((eq, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#F1F1F1] text-xs font-semibold text-[#21272A]"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Trabajamos - Metodología */}
      <section className="py-16 sm:py-20 bg-[#F1F1F1] border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#FAAE34] block mb-2">
              Proceso Transparente
            </span>
            <h2 className="text-[26px] md:text-[28px] font-bold text-[#21272A]">
              Cómo Trabajamos: De la Cotización a la Faena
            </h2>
            <p className="mt-3 text-[15px] text-zinc-600">
              Un flujo coordinado para asegurar que los equipos lleguen puntuales y listos para rendir.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasosMetodologia.map((p) => (
              <div
                key={p.paso}
                className="bg-white p-7 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="w-10 h-10 rounded-lg bg-[#21272A] text-[#FAAE34] font-bold flex items-center justify-center mb-4 text-sm font-mono">
                    {p.paso}
                  </span>
                  <h3 className="text-base font-bold text-[#21272A] mb-2 leading-snug">
                    {p.titulo}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {p.detalle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos Representativos (Cualitativos, sin cifras inventadas) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#FAAE34] block mb-2">
              Casos Representativos
            </span>
            <h2 className="text-[26px] md:text-[28px] font-bold text-[#21272A]">
              Proyectos Respaldados por Nuestra Maquinaria
            </h2>
            <p className="mt-2 text-[15px] text-zinc-600">
              Muestras del desempeño de nuestra flota en frentes reales de trabajo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {casosRepresentativos.map((caso, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl border border-zinc-200 bg-[#F9F2E6]/30 flex flex-col justify-between space-y-4 hover:border-[#FAAE34] transition-all"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase text-[#FAAE34] tracking-wider block">
                    {caso.sector}
                  </span>
                  <h3 className="text-[18px] font-bold text-[#21272A]">
                    {caso.nombre}
                  </h3>
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    <strong>Alcance:</strong> {caso.alcance}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-200/60 text-xs text-zinc-800 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{caso.resultado}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/carrito"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#FAAE34] text-[#21272A] font-bold text-sm shadow-sm btn-piston-hidraulico"
            >
              Solicitar Cotización para su Proyecto
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
