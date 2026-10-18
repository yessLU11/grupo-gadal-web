import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { DATOS_EMPRESA } from "@/lib/constantes-empresa";

export function BarraContacto() {
  return (
    <div className="w-full bg-[#FAAE34] text-[#21272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-sm font-medium">
        <div className="flex items-center gap-6">
          <a href={DATOS_EMPRESA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-80">
            <Phone className="w-3.5 h-3.5" />
            {DATOS_EMPRESA.telefonoInternacional}
          </a>
          <a href={`mailto:${DATOS_EMPRESA.email}`} className="hidden sm:flex items-center gap-1.5 hover:opacity-80">
            <Mail className="w-3.5 h-3.5" />
            {DATOS_EMPRESA.email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube className="w-4 h-4 hover:opacity-80" /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF className="w-4 h-4 hover:opacity-80" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X"><FaXTwitter className="w-4 h-4 hover:opacity-80" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="w-4 h-4 hover:opacity-80" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn className="w-4 h-4 hover:opacity-80" /></a>
        </div>
      </div>
    </div>
  );
}