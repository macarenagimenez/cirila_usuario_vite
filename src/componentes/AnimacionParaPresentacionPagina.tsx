import type { rutaDeImagen } from "modelos y tipos/RutaDeImagenes";
import "componentes/AnimacionParaPresentacionPagina.css";
function AnimacionParaPresentacionPagina(props) {
  let informacion: rutaDeImagen = props.informacionParaPresentacion;
  return (
    <>
      <img
        src={informacion.src}
        alt={informacion.alt}
        className="imagenParaPresentacion"
      />
    </>
  );
}
export default AnimacionParaPresentacionPagina;
