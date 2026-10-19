// src/lib/datos-mock.ts
// Datos de prueba para el sitio web B2B de GRUPO GADAL

import type {
  Maquinaria,
  Servicio,
  PreguntaFrecuente,
  Testimonio,
  ArticuloBlog,
} from "@/types";

export type {
  Maquinaria,
  Servicio,
  PreguntaFrecuente,
  Testimonio,
  ArticuloBlog,
};


export const LISTA_MAQUINARIAS: Maquinaria[] = [
  {
    id: "maq-01",
    slug: "excavadora-cat-336",
    nombre: "Excavadora Hidráulica CAT 336",
    categoria: "Excavadoras",
    marca: "Caterpillar",
    modelo: "336 GC",
    año: 2023,
    sector: "Minería",
    capacidad: "36 Toneladas",
    potenciaHp: 314,
    pesoOperativoKg: 36200,
    imagenPrincipal: "/images/maquinaria/excavadora-cat-336-1.jpg",
    galeria: [
      "/images/maquinaria/excavadora-cat-336-1.jpg",
      "/images/maquinaria/excavadora-cat-336-1.jpg",
      "/images/maquinaria/excavadora-cat-336-3.jpg",
    ],
    descripcionCorta: "Excavadora de servicio pesado para zanjeo masivo, canteras y operaciones mineras de alta exigencia.",
    descripcionCompleta: "La CAT 336 ofrece un equilibrio óptimo entre productividad y eficiencia de combustible. Diseñada para trabajos intensivos en minería superficial y grandes obras de infraestructura, con cabina presurizada y sistema hidráulico de respuesta rápida.",
    disponible: true,
    destacado: true,
    especificaciones: {
      motor: "Cat C9.3B",
      potenciaBruta: "314 HP / 234 kW",
      pesoOperativo: "36,200 kg",
      capacidadCuchara: "2.28 m³",
      profundidadExcavacion: "7.52 m",
      velocidadDesplazamiento: "4.7 km/h",
      combustible: "Diésel",
      dimensionesTransporte: "11.18 m x 3.19 m x 3.74 m"
    },
    aplicaciones: ["Extracción en canteras", "Zanjeo profundo", "Movimiento de tierras masivo", "Demolición pesada"]
  },
  {
    id: "maq-02",
    slug: "cargador-cat-966l",
    nombre: "Cargador Frontal CAT 966L",
    categoria: "Cargadores Frontales",
    marca: "Caterpillar",
    modelo: "966L",
    año: 2022,
    sector: "Construcción",
    capacidad: "4.2 m³",
    potenciaHp: 307,
    pesoOperativoKg: 23220,
    imagenPrincipal: "/images/maquinaria/cargador-frontal-cat-966L-1.jpg",
    galeria: [
      "/images/maquinaria/excavadora-cat-336-1.jpg",
      "/images/maquinaria/excavadora-cat-336-1.jpg",
      "/images/maquinaria/excavadora-cat-336-3.jpg",
    ],
    descripcionCorta: "Cargador sobre ruedas de alto rendimiento para plantas de agregados, carga de tolvas y movimiento de materiales.",
    descripcionCompleta: "El cargador CAT 966L combina potencia y maniobrabilidad para ciclos rápidos de carga y acarreo. Ideal para obras viales, plantas de asfalto y proyectos de infraestructura civil.",
    disponible: true,
    destacado: true,
    especificaciones: {
      motor: "Cat C9.3 ACERT",
      potenciaBruta: "307 HP / 229 kW",
      pesoOperativo: "23,220 kg",
      capacidadCuchara: "4.20 m³",
      velocidadDesplazamiento: "39.5 km/h",
      combustible: "Diésel",
      dimensionesTransporte: "8.85 m x 2.99 m x 3.58 m"
    },
    aplicaciones: ["Carga de camiones volquetes", "Alimentación de tolvas y plantas", "Acopio de áridos", "Despeje de terreno"]
  },
  {
    id: "maq-03",
    slug: "tractor-oruga-cat-d8t",
    nombre: "Tractor de Oruga CAT D8T",
    categoria: "Tractores",
    marca: "Caterpillar",
    modelo: "D8T",
    año: 2021,
    sector: "Movimiento de Tierras",
    capacidad: "39 Toneladas",
    potenciaHp: 357,
    pesoOperativoKg: 39420,
    imagenPrincipal: "/images/maquinaria/tractor-de-oruga-cat-D8T-1.jpg",
    galeria: [
      "/images/maquinaria/tractor-de-oruga-cat-D8T-1.jpg",
      "/images/maquinaria/tractor-de-oruga-cat-D8T-2.jpg",
      "/images/maquinaria/tractor-de-oruga-cat-D8T-3.jpg",
    ],
    descripcionCorta: "Topador de empuje pesado con desgarrador trasero para desbroce, nivelación y corte en roca fracturada.",
    descripcionCompleta: "El CAT D8T es el referente en empuje para movimientos de tierra masivos y apertura de accesos viales. Equipado con hoja semi-U y desgarrador de un vástago para máxima penetración en terrenos difíciles.",
    disponible: true,
    destacado: true,
    especificaciones: {
      motor: "Cat C15 ACERT",
      potenciaBruta: "357 HP / 266 kW",
      pesoOperativo: "39,420 kg",
      capacidadCuchara: "8.70 m³ (Hoja Semi-U)",
      velocidadDesplazamiento: "10.6 km/h",
      combustible: "Diésel",
      dimensionesTransporte: "7.07 m x 3.05 m x 3.56 m"
    },
    aplicaciones: ["Apertura de accesos en cerro", "Desbroce y limpieza de obra", "Nivelación de plataformas", "Empuje de material pesado"]
  },
  {
    id: "maq-04",
    slug: "rodillo-compactador-bomag-bw211",
    nombre: "Rodillo Compactador BOMAG BW 211",
    categoria: "Rodillos",
    marca: "BOMAG",
    modelo: "BW 211 D-5",
    año: 2023,
    sector: "Obras Viales",
    capacidad: "12 Toneladas",
    potenciaHp: 130,
    pesoOperativoKg: 12100,
    imagenPrincipal: "/images/maquinaria/tractor-de-oruga-cat-D8T-1.jpg",
    galeria: [
      "/images/maquinaria/tractor-de-oruga-cat-D8T-1.jpg",
      "/images/maquinaria/tractor-de-oruga-cat-D8T-2.jpg",
      "/images/maquinaria/tractor-de-oruga-cat-D8T-3.jpg",
    ],
    descripcionCorta: "Compactador monocilíndrico para capas de base, terraplenes y proyectos viales de máxima compactación.",
    descripcionCompleta: "Diseñado para la compactación uniforme de suelos granulares y cohesivos. Con doble frecuencia de vibración y rodillo liso con opción a kit pata de cabra desmontable.",
    disponible: true,
    destacado: false,
    especificaciones: {
      motor: "Deutz TCD 3.6",
      potenciaBruta: "130 HP / 97 kW",
      pesoOperativo: "12,100 kg",
      capacidadCuchara: "Ancho de tambor: 2,130 mm",
      velocidadDesplazamiento: "12.0 km/h",
      combustible: "Diésel",
      dimensionesTransporte: "5.87 m x 2.27 m x 2.97 m"
    },
    aplicaciones: ["Compactación de sub-base y base", "Terraplenes en carreteras", "Plataformas industriales", "Presas y terraplenes"]
  },
  {
    id: "maq-05",
    slug: "retroexcavadora-cat-420f2",
    nombre: "Retroexcavadora CAT 420F2",
    categoria: "Retroexcavadoras",
    marca: "Caterpillar",
    modelo: "420F2 IT",
    año: 2022,
    sector: "Construcción",
    capacidad: "8.5 Toneladas",
    potenciaHp: 93,
    pesoOperativoKg: 8520,
    imagenPrincipal: "/images/maquinaria/tractor-de-oruga-cat-D8T-1.jpg",
    galeria: [
      "/images/maquinaria/tractor-de-oruga-cat-D8T-1.jpg",
      "/images/maquinaria/tractor-de-oruga-cat-D8T-2.jpg",
      "/images/maquinaria/tractor-de-oruga-cat-D8T-3.jpg",
    ],
    descripcionCorta: "Equipo versátil con acople rápido para zanjas de servicios, carga ligera y apoyo logístico en campamentos.",
    descripcionCompleta: "La CAT 420F2 proporciona la versatilidad necesaria para obras urbanas y de saneamiento. Cuenta con tracción 4x4, brazo extensible y circuito hidráulico auxiliar para martillo hidráulico.",
    disponible: true,
    destacado: true,
    especificaciones: {
      motor: "Cat C4.4",
      potenciaBruta: "93 HP / 69 kW",
      pesoOperativo: "8,520 kg",
      capacidadCuchara: "1.0 m³ frontal / 0.24 m³ posterior",
      profundidadExcavacion: "4.36 m (5.46 m extendido)",
      combustible: "Diésel",
      dimensionesTransporte: "7.16 m x 2.35 m x 3.65 m"
    },
    aplicaciones: ["Zanjeo para tuberías y ductos", "Carga en espacios confinados", "Instalación de postes y cimientos", "Limpieza de cunetas"]
  },
  {
    id: "maq-06",
    slug: "camion-volquete-volvo-fmx-8x4",
    nombre: "Camión Volquete Volvo FMX 8x4",
    categoria: "Volquetes",
    marca: "Volvo",
    modelo: "FMX 460 8x4",
    año: 2023,
    sector: "Minería",
    capacidad: "15 m³ / 30 Toneladas",
    potenciaHp: 460,
    pesoOperativoKg: 15800,
    imagenPrincipal: "/images/maquinaria/tractor-de-oruga-cat-D8T-1.jpg",
    galeria: [
      "/images/maquinaria/tractor-de-oruga-cat-D8T-1.jpg",
      "/images/maquinaria/tractor-de-oruga-cat-D8T-2.jpg",
      "/images/maquinaria/tractor-de-oruga-cat-D8T-3.jpg",
    ],
    descripcionCorta: "Tolva roquera reforzada en acero Hardox para acarreo de mineral, desmontes y material granular en rutas difíciles.",
    descripcionCompleta: "El Volvo FMX 8x4 está configurado para soportar las condiciones más exigentes del sector minero y construcción pesada. Motor D13 de alto torque y caja automatizada I-Shift con marchas supercortas para pendientes pronunciadas.",
    disponible: true,
    destacado: false,
    especificaciones: {
      motor: "Volvo D13A",
      potenciaBruta: "460 HP",
      pesoOperativo: "15,800 kg (Tara)",
      capacidadCuchara: "Tolva de 15 m³ en Hardox 450",
      combustible: "Diésel",
      dimensionesTransporte: "8.65 m x 2.55 m x 3.42 m"
    },
    aplicaciones: ["Transporte de mineral en tajo", "Acarreo de desmonte y sobrecapa", "Traslado de agregados a planta", "Obras de gran envergadura"]
  }
];

export const LISTA_SERVICIOS: Servicio[] = [
  {
    id: "alquiler-flota",
    titulo: "Alquiler de Flota",
    subtitulo: "Maquinaria pesada moderna",
    descripcion: "Flota moderna de excavadoras, cargadores frontales, rodillos y motoniveladoras adaptadas a proyectos de gran escala. Modalidades flexibles de alquiler a corto y largo plazo.",
    icono: "Truck"
  },
  {
    id: "soporte-247",
    titulo: "Soporte 24/7",
    subtitulo: "Asistencia técnica en obra",
    descripcion: "Respuesta inmediata. Mantenimiento preventivo y correctivo para garantizar cero paradas no programadas en obra.",
    icono: "Wrench"
  },
  {
    id: "logistica-traslado",
    titulo: "Logística y Traslado",
    subtitulo: "Cobertura a nivel nacional",
    descripcion: "Gestión integral de transporte y entrega de maquinaria pesada en cualquier punto del Perú, facilitando el acceso a frentes de trabajo en mina, sierra y selva.",
    icono: "Compass"
  },
  {
    id: "asesoria-tecnica",
    titulo: "Asesoría Técnica",
    subtitulo: "Selección del equipo adecuado",
    descripcion: "Dimensionamiento de flota según los requerimientos operativos de tu obra. Equipos con certificaciones vigentes, documentación al día y opción de operadores homologados.",
    icono: "ShieldCheck"
  }
];

// Los 5 puntos EXACTOS requeridos por el usuario para Por qué elegirnos
export const PUNTOS_POR_QUE_ELEGIRNOS = [
  {
    numero: "01",
    titulo: "Atención directa, sin intermediarios",
    descripcion: "Hablas directo con quien toma las decisiones - respuestas más rápidas y soluciones a tu medida."
  },
  {
    numero: "02",
    titulo: "Disponibilidad y cotización ágil",
    descripcion: "Sin procesos burocráticos de empresa grande: cotizamos y coordinamos el mismo día."
  },
  {
    numero: "03",
    titulo: "Maquinaria verificada antes de cada entrega",
    descripcion: "Mantenimiento preventivo revisado en cada equipo, sin excepciones."
  },
  {
    numero: "04",
    titulo: "Precios competitivos y transparentes",
    descripcion: "Sin costos ocultos ni letra pequeña - lo que cotizamos es lo que pagas."
  },
  {
    numero: "05",
    titulo: "Seguridad operativa desde el primer día",
    descripcion: "Protocolos HSE aplicados en cada entrega, respaldados por certificación en proceso."
  }
];

export const LISTA_FAQ: PreguntaFrecuente[] = [
  {
    id: "faq-1",
    pregunta: "¿Cuáles son los requisitos para alquilar maquinaria pesada?",
    respuesta: "Para personas jurídicas solicitamos ficha RUC activa, vigencia de poder del representante legal, DNI del firmante y la orden de servicio o contrato de alquiler firmado. Para personas naturales con negocio, DNI, RUC y sustento de actividad."
  },
  {
    id: "faq-2",
    pregunta: "¿El servicio incluye operador y combustible?",
    respuesta: "Ofrecemos modalidades flexibles. Por defecto, el servicio es a 'máquina seca' (sin combustible ni operador), permitiendo a su empresa asignar su propio personal calificado. No obstante, podemos coordinar opciones integrales según el requerimiento de su proyecto."
  },
  {
    id: "faq-3",
    pregunta: "¿Cómo se gestiona el traslado de los equipos a mi obra?",
    respuesta: "Coordinamos el transporte en tracto-camión cama baja hasta el punto exacto de su proyecto en cualquier departamento del Perú. El costo de movilización y desmovilización se especifica detalladamente en la cotización formal."
  },
  {
    id: "faq-4",
    pregunta: "¿Qué sucede si una máquina presenta una falla mecánica en faena?",
    respuesta: "Nuestro equipo de soporte técnico responde de inmediato para realizar el diagnóstico y la reparación en obra. Si la incidencia requiere intervención mayor, coordinamos las acciones necesarias para minimizar el tiempo de inactividad de su operación."
  },
  {
    id: "faq-5",
    pregunta: "¿Cuál es el tiempo mínimo de alquiler?",
    respuesta: "Atendemos requerimientos desde periodos semanales hasta proyectos de mediano y largo plazo (contratos mensuales o por temporada de obra), ofreciendo tarifas preferenciales para periodos extendidos."
  }
];

export const LISTA_TESTIMONIOS: Testimonio[] = [
  {
    id: "test-1",
    nombre: "Ing. Carlos Mendoza",
    cargo: "Jefe de Compras y Logística",
    obra: "Obra vial - Junin",
    empresa: "Zoomerr",
    comentario: "En la licitación vial necesitábamos maquinaria homologada con documentación técnica al día en menos de 48 horas. GRUPO GADAL no solo movilizó los equipos a tiempo, sino que la gestión documental fue impecable. Cero trabas administrativas.",
    sector: "Construcción e Infraestructura",
    imagen: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    logoTipo: "Zoomerr"
  },
  {
    id: "test-2",
    nombre: "Marco Santillán",
    cargo: "Superintendente de Maquinaria",
    obra: "Operación Minera - Arequipa",
    empresa: "ArtVenue",
    comentario: "Valoramos mucho el trato directo con la gerencia y la rapidez para cotizar. Las unidades llegaron con sus inspecciones al día y listas para trabajar en altura. Cero detenciones no programadas.",
    sector: "Minería",
    imagen: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80",
    logoTipo: "ArtVenue"
  },
  {
    id: "test-3",
    nombre: "Ing. Patricia Valdivia",
    cargo: "Directora de Operaciones",
    obra: "Movimiento masivo - Lima",
    empresa: "SmartFinder",
    comentario: "La transparencia en las tarifas y el acompañamiento técnico antes de enviar las máquinas nos dieron la tranquilidad que necesitábamos para un proyecto de gran volumen.",
    sector: "Movimiento de Tierras",
    imagen: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=800&q=80",
    logoTipo: "SmartFinder"
  }
];

export const LISTA_BLOG: ArticuloBlog[] = [
  {
    id: "blog-1",
    slug: "criterios-clave-alquilar-excavadoras-obra",
    titulo: "Criterios clave para seleccionar la excavadora adecuada según el tipo de terreno",
    categoria: "Guías Técnicas",
    fecha: "12 Mar 2026",
    tiempoLectura: "5 min",
    autor: "Área Técnica GRUPO GADAL",
    resumen: "Conoce los factores de tonelaje, profundidad de excavación y consumo de combustible para no sobredimensionar la maquinaria en su frente de obra.",
    imagen: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=1000&q=80",
    contenido: "Al planificar un movimiento de tierras, la elección de la excavadora adecuada influye directamente en los costos unitarios del metro cúbico removido. Factores como la densidad del material, la altura del banco y la capacidad de los camiones de acarreo deben analizarse en conjunto..."
  },
  {
    id: "blog-2",
    slug: "mantenimiento-preventivo-en-maquinaria-pesada",
    titulo: "La importancia del mantenimiento preventivo diario antes del encendido en faena",
    categoria: "Mantenimiento",
    fecha: "28 Feb 2026",
    tiempoLectura: "4 min",
    autor: "Soporte Mecánico GADAL",
    resumen: "Pasos fundamentales para la inspección visual de 360 grados, niveles de fluidos y detección temprana de fugas para prevenir detenciones no programadas.",
    imagen: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1000&q=80",
    contenido: "Una rutina de inspección preoperacional de 10 minutos cada mañana previene incidentes mayores. Revisar el filtro separador de agua, el engrase en puntos de articulación y la tensión de las orugas asegura una jornada productiva y segura."
  },
  {
    id: "blog-3",
    slug: "normas-seguridad-operacion-en-canteras",
    titulo: "Buenas prácticas de seguridad operacional en canteras y tajos abiertos",
    categoria: "Seguridad",
    fecha: "15 Feb 2026",
    tiempoLectura: "6 min",
    autor: "Seguridad Industrial GADAL",
    resumen: "Protocolos de aproximación, comunicación radial y delimitación de radios de giro indispensables para un trabajo seguro en zonas de carguío y tránsito pesado.",
    imagen: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1000&q=80",
    contenido: "La interacción entre equipos de carga pesada y unidades de acarreo exige una estricta coordinación. Establecer bermas de seguridad adecuadas, señalización clara y procedimientos de bloqueo de energía protege la integridad de todo el equipo de trabajo."
  }
];

export const LISTA_DEPARTAMENTOS_PERU = [
  "Amazonas",
  "Áncash",
  "Apurímac",
  "Arequipa",
  "Ayacucho",
  "Cajamarca",
  "Callao",
  "Cusco",
  "Huancavelica",
  "Huánuco",
  "Ica",
  "Junín",
  "La Libertad",
  "Lambayeque",
  "Lima",
  "Loreto",
  "Madre de Dios",
  "Moquegua",
  "Pasco",
  "Piura",
  "Puno",
  "San Martín",
  "Tacna",
  "Tumbes",
  "Ucayali"
];

export const LISTA_PAISES = [
  { codigo: "PE", nombre: "Perú", prefijo: "+51" },
  { codigo: "CL", nombre: "Chile", prefijo: "+56" },
  { codigo: "BO", nombre: "Bolivia", prefijo: "+591" },
  { codigo: "CO", nombre: "Colombia", prefijo: "+57" },
  { codigo: "EC", nombre: "Ecuador", prefijo: "+593" }
];
