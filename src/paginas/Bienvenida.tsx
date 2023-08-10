import Encabezado from "secciones/Encabezado";
import MensajeBienvenida from "componentes/MensajeBienvenida";
import { TextoParaMarketing } from "tipos/TextoParaMarketing";
import ProductosDestacados from "secciones/ProductosDestacados";
import "componentes/MensajeBienvenida.css";
import ImagenConTexto from "componentes/ImagenConTexto";
import { rutaParaImagenesConTexto } from "tipos/RutaDeImagenes";
import AnimacionParaPresentacionPagina from "componentes/AnimacionParaPresentacionPagina";
import { rutaParaPresentacionPagina } from "tipos/RutaDeImagenes";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
function Bienvenida() {
  return (
    <div>
      {" "}
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <AnimacionParaPresentacionPagina
          informacionParaPresentacion={rutaParaPresentacionPagina[1]}
        />
      </Box>
      <Encabezado />
      <MensajeBienvenida texto={TextoParaMarketing[1].texto} />
      <ProductosDestacados />
      <Link to="/productos">
        {" "}
        <MensajeBienvenida texto={TextoParaMarketing[2].texto} />
      </Link>
      <ImagenConTexto informacionParaImagen={rutaParaImagenesConTexto[0]} />
    </div>
  );
}

export default Bienvenida;
