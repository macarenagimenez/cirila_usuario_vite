// alberga informacion
type InformacionDeProducto = {
  id: string;
  nombre: string;
  precio: number;
  urlImagen: string;
  stock?: number;
  descripcion?: string;
};

export type { InformacionDeProducto };
