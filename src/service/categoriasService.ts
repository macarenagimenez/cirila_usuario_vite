import { Categorias } from "tipos/Categorias";
export default class CategoriasService {
  static readonly baseUrl = import.meta.env.VITE_HOST_CATEGORIAS;
  static readonly apiKey = import.meta.env.VITE_APIKEY_CATEGORIAS;

  async buscarCategorias(): Promise<void | Categorias[]> {
    return fetch(CategoriasService.baseUrl + "bff/catalogo/categorias", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": CategoriasService.apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {

        function mapCategoria(item: any): Categorias {
          let categoria: Categorias = {
            id: item.id,
            nombre: item.nombre,
            subcategorias: item.subcategorias?.map((item: any) => {
              return mapCategoria(item);
            })
          }
          return categoria;
        }

        let categorias: Categorias[] = data.map((item: any): Categorias => {
          return mapCategoria(item);
        });
        return categorias;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
