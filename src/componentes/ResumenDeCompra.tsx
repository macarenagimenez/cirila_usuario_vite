import { Grid } from "@mui/material";
import "componentes/ResumenDeCompra.css";
import { CarritoContext } from "contexts/CarritoContexto";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import type { productosAgregados } from "tipos/CarritoCargado";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ResumenDeCompra() {
  const { carrito, eliminarDelCarrito, sumarStock, restarStock } =
    useContext(CarritoContext);
  const [cantidadDeProductos, setCantidadDeProductos] = useState<number>(1);

  // function totalPrecioProductosIguales(precio, cantidadDeProductosMismoID) {
  //   return precio * cantidadDeProductosMismoID;
  // }
  let productosParaMostrarEnResumen: productosAgregados = carrito.map(
    (item: productosAgregados) => {
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
                  onClick={() => restarStock(item)}
                >
                  -
                </button>
                <span className="numeroContadorStock">{item.cantidad}</span>
                <button
                  className="botonContadorStock"
                  onClick={() => sumarStock(item)}
                >
                  +
                </button>{" "}
              </div>
            </Grid>
            <Grid item xs={2}>
              {/* ${totalPrecioProductosIguales(item.precio, cantidadDeProductos)} */}
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
  );
  let mostrarProductosAgregados = () => {
    if (carrito.length === 0) {
      return (
        <>
          <p>Tu carrito y mi billetera están vacios 🤣.</p>
          <Link to="/productos">
            <button className="botonAgregarAlCarrito">
              Vamos a chusmear que comprar 😉
            </button>{" "}
          </Link>
        </>
      );
    } else {
      return productosParaMostrarEnResumen;
    }
  };
  return (
    <div className="contenedorResumenCompraConProductosAgregados">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className="productosAgregados">
            {mostrarProductosAgregados()}
          </div>{" "}
        </Grid>

        <Grid item xs={6}>
          <div className="resumenCompra ">
            RESUMEN DE COMPRA
            <hr />
            <Grid container item spacing={1}>
              <Grid item xs={6} className="textoIzquierda">
                Productos (3)
              </Grid>
              <Grid item xs={6} className="textoDerecha">
                $1111.11
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item xs={6} className="textoIzquierda">
                <h4>TOTAL</h4>
              </Grid>
              <Grid item xs={6} className="textoDerecha">
                <h4>$1111.11</h4>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item xs={6} className="textoIzquierda">
                <Link to="/productos">
                  <button className="botonAgregarAlCarrito">
                    Seguir comprando
                  </button>{" "}
                </Link>
              </Grid>
              <Grid item xs={6} className="textoDerecha">
                <button className="botonAgregarAlCarrito">
                  Finalizar compra
                </button>{" "}
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ResumenDeCompra;
