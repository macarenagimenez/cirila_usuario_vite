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
        <Grid item xs={4} sm={4} md={4}>
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
          display: { xs: "none", md: "flex" },
        }}
      >
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {srcImagen(rutaParaEncabezado)}
        </Grid>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: {
            xs: "flex",
            md: "none",
          },
        }}
      >
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {" "}
          <Grid item xs={6}>
            <img
              src="imagenes/LogoCirila.png"
              alt="logoCirila"
              width={"100%"}
              style={{ marginTop: "15px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/GifParaEncabezado.gif"
              alt="ventas online"
              width={"100%"}
              style={{ borderRadius: "10px" }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <img
          src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/comoComprar_responsive.gif"
          alt="ventas online"
          width={"80%"}
          className="comoComprar_responsive"
        />
      </Box>
    </div>
  );
}

export default Encabezado;
