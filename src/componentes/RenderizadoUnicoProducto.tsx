import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import "componentes/RenderizadoUnicoProducto.css";
import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { CarritoContext } from "contexts/CarritoContexto";
import "componentes/responsive.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProductosService from "service/productosService";

function RenderizadoUnicoProducto(props: { idProducto: string }) {
  // let producto = props.producto;

  const productoVacio: InformacionDeProducto = {
    id: "",
    nombre: "",
    precio: 0,
    urlImagen: [],

    stock: 0,
    descripcion: "",
  };
  const [producto, setProducto] =
    useState<InformacionDeProducto>(productoVacio);
  const [cargaDatosFinalizado, setDatosBuscadosFinalizado] =
    useState<Boolean>(false);

  const productosService: ProductosService = new ProductosService();

  useEffect(() => {
    setDatosBuscadosFinalizado(false);
    productosService.buscarProductoPorId(props.idProducto).then((data) => {
      if (data) {
        setProducto(data);
        setDatosBuscadosFinalizado(true);
      }
    });
  }, []);

  const { carrito, agregarAlCarrito } = useContext(CarritoContext);

  let imagen = () => {
    let imagenesParaRenderizar = () => {
      let imagenes = [];
      for (let i = 0; i < producto.urlImagen.length; i++) {
        imagenes.push(
          <div>
            <img
              src={producto.urlImagen[i].url}
              alt={producto.urlImagen[i].alt}
              key={producto.nombre}
            />{" "}
          </div>
        );
      }
      return imagenes;
    };
    return (
      <Grid item xs={6} sm={6} md={6}>
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
      <button className="botonBasico caminoFeliz">
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
            <span>Medios de Pago: </span> Transferencia, tarjetas de crédito.{" "}
          </p>{" "}
          <hr />
          <p className="textoEnviosMediosDePago">
            <span> Envíos a sucursal Correo Argentino: </span>
            $3360
            <br /> <span> Envíos a domicilio: </span>
            $5579
            <br />
            <span>Envíos dentro de Rio Cuarto, CBA: </span>$500 <br />
          </p>
        </div>
      </div>
    </Grid>
  );

  return (
    <>
      {!cargaDatosFinalizado && (
        <Container fixed>
          <CircularProgress
            sx={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
            color="primary"
          />
        </Container>
      )}
      {cargaDatosFinalizado && (
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
      )}
    </>
  );
}
export default RenderizadoUnicoProducto;
