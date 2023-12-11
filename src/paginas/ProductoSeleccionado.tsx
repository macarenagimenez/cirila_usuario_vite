import RenderizadoUnicoProducto from "componentes/RenderizadoUnicoProducto";

function ProductoSeleccionado() {
  let parametros = new URLSearchParams(window.location.search);
  let id = parametros.get("id") || "";

  return (
    <>
      <img
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/encabezado-para-seleccionar-producto-6530333fec196.webp"
        width="100%"
      ></img>
      <img
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/objetopreferido.webp"
        className="imagenHeaderunica"
      ></img>
      <RenderizadoUnicoProducto idProducto={id} />
    </>
  );
}
export default ProductoSeleccionado;
