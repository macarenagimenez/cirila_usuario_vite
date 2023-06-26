import AnimacionParaPresentacionPagina from "componentes/AnimacionParaPresentacionPagina";
import { rutaParaPresentacionPagina } from "modelos y tipos/RutaDeImagenes";
import TodosLosProductos from "secciones/TodosLosProductos";
function PaginaDeProducto() {
  console.log(rutaParaPresentacionPagina[0]);
  return (
    <>
      <AnimacionParaPresentacionPagina
        informacionParaPresentacion={rutaParaPresentacionPagina[0]}
      />
      <TodosLosProductos />
    </>
  );
}

export default PaginaDeProducto;
