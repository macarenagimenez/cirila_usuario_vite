type Categorias = {
  id: string;
  nombre: string;
  subcategorias: Categorias[];
};

export type { Categorias };
