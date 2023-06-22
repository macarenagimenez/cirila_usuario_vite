import "componentes/MensajeBienvenida.css";
import { Textos } from "modelos y tipos/TextoParaMarketing";

function MensajeBienvenida(props: Textos) {
  return <div className="base">{props.texto}</div>;
}
export default MensajeBienvenida;
