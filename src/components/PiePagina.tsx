// src/components/PiePagina.tsx
import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { BarraEnlacesLegales } from "@/components/BarraEnlacesLegales";
import { DATOS_EMPRESA } from "@/lib/constantes-empresa";

export function PiePagina() {
  return (
    <footer className="bg-[#FAAE34] text-[#21272A]">
      <BarraEnlacesLegales />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Columna 1: Identidad con Logo Oficial */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="bg-[#000000] px-3 py-1.5 rounded-lg border border-amber-500/40 shadow-sm inline-block">
                <img
                  src="/logo-gadal.png"
                  alt="Logo Oficial GRUPO GADAL"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-[#FFFFFF]/90 text-sm font-medium leading-relaxed">
              Empresa especializada en el alquiler y suministro de maquinaria pesada para minería, obras de infraestructura y movimiento de tierras en todo el Perú.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#FFFFFF]">
              <ShieldCheck className="w-4 h-4 text-[#FFFFFF]" />
              Equipos verificados antes de cada entrega
            </div>
            <p className="text-xs font-semibold text-[#FFFFFF]/80 pt-1">
              {DATOS_EMPRESA.razonSocial} · RUC: {DATOS_EMPRESA.ruc}
            </p>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div>
            <h4 className="text-[#FFFFFF] font-extrabold text-base mb-4 tracking-wide border-b border-amber-600/40 pb-2">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link href="/" className="text-white hover:text-gray-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF]" /> Inicio
                </Link>
              </li>
              <li>
                <Link href="/equipos" className="text-white hover:text-gray-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF]" /> Catálogo de Maquinaria
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-white hover:text-gray-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF]" /> Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-white hover:text-gray-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF]" /> Sectores y Metodología
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-gray-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF]" /> Blog Técnico
                </Link>
              </li>
              <li>
                <Link href="/carrito" className="text-white hover:text-gray-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF]" /> Solicitar Cotización
                </Link>
              </li>
            </ul>
          </div>


          {/* Columna 3: Sectores Atendidos */}
          <div>
            <h4 className="text-[#FFFFFF] font-extrabold text-base mb-4 tracking-wide border-b border-amber-600/40 pb-2">
              Sectores Atendidos
            </h4>
            <ul className="space-y-2 text-sm font-medium text-[#FFFFFF]/90">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
                Minería a tajo abierto y canteras
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
                Infraestructura vial y carreteras
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
                Movimiento masivo de tierras
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
                Edificación y obras civiles
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
                Obras hidráulicas y saneamiento
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto directo B2B */}
          <div>
            <h4 className="text-[#FFFFFF] font-extrabold text-base mb-4 tracking-wide border-b border-amber-600/40 pb-2">
              Contacto Comercial
            </h4>
            <ul className="space-y-3 text-sm text-[#FFFFFF]">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#FFFFFF] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-[#FFFFFF]/75 font-semibold">Central y WhatsApp:</span>
                  <a href={DATOS_EMPRESA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-extrabold hover:text-white transition-colors">
                    {DATOS_EMPRESA.telefonoInternacional}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#FFFFFF] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-[#FFFFFF]/75 font-semibold">Correo:</span>
                  <a href={`mailto:${DATOS_EMPRESA.email}`} className="font-bold hover:text-white transition-colors">
                    {DATOS_EMPRESA.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFFFFF] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-[#FFFFFF]/75 font-semibold">Sede Principal:</span>
                  <span className="font-semibold">{DATOS_EMPRESA.ubicacion} (Despachos a nivel nacional)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#FFFFFF] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-[#FFFFFF]/75 font-semibold">Horario de Atención:</span>
                  <span className="font-semibold">{DATOS_EMPRESA.horarioDetallado.semana}</span>
                  <span className="block font-semibold">{DATOS_EMPRESA.horarioDetallado.sabado}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-amber-600/50 text-center sm:flex sm:justify-between sm:text-left text-xs font-semibold text-[#FFFFFF]">
          <p>© {new Date().getFullYear()} {DATOS_EMPRESA.razonSocial}. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">Plataforma B2B de Alquiler de Maquinaria Pesada en el Perú.</p>
        </div>
      </div>
    </footer>
  );
}