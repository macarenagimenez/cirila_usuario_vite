import { useState, useEffect } from "react";
import { FichaDeProducto } from "modelos y tipos/FichaDeProducto";

function ProductosDestacados() {
  const [productos, setProductos] = useState([]);

  const apiURL =
    "https://5o7ndupcrk.execute-api.us-east-1.amazonaws.com/prod/v1.0/bff/catalogo/productos/destacados";

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let productosDestacados: FichaDeProducto[] = [];

        data.map((producto): FichaDeProducto => {
          const nuevoProducto = (producto) => {
            let { id, nombre, precio } = producto;
            let urlImagen = producto.imagenes[0].url;
            return {
              id,
              nombre,
              precio,
              urlImagen,
            };
          };
          productosDestacados.push(nuevoProducto(producto));
          console.log(productosDestacados);
          setProductos(productosDestacados);
          console.log(productos);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <section></section>;
}

export default ProductosDestacados;
