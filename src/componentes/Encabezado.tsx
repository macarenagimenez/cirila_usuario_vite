import Grid from "@mui/material/Grid";
import "componentes/Encabezado.css";
import { rutaParaEncabezado, rutaDeImagen } from "modelos y tipos/SrcImagenes";

function Encabezado() {
  let srcImagen = (arr: rutaDeImagen[]): JSX.Element[] => {
    let content = [];
    for (let i = 0; i < arr.length; i++) {
      content.push(
        <Grid item xs={12 / arr.length}>
          <img src={arr[i].src} alt={arr[i].alt} className={arr[i].className} />{" "}
          <p className="textoEncabezado">{arr[i].texto}</p>
        </Grid>
      );
    }

    return content;
  };

  return (
    <div className="Encabezado">
      <Grid container spacing={4}>
        {srcImagen(rutaParaEncabezado)}
      </Grid>
    </div>
  );
}

export default Encabezado;
