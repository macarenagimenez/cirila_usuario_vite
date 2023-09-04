// alberga informacion
type informacionDeImagenes = {
  url: string;
  alt: string;
};

type InformacionDeProducto = {
  id: string;
  nombre: string;
  precio: number;
  urlImagen: informacionDeImagenes[];

  stock: number;
  descripcion?: string;
};

export type { InformacionDeProducto, informacionDeImagenes };
