import Usuario from "componentes/Usuario";
import "componentes/Usuario.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "componentes/SolicitudDeDatosUsuario.css";
import { useContext } from "react";
import { CarritoContext } from "contexts/CarritoContexto";

export default function SolicitudDeDatosUsuario() {
  const { cancelarCompra } = useContext(CarritoContext);
  // TODO estilizar componentes MUI
  return (
    <div className="contenedorCargaDeDatos">
      <Grid container spacing={2}>
        <Usuario />{" "}
      </Grid>{" "}
      <div className="contenedorBotonesFinalizarCompra">
        <Grid container spacing={2}>
          {" "}
          <Grid item xs={3}></Grid>
          <Grid item xs={3} className="textoIzquierda">
            <div>
              <Link to="/carritoDeCompras">
                <button className="botonBasico">Volver al carrito</button>{" "}
              </Link>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Link to="/">
              <button className="botonBasico" onClick={() => cancelarCompra()}>
                Cancelar compra
              </button>{" "}
            </Link>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Link to="/resumenOrdenDeCompra">
          <button className="botonBasico botonFinalizarCompra">
            CONTINUAR COMPRA
          </button>{" "}
        </Link>{" "}
      </div>
    </div>
  );
}
