//devuelve un array de productos y devolverlos renderizados en grilla
import { useState, useEffect } from "react";
import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import { Grid, Box } from "@mui/material";
import CapaDeProducto from "componentes/CapaDeProducto";
import "componentes/responsive.css";
import ProductosService, { BuscarProductosParams } from "service/productosService";
import { TipoProductos } from "tipos/TipoProductos";
import { useLocation } from "react-router-dom";



function ObtenerProductos(props : { tipoProductos : TipoProductos}) {

  const [productos, setProductos] = useState<InformacionDeProducto[]>([]);
  const productosService : ProductosService = new ProductosService();
  const {state} = useLocation();

  useEffect(() => {
    if (props.tipoProductos === TipoProductos.DESTACADOS) {
      productosService.buscarProductosDestacados().then((data) => {
        if(data) {
          setProductos(data);
        }
      });
    } else {
      console.log("location: "+ state.categoriaId);
      let params : BuscarProductosParams = {
        categoriaId : state.categoriaId,
      }
      productosService.buscarProductos(params).then((data) => {
        if (data) {
          setProductos(data);
        }
      });
    }
      
  }, [state.categoriaId]);

  function mostrarProductosDestacados(productos: InformacionDeProducto[]) {
    let contenidoParaRenderizar = [];
    for (let i = 0; i < productos.length; i++) {
      let InformaciónParaMostrar = productos[i];

      contenidoParaRenderizar.push(
        <>
          <Grid key={"prod-grid-"+i} item xs={3} sm={3} md={3}>
            <CapaDeProducto
              informacionProducto={InformaciónParaMostrar}
              key={"capaProd-"+i}
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
