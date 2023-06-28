import "componentes/CapaDeProducto.css";
import { Link } from "react-router-dom";

function CapaDeProducto(props) {
  const productoUrl = "/producto?id=" + props.informacionProducto.id;

  return (
    <>
      <Link className="botonParaVerProducto" to={productoUrl}>
        <div className="MuestraDeProducto">
          <img
            src={props.informacionProducto.urlImagen}
            alt={props.informacionProducto.nombre}
            className="ImagenDelProducto"
          />

          <p className="NombreDelProducto">
            {props.informacionProducto.nombre}
          </p>
          <p className="PrecioDelProducto">
            ${props.informacionProducto.precio}
          </p>
          <p className="BotonAgregarAlCarrito">¡Lo quiero 😍!</p>
        </div>
      </Link>
    </>
  );
}

export default CapaDeProducto;
