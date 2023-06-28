import { Grid } from "@mui/material";
import { useState } from "react";
import "componentes/RenderizadoUnicoProducto.css";
import { InformacionDeProducto } from "tipos/InformacionDeProducto";

function RenderizadoUnicoProducto(props) {
  let producto: InformacionDeProducto = props.producto;
  let [stock, setStock] = useState(producto.stock);
  let imagen = (
    <Grid item xs={6} className="imagenProductoSeleccionado">
      <img src={producto.urlImagen} alt={producto.nombre} />
    </Grid>
  );

  let nombre_precio = (
    <div>
      <h2>{producto.nombre}</h2>
      <h2>${producto.precio}</h2>
      <p>hola</p>
    </div>
  );

  function sumarStock(stock) {
    let resultadoSuma = stock + 1;
    setStock(resultadoSuma);
  }

  function restarStock(stock) {
    return () => {
      stock--;
    };
  }

  let modificar_carrito = (
    <>
      <div className="">
        <button className="" onClick={sumarStock(stock)}>
          -
        </button>
        {stock}
        <button className="" onClick={restarStock(stock)}>
          +
        </button>
      </div>
      <button className="">Agregar al carrito</button>
      <p className=" ">En stock</p>
    </>
  );

  let texto = (
    <Grid item xs={6}>
      <div className="textoProductoSeleccionado">
        {nombre_precio}
        {modificar_carrito}
        <hr />
        <p>
          Medios de Pago:{" "}
          <span>
            {" "}
            Aceptamos todas las tarjetas y tenés 20% OFF abonando con
            transferencia/efectivo
          </span>
        </p>
        <p>
          Envios: <span> Continuá con tu compra y te cotizamos el envío</span>
        </p>
      </div>
    </Grid>
  );

  return (
    <div className="contenedorInformacionProductoSeleccionado">
      <Grid container spacing={2}>
        {imagen}
        {texto}
      </Grid>
    </div>
  );
}
export default RenderizadoUnicoProducto;
