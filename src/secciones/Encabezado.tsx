import Grid from "@mui/material/Grid";
import "secciones/Encabezado.css";
import { rutaParaEncabezado, rutaDeImagen } from "tipos/RutaDeImagenes";
import { TextoParaMarketing } from "tipos/TextoParaMarketing";
import MensajeBienvenida from "componentes/MensajeBienvenida";
import { Box } from "@mui/material";
import "componentes/responsive.css";
function Encabezado() {
  let srcImagen = (arr: rutaDeImagen[]): JSX.Element[] => {
    let content = [];
    for (let i = 0; i < arr.length; i++) {
      content.push(
        <Grid item xs={12 / arr.length}>
          <img src={arr[i].src} alt={arr[i].alt} className={arr[i].className} />{" "}
        </Grid>
      );
    }

    return content;
  };

  return (
    <div className="Encabezado">
      {" "}
      <MensajeBienvenida texto={TextoParaMarketing[0].texto} />
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container spacing={1}>
          {srcImagen(rutaParaEncabezado)}
        </Grid>
      </Box>
    </div>
  );
}

export default Encabezado;
