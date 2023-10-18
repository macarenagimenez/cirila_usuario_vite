import LlamadaAPIporID from "componentes/LlamadaAPIporID";

function ProductoSeleccionado() {
  let parametros = new URLSearchParams(window.location.search);
  let id = parametros.get("id");
  let apiURL: string =
    "https://z7kcyiq91c.execute-api.us-east-1.amazonaws.com/prod/v1.0/bff/catalogo/productos/" +
    id;

  return (
    <>
      <img
        src="imagenes\encabezado para seleccionar producto.png"
        width="100%"
      ></img>
      <img
        src="\imagenes\3 cuotas sin interes.png"
        className="imagenHeaderunica"
      ></img>
      <LlamadaAPIporID apiUrl={apiURL} />
    </>
  );
}
export default ProductoSeleccionado;
