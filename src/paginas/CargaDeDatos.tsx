import SolicitudDeDatosUsuario from "componentes/SolicitudDeDatosUsuario";

export default function CargaDeDatos() {
  return (
    <>
      <img
        width={"100%"}
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/encabezado-para-orden-de-compra-6530334a61f1f.webp"
      ></img>
      <img
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/objetopreferido.webp"
        className="imagenHeaderunica"
      ></img>
      <SolicitudDeDatosUsuario />
    </>
  );
}
