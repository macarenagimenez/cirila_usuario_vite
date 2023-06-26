import Grid from "@mui/material/Grid";
import "secciones/Encabezado.css";
import {
  rutaParaEncabezado,
  rutaDeImagen,
} from "modelos y tipos/RutaDeImagenes";
import { TextoParaMarketing } from "modelos y tipos/TextoParaMarketing";
import MensajeBienvenida from "componentes/MensajeBienvenida";

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
      <Grid container spacing={4}>
        {srcImagen(rutaParaEncabezado)}
      </Grid>
    </div>
  );
}

export default Encabezado;
