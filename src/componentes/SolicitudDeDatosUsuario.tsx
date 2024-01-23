import Usuario from "componentes/Usuario";
import "componentes/Usuario.css";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "componentes/SolicitudDeDatosUsuario.css";
import { useContext } from "react";
import { CarritoContext } from "contexts/CarritoContexto";

export default function SolicitudDeDatosUsuario() {
  const { cancelarCompra } = useContext(CarritoContext);
  // TODO estilizar componentes MUI
  return (
    <div className="contenedorCargaDeDatos">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >
          <Usuario />{" "}
        </Grid>{" "}
      </Box>
      <div className="contenedorBotonesFinalizarCompra">
        <div>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 6, sm: 8, md: 12 }}
          >
            {" "}
            <Grid
              item
              xs={6}
              className="textoIzquierda responsive_botonCentrado"
            >
              <div>
                <Link to="/carritoDeCompras">
                  <button className="botonBasico">Volver al carrito</button>{" "}
                </Link>
              </div>
            </Grid>
            <Grid item xs={6} className="responsive_botonCentrado">
              <Link to="/">
                <button
                  className="botonBasico"
                  onClick={() => cancelarCompra()}
                >
                  Cancelar compra
                </button>{" "}
              </Link>
            </Grid>
          </Grid>
        </div>
        <Link to="/resumenOrdenDeCompra">
          <button className="botonBasico botonFinalizarCompra caminoFeliz">
            CONTINUAR COMPRA
          </button>{" "}
        </Link>{" "}
      </div>
    </div>
  );
}
