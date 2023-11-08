import "componentes/MensajeDespedida.css";
import { Link } from "react-router-dom";
import "componentes/responsive.css";
export default function MensajeDespedida() {
  //TODO estilizar mensaje despedida, mas gracioso
  return (
    <>
     {" "}
      <img
        src="https://prod-cirila-public-product-images.s3.amazonaws.com/imagenes/ImagenesFront/encabezado-para-despedida-653033462faed.webp"
        width="100%"
      ></img>
      <div className="mensajeDespedida">
      <p>
        Hubo un error al procesar tu compra, por favor intentá nuevamente.
        <br />
        <br /> Si el problema persiste, por favor comunicate con nosotros por whatsapp al numero 2657307339
        <br />
        También puede escribinos a nuestro mail: hola@gaiacirila.com.ar
        <br />

      </p>
      <Link to="/resumenOrdenDeCompra">
        <button className="botonBasico botonVolver">
          Reintentar compra
        </button>
      </Link>
    </div>
    </>
    
  );
}
