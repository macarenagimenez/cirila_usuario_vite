import { useContext } from "react";
import { UsuarioContext } from "contexts/UsuarioContexto";
import { CarritoContext } from "contexts/CarritoContexto";

import { productosAgregados } from "tipos/CarritoCargado";
import "componentes/responsive.css";
import "componentes/Orden.css";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import carritoService from "service/carritoService";

export default function Orden() {
  const { usuario } = useContext(UsuarioContext);
  const { carrito, cancelarCompra } = useContext(CarritoContext);

  function totalDeLaCompra() {
    let contador = 0;
    for (let i = 0; i < carrito.length; i++) {
      contador += carrito[i].precio * carrito[i].cantidad;
    }
    if (usuario.FormaPago === "Transferencia 15% OFF") {
      let descuento = (contador * 0.85).toFixed(2);
      return (
        <>
          Total:{" "}
          <span style={{ textDecoration: "line-through", color: "grey" }}>
            ${contador}
          </span>
          <div> Total -15% off: ${descuento} </div>{" "}
        </>
      );
    } else {
      return <span> Total: ${contador}</span>;
    }
  }

  let productosParaMostrarEnOrden = carrito.map((item: productosAgregados) => {
    return (
      <div className="contenedorRenderizadoDeProducto">
        {" "}
        <Grid container spacing={1} className="contenedorProductosOrdenFinal">
          <Grid item xs={4}>
            {item.nombre}
          </Grid>
          <Grid item xs={4}>
            {" "}
            {item.cantidad}
          </Grid>
          <Grid item xs={4}>
            ${item.precio}
          </Grid>
        </Grid>{" "}
      </div>
    );
  });

  function finalizarCompra() {
    carritoService(carrito, usuario);
    cancelarCompra();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 12, sm: 8, md: 6 }}
      >
        <Grid item xs={12} sm={4} md={6}>
          <div className="contenedorOrdenFinal" style={{ maxWidth: "600px" }}>
            <span className="textAlignCenter"> OK! Este es tu pedido:</span>
            <p className="titulosSeccion"> Datos de contacto</p>
            <div className="contenedorDatosContacto">
              <strong>Nombre y Apellido:</strong> {usuario.NombreCompleto}
              <br />
              <strong>Provincia:</strong> {usuario.Provincia} <br />
              <strong> Localidad:</strong> {usuario.Localidad} <br />{" "}
              <strong>CP:</strong> {usuario.CodigoPostal}
              <br />
              <strong>E-mail:</strong> {usuario.Correo}
              <br />
              <strong>Celular:</strong> {usuario.Celular}
              <br />
              <strong>Forma de pago:</strong> {usuario.FormaPago} <br />
              <strong>Envío:</strong> {usuario.FormaEnvio}
              <br />
              <strong>Medio de contacto:</strong> {usuario.FormaContacto}
              <br />
              <strong>Mensajito:</strong> {usuario.MensajeOpcional}
            </div>
            <p className="titulosSeccion">
              {" "}
              <Grid
                container
                spacing={2}
                className="contenedorProductosOrdenFinal"
              >
                <Grid item xs={4}>
                  Producto
                </Grid>{" "}
                <Grid item xs={4}>
                  Cantidad
                </Grid>{" "}
                <Grid item xs={4}>
                  Precio unitario
                </Grid>
              </Grid>
            </p>
            {productosParaMostrarEnOrden}
            <hr />
            <div>
              <div className="contenedorTotalDeLaCompra">
                {" "}
                <div style={{ textAlign: "end" }}>{totalDeLaCompra()}</div>
              </div>{" "}
              <hr />
              <small>
                <p className="textoEnviosMediosDePago">
                  <div className="contenedorEnviosMediosdepago">
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
                </p>
              </small>
            </div>{" "}
          </div>{" "}
          <div
            style={{
              maxWidth: "600px",
              display: "flex",
              margin: "auto",
            }}
          >
            <Grid item container spacing={2}>
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                className="responsive_botonCentrado"
              >
                <Link to="/carritoDeCompras">
                  <button className="botonBasico">Volver al carrito</button>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                className="responsive_botonCentrado"
              >
                <Link to="/cargaDeDatos">
                  <button className="botonBasico">Modificar datos</button>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                className="responsive_botonCentrado"
              >
                <Link to="/">
                  <button
                    className="botonBasico"
                    onClick={() => cancelarCompra()}
                  >
                    Cancelar compra
                  </button>
                </Link>
              </Grid>
            </Grid>
          </div>
          <Link to="/despedida">
            <button
              className="botonBasico botonFinalizarCompra"
              onClick={() => finalizarCompra()}
            >
              FINALIZAR COMPRA
            </button>{" "}
          </Link>{" "}
        </Grid>
      </Grid>
    </Box>
  );
}
