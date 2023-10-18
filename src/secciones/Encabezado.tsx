import "secciones/Encabezado.css";

import "componentes/responsive.css";
function Encabezado() {
  return (
    <div className="Encabezado">
      <div className="headerWithImage">
        <img
          src="/imagenes/HeaderImagenUnica2.png"
          className="imagenHeaderunica"
        ></img>
        <img
          src="\imagenes\3 cuotas sin interes.png"
          className="imagenHeaderunica"
        ></img>
      </div>
    </div>
  );
}

export default Encabezado;
