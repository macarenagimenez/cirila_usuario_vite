import { InformacionDeProducto } from "tipos/InformacionDeProducto";


export default class ProductosService {

    static readonly baseUrl= import.meta.env.VITE_HOST_PRODUCTOS
    static readonly apiKey= import.meta.env.VITE_APIKEY_PRODUCTOS

    async buscarProductos() :Promise<void | InformacionDeProducto[]> {
        return fetch(ProductosService.baseUrl + "bff/catalogo/productos", {
            headers: {
              "Content-Type": "application/json",
              "x-api-key":  ProductosService.apiKey,
            },
          })
          .then((response) => response.json())
          .then((data) => {
    
             let productos: InformacionDeProducto[] = data.map((item: any): InformacionDeProducto => {
                let producto: InformacionDeProducto = {
                    id: item.id,
                    urlImagen: item.imagenes,
          
                    nombre: item.nombre,
                    precio: item.precio,
                    stock: item.stock,
                    descripcion: item.descripcion,
                  };
                  return producto;
            });
            return productos;
          })
          .catch((err) => {
            console.log(err);
          });
    }

    async buscarProductosDestacados() :Promise<void | InformacionDeProducto[]> {
      return fetch(ProductosService.baseUrl + "bff/catalogo/productos/destacados", {
          headers: {
            "Content-Type": "application/json",
            "x-api-key":  ProductosService.apiKey,
          },
        })
        .then((response) => response.json())
        .then((data) => {
  
           let productos: InformacionDeProducto[] = data.map((item: any): InformacionDeProducto => {
              let producto: InformacionDeProducto = {
                  id: item.id,
                  urlImagen: item.imagenes,
        
                  nombre: item.nombre,
                  precio: item.precio,
                  stock: item.stock,
                  descripcion: item.descripcion,
                };
                return producto;
          });
          return productos;
        })
        .catch((err) => {
          console.log(err);
        });
  }

    async buscarProductoPorId(id : string) :Promise<void | InformacionDeProducto> {
        return fetch(ProductosService.baseUrl + "bff/catalogo/productos/" + id, {
            headers: {
              "Content-Type": "application/json",
              "x-api-key":  ProductosService.apiKey,
            },
          })
          .then((response) => response.json())
          .then((data) => {
    
            let producto: InformacionDeProducto = {
                id: data.id,
                urlImagen: data.imagenes,
        
                nombre: data.nombre,
                precio: data.precio,
                stock: data.stock,
                descripcion: data.descripcion,
                };
            return producto;
          })
          .catch((err) => {
            console.log(err);
          });
    }
}