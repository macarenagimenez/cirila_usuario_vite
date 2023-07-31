import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "contexts/CarritoContexto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./BarraDeNavegacion.css";

function BarraDeNavegacion() {
  const { carrito } = useContext(CarritoContext);

  function contadorDeProductos() {
    let contador = 0;
    for (let i = 0; i < carrito.length; i++) {
      contador += carrito[i].cantidad;
    }
    return contador;
  }

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
            <div className="carritoDeComprasBarraNavegacion">
              <Link to="/carritoDeCompras" className="estiloDeBarra">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="cantidadDeProductosBarraNavegacion">
                  {contadorDeProductos()}
                </span>
              </Link>{" "}
            </div>
          </li>
          {/* <li>
            <Link to="/quienessomos" className="estiloDeBarra">
              ¿Quienes somos?
            </Link>{" "}
          </li> */}
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
