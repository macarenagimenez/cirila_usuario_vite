import TodosLosProductos from "secciones/TodosLosProductos";
import MensajeBienvenida from "componentes/MensajeBienvenida";
import { useContext, useEffect, useState } from "react";
import { CategoriaContext } from "contexts/CategoriaContexto";
import { useLocation } from "react-router-dom";
function PaginaDeProducto() {

  const {state} = useLocation();

  let parametros = new URLSearchParams(window.location.search);
  const categoriaId = parametros.get("categoriaId") || "";
  const { getCategoriaById, categoriasContext } = useContext(CategoriaContext);

  const [nombreCategoria, setNombreCategoria] = useState<string>("Todos los productos");

  useEffect(() => {
    let categoria = getCategoriaById(categoriaId)
    if (categoria?.nombre !== undefined) {
      setNombreCategoria(categoria.nombre);
    }
  }, [state, categoriasContext]);

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
