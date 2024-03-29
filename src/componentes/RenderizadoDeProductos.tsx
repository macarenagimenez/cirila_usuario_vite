//devuelve un array de productos y devolverlos renderizados en grilla
import { useState, useEffect } from "react";
import { InformacionDeProducto } from "tipos/InformacionDeProducto";
import { Grid, Box, LinearProgress } from "@mui/material";
import CapaDeProducto from "componentes/CapaDeProducto";
import "componentes/responsive.css";
import ProductosService, { BuscarProductosParams } from "service/productosService";
import { TipoProductos } from "tipos/TipoProductos";
import { useLocation } from "react-router-dom";



function ObtenerProductos(props : { tipoProductos : TipoProductos}) {

  const [productos, setProductos] = useState<InformacionDeProducto[]>([]);
  const productosService : ProductosService = new ProductosService();
  const [cargaDatosFinalizado, setDatosBuscadosFinalizado] = useState<Boolean>(false)

  const {state} = useLocation();
  let parametros = new URLSearchParams(window.location.search);
  let categoriaId = parametros.get("categoriaId") || "";

  useEffect(() => {
    setDatosBuscadosFinalizado(false)
    setProductos([])
    if (props.tipoProductos === TipoProductos.DESTACADOS) {
      productosService.buscarProductosDestacados().then((data) => {
        if(data) {
          setProductos(data);
          setDatosBuscadosFinalizado(true);
        }
      });
    } else {
      let params : BuscarProductosParams = {
        categoriaId : categoriaId,
      }
      productosService.buscarProductos(params).then((data) => {
        if (data) {
          setProductos(data);
          setDatosBuscadosFinalizado(true);
        }
      });
    }
      
  }, [state]);

  function mostrarProductosDestacados(productos: InformacionDeProducto[]) {
    if(cargaDatosFinalizado && productos.length== 0){
      return (
      <div className="cargando">
        Ups, no nos quedan productos de esta categoria...
      </div>)
    }
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
  return (
    <>
      {
        !cargaDatosFinalizado && 
          <LinearProgress color="primary"/>
      }
      
      {mostrarProductosDestacados(productos)}

    </>
    );
}
export default ObtenerProductos;
