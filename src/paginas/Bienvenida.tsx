import Encabezado from "secciones/Encabezado";
import MensajeBienvenida from "componentes/MensajeBienvenida";
import { TextoParaMarketing } from "modelos y tipos/TextoParaMarketing";
import ProductosDestacados from "secciones/ProductosDestacados";
import "componentes/MensajeBienvenida.css";
import ImagenScroleable from "componentes/ImagenScroleable";

function Bienvenida() {
  return (
    <div>
      <Encabezado />
      <MensajeBienvenida texto={TextoParaMarketing[1].texto} />
      <ProductosDestacados />
      <ImagenScroleable />
    </div>
  );
}

export default Bienvenida;
