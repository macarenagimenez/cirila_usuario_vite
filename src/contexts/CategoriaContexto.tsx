import { createContext, useEffect, useState } from "react";

import { Categorias } from "tipos/Categorias";
import CategoriasService from "service/categoriasService";

interface CategoriaContextState {
  categoriasContext: Categorias[];
  cargarCategorias: () => void;
  getCategoriaById: (id : string) => Categorias;
}

const categoriaContextStateInitial: CategoriaContextState = {
  categoriasContext: [],
  cargarCategorias: () => void 0,
  getCategoriaById: (_ : string)   => {
    return {
      id: "",
      nombre: "Todos los productos",
      subcategorias: [],
    }
  }
};
export const CategoriaContext = createContext<CategoriaContextState>(
  categoriaContextStateInitial
);

export function CategoriaProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {

  const categoriasService: CategoriasService = new CategoriasService();
  const [categorias, setCategorias] = useState<Categorias[]>([]);

  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = (): void => {
    categoriasService.buscarCategorias().then((data) => {
      if (data) {
        let todos: Categorias = {
          id: "",
          nombre: "Todos los productos",
          subcategorias: [],
        };
        data.push(todos);
        console.log("sin ordenar:", data);
        //ordenar por nombre ascendente
        data.sort((a, b) => a.nombre.localeCompare(b.nombre));
        console.log("ordenado:", data);
        setCategorias(data);
      }
    });

  };

  const getCategoriaById = (id : string) : Categorias => {
    let categoria = categorias.find((categoria) => categoria.id === id);
    if (categoria) {
      return categoria;
    }
    return {
      id: "",
      nombre: "Todos los productos",
      subcategorias: [],
    };
  }

  return (
    <CategoriaContext.Provider
      value={{
        categoriasContext: categorias,
        cargarCategorias,
        getCategoriaById
      }}
    >
      {children}
    </CategoriaContext.Provider>
  );
}
