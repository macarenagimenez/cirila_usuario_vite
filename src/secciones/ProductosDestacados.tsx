import LlamadaAPI from "componentes/LlamadaAPI";
import { apiDestacados } from "tipos/APIs";

function ProductosDestacados() {
  const apiURL = apiDestacados.APIurl;
  console.log(apiURL);

  return (
    <section>
      <div className="ContenedorProductosDestacados">
        <LlamadaAPI apiURL={apiURL} />{" "}
        {/* <img
          className="BurbujaDialogo"
          src="imagenes/burbuja_destacados.png"
          alt="Burbuja de dialogo"
        /> */}
      </div>
    </section>
  );
}

export default ProductosDestacados;
