//devuelve un array de productos y devolverlos renderizados en grilla
import { useState, useEffect } from "react";
import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import { Grid, Box } from "@mui/material";
import CapaDeProducto from "componentes/CapaDeProducto";
import "componentes/responsive.css";
function ObtenerProductos(props: { apiURL: string }) {
  const [productos, setProductos] = useState<InformacionDeProducto[]>([]);
  type productoEntrante = {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    imagenes: [
      {
        orden: number;
        url: string;
        alt: string;
      }
    ];
    destacado: true;
    categorias: null;
    stock: number;
    fechaCreacion: string;
    ultimaFechaActualizacion: string;
  };
  useEffect(() => {
    fetch(props.apiURL, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key":  "tQY0btQz1u4ueo0hBDDLD1fg83uKFyg2925uF0UX",

      },
    })
      .then((response) => response.json())
      .then((data) => {
        let productosDestacados: InformacionDeProducto[] = [];

        data.map((producto: productoEntrante): void => {
          const nuevoProducto = (producto: productoEntrante) => {
            let content: InformacionDeProducto = {
              id: producto.id,
              nombre: producto.nombre,
              precio: producto.precio,
              urlImagen: producto.imagenes,
              stock: producto.stock,
            };
            return content;
          };
          productosDestacados.push(nuevoProducto(producto));
          setProductos(productosDestacados);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function mostrarProductosDestacados(productos: InformacionDeProducto[]) {
    let contenidoParaRenderizar = [];
    for (let i = 0; i < productos.length; i++) {
      let InformaciónParaMostrar = productos[i];

      contenidoParaRenderizar.push(
        <>
          <Grid item xs={3} sm={3} md={3}>
            <CapaDeProducto
              informacionProducto={InformaciónParaMostrar}
              key={i}
            />{" "}
          </Grid>
        </>
      );
    }
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="contenedorColumnasDestacados"
        >
          {contenidoParaRenderizar}
        </Grid>
      </Box>
    );
  }
  return mostrarProductosDestacados(productos);
}
export default ObtenerProductos;
