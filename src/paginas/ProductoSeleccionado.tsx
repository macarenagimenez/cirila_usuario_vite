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
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/encabezado-para-seleccionar-producto-6530333fec196.webp"
        width="100%"
      ></img>
      <img
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/banner-cuotas-sin-interes-65303347c80a4.webp"
        className="imagenHeaderunica"
      ></img>
      <LlamadaAPIporID apiUrl={apiURL} />
    </>
  );
}
export default ProductoSeleccionado;
