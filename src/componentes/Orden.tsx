import { useContext } from "react";
import { UsuarioContext } from "contexts/UsuarioContexto";
import { CarritoContext } from "contexts/CarritoContexto";

import { DatosUsuario } from "tipos/DatosDeUsuario";
import { productosAgregados } from "tipos/CarritoCargado";
import "componentes/Orden.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Orden() {
  const { usuario } = useContext<DatosUsuario>(UsuarioContext);
  const { carrito } = useContext(CarritoContext);
  function totalDeLaCompra() {
    let contador = 0;
    for (let i = 0; i < carrito.length; i++) {
      contador += carrito[i].precio * carrito[i].cantidad;
    }

    return <span>{contador}</span>;
  }

  let productosParaMostrarEnOrden: productosAgregados = carrito.map(
    (item: productosAgregados) => {
      return (
        <div className="contenedorRenderizadoDeProducto">
          {" "}
          <Grid
            container
            item
            spacing={1}
            className="contenedorProductosOrdenFinal"
          >
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
    }
  );
  return (
    <div className="contenedorPaginaOrden">
      <div className="contenedorOrdenFinal">
        <span className="textAlignCenter"> OK! Este es tu pedido:</span>
        <p className="botonBasico"> Datos de contacto</p>
        <div className="contenedorDatosContacto">
          Nombre y Apellido: {usuario.NombreCompleto}
          <br />
          Provincia: {usuario.Provincia} <br />
          Localidad: {usuario.Localidad} <br /> CP: {usuario.CodigoPostal}
          <br />
          E-mail: {usuario.Correo}
          <br />
          Celular: {usuario.Celular}
          <br />
          Forma de pago: {usuario.FormaPago}
          <br />
          Envío: {usuario.FormaEnvio}
          <br />
          Medio de contacto: {usuario.FormaContacto}
        </div>
        <p className="botonBasico">
          {" "}
          <Grid container spacing={2} className="contenedorProductosOrdenFinal">
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
        {productosParaMostrarEnOrden} <hr />
        <div>
          <p className="contenedorTotalDeLaCompra">
            {" "}
            TOTAL ${totalDeLaCompra()}
          </p>
        </div>{" "}
      </div>{" "}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Link to="/carritoDeCompras">
            <button className="botonBasico">Volver al carrito</button>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="/cargaDeDatos">
            <button className="botonBasico">Modificar datos</button>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="/">
            <button className="botonBasico">Cancelar compra</button>
          </Link>
        </Grid>
      </Grid>
      <Link to="/resumenOrdenDeCompra">
        <button className="botonBasico botonFinalizarCompra">
          FINALIZAR COMPRA
        </button>{" "}
      </Link>{" "}
    </div>
  );
}
