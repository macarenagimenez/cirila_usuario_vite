import Grid from "@mui/material/Grid";
import "secciones/Encabezado.css";
import { rutaParaEncabezado, rutaDeImagen } from "modelos y tipos/SrcImagenes";
import { TextoParaMarketing } from "modelos y tipos/TextoParaMarketing";

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
      <p className="base">{TextoParaMarketing[0].texto}</p>
      <Grid container spacing={4}>
        {srcImagen(rutaParaEncabezado)}
      </Grid>
    </div>
  );
}

export default Encabezado;
