import { useState, useEffect } from "react";
import { InformacionDeProducto } from "modelos y tipos/InformacionDeProducto";
import CapaDeProducto from "componentes/CapaDeProducto";
import { Grid } from "@mui/material";

function ProductosDestacados() {
  const [productos, setProductos] = useState([]);

  const apiURL =
    "https://5o7ndupcrk.execute-api.us-east-1.amazonaws.com/prod/v1.0/bff/catalogo/productos/destacados";

  useEffect(() => {
    fetch(apiURL)
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
          console.log(productos);
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
      <Grid container spacing={2}>
        {contenidoParaRenderizar}
      </Grid>
    );
  }

  return (
    <section>
      <div>{mostrarProductosDestacados(productos)}</div>
    </section>
  );
}

export default ProductosDestacados;
