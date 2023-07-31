import { productosAgregados } from "./CarritoCargado";
import type { DatosUsuario } from "./DatosDeUsuario";

type crearCarritoRequest = {
  datosUsuario: DatosUsuario;
  productos: productosAgregados[];
};

export type { crearCarritoRequest };
