import TodosLosProductos from "secciones/TodosLosProductos";
import MensajeBienvenida from "componentes/MensajeBienvenida";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function PaginaDeProducto() {

  const {state} = useLocation();
  const [nombreCategoria, setNombreCategoria] = useState<string>("Todos los productos");

  useEffect(() => {
    if (state?.categoria?.nombre !== undefined) {
      setNombreCategoria(state.categoria.nombre);
    }
  }, [state?.categoria?.nombre]);
  return (
    <>
      <img
        width="100%"
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/encabezado-para-pagina-de-productos-6530334d5cdca.webp"
      ></img>{" "}
      <img
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/objetopreferido.webp"
        className="imagenHeaderunica"
      ></img>
      <MensajeBienvenida texto={nombreCategoria} />
      <TodosLosProductos />
    </>
  );
}

export default PaginaDeProducto;
