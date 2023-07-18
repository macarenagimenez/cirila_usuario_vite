import SolicitudDeDatosUsuario from "componentes/SolicitudDeDatosUsuario";
import AnimacionParaPresentacionPagina from "componentes/AnimacionParaPresentacionPagina";
import { rutaParaPresentacionPagina } from "tipos/RutaDeImagenes";
export default function CargaDeDatos() {
  return (
    <>
      <AnimacionParaPresentacionPagina
        informacionParaPresentacion={rutaParaPresentacionPagina[1]}
      />
      <SolicitudDeDatosUsuario />
    </>
  );
}
