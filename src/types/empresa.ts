// src/types/empresa.ts
// Definiciones de tipos para información institucional, blog, testimonios y soporte

export interface Servicio {
  id: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  icono: string;
}

export interface PreguntaFrecuente {
  id: string;
  pregunta: string;
  respuesta: string;
}

export interface Testimonio {
  id: string;
  nombre: string;
  cargo: string;
  obra?: string;
  empresa: string;
  comentario: string;
  sector: string;
  imagen: string;
  logoTipo?: "Zoomerr" | "ArtVenue" | "SmartFinder" | "SHELLS" | "kontrastr" | "WAVESMARATHON";
}

export interface ArticuloBlog {
  id: string;
  slug: string;
  titulo: string;
  categoria: string;
  fecha: string;
  tiempoLectura: string;
  autor: string;
  resumen: string;
  imagen: string;
  contenido: string;
}
