import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import "componentes/RenderizadoUnicoProducto.css";
import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { CarritoContext } from "contexts/CarritoContexto";
import "componentes/responsive.css";
function RenderizadoUnicoProducto(props: { producto: InformacionDeProducto }) {
  let producto = props.producto;

  const { carrito, agregarAlCarrito } = useContext(CarritoContext);
  //TODO Agregar mas imagenes al producto
  let imagen = (
    <Grid item xs={6} sm={6} md={6} className="imagenProductoSeleccionado">
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
    <div className="contenedorBotonesCarritoyTexto">
      <button
        className="botonBasico"
        onClick={() => agregarAlCarrito(producto, 1)}
      >
        {mensajeBotonCarrito(producto)}
      </button>{" "}
      <button className="botonBasico">
        <Link to="/carritoDeCompras">Ver carrito</Link>
      </button>
      <div className="mensajeSobreStock">
        {mensajeSobreStock(producto.stock)}
      </div>
    </div>
  );

  let texto = (
    <Grid item xs={6} sm={6} md={6}>
      <div className="textoProductoSeleccionado">
        <div className="contenedorVolverProductos">
          <Link to="/productos" className="linkVolverProductos">
            <FontAwesomeIcon icon={faHandPointLeft} /> productos /{" "}
          </Link>
          <small> {producto.nombre} </small>
        </div>
        {nombre_precio_descripcion}
        {modificar_carrito}

        <div className="contenedorEnviosMediosdepago">
          <hr />
          <p className="textoEnviosMediosDePago">
            {" "}
            <span>Medios de Pago: </span> Aceptamos todas las tarjetas y tenés
            20% OFF abonando con transferencia/efectivo.{" "}
          </p>{" "}
          <hr />
          <p className="textoEnviosMediosDePago">
            <span> Envios: </span>
            Entre $1700 a $2300 <small>(Dependiendo la localidad).</small>
            <br />
            <span>Rio Cuarto, CBA: </span>$700{" "}
            <small>(Envío a domicilio los días sábados desde las 15hs).</small>{" "}
            <br />
            <span>Compras mayores a $25.000: ENVIO GRATIS</span>
          </p>
        </div>
      </div>
    </Grid>
  );

  return (
    <div className="contenedorInformacionProductoSeleccionado">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {imagen}
          {texto}
        </Grid>
      </Box>
    </div>
  );
}
export default RenderizadoUnicoProducto;
