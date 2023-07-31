import { productosAgregados } from "tipos/CarritoCargado";
import { DatosUsuario } from "tipos/DatosDeUsuario";
import type { crearCarritoRequest } from "tipos/crearCarritoRequest";

const apiURL =
  "https://vjsoza9y8e.execute-api.us-east-1.amazonaws.com/prod/v1.0/carritos";

function carritoService(carrito: productosAgregados[], usuario: DatosUsuario) {
  //TODO
  const carritoCargado: crearCarritoRequest = {
    productos: carrito,
    datosUsuario: usuario,
  };
  console.log(carritoCargado);
  fetch(apiURL, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carritoCargado),
  }).catch((err) => {
    console.log(err);
  });
}

export default carritoService;
