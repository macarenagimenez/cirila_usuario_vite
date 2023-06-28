import { useEffect, useState } from "react";
import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import RenderizadoUnicoProducto from "componentes/RenderizadoUnicoProducto";

function LlamadaAPIporID(props) {
  console.log(props);
  const [producto, setProducto] = useState<InformacionDeProducto>({});

  useEffect(() => {
    fetch(props.apiURL)
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
        };
        setProducto(productoParaMostrar);
        console.log(producto);
        return producto;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function mostrarProducto(producto) {
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
