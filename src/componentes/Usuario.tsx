import { Box, TextField, Grid } from "@mui/material";
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

  let formasDepago = [
    { pago: "Transferencia 15% OFF", disabled: null },
    { pago: "Tarjeta de crédito", disabled: null },

    { pago: "Con amor 🤣", disabled: true },
  ];

  let formasDeEnvio: string[] = ["A domicilio", "Retiro en sucursal"];

  let mediosDeContacto = [
    { medio: "Por WhatsApp", disabled: null },
    { medio: "Por correo electrónico", disabled: null },
    { medio: "Por telepatía 🧘🏻‍♀️", disabled: true },
  ];

  function mostrarInformacionRequerida() {
    let content = [];
    for (let i = 0; i < informacionRequerida.length; i++) {
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
  function definirFormaDePago() {
    let content = [];
    for (let i = 0; i < formasDepago.length; i++) {
      content.push(
        <MenuItem
          key={formasDepago[i].pago}
          value={formasDepago[i].pago}
          disabled={formasDepago[i].disabled}
        >
          {formasDepago[i].pago}
        </MenuItem>
      );
    }
    return (
      <>
        <TextField
          id="outlined-select-currency"
          select
          label="¿Como te gustaría pagar?"
          defaultValue={""}
        >
          {content}
        </TextField>
      </>
    );
  }
  function definirFormaDeEnvio() {
    let content = [];
    for (let i = 0; i < formasDeEnvio.length; i++) {
      content.push(
        <MenuItem key={formasDeEnvio[i]} value={formasDeEnvio[i]}>
          {formasDeEnvio[i]}
        </MenuItem>
      );
    }
    return (
      <>
        <TextField
          id="outlined-select-currency"
          select
          label="¿Envio a sucursal o domicilio?"
          defaultValue={""}
        >
          {content}
        </TextField>
      </>
    );
  }
  function definirFormaDeContacto() {
    let content = [];
    for (let i = 0; i < mediosDeContacto.length; i++) {
      content.push(
        <MenuItem
          key={mediosDeContacto[i].medio}
          value={mediosDeContacto[i]}
          disabled={mediosDeContacto[i].disabled}
        >
          {mediosDeContacto[i].medio}
        </MenuItem>
      );
    }
    return (
      <>
        <TextField
          id="outlined-select-currency"
          select
          label="¿Como te gustaría contactar?"
          defaultValue={""}
        >
          {content}
        </TextField>
      </>
    );
  }

  return (
    <>
      <Grid item xs={6}>
        <div className="cargaDeDatosUsuario">
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
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="cargaDeDatosUsuario">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            {" "}
            <p>¡No te olvides de esto!</p>
            <hr />
            {definirFormaDePago()}
            <br />
            {definirFormaDeEnvio()} <br />
            {definirFormaDeContacto()}
            <hr />
            <small>
              Recordá que el pago y el envío lo gestionamos via e-mail o
              WhatsApp peeeero necesitamos esta datita para agilizar el trámite
              jeje.
            </small>
          </Box>
        </div>
      </Grid>
    </>
  );
}
