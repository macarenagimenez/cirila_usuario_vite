import TodosLosProductos from "secciones/TodosLosProductos";
import MensajeBienvenida from "componentes/MensajeBienvenida";
import { TextoParaMarketing } from "tipos/TextoParaMarketing";
function PaginaDeProducto() {
  return (
    <>
      <img
        width="100%"
        src="public\imagenes\encabezado para pagina de productos.png"
      ></img>{" "}
      <img
        src="\imagenes\3 cuotas sin interes.png"
        className="imagenHeaderunica"
      ></img>
      <MensajeBienvenida texto={TextoParaMarketing[3].texto} />
      <TodosLosProductos />
    </>
  );
}

export default PaginaDeProducto;
