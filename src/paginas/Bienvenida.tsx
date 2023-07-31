import Encabezado from "secciones/Encabezado";
import MensajeBienvenida from "componentes/MensajeBienvenida";
import { TextoParaMarketing } from "tipos/TextoParaMarketing";
import ProductosDestacados from "secciones/ProductosDestacados";
import "componentes/MensajeBienvenida.css";
import ImagenConTexto from "componentes/ImagenConTexto";
import { rutaParaImagenesConTexto } from "tipos/RutaDeImagenes";
import AnimacionParaPresentacionPagina from "componentes/AnimacionParaPresentacionPagina";
import { rutaParaPresentacionPagina } from "tipos/RutaDeImagenes";
function Bienvenida() {
  return (
    <div>
      {" "}
      <AnimacionParaPresentacionPagina
        informacionParaPresentacion={rutaParaPresentacionPagina[1]}
      />
      <Encabezado />
      <MensajeBienvenida texto={TextoParaMarketing[1].texto} />
      <ProductosDestacados />
      <ImagenConTexto informacionParaImagen={rutaParaImagenesConTexto[0]} />
    </div>
  );
}

export default Bienvenida;
