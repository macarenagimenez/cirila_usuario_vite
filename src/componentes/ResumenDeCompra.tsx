import { Grid } from "@mui/material";
import "componentes/ResumenDeCompra.css";
import { CarritoContext } from "contexts/CarritoContexto";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import type { productosAgregados } from "tipos/CarritoCargado";

function ResumenDeCompra() {
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  let productosParaMostrarEnResumen: productosAgregados = carrito.map(
    (item: productosAgregados) => {
      const [cantidadDeProductos, setCantidadDeProductos] = useState<number>(1);

      function sumarStock(contador: number, max: number): void {
        let resultadoSuma = contador + 1;
        if (resultadoSuma > max) {
          return;
        }
        setCantidadDeProductos(resultadoSuma);
      }
      function restarStock(contador: number, min: number): void {
        let resultadoSuma = contador - 1;
        if (resultadoSuma < min) {
          return;
        }
        setCantidadDeProductos(resultadoSuma);
      }

      return (
        <div className="contenedorRenderizadoDeProducto">
          {" "}
          <Grid container item spacing={1} className="centrarTexto">
            <Grid item xs={3}>
              {" "}
              <img src={item.urlImagen} alt={item.nombre} width={100} />
            </Grid>{" "}
            <Grid item xs={3}>
              {" "}
              {item.nombre}
            </Grid>
            <Grid item xs={3}>
              {" "}
              <div className="contador">
                <button
                  className="botonContadorStock"
                  onClick={() => restarStock(cantidadDeProductos, 1)}
                >
                  -
                </button>
                <span className="numeroContadorStock">
                  {cantidadDeProductos}
                </span>
                <button
                  className="botonContadorStock"
                  onClick={() => sumarStock(cantidadDeProductos, item.stock)}
                >
                  +
                </button>{" "}
              </div>
            </Grid>
            <Grid item xs={3}>
              {" "}
              ${item.precio}
            </Grid>
            <Grid item xs={3}>
              <button onClick={() => eliminarDelCarrito(item)}> 🗑 </button>
            </Grid>
          </Grid>{" "}
        </div>
      );
    }
  );
  function inicioCarrito() {
    if (carrito.length >= 1) {
      return productosParaMostrarEnResumen;
    } else {
      return "Mi billetera y tu carrito están vacios  ㅠㅠ";
    }
  }

  return (
    <div className="contenedorResumenCompraConProductosAgregados">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="productosAgregados">{inicioCarrito()}</div>{" "}
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
