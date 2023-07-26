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
  const { carrito, cancelarCompra } = useContext(CarritoContext);
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
          <strong>Forma de pago:</strong> {usuario.FormaPago}
          <br />
          <strong>Envío:</strong> {usuario.FormaEnvio}
          <br />
          <strong>Medio de contacto:</strong> {usuario.FormaContacto}
        </div>
        <p className="titulosSeccion">
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
          <span className="contenedorTotalDeLaCompra">
            {" "}
            TOTAL: ${totalDeLaCompra()}
          </span>{" "}
          <hr />
          <small>
            Recordá que el envío se calcula una vez que finalices tu compra 📦.{" "}
          </small>
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
            <button className="botonBasico" onClick={() => cancelarCompra()}>
              Cancelar compra
            </button>
          </Link>
        </Grid>
      </Grid>
      <Link to="/despedida">
        <button
          className="botonBasico botonFinalizarCompra"
          onClick={() => cancelarCompra()}
        >
          FINALIZAR COMPRA
        </button>{" "}
      </Link>{" "}
    </div>
  );
}
