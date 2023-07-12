import { createContext, useState } from "react";

import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import type { productosAgregados } from "tipos/CarritoCargado";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState<productosAgregados[]>([]);

  const agregarAlCarrito = (producto: InformacionDeProducto, cantidad) => {
    let productoAgregado: productosAgregados = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: cantidad,
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
    console.log(carrito);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}
