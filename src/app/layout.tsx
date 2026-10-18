import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BarraContacto } from "@/components/BarraContacto";
import { BarraNavegacion } from "@/components/BarraNavegacion";
import { PiePagina } from "@/components/PiePagina";
import { BotonWhatsApp } from "@/components/BotonWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GRUPO GADAL | Alquiler de Maquinaria Pesada B2B en el Perú",
  description:
    "Flota moderna de maquinaria pesada para minería, obras viales y construcción. Soporte técnico en obra y cobertura a nivel nacional.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#21272A]">
        <BarraContacto />
        <BarraNavegacion />
        <main className="flex-1">{children}</main>
        <PiePagina />
        <BotonWhatsApp />
      </body>
    </html>
  );
}
