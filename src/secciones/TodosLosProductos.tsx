import "secciones/ProductoDestacado.css";
import "secciones/TodosLosProductos.css";
import ObtenerProductos from "componentes/RenderizadoDeProductos";
import { TipoProductos } from "tipos/TipoProductos";

function TodosLosProductos() {
  return (
    <div className="todosLosProductos">
        <ObtenerProductos tipoProductos={TipoProductos.TODOS} />{" "}
    </div>
  );
}

export default TodosLosProductos;
