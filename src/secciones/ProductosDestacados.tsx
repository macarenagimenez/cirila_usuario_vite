import LlamadaAPI from "componentes/LlamadaAPI";
import { apiDestacados } from "tipos/APIs";

function ProductosDestacados() {
  const apiURL = apiDestacados.APIurl;

  return (
    <section>
      <div className="ContenedorProductosDestacados">
        <LlamadaAPI apiURL={apiURL} />{" "}
      </div>
    </section>
  );
}

export default ProductosDestacados;
