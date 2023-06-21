import Encabezado from "componentes/Encabezado";
import MensajeBienvenida from "componentes/MensajeBienvenida";
import { TextoParaMarketing } from "modelos y tipos/TextoParaMarketing";
import "componentes/MensajeBienvenida.css";

function Bienvenida() {
  return (
    <div>
      <Encabezado />
      <MensajeBienvenida texto={TextoParaMarketing[1].texto} />
    </div>
  );
}

export default Bienvenida;
