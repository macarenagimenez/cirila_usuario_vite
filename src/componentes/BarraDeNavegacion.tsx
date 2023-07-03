import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./BarraDeNavegacion.css";

function BarraDeNavegacion() {
  return (
    <div className="BarraDeNavegacion">
      <nav>
        <ul>
          <li style={{ float: "left" }}>
            <Link to="/" className="nombreDeMarca">
              Gaia Cirila
            </Link>
          </li>{" "}
          <li>
            <Link to="/carritoDeCompras" className="estiloDeBarra">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>{" "}
          </li>
          <li>
            <Link to="/quienessomos" className="estiloDeBarra">
              ¿Quienes somos?
            </Link>{" "}
          </li>
          <li>
            <Link to="/productos" className="estiloDeBarra">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/" className="estiloDeBarra">
              Inicio
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BarraDeNavegacion;
