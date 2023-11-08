import { productosAgregados } from "tipos/CarritoCargado";
import { DatosUsuario } from "tipos/DatosDeUsuario";
import type { crearCarritoRequest } from "tipos/crearCarritoRequest";
  

export default class CarritoService {

  static readonly baseUrl= import.meta.env.VITE_HOST_CARRITOS as string
  static readonly apiKey= import.meta.env.VITE_APIKEY_CARRITOS as string

  CrearCarrito(carrito: productosAgregados[], usuario: DatosUsuario) : Promise<void>{
    //TODO
    const carritoCargado: crearCarritoRequest = {
      productos: carrito,
      datosUsuario: usuario,
    };
    return fetch(CarritoService.baseUrl + "carritos", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":  CarritoService.apiKey,
      },
      body: JSON.stringify(carritoCargado),
    }).then();
  }
  

}


