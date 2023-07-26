import MensajeDespedida from "componentes/MensajeDespedida";
import AnimacionParaPresentacionPagina from "componentes/AnimacionParaPresentacionPagina";
import { rutaParaPresentacionPagina } from "tipos/RutaDeImagenes";

export default function CompraFinalizada() {
  return (
    <>
      {" "}
      <AnimacionParaPresentacionPagina
        informacionParaPresentacion={rutaParaPresentacionPagina[1]}
      />
      <MensajeDespedida />
    </>
  );
}
