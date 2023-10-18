import "secciones/Encabezado.css";

import "componentes/responsive.css";
function Encabezado() {
  return (
    <div className="Encabezado">
      <div className="headerWithImage">
        <img
          src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/imagen-header-65303346df13d.webp"
          className="imagenHeaderunica"
        ></img>
        <img
          src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/banner-cuotas-sin-interes-65303347c80a4.webp"
          className="imagenHeaderunica"
        ></img>
      </div>
    </div>
  );
}

export default Encabezado;
