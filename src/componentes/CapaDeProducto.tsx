import "componentes/CapaDeProducto.css";
import { Link } from "react-router-dom";
import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import "componentes/responsive.css";
function CapaDeProducto(props: { informacionProducto: InformacionDeProducto }) {
  const productoUrl = "/producto?id=" + props.informacionProducto.id;

  return (
    <>
      <Link className="botonParaVerProducto" to={productoUrl}>
        <div className="MuestraDeProducto">
          <img
            src={props.informacionProducto.urlImagen[0].url}
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
