import { Grid } from "@mui/material";
import { useState, useContext } from "react";
import "componentes/RenderizadoUnicoProducto.css";
import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { CarritoContext } from "contexts/CarritoContexto";

function RenderizadoUnicoProducto(props) {
  let producto: InformacionDeProducto = props.producto;
  const { carrito, agregarAlCarrito, eliminarDelCarrito } =
    useContext(CarritoContext);

  let [contadorDeStock, setContadorDeStock] = useState(0);
  let stock: number = producto.stock;

  let [mensajeCarrito, setMensajeCarrito] = useState("");

  let imagen = (
    <Grid item xs={6} className="imagenProductoSeleccionado">
      <img src={producto.urlImagen} alt={producto.nombre} />
    </Grid>
  );

  let nombre_precio_descripcion = (
    <div>
      <h2 className="nombreProductoSeleccionado">{producto.nombre}</h2>
      <h2 className="precioProductoSeleccionado">${producto.precio}</h2>
      <p className="descripcionProductoSeleccionado">{producto.descripcion}</p>
    </div>
  );

  function sumarStock(contador: number, max: number): void {
    let resultadoSuma = contador + 1;
    if (resultadoSuma > max) {
      return;
    }
    setContadorDeStock(resultadoSuma);
  }
  function restarStock(contador: number, min: number): void {
    let resultadoSuma = contador - 1;
    if (resultadoSuma < min) {
      return;
    }
    setContadorDeStock(resultadoSuma);
  }
  function mensajeSobreCarrito() {
    setMensajeCarrito("Ya agregaste esta hermosura al carrito 😍");
  }
  function miFuncion() {
    if (stock === 0) {
      return;
    }
    agregarAlCarrito(producto, contadorDeStock);
    mensajeSobreCarrito();
  }

  let mensajeSobreStock = (stock: number) => {
    if (stock === 0) {
      return <p>¡Oh, que lástima, no hay mas stock!</p>;
    } else {
      return <p> ¡Apúrate, que sólo quedan {stock}! </p>;
    }
  };

  let modificar_carrito = (
    <>
      <div>
        <div className="contador">
          <button
            className="botonContadorStock"
            onClick={() => restarStock(contadorDeStock, 0)}
          >
            -
          </button>
          <span className="numeroContadorStock">{contadorDeStock}</span>
          <button
            className="botonContadorStock"
            onClick={() => sumarStock(contadorDeStock, stock)}
          >
            +
          </button>{" "}
        </div>
        <button className="botonAgregarAlCarrito" onClick={miFuncion}>
          Agregar al carrito
        </button>{" "}
      </div>

      <div className="mensajeSobreStock">{mensajeSobreStock(stock)}</div>
      <div className="mensajeSobreStock">{mensajeCarrito}</div>
    </>
  );

  let texto = (
    <Grid item xs={6}>
      <div className="textoProductoSeleccionado">
        <Link to="/productos" className="linkVolverProductos">
          <FontAwesomeIcon icon={faHandPointLeft} /> productos /{" "}
        </Link>
        <small> {producto.nombre} </small>
        {nombre_precio_descripcion}
        {modificar_carrito}
        <hr />
        <p className="textoEnviosMediosDePago">
          {" "}
          <span>Medios de Pago: </span> Aceptamos todas las tarjetas y tenés 20%
          OFF abonando con transferencia/efectivo.
          <hr />
          <span> Envios: </span>Continuá con tu compra y te cotizamos el envío.
        </p>
      </div>
    </Grid>
  );

  return (
    <div className="contenedorInformacionProductoSeleccionado">
      <Grid container spacing={4}>
        {imagen}
        {texto}
      </Grid>
    </div>
  );
}
export default RenderizadoUnicoProducto;
