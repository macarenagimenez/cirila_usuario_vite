import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function EstadoDeProductoAgregado() {
  return (
    <div className="contenedorRenderizadoDeProducto">
      {" "}
      <Grid container item spacing={1} className="centrarTexto">
        <Grid item xs={3}>
          {" "}
          <img src={item.urlImagen} alt={item.nombre} width={100} />
        </Grid>{" "}
        <Grid item xs={2}>
          <Link to={"/producto?id=" + item.id}>{item.nombre}</Link>
        </Grid>
        <Grid item xs={2}>
          {" "}
          <div className="contador">
            <button
              className="botonContadorStock"
              onClick={() => restarStock(cantidadDeProductos, 1)}
            >
              -
            </button>
            <span className="numeroContadorStock">{cantidadDeProductos}</span>
            <button
              className="botonContadorStock"
              onClick={() => sumarStock(cantidadDeProductos, item.stock)}
            >
              +
            </button>{" "}
          </div>
        </Grid>
        <Grid item xs={2}>
          ${totalPrecioProductosIguales(item.precio, cantidadDeProductos)}
        </Grid>
        <Grid item xs={2}>
          <button
            onClick={() => eliminarDelCarrito(item)}
            className="botonAgregarAlCarrito"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </Grid>
      </Grid>{" "}
    </div>
  );
}
