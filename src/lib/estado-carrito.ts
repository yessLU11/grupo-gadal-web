// src/lib/estado-carrito.ts
// Store global de Zustand para el carrito de cotización con persistencia en localStorage

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Maquinaria, ItemCotizacion, TipoOperacion } from "@/types";

export type { ItemCotizacion };

interface EstadoCarrito {
  items: ItemCotizacion[];
  agregarEquipo: (maquinaria: Maquinaria, tipoOperacion?: "Alquiler") => void;
  eliminarEquipo: (id: string) => void;
  actualizarCantidad: (id: string, cantidad: number) => void;
  actualizarTipoOperacion: (id: string, tipoOperacion: "Alquiler") => void;
  limpiarCarrito: () => void;
  obtenerTotalItems: () => number;
}

export const useCarritoStore = create<EstadoCarrito>()(
  persist(
    (set, get) => ({
      items: [],

      agregarEquipo: (maquinaria, tipoOperacion = "Alquiler") => {
        set((state) => {
          const itemExistente = state.items.find(
            (item) => item.maquinaria.id === maquinaria.id && item.tipoOperacion === tipoOperacion
          );

          if (itemExistente) {
            return {
              items: state.items.map((item) =>
                item.id === itemExistente.id
                  ? { ...item, cantidad: item.cantidad + 1 }
                  : item
              ),
            };
          }

          const nuevoItem: ItemCotizacion = {
            id: `${maquinaria.id}-${Date.now()}`,
            maquinaria,
            cantidad: 1,
            tipoOperacion,
          };

          return { items: [...state.items, nuevoItem] };
        });
      },

      eliminarEquipo: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      actualizarCantidad: (id, cantidad) => {
        if (cantidad <= 0) {
          get().eliminarEquipo(id);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, cantidad } : item
          ),
        }));
      },

      actualizarTipoOperacion: (id, tipoOperacion) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, tipoOperacion } : item
          ),
        }));
      },

      limpiarCarrito: () => {
        set({ items: [] });
      },

      obtenerTotalItems: () => {
        return get().items.reduce((total, item) => total + item.cantidad, 0);
      },
    }),
    {
      name: "gadal-carrito-cotizacion",
      storage: createJSONStorage(() =>
        typeof window !== "undefined"
          ? window.localStorage
          : {
              getItem: () => null,
              setItem: () => {},
              removeItem: () => {},
            }
      ),
    }
  )
);
