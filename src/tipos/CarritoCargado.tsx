type productosAgregados = {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
  urlImagen: string;
  stock: number;
};

let conjuntoProductosAgregados: productosAgregados[] = [];

export { conjuntoProductosAgregados };
export type { productosAgregados };
