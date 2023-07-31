import { Grid } from "@mui/material";
import "componentes/ResumenDeCompra.css";
import { CarritoContext } from "contexts/CarritoContexto";
import { useContext } from "react";
import { Link } from "react-router-dom";
import type { productosAgregados } from "tipos/CarritoCargado";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import AnimacionParaPresentacionPagina from "componentes/AnimacionParaPresentacionPagina";
import { rutaParaPresentacionPagina } from "tipos/RutaDeImagenes";
function ResumenDeCompra() {
  const { carrito, eliminarDelCarrito, sumarStock, restarStock } =
    useContext(CarritoContext);

  function totalPrecioProductosIguales(producto: productosAgregados) {
    return producto.precio * producto.cantidad;
  }
  let productosParaMostrarEnResumen: productosAgregados = carrito.map(
    (item: productosAgregados) => {
      return (
        <div className="contenedorRenderizadoDeProducto ">
          {" "}
          <Grid container item spacing={1} className="centrarTexto">
            <Grid item xs={3}>
              {" "}
              <img src={item.urlImagen} alt={item.nombre} width={100} />
              {item.stock <= 1 ? (
                <small className="stockBajo">El último!</small>
              ) : (
                ""
              )}
            </Grid>{" "}
            <Grid item xs={2}>
              <Link to={"/producto?id=" + item.id}>{item.nombre}</Link>
            </Grid>
            <Grid item xs={3}>
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
              ${totalPrecioProductosIguales(item)}
            </Grid>
            <Grid item xs={2}>
              <button
                onClick={() => eliminarDelCarrito(item)}
                className="botonBasico"
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
        <div className="contenedorCarritoVacio">
          <p>Tu carrito y mi billetera están vacios 🤣.</p>
          <Link to="/productos">
            <button className="botonBasico">
              Vamos a chusmear que comprar 😉
            </button>{" "}
          </Link>
        </div>
      );
    } else {
      return (
        <>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <div className="productosAgregados">
                {productosParaMostrarEnResumen}
              </div>{" "}
            </Grid>

            <Grid item xs={6}>
              <div className="resumenCompra ">
                RESUMEN DE COMPRA
                <hr />
                <Grid container item spacing={1}>
                  <Grid item xs={6} className="textoIzquierda">
                    Productos({contadorDeProductos()})
                  </Grid>
                  <Grid item xs={6} className="textoDerecha">
                    ${totalDeLaCompra()}
                  </Grid>
                </Grid>
                <Grid container item spacing={2}>
                  <Grid item xs={6} className="textoIzquierda">
                    <h4>TOTAL</h4>
                  </Grid>
                  <Grid item xs={6} className="textoDerecha">
                    <h4> ${totalDeLaCompra()}</h4>
                  </Grid>
                </Grid>
                <Grid container item spacing={2}>
                  <Grid item xs={6} className="textoIzquierda">
                    <Link to="/productos">
                      <button className="botonBasico">Seguir comprando</button>{" "}
                    </Link>
                  </Grid>
                  <Grid item xs={6} className="textoDerecha">
                    <Link to="/cargaDeDatos">
                      <button className="botonBasico">Continuar compra</button>{" "}
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>{" "}
        </>
      );
    }
  };

  function contadorDeProductos() {
    let contador = 0;
    for (let i = 0; i < carrito.length; i++) {
      contador += carrito[i].cantidad;
    }

    return <span>{contador}</span>;
  }
  function totalDeLaCompra() {
    let contador = 0;
    for (let i = 0; i < carrito.length; i++) {
      contador += carrito[i].precio * carrito[i].cantidad;
    }

    return <span>{contador}</span>;
  }
  return (
    <>
      {" "}
      <AnimacionParaPresentacionPagina
        informacionParaPresentacion={rutaParaPresentacionPagina[1]}
      />
      <div className="contenedorResumenCompraConProductosAgregados">
        {/* desde aca */}
        {mostrarProductosAgregados()}
        {/* hasta aca */}
      </div>
    </>
  );
}

export default ResumenDeCompra;
