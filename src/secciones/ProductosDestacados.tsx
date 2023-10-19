import ObtenerProductos from "componentes/RenderizadoDeProductos";
import { TipoProductos } from "tipos/TipoProductos";

function ProductosDestacados() {
  return (
    <section>
      <div className="ContenedorProductosDestacados">
        <ObtenerProductos tipoProductos={TipoProductos.DESTACADOS} />{" "}
      </div>
    </section>
  );
}

export default ProductosDestacados;
