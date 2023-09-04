import { informacionDeImagenes } from "./InformacionDeProducto";
type productosAgregados = {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
  urlImagen: informacionDeImagenes[];
  stock: number;
};

let conjuntoProductosAgregados: productosAgregados[] = [];

export { conjuntoProductosAgregados };
export type { productosAgregados };
