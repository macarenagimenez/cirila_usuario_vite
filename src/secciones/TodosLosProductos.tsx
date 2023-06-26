import LlamadaAPI from "componentes/LlamadaAPI";
import { apiProductos } from "tipos/APIs";
import "secciones/ProductoDestacado.css";
import "secciones/TodosLosProductos.css";

function TodosLosProductos() {
  const apiURL = apiProductos.APIurl;
  return (
    <div className="todosLosProductos">
      <LlamadaAPI apiURL={apiURL} />
    </div>
  );
}

export default TodosLosProductos;
