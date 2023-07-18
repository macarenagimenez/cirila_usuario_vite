import { Box, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import { DatosUsuario } from "tipos/DatosDeUsuario";

export default function Usuario() {
  const informacionRequerida: string[] = [
    "Nombre y apellido",
    "Provincia",
    "Localidad",
    "CP",
    "E-mail",
    "Celular",
  ];

  function mostrarInformacionRequerida() {
    let content = [];
    for (let i = 0; i < informacionRequerida.length; i++) {
      console.log(informacionRequerida[i]);
      content.push(
        <TextField
          id="outlined-basic"
          label={informacionRequerida[i]}
          variant="outlined"
        />
      );
    }
    return content;
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {" "}
        <p>La parte aburrida 😅</p>
        <hr />
        {mostrarInformacionRequerida()}
      </Box>
    </>
  );
}
