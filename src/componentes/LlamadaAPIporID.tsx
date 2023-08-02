import { useEffect, useState } from "react";
import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import RenderizadoUnicoProducto from "componentes/RenderizadoUnicoProducto";

function LlamadaAPIporID(props: { apiUrl: string }) {
  const productoVacio: InformacionDeProducto = {
    id: "",
    nombre: "",
    precio: 0,
    urlImagen: "",
    stock: 0,
    descripcion: "",
  };
  const [producto, setProducto] =
    useState<InformacionDeProducto>(productoVacio);
  const api = props.apiUrl;

  useEffect(() => {
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let productoParaMostrar: InformacionDeProducto = {
          id: data.id,
          urlImagen: data.imagenes[0].url,
          nombre: data.nombre,
          precio: data.precio,
          stock: data.stock,
          descripcion: data.descripcion,
        };
        setProducto(productoParaMostrar);

        return producto;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function mostrarProducto(producto: InformacionDeProducto) {
    return (
      <>
        {" "}
        <RenderizadoUnicoProducto producto={producto} />
      </>
    );
  }
  return mostrarProducto(producto);
}

export default LlamadaAPIporID;
