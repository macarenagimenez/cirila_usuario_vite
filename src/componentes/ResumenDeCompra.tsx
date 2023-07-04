import { Grid } from "@mui/material";
import "componentes/ResumenDeCompra.css";

function ResumenDeCompra() {
  return (
    <div className="contenedorResumenCompraConProductosAgregados">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {" "}
          <div className="productosAgregados">
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
                <button className="botonAgregarAlCarrito">
                  Seguir comprando
                </button>{" "}
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
