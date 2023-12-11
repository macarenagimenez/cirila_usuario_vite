import { Box, TextField, Grid } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import { UsuarioContext } from "contexts/UsuarioContexto";

import { useContext } from "react";

export default function Usuario() {
  const { usuario, actualizarUsuario } = useContext(UsuarioContext);

  let formasDepago = [
    { pago: "Transferencia", disabled: undefined },
    { pago: "Tarjeta de crédito", disabled: undefined },
    { pago: "Con amor 🤣", disabled: true },
  ];

  let formasDeEnvio: string[] = [
    "A domicilio",
    "A sucursal (correo arg)",
    "A domicilio Rio IV, CBA.",
    "Punto de retiro en Villa Mercedes (gratis, a coordinar)",
  ];

  let mediosDeContacto = [
    { medio: "Por WhatsApp", disabled: undefined },
    { medio: "Por correo electrónico", disabled: undefined },
    { medio: "Por telepatía 🧘🏻‍♀️", disabled: true },
  ];

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
          required
          id="outlined-select-currency"
          select
          label="¿Como te gustaría pagar?"
          defaultValue={usuario.FormaPago}
          onChange={(e) => {
            actualizarUsuario("FormaPago", e.target.value);
          }}
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
          required
          id="outlined-select-currency"
          select
          label="¿Envío a domicilio o sucursal Correo Arg.?"
          defaultValue={usuario.FormaEnvio}
          onChange={(e) => {
            actualizarUsuario("FormaEnvio", e.target.value);
          }}
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
          value={mediosDeContacto[i].medio}
          disabled={mediosDeContacto[i].disabled}
        >
          {mediosDeContacto[i].medio}
        </MenuItem>
      );
    }
    return (
      <>
        <TextField
          required
          id="outlined-select-currency"
          select
          label="¿Como te gustaría contactar?"
          defaultValue={usuario.FormaContacto}
          onChange={(e) => {
            actualizarUsuario("FormaContacto", e.target.value);
          }}
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
            <TextField
              required
              id="outlined-basic"
              label="Nombre y Apellido"
              variant="outlined"
              defaultValue={usuario.NombreCompleto}
              onChange={(e) => {
                actualizarUsuario("NombreCompleto", e.target.value);
              }}
            />{" "}
            <TextField
              required
              id="outlined-basic"
              label="Localidad y Provincia"
              variant="outlined"
              defaultValue={usuario.Provincia}
              onChange={(e) => {
                actualizarUsuario("Provincia", e.target.value);
              }}
            />{" "}
            <TextField
              required
              id="outlined-basic"
              label="Domicilio (calle, altura)"
              variant="outlined"
              defaultValue={usuario.Localidad}
              onChange={(e) => {
                actualizarUsuario("Localidad", e.target.value);
              }}
            />{" "}
            <TextField
              required
              id="outlined-basic"
              label="Código Postal"
              variant="outlined"
              defaultValue={usuario.CodigoPostal}
              onChange={(e) => {
                actualizarUsuario("CodigoPostal", e.target.value);
              }}
            />{" "}
            <TextField
              required
              id="outlined-basic"
              label="Correo electrónico"
              variant="outlined"
              defaultValue={usuario.Correo}
              onChange={(e) => {
                actualizarUsuario("Correo", e.target.value);
              }}
            />{" "}
            <TextField
              required
              id="outlined-basic"
              label="Celular (ej: 2657 307339)"
              variant="outlined"
              defaultValue={usuario.Celular}
              onChange={(e) => {
                actualizarUsuario("Celular", e.target.value);
              }}
            />{" "}
            <TextField
              id="outlined-multiline-static"
              label="¿Quisieras agregar alguna indicación?"
              multiline
              rows={4}
              defaultValue={usuario.MensajeOpcional}
              onChange={(e) => {
                actualizarUsuario("MensajeOpcional", e.target.value);
              }}
            />
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
