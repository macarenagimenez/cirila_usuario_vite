import "componentes/CapaDeProducto.css";

function CapaDeProducto(props) {
  console.log(props);
  return (
    <div className="MuestraDeProducto">
      <img
        src={props.informacionProducto.urlImagen}
        alt={props.informacionProducto.nombre}
        // width="200"
        // height="200"
        className="ImagenDelProducto"
      />
      <p className="NombreDelProducto">{props.informacionProducto.nombre}</p>

      <p className="PrecioDelProducto">${props.informacionProducto.precio}</p>
      <p className="BotonAgregarAlCarrito">¡Al carrito 😀!</p>
    </div>
  );
}

export default CapaDeProducto;
