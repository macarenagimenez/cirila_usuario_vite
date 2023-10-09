import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import "componentes/RenderizadoUnicoProducto.css";
import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { CarritoContext } from "contexts/CarritoContexto";
import "componentes/responsive.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function RenderizadoUnicoProducto(props: { producto: InformacionDeProducto }) {
  let producto = props.producto;
  console.log(producto);

  const { carrito, agregarAlCarrito } = useContext(CarritoContext);

  let imagen = () => {
    let imagenesParaRenderizar = () => {
      let imagenes = [];
      for (let i = 0; i < producto.urlImagen.length; i++) {
        console.log(producto.urlImagen[i]);
        console.log(producto.urlImagen[i].url);
        imagenes.push(
          <div>
            <img
              src={producto.urlImagen[i].url}
              alt={producto.urlImagen[i].alt}
              className="imagenProductoSeleccionado"
              key={producto.nombre}
            />
          </div>
        );
      }
      return imagenes;
    };
    return (
      <Grid item xs={6} sm={6} md={6}>
        {" "}
        <div className="imagenProductoSeleccionado">
          <Carousel showArrows={true}>{imagenesParaRenderizar()}</Carousel>{" "}
        </div>
      </Grid>
    );
  };

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
            15% OFF abonando con transferencia/efectivo.{" "}
          </p>{" "}
          <hr />
          <p className="textoEnviosMediosDePago">
            <span>Punto de retiro:</span> Río IV, Centro. GRATIS <br />
            <span> Envíos a todo el país: </span>
            Entre $1350 a $2300{" "}
            <small>(Dependiendo la localidad/sucursal).</small>
            <br />
            <span>Envíos dentro de Rio Cuarto, CBA: </span>$700{" "}
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
          {imagen()}
          {texto}
        </Grid>
      </Box>
    </div>
  );
}
export default RenderizadoUnicoProducto;
