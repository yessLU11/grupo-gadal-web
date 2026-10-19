-- ==============================================================================
-- Migración Inicial: Esquema DDL Base para GRUPO GADAL
-- Archivo: supabase/migrations/20261018000000_esquema_inicial.sql
-- ==============================================================================

-- 1. Habilitar extensión para generación de identificadores UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 2. TABLA: maquinarias
-- Catálogo de maquinaria pesada disponible para alquiler y venta
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.maquinarias (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    nombre TEXT NOT NULL,
    categoria TEXT NOT NULL,
    descripcion TEXT,
    especificaciones_json JSONB NOT NULL DEFAULT '{}'::jsonb,
    imagen_url TEXT,
    estado TEXT NOT NULL DEFAULT 'disponible' CHECK (estado IN ('disponible', 'mantenimiento', 'alquilado', 'reservado')),
    destacado BOOLEAN NOT NULL DEFAULT false,
    precio_dia NUMERIC(10, 2),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Comentarios documentales en la tabla maquinarias
COMMENT ON TABLE public.maquinarias IS 'Catálogo de flota y maquinaria pesada de GRUPO GADAL';
COMMENT ON COLUMN public.maquinarias.slug IS 'Identificador semántico para URLs amigables';
COMMENT ON COLUMN public.maquinarias.especificaciones_json IS 'Ficha técnica en formato JSON (motor, potencia, peso operativo, etc.)';
COMMENT ON COLUMN public.maquinarias.estado IS 'Estado operativo del equipo: disponible, mantenimiento, alquilado, reservado';

-- Índices para optimizar consultas frecuentes
CREATE INDEX IF NOT EXISTS idx_maquinarias_slug ON public.maquinarias (slug);
CREATE INDEX IF NOT EXISTS idx_maquinarias_categoria ON public.maquinarias (categoria);
CREATE INDEX IF NOT EXISTS idx_maquinarias_destacado ON public.maquinarias (destacado);
CREATE INDEX IF NOT EXISTS idx_maquinarias_estado ON public.maquinarias (estado);

-- ==============================================================================
-- 3. TABLA: cotizaciones
-- Registro de solicitudes de cotización generadas por clientes B2B
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.cotizaciones (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    codigo_cotizacion TEXT NOT NULL UNIQUE,
    cliente_nombre TEXT NOT NULL,
    cliente_email TEXT NOT NULL,
    cliente_telefono TEXT NOT NULL,
    empresa_nombre TEXT,
    estado TEXT NOT NULL DEFAULT 'pendiente' CHECK (estado IN ('pendiente', 'en_revision', 'aprobada', 'rechazada', 'contactado')),
    items_json JSONB NOT NULL DEFAULT '[]'::jsonb,
    total_estimado NUMERIC(10, 2),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Comentarios documentales en la tabla cotizaciones
COMMENT ON TABLE public.cotizaciones IS 'Solicitudes de cotización de alquiler y compra de maquinaria';
COMMENT ON COLUMN public.cotizaciones.codigo_cotizacion IS 'Código único de seguimiento (ej. COT-2026-0001)';
COMMENT ON COLUMN public.cotizaciones.items_json IS 'Detalle de los equipos, cantidades y tipo de operación incluidos en la solicitud';
COMMENT ON COLUMN public.cotizaciones.estado IS 'Estado del flujo comercial: pendiente, en_revision, aprobada, rechazada, contactado';

-- Índices para optimizar búsquedas y reportes de cotizaciones
CREATE INDEX IF NOT EXISTS idx_cotizaciones_codigo ON public.cotizaciones (codigo_cotizacion);
CREATE INDEX IF NOT EXISTS idx_cotizaciones_created_at ON public.cotizaciones (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_cotizaciones_estado ON public.cotizaciones (estado);

-- ==============================================================================
-- 4. SEGURIDAD: ROW LEVEL SECURITY (RLS)
-- ==============================================================================

-- 4.1 Habilitar RLS en maquinarias
ALTER TABLE public.maquinarias ENABLE ROW LEVEL SECURITY;

-- Política de lectura pública para catálogo de maquinarias
CREATE POLICY "Permitir lectura publica de maquinarias"
    ON public.maquinarias
    FOR SELECT
    TO public
    USING (true);

-- 4.2 Habilitar RLS en cotizaciones
ALTER TABLE public.cotizaciones ENABLE ROW LEVEL SECURITY;

-- Política de inserción pública para cotizaciones (cualquier cliente potencial puede enviar su solicitud)
CREATE POLICY "Permitir insercion publica de cotizaciones"
    ON public.cotizaciones
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Política de lectura de cotizaciones reservada a usuarios autenticados (administradores y comerciales)
CREATE POLICY "Permitir lectura de cotizaciones solo para usuarios autenticados"
    ON public.cotizaciones
    FOR SELECT
    TO authenticated
    USING (true);
