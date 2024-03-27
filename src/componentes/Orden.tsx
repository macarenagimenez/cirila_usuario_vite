import { useContext, useState } from "react";
import { UsuarioContext } from "contexts/UsuarioContexto";
import { CarritoContext } from "contexts/CarritoContexto";

import { productosAgregados } from "tipos/CarritoCargado";
import "componentes/responsive.css";
import "componentes/Orden.css";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CarritoService from "service/carritoService";

export default function Orden() {
  const navigate = useNavigate();
  const { usuario } = useContext(UsuarioContext);
  const { carrito, cancelarCompra } = useContext(CarritoContext);
  const [botonFinalizadoPresionado, setBotonFinalizadoPresionado] =
    useState<Boolean>(false);

  const carritoService: CarritoService = new CarritoService();

  // function totalDeLaCompra() {
  //   let contador = 0;
  //   for (let i = 0; i < carrito.length; i++) {
  //     contador += carrito[i].precio * carrito[i].cantidad;
  //   }
  //   if (usuario.FormaPago === "Transferencia") {
  //     let descuento = (contador * 0.85).toFixed(2);
  //     return (
  //       <>
  //         Total:{" "}
  //         <span style={{ textDecoration: "line-through", color: "grey" }}>
  //           ${contador}
  //         </span>
  //         <div> Total -15% off: ${descuento} </div>{" "}
  //       </>
  //     );
  //   } else {
  //     return <span> Total: ${contador}</span>;
  //   }
  // }
  function totalDeLaCompra() {
    let contador = 0;

    for (let i = 0; i < carrito.length; i++) {
      contador += carrito[i].precio * carrito[i].cantidad;
    }
    if (usuario.FormaEnvio === "A domicilio en Argentina") {
      let total = contador + 5579;
      return (
        <>
          ${contador} <br></br>
          <small> + envío a domicilio : $5579</small> <br></br> <br></br>
          <div> Total: ${total} </div>{" "}
        </>
      );
    } else if (usuario.FormaEnvio === "A sucursal de Correo Argentino") {
      let total = contador + 3360;
      return (
        <>
          ${contador} <br></br>
          <small> + envío a sucursal CA : $3360</small> <br></br> <br></br>
          <div> Total: ${total} </div>{" "}
        </>
      );
    } else if (usuario.FormaEnvio === "A domicilio en Rio IV, CBA.") {
      let total = contador + 500;
      return (
        <>
          ${contador} <br></br>
          <small> + envío a domicilio Rio IV, CBA : $500</small> <br></br>{" "}
          <br></br>
          <div> Total: ${total} </div>{" "}
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

  function finalizarCompra(event: React.MouseEvent<HTMLButtonElement>) {
    setBotonFinalizadoPresionado(true);
    event.preventDefault();
    event.currentTarget.disabled = true;
    carritoService
      .CrearCarrito(carrito, usuario)
      .then(() => {
        cancelarCompra();
        navigate("/despedida");
      })
      .catch((error) => {
        console.log(error);
        navigate("/errorEnCompra");
      });
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
              <strong>Localidad y Provincia:</strong>{" "}
              {usuario.LocalidadProvincia} <br />
              <strong> Domicilio:</strong> {usuario.Domicilio} <br />{" "}
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
                📩 Una vez que finalices tu compra, te enviaremos un mail con la
                confirmación de tu pedido y nos contactaremos por el medio
                elegido para coordinar el pago y el envío. <br />
                <strong>
                  No olvides de chequear tu casilla de correo 😉
                </strong>{" "}
                <br />
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
          {botonFinalizadoPresionado && (
            <Container fixed>
              <div
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "fit-content",
                }}
              >
                <CircularProgress />
                <p>Estamos procesando tu compra...</p>
              </div>
            </Container>
          )}
          {!botonFinalizadoPresionado && (
            <>
              <button
                className="botonBasico botonFinalizarCompra caminoFeliz"
                onClick={(event) => finalizarCompra(event)}
              >
                FINALIZAR COMPRA
              </button>{" "}
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
