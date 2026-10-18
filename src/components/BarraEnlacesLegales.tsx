import Link from "next/link";

const enlaces = [
  { nombre: "Libro de Reclamaciones", ruta: "/libro-de-reclamaciones" },
  { nombre: "Bolsa de Trabajo", ruta: "/bolsa-de-trabajo" },
  { nombre: "Canal de Ética y Denuncias", ruta: "/canal-etica" },
  { nombre: "Portal de Proveedores / Logística", ruta: "/portal-proveedores" },
];

export function BarraEnlacesLegales() {
  return (
    <section className="relative py-6 sm:py-4 bg-[#ffffff]/75 text-black overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-3">
            {enlaces.map((enlace) => (
            <Link
                key={enlace.ruta}
                href={enlace.ruta}
                className="px-5 py-2.5 rounded-full bg-[#FAAE34] hover:bg-[#e99e28] text-[#FFFFFF] font-bold text-sm text-center transition-colors"
            >
                {enlace.nombre}
            </Link>
            ))}
        </div>
        
    </section>
  );
}