import LlamadaAPIporID from "componentes/LlamadaAPIporID";
import AnimacionParaPresentacionPagina from "componentes/AnimacionParaPresentacionPagina";
import { rutaParaPresentacionPagina } from "tipos/RutaDeImagenes";

function ProductoSeleccionado() {
  let parametros = new URLSearchParams(window.location.search);
  let id = parametros.get("id");
  let apiURL =
    "https://5o7ndupcrk.execute-api.us-east-1.amazonaws.com/prod/v1.0/bff/catalogo/productos/" +
    id;

  return (
    <>
      <AnimacionParaPresentacionPagina
        informacionParaPresentacion={rutaParaPresentacionPagina[1]}
      />
      <LlamadaAPIporID apiURL={apiURL} />
    </>
  );
}
export default ProductoSeleccionado;
