import Encabezado from "secciones/Encabezado";
import MensajeBienvenida from "componentes/MensajeBienvenida";
import { TextoParaMarketing } from "tipos/TextoParaMarketing";
import ProductosDestacados from "secciones/ProductosDestacados";
import "componentes/MensajeBienvenida.css";

import { Link } from "react-router-dom";
function Bienvenida() {
  return (
    <div>
      {" "}
      <Encabezado />
      <MensajeBienvenida texto={TextoParaMarketing[1].texto} />{" "}
      <ProductosDestacados />
      <Link to="/productos">
        {" "}
        <MensajeBienvenida texto={TextoParaMarketing[2].texto} />
      </Link>
      <img width="100%" src="\imagenes\footer.png"></img>
      <img
        src="\imagenes\3 cuotas sin interes.png"
        className="imagenHeaderunica"
      ></img>
    </div>
  );
}

export default Bienvenida;
