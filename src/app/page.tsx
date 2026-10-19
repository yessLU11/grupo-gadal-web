// src/app/page.tsx
import { HeroInicio } from "@/secciones/hero-inicio";
import { ServiciosInicio } from "@/secciones/servicios-inicio";
import { RetoOperativo } from "@/secciones/reto-operativo";
import { BeneficiosOperativos } from "@/secciones/beneficios-operativos";
import { FlotaDestacada } from "@/secciones/flota-destacada";
import { TestimoniosSeccion } from "@/secciones/testimonios-seccion";
import { PreguntasFrecuentes } from "@/secciones/preguntas-frecuentes";
import { LlamadoAccion } from "@/secciones/llamado-accion";
import { MiniVehiculosAnimados } from "@/components/ui/MiniVehiculosAnimados";

export default function PaginaInicio() {
  return (
    <>
      <HeroInicio />
      <MiniVehiculosAnimados className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />
      <ServiciosInicio />
      <RetoOperativo />
      <BeneficiosOperativos />
      <FlotaDestacada />
      <TestimoniosSeccion />
      <PreguntasFrecuentes />
      <LlamadoAccion />
    </>
  );
}
