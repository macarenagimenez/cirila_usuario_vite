type apiURL = {
  name: string;
  APIurl: string;
  APIkey?: string;
};

let apiDestacados = {
  name: "Productos Destacados",
  APIurl:
    "https://5o7ndupcrk.execute-api.us-east-1.amazonaws.com/prod/v1.0/bff/catalogo/productos/destacados",
};

let apiProductos = {
  name: "Todos los productos",
  APIurl:
    "https://5o7ndupcrk.execute-api.us-east-1.amazonaws.com/prod/v1.0/bff/catalogo/productos",
};
export { apiDestacados, apiProductos };
export type { apiURL };
