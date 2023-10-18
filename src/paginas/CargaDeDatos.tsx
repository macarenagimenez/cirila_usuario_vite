import SolicitudDeDatosUsuario from "componentes/SolicitudDeDatosUsuario";

export default function CargaDeDatos() {
  return (
    <>
      <img
        width={"100%"}
        src="public\imagenes\encabezado para orden de compra.png"
      ></img>
      <img
        src="\imagenes\3 cuotas sin interes.png"
        className="imagenHeaderunica"
      ></img>
      <SolicitudDeDatosUsuario />
    </>
  );
}
