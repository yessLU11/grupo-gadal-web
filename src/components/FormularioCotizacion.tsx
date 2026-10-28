// src/components/FormularioCotizacion.tsx
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  LISTA_DEPARTAMENTOS_PERU,
  LISTA_PAISES,
  LISTA_MAQUINARIAS
} from "@/lib/datos-mock";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, ShieldCheck } from "lucide-react";

export const esquemaCotizacion = z
  .object({
    tipoDocumento: z.enum(["RUC", "DNI"]),
    numeroDocumento: z
      .string()
      .min(8, "El documento debe tener al menos 8 caracteres")
      .max(11, "El documento no puede exceder 11 caracteres"),
    nombresApellidos: z
      .string()
      .min(3, "Ingrese sus nombres y apellidos completos"),
    razonSocial: z.string().optional(),
    pais: z.string().min(1, "Seleccione el país"),
    departamento: z.string().min(1, "Seleccione el departamento del proyecto"),
    correo: z
      .string()
      .email("Ingrese un correo electrónico corporativo válido"),
    codigoPais: z.string().min(1, "Seleccione código de país"),
    celular: z
      .string()
      .min(9, "Ingrese al menos 9 dígitos de celular")
      .regex(/^[0-9]+$/, "Solo se permiten dígitos numéricos"),
    tipoOperacion: z.enum(["Alquiler", "Compra"]),
    tipoMaquinaria: z.string().optional(),
    equipoAdicional: z.string().optional(),
    mensaje: z.string().optional(),
  })
  .refine(
    (datos) => {
      if (datos.tipoDocumento === "RUC") {
        return Boolean(datos.razonSocial && datos.razonSocial.trim().length >= 3);
      }
      return true;
    },
    {
      message: "La razón social es obligatoria al seleccionar RUC",
      path: ["razonSocial"],
    }
  );

export type DatosFormularioCotizacion = z.infer<typeof esquemaCotizacion>;

interface PropsFormulario {
  mostrarTipoOperacion?: boolean;
  maquinariaPreseleccionada?: string;
  alEnviarExitoso?: (datos: DatosFormularioCotizacion) => void;
  textoBoton?: string;
}

export function FormularioCotizacion({
  mostrarTipoOperacion = false,
  maquinariaPreseleccionada,
  alEnviarExitoso,
  textoBoton = "Solicitar Cotización Formal",
}: PropsFormulario) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<DatosFormularioCotizacion>({
    resolver: zodResolver(esquemaCotizacion),
    defaultValues: {
      tipoDocumento: "RUC",
      numeroDocumento: "",
      nombresApellidos: "",
      razonSocial: "",
      pais: "Perú",
      departamento: "Lima",
      correo: "",
      codigoPais: "+51",
      celular: "",
      tipoOperacion: "Alquiler",
      tipoMaquinaria: maquinariaPreseleccionada || "",
      equipoAdicional: "",
      mensaje: "",
    },
  });

  const tipoDocumentoActual = watch("tipoDocumento");
  const tipoOperacionActual = watch("tipoOperacion");

  const alEnviar = async (datos: DatosFormularioCotizacion) => {
    // Simular envío de datos
    await new Promise((resolver) => setTimeout(resolver, 800));

    if (alEnviarExitoso) {
      alEnviarExitoso(datos);
    } else {
      reset();
    }
  };

  if (isSubmitSuccessful && !alEnviarExitoso) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-8 text-center space-y-4">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-emerald-900">
          ¡Solicitud enviada con éxito!
        </h3>
        <p className="text-emerald-700 text-sm max-w-md mx-auto">
          Hemos recibido su requerimiento. Nuestro equipo comercial se comunicará
          a la brevedad para enviarle la propuesta formal con tarifas y disponibilidad.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-4 px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(alEnviar)}
      className="space-y-5 bg-white p-6 sm:p-8 rounded-xl border border-zinc-200 shadow-sm"
    >
      {/* Selector de Tipo de Operación (si aplica, p.ej. en Carrito) */}
      {mostrarTipoOperacion && (
        <div className="space-y-2 pb-2 border-b border-[#21272A]/10">
          
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setValue("tipoOperacion", "Alquiler")}
              className={`py-2.5 px-4 rounded-lg font-bold text-sm transition-all border ${
                tipoOperacionActual === "Alquiler"
                  ? "bg-[#FAAE34] text-white/95 border-[#FAAE34]"
                  : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100"
              }`}
            >
              Alquiler de Maquinaria
            </button>
          
          </div>
        </div>
      )}

      {/* Fila 1: Toggle Documento y Número */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <Label className="block mb-2 text-xs uppercase font-bold text-[#21272A]">
            Tipo de Documento *
          </Label>
          <div className="flex rounded-md border border-zinc-300 p-1 bg-zinc-50">
            <button
              type="button"
              onClick={() => {
                setValue("tipoDocumento", "RUC");
              }}
              className={`flex-1 py-1.5 rounded text-xs font-bold transition-all ${
                tipoDocumentoActual === "RUC"
                  ? "bg-[#FAAE34] text-[#FFFFFF] shadow-sm"
                  : "text-zinc-600 hover:text-black"
              }`}
            >
              RUC
            </button>
            <button
              type="button"
              onClick={() => {
                setValue("tipoDocumento", "DNI");
                setValue("razonSocial", "");
              }}
              className={`flex-1 py-1.5 rounded text-xs font-bold transition-all ${
                tipoDocumentoActual === "DNI"
                  ? "bg-[#FAAE34] text-[#FFFFFF] shadow-sm"
                  : "text-zinc-600 hover:text-black"
              }`}
            >
              DNI
            </button>
          </div>
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="numeroDocumento" className="block mb-2">
            N° de {tipoDocumentoActual} *
          </Label>
          <Input
            id="numeroDocumento"
            placeholder={
              tipoDocumentoActual === "RUC" ? "20601234567" : "71234567"
            }
            {...register("numeroDocumento")}
          />
          {errors.numeroDocumento && (
            <p className="text-red-600 text-xs mt-1">
              {errors.numeroDocumento.message}
            </p>
          )}
        </div>
      </div>

      {/* Fila 2: Nombres / Razón Social */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="nombresApellidos" className="block mb-2">
            Nombres y Apellidos del Contacto *
          </Label>
          <Input
            id="nombresApellidos"
            placeholder="Ej. Ing. Juan Pérez"
            {...register("nombresApellidos")}
          />
          {errors.nombresApellidos && (
            <p className="text-red-600 text-xs mt-1">
              {errors.nombresApellidos.message}
            </p>
          )}
        </div>

        {tipoDocumentoActual === "RUC" && (
          <div>
            <Label htmlFor="razonSocial" className="block mb-2">
              Razón Social de la Empresa *
            </Label>
            <Input
              id="razonSocial"
              placeholder="Ej. Consorcio Minero Andino S.A.C."
              {...register("razonSocial")}
            />
            {errors.razonSocial && (
              <p className="text-red-600 text-xs mt-1">
                {errors.razonSocial.message}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Fila 3: País y Departamento del Proyecto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="pais" className="block mb-2">
            País del Proyecto *
          </Label>
          <select
            id="pais"
            {...register("pais")}
            className="flex h-11 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAAE34]"
          >
            {LISTA_PAISES.map((p) => (
              <option key={p.codigo} value={p.nombre}>
                {p.nombre} ({p.prefijo})
              </option>
            ))}
          </select>
          {errors.pais && (
            <p className="text-red-600 text-xs mt-1">{errors.pais.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="departamento" className="block mb-2">
            Departamento del Proyecto *
          </Label>
          <select
            id="departamento"
            {...register("departamento")}
            className="flex h-11 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAAE34]"
          >
            {LISTA_DEPARTAMENTOS_PERU.map((dep) => (
              <option key={dep} value={dep}>
                {dep}
              </option>
            ))}
          </select>
          {errors.departamento && (
            <p className="text-red-600 text-xs mt-1">
              {errors.departamento.message}
            </p>
          )}
        </div>
      </div>

      {/* Fila 4: Correo y Celular con código de país separado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="correo" className="block mb-2">
            Correo Electrónico Corporativo *
          </Label>
          <Input
            id="correo"
            type="email"
            placeholder="contacto@suempresa.com"
            {...register("correo")}
          />
          {errors.correo && (
            <p className="text-red-600 text-xs mt-1">{errors.correo.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="celular" className="block mb-2">
            Celular / WhatsApp *
          </Label>
          <div className="flex gap-2">
            <select
              {...register("codigoPais")}
              className="h-11 w-24 rounded-md border border-zinc-300 bg-zinc-50 px-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAAE34]"
            >
              {LISTA_PAISES.map((p) => (
                <option key={p.codigo} value={p.prefijo}>
                  {p.prefijo}
                </option>
              ))}
            </select>
            <div className="flex-1">
              <Input
                id="celular"
                type="tel"
                placeholder="987654321"
                {...register("celular")}
              />
            </div>
          </div>
          {errors.celular && (
            <p className="text-red-600 text-xs mt-1">
              {errors.celular.message}
            </p>
          )}
        </div>
      </div>


      {/* Fila 5: Maquinaria adicional o de interés */}
      {mostrarTipoOperacion ? (
        <div>
          <Label htmlFor="equipoAdicional" className="block mb-2">
            Maquinaria adicional
          </Label>
          <Input
            id="equipoAdicional"
            type="text"
            placeholder="Ej.: motoniveladora, rodillo compactador"
            {...register("equipoAdicional")}
            className="flex h-11 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAAE34]"
          />
          <p className="mt-1 text-xs text-zinc-500">
            ¿Buscas un equipo que no encontraste en el catálogo? Indícalo aquí.
          </p>
        </div>
      ) : (
        <div>
          <Label htmlFor="tipoMaquinaria" className="block mb-2">
            Maquinarias de Interés
          </Label>
          <Input
            id="tipoMaquinaria"
            type="text"
            placeholder="Ej: Tractor de Oruga CAT D8T, Excavadora Hidráulica CAT 336, ..."
            {...register("tipoMaquinaria")}
            className="flex h-11 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAAE34]"
          />
          <p className="mt-1 text-xs text-zinc-500">
            Puedes ingresar varios equipos o tipos de maquinaria separados por coma.
          </p>
        </div>
      )}

      {/* Fila 6: Mensaje */}
      <div>
        <Label htmlFor="mensaje" className="block mb-2">
          Detalle del Requerimiento o Ubicación de Obra
        </Label>
        {mostrarTipoOperacion && (
          <div className="mb-3 flex gap-3 rounded-xl border border-[#FAAE34]/40 bg-amber-50/80 p-3.5 text-sm text-[#21272A]">
            <ShieldCheck
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-[#D88C0A]"
            />
            <p className="leading-relaxed">
              <span className="font-bold">
                Una obra bien descrita, una tarifa más precisa.
              </span>{" "}
              Cuéntanos la duración, el tipo de terreno y el soporte que necesitas
              para preparar una propuesta más competitiva.
            </p>
          </div>
        )}
        <Textarea
          id="mensaje"
          rows={3}
          placeholder="Especifique tiempo estimado de alquiler (meses/horas), turno de trabajo o condiciones del terreno..."
          {...register("mensaje")}
        />
      </div>

      {/* Botón de Envío */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 rounded-lg bg-[#FAAE34] hover:bg-[#e99e28] text-[#21272A] font-extrabold text-base flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] disabled:opacity-60"
      >
        <Send className="w-5 h-5" />
        {isSubmitting ? "Procesando requerimiento..." : textoBoton}
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 pt-1">
        <ShieldCheck className="w-4 h-4 text-[#FAAE34]" />
        Sus datos están protegidos y serán tratados exclusivamente para fines comerciales.
      </div>
    </form>
  );
}
