import { createContext, useState } from "react";

import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import type { productosAgregados } from "tipos/CarritoCargado";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState<productosAgregados[]>([]);

  const agregarAlCarrito = (
    producto: InformacionDeProducto,
    cantidad: number
  ): void => {
    if (producto.stock === 0) {
      return;
    } else {
      let productoAgregado: productosAgregados = {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad,
        urlImagen: producto.urlImagen,
        stock: producto.stock,
      };

      const indiceProductoExistente = carrito.findIndex(
        (item) => item.id === producto.id
      );
      const nuevoCarrito: productosAgregados[] = structuredClone(carrito);

      if (indiceProductoExistente >= 0 && cantidad >= 1) {
        nuevoCarrito[indiceProductoExistente].cantidad = cantidad;
        setCarrito(nuevoCarrito);
      } else {
        nuevoCarrito.push(productoAgregado);

        setCarrito(nuevoCarrito);
      }
    }
  };

  const eliminarDelCarrito = (producto: InformacionDeProducto) => {
    const indiceProductoExistente = carrito.findIndex(
      (item) => item.id === producto.id
    );
    const nuevoCarrito: productosAgregados[] = structuredClone(carrito);

    if (indiceProductoExistente >= 0) {
      nuevoCarrito.splice(indiceProductoExistente, 1);
      setCarrito(nuevoCarrito);
    }
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
