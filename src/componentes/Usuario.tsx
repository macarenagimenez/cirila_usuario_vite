import { Box, TextField, Grid } from "@mui/material";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { UsuarioContext } from "contexts/UsuarioContexto";

import { useContext } from "react";
import { DatosUsuario } from "tipos/DatosDeUsuario";

export default function Usuario() {
  const { usuario, actualizarUsuario } = useContext(UsuarioContext);

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
          id="outlined-select-currency"
          select
          label="¿Envio a sucursal o domicilio?"
          defaultValue={""}
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
          id="outlined-select-currency"
          select
          label="¿Como te gustaría contactar?"
          defaultValue={""}
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
              id="outlined-basic"
              label="Nombre y apellido"
              variant="outlined"
              onChange={(e) => {
                actualizarUsuario("NombreCompleto", e.target.value);
              }}
            />{" "}
            <TextField
              id="outlined-basic"
              label="Provincia"
              variant="outlined"
              onChange={(e) => {
                actualizarUsuario("Provincia", e.target.value);
              }}
            />{" "}
            <TextField
              id="outlined-basic"
              label="Localidad"
              variant="outlined"
              onChange={(e) => {
                actualizarUsuario("Localidad", e.target.value);
              }}
            />{" "}
            <TextField
              id="outlined-basic"
              label="Código Postal"
              variant="outlined"
              onChange={(e) => {
                actualizarUsuario("Correo", e.target.value);
              }}
            />{" "}
            <TextField
              id="outlined-basic"
              label="Correo electrónico"
              variant="outlined"
              onChange={(e) => {
                actualizarUsuario("Correo", e.target.value);
              }}
            />{" "}
            <TextField
              id="outlined-basic"
              label="Celular"
              variant="outlined"
              onChange={(e) => {
                actualizarUsuario("Celular", e.target.value);
              }}
            />{" "}
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
      Nombre: {usuario.NombreCompleto}
      Provincia: {usuario.Provincia}
      Localidad: {usuario.Localidad}
      CP: {usuario.CP}
      Correo: {usuario.Correo}Celular: {usuario.Celular} forma de pago:{" "}
      {usuario.FormaPago} envio: {usuario.FormaEnvio} forma de contacto:
      {usuario.FormaContacto}
    </>
  );
}
