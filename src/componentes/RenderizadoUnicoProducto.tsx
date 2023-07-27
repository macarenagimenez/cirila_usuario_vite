import { Grid } from "@mui/material";
import { useContext } from "react";
import "componentes/RenderizadoUnicoProducto.css";
import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { CarritoContext } from "contexts/CarritoContexto";

function RenderizadoUnicoProducto(props: InformacionDeProducto) {
  let producto: InformacionDeProducto = props.producto;
  const { carrito, agregarAlCarrito, eliminarDelCarrito } =
    useContext(CarritoContext);
  //TODO Agregar mas imagenes al producto
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

  function mensajeBotonCarrito(producto: InformacionDeProducto): string {
    if (producto.stock >= 1) {
      const productoAgregado = carrito.findIndex(
        (item) => item.id === producto.id
      );

      if (productoAgregado === -1) {
        return "Agregar al carrito";
      } else {
        return "Agregado al carrito";
      }
    } else if (producto.stock === 0) {
      return "No hay stock";
    } else {
      return "Un minutito!";
    }
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
        <button
          className="botonBasico"
          onClick={() => agregarAlCarrito(producto, 1)}
        >
          {mensajeBotonCarrito(producto)}
        </button>{" "}
        <button className="botonBasico">
          <Link to="/carritoDeCompras">Ver carrito</Link>
        </button>
      </div>

      <div className="mensajeSobreStock">
        {mensajeSobreStock(producto.stock)}
      </div>
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
          OFF abonando con transferencia/efectivo. <hr />
          <span> Envios: </span>Continuá con tu compra y te cotizamos el envío.{" "}
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
