import TodosLosProductos from "secciones/TodosLosProductos";
import MensajeBienvenida from "componentes/MensajeBienvenida";
import { TextoParaMarketing } from "tipos/TextoParaMarketing";
function PaginaDeProducto() {
  return (
    <>
      <img
        width="100%"
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/encabezado-para-pagina-de-productos-6530334d5cdca.webp"
      ></img>{" "}
      <img
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/banner-cuotas-sin-interes-65303347c80a4.webp"
        className="imagenHeaderunica"
      ></img>
      <MensajeBienvenida texto={TextoParaMarketing[3].texto} />
      <TodosLosProductos />
    </>
  );
}

export default PaginaDeProducto;
