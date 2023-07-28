import { createContext, useState } from "react";

import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import type { productosAgregados } from "tipos/CarritoCargado";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const carritoEstadoInicial =
    JSON.parse(window.localStorage.getItem("carrito")) || [];

  const [carrito, setCarrito] =
    useState<productosAgregados[]>(carritoEstadoInicial);

  const updateLocalStorage = (estado) => {
    window.localStorage.setItem("carrito", JSON.stringify(estado));
  };

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
        updateLocalStorage(nuevoCarrito);
      } else {
        nuevoCarrito.push(productoAgregado);

        setCarrito(nuevoCarrito);
        updateLocalStorage(nuevoCarrito);
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
      updateLocalStorage(nuevoCarrito);
    }
  };

  const sumarStock = (producto: productosAgregados): void => {
    let resultadoSuma = producto.cantidad + 1;
    if (resultadoSuma > producto.stock) {
      return;
    }

    const indiceProductoExistente = carrito.findIndex(
      (item) => item.id === producto.id
    );
    const nuevoCarrito: productosAgregados[] = structuredClone(carrito);

    if (indiceProductoExistente >= 0) {
      nuevoCarrito[indiceProductoExistente].cantidad = resultadoSuma;
      setCarrito(nuevoCarrito);
      updateLocalStorage(nuevoCarrito);
    }
  };
  const restarStock = (producto: productosAgregados): void => {
    let resultadoResta = producto.cantidad - 1;
    if (resultadoResta < 1) {
      return;
    }

    const indiceProductoExistente = carrito.findIndex(
      (item) => item.id === producto.id
    );
    const nuevoCarrito: productosAgregados[] = structuredClone(carrito);

    if (indiceProductoExistente >= 0) {
      nuevoCarrito[indiceProductoExistente].cantidad = resultadoResta;
      setCarrito(nuevoCarrito);
      updateLocalStorage(nuevoCarrito);
    }
  };

  const cancelarCompra = () => {
    setCarrito([]);
    updateLocalStorage([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        sumarStock,
        restarStock,
        cancelarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
