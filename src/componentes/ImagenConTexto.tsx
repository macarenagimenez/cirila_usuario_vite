import "componentes/ImagenConTexto.css";
import MensajeBienvenida from "componentes/MensajeBienvenida";
import type { rutaDeImagen } from "modelos y tipos/RutaDeImagenes";

function ImagenConTexto(props) {
  let contenido: rutaDeImagen = props.informacionParaImagen;
  return (
    <div className="imagen-con-texto">
      <img src={contenido.src} alt={contenido.alt} className="imagen" />
      <div className="texto">
        <MensajeBienvenida texto={contenido.texto} />
      </div>
    </div>
  );
}

export default ImagenConTexto;
