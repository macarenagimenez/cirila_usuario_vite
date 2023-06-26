//devuelve un array de productos y devolverlos renderizados en grilla
import { useState, useEffect } from "react";
import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import { Grid } from "@mui/material";
import CapaDeProducto from "componentes/CapaDeProducto";

function ObtenerProductos(props) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(props.apiURL)
      .then((response) => response.json())
      .then((data) => {
        let productosDestacados: InformacionDeProducto[] = [];

        data.map((producto): InformacionDeProducto => {
          const nuevoProducto = (producto) => {
            let { id, nombre, precio } = producto;
            let urlImagen = producto.imagenes[0].url;
            return {
              id,
              nombre,
              precio,
              urlImagen,
            };
          };
          productosDestacados.push(nuevoProducto(producto));
          setProductos(productosDestacados);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function mostrarProductosDestacados(productos) {
    let contenidoParaRenderizar = [];
    for (let i = 0; i < productos.length; i++) {
      let InformaciónParaMostrar = productos[i];

      contenidoParaRenderizar.push(
        <>
          <Grid item xs={3}>
            <CapaDeProducto
              informacionProducto={InformaciónParaMostrar}
              key={i}
            />{" "}
          </Grid>
        </>
      );
    }
    return (
      <Grid container spacing={3}>
        {contenidoParaRenderizar}
      </Grid>
    );
  }
  return mostrarProductosDestacados(productos);
}
export default ObtenerProductos;
