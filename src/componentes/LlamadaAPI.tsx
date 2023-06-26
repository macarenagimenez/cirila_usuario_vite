import ObtenerProductos from "componentes/RenderizadoDeProductos";
import "secciones/ProductoDestacado.css";

function LlamadaAPI(props) {
  return (
    <section>
      <div className="ContenedorProductosDestacados">
        <ObtenerProductos apiURL={props.apiURL} />
      </div>
    </section>
  );
}

export default LlamadaAPI;
