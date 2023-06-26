import { rutaParaDividirSecciones } from "modelos y tipos/SrcImagenes";
import "componentes/ImagenScroleable.css";
import MensajeBienvenida from "componentes/MensajeBienvenida";
import { TextoParaMarketing } from "modelos y tipos/TextoParaMarketing";

function ImagenScroleable() {
  return (
    <div className="imagenScrolleable">
      {/* <img
        src={rutaParaDividirSecciones[0].src}
        alt={rutaParaDividirSecciones[0].alt}
      /> */}
      <MensajeBienvenida texto={TextoParaMarketing[2].texto} />
    </div>
  );
}

export default ImagenScroleable;
