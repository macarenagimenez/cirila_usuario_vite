import "componentes/CapaDeProducto.css";
import { Link } from "react-router-dom";
import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import "componentes/responsive.css";
function CapaDeProducto(props: { informacionProducto: InformacionDeProducto }) {
  const productoUrl = "/producto?id=" + props.informacionProducto.id;
  let mensajeSobreStock = (stock: number) => {
    if (stock === 0) {
      return <p className="BotonSinStock">Sin stock 🙁</p>;
    } else {
      return <p className="BotonAgregarAlCarrito"> ¡Lo quiero 😍! </p>;
    }
  };
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
          {mensajeSobreStock(props.informacionProducto.stock)}
        </div>
      </Link>
    </>
  );
}

export default CapaDeProducto;
