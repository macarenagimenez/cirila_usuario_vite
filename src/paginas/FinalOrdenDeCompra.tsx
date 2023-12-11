import Orden from "componentes/Orden";
export default function FinalOrdenDeCompra() {
  return (
    <>
      <img
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/encabezado-para-orden-final-6530334b9ad15.webp"
        width="100%"
      ></img>
      <img
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/objetopreferido.webp"
        className="imagenHeaderunica"
      ></img>
      <Orden />
    </>
  );
}
