import { Box, Grid } from "@mui/material";
import "componentes/ResumenDeCompra.css";
import { CarritoContext } from "contexts/CarritoContexto";
import { useContext } from "react";
import { Link } from "react-router-dom";
import type { productosAgregados } from "tipos/CarritoCargado";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "componentes/responsive.css";
function ResumenDeCompra() {
  const { carrito, eliminarDelCarrito, sumarStock, restarStock } =
    useContext(CarritoContext);

  function totalPrecioProductosIguales(producto: productosAgregados) {
    return producto.precio * producto.cantidad;
  }
  let productosParaMostrarEnResumen: JSX.Element[] = carrito.map(
    (item: productosAgregados) => {
      return (
        <div className="contenedorRenderizadoDeProducto ">
          {" "}
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 1, md: 1 }}
              columns={{ xs: 12, sm: 12, md: 12 }}
              className="centrarTexto"
            >
              <Grid item xs={12} sm={12} md={3}>
                {" "}
                <img
                  src={item.urlImagen[0].url}
                  alt={item.nombre}
                  width={"100%"}
                  className=""
                />
                {item.stock <= 1 ? (
                  <small className="stockBajo">El último!</small>
                ) : (
                  ""
                )}
              </Grid>{" "}
              <Grid item xs={3} sm={3} md={3}>
                <Link
                  to={"/producto?id=" + item.id}
                  className="responsive_NombreProductoOrdendecompra"
                >
                  {item.nombre}
                </Link>
              </Grid>
              <Grid item xs={4} sm={4} md={2}>
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
              <Grid item xs={3} sm={3} md={2}>
                ${totalPrecioProductosIguales(item)}
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <button
                  onClick={() => eliminarDelCarrito(item)}
                  className="botonBasico botonEliminarDeResumen_responsive"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </Grid>
            </Grid>{" "}
          </Box>{" "}
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
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 6, sm: 8, md: 12 }}
            >
              <Grid item xs={6} sm={6} md={6}>
                <div className="productosAgregados">
                  {productosParaMostrarEnResumen}
                </div>{" "}
              </Grid>

              <Grid item xs={6} sm={6} md={6}>
                <div className="resumenCompra ">
                  RESUMEN DE COMPRA
                  <hr />
                  <Grid container item spacing={1}>
                    <Grid item xs={6} className="textoIzquierdaResumen">
                      Productos({contadorDeProductos()})
                    </Grid>
                    <Grid item xs={6} className="textoDerecha">
                      ${totalDeLaCompra()}
                    </Grid>
                  </Grid>
                  <Grid container item spacing={2}>
                    <Grid item xs={6} className="textoIzquierdaResumen">
                      <h4>TOTAL</h4>
                    </Grid>
                    <Grid item xs={6} className="textoDerecha">
                      <h4> ${totalDeLaCompra()}</h4>
                    </Grid>
                  </Grid>
                  <hr />
                  <div className="contenedorEnviosMediosdepago">
                    <p className="textoEnviosMediosDePago">
                      {" "}
                      <span>Medios de Pago: </span> Aceptamos todas las tarjetas
                      y tenés 15% OFF abonando con transferencia/efectivo.{" "}
                    </p>{" "}
                    <hr />
                    <p className="textoEnviosMediosDePago">
                      <span> Envíos a todo el país: </span>
                      desde $1350!{" "}
                      <small>(Dependiendo la localidad/sucursal).</small>
                      <br />
                      <span>Envíos dentro de Rio Cuarto, CBA: </span>$300{" "}
                      <small>
                        (Envío a domicilio los días sábados desde las 15hs).
                      </small>{" "}
                      <br />
                      <span>Compras mayores a $25.000: ENVIO GRATIS</span>
                    </p>
                  </div>
                  <Grid container item spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      className="textoIzquierda responsive_botonCentrado"
                    >
                      <Link to="/productos">
                        <button className="botonBasico ">
                          Ver más productos
                        </button>{" "}
                      </Link>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      className="textoIzquierdaResumen responsive_botonCentrado"
                    >
                      <Link to="/cargaDeDatos">
                        <button className="botonBasico">
                          Continuar compra
                        </button>{" "}
                      </Link>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>{" "}
          </Box>
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
      <img
        width="100%"
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/encabezado-para-resumen-de-compra-6530334e93470.webp"
      ></img>
      <img
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/banner-cuotas-sin-interes-65303347c80a4.webp"
        className="imagenHeaderunica"
      ></img>
      <div className="contenedorResumenCompraConProductosAgregados">
        {/* desde aca */}
        {mostrarProductosAgregados()}
        {/* hasta aca */}
      </div>
    </>
  );
}

export default ResumenDeCompra;
