# RESUMEN DE CONSTRUCCIÓN — PROYECTO GRUPO GADAL

Sitio web B2B y plataforma de cotización de alquiler de maquinaria pesada para **GRUPO GADAL**, desarrollado con **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, **Zustand** y **React Hook Form con Zod**.

---

## 1. ¿Qué se construyó?

Se construyó la plataforma web corporativa completa con todas las rutas solicitadas, adaptabilidad mobile-first, diseño B2B sobrio y un flujo de cotización interactivo de alta conversión:

* **Tokens de Diseño y Tipografía Exactos:**
  * `oscuro`: `#21272A` (textos principales, cabecera superior y footer)
  * `ambar`: `#FAAE34` (acento corporativo, botones principales y CTAs)
  * `fondoClaro`: `#F9F2E6` (secciones alternas y testimonios)
  * `grisFondo`: `#F1F1F1` (fondos neutros y tarjetas secundarias)
  * `blanco`: `#FFFFFF` (fondo dominante)
  * Tipografía `Inter` cargada con `next/font/google` vía `--font-inter`.
  * Escala tipográfica: H1 (34-36px bold), H2 (26-28px bold), H3 (18-20px semibold), Eyebrow (12-13px bold mayúsculas ámbar) y cuerpo (15-16px).

* **Rutas implementadas (8 páginas):**
  1. `/` (**Inicio / Home**): Hero B2B, bloques de servicios (Alquiler de Flota, Soporte 24/7, Logística y Traslado, Asesoría Técnica), sección "El reto operativo en obra" (problemas vs. solución GADAL), flota destacada, testimonios B2B, FAQ interactivo con acordeón y CTA final.
  2. `/equipos` (**Catálogo**): Sidebar de filtros sincronizado en tiempo real con la URL (`useSearchParams`), buscador por texto, filtro por sector y por tipo de maquinaria, botón "Filtros" con drawer/modal responsive en pantallas móviles (`< md`), y grid de tarjetas (3 columnas desktop / 1 móvil).
  3. `/equipos/[slug]` (**Ficha Técnica**): Breadcrumb dinámico, galería interactiva con selector de miniaturas, tabla detallada de especificaciones técnicas (potencia, peso, cuchara, dimensiones, motor), botón "Añadir a Cotización", botón directo a WhatsApp con mensaje contextual del equipo y equipos relacionados.
  4. `/nosotros` (**Quiénes Somos**): Historia, Misión, Visión, sección **"Por qué elegirnos"** con los **EXACTOS 5 PUNTOS** requeridos por el cliente (Atención directa sin intermediarios, Disponibilidad y cotización ágil, Maquinaria verificada antes de cada entrega, Precios competitivos y transparentes, Seguridad operativa desde el primer día), y bloque de certificaciones/seguridad.
  5. `/proyectos` (**Sectores y Metodología**): Sectores atendidos (Minería, Infraestructura Vial, Movimiento de Tierras, Obras Hidráulicas), metodología paso a paso (Evaluación → Verificación → Despacho → Acompañamiento) y callout de proyectos representativos cualitativos (sin inventar cifras de rendimiento).
  6. `/contacto` (**Contacto B2B**): Formulario con validación estricta Zod y tarjeta con datos de contacto (dirección en Lima, teléfono, WhatsApp, correo y horario de operaciones).
  7. `/carrito` (**Carrito de Cotización**): Stepper interactivo de 3 pasos (1. Tienda → 2. Carrito → 3. Finalizar), resumen de equipos seleccionados con contador (+/-) y toggle de operación (Alquiler/Compra), formulario B2B validado con selector de país/departamento y alternador RUC/DNI, y pantalla final de confirmación con código de cotización generado (`GADAL-COT-XXXX`).
  8. `/blog` (**Blog Técnico**): Grid de artículos técnicos con filtro interactivo por categorías (Guías Técnicas, Mantenimiento, Seguridad).

* **Interactividad y Estado Global:**
  * **Carrito con Zustand y persistencia:** Guardado en `localStorage` con soporte seguro para SSR/Node.js.
  * **Botón flotante de WhatsApp:** Enlace permanente a `https://wa.me/51962335073` con mensaje predeterminado dinámico según la página o ficha técnica visualizada.
  * **Formularios con validación Zod y React Hook Form:** Validación condicional en tiempo real (Razón social requerida solo si es RUC, celular con código separado, selector de países y departamentos).

---

## 2. Lista de Componentes y Archivos Creados

```
/
├── RESUMEN-BUILD.md                               # Este resumen de construcción
├── tailwind.config.ts                             # Configuración de tokens de color y tipografía Inter
├── next.config.ts                                 # Configuración de remotePatterns para imágenes
└── src/
    ├── app/
    │   ├── globals.css                            # Tokens CSS @theme inline y variables corporativas
    │   ├── layout.tsx                             # Layout raíz con Inter font, BarraNavegacion, PiePagina y BotonWhatsApp
    │   ├── page.tsx                               # Página de Inicio (Home)
    │   ├── equipos/
    │   │   ├── page.tsx                           # Catálogo con Suspense boundary
    │   │   └── [slug]/
    │   │       └── page.tsx                       # Ficha técnica dinámica con SSG (generateStaticParams)
    │   ├── nosotros/
    │   │   └── page.tsx                           # Página Quiénes Somos
    │   ├── proyectos/
    │   │   └── page.tsx                           # Página Sectores y Metodología
    │   ├── contacto/
    │   │   └── page.tsx                           # Página de Contacto
    │   ├── carrito/
    │   │   └── page.tsx                           # Carrito de Cotización y Checkout B2B
    │   └── blog/
    │       └── page.tsx                           # Blog de Maquinaria Pesada
    │
    ├── componentes/ (Propios en PascalCase)
    │   ├── BarraNavegacion.tsx                    # Header con navegación, contador dinámico y menú móvil
    │   ├── PiePagina.tsx                          # Footer corporativo con datos de contacto y cobertura
    │   ├── BotonWhatsApp.tsx                      # Botón flotante fixed con mensaje contextual
    │   ├── TarjetaMaquinaria.tsx                  # Tarjeta de producto con badges, specs y acción de cotizar
    │   └── FormularioCotizacion.tsx               # Formulario B2B con React Hook Form + Zod (RUC/DNI)
    │
    ├── componentes/ui/ (shadcn base sin renombrar)
    │   ├── button.tsx                             # Botón base shadcn
    │   ├── input.tsx                              # Input estilizado con tokens corporativos
    │   ├── textarea.tsx                           # Textarea estilizado
    │   ├── label.tsx                              # Label accesible
    │   ├── card.tsx                               # Tarjetas contenedoras base
    │   └── badge.tsx                              # Badges de categoría y disponibilidad
    │
    ├── secciones/ (Kebab-case en español latino)
    │   ├── hero-inicio.tsx                        # Hero principal con llamada a la acción
    │   ├── servicios-inicio.tsx                   # 4 bloques de servicios
    │   ├── reto-operativo.tsx                     # Sección de continuidad operativa en obra
    │   ├── flota-destacada.tsx                    # Muestra de 3 equipos destacados
    │   ├── testimonios-seccion.tsx                # Opiniones de contratistas y residentes
    │   ├── preguntas-frecuentes.tsx               # Acordeón de FAQ
    │   ├── llamado-accion.tsx                     # Banner CTA de conversión
    │   ├── catalogo-equipos.tsx                   # Lógica del catálogo con filtros URL y modal móvil
    │   ├── ficha-tecnica.tsx                      # Galería y tabla técnica del equipo
    │   ├── nosotros-seccion.tsx                   # Historia, Misión, Visión y los 5 puntos exactos
    │   ├── proyectos-seccion.tsx                  # Sectores, metodología y proyectos representativos
    │   ├── formulario-contacto.tsx                # Vista de contacto con tarjeta informativa
    │   ├── carrito-cotizacion.tsx                 # Flujo del carrito con Stepper de 3 pasos
    │   └── blog-seccion.tsx                       # Listado de artículos y selector de categoría
    │
    └── lib/
        ├── datos-mock.ts                          # Datos representativos (equipos, FAQ, blog, departamentos)
        ├── estado-carrito.ts                      # Store Zustand persistido con SSR safe storage
        └── utils.ts                               # Utilidad cn()
```

---

## 3. Decisiones de Diseño e Implementación Tomadas

Para que puedas revisarlas con total claridad:

1. **Tokens en Tailwind v4 y `tailwind.config.ts`:**
   Dado que el proyecto utiliza Tailwind CSS v4 (`@tailwindcss/postcss: ^4`), los tokens se definieron en `@theme inline` dentro de `globals.css` (`--color-oscuro`, `--color-ambar`, etc.) y también se generó `tailwind.config.ts` con los mismos tokens exactos (`oscuro: #21272A`, `ambar: #FAAE34`, `fondoClaro: #F9F2E6`, `grisFondo: #F1F1F1`, `blanco: #FFFFFF`), asegurando compatibilidad total tanto en el compilador como en herramientas de autocompletado.

2. **Cero cifras inventadas:**
   Siguiendo rigurosamente tu indicación, no se incluyeron estadísticas ni métricas numéricas ficticias (como horas o porcentajes de disponibilidad). Los casos de éxito y testimonios se formularon con un enfoque cualitativo centrado en la continuidad operativa, puntualidad de despacho y cumplimiento de estándares de seguridad.

3. **Los 5 puntos exactos en "Por qué elegirnos":**
   En la sección `/nosotros`, el apartado "Por qué elegirnos" muestra de manera destacada y numerada los 5 puntos literales solicitados:
   1. *Atención directa sin intermediarios*
   2. *Disponibilidad y cotización ágil*
   3. *Maquinaria verificada antes de cada entrega*
   4. *Precios competitivos y transparentes*
   5. *Seguridad operativa desde el primer día*

4. **Stepper de 3 pasos en el Carrito (`/carrito`):**
   * **Paso 1 (Tienda):** Vincula directamente al catálogo de equipos para seguir agregando unidades.
   * **Paso 2 (Carrito):** Muestra los equipos seleccionados y el formulario. En pantallas móviles, los equipos se colocan primero en el flujo y el formulario después.
   * **Paso 3 (Finalizar):** Pantalla de confirmación con generación de código aleatorio de solicitud (`GADAL-COT-XXXX`) y botón para dar seguimiento directo por WhatsApp con el mensaje precargado.

5. **Formulario con validación RUC / DNI condicional:**
   Al seleccionar **RUC**, el campo *Razón Social* se vuelve visible y obligatorio mediante la regla de refinamiento de Zod. Si se selecciona **DNI**, el campo se oculta automáticamente.

6. **Next.js Image Optimization:**
   Se configuró `remotePatterns` en `next.config.ts` para el dominio `images.unsplash.com`, permitiendo que las fotografías de maquinaria pesada se sirvan optimizadas en formato WebP con dimensiones responsivas.
