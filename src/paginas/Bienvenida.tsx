import Encabezado from "secciones/Encabezado";
import MensajeBienvenida from "componentes/MensajeBienvenida";
import { TextoParaMarketing } from "modelos y tipos/TextoParaMarketing";
import ProductosDestacados from "secciones/ProductosDestacados";
import "componentes/MensajeBienvenida.css";
import ImagenConTexto from "componentes/ImagenConTexto";
import { rutaParaImagenesConTexto } from "modelos y tipos/RutaDeImagenes";

function Bienvenida() {
  return (
    <div>
      <Encabezado />
      <MensajeBienvenida texto={TextoParaMarketing[1].texto} />
      <ProductosDestacados />
      <ImagenConTexto informacionParaImagen={rutaParaImagenesConTexto[0]} />
    </div>
  );
}

export default Bienvenida;
