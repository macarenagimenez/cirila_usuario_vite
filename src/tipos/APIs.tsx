type apiURL = {
  name: string;
  APIurl: string;
  APIkey?: string;
};

let apiDestacados = {
  name: "Productos Destacados",
  APIurl:
    "https://z7kcyiq91c.execute-api.us-east-1.amazonaws.com/prod/v1.0/bff/catalogo/productos/destacados",
};

let apiProductos = {
  name: "Todos los productos",
  APIurl:
    "https://z7kcyiq91c.execute-api.us-east-1.amazonaws.com/prod/v1.0/bff/catalogo/productos",
};
export { apiDestacados, apiProductos };
export type { apiURL };
