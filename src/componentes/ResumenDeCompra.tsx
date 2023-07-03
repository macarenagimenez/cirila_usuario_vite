import { Grid } from "@mui/material";
import "componentes/ResumenDeCompra.css";

function ResumenDeCompra() {
  return (
    <>
      <Grid container spacing={2} margin={3}>
        <Grid item xs={6}>
          {" "}
          <div className="resumenCompra">
            {" "}
            <Grid container item spacing={1} className="centrarTexto">
              <Grid item xs={3}>
                {" "}
                <img
                  src="imagenes/LogoCirila.png"
                  alt="LogoCirila"
                  width={100}
                />
              </Grid>{" "}
              <Grid item xs={3}>
                {" "}
                Manta Roma
              </Grid>
              <Grid item xs={3}>
                {" "}
                <div className="contador">
                  <button className="botonContadorStock">-</button>
                  <span className="numeroContadorStock">1</span>
                  <button className="botonContadorStock">+</button>{" "}
                </div>
              </Grid>
              <Grid item xs={3}>
                {" "}
                $100.00
              </Grid>
            </Grid>{" "}
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className="resumenCompra">
            RESUMEN DE COMPRA
            <hr />
            <Grid container item spacing={1}>
              <Grid item xs={6}>
                <span>Productos (3)</span>
              </Grid>
              <Grid item xs={6}>
                <span> $1111.11</span>
              </Grid>
            </Grid>
            <Grid container item spacing={1}>
              <Grid item xs={6}>
                <h4>TOTAL</h4>
              </Grid>
              <Grid item xs={6}>
                <h4>$1111.11</h4>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ResumenDeCompra;
